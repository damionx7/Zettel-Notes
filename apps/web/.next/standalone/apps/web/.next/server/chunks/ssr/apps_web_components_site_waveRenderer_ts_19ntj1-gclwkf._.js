module.exports=[73347,a=>{"use strict";let b=`#version 300 es
precision highp float;
in vec3 a_position;
in vec2 a_uv;
uniform float u_time;
uniform vec2 u_size;
uniform vec3 u_rotation;
uniform vec2 u_position;
uniform float u_phase;
uniform float u_scale;
out vec2 v_uv;

vec2 gradient(vec2 p) {
  float angle = fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453) * 6.2831853;
  return vec2(cos(angle), sin(angle));
}
// Simplex lattice, following Stefan Gustavson's Simplex Noise Demystified.
float noise(vec2 p) {
  vec2 cell = floor(p + (p.x + p.y) * 0.366025404);
  vec2 a = p - cell + (cell.x + cell.y) * 0.211324865;
  vec2 corner = a.x > a.y ? vec2(1, 0) : vec2(0, 1);
  vec2 b = a - corner + 0.211324865;
  vec2 c = a - 0.57735027;
  vec3 falloff = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
  return dot(falloff * falloff * falloff, vec3(dot(a,gradient(cell)), dot(b,gradient(cell+corner)), dot(c,gradient(cell+1.0)))) * 32.99;
}
vec3 rotateAround(vec3 p, vec3 axis, float angle) {
  axis = normalize(axis);
  return p * cos(angle) + cross(axis, p) * sin(angle) + axis * dot(axis, p) * (1.0 - cos(angle));
}
void main() {
  v_uv = a_uv;
  float phase = u_time * 0.00012 + u_phase;
  float along = a_position.x / 400.0;
  vec3 p = vec3(
    along * u_size.x * 1.55,
    a_position.z / 200.0 * u_size.y * 0.72,
    a_position.y * 7.0
  );
  p = rotateAround(p, vec3(1,0,0), 0.35 + sin(along * 4.2 + phase * 0.6) * 0.6);
  p.y += sin(along * 5.0 + phase) * u_size.y * 0.16;
  p.z += noise(vec2(along * 3.0 + phase * 0.3, a_uv.x * 2.0)) * 45.0;
  p *= u_scale;
  p = rotateAround(p, vec3(0,0,1), u_rotation.z);
  p = rotateAround(p, vec3(0,1,0), u_rotation.y);
  p = rotateAround(p, vec3(1,0,0), u_rotation.x);
  p.xy += u_position * u_size;
  // A shallow orthographic perspective keeps the folds readable at every size.
  p.x -= p.z * 0.02;
  gl_Position = vec4(p.xy / (u_size * 0.5), -p.z / 10000.0, 1.0);
}`,c=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform vec3 u_primary;
uniform vec3 u_light;
uniform vec3 u_accent;
uniform vec3 u_depth;
uniform float u_sheen;
uniform float u_tint;
uniform vec2 u_size;
out vec4 outColor;
float grain(vec2 p) { return fract(sin(dot(p,vec2(12.9898,78.233))) * 43758.5453); }
void main() {
  // The two sides of the fold share the homepage's ink, mist and warm highlight.
  vec3 light = mix(u_primary, u_light, 0.9);
  vec3 depth = mix(u_primary, u_depth, 0.65);
  vec3 color = mix(light,depth,smoothstep(0.06,0.48,v_uv.x));
  color = mix(color,u_accent,smoothstep(0.48,0.85,v_uv.x));
  color = mix(color,light,smoothstep(0.84,1.0,v_uv.x));
  color = mix(color, mix(u_light,u_accent,0.58), u_tint);
  color = mix(color,vec3(1.0),(0.12 + smoothstep(0.25,0.96,v_uv.y) * 0.25) * u_sheen);
  float slope = clamp(0.5 + dFdy(v_uv.y) * u_size.y * 0.99,0.0,1.0);
  float glow = smoothstep(0.0,0.834,pow(slope,0.806));
  float fibers = sin(v_uv.x * 3400.0 + sin(v_uv.y * 19.0) * 2.0) * 0.5 + 0.5;
  float fineFibers = grain(vec2(floor(v_uv.x * 2200.0),floor(v_uv.y * 16.0)));
  color += (1.0 - glow) * 0.25 * u_sheen;
  color += (fibers * 0.025 + fineFibers * 0.028) * glow * u_sheen;
  color += (grain(gl_FragCoord.xy) - 0.5) * 0.012;
  outColor = vec4(clamp(color,0.0,1.0),1.0);
}`;a.s(["createWaveRenderer",0,function(a){let d=a.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!d)return null;let e=[],f=[],g=d.createProgram(),h=d.createVertexArray(),i=()=>{f.forEach(a=>d.deleteBuffer(a)),e.forEach(a=>d.deleteShader(a)),d.deleteVertexArray(h),d.deleteProgram(g)};if(!g||!h)return i(),null;for(let[a,f]of[[d.VERTEX_SHADER,b],[d.FRAGMENT_SHADER,c]]){let b=d.createShader(a);if(!b||(e.push(b),d.shaderSource(b,f),d.compileShader(b),!d.getShaderParameter(b,d.COMPILE_STATUS)))return i(),null;d.attachShader(g,b)}if(d.linkProgram(g),!d.getProgramParameter(g,d.LINK_STATUS))return i(),null;d.useProgram(g),d.bindVertexArray(h);let j=function(a=128,b=192){if(!Number.isInteger(a)||!Number.isInteger(b)||a<2||b<2||(a+1)*(b+1)>65535)throw RangeError("Wave subdivisions must fit a 16-bit indexed mesh");let c=new Float32Array((a+1)*(b+1)*5),d=new Uint16Array(a*b*6),e=0,f=0;for(let g=0;g<=b;g++){let h=1-g/b,i=4-2*(4*h*(1-h))**9.5;for(let j=0;j<=a;j++){let k=j/a,l=(k-.5)*400,m=i;if(l>=-16&&l<16){let a=(l+16)/32*Math.PI;m=Math.cos(a)*i,l=Math.sin(a)*i-16}else l>=16&&(l=-l,m=-i);if(c.set([(h-.5)*400,m,l+100,k,h],e),e+=5,g<b&&j<a){let b=g*(a+1)+j,c=b+a+1;d.set([b,c,b+1,c,c+1,b+1],f),f+=6}}}return{vertices:c,indices:d}}(),k=d.createBuffer(),l=d.createBuffer();if(!k||!l)return k&&d.deleteBuffer(k),l&&d.deleteBuffer(l),i(),null;f.push(k,l),d.bindBuffer(d.ARRAY_BUFFER,k),d.bufferData(d.ARRAY_BUFFER,j.vertices,d.STATIC_DRAW),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,l),d.bufferData(d.ELEMENT_ARRAY_BUFFER,j.indices,d.STATIC_DRAW);let m=d.getAttribLocation(g,"a_position"),n=d.getAttribLocation(g,"a_uv");d.enableVertexAttribArray(m),d.vertexAttribPointer(m,3,d.FLOAT,!1,20,0),d.enableVertexAttribArray(n),d.vertexAttribPointer(n,2,d.FLOAT,!1,20,12);let o=Object.fromEntries(["u_time","u_size","u_primary","u_light","u_accent","u_depth","u_sheen","u_rotation","u_position","u_phase","u_scale","u_tint"].map(a=>[a,d.getUniformLocation(g,a)])),p=()=>{let b=getComputedStyle(a);for(let[a,c]of[["u_primary","--mf-wave-primary"],["u_light","--mf-wave-light"],["u_accent","--mf-wave-accent"],["u_depth","--mf-wave-depth"]]){let e=b.getPropertyValue(c).trim().replace("#",""),f=[0,2,4].map(a=>parseInt(e.slice(a,a+2),16)/255);d.uniform3f(o[a],f[0],f[1],f[2])}let c=Number.parseFloat(b.getPropertyValue("--mf-wave-sheen"));d.uniform1f(o.u_sheen,Number.isFinite(c)?Math.min(1,Math.max(0,c)):1)};p(),d.enable(d.DEPTH_TEST),d.clearColor(0,0,0,0);let q=()=>{let b=Math.max(1,a.clientWidth),c=Math.max(1,a.clientHeight),e=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(24e5/(b*c)));a.width=Math.max(1,Math.round(b*e)),a.height=Math.max(1,Math.round(c*e)),d.viewport(0,0,a.width,a.height),d.uniform2f(o.u_size,b,c)};return q(),{resize:q,updateColors:p,draw(a){d.uniform1f(o.u_time,a),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),d.uniform1f(o.u_phase,2.7),d.uniform1f(o.u_scale,.92),d.uniform1f(o.u_tint,.48),d.uniform3f(o.u_rotation,-.35,.12,-.28),d.uniform2f(o.u_position,-.04,.34),d.drawElements(d.TRIANGLES,j.indices.length,d.UNSIGNED_SHORT,0),d.clear(d.DEPTH_BUFFER_BIT),d.uniform1f(o.u_phase,.4),d.uniform1f(o.u_scale,1.08),d.uniform1f(o.u_tint,.08),d.uniform3f(o.u_rotation,.18,-.08,.24),d.uniform2f(o.u_position,.06,-.38),d.drawElements(d.TRIANGLES,j.indices.length,d.UNSIGNED_SHORT,0)},dispose:i}}],73347)}];

//# sourceMappingURL=apps_web_components_site_waveRenderer_ts_19ntj1-gclwkf._.js.map