(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[46174,e=>{let t,i;var a=e.i(91398),r=e.i(33583);let n={protectFileIds:()=>{},protectPaths:()=>{}},o={copyText:async e=>{if(!navigator.clipboard)throw Error("Clipboard API is unavailable");await navigator.clipboard.writeText(e)}},l=({children:e,readSubdirectory:t})=>(0,a.jsx)(r.i.Provider,{value:o,children:(0,a.jsx)(r.R.Provider,{value:{runFileMutation:e=>e(n),readDirectory:async()=>[],readSubdirectory:async e=>t?t(e):[],writeFile:async()=>{},deleteFile:async()=>{},deleteFolder:async()=>{},trashFile:async()=>{},isDir:async()=>!1,fileExists:async()=>!1,pathsReferToSameDirectoryEntry:async(e,t)=>e===t,moveFilesToTargetFolder:async()=>[],pathJoin:async(e,t)=>e.endsWith("/")?`${e}${t}`:`${e}/${t}`,getPathName:async e=>{let t=e.split("/");return t[t.length-1]||e},getFileContent:async()=>null,getMdRelativePath:async e=>e,createFolder:async()=>{},renameFile:async(e,t)=>({old_path:e,new_path:t,children:[],is_folder:!1}),copyFile:async e=>e},children:e})}),s=({children:e,folderData:t=null,activeId:i,onFolderDataChange:n,onActiveIdChange:o})=>(0,a.jsx)(r.X.Provider,{value:{activeId:i,folderData:t,setFolderData:e=>{n?.(e)},setFolderDataPure:e=>{n?.(e)},deleteNode:async()=>{},trashNode:async()=>{},getRootPath:()=>void 0,refreshFolder:async()=>{},scrollTo:()=>{},closeAll:()=>{},openFolder:()=>{}},children:e});var d=e.i(68306),u=e.i(40548);let c="files",p=(e,t)=>Error(t?.message||e),f=()=>new Promise((e,t)=>{if(!globalThis.indexedDB)return void t(Error("IndexedDB is not available in this browser."));let i=globalThis.indexedDB.open("markflowy-demo-workspace",1),a=!1;i.onupgradeneeded=()=>{let e=i.result;e.objectStoreNames.contains(c)||e.createObjectStore(c,{keyPath:"id"})},i.onerror=()=>{a=!0,t(p("Failed to open the demo workspace database.",i.error))},i.onblocked=()=>{a=!0,t(Error("The demo workspace database is blocked by another browser tab."))},i.onsuccess=()=>{a?i.result.close():(a=!0,e(i.result))}});async function h(e){let t=await f();try{let i=t.transaction(c,"readonly").objectStore(c).get(e);return await new Promise((e,t)=>{i.onerror=()=>{t(p("Failed to read the demo workspace file.",i.error))},i.onsuccess=()=>{e(i.result??null)}})}finally{t.close()}}async function m(e,t){let i=await f(),a=String(Date.now());try{await new Promise((r,n)=>{let o=i.transaction(c,"readwrite");o.oncomplete=()=>r(),o.onerror=()=>{n(p("Failed to save the demo workspace file.",o.error))},o.onabort=()=>{n(p("Saving the demo workspace file was aborted.",o.error))},o.objectStore(c).put({id:e,content:t,version:a})})}finally{i.close()}return a}let g="demo-file",v=[{id:g,name:"demo.md",kind:"file",path:"/demo.md",ext:"md"}],b={[g]:`# MarkFlowy Demo

Edit this file and click Save.

Your changes stay in this browser's IndexedDB after refresh.
`},y={title:"Demo Workspace",provider:"local",requiresAuth:!1,capabilities:{refs:!1,write:!0,delete:!1},loadTree:async()=>v,async loadFileContent(e){let t=await h(e.id);return t?{content:t.content,version:t.version}:{content:b[e.id]||"# New File\n\nStart writing here..."}},async saveFileContent(e,t){if(e.id!==g)throw Error(`Unknown demo workspace file: ${e.id}`);return{version:await m(e.id,t)}}};function w(e){let t={type:"local",title:e.title,provider:e.provider||"local",requiresAuth:e.requiresAuth??!1,capabilities:e.capabilities,loadTree:()=>e.loadTree(),loadFileContent:t=>e.loadFileContent(t)},i=e.loadSubdirectory;i&&(t.loadSubdirectory=e=>i(e));let a=e.saveFileContent;e.capabilities.write&&a&&(t.saveFileContent=(e,t,i)=>a(e,t,i));let r=e.saveFiles;return e.capabilities.write&&r?t.saveFiles=(e,t)=>r(e,t):e.capabilities.write&&a&&(t.saveFiles=async(e,t)=>{let i=[];for(let r of e){let e=await a(r.file,r.content,{message:t?.message,version:r.version,ref:t?.ref});i.push({path:r.file.path||r.file.id,version:e.version})}return{files:i}}),t}async function x(e){var t;let i,a,r=await d.a.getDescriptor(e);return t=r,i=t.label||t.name,a={type:"remote",workspaceId:e,descriptor:t,defaultRef:t.defaultRef,title:i,provider:t.provider,requiresAuth:!0,capabilities:t.capabilities,async loadTree(a=t.defaultRef){let r=await d.a.loadTree(e,a);return[{id:`remote-workspace-${e}-root`,name:i,kind:"dir",path:"",children:r}]},async loadFileContent(i,a=t.defaultRef){if(!i.path)throw Error("File path is required");return d.a.loadFileContent(e,i.path,a)},getRefs:()=>d.a.getRefs(e),loadSubdirectory:async(i,a=t.defaultRef)=>d.a.loadSubdirectory(e,i,a)},t.capabilities.write&&(a.saveFileContent=async(i,a,r)=>{if(!i.path)throw Error("File path is required");return d.a.saveFileContent(e,i.path,{message:r?.message||"Update via MarkFlowy",content:a,version:r?.version,ref:r?.ref??t.defaultRef})},a.saveFiles=async(i,a)=>d.a.saveFileContents(e,{message:a?.message||"Update via MarkFlowy",files:i.map(({file:e,content:t,version:i})=>{if(!e.path)throw Error("File path is required");return{path:e.path,content:t,version:i}}),ref:a?.ref??t.defaultRef})),a}async function C(e,t){if("LOCAL"===e.type){let i=await t.resolveLocalBackend?.(e);if(i)return w(i);throw Error(`Local workspace "${e.name}" is not bound to a browser local-file backend yet.`)}return x(e.id)}async function S(e,t={}){let i;return"demo-workspace"===e?w(y):C(await (i=e,u.k.get(`/workspaces/${encodeURIComponent(i)}`)),t)}var k=e.i(54410),z=e.i(19174);e.i(64157);var $=e.i(71179),_=e.i(46439);function j({viewType:e,onViewTypeChange:t}){let{t:i}=(0,$.f)();return(0,a.jsx)(E,{"aria-label":i("workspace.editor"),children:[["wysiwyg","workspace.editor"],["source","workspace.source"],["preview","workspace.previewMode"]].map(([r,n])=>(0,a.jsx)(F,{type:"button","aria-pressed":e===r,onClick:()=>t(r),children:i(n)},r))})}function P({viewType:e,onViewTypeChange:t}){return(0,a.jsxs)(R,{children:[(0,a.jsx)(j,{viewType:e,onViewTypeChange:t}),(0,a.jsx)(r.e,{}),(0,a.jsxs)(I,{children:[(0,a.jsx)(r.Z,{icon:"ri-arrow-go-back-line",onClick:()=>{},tooltipProps:{title:"Undo"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-arrow-go-forward-line",onClick:()=>{},tooltipProps:{title:"Redo"},size:"small",rounded:"smooth"})]}),(0,a.jsx)(r.e,{}),(0,a.jsxs)(I,{children:[(0,a.jsx)(r.Z,{icon:"ri-h-1",onClick:()=>{},tooltipProps:{title:"Heading 1"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-h-2",onClick:()=>{},tooltipProps:{title:"Heading 2"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-h-3",onClick:()=>{},tooltipProps:{title:"Heading 3"},size:"small",rounded:"smooth"})]}),(0,a.jsx)(r.e,{}),(0,a.jsxs)(I,{children:[(0,a.jsx)(r.Z,{icon:"ri-bold",onClick:()=>{},tooltipProps:{title:"Bold"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-italic",onClick:()=>{},tooltipProps:{title:"Italic"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-strikethrough",onClick:()=>{},tooltipProps:{title:"Strikethrough"},size:"small",rounded:"smooth"})]}),(0,a.jsx)(r.e,{}),(0,a.jsxs)(I,{children:[(0,a.jsx)(r.Z,{icon:"ri-list-unordered",onClick:()=>{},tooltipProps:{title:"Bullet List"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-list-ordered",onClick:()=>{},tooltipProps:{title:"Numbered List"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-checkbox-line",onClick:()=>{},tooltipProps:{title:"Task List"},size:"small",rounded:"smooth"})]}),(0,a.jsx)(r.e,{}),(0,a.jsxs)(I,{children:[(0,a.jsx)(r.Z,{icon:"ri-link",onClick:()=>{},tooltipProps:{title:"Link"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-image-line",onClick:()=>{},tooltipProps:{title:"Image"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-code-line",onClick:()=>{},tooltipProps:{title:"Code"},size:"small",rounded:"smooth"}),(0,a.jsx)(r.Z,{icon:"ri-double-quotes-l",onClick:()=>{},tooltipProps:{title:"Quote"},size:"small",rounded:"smooth"})]})]})}let I=z.U.div.withConfig({displayName:"EditorToolbar__ToolbarSection",componentId:"sc-8be2398-0"})`
  display: flex;
  align-items: center;
  gap: ${(0,k.f)(2)};
`,R=(0,z.U)(r.E).withConfig({displayName:"EditorToolbar__EditorToolbarWrapper",componentId:"sc-8be2398-1"})`
  min-height: 48px;
  flex-shrink: 0;
  padding: 6px 16px;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid var(--line-soft);
  background: var(--paper);
  > * {
    flex-shrink: 0;
  }
`,E=z.U.div.withConfig({displayName:"EditorToolbar__ModeGroup",componentId:"sc-8be2398-2"})`
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 8px;
  background: var(--paper-warm);
`,F=(0,z.U)(_.f).withConfig({displayName:"EditorToolbar__ModeButton",componentId:"sc-8be2398-3"})`
  && {
    height: 28px;
    padding: 0 10px;
    border-radius: 5px;
    color: var(--ink-mute);
    font-size: 12px;
    font-weight: 500;
    transition:
      color 160ms ease,
      background-color 160ms ease;
  }
  &[aria-pressed='true'] {
    color: var(--seal);
    background: var(--paper);
    box-shadow: 0 1px 3px color-mix(in srgb, var(--shadow-color) 12%, transparent);
  }
`;var L=e.i(91788);let N=({children:e})=>{let t=(0,L.useRef)(null),[i,r]=(0,L.useState)({width:0,height:0});return(0,L.useEffect)(()=>{let e=t.current;if(!e)return;let i=()=>{let{width:t,height:i}=e.getBoundingClientRect();r({width:t,height:i})};i();let a=new ResizeObserver(i);return a.observe(e),()=>{a.disconnect()}},[]),(0,a.jsx)("div",{ref:t,style:{width:"100%",height:"100%",overflow:"hidden"},children:i.width>0&&i.height>0&&e(i)})};var T=e.i(48547);let D=(e,t)=>{let i,a=/^(#{1,6})\s+(.+)$/gm,r=[];for(;null!==(i=a.exec(e));){let e=i[1].length,a=i[2].trim(),n=`heading-${t}-${r.length}-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;r.push({depth:e,value:a,id:n,htmlNode:null,onClick:e=>{let t=document.getElementById(e.id);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}})}return r},M=e=>{for(let t of e){if("file"===t.kind)return t;if(t.children){let e=M(t.children);if(e)return e}}};var U=e.i(68489),B=e.i(41158),O=e.i(3828);function A({groupSize:e,panelElement:t,styleProp:i}){let a,[r,n]=function(e){switch(typeof e){case"number":return[e,"px"];case"string":{let t=parseFloat(e);return e.endsWith("%")?[t,"%"]:e.endsWith("px")?[t,"px"]:e.endsWith("rem")?[t,"rem"]:e.endsWith("em")?[t,"em"]:e.endsWith("vh")?[t,"vh"]:e.endsWith("vw")?[t,"vw"]:[t,"%"]}}}(i);switch(n){case"%":a=r/100*e;break;case"px":a=r;break;case"rem":a=r*parseFloat(getComputedStyle(t.ownerDocument.body).fontSize);break;case"em":a=r*parseFloat(getComputedStyle(t).fontSize);break;case"vh":a=r/100*window.innerHeight;break;case"vw":a=r/100*window.innerWidth}return a}function G(e){return parseFloat(e.toFixed(3))}function W({group:e}){let{orientation:t,panels:i}=e;return i.reduce((e,i)=>e+="horizontal"===t?i.element.offsetWidth:i.element.offsetHeight,0)}function V(e){let{panels:t}=e,i=W({group:e});return 0===i?t.map(e=>({groupResizeBehavior:e.panelConstraints.groupResizeBehavior,collapsedSize:0,collapsible:!0===e.panelConstraints.collapsible,defaultSize:void 0,disabled:e.panelConstraints.disabled,minSize:0,maxSize:100,panelId:e.id})):t.map(e=>{let t,{element:a,panelConstraints:r}=e,n=0;void 0!==r.collapsedSize&&(n=G(A({groupSize:i,panelElement:a,styleProp:r.collapsedSize})/i*100)),void 0!==r.defaultSize&&(t=G(A({groupSize:i,panelElement:a,styleProp:r.defaultSize})/i*100));let o=0;void 0!==r.minSize&&(o=G(A({groupSize:i,panelElement:a,styleProp:r.minSize})/i*100));let l=100;return void 0!==r.maxSize&&(l=G(A({groupSize:i,panelElement:a,styleProp:r.maxSize})/i*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:n,collapsible:!0===r.collapsible,defaultSize:t,disabled:r.disabled,minSize:o,maxSize:l,panelId:e.id}})}function X(e,t="Assertion error"){if(!e)throw Error(t)}function H(e,t){return Array.from(t).sort("horizontal"===e?Z:Y)}function Z(e,t){let i=e.element.offsetLeft-t.element.offsetLeft;return 0!==i?i:e.element.offsetWidth-t.element.offsetWidth}function Y(e,t){let i=e.element.offsetTop-t.element.offsetTop;return 0!==i?i:e.element.offsetHeight-t.element.offsetHeight}function q(e){return null!==e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function J(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function K(e){let{element:i,orientation:a,panels:r,separators:n}=e,o=H(a,Array.from(i.children).filter(q).map(e=>({element:e}))).map(({element:e})=>e),l=[],s=!1,d=!1,u=-1,c=-1,p=0,f,h=[];{let e=-1;for(let t of o)t.hasAttribute("data-panel")&&(e++,t.hasAttribute("data-disabled")||(p++,-1===u&&(u=e),c=e))}if(p>1){let i=-1;for(let p of o)if(p.hasAttribute("data-panel")){i++;let n=r.find(e=>e.element===p);if(n){if(f){let r,o=f.element.getBoundingClientRect(),m=p.getBoundingClientRect();if(d){let e="horizontal"===a?new DOMRect(o.right,o.top,0,o.height):new DOMRect(o.left,o.bottom,o.width,0),t="horizontal"===a?new DOMRect(m.left,m.top,0,m.height):new DOMRect(m.left,m.top,m.width,0);switch(h.length){case 0:r=[e,t];break;case 1:{let i=h[0],n=function({orientation:e,rects:t,targetRect:i}){let a={x:i.x+i.width/2,y:i.y+i.height/2},r,n=Number.MAX_VALUE;for(let i of t){let{x:t,y:o}=J(a,i),l="horizontal"===e?t:o;l<n&&(n=l,r=i)}return X(r,"No rect found"),r}({orientation:a,rects:[o,m],targetRect:i.element.getBoundingClientRect()});r=[i,n===o?t:e];break}default:r=h}}else r=h.length?h:["horizontal"===a?new DOMRect(o.right,m.top,m.left-o.right,m.height):new DOMRect(m.left,o.bottom,m.width,m.top-o.bottom)];for(let a of r){let r="width"in a?a:a.element.getBoundingClientRect(),o=(void 0===t&&(t="function"==typeof matchMedia&&!!matchMedia("(pointer:coarse)").matches),t)?e.resizeTargetMinimumSize.coarse:e.resizeTargetMinimumSize.fine;if(r.width<o){let e=o-r.width;r=new DOMRect(r.x-e/2,r.y,r.width+e,r.height)}if(r.height<o){let e=o-r.height;r=new DOMRect(r.x,r.y-e/2,r.width,r.height+e)}let d=i<=u||i>c;s||d||l.push({group:e,groupSize:W({group:e}),panels:[f,n],separator:"width"in a?void 0:a,rect:r}),s=!1}}d=!1,f=n,h=[]}}else if(p.hasAttribute("data-separator")){null!==p.ariaDisabled&&(s=!0);let e=n.find(e=>e.element===p);e?h.push(e):(f=void 0,h=[])}else d=!0}return l}class Q{#e={};addListener(e,t){let i=this.#e[e];return void 0===i?this.#e[e]=[t]:i.includes(t)||i.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let i=this.#e[e];if(void 0!==i)if(1===i.length)i[0].call(null,t);else{let e=!1,a=null,r=Array.from(i);for(let i=0;i<r.length;i++){let n=r[i];try{n.call(null,t)}catch(t){null===a&&(e=!0,a=t)}}if(e)throw a}}removeAllListeners(){this.#e={}}removeListener(e,t){let i=this.#e[e];if(void 0!==i){let e=i.indexOf(t);e>=0&&i.splice(e,1)}}}let ee=new Map,et=new Q;function ei(e,t){for(let[t]of ee)if(t.id===e)return t}function ea(e,t){for(let[t,i]of ee)if(t.id===e)return i;if(t)throw Error(`Could not find data for Group with id ${e}`)}function er(e,t){return et.addListener("groupChange",i=>{i.group.id===e&&t(i)})}function en(e,t){let i=ee.get(e);(ee=new Map(ee)).set(e,t),et.emit("groupChange",{group:e,prev:i,next:t})}let eo=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function el(e){let t=e.length;for(;t--;){let i=e[t];if(X(i,"Missing node"),function(e){let t,i=getComputedStyle(e);return!!("fixed"===i.position||"auto"!==i.zIndex&&("static"!==i.position||"flex"===(t=getComputedStyle(eu(e)??e).display)||"inline-flex"===t)||1>+i.opacity||"transform"in i&&"none"!==i.transform||"webkitTransform"in i&&"none"!==i.webkitTransform||"mixBlendMode"in i&&"normal"!==i.mixBlendMode||"filter"in i&&"none"!==i.filter||"webkitFilter"in i&&"none"!==i.webkitFilter||"isolation"in i&&"isolate"===i.isolation||eo.test(i.willChange)||"touch"===i.webkitOverflowScrolling)}(i))return i}return null}function es(e){return e&&Number(getComputedStyle(e).zIndex)||0}function ed(e){let t=[];for(;e;)t.push(e),e=eu(e);return t}function eu(e){let{parentNode:t}=e;return null!==t&&"object"==typeof t&&"nodeType"in t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t}function ec(e,t){let i=[];return t.forEach((t,a)=>{if(a.disabled)return;let r=K(a),n=function(e,t,i){let a,r={x:1/0,y:1/0};for(let n of t){let t=J(i,n.rect);switch(e){case"horizontal":t.x<=r.x&&(a=n,r=t);break;case"vertical":t.y<=r.y&&(a=n,r=t)}}return a?{distance:r,hitRegion:a}:void 0}(a.orientation,r,{x:e.clientX,y:e.clientY});n&&n.distance.x<=0&&n.distance.y<=0&&function({groupElement:e,hitRegion:t,pointerEventTarget:i}){if(!q(i)||i.contains(e)||e.contains(i))return!0;if(function(e,t){let i;if(e===t)throw Error("Cannot compare node with itself");let a={a:ed(e),b:ed(t)};for(;a.a.at(-1)===a.b.at(-1);)i=a.a.pop(),a.b.pop();X(i,"Stacking order can only be calculated for elements with a common ancestor");let r={a:es(el(a.a)),b:es(el(a.b))};if(r.a===r.b){let e=i.childNodes,t={a:a.a.at(-1),b:a.b.at(-1)},r=e.length;for(;r--;){let i=e[r];if(i===t.a)return 1;if(i===t.b)return -1}}return Math.sign(r.a-r.b)}(i,e)>0){let r=i;for(;r;){var a;if(r.contains(e))break;if(a=r.getBoundingClientRect(),a.x<t.x+t.width&&a.x+a.width>t.x&&a.y<t.y+t.height&&a.y+a.height>t.y)return!1;r=r.parentElement}}return!0}({groupElement:a.element,hitRegion:n.hitRegion.rect,pointerEventTarget:e.target})&&i.push(n.hitRegion)}),i}function ep(e,t,i=0){return Math.abs(G(e)-G(t))<=i}function ef(e,t){return ep(e,t)?0:e>t?1:-1}function eh({overrideDisabledPanels:e,panelConstraints:t,prevSize:i,size:a}){let{collapsedSize:r=0,collapsible:n,disabled:o,maxSize:l=100,minSize:s=0}=t;return o&&!e?i:(0>ef(a,s)&&(a=n&&0>ef(a,(r+s)/2)?r:s),G(a=Math.min(l,a)))}function em({delta:e,initialLayout:t,panelConstraints:i,pivotIndices:a,prevLayout:r,trigger:n}){if(ep(e,0))return t;let o="imperative-api"===n,l=Object.values(t),s=Object.values(r),d=[...l],[u,c]=a;X(null!=u,"Invalid first pivot index"),X(null!=c,"Invalid second pivot index");let p=0;if("keyboard"===n){{let t=e<0?c:u,a=i[t];X(a,`Panel constraints not found for index ${t}`);let{collapsedSize:r=0,collapsible:n,minSize:o=0}=a;if(n){let i=l[t];if(X(null!=i,`Previous layout not found for panel index ${t}`),ep(i,r)){let t=o-i;ef(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:c,a=i[t];X(a,`No panel constraints found for index ${t}`);let{collapsedSize:r=0,collapsible:n,minSize:o=0}=a;if(n){let i=l[t];if(X(null!=i,`Previous layout not found for panel index ${t}`),ep(i,o)){let t=i-r;ef(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}}else{let t=e<0?c:u,a=i[t];X(a,`Panel constraints not found for index ${t}`);let r=l[t],{collapsible:n,collapsedSize:o,minSize:s}=a;if(n&&0>ef(r,s))if(e>0){let t=s-o;0>ef(r+e,s)&&(e=0>=ef(e,t/2)?0:t)}else{let t=s-o;0>ef(r-e,s)&&(e=ef(100+e,100-t/2)>0?0:-t)}}{let t=e<0?1:-1,a=e<0?c:u,r=0;for(;;){let e=l[a];if(X(null!=e,`Previous layout not found for panel index ${a}`),r+=eh({overrideDisabledPanels:o,panelConstraints:i[a],prevSize:e,size:100})-e,(a+=t)<0||a>=i.length)break}let n=Math.min(Math.abs(e),Math.abs(r));e=e<0?0-n:n}{let t=e<0?u:c;for(;t>=0&&t<i.length;){let a=Math.abs(e)-Math.abs(p),r=l[t];X(null!=r,`Previous layout not found for panel index ${t}`);let n=r-a,s=eh({overrideDisabledPanels:o,panelConstraints:i[t],prevSize:r,size:n});if(!ep(r,s)&&(p+=r-s,d[t]=s,p.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!=t[i])return!1;return!0}(s,d))return r;{let t=e<0?c:u,a=l[t];X(null!=a,`Previous layout not found for panel index ${t}`);let r=a+p,n=eh({overrideDisabledPanels:o,panelConstraints:i[t],prevSize:a,size:r});if(d[t]=n,!ep(n,r)){let t=r-n,a=e<0?c:u;for(;a>=0&&a<i.length;){let r=d[a];X(null!=r,`Previous layout not found for panel index ${a}`);let n=r+t,l=eh({overrideDisabledPanels:o,panelConstraints:i[a],prevSize:r,size:n});if(ep(r,l)||(t-=l-r,d[a]=l),ep(t,0))break;e>0?a--:a++}}}if(!ep(Object.values(d).reduce((e,t)=>t+e,0),100,.1))return r;let f=Object.keys(r);return d.reduce((e,t,i)=>(e[f[i]]=t,e),{})}function eg(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let i in e)if(void 0===t[i]||0!==ef(e[i],t[i]))return!1;return!0}function ev({layout:e,panelConstraints:t}){let i=Object.values(e),a=[...i],r=a.reduce((e,t)=>e+t,0);if(a.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${a.map(e=>`${e}%`).join(", ")}`);if(!ep(r,100)&&a.length>0)for(let e=0;e<t.length;e++){let t=a[e];X(null!=t,`No layout data found for index ${e}`);let i=100/r*t;a[e]=i}let n=0;for(let e=0;e<t.length;e++){let r=i[e];X(null!=r,`No layout data found for index ${e}`);let o=a[e];X(null!=o,`No layout data found for index ${e}`);let l=eh({overrideDisabledPanels:!0,panelConstraints:t[e],prevSize:r,size:o});o!=l&&(n+=o-l,a[e]=l)}if(!ep(n,0))for(let e=0;e<t.length;e++){let i=a[e];X(null!=i,`No layout data found for index ${e}`);let r=i+n,o=eh({overrideDisabledPanels:!0,panelConstraints:t[e],prevSize:i,size:r});if(i!==o&&(n-=o-i,a[e]=o,ep(n,0)))break}let o=Object.keys(e);return a.reduce((e,t,i)=>(e[o[i]]=t,e),{})}function eb({groupId:e,panelId:t}){let i=()=>{for(let[t,{defaultLayoutDeferred:i,derivedPanelConstraints:a,layout:r,groupSize:n,separatorToPanels:o}]of ee)if(t.id===e)return{defaultLayoutDeferred:i,derivedPanelConstraints:a,group:t,groupSize:n,layout:r,separatorToPanels:o};throw Error(`Group ${e} not found`)},a=()=>{let e=i().derivedPanelConstraints.find(e=>e.panelId===t);if(void 0!==e)return e;throw Error(`Panel constraints not found for Panel ${t}`)},r=()=>{let e=i().group.panels.find(e=>e.id===t);if(void 0!==e)return e;throw Error(`Layout not found for Panel ${t}`)},n=()=>{let e=i().layout[t];if(void 0!==e)return e;throw Error(`Layout not found for Panel ${t}`)},o=e=>{if(e===n())return;let{defaultLayoutDeferred:a,derivedPanelConstraints:r,group:o,groupSize:l,layout:s,separatorToPanels:d}=i(),u=ev({layout:(({nextSize:e,panels:i,prevLayout:a,derivedPanelConstraints:r})=>{let o=n(),l=i.findIndex(e=>e.id===t),s=0===l,d=l===i.length-1;if(d&&e<o&&(s||i.slice(0,l).every((e,t)=>{let i=r[t];return i?.collapsible&&ep(i.collapsedSize,a[i.panelId])}))){let e=i.slice(0,l).reduce((e,t)=>e+a[t.id],0);return{...a,[t]:G(100-e)}}return em({delta:d?o-e:e-o,initialLayout:a,panelConstraints:r,pivotIndices:d?[l-1,l]:[l,l+1],prevLayout:a,trigger:"imperative-api"})})({nextSize:e,panels:o.panels,prevLayout:s,derivedPanelConstraints:r}),panelConstraints:r});eg(s,u)||en(o,{defaultLayoutDeferred:a,derivedPanelConstraints:r,groupSize:l,layout:u,separatorToPanels:d})};return{collapse:()=>{let{collapsible:e,collapsedSize:t}=a(),{mutableValues:i}=r(),l=n();e&&l!==t&&(i.expandToSize=l,o(t))},expand:()=>{let{collapsible:e,collapsedSize:t,minSize:i}=a(),{mutableValues:l}=r(),s=n();if(e&&s===t){let e=l.expandToSize??i;0===e&&(e=1),o(e)}},getSize:()=>{let{group:e}=i(),t=n(),{element:a}=r();return{asPercentage:t,inPixels:"horizontal"===e.orientation?a.offsetWidth:a.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=a(),i=n();return e&&ep(t,i)},resize:e=>{let{group:t}=i(),{element:a}=r(),n=W({group:t});o(G(A({groupSize:n,panelElement:a,styleProp:e})/n*100))}}}function ey(e){e.defaultPrevented||ec(e,ee).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let i=t.panels.find(e=>void 0!==e.panelConstraints.defaultSize);if(i){let a=i.panelConstraints.defaultSize,r=eb({groupId:t.group.id,panelId:i.id});r&&void 0!==a&&(r.resize(a),e.preventDefault())}}})}function ew(e){for(let[t]of ee)if(t.separators.some(t=>t.element===e))return t;throw Error("Could not find parent Group for separator element")}function ex({groupId:e}){let t=()=>{for(let[t,i]of ee)if(t.id===e)return{group:t,...i};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:i}=t();return e?{}:i},setLayout(e){let{defaultLayoutDeferred:i,derivedPanelConstraints:a,group:r,groupSize:n,layout:o,separatorToPanels:l}=t(),s=ev({layout:e,panelConstraints:a});return i?o:(eg(o,s)||en(r,{defaultLayoutDeferred:i,derivedPanelConstraints:a,groupSize:n,layout:s,separatorToPanels:l}),s)}}}function eC(e,t){let i=ew(e),a=ea(i.id,!0),r=i.separators.find(t=>t.element===e);X(r,"Matching separator not found");let n=a.separatorToPanels.get(r);X(n,"Matching panels not found");let o=n.map(e=>i.panels.indexOf(e)),l=ex({groupId:i.id}).getLayout(),s=ev({layout:em({delta:t,initialLayout:l,panelConstraints:a.derivedPanelConstraints,pivotIndices:o,prevLayout:l,trigger:"keyboard"}),panelConstraints:a.derivedPanelConstraints});eg(l,s)||en(i,{defaultLayoutDeferred:a.defaultLayoutDeferred,derivedPanelConstraints:a.derivedPanelConstraints,groupSize:a.groupSize,layout:s,separatorToPanels:a.separatorToPanels})}function eS(e){if(e.defaultPrevented)return;let t=e.currentTarget,i=ew(t);if(!i.disabled)switch(e.key){case"ArrowDown":e.preventDefault(),"vertical"===i.orientation&&eC(t,5);break;case"ArrowLeft":e.preventDefault(),"horizontal"===i.orientation&&eC(t,-5);break;case"ArrowRight":e.preventDefault(),"horizontal"===i.orientation&&eC(t,5);break;case"ArrowUp":e.preventDefault(),"vertical"===i.orientation&&eC(t,-5);break;case"End":e.preventDefault(),eC(t,100);break;case"Enter":{e.preventDefault();let i=ew(t),{derivedPanelConstraints:a,layout:r,separatorToPanels:n}=ea(i.id,!0),o=i.separators.find(e=>e.element===t);X(o,"Matching separator not found");let l=n.get(o);X(l,"Matching panels not found");let s=l[0],d=a.find(e=>e.panelId===s.id);if(X(d,"Panel metadata not found"),d.collapsible){let e=r[s.id];eC(t,(d.collapsedSize===e?i.mutableState.expandedPanelSizes[s.id]??d.minSize:d.collapsedSize)-e)}break}case"F6":{e.preventDefault();let i=ew(t).separators.map(e=>e.element),a=Array.from(i).findIndex(t=>t===e.currentTarget);X(null!==a,"Index not found");let r=e.shiftKey?a>0?a-1:i.length-1:a+1<i.length?a+1:0;i[r].focus({preventScroll:!0});break}case"Home":e.preventDefault(),eC(t,-100)}}let ek={cursorFlags:0,state:"inactive"},ez=new Q;function e$(e){let t=ek;ek=e,ez.emit("change",{prev:t,next:e})}function e_(e){if(e.defaultPrevented||"mouse"===e.pointerType&&e.button>0)return;let t=ee,i=ec(e,t),a=new Map,r=!1;i.forEach(e=>{e.separator&&(r||(r=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let i=t.get(e.group);i&&a.set(e.group,i.layout)}),e$({cursorFlags:0,hitRegions:i,initialLayoutMap:a,pointerDownAtPoint:{x:e.clientX,y:e.clientY},state:"active"}),i.length&&e.preventDefault()}let ej=e=>e,eP=()=>{};function eI(){return void 0===i&&(i=!1,"u">typeof window&&(window.navigator.userAgent.includes("Chrome")||window.navigator.userAgent.includes("Firefox"))&&(i=!0)),i}let eR=new WeakMap;function eE(e){if(null===e.defaultView||void 0===e.defaultView)return;let{prevStyle:t,styleSheet:i}=eR.get(e)??{};void 0===i&&(i=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(i):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]));let a=ek;switch(a.state){case"active":case"hover":{let e=function({cursorFlags:e,groups:t,state:i}){let a=0,r=0;switch(i){case"active":case"hover":t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case"horizontal":a++;break;case"vertical":r++}})}if(0!==a||0!==r){if("active"===i&&e&&eI()){let t=(4&e)!=0,i=(8&e)!=0;if((1&e)!=0)return t?"se-resize":i?"ne-resize":"e-resize";if((2&e)!=0)return t?"sw-resize":i?"nw-resize":"w-resize";if(t)return"s-resize";if(i)return"n-resize"}return eI()?a>0&&r>0?"move":a>0?"ew-resize":"ns-resize":a>0&&r>0?"grab":a>0?"col-resize":"row-resize"}}({cursorFlags:a.cursorFlags,groups:a.hitRegions.map(e=>e.group),state:a.state}),r=`*, *:hover {cursor: ${e} !important; }`;if(t===r)return;t=r,e?0===i.cssRules.length?i.insertRule(r):i.replaceSync(r):1===i.cssRules.length&&i.deleteRule(0);break}case"inactive":t=void 0,1===i.cssRules.length&&i.deleteRule(0)}eR.set(e,{prevStyle:t,styleSheet:i})}function eF({document:e,event:t,hitRegions:i,initialLayoutMap:a,mountedGroups:r,pointerDownAtPoint:n,prevCursorFlags:o}){var l;let s,d,u=0;i.forEach(e=>{let{group:i,groupSize:o}=e,{orientation:l,panels:s}=i,{disableCursor:d}=i.mutableState,c=0;c=n?"horizontal"===l?(t.clientX-n.x)/o*100:(t.clientY-n.y)/o*100:"horizontal"===l?t.clientX<0?-100:100:t.clientY<0?-100:100;let p=a.get(i),f=r.get(i);if(!p||!f)return;let{defaultLayoutDeferred:h,derivedPanelConstraints:m,groupSize:g,layout:v,separatorToPanels:b}=f;if(m&&v&&b){let t=em({delta:c,initialLayout:p,panelConstraints:m,pivotIndices:e.panels.map(e=>s.indexOf(e)),prevLayout:v,trigger:"mouse-or-touch"});if(eg(t,v)){if(0!==c&&!d)switch(l){case"horizontal":u|=c<0?1:2;break;case"vertical":u|=c<0?4:8}}else en(e.group,{defaultLayoutDeferred:h,derivedPanelConstraints:m,groupSize:g,layout:t,separatorToPanels:b})}});let c=0;0===t.movementX?c|=3&o:c|=3&u,0===t.movementY?c|=12&o:c|=12&u,l=c,s=ek,(d={...ek}).cursorFlags=l,ek=d,ez.emit("change",{prev:s,next:d}),eE(e)}function eL(e){let t=ee,i=ek;"active"===i.state&&eF({document:e.currentTarget,event:e,hitRegions:i.hitRegions,initialLayoutMap:i.initialLayoutMap,mountedGroups:t,prevCursorFlags:i.cursorFlags})}function eN(e){if(e.defaultPrevented)return;let t=ek,i=ee;if("active"===t.state){if(0===e.buttons){e$({cursorFlags:0,state:"inactive"}),t.hitRegions.forEach(e=>{let t=ea(e.group.id,!0);en(e.group,t)});return}for(let i of t.hitRegions)if(i.separator){let{element:t}=i.separator;t.hasPointerCapture?.(e.pointerId)||t.setPointerCapture?.(e.pointerId)}eF({document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedGroups:i,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags})}else{let a=ec(e,i);0===a.length?"inactive"!==t.state&&e$({cursorFlags:0,state:"inactive"}):e$({cursorFlags:0,hitRegions:a,state:"hover"}),eE(e.currentTarget)}}function eT(e){e.relatedTarget instanceof HTMLIFrameElement&&"hover"===ek.state&&e$({cursorFlags:0,state:"inactive"})}function eD(e){if(e.defaultPrevented||"mouse"===e.pointerType&&e.button>0)return;let t=ek;"active"===t.state&&(e$({cursorFlags:0,state:"inactive"}),t.hitRegions.length>0&&(eE(e.currentTarget),t.hitRegions.forEach(e=>{let t=ea(e.group.id,!0);en(e.group,t)}),e.preventDefault()))}function eM(e){let t=0,i=0,a={};for(let r of e)if(void 0!==r.defaultSize){t++;let e=G(r.defaultSize);i+=e,a[r.panelId]=e}else a[r.panelId]=void 0;let r=e.length-t;if(0!==r){let t=G((100-i)/r);for(let i of e)void 0===i.defaultSize&&(a[i.panelId]=t)}return a}let eU=new Map;function eB(e){let t=(0,L.useId)();return`${e??t}`}let eO="u">typeof window?L.useLayoutEffect:L.useEffect;function eA(e){let t=(0,L.useRef)(e);return eO(()=>{t.current=e},[e]),(0,L.useCallback)((...e)=>t.current?.(...e),[t])}function eG(...e){return eA(t=>{e.forEach(e=>{if(e)switch(typeof e){case"function":e(t);break;case"object":e.current=t}})})}function eW(e){let t=(0,L.useRef)({...e});return eO(()=>{for(let i in e)t.current[i]=e[i]},[e]),t.current}let eV=(0,L.createContext)(null);function eX({children:e,className:t,defaultLayout:i,disableCursor:r,disabled:n,elementRef:o,groupRef:l,id:s,onLayoutChange:d,onLayoutChanged:u,orientation:c="horizontal",resizeTargetMinimumSize:p={coarse:20,fine:10},style:f,...h}){let m,g=(0,L.useRef)({onLayoutChange:{},onLayoutChanged:{}}),v=eA(e=>{eg(g.current.onLayoutChange,e)||(g.current.onLayoutChange=e,d?.(e))}),b=eA(e=>{eg(g.current.onLayoutChanged,e)||(g.current.onLayoutChanged=e,u?.(e))}),y=eB(s),w=(0,L.useRef)(null),[x,C]=function(){let[e,t]=(0,L.useState)({});return[e,(0,L.useCallback)(()=>t({}),[])]}(),S=(0,L.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],resizeTargetMinimumSize:p,separators:[]}),k=eG(w,o);m=(0,L.useRef)({getLayout:()=>({}),setLayout:ej}),(0,L.useImperativeHandle)(l,()=>m.current,[]),eO(()=>{Object.assign(m.current,ex({groupId:y}))});let z=eA((e,t)=>{let a=ek,r=ei(e),n=ea(e);if(n){let e=!1;return"active"===a.state&&(e=a.hitRegions.some(e=>e.group===r)),{flexGrow:n.layout[t]??1,pointerEvents:e?"none":void 0}}if(i?.[t])return{flexGrow:i?.[t]}}),$=eW({defaultLayout:i,disableCursor:r}),_=(0,L.useMemo)(()=>({get disableCursor(){return!!$.disableCursor},getPanelStyles:z,id:y,orientation:c,registerPanel:e=>{let t=S.current;return t.panels=H(c,[...t.panels,e]),C(),()=>{t.panels=t.panels.filter(t=>t!==e),C()}},registerSeparator:e=>{let t=S.current;return t.separators=H(c,[...t.separators,e]),C(),()=>{t.separators=t.separators.filter(t=>t!==e),C()}},updatePanelProps:(e,{disabled:t})=>{let i=S.current.panels.find(t=>t.id===e);i&&(i.panelConstraints.disabled=t);let a=ei(y),r=ea(y);a&&r&&en(a,{...r,derivedPanelConstraints:V(a)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:i})=>{let a=S.current.separators.find(t=>t.id===e);a&&(a.disabled=t,a.disableDoubleClick=i)}}),[z,y,C,c,$]),j=(0,L.useRef)(null);return eO(()=>{let e,t,i,a,r,o,l,s,d,u,p,f,h,m=w.current;if(null===m)return;let g=S.current;if(void 0!==$.defaultLayout&&Object.keys($.defaultLayout).length===g.panels.length)for(let t of(e={},g.panels)){let i=$.defaultLayout[t.id];void 0!==i&&(e[t.id]=i)}let x={disabled:!!n,element:m,id:y,mutableState:{defaultLayout:e,disableCursor:!!$.disableCursor,expandedPanelSizes:S.current.lastExpandedPanelSizes,layouts:S.current.layouts},orientation:c,panels:g.panels,resizeTargetMinimumSize:g.resizeTargetMinimumSize,separators:g.separators};j.current=x;let C=(t=!0,X(x.element.ownerDocument.defaultView,"Cannot register an unmounted Group"),i=x.element.ownerDocument.defaultView.ResizeObserver,a=new Set,r=new Set,(o=new i(e=>{for(let i of e){let{borderBoxSize:e,target:a}=i;if(a===x.element){if(t){let e=W({group:x});if(0===e)return;let t=ea(x.id);if(!t)return;let i=V(x),a=t.defaultLayoutDeferred?eM(i):t.layout,r=ev({layout:function({group:e,nextGroupSize:t,prevGroupSize:i,prevLayout:a}){if(i<=0||t<=0||i===t)return a;let r=0,n=0,o=!1,l=new Map,s=[];for(let d of e.panels){let e=a[d.id]??0;if("preserve-pixel-size"===d.panelConstraints.groupResizeBehavior){o=!0;let a=G(e/100*i/t*100);l.set(d.id,a),r+=a}else s.push(d.id),n+=e}if(!o||0===s.length)return a;let d=100-r,u={...a};if(l.forEach((e,t)=>{u[t]=e}),n>0)for(let e of s){let t=a[e]??0;u[e]=G(t/n*d)}else{let e=G(d/s.length);for(let t of s)u[t]=e}return u}({group:x,nextGroupSize:e,prevGroupSize:t.groupSize,prevLayout:a}),panelConstraints:i});if(!t.defaultLayoutDeferred&&eg(t.layout,r)&&function(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let i in e)if(e[i]!==t[i])return!1;return!0}(t.derivedPanelConstraints,i)&&t.groupSize===e)return;en(x,{defaultLayoutDeferred:!1,derivedPanelConstraints:i,groupSize:e,layout:r,separatorToPanels:t.separatorToPanels})}}else!function(e,t,i){if(!i[0])return;let a=e.panels.find(e=>e.element===t);if(!a||!a.onResize)return;let r=W({group:e}),n="horizontal"===e.orientation?a.element.offsetWidth:a.element.offsetHeight,o=a.mutableValues.prevSize,l={asPercentage:G(n/r*100),inPixels:n};a.mutableValues.prevSize=l,a.onResize(l,a.id,o)}(x,a,e)}})).observe(x.element),x.panels.forEach(e=>{X(!a.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),a.add(e.id),e.onResize&&o.observe(e.element)}),l=W({group:x}),s=V(x),d=x.panels.map(({id:e})=>e).join(","),(u=x.mutableState.defaultLayout)&&(function(e,t){let i=e.map(e=>e.id),a=Object.keys(t);if(i.length!==a.length)return!1;for(let e of i)if(!a.includes(e))return!1;return!0}(x.panels,u)||(u=void 0)),p=ev({layout:x.mutableState.layouts[d]??u??eM(s),panelConstraints:s}),f=x.element.ownerDocument,eU.set(f,(eU.get(f)??0)+1),h=new Map,K(x).forEach(e=>{e.separator&&h.set(e.separator,e.panels)}),en(x,{defaultLayoutDeferred:0===l,derivedPanelConstraints:s,groupSize:l,layout:p,separatorToPanels:h}),x.separators.forEach(e=>{X(!r.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.element.addEventListener("keydown",eS)}),1===eU.get(f)&&(f.addEventListener("dblclick",ey,!0),f.addEventListener("pointerdown",e_,!0),f.addEventListener("pointerleave",eL),f.addEventListener("pointermove",eN),f.addEventListener("pointerout",eT),f.addEventListener("pointerup",eD,!0)),function(){t=!1,eU.set(f,Math.max(0,(eU.get(f)??0)-1)),(ee=new Map(ee)).delete(x),x.separators.forEach(e=>{e.element.removeEventListener("keydown",eS)}),eU.get(f)||(f.removeEventListener("dblclick",ey,!0),f.removeEventListener("pointerdown",e_,!0),f.removeEventListener("pointerleave",eL),f.removeEventListener("pointermove",eN),f.removeEventListener("pointerout",eT),f.removeEventListener("pointerup",eD,!0)),o.disconnect()}),{defaultLayoutDeferred:k,derivedPanelConstraints:z,layout:_}=ea(x.id,!0);!k&&z.length>0&&(v(_),b(_));let P=er(y,e=>{let{defaultLayoutDeferred:t,derivedPanelConstraints:i,layout:a}=e.next;if(t||0===i.length)return;let r=x.panels.map(({id:e})=>e).join(",");x.mutableState.layouts[r]=a,i.forEach(t=>{if(t.collapsible){let{layout:i}=e.prev??{};if(i){let e=ep(t.collapsedSize,a[t.panelId]),r=ep(t.collapsedSize,i[t.panelId]);e&&!r&&(x.mutableState.expandedPanelSizes[t.panelId]=i[t.panelId])}}});let n="active"!==ek.state;v(a),n&&b(a)});return()=>{j.current=null,C(),P()}},[n,y,b,v,c,x,$]),(0,L.useEffect)(()=>{let e=j.current;e&&(e.mutableState.defaultLayout=i,e.mutableState.disableCursor=!!r)}),(0,a.jsx)(eV.Provider,{value:_,children:(0,a.jsx)("div",{...h,className:t,"data-group":!0,"data-testid":y,id:y,ref:k,style:{height:"100%",width:"100%",overflow:"hidden",...f,display:"flex",flexDirection:"horizontal"===c?"row":"column",flexWrap:"nowrap",touchAction:"horizontal"===c?"pan-y":"pan-x"},children:e})})}function eH(){let e=(0,L.useContext)(eV);return X(e,"Group Context not found; did you render a Panel or Separator outside of a Group?"),e}function eZ({children:e,className:t,collapsedSize:i="0%",collapsible:r=!1,defaultSize:n,disabled:o,elementRef:l,groupResizeBehavior:s="preserve-relative-size",id:d,maxSize:u="100%",minSize:c="0%",onResize:p,panelRef:f,style:h,...m}){let g,v=!!d,b=eB(d),y=eW({disabled:o}),w=(0,L.useRef)(null),x=eG(w,l),{getPanelStyles:C,id:S,orientation:k,registerPanel:z,updatePanelProps:$}=eH(),_=null!==p,j=eA((e,t,i)=>{p?.(e,d,i)});eO(()=>{let e=w.current;if(null!==e)return z({element:e,id:b,idIsStable:v,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:_?j:void 0,panelConstraints:{groupResizeBehavior:s,collapsedSize:i,collapsible:r,defaultSize:n,disabled:y.disabled,maxSize:u,minSize:c}})},[s,i,r,n,_,b,v,u,c,j,z,y]),(0,L.useEffect)(()=>{$(b,{disabled:o})},[o,b,$]),function(e,t){let{id:i}=eH(),a=(0,L.useRef)({collapse:eP,expand:eP,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:eP});(0,L.useImperativeHandle)(t,()=>a.current,[]),eO(()=>{Object.assign(a.current,eb({groupId:i,panelId:e}))})}(b,f);let P=()=>{let e=C(S,b);if(e)return JSON.stringify(e)},I=(0,L.useSyncExternalStore)(e=>er(S,e),P,P);return g=I?JSON.parse(I):n?{flexGrow:void 0,flexShrink:void 0,flexBasis:n}:{flexGrow:1},(0,a.jsx)("div",{...m,"data-disabled":o||void 0,"data-panel":!0,"data-testid":b,id:b,ref:x,style:{...eY,display:"flex",flexBasis:0,flexShrink:1,overflow:"visible",...g},children:(0,a.jsx)("div",{className:t,style:{maxHeight:"100%",maxWidth:"100%",flexGrow:1,overflow:"auto",...h,touchAction:"horizontal"===k?"pan-y":"pan-x"},children:e})})}eX.displayName="Group",eZ.displayName="Panel";let eY={minHeight:0,maxHeight:"100%",height:"auto",minWidth:0,maxWidth:"100%",width:"auto",border:"none",borderWidth:0,padding:0,margin:0};function eq({children:e,className:t,disabled:i,disableDoubleClick:r,elementRef:n,id:o,style:l,...s}){let d,u,c=eB(o),p=eW({disabled:i,disableDoubleClick:r}),[f,h]=(0,L.useState)({}),[m,g]=(0,L.useState)("inactive"),[v,b]=(0,L.useState)(!1),y=(0,L.useRef)(null),w=eG(y,n),{disableCursor:x,id:C,orientation:S,registerSeparator:k,updateSeparatorProps:z}=eH();return eO(()=>{let e=y.current;if(null!==e){var t;let i={disabled:p.disabled,disableDoubleClick:p.disableDoubleClick,element:e,id:c},a=k(i),r=(t=e=>{g("inactive"!==e.next.state&&e.next.hitRegions.some(e=>e.separator===i)?e.next.state:"inactive")},ez.addListener("change",t)),n=er(C,e=>{let{derivedPanelConstraints:t,layout:a,separatorToPanels:r}=e.next,n=r.get(i);if(n){let e=n[0],i=n.indexOf(e);h(function({layout:e,panelConstraints:t,panelId:i,panelIndex:a}){let r,n,o=e[i],l=t.find(e=>e.panelId===i);if(l){let s=l.maxSize,d=l.collapsible?l.collapsedSize:l.minSize,u=[a,a+1];n=ev({layout:em({delta:d-o,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[i],r=ev({layout:em({delta:s-o,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[i]}return{valueControls:i,valueMax:r,valueMin:n,valueNow:o}}({layout:a,panelConstraints:t,panelId:e.id,panelIndex:i}))}});return()=>{r(),n(),a()}}},[C,c,k,p]),(0,L.useEffect)(()=>{z(c,{disabled:i,disableDoubleClick:r})},[i,r,c,z]),i&&!x&&(d="not-allowed"),u=i?"disabled":"active"===m?"active":v?"focus":m,(0,a.jsx)("div",{...s,"aria-controls":f.valueControls,"aria-disabled":i||void 0,"aria-orientation":"horizontal"===S?"vertical":"horizontal","aria-valuemax":f.valueMax,"aria-valuemin":f.valueMin,"aria-valuenow":f.valueNow,children:e,className:t,"data-separator":u,"data-testid":c,id:c,onBlur:()=>b(!1),onFocus:()=>b(!0),ref:w,role:"separator",style:{flexBasis:"auto",cursor:d,...l,flexGrow:0,flexShrink:0,touchAction:"none"},tabIndex:i?void 0:0})}eq.displayName="Separator";var eJ=e.i(66007),eK=e.i(20250);let eQ=(0,U.default)(()=>e.A(61060).then(e=>e.default),{loadableGenerated:{modules:[1245]},ssr:!1,loading:()=>(0,a.jsx)(tG,{children:(0,a.jsx)(tW,{})})}),e0=(0,U.default)(()=>Promise.resolve(e4),{ssr:!1,loading:()=>(0,a.jsx)(e2,{children:(0,a.jsx)(tG,{children:(0,a.jsx)(tW,{})})})}),e1=()=>{};function e4(){var e;let{t}=(0,$.f)(),i=Array.isArray(e=(0,O.useRouter)().query.id)?e.filter(Boolean).join("/"):e||"",{authLoading:n,adapter:o,viewType:u,setViewType:c,folderData:p,setFolderData:f,activeId:h,setActiveId:m,opened:g,fileStateMap:v,isClient:b,loadingTree:y,loadingFile:w,saving:x,error:C,refs:k,currentRef:z,canWrite:_,commitMessage:j,setCommitMessage:I,saveStatus:R,stagedFiles:E,handleSelect:F,handleChange:U,handleSave:B,handleShowConfirm:A,handleShowContextMenu:G,handleRefChange:W,handleReadSubdirectory:V,getFileObject:X,getFileObjectByPath:H,currentHeadings:Z,currentFileName:Y,currentFileState:q}=function(e){let{loading:t,isAuthenticated:i}=(0,T.F)(!1),[a,n]=(0,L.useState)(null),[o,l]=(0,L.useState)("wysiwyg"),[s,u]=(0,L.useState)({}),[c,p]=(0,L.useState)([]),[f,h]=(0,L.useState)(""),[m,g]=(0,L.useState)([]),[v,b]=(0,L.useState)({}),[y,w]=(0,L.useState)(!1),[x,C]=(0,L.useState)(!1),[k,z]=(0,L.useState)(!1),[$,_]=(0,L.useState)("idle"),[j,P]=(0,L.useState)(""),[I,R]=(0,L.useState)([]),[E,F]=(0,L.useState)(null),[N,U]=(0,L.useState)("Update via MarkFlowy"),B=(0,L.useRef)(0),O=(0,L.useRef)(0),A=(0,L.useRef)(0),G=(0,L.useRef)(0),W=(0,L.useRef)(v);W.current=v,(0,L.useEffect)(()=>{w(!0)},[]),(0,L.useEffect)(()=>{if(!e||t)return;let a=++G.current;if(B.current+=1,O.current+=1,A.current+=1,r.T.clearLoadedDirsCache?.(),n(null),p([]),h(""),g([]),b({}),u({}),R([]),F(null),z(!1),_("idle"),"demo-workspace"!==e&&!i){C(!1),P("Sign in to open this workspace.");return}let o=!1;return C(!0),P(""),(async()=>{try{let t=await S(e);if(o||a!==G.current)return;n(t),F("remote"===t.type?t.defaultRef:null)}catch(e){if(o||a!==G.current)return;C(!1),P((0,d.w)(e,"Failed to open workspace"))}})(),()=>{o=!0,G.current+=1,B.current+=1,O.current+=1,A.current+=1}},[t,e,i]),(0,L.useEffect)(()=>{if(!a)return;let e=!1,t=G.current,i=++B.current,r=()=>!e&&t===G.current&&i===B.current;return(async()=>{C(!0),P("");try{if("local"===a.type){let e=await a.loadTree();if(!r())return;p(e);let t=M(e);if(!t)return;let{content:i,version:n}=await a.loadFileContent(t);if(!r())return;h(t.id),g([t.id]),b({[t.id]:{content:i,savedContent:i,version:n,isDirty:!1}}),u({[t.id]:D(i,t.id)});return}let e=a.defaultRef,t=a.capabilities.refs?a.getRefs():Promise.resolve([]),[i,n]=await Promise.all([a.loadTree(e),t]);if(!r())return;p(i),R(n),F(e)}catch(e){r()&&P((0,d.w)(e,"Failed to load workspace tree"))}finally{r()&&C(!1)}})(),()=>{e=!0}},[a]);let V=(0,L.useCallback)(e=>{let t=i=>{for(let a of i){if(a.id===e)return a;if(a.children){let e=t(a.children);if(e)return e}}};return t(c)},[c]),X=(0,L.useCallback)(e=>{let t=i=>{for(let a of i){if(a.path===e)return a;if(a.children){let e=t(a.children);if(e)return e}}};return t(c)},[c]),H=(0,L.useCallback)(async e=>{if(!a||!e.path)return;let t=e.id,i=++O.current,r=G.current,n=()=>i===O.current&&r===G.current;if(h(t),g(e=>e.includes(t)?e:[...e,t]),W.current[t])return void z(!1);z(!0),P("");try{let{content:i,version:r}=await a.loadFileContent(e,"remote"===a.type?E:null);if(!n())return;b(e=>({...e,[t]:{content:i,savedContent:i,version:r,isDirty:!1}})),u(e=>({...e,[t]:D(i,t)}))}catch(e){n()&&P((0,d.w)(e,"Failed to load file content"))}finally{n()&&z(!1)}},[a,E]),Z=(0,L.useCallback)(e=>{e?.kind==="file"&&H(e)},[H]),Y=(0,L.useCallback)((e,t)=>{_("idle"),b(i=>{let a=i[e];return a?{...i,[e]:{...a,content:t,isDirty:t!==a.savedContent}}:i}),u(i=>({...i,[e]:D(t,e)}))},[]),q=(0,L.useCallback)(async()=>{if(!a?.capabilities.write||!a.saveFiles)return;let e=Object.entries(W.current).flatMap(([e,t])=>{if(!t.isDirty)return[];let i=V(e);return i?.path?[{fileId:e,file:i,content:t.content,version:t.version}]:[]});if(0===e.length)return;let t=++A.current,i=G.current,r=()=>t===A.current&&i===G.current;_("saving"),P("");try{let t=await a.saveFiles(e.map(({file:e,content:t,version:i})=>({file:e,content:t,version:i})),{message:N||"Update via MarkFlowy",ref:"remote"===a.type?E:null});if(!r())return;let i=new Map(t.files.map(e=>[e.path,e.version])),n=new Map(e.map(e=>[e.fileId,e])),o=e.some(e=>W.current[e.fileId]?.content!==e.content);b(e=>{let t=!1,a={...e};for(let[r,o]of n){let n=e[r];n&&(t=!0,a[r]={...n,savedContent:o.content,version:i.get(o.file.path||"")??n.version,isDirty:n.content!==o.content})}return t?a:e}),_(o?"idle":"saved")}catch(e){r()&&(_("idle"),P((0,d.w)(e,"Failed to save staged files")))}},[a,N,E,V]),J=s[f]||[],K=(0,L.useMemo)(()=>{let e=V(f);return e?.name||"Untitled"},[f,V]),Q=v[f],ee=(0,L.useMemo)(()=>m.flatMap(e=>{if(!v[e]?.isDirty)return[];let t=V(e);return t?[{file:t,fileId:e}]:[]}),[v,V,m]),et=(0,L.useCallback)(e=>{if(!a||"remote"!==a.type||!a.capabilities.refs||e===E||Object.values(W.current).some(e=>e.isDirty)&&!confirm("You have unsaved changes. Switch refs and discard them?"))return;G.current+=1,O.current+=1,A.current+=1;let t=G.current,i=++B.current;z(!1),_("idle"),C(!0),P(""),a.loadTree(e).then(a=>{i===B.current&&t===G.current&&(r.T.clearLoadedDirsCache?.(),p(a),F(e),b({}),u({}),h(""),g([]))}).catch(e=>{i===B.current&&t===G.current&&P((0,d.w)(e,"Failed to load ref"))}).finally(()=>{i===B.current&&t===G.current&&C(!1)})},[a,E]),ei=(0,L.useCallback)(async e=>{if(!a?.loadSubdirectory)return[];let t=G.current,i=await a.loadSubdirectory(e,"remote"===a.type?E:null);return t===G.current?i:[]},[a,E]);return{authLoading:t,isAuthenticated:i,adapter:a,viewType:o,setViewType:l,folderData:c,setFolderData:p,activeId:f,setActiveId:h,opened:m,fileStateMap:v,isClient:y,loadingTree:x,loadingFile:k,saving:"saving"===$,error:j,refs:I,currentRef:E,canWrite:!!(!x&&a?.capabilities.write&&a.saveFiles),commitMessage:N,setCommitMessage:U,saveStatus:$,stagedFiles:ee,handleSelect:Z,handleChange:Y,handleSave:q,handleShowConfirm:({title:e,onConfirm:t})=>{confirm(e)&&t()},handleShowContextMenu:({x:e,y:t,items:i})=>{(0,r.u)({x:e,y:t,items:i})},handleRefChange:et,handleReadSubdirectory:ei,getFileObject:V,getFileObjectByPath:X,currentHeadings:J,currentFileName:K,currentFileState:Q}}(i),J=(0,L.useRef)(null),K=(0,L.useRef)(null),[Q,ee]=(0,L.useState)("editor"),[et,ei]=(0,L.useState)(()=>window.matchMedia("(max-width: 900px)").matches),[ea,er]=(0,L.useState)(null),en=(0,L.useRef)(et),eo=(0,L.useRef)({"workspace-left":19,"workspace-center":64,"workspace-right":17});if((0,L.useEffect)(()=>{let e=window.matchMedia("(max-width: 900px)"),t=()=>ei(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),(0,L.useEffect)(()=>{ea&&(et?(en.current||(eo.current=ea.getLayout()),ea.setLayout({"workspace-left":100*("files"===Q),"workspace-center":100*("editor"===Q),"workspace-right":100*("outline"===Q)})):en.current&&ea.setLayout(eo.current),en.current=et)},[et,Q,ea]),n||!b)return(0,a.jsx)(e2,{children:(0,a.jsx)(tG,{children:(0,a.jsx)(tW,{})})});let el=o?.type==="remote",es=el&&"github"===o.provider.toLowerCase(),ed=el&&o.capabilities.refs,eu=es?"Branch":"Ref",ec=o?.title||i||"Workspace",ep="ri-folder-3-line",ef="ri-hard-drive-2-line",eh=t("workspace.local");return el&&(ep=es?"ri-github-fill":"ri-cloud-line",ef=ed?"ri-git-branch-line":"ri-cloud-line",eh=ed?`${eu}: ${z||"Default"}`:o.provider||"Remote"),(0,a.jsx)(l,{readSubdirectory:V,children:(0,a.jsx)(s,{folderData:p,activeId:h,onFolderDataChange:f,onActiveIdChange:m,children:(0,a.jsxs)(e2,{"data-mobile-view":Q,children:[(0,a.jsx)(eJ.f,{title:`${ec} | MarkFlowy`}),(0,a.jsxs)(e5,{children:[(0,a.jsx)(e8,{children:(0,a.jsxs)(te,{href:"/workspace",children:[(0,a.jsx)("i",{className:"ri-arrow-left-line"}),t("workspace.title")]})}),(0,a.jsx)(e6,{children:(0,a.jsxs)(tt,{children:[(0,a.jsx)(ti,{children:(0,a.jsx)("i",{className:ep})}),(0,a.jsx)(ta,{children:ec}),ed&&k.length>0&&(0,a.jsx)(tr,{"aria-label":`${eu} selector`,title:eu,value:z||k[0]?.name||"",disabled:y||x,onChange:e=>W(e.target.value),children:k.map(e=>(0,a.jsx)("option",{value:e.name,children:e.name},e.name))})]})}),(0,a.jsxs)(e9,{children:[(0,a.jsx)(eK.f,{}),(0,a.jsxs)(tn,{children:[(0,a.jsxs)(to,{children:[(0,a.jsx)("i",{className:"ri-file-text-line"}),Y,q?.isDirty&&" *"]}),_&&h&&q&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(tl,{value:j,onChange:e=>I(e.target.value),"aria-label":t(es?"workspace.commitMessage":"workspace.saveMessage"),placeholder:t(es?"workspace.commitMessage":"workspace.saveMessage")}),(0,a.jsx)(ts,{type:"button",onClick:B,disabled:x,"aria-disabled":x||0===E.length,$status:R,"aria-label":"saving"===R?`Saving ${E.length} staged files`:"saved"===R?"All staged files saved":0===E.length?"No staged files to save":`Save ${E.length} staged files`,children:(0,a.jsxs)(td,{"aria-hidden":"true",children:[(0,a.jsxs)(tu,{$visible:"idle"===R,children:[t("workspace.save"),E.length>1?` ${E.length}`:""]}),(0,a.jsxs)(tu,{$visible:"saving"===R,children:[(0,a.jsx)(tc,{className:"ri-loader-4-line"}),t("workspace.saving")]}),(0,a.jsxs)(tu,{$visible:"saved"===R,children:[(0,a.jsx)("i",{className:"ri-check-line"}),t("workspace.saved")]})]})}),(0,a.jsx)(tp,{role:"status","aria-live":"polite",children:"saving"===R?"Saving staged files":"saved"===R?"All staged files saved":""})]})]})]})]}),C&&(0,a.jsx)(tf,{children:C}),(0,a.jsx)(e7,{"aria-label":t("workspace.panels"),children:["files","editor","outline"].map(e=>(0,a.jsx)(e3,{type:"button","aria-pressed":Q===e,onClick:()=>ee(e),children:t(`workspace.${e}`)},e))}),(0,a.jsxs)(th,{groupRef:er,disabled:et,children:[(0,a.jsx)(eZ,{className:"mf-editor-panel","data-section":"files",id:"workspace-left",defaultSize:et?"0%":240,minSize:200*!et,maxSize:et?"100%":320,collapsible:et,inert:et&&"files"!==Q,children:(0,a.jsxs)(tg,{children:[(0,a.jsx)(r.G,{name:t("workspace.files")}),(0,a.jsx)(tv,{ref:K,children:y?(0,a.jsx)(tV,{children:t("workspace.loadingFiles")}):K.current&&(0,a.jsx)(r.d,{data:p,onSelect:F,dndRootElement:K.current,disableDrag:!0,disableFileOperations:el,fillFlexParentComponent:N,onShowConfirm:A,onShowContextMenu:el?e1:G,getFileObject:X,getFileObjectByPath:H})}),(0,a.jsxs)(tb,{"aria-label":t("workspace.staged"),children:[(0,a.jsxs)(ty,{children:[(0,a.jsxs)(tw,{children:[(0,a.jsx)("i",{className:"ri-git-commit-line","aria-hidden":"true"}),t("workspace.staged")]}),(0,a.jsx)(tx,{children:E.length})]}),(0,a.jsx)(tC,{children:0===E.length?(0,a.jsx)(tS,{children:t("workspace.stagedEmpty")}):E.map(({file:e,fileId:t})=>(0,a.jsxs)(tk,{type:"button",$active:h===t,onClick:()=>{F(e),ee("editor")},"aria-current":h===t?"page":void 0,title:e.path,children:[(0,a.jsx)(tz,{className:"ri-file-text-line","aria-hidden":"true"}),(0,a.jsxs)(t$,{children:[(0,a.jsx)(t_,{children:e.name}),e.path&&e.path!==e.name&&(0,a.jsx)(tj,{children:e.path})]}),(0,a.jsx)(tP,{"aria-hidden":"true"})]},t))})]})]})}),(0,a.jsx)(tm,{className:"mf-editor-separator"}),(0,a.jsx)(eZ,{className:"mf-editor-panel","data-section":"editor",id:"workspace-center",minSize:320*!et,defaultSize:et?"100%":void 0,collapsible:et,inert:et&&"editor"!==Q,groupResizeBehavior:"preserve-relative-size",children:(0,a.jsxs)(tI,{children:[(0,a.jsx)(P,{viewType:u,onViewTypeChange:c}),(0,a.jsxs)(tR,{ref:J,children:[w&&(0,a.jsx)(tF,{children:(0,a.jsx)(tV,{children:t("workspace.loadingFile")})}),!w&&0===g.length&&(0,a.jsxs)(tL,{children:[(0,a.jsx)(tN,{className:"ri-file-list-3-line"}),(0,a.jsx)(tT,{children:t("workspace.noFile")})]}),g.map(e=>{let t=v[e];return t?(0,a.jsx)(tE,{$active:h===e,children:(0,a.jsx)(eQ,{fileId:e,initialContent:t.content,onChange:t=>U(e,t),viewType:u,active:h===e,editable:!el||_})},e):null})]})]})}),(0,a.jsx)(tm,{className:"mf-editor-separator"}),(0,a.jsx)(eZ,{className:"mf-editor-panel","data-section":"outline",id:"workspace-right",defaultSize:et?"0%":220,minSize:180*!et,maxSize:et?"100%":340,collapsible:et,inert:et&&"outline"!==Q,children:(0,a.jsxs)(tD,{children:[(0,a.jsx)(r.G,{name:t("workspace.outline")}),(0,a.jsx)(tM,{children:(0,a.jsx)(r.M,{headingsData:Z,variant:"sidebar",compact:!1,pinned:!0})})]})})]}),(0,a.jsxs)(tU,{children:[(0,a.jsxs)(tB,{children:[(0,a.jsxs)(tA,{children:[(0,a.jsx)("i",{className:ef}),eh]}),E.length>0&&(0,a.jsxs)(tA,{$accent:!0,children:[E.length," staged ",1===E.length?"file":"files"]})]}),(0,a.jsxs)(tO,{children:[(0,a.jsx)(tA,{children:t(`workspace.${"wysiwyg"===u?"editor":"preview"===u?"previewMode":"source"}`)}),(0,a.jsx)(tA,{children:t("workspace.headingCount",{count:Z.length})})]})]}),(0,a.jsx)(r.c,{})]})})})}let e2=z.U.div.withConfig({displayName:"[...id]__Container",componentId:"sc-4a1a5ad7-0"})`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);

  @media (max-width: 900px) {
    .mf-editor-separator {
      display: none;
    }
  }
`,e5=z.U.header.withConfig({displayName:"[...id]__TopToolbar",componentId:"sc-4a1a5ad7-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 20px;
  border-bottom: 1px solid var(--line-soft);
  background: var(--paper);
  flex-shrink: 0;
  min-height: 64px;

  @media (max-width: 1100px) {
    gap: 10px;
    padding: 0 12px;
  }
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 10px 16px;
    padding: 12px 16px;
  }
`,e7=z.U.nav.withConfig({displayName:"[...id]__MobilePanelNavigation",componentId:"sc-4a1a5ad7-2"})`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    gap: 6px;
    padding: 6px 16px;
    background: var(--paper-warm);
    border-bottom: 1px solid var(--line-soft);
  }
`,e3=(0,z.U)(_.f).withConfig({displayName:"[...id]__MobilePanelButton",componentId:"sc-4a1a5ad7-3"})`
  && {
    height: 32px;
    flex: 1;
    padding: 0 12px;
    border-radius: 6px;
    font-size: 13px;
    color: var(--ink-mute);
    transition:
      color 160ms ease,
      background-color 160ms ease;
  }
  &[aria-pressed='true'] {
    background: var(--paper);
    color: var(--seal);
    box-shadow: 0 1px 3px color-mix(in srgb, var(--shadow-color) 10%, transparent);
  }
`,e8=z.U.div.withConfig({displayName:"[...id]__ToolbarLeft",componentId:"sc-4a1a5ad7-4"})`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`,e6=z.U.div.withConfig({displayName:"[...id]__ToolbarCenter",componentId:"sc-4a1a5ad7-5"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
`,e9=z.U.div.withConfig({displayName:"[...id]__ToolbarRight",componentId:"sc-4a1a5ad7-6"})`
  flex: 0 1 auto;
  min-width: 0;
  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,te=(0,z.U)(B.default).withConfig({displayName:"[...id]__BackLink",componentId:"sc-4a1a5ad7-7"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,k.f)(4)};
  height: 34px;
  padding: 0 ${(0,k.f)(8)};
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
  color: ${e=>e.theme.disabledFontColor};
  text-decoration: none;
  transition:
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    background: ${e=>e.theme.hoverColor};
    color: ${e=>e.theme.primaryFontColor};
  }
`,tt=z.U.div.withConfig({displayName:"[...id]__WorkspaceInfo",componentId:"sc-4a1a5ad7-8"})`
  display: flex;
  align-items: center;
  gap: ${(0,k.f)(8)};
  min-width: 0;
  max-width: 100%;
`,ti=z.U.div.withConfig({displayName:"[...id]__WorkspaceIcon",componentId:"sc-4a1a5ad7-9"})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.accentColorFocused};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  color: ${e=>e.theme.accentColor};
  font-size: ${(0,k.f)(15)};
  flex: 0 0 auto;
`,ta=z.U.div.withConfig({displayName:"[...id]__WorkspaceTitle",componentId:"sc-4a1a5ad7-10"})`
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tr=z.U.select.withConfig({displayName:"[...id]__BranchSelect",componentId:"sc-4a1a5ad7-11"})`
  height: 34px;
  padding: 0 ${(0,k.f)(8)};
  font-size: ${e=>e.theme.fontXs};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  color: ${e=>e.theme.primaryFontColor};
  cursor: pointer;

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,tn=z.U.div.withConfig({displayName:"[...id]__Actions",componentId:"sc-4a1a5ad7-12"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(0,k.f)(6)};
  min-width: 0;
`,to=z.U.div.withConfig({displayName:"[...id]__FileChip",componentId:"sc-4a1a5ad7-13"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,k.f)(5)};
  max-width: ${(0,k.f)(180)};
  height: 34px;
  padding: 0 ${(0,k.f)(8)};
  font-size: ${e=>e.theme.fontXs};
  color: ${e=>e.theme.disabledFontColor};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tl=z.U.input.withConfig({displayName:"[...id]__CommitInput",componentId:"sc-4a1a5ad7-14"})`
  height: 34px;
  padding: 0 ${(0,k.f)(8)};
  font-size: ${e=>e.theme.fontXs};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  color: ${e=>e.theme.primaryFontColor};
  width: clamp(100px, 14vw, 180px);
  min-width: 0;
  @media (max-width: 900px) {
    flex: 1;
  }

  &:focus {
    outline: none;
  }
`,ts=z.U.button.withConfig({displayName:"[...id]__SaveButton",componentId:"sc-4a1a5ad7-15"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 ${(0,k.f)(10)};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 500;
  background: ${e=>"saved"===e.$status?e.theme.successColor:e.theme.accentColor};
  color: var(--on-accent);
  border: 1px solid
    ${e=>"saved"===e.$status?e.theme.successColor:e.theme.accentColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  cursor: pointer;
  transform: scale(1);
  transition:
    background-color 180ms cubic-bezier(0.23, 1, 0.32, 1),
    border-color 180ms cubic-bezier(0.23, 1, 0.32, 1),
    opacity 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);

  &:active:not(:disabled):not([aria-disabled='true']) {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  &:disabled,
  &[aria-disabled='true'] {
    opacity: ${e=>"saved"===e.$status?1:.65};
    cursor: not-allowed;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled):not([aria-disabled='true']) {
      opacity: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition:
      background-color 120ms ease,
      border-color 120ms ease,
      opacity 120ms ease;

    &:active:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`,td=z.U.span.withConfig({displayName:"[...id]__SaveButtonViewport",componentId:"sc-4a1a5ad7-16"})`
  position: relative;
  display: block;
  width: ${(0,k.f)(64)};
  height: 1em;
  line-height: 1;
`,tu=z.U.span.withConfig({displayName:"[...id]__SaveButtonState",componentId:"sc-4a1a5ad7-17"})`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,k.f)(4)};
  opacity: ${e=>+!!e.$visible};
  filter: ${e=>e.$visible?"blur(0)":"blur(2px)"};
  transform: ${e=>e.$visible?"translateY(0)":"translateY(4px)"};
  transition:
    opacity 180ms cubic-bezier(0.23, 1, 0.32, 1),
    filter 180ms ease,
    transform 180ms cubic-bezier(0.23, 1, 0.32, 1);

  @media (prefers-reduced-motion: reduce) {
    filter: none;
    transform: none;
    transition: opacity 120ms ease;
  }
`,tc=z.U.i.withConfig({displayName:"[...id]__SaveSpinner",componentId:"sc-4a1a5ad7-18"})`
  animation: mf-web-save-spin 700ms linear infinite;

  @keyframes mf-web-save-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1.4s;
  }
`,tp=z.U.span.withConfig({displayName:"[...id]__SaveAnnouncement",componentId:"sc-4a1a5ad7-19"})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,tf=z.U.div.withConfig({displayName:"[...id]__ErrorBanner",componentId:"sc-4a1a5ad7-20"})`
  padding: ${(0,k.f)(8)} ${(0,k.f)(12)};
  background: ${e=>`color-mix(in srgb, ${e.theme.dangerColor} 7%, var(--paper))`};
  border-bottom: 1px solid ${e=>e.theme.dangerColor};
  color: ${e=>e.theme.dangerColor};
  font-size: ${e=>e.theme.fontSm};
`,th=(0,z.U)(eX).withConfig({displayName:"[...id]__MainContent",componentId:"sc-4a1a5ad7-21"})`
  flex: 1;
  overflow: hidden;
  min-height: 0;
`,tm=(0,z.U)(eq).withConfig({displayName:"[...id]__StyleSeparator",componentId:"sc-4a1a5ad7-22"})`
  width: 1px;
  background-color: ${e=>e.theme.borderColor};
  cursor: col-resize !important;
  transition:
    background-color 0.16s ease,
    width 0.16s ease;
  flex: 0 0 auto;

  &:focus-visible {
    outline: none;
    background-color: ${e=>e.theme.labelFontColor};
  }

  &[data-separator='hover'],
  &[data-separator='active'] {
    background-color: ${e=>e.theme.accentColor};
  }
`,tg=z.U.div.withConfig({displayName:"[...id]__LeftSidebar",componentId:"sc-4a1a5ad7-23"})`
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.sideBarBgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,tv=z.U.div.withConfig({displayName:"[...id]__FileTreeWrapper",componentId:"sc-4a1a5ad7-24"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${(0,k.f)(6)} 0;
`,tb=z.U.section.withConfig({displayName:"[...id]__StagedPanel",componentId:"sc-4a1a5ad7-25"})`
  flex: 0 0 auto;
  min-height: 0;
  border-top: 1px solid ${e=>e.theme.borderColor};
  background: ${e=>e.theme.sideBarBgColor};
`,ty=z.U.div.withConfig({displayName:"[...id]__StagedHeader",componentId:"sc-4a1a5ad7-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(0,k.f)(30)};
  padding: 0 ${(0,k.f)(10)};
`,tw=z.U.span.withConfig({displayName:"[...id]__StagedTitle",componentId:"sc-4a1a5ad7-27"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,k.f)(6)};
  min-width: 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`,tx=z.U.span.withConfig({displayName:"[...id]__StagedCount",componentId:"sc-4a1a5ad7-28"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${(0,k.f)(18)};
  height: ${(0,k.f)(18)};
  padding: 0 ${(0,k.f)(5)};
  border-radius: 999px;
  background: ${e=>e.theme.accentColorFocused};
  color: ${e=>e.theme.accentColor};
  font-size: ${e=>e.theme.fontXs};
  line-height: 1;
`,tC=z.U.div.withConfig({displayName:"[...id]__StagedList",componentId:"sc-4a1a5ad7-29"})`
  max-height: ${(0,k.f)(230)};
  overflow: auto;
  padding: 0 ${(0,k.f)(6)} ${(0,k.f)(7)};
`,tS=z.U.div.withConfig({displayName:"[...id]__StagedEmpty",componentId:"sc-4a1a5ad7-30"})`
  padding: ${(0,k.f)(8)} ${(0,k.f)(6)} ${(0,k.f)(10)};
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
`,tk=z.U.button.withConfig({displayName:"[...id]__StagedItemButton",componentId:"sc-4a1a5ad7-31"})`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${(0,k.f)(7)};
  padding: ${(0,k.f)(6)} ${(0,k.f)(7)};
  border: 0;
  border-radius: ${e=>e.theme.smallBorderRadius};
  background: ${e=>e.$active?e.theme.fileTreeSelectedBgColor:"transparent"};
  color: ${e=>e.theme.primaryFontColor};
  font: inherit;
  text-align: left;
  cursor: pointer;
  opacity: 1;
  transform: translateY(0);
  transition:
    background-color 150ms ease,
    opacity 180ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 180ms cubic-bezier(0.23, 1, 0.32, 1);

  @starting-style {
    opacity: 0;
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${e=>e.$active?e.theme.fileTreeSelectedBgColor:e.theme.hoverColor};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: background-color 120ms ease;

    @starting-style {
      opacity: 1;
      transform: none;
    }

    &:active {
      transform: none;
    }
  }
`,tz=z.U.i.withConfig({displayName:"[...id]__StagedFileIcon",componentId:"sc-4a1a5ad7-32"})`
  flex: 0 0 auto;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${(0,k.f)(14)};
`,t$=z.U.span.withConfig({displayName:"[...id]__StagedFileText",componentId:"sc-4a1a5ad7-33"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${(0,k.f)(1)};
`,t_=z.U.span.withConfig({displayName:"[...id]__StagedFileName",componentId:"sc-4a1a5ad7-34"})`
  overflow: hidden;
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontXs};
  text-overflow: ellipsis;
  white-space: nowrap;
`,tj=z.U.span.withConfig({displayName:"[...id]__StagedFilePath",componentId:"sc-4a1a5ad7-35"})`
  overflow: hidden;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  text-overflow: ellipsis;
  white-space: nowrap;
`,tP=z.U.span.withConfig({displayName:"[...id]__StagedDot",componentId:"sc-4a1a5ad7-36"})`
  flex: 0 0 auto;
  width: ${(0,k.f)(6)};
  height: ${(0,k.f)(6)};
  border-radius: 50%;
  background: ${e=>e.theme.accentColor};
  box-shadow: 0 0 0 ${(0,k.f)(3)} ${e=>e.theme.accentColorFocused};
`,tI=z.U.div.withConfig({displayName:"[...id]__CenterArea",componentId:"sc-4a1a5ad7-37"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  height: 100%;
  background: ${e=>e.theme.bgColor};
`,tR=z.U.div.withConfig({displayName:"[...id]__EditorContent",componentId:"sc-4a1a5ad7-38"})`
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 0;
`,tE=z.U.div.withConfig({displayName:"[...id]__EditorWrapper",componentId:"sc-4a1a5ad7-39"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${e=>e.$active?"block":"none"};
`,tF=z.U.div.withConfig({displayName:"[...id]__EditorLoading",componentId:"sc-4a1a5ad7-40"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.bgColor};
`,tL=z.U.div.withConfig({displayName:"[...id]__EditorEmpty",componentId:"sc-4a1a5ad7-41"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.bgColor};
  gap: ${(0,k.f)(8)};
`,tN=z.U.i.withConfig({displayName:"[...id]__EmptyIcon",componentId:"sc-4a1a5ad7-42"})`
  font-size: ${(0,k.f)(28)};
  color: ${e=>e.theme.disabledFontColor};
`,tT=z.U.div.withConfig({displayName:"[...id]__EmptyText",componentId:"sc-4a1a5ad7-43"})`
  font-size: ${e=>e.theme.fontSm};
  color: ${e=>e.theme.disabledFontColor};
`,tD=z.U.div.withConfig({displayName:"[...id]__RightSidebar",componentId:"sc-4a1a5ad7-44"})`
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.rightBarBgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,tM=z.U.div.withConfig({displayName:"[...id]__TocContainer",componentId:"sc-4a1a5ad7-45"})`
  flex: 1;
  overflow: hidden;
`,tU=z.U.div.withConfig({displayName:"[...id]__StatusBar",componentId:"sc-4a1a5ad7-46"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 ${(0,k.f)(8)};
  background: ${e=>e.theme.statusBarBgColor};
  border-top: 1px solid ${e=>e.theme.borderColor};
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  flex-shrink: 0;
  gap: ${(0,k.f)(8)};
`,tB=z.U.div.withConfig({displayName:"[...id]__StatusLeft",componentId:"sc-4a1a5ad7-47"})`
  display: flex;
  align-items: center;
  gap: ${(0,k.f)(10)};
  min-width: 0;
`,tO=z.U.div.withConfig({displayName:"[...id]__StatusRight",componentId:"sc-4a1a5ad7-48"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,k.f)(10)};
  min-width: 0;
`,tA=z.U.span.withConfig({displayName:"[...id]__StatusItem",componentId:"sc-4a1a5ad7-49"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,k.f)(4)};
  color: ${e=>e.$accent?e.theme.warnColor:"inherit"};
  white-space: nowrap;
`,tG=z.U.div.withConfig({displayName:"[...id]__LoadingContainer",componentId:"sc-4a1a5ad7-50"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${e=>e.theme.bgColor};
`,tW=z.U.div.withConfig({displayName:"[...id]__LoadingSpinner",componentId:"sc-4a1a5ad7-51"})`
  width: ${(0,k.f)(40)};
  height: ${(0,k.f)(40)};
  border: 3px solid var(--line-soft);
  border-top-color: var(--seal);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,tV=z.U.div.withConfig({displayName:"[...id]__LoadingText",componentId:"sc-4a1a5ad7-52"})`
  font-size: ${e=>e.theme.fontSm};
  color: ${e=>e.theme.disabledFontColor};
  text-align: center;
  padding: ${(0,k.f)(20)};
`;e.s(["__N_SSP",0,!0,"default",0,function(){return(0,a.jsx)(e0,{})}],46174)},25167,(e,t,i)=>{e.i(50461),Object.defineProperty(i,"__esModule",{value:!0});var a={default:function(){return c},noSSR:function(){return u}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let n=e.r(31640),o=e.r(91398);e.r(91788);let l=n._(e.r(52414)),s="u"<typeof window;function d(e){return{default:e?.default||e}}function u(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);let i=t.loading;return()=>(0,o.jsx)(i,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function c(e,t){let i=l.default,a={loading:({error:e,isLoading:t,pastDelay:i})=>null};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let r=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?i({...a,loader:()=>null!=r?r().then(d):Promise.resolve(d(()=>null))}):(delete a.webpack,delete a.modules,u(i,a))}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},61592,(e,t,i)=>{e.i(50461),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=(e.r(31640)._(e.r(91788))).default.createContext(null)},52414,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return p}});let a=e.r(31640)._(e.r(91788)),r=e.r(61592),n=[],o=[],l=!1;function s(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class d{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function u(t){return function(t,i){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},i),u=null;function c(){if(!u){let e=new d(t,s);u={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return u.promise()}if("u"<typeof window&&n.push(c),!l&&"u">typeof window){let t=s.webpack&&"function"==typeof e.t.resolveWeak?s.webpack():s.modules;t&&o.push(e=>{for(let i of t)if(e.includes(i))return c()})}function p(e,t){let i;c(),(i=a.default.useContext(r.LoadableContext))&&Array.isArray(s.modules)&&s.modules.forEach(e=>{i(e)});let n=a.default.useSyncExternalStore(u.subscribe,u.getCurrentValue,u.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:u.retry}),[]),a.default.useMemo(()=>{var t;return n.loading||n.error?a.default.createElement(s.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:u.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return p.preload=()=>c(),p.displayName="LoadableComponent",a.default.forwardRef(p)}(s,t)}function c(e,t){let i=[];for(;e.length;){let a=e.pop();i.push(a(t))}return Promise.all(i).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(n).then(e,t)}),u.preloadReady=(e=[])=>new Promise(t=>{let i=()=>(l=!0,t());c(o,e).then(i,i)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=u.preloadReady);let p=u}],58686,(e,t,i)=>{let a="/workspace/[...id]";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(46174)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},68489,(e,t,i)=>{t.exports=e.r(25167)}]);