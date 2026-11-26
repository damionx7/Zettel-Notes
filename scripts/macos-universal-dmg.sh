#!/usr/bin/env bash
# Builds one macOS disk image that runs natively on both Apple Silicon and Intel Macs.
#
# Usage: macos-universal-dmg.sh <x64 .app.tar.gz> <arm64 .app.tar.gz> <output.dmg>
#
# The release builds each architecture separately (the updater needs one package per
# architecture). This joins their executables with `lipo`, signs the result ad hoc like the
# per-architecture builds, and packs it with a link to /Applications. It stops if the joined
# executable does not hold both architectures, so a release can never ship one that fails
# with "bad CPU type in executable".
set -euo pipefail

if [ $# -ne 3 ]; then
  echo "usage: $0 <x64 .app.tar.gz> <arm64 .app.tar.gz> <output.dmg>" >&2
  exit 2
fi
x64_archive=$1
arm64_archive=$2
output=$3
app='Zettel Notes.app'
volume='Zettel Notes'

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
mkdir -p "$work/x64" "$work/arm64" "$work/image"
tar -xzf "$x64_archive" -C "$work/x64"
tar -xzf "$arm64_archive" -C "$work/arm64"

require_arch() {
  local file=$1 want=$2 archs
  archs=" $(lipo -archs "$file") "
  case "$archs" in
    *" $want "*) ;;
    *) echo "$file holds [${archs# }] and not $want" >&2; exit 1 ;;
  esac
}

cp -R "$work/arm64/$app" "$work/image/$app"
found=0
for arm64_binary in "$work/arm64/$app/Contents/MacOS/"*; do
  name=$(basename "$arm64_binary")
  x64_binary="$work/x64/$app/Contents/MacOS/$name"
  [ -f "$x64_binary" ] || { echo "The x64 app has no Contents/MacOS/$name" >&2; exit 1; }
  require_arch "$arm64_binary" arm64
  require_arch "$x64_binary" x86_64
  joined="$work/image/$app/Contents/MacOS/$name"
  lipo -create "$x64_binary" "$arm64_binary" -output "$joined"
  require_arch "$joined" arm64
  require_arch "$joined" x86_64
  found=$((found + 1))
done
[ "$found" -gt 0 ] || { echo "No executables in $app/Contents/MacOS" >&2; exit 1; }

# Apple Silicon refuses to run unsigned code. The per-architecture builds carry only the
# linker's ad hoc signature, so sign the joined bundle the same way.
codesign --force --sign - "$work/image/$app"

ln -s /Applications "$work/image/Applications"
mkdir -p "$(dirname "$output")"
rm -f "$output"
hdiutil create -volname "$volume" -srcfolder "$work/image" -ov -format UDZO "$output"
echo "Wrote $output"
