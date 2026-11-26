(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,50953,e=>{"use strict";let t=`#version 300 es
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
}`,o=`#version 300 es
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
}`;e.s(["createWaveRenderer",0,function(e){let r=e.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!r)return null;let i=[],a=[],n=r.createProgram(),l=r.createVertexArray(),u=()=>{a.forEach(e=>r.deleteBuffer(e)),i.forEach(e=>r.deleteShader(e)),r.deleteVertexArray(l),r.deleteProgram(n)};if(!n||!l)return u(),null;for(let[e,a]of[[r.VERTEX_SHADER,t],[r.FRAGMENT_SHADER,o]]){let t=r.createShader(e);if(!t||(i.push(t),r.shaderSource(t,a),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)))return u(),null;r.attachShader(n,t)}if(r.linkProgram(n),!r.getProgramParameter(n,r.LINK_STATUS))return u(),null;r.useProgram(n),r.bindVertexArray(l);let c=function(e=128,t=192){if(!Number.isInteger(e)||!Number.isInteger(t)||e<2||t<2||(e+1)*(t+1)>65535)throw RangeError("Wave subdivisions must fit a 16-bit indexed mesh");let o=new Float32Array((e+1)*(t+1)*5),r=new Uint16Array(e*t*6),i=0,a=0;for(let n=0;n<=t;n++){let l=1-n/t,u=4-2*(4*l*(1-l))**9.5;for(let c=0;c<=e;c++){let s=c/e,f=(s-.5)*400,_=u;if(f>=-16&&f<16){let e=(f+16)/32*Math.PI;_=Math.cos(e)*u,f=Math.sin(e)*u-16}else f>=16&&(f=-f,_=-u);if(o.set([(l-.5)*400,_,f+100,s,l],i),i+=5,n<t&&c<e){let t=n*(e+1)+c,o=t+e+1;r.set([t,o,t+1,o,o+1,t+1],a),a+=6}}}return{vertices:o,indices:r}}(),s=r.createBuffer(),f=r.createBuffer();if(!s||!f)return s&&r.deleteBuffer(s),f&&r.deleteBuffer(f),u(),null;a.push(s,f),r.bindBuffer(r.ARRAY_BUFFER,s),r.bufferData(r.ARRAY_BUFFER,c.vertices,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,f),r.bufferData(r.ELEMENT_ARRAY_BUFFER,c.indices,r.STATIC_DRAW);let _=r.getAttribLocation(n,"a_position"),p=r.getAttribLocation(n,"a_uv");r.enableVertexAttribArray(_),r.vertexAttribPointer(_,3,r.FLOAT,!1,20,0),r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,20,12);let m=Object.fromEntries(["u_time","u_size","u_primary","u_light","u_accent","u_depth","u_sheen","u_rotation","u_position","u_phase","u_scale","u_tint"].map(e=>[e,r.getUniformLocation(n,e)])),v=()=>{let t=getComputedStyle(e);for(let[e,o]of[["u_primary","--mf-wave-primary"],["u_light","--mf-wave-light"],["u_accent","--mf-wave-accent"],["u_depth","--mf-wave-depth"]]){let i=t.getPropertyValue(o).trim().replace("#",""),a=[0,2,4].map(e=>parseInt(i.slice(e,e+2),16)/255);r.uniform3f(m[e],a[0],a[1],a[2])}let o=Number.parseFloat(t.getPropertyValue("--mf-wave-sheen"));r.uniform1f(m.u_sheen,Number.isFinite(o)?Math.min(1,Math.max(0,o)):1)};v(),r.enable(r.DEPTH_TEST),r.clearColor(0,0,0,0);let h=()=>{let t=Math.max(1,e.clientWidth),o=Math.max(1,e.clientHeight),i=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(24e5/(t*o)));e.width=Math.max(1,Math.round(t*i)),e.height=Math.max(1,Math.round(o*i)),r.viewport(0,0,e.width,e.height),r.uniform2f(m.u_size,t,o)};return h(),{resize:h,updateColors:v,draw(e){r.uniform1f(m.u_time,e),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.uniform1f(m.u_phase,2.7),r.uniform1f(m.u_scale,.92),r.uniform1f(m.u_tint,.48),r.uniform3f(m.u_rotation,-.35,.12,-.28),r.uniform2f(m.u_position,-.04,.34),r.drawElements(r.TRIANGLES,c.indices.length,r.UNSIGNED_SHORT,0),r.clear(r.DEPTH_BUFFER_BIT),r.uniform1f(m.u_phase,.4),r.uniform1f(m.u_scale,1.08),r.uniform1f(m.u_tint,.08),r.uniform3f(m.u_rotation,.18,-.08,.24),r.uniform2f(m.u_position,.06,-.38),r.drawElements(r.TRIANGLES,c.indices.length,r.UNSIGNED_SHORT,0)},dispose:u}}],50953)}]);