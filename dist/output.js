document.write('<!doctype html><meta charset=UTF-8><title>Meat Brain Cell Optimizer</title><meta content="width=device-width,initial-scale=1" name=viewport><link rel="shortcut icon" type=image/x-icon><style>:root{--color-0:#ecfffb;--color-1:#e4c200;--color-2:#c330b2;--color-3:#6e0067;--color-4:#3300c0;--color-5:#070044}#c2d{position:absolute;width:100vmin;aspect-ratio:1;max-width:600px;image-rendering:pixelated}body,html{user-select:none;margin:0;background-color:var(--color-5);display:flex;justify-content:center;align-items:center;height:100%;width:100%;color:var(--color-0);font-family:Arial,Helvetica,sans-serif;font-size:20px}h1{text-shadow:5px 5px var(--color-2),10px 10px var(--color-3),15px 15px var(--color-4);font-size:2em;animation:.8s linear infinite shadow}@keyframes shadow{from{text-shadow:0 0 var(--color-0),2px 2px var(--color-2),7px 7px var(--color-3),14px 14px 1px var(--color-4)}to{text-shadow:2px 2px var(--color-2),7px 7px var(--color-3),14px 14px 1px var(--color-4),21px 21px 5px var(--color-5)}}.hide{display:none!important}#intro,#menu,#result{height:100%;width:100%;position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2vmax;box-sizing:border-box}ul{list-style:none;padding:0;text-align:center;display:flex;flex-direction:column;align-content:stretch}ul button{--button-color:var(--color-2);color:var(--color-5);background-color:var(--color-0);padding:.5em;margin:.5em 0;user-select:none;cursor:pointer;font-variant-caps:small-caps;font-weight:700;font-size:20px;box-shadow:5px 5px var(--button-color);border:3px solid var(--button-color);transition:transform .1s,box-shadow .1s;width:100%;display:inline-flex;justify-content:center;gap:1em}ul button :last-child{margin-left:auto}ul button:active{transform:translate(4px,4px);box-shadow:1px 1px var(--button-color)}ul button:hover{--button-color:var(--color-1)}#intro{max-width:40ch}#controls{position:fixed;bottom:0;width:90%;text-align:center;margin:2vh 0;display:flex;justify-content:center;transform:translateY(calc(100% + 2vh));transition:.5s ease-in-out .1s}#controls.slide{transform:translateY(0)}#fps{position:fixed;top:0;left:0;color:var(--color-1);padding:1vh;font-size:10px}input[type=range]{-webkit-appearance:none;max-width:100%;width:400px;background:0 0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:25px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:var(--color-2);border-radius:25px;border:5px solid var(--color-5)}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:40px;width:40px;border-radius:40px;background:var(--color-5);cursor:pointer;-webkit-appearance:none;margin-top:-12.5px}input[type=range]:focus::-webkit-slider-runnable-track{background:var(--color-2)}input[type=range]::-moz-range-track{width:100%;height:15px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:var(--color-2);border-radius:25px;border:5px solid var(--color-5)}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:40px;width:40px;border-radius:40px;background:var(--color-5);cursor:pointer}#submit{padding:1vh;margin-left:4vh;border-radius:999px;height:100px;width:100px;background:var(--color-1);border:3px solid var(--color-5);box-shadow:5px 5px var(--color-5);font-size:30px;font-weight:700;color:var(--color-5);transition:.1s ease-in-out 50ms;flex-shrink:0}#submit.clicked{transform:translate(4px,4px);box-shadow:1px 1px var(--color-5)}#lights{position:fixed;top:0;display:flex;transform:translateY(calc(-150% + 2vh));transition:.5s ease-in-out .1s;padding:3vh}#controls.slide+#lights{transform:translateY(0)}.led{--color-lights:var(--color-5);position:relative;height:15px;width:20px;background:var(--color-lights);margin:1vh}.led::after{content:"";height:6px;width:28px;position:absolute;background:var(--color-lights);bottom:-6px;left:-4px}.led::before{content:"";height:10px;width:20px;position:absolute;background:var(--color-lights);top:-10px;left:0;border-radius:99px 99px 0 0}.led.on{--color-lights:var(--color-0)}</style><canvas height=1080 id=c2d width=1920></canvas><div id=menu><h1><span>Meat Brain</span><br><span>Cell Optimizer</span></h1><ul><li><button id=start>Start</button><li><button id=contGame>Continue</button><li><button id=fullscreen>Fullscreen</button></ul></div><div class=hide id=intro><p>Although humans are mere meat brains, you are still surprisingly good at pattern recognition. You are too primitive to understand why, but it’s instinctive to you. In this experiment we’re testing if humanity is an efficient and reliable way to help optimize our multi-dimensional penta-quantized energy cells.<p>You must not worry about the details of the technology; your limited brain could not begin to comprehend. Focus on your instinct to find the most harmonious and optimized configurations of the parameters you’re given.<ul><li><button id=play>Uh, OK...</button></ul></div><div class=hide id=result><h2 id=resultTitle></h2><p id=resultText><ul><li><button id=nextLevel><span>Continue</span><span>↠</span></button><li><button id=retry><span>Retry</span><span>↺</span></button></ul></div><div id=controls><input id=range max=100 min=0 step=10 type=range value=25><button id=submit>OK</button></div><div id=lights><div class=led></div><div class=led></div><div class=led></div><div class=led></div><div class=led></div></div><div id=fps></div>');function a(){var b=n;b.m.F=b.F;b.m.D=b.D;b.m.A=b.A;b.m.I=b.I;let c=navigator.getGamepads()[0],d=b.h.get("KeyA")||b.h.get("ArrowLeft")||c?.buttons[14].pressed?-1:0,e=b.h.get("KeyD")||b.h.get("ArrowRight")||c?.buttons[15].pressed?1:0,h=b.h.get("KeyW")||b.h.get("ArrowUp")||c?.buttons[12].pressed?-1:0,k=b.h.get("KeyS")||b.h.get("ArrowDown")||c?.buttons[13].pressed?1:0;b.j.x=d+e||c?.axes[0]||0;b.j.y=h+k||c?.axes[1]||0;.1>Math.hypot(b.j.x,b.j.y)&&(b.j.x=0,b.j.y=0);b.F=0>b.j.y;b.D=0<b.j.y;b.A=!!(b.h.get("Enter")||
c?.buttons[0].pressed||c?.buttons[9].pressed);b.I=!(!b.h.get("Escape")&&!c?.buttons[8].pressed)}class p{constructor(){this.I=this.A=this.D=this.F=!1;this.h=new Map;this.m={F:this.F,D:this.D,A:this.A,I:this.I};document.addEventListener("keydown",b=>{this.h.set(b.code,!0)});document.addEventListener("keyup",b=>{this.h.set(b.code,!1)});this.j=new DOMPoint}}let n=new p;class q{constructor(...b){this.h=x;this.h.H?.(...b)}u(b,...c){this.h.T?.();this.h=b;this.h.H?.(...c)}}let y;var z=window.getComputedStyle(document.body);
let A=z.getPropertyValue("--color-0");z.getPropertyValue("--color-1");z.getPropertyValue("--color-2");z.getPropertyValue("--color-3");let B=z.getPropertyValue("--color-4");z.getPropertyValue("--color-5");class L{constructor(){let b=()=>{c2d.height=c2d.clientHeight;c2d.width=c2d.clientWidth};window.addEventListener("resize",b);b()}}new L;var M={title:"Great job",text:"Your test results are very promising."};
class N{constructor(){this.text=this.title=""}H(){resultTitle.innerText=this.title;resultText.innerText=this.text;result.classList.remove("hide")}K(){}}
let O=new N,P={i:{},reset:b=>{P.canvas=b;P.ga=0;P.current={};P.next={};P.V={};P.g=b.getContext("webgl2");P.g.blendFunc(770,771);P.g.activeTexture(33984);P.l=P.g.createProgram();P.g.enable(2884);P.g.shaderSource(b=P.g.createShader(35633),"#version 300 es\n      precision highp float;                        // Set default float precision\n      in vec4 pos, col, uv, normal;                 // Vertex attributes: position, color, texture coordinates, normal (if any)\n      uniform mat4 pv, eye, m, im;                  // Uniform transformation matrices: projection * view, eye, model, inverse model\n      uniform vec4 bb;                              // If the current shape is a billboard: bb = [w, h, 1.0, 0.0]\n      out vec4 v_pos, v_col, v_uv, v_normal;        // Varyings sent to the fragment shader: position, color, texture coordinates, normal (if any)\n      void main() {                                 \n        gl_Position = pv * (                        // Set vertex position: p * v * v_pos\n          v_pos = bb.z > 0.                         // Set v_pos varying:\n          ? m[3] + eye * (pos * bb)                 // Billboards always face the camera:  p * v * distance + eye * (position * [w, h, 1.0, 0.0])\n          : m * pos                                 // Other objects rotate normally:      p * v * m * position\n        );                                          \n        v_col = col;                                // Set varyings \n        v_uv = uv;\n        v_normal = transpose(inverse(m)) * normal;  // recompute normals to match model thansformation\n      }");P.g.compileShader(b);
P.g.attachShader(P.l,b);console.log("vertex shader:",P.g.getShaderInfoLog(b)||"OK");P.g.shaderSource(b=P.g.createShader(35632),"#version 300 es\n      precision highp float;                  // Set default float precision\n      in vec4 v_pos, v_col, v_uv, v_normal;   // Varyings received from the vertex shader: position, color, texture coordinates, normal (if any)\n      uniform vec3 light;                     // Uniform: light direction, smooth normals enabled\n      uniform vec4 o;                         // options [smooth, shading enabled, ambient, mix]\n      uniform sampler2D sampler;              // Uniform: 2D texture\n      out vec4 c;                             // Output: final fragment color\n\n      // The code below displays colored / textured / shaded fragments\n      void main() {\n        c = mix(texture(sampler, v_uv.xy), v_col, o[3]);  // base color (mix of texture and rgba)\n        if(o[1] > 0.){                                    // if lighting/shading is enabled:\n          c = vec4(                                       // output = vec4(base color RGB * (directional shading + ambient light)), base color Alpha\n            c.rgb * (max(0., dot(light, -normalize(       // Directional shading: compute dot product of light direction and normal (0 if negative)\n              o[0] > 0.                                   // if smooth shading is enabled:\n              ? vec3(v_normal.xyz)                        // use smooth normals passed as varying\n              : cross(dFdx(v_pos.xyz), dFdy(v_pos.xyz))   // else, compute flat normal by making a cross-product with the current fragment and its x/y neighbours\n            )))\n            + o[2]),                                      // add ambient light passed as uniform\n            c.a                                           // use base color's alpha\n          );\n        }\n      }");
P.g.compileShader(b);P.g.attachShader(P.l,b);console.log("fragment shader:",P.g.getShaderInfoLog(b)||"OK");P.g.linkProgram(P.l);P.g.useProgram(P.l);console.log("program:",P.g.getProgramInfoLog(P.l)||"OK");P.g.clearColor(1,1,1,1);P.clearColor=c=>P.g.clearColor(...P.S(c));P.clearColor("fff");P.g.enable(2929);P.fa({y:-1});P.B({M:30});setTimeout(P.Z,16)},u:(b,c,d)=>{let e;(e=b).n||(e.n="o"+P.ga++);b.size&&(b.w=b.N=b.d=b.size);b.t&&b.t.width&&!P.V[b.t.id]&&(d=P.g.createTexture(),P.g.pixelStorei(37441,
!0),P.g.bindTexture(3553,d),P.g.pixelStorei(37440,1),P.g.texImage2D(3553,0,6408,6408,5121,b.t),P.g.generateMipmap(3553),P.V[b.t.id]=d);b.M&&(P.ha=new DOMMatrix([1/Math.tan(b.M*Math.PI/180)/(P.canvas.width/P.canvas.height),0,0,0,0,1/Math.tan(b.M*Math.PI/180),0,0,0,0,-1001/999,-1,0,0,-2002/999,0]));b={type:c,...(P.current[b.n]=P.next[b.n]||{w:1,N:1,d:1,x:0,y:0,z:0,rx:0,ry:0,ka:0,b:"888",mode:4,P:0}),...b,f:0};P.i[b.type]?.C&&!P.i?.[b.type].ba&&(P.g.bindBuffer(34962,P.i[b.type].ba=P.g.createBuffer()),
P.g.bufferData(34962,new Float32Array(P.i[b.type].C),35044),!P.i[b.type].G&&P.smooth&&P.smooth(b),P.i[b.type].G&&(P.g.bindBuffer(34962,P.i[b.type].$=P.g.createBuffer()),P.g.bufferData(34962,new Float32Array(P.i[b.type].G.flat()),35044)));P.i[b.type]?.L&&!P.i[b.type].W&&(P.g.bindBuffer(34962,P.i[b.type].W=P.g.createBuffer()),P.g.bufferData(34962,new Float32Array(P.i[b.type].L),35044));P.i[b.type]?.indices&&!P.i[b.type].O&&(P.g.bindBuffer(34963,P.i[b.type].O=P.g.createBuffer()),P.g.bufferData(34963,
new Uint16Array(P.i[b.type].indices),35044));b.t?b.t&&!b.P&&(b.P=0):b.P=1;P.next[b.n]=b},Z:(b,c,d,e,h=[])=>{c=b-P.ea;P.ea=b;requestAnimationFrame(P.Z);P.next?.B?.v&&P.U(P.next[P.next.B.v],c,1);d=P.animation("camera");P.next?.B?.v&&d.preMultiplySelf(P.next[P.next.B.v].R||P.next[P.next.B.v].o);P.g.uniformMatrix4fv(P.g.getUniformLocation(P.l,"eye"),!1,d.toFloat32Array());d.invertSelf();d.preMultiplySelf(P.ha);P.g.uniformMatrix4fv(P.g.getUniformLocation(P.l,"pv"),!1,d.toFloat32Array());P.g.clear(16640);
for(e in P.next)P.next[e].t||1!=P.S(P.next[e].b)[3]?h.push(P.next[e]):P.U(P.next[e],c);h.sort((k,m)=>P.Y(m)-P.Y(k));P.g.enable(3042);for(e of h)["plane","billboard"].includes(e.type)&&P.g.depthMask(0),P.U(e,c),P.g.depthMask(1);P.g.disable(3042);P.g.uniform3f(P.g.getUniformLocation(P.l,"light"),P.s("light","x"),P.s("light","y"),P.s("light","z"))},U:(b,c,d=["camera","light","group"].includes(b.type),e)=>{b.t&&(P.g.bindTexture(3553,P.V[b.t.id]),P.g.uniform1i(P.g.getUniformLocation(P.l,"sampler"),0));
b.f<b.a&&(b.f+=c);b.f>b.a&&(b.f=b.a);P.next[b.n].o=P.animation(b.n);P.next[b.v]&&P.next[b.n].o.preMultiplySelf(P.next[b.v].R||P.next[b.v].o);P.g.uniformMatrix4fv(P.g.getUniformLocation(P.l,"m"),!1,(P.next[b.n].R||P.next[b.n].o).toFloat32Array());P.g.uniformMatrix4fv(P.g.getUniformLocation(P.l,"im"),!1,(new DOMMatrix(P.next[b.n].R||P.next[b.n].o)).invertSelf().toFloat32Array());d||(P.g.bindBuffer(34962,P.i[b.type].ba),P.g.vertexAttribPointer(e=P.g.getAttribLocation(P.l,"pos"),3,5126,!1,0,0),P.g.enableVertexAttribArray(e),
P.i[b.type].W&&(P.g.bindBuffer(34962,P.i[b.type].W),P.g.vertexAttribPointer(e=P.g.getAttribLocation(P.l,"uv"),2,5126,!1,0,0),P.g.enableVertexAttribArray(e)),(b.ia||P.i[b.type].da)&&P.i[b.type].$&&(P.g.bindBuffer(34962,P.i[b.type].$),P.g.vertexAttribPointer(e=P.g.getAttribLocation(P.l,"normal"),3,5126,!1,0,0),P.g.enableVertexAttribArray(e)),P.g.uniform4f(P.g.getUniformLocation(P.l,"o"),b.ia,(3<b.mode||3<P.g[b.mode])&&!b.aa?1:0,P.ca||.2,b.P),P.g.uniform4f(P.g.getUniformLocation(P.l,"bb"),b.w,b.N,"billboard"==
b.type,0),P.i[b.type].O&&P.g.bindBuffer(34963,P.i[b.type].O),P.g.vertexAttrib4fv(P.g.getAttribLocation(P.l,"col"),P.S(b.b)),P.i[b.type].O?P.g.drawElements(+b.mode||P.g[b.mode],P.i[b.type].indices.length,5123,0):P.g.drawArrays(+b.mode||P.g[b.mode],0,P.i[b.type].C.length/3))},s:(b,c)=>P.next[b]?.a?P.current[b][c]+P.next[b].f/P.next[b].a*(P.next[b][c]-P.current[b][c]):P.next[b][c],animation:(b,c=new DOMMatrix)=>P.next[b]?c.translateSelf(P.s(b,"x"),P.s(b,"y"),P.s(b,"z")).rotateSelf(P.s(b,"rx"),P.s(b,
"ry"),P.s(b,"rz")).scaleSelf(P.s(b,"w"),P.s(b,"h"),P.s(b,"d")):c,Y:(b,c=P.next.B)=>b?.o&&c?.o?(c.o.m41-b.o.m41)**2+(c.o.m42-b.o.m42)**2+(c.o.m43-b.o.m43)**2:0,ja:b=>P.ca=b,S:b=>[...b.replace("#","").match(5>b.length?/./g:/../g).map(c=>("0x"+c)/(5>b.length?15:255)),1],add:(b,c)=>{P.i[b]=c;c.G&&(P.i[b].da=1);P[b]=d=>P.u(d,b)},group:b=>P.u(b,"group"),move:(b,c)=>setTimeout(()=>{P.u(b)},c||1),delete:(b,c)=>setTimeout(()=>{delete P.next[b]},c||1),B:(b,c)=>setTimeout(()=>{P.u(b,b.n="camera")},c||1),fa:(b,
c)=>c?setTimeout(()=>{P.u(b,b.n="light")},c):P.u(b,b.n="light"),smooth:(b,c={},d=[],e,h,k,m,l,g,f,C,D,E,w)=>{P.i[b.type].G=[];for(k=0;k<P.i[b.type].C.length;k+=3)d.push(P.i[b.type].C.slice(k,k+3));(e=P.i[b.type].indices)?h=1:(e=d,h=0);for(k=0;k<2*e.length;k+=3){m=k%e.length;l=d[C=h?P.i[b.type].indices[m]:m];g=d[D=h?P.i[b.type].indices[m+1]:m+1];f=d[E=h?P.i[b.type].indices[m+2]:m+2];let r=[g[0]-l[0],g[1]-l[1],g[2]-l[2]],t=[f[0]-g[0],f[1]-g[1],f[2]-g[2]];w=k>m?[0,0,0]:[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-
r[0]*t[2],r[0]*t[1]-r[1]*t[0]];let F,G;(F=c)[G=l[0]+"_"+l[1]+"_"+l[2]]||(F[G]=[0,0,0]);let H,I;(H=c)[I=g[0]+"_"+g[1]+"_"+g[2]]||(H[I]=[0,0,0]);let J,K;(J=c)[K=f[0]+"_"+f[1]+"_"+f[2]]||(J[K]=[0,0,0]);P.i[b.type].G[C]=c[l[0]+"_"+l[1]+"_"+l[2]]=c[l[0]+"_"+l[1]+"_"+l[2]].map((u,v)=>u+w[v]);P.i[b.type].G[D]=c[g[0]+"_"+g[1]+"_"+g[2]]=c[g[0]+"_"+g[1]+"_"+g[2]].map((u,v)=>u+w[v]);P.i[b.type].G[E]=c[f[0]+"_"+f[1]+"_"+f[2]]=c[f[0]+"_"+f[1]+"_"+f[2]].map((u,v)=>u+w[v])}}};
P.add("plane",{C:[.5,.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0],L:[1,1,0,1,0,0,1,1,0,0,1,0]});
P.add("cube",{C:[.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],L:[1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,
1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0]});P.X=b=>{P.u(b,"cube")};P.add("pyramid",{C:[-.5,-.5,.5,.5,-.5,.5,0,.5,0,.5,-.5,.5,.5,-.5,-.5,0,.5,0,.5,-.5,-.5,-.5,-.5,-.5,0,.5,0,-.5,-.5,-.5,-.5,-.5,.5,0,.5,0,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],L:[0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,1,1,0,1,0,0,1,1,0,0,1,0]});
((b,c,d,e,h,k,m=[],l=[],g=[],f=20)=>{for(d=0;d<=f;d++)for(e=d*Math.PI/f,b=0;b<=f;b++)c=2*b*Math.PI/f,m.push(+(Math.sin(c)*Math.sin(e)/2).toFixed(6),+(Math.cos(e)/2).toFixed(6),+(Math.cos(c)*Math.sin(e)/2).toFixed(6)),g.push(3.5*Math.sin(b/f),-Math.sin(d/f)),b<f&&d<f&&l.push(h=d*(f+1)+b,k=h+(f+1),h+1,h+1,k,k+1);P.add("sphere",{C:m,L:g,indices:l})})();
function Q(b){document.removeEventListener("submit",b.m);submit.classList.add("clicked");setTimeout(()=>{var c=y,d=c.u;O.title=M.title;O.text=M.text;d.call(c,O)},500)}
class R{constructor(){this.h=this.j=0;this.speed=-.5;this.counter=0;this.m=b=>{this.speed=2*(b?.target?.value-50)/100};this.J=()=>Q(this)}H(){controls.classList.add("slide");range.value="25";P.reset(c2d);P.clearColor(B);P.B({y:.5,z:7,rx:-7,M:10});document.body.style.background=B;P.group({n:"G1",ry:0});P.X({v:"G1",w:1.5,N:1,d:1,x:0,y:0,aa:1,b:A});P.group({n:"G2",ry:0});P.X({v:"G2",w:1.5,N:1,d:1,x:0,y:0,aa:1,b:A});range.addEventListener("input",this.m);submit.addEventListener("click",this.J)}T(){P.reset(c2d);
P.clearColor(B);document.removeEventListener("input",this.m);controls.classList.remove("slide")}K(){this.j++;360<this.j&&(this.j-=360);P.move({n:"G1",ry:this.j});this.h+=this.speed;360<this.h?this.h-=360:0>this.h&&(this.h+=360);P.move({n:"G2",ry:this.h});this.counter++;if(20<this.counter){this.counter=0;let b=Math.round(5*Math.pow((1-Math.abs(1-this.speed))*(1-Math.abs(this.j%180-this.h%180)/180),5));for(let c=0;5>c;c++)lights.children[c].classList.toggle("on",b>=c+1)}}}let S=new R;
class T{H(){y.u(S)}K(){}}let U=new T;class V{H(){intro.classList.remove("hide");play.addEventListener("click",this.h)}T(){intro.classList.add("hide");play.removeEventListener("click",this.h)}K(){n.A&&!n.m.A&&this.h()}h(){y.u(U)}}let W=new V;
class aa{constructor(){this.h=0;this.buttons=[this.j,this.m,this.J]}H(){menu.classList.remove("hide");start.addEventListener("click",this.j);contGame.addEventListener("click",this.m);fullscreen.addEventListener("click",this.J)}T(){menu.classList.add("hide");start.removeEventListener("click",this.j);contGame.removeEventListener("click",this.m);fullscreen.removeEventListener("click",this.J)}K(){n.F&&!n.m.F&&(this.h--,0>this.h&&(this.h=this.buttons.length-1));n.D&&!n.m.D&&(this.h++,this.h>=this.buttons.length&&
(this.h=0));if(n.A&&!n.m.A){let b=this.buttons[this.h];b&&b()}}j(){y.u(W)}m(){}J(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}}let x=new aa;document.querySelector('link[type="image/x-icon"]').href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E\ud83d\udd35%3C/text%3E%3C/svg%3E";y=new q(...[]);let X=0,Y=1E3/60,Z=[];
(function ba(b){let d=b-X;d>=Y&&(X=b-d%Y,a(),y.h.K(),Z.push(1E3/d),15===Z.length&&(fps.innerHTML=`${Math.round(Z.reduce((e,h)=>e+h)/15)} FPS`,Z=[]));requestAnimationFrame(ba)})(0);