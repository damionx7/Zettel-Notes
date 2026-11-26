module.exports=[[14373,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(57507),f=b([e]);[e]=f.then?(await f)():f;let g={protectFileIds:()=>{},protectPaths:()=>{}},h={copyText:async a=>{if(!navigator.clipboard)throw Error("Clipboard API is unavailable");await navigator.clipboard.writeText(a)}};a.s(["f",0,({children:a,readSubdirectory:b})=>(0,d.jsx)(e.i.Provider,{value:h,children:(0,d.jsx)(e.R.Provider,{value:{runFileMutation:a=>a(g),readDirectory:async()=>[],readSubdirectory:async a=>b?b(a):[],writeFile:async()=>{},deleteFile:async()=>{},deleteFolder:async()=>{},trashFile:async()=>{},isDir:async()=>!1,fileExists:async()=>!1,pathsReferToSameDirectoryEntry:async(a,b)=>a===b,moveFilesToTargetFolder:async()=>[],pathJoin:async(a,b)=>a.endsWith("/")?`${a}${b}`:`${a}/${b}`,getPathName:async a=>{let b=a.split("/");return b[b.length-1]||a},getFileContent:async()=>null,getMdRelativePath:async a=>a,createFolder:async()=>{},renameFile:async(a,b)=>({old_path:a,new_path:b,children:[],is_folder:!1}),copyFile:async a=>a},children:a})})]),c()}catch(a){c(a)}},!1),72171,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(57507),f=b([e]);[e]=f.then?(await f)():f,a.s(["f",0,({children:a,folderData:b=null,activeId:c,onFolderDataChange:f,onActiveIdChange:g})=>(0,d.jsx)(e.X.Provider,{value:{activeId:c,folderData:b,setFolderData:a=>{f?.(a)},setFolderDataPure:a=>{f?.(a)},deleteNode:async()=>{},trashNode:async()=>{},getRootPath:()=>void 0,refreshFolder:async()=>{},scrollTo:()=>{},closeAll:()=>{},openFolder:()=>{}},children:a})]),c()}catch(a){c(a)}},!1),65834,a=>{var b=a.i(71211),c=a.i(13753);let d="files",e=(a,b)=>Error(b?.message||a),f=()=>new Promise((a,b)=>{if(!globalThis.indexedDB)return void b(Error("IndexedDB is not available in this browser."));let c=globalThis.indexedDB.open("markflowy-demo-workspace",1),f=!1;c.onupgradeneeded=()=>{let a=c.result;a.objectStoreNames.contains(d)||a.createObjectStore(d,{keyPath:"id"})},c.onerror=()=>{f=!0,b(e("Failed to open the demo workspace database.",c.error))},c.onblocked=()=>{f=!0,b(Error("The demo workspace database is blocked by another browser tab."))},c.onsuccess=()=>{f?c.result.close():(f=!0,a(c.result))}});async function g(a){let b=await f();try{let c=b.transaction(d,"readonly").objectStore(d).get(a);return await new Promise((a,b)=>{c.onerror=()=>{b(e("Failed to read the demo workspace file.",c.error))},c.onsuccess=()=>{a(c.result??null)}})}finally{b.close()}}async function h(a,b){let c=await f(),g=String(Date.now());try{await new Promise((f,h)=>{let i=c.transaction(d,"readwrite");i.oncomplete=()=>f(),i.onerror=()=>{h(e("Failed to save the demo workspace file.",i.error))},i.onabort=()=>{h(e("Saving the demo workspace file was aborted.",i.error))},i.objectStore(d).put({id:a,content:b,version:g})})}finally{c.close()}return g}let i="demo-file",j=[{id:i,name:"demo.md",kind:"file",path:"/demo.md",ext:"md"}],k={[i]:`# MarkFlowy Demo

Edit this file and click Save.

Your changes stay in this browser's IndexedDB after refresh.
`},l={title:"Demo Workspace",provider:"local",requiresAuth:!1,capabilities:{refs:!1,write:!0,delete:!1},loadTree:async()=>j,async loadFileContent(a){let b=await g(a.id);return b?{content:b.content,version:b.version}:{content:k[a.id]||"# New File\n\nStart writing here..."}},async saveFileContent(a,b){if(a.id!==i)throw Error(`Unknown demo workspace file: ${a.id}`);return{version:await h(a.id,b)}}};function m(a){let b={type:"local",title:a.title,provider:a.provider||"local",requiresAuth:a.requiresAuth??!1,capabilities:a.capabilities,loadTree:()=>a.loadTree(),loadFileContent:b=>a.loadFileContent(b)},c=a.loadSubdirectory;c&&(b.loadSubdirectory=a=>c(a));let d=a.saveFileContent;a.capabilities.write&&d&&(b.saveFileContent=(a,b,c)=>d(a,b,c));let e=a.saveFiles;return a.capabilities.write&&e?b.saveFiles=(a,b)=>e(a,b):a.capabilities.write&&d&&(b.saveFiles=async(a,b)=>{let c=[];for(let e of a){let a=await d(e.file,e.content,{message:b?.message,version:e.version,ref:b?.ref});c.push({path:e.file.path||e.file.id,version:a.version})}return{files:c}}),b}async function n(a){var c;let d,e,f=await b.a.getDescriptor(a);return c=f,d=c.label||c.name,e={type:"remote",workspaceId:a,descriptor:c,defaultRef:c.defaultRef,title:d,provider:c.provider,requiresAuth:!0,capabilities:c.capabilities,async loadTree(e=c.defaultRef){let f=await b.a.loadTree(a,e);return[{id:`remote-workspace-${a}-root`,name:d,kind:"dir",path:"",children:f}]},async loadFileContent(d,e=c.defaultRef){if(!d.path)throw Error("File path is required");return b.a.loadFileContent(a,d.path,e)},getRefs:()=>b.a.getRefs(a),loadSubdirectory:async(d,e=c.defaultRef)=>b.a.loadSubdirectory(a,d,e)},c.capabilities.write&&(e.saveFileContent=async(d,e,f)=>{if(!d.path)throw Error("File path is required");return b.a.saveFileContent(a,d.path,{message:f?.message||"Update via MarkFlowy",content:e,version:f?.version,ref:f?.ref??c.defaultRef})},e.saveFiles=async(d,e)=>b.a.saveFileContents(a,{message:e?.message||"Update via MarkFlowy",files:d.map(({file:a,content:b,version:c})=>{if(!a.path)throw Error("File path is required");return{path:a.path,content:b,version:c}}),ref:e?.ref??c.defaultRef})),e}async function o(a,b){if("LOCAL"===a.type){let c=await b.resolveLocalBackend?.(a);if(c)return m(c);throw Error(`Local workspace "${a.name}" is not bound to a browser local-file backend yet.`)}return n(a.id)}async function p(a,b={}){let d;return"demo-workspace"===a?m(l):o(await (d=a,c.k.get(`/workspaces/${encodeURIComponent(d)}`)),b)}a.s(["D",0,p,"P",0,function(a){return"demo-workspace"!==a}],65834)},34642,a=>a.a(async(b,c)=>{try{var d=a.i(14373),e=a.i(72171);a.i(65834);var f=b([d,e]);[d,e]=f.then?(await f)():f,a.s([]),c()}catch(a){c(a)}},!1),56549,a=>{var b=a.i(8171),c=a.i(27669);a.s(["f",0,({children:a})=>{let d=(0,c.useRef)(null),[e,f]=(0,c.useState)({width:0,height:0});return(0,c.useEffect)(()=>{let a=d.current;if(!a)return;let b=()=>{let{width:b,height:c}=a.getBoundingClientRect();f({width:b,height:c})};b();let c=new ResizeObserver(b);return c.observe(a),()=>{c.disconnect()}},[]),(0,b.jsx)("div",{ref:d,style:{width:"100%",height:"100%",overflow:"hidden"},children:e.width>0&&e.height>0&&a(e)})}])},4502,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(57507),f=a.i(88844),g=a.i(42931),h=a.i(21377),i=a.i(82539),j=b([e]);function k({viewType:a,onViewTypeChange:b}){let{t:c}=(0,h.useTranslation)();return(0,d.jsx)(n,{"aria-label":c("workspace.editor"),children:[["wysiwyg","workspace.editor"],["source","workspace.source"],["preview","workspace.previewMode"]].map(([e,f])=>(0,d.jsx)(o,{type:"button","aria-pressed":a===e,onClick:()=>b(e),children:c(f)},e))})}[e]=j.then?(await j)():j;let l=g.default.div.withConfig({displayName:"EditorToolbar__ToolbarSection",componentId:"sc-8be2398-0"})`
  display: flex;
  align-items: center;
  gap: ${(0,f.f)(2)};
`,m=(0,g.default)(e.E).withConfig({displayName:"EditorToolbar__EditorToolbarWrapper",componentId:"sc-8be2398-1"})`
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
`,n=g.default.div.withConfig({displayName:"EditorToolbar__ModeGroup",componentId:"sc-8be2398-2"})`
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 8px;
  background: var(--paper-warm);
`,o=(0,g.default)(i.f).withConfig({displayName:"EditorToolbar__ModeButton",componentId:"sc-8be2398-3"})`
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
`;a.s(["f",0,function({viewType:a,onViewTypeChange:b}){return(0,d.jsxs)(m,{children:[(0,d.jsx)(k,{viewType:a,onViewTypeChange:b}),(0,d.jsx)(e.e,{}),(0,d.jsxs)(l,{children:[(0,d.jsx)(e.Z,{icon:"ri-arrow-go-back-line",onClick:()=>{},tooltipProps:{title:"Undo"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-arrow-go-forward-line",onClick:()=>{},tooltipProps:{title:"Redo"},size:"small",rounded:"smooth"})]}),(0,d.jsx)(e.e,{}),(0,d.jsxs)(l,{children:[(0,d.jsx)(e.Z,{icon:"ri-h-1",onClick:()=>{},tooltipProps:{title:"Heading 1"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-h-2",onClick:()=>{},tooltipProps:{title:"Heading 2"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-h-3",onClick:()=>{},tooltipProps:{title:"Heading 3"},size:"small",rounded:"smooth"})]}),(0,d.jsx)(e.e,{}),(0,d.jsxs)(l,{children:[(0,d.jsx)(e.Z,{icon:"ri-bold",onClick:()=>{},tooltipProps:{title:"Bold"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-italic",onClick:()=>{},tooltipProps:{title:"Italic"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-strikethrough",onClick:()=>{},tooltipProps:{title:"Strikethrough"},size:"small",rounded:"smooth"})]}),(0,d.jsx)(e.e,{}),(0,d.jsxs)(l,{children:[(0,d.jsx)(e.Z,{icon:"ri-list-unordered",onClick:()=>{},tooltipProps:{title:"Bullet List"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-list-ordered",onClick:()=>{},tooltipProps:{title:"Numbered List"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-checkbox-line",onClick:()=>{},tooltipProps:{title:"Task List"},size:"small",rounded:"smooth"})]}),(0,d.jsx)(e.e,{}),(0,d.jsxs)(l,{children:[(0,d.jsx)(e.Z,{icon:"ri-link",onClick:()=>{},tooltipProps:{title:"Link"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-image-line",onClick:()=>{},tooltipProps:{title:"Image"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-code-line",onClick:()=>{},tooltipProps:{title:"Code"},size:"small",rounded:"smooth"}),(0,d.jsx)(e.Z,{icon:"ri-double-quotes-l",onClick:()=>{},tooltipProps:{title:"Quote"},size:"small",rounded:"smooth"})]})]})}]),c()}catch(a){c(a)}},!1),431,a=>a.a(async(b,c)=>{try{var d=a.i(57507),e=a.i(34642),f=a.i(65834),g=a.i(71211),h=a.i(79297),i=a.i(27669),j=b([d,e]);[d,e]=j.then?(await j)():j;let k=(a,b)=>{let c,d=/^(#{1,6})\s+(.+)$/gm,e=[];for(;null!==(c=d.exec(a));){let a=c[1].length,d=c[2].trim(),f=`heading-${b}-${e.length}-${d.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;e.push({depth:a,value:d,id:f,htmlNode:null,onClick:a=>{let b=document.getElementById(a.id);b&&b.scrollIntoView({behavior:"smooth",block:"start"})}})}return e},l=a=>{for(let b of a){if("file"===b.kind)return b;if(b.children){let a=l(b.children);if(a)return a}}};a.s(["d",0,function(a){return Array.isArray(a)?a.filter(Boolean).join("/"):a||""},"D",0,function(a){let{loading:b,isAuthenticated:c}=(0,h.F)(!1),[e,j]=(0,i.useState)(null),[m,n]=(0,i.useState)("wysiwyg"),[o,p]=(0,i.useState)({}),[q,r]=(0,i.useState)([]),[s,t]=(0,i.useState)(""),[u,v]=(0,i.useState)([]),[w,x]=(0,i.useState)({}),[y,z]=(0,i.useState)(!1),[A,B]=(0,i.useState)(!1),[C,D]=(0,i.useState)(!1),[E,F]=(0,i.useState)("idle"),[G,H]=(0,i.useState)(""),[I,J]=(0,i.useState)([]),[K,L]=(0,i.useState)(null),[M,N]=(0,i.useState)("Update via MarkFlowy"),O=(0,i.useRef)(0),P=(0,i.useRef)(0),Q=(0,i.useRef)(0),R=(0,i.useRef)(0),S=(0,i.useRef)(w);S.current=w,(0,i.useEffect)(()=>{z(!0)},[]),(0,i.useEffect)(()=>{if(!a||b)return;let e=++R.current;if(O.current+=1,P.current+=1,Q.current+=1,d.T.clearLoadedDirsCache?.(),j(null),r([]),t(""),v([]),x({}),p({}),J([]),L(null),D(!1),F("idle"),(0,f.P)(a)&&!c){B(!1),H("Sign in to open this workspace.");return}let h=!1;return B(!0),H(""),(async()=>{try{let b=await (0,f.D)(a);if(h||e!==R.current)return;j(b),L("remote"===b.type?b.defaultRef:null)}catch(a){if(h||e!==R.current)return;B(!1),H((0,g.w)(a,"Failed to open workspace"))}})(),()=>{h=!0,R.current+=1,O.current+=1,P.current+=1,Q.current+=1}},[b,a,c]),(0,i.useEffect)(()=>{if(!e)return;let a=!1,b=R.current,c=++O.current,d=()=>!a&&b===R.current&&c===O.current;return(async()=>{B(!0),H("");try{if("local"===e.type){let a=await e.loadTree();if(!d())return;r(a);let b=l(a);if(!b)return;let{content:c,version:f}=await e.loadFileContent(b);if(!d())return;t(b.id),v([b.id]),x({[b.id]:{content:c,savedContent:c,version:f,isDirty:!1}}),p({[b.id]:k(c,b.id)});return}let a=e.defaultRef,b=e.capabilities.refs?e.getRefs():Promise.resolve([]),[c,f]=await Promise.all([e.loadTree(a),b]);if(!d())return;r(c),J(f),L(a)}catch(a){d()&&H((0,g.w)(a,"Failed to load workspace tree"))}finally{d()&&B(!1)}})(),()=>{a=!0}},[e]);let T=(0,i.useCallback)(a=>{let b=c=>{for(let d of c){if(d.id===a)return d;if(d.children){let a=b(d.children);if(a)return a}}};return b(q)},[q]),U=(0,i.useCallback)(a=>{let b=c=>{for(let d of c){if(d.path===a)return d;if(d.children){let a=b(d.children);if(a)return a}}};return b(q)},[q]),V=(0,i.useCallback)(async a=>{if(!e||!a.path)return;let b=a.id,c=++P.current,d=R.current,f=()=>c===P.current&&d===R.current;if(t(b),v(a=>a.includes(b)?a:[...a,b]),S.current[b])return void D(!1);D(!0),H("");try{let{content:c,version:d}=await e.loadFileContent(a,"remote"===e.type?K:null);if(!f())return;x(a=>({...a,[b]:{content:c,savedContent:c,version:d,isDirty:!1}})),p(a=>({...a,[b]:k(c,b)}))}catch(a){f()&&H((0,g.w)(a,"Failed to load file content"))}finally{f()&&D(!1)}},[e,K]),W=(0,i.useCallback)(a=>{a?.kind==="file"&&V(a)},[V]),X=(0,i.useCallback)((a,b)=>{F("idle"),x(c=>{let d=c[a];return d?{...c,[a]:{...d,content:b,isDirty:b!==d.savedContent}}:c}),p(c=>({...c,[a]:k(b,a)}))},[]),Y=(0,i.useCallback)(async()=>{if(!e?.capabilities.write||!e.saveFiles)return;let a=Object.entries(S.current).flatMap(([a,b])=>{if(!b.isDirty)return[];let c=T(a);return c?.path?[{fileId:a,file:c,content:b.content,version:b.version}]:[]});if(0===a.length)return;let b=++Q.current,c=R.current,d=()=>b===Q.current&&c===R.current;F("saving"),H("");try{let b=await e.saveFiles(a.map(({file:a,content:b,version:c})=>({file:a,content:b,version:c})),{message:M||"Update via MarkFlowy",ref:"remote"===e.type?K:null});if(!d())return;let c=new Map(b.files.map(a=>[a.path,a.version])),f=new Map(a.map(a=>[a.fileId,a])),g=a.some(a=>S.current[a.fileId]?.content!==a.content);x(a=>{let b=!1,d={...a};for(let[e,g]of f){let f=a[e];f&&(b=!0,d[e]={...f,savedContent:g.content,version:c.get(g.file.path||"")??f.version,isDirty:f.content!==g.content})}return b?d:a}),F(g?"idle":"saved")}catch(a){d()&&(F("idle"),H((0,g.w)(a,"Failed to save staged files")))}},[e,M,K,T]),Z=o[s]||[],$=(0,i.useMemo)(()=>{let a=T(s);return a?.name||"Untitled"},[s,T]),_=w[s],aa=(0,i.useMemo)(()=>u.flatMap(a=>{if(!w[a]?.isDirty)return[];let b=T(a);return b?[{file:b,fileId:a}]:[]}),[w,T,u]),ab=(0,i.useCallback)(a=>{if(!e||"remote"!==e.type||!e.capabilities.refs||a===K||Object.values(S.current).some(a=>a.isDirty)&&!confirm("You have unsaved changes. Switch refs and discard them?"))return;R.current+=1,P.current+=1,Q.current+=1;let b=R.current,c=++O.current;D(!1),F("idle"),B(!0),H(""),e.loadTree(a).then(e=>{c===O.current&&b===R.current&&(d.T.clearLoadedDirsCache?.(),r(e),L(a),x({}),p({}),t(""),v([]))}).catch(a=>{c===O.current&&b===R.current&&H((0,g.w)(a,"Failed to load ref"))}).finally(()=>{c===O.current&&b===R.current&&B(!1)})},[e,K]),ac=(0,i.useCallback)(async a=>{if(!e?.loadSubdirectory)return[];let b=R.current,c=await e.loadSubdirectory(a,"remote"===e.type?K:null);return b===R.current?c:[]},[e,K]);return{authLoading:b,isAuthenticated:c,adapter:e,viewType:m,setViewType:n,folderData:q,setFolderData:r,activeId:s,setActiveId:t,opened:u,fileStateMap:w,isClient:y,loadingTree:A,loadingFile:C,saving:"saving"===E,error:G,refs:I,currentRef:K,canWrite:!!(!A&&e?.capabilities.write&&e.saveFiles),commitMessage:M,setCommitMessage:N,saveStatus:E,stagedFiles:aa,handleSelect:W,handleChange:X,handleSave:Y,handleShowConfirm:({title:a,onConfirm:b})=>{confirm(a)&&b()},handleShowContextMenu:({x:a,y:b,items:c})=>{(0,d.u)({x:a,y:b,items:c})},handleRefChange:ab,handleReadSubdirectory:ac,getFileObject:T,getFileObjectByPath:U,currentHeadings:Z,currentFileName:$,currentFileState:_}}]),c()}catch(a){c(a)}},!1),18328,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(57507),f=a.i(34642),g=a.i(72171),h=a.i(14373),i=a.i(4502),j=a.i(56549),k=a.i(431),l=a.i(85704),m=a.i(1257),n=a.i(41910),o=a.i(21377),p=a.i(91854),q=a.i(27669),r=a.i(94405),s=a.i(42931),t=a.i(88844),u=a.i(82539),v=a.i(19730),w=a.i(99141),x=b([e,f,g,h,i,k,w]);[e,f,g,h,i,k,w]=x.then?(await x)():x;let z=(0,l.default)(()=>a.A(84781).then(a=>a.default),{loadableGenerated:{modules:[1245]},ssr:!1,loading:()=>(0,d.jsx)(az,{children:(0,d.jsx)(aA,{})})}),A=(0,l.default)(()=>Promise.resolve(y),{ssr:!1,loading:()=>(0,d.jsx)(D,{children:(0,d.jsx)(az,{children:(0,d.jsx)(aA,{})})})}),B=()=>{},C=async({locale:a})=>({props:{...await (0,p.serverSideTranslations)(a||"en",["common"])}});function y(){let{t:a}=(0,o.useTranslation)(),b=(0,n.useRouter)(),c=(0,k.d)(b.query.id),{authLoading:f,adapter:l,viewType:m,setViewType:p,folderData:s,setFolderData:t,activeId:u,setActiveId:x,opened:y,fileStateMap:A,isClient:C,loadingTree:aC,loadingFile:aD,saving:aE,error:aF,refs:aG,currentRef:aH,canWrite:aI,commitMessage:aJ,setCommitMessage:aK,saveStatus:aL,stagedFiles:aM,handleSelect:aN,handleChange:aO,handleSave:aP,handleShowConfirm:aQ,handleShowContextMenu:aR,handleRefChange:aS,handleReadSubdirectory:aT,getFileObject:aU,getFileObjectByPath:aV,currentHeadings:aW,currentFileName:aX,currentFileState:aY}=(0,k.D)(c),aZ=(0,q.useRef)(null),a$=(0,q.useRef)(null),[a_,a0]=(0,q.useState)("editor"),[a1,a2]=(0,q.useState)(()=>!1),[a3,a4]=(0,r.useGroupCallbackRef)(),a5=(0,q.useRef)(a1),a6=(0,q.useRef)({"workspace-left":19,"workspace-center":64,"workspace-right":17});if((0,q.useEffect)(()=>{let a=window.matchMedia("(max-width: 900px)"),b=()=>a2(a.matches);return a.addEventListener("change",b),()=>a.removeEventListener("change",b)},[]),(0,q.useEffect)(()=>{a3&&(a1?(a5.current||(a6.current=a3.getLayout()),a3.setLayout({"workspace-left":100*("files"===a_),"workspace-center":100*("editor"===a_),"workspace-right":100*("outline"===a_)})):a5.current&&a3.setLayout(a6.current),a5.current=a1)},[a1,a_,a3]),f||!C)return(0,d.jsx)(D,{children:(0,d.jsx)(az,{children:(0,d.jsx)(aA,{})})});let a7=l?.type==="remote",a8=a7&&"github"===l.provider.toLowerCase(),a9=a7&&l.capabilities.refs,ba=a8?"Branch":"Ref",bb=l?.title||c||"Workspace",bc="ri-folder-3-line",bd="ri-hard-drive-2-line",be=a("workspace.local");return a7&&(bc=a8?"ri-github-fill":"ri-cloud-line",bd=a9?"ri-git-branch-line":"ri-cloud-line",be=a9?`${ba}: ${aH||"Default"}`:l.provider||"Remote"),(0,d.jsx)(h.f,{readSubdirectory:aT,children:(0,d.jsx)(g.f,{folderData:s,activeId:u,onFolderDataChange:t,onActiveIdChange:x,children:(0,d.jsxs)(D,{"data-mobile-view":a_,children:[(0,d.jsx)(v.f,{title:`${bb} | MarkFlowy`}),(0,d.jsxs)(E,{children:[(0,d.jsx)(H,{children:(0,d.jsxs)(K,{href:"/workspace",children:[(0,d.jsx)("i",{className:"ri-arrow-left-line"}),a("workspace.title")]})}),(0,d.jsx)(I,{children:(0,d.jsxs)(L,{children:[(0,d.jsx)(M,{children:(0,d.jsx)("i",{className:bc})}),(0,d.jsx)(N,{children:bb}),a9&&aG.length>0&&(0,d.jsx)(O,{"aria-label":`${ba} selector`,title:ba,value:aH||aG[0]?.name||"",disabled:aC||aE,onChange:a=>aS(a.target.value),children:aG.map(a=>(0,d.jsx)("option",{value:a.name,children:a.name},a.name))})]})}),(0,d.jsxs)(J,{children:[(0,d.jsx)(w.f,{}),(0,d.jsxs)(P,{children:[(0,d.jsxs)(Q,{children:[(0,d.jsx)("i",{className:"ri-file-text-line"}),aX,aY?.isDirty&&" *"]}),aI&&u&&aY&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(R,{value:aJ,onChange:a=>aK(a.target.value),"aria-label":a(a8?"workspace.commitMessage":"workspace.saveMessage"),placeholder:a(a8?"workspace.commitMessage":"workspace.saveMessage")}),(0,d.jsx)(S,{type:"button",onClick:aP,disabled:aE,"aria-disabled":aE||0===aM.length,$status:aL,"aria-label":"saving"===aL?`Saving ${aM.length} staged files`:"saved"===aL?"All staged files saved":0===aM.length?"No staged files to save":`Save ${aM.length} staged files`,children:(0,d.jsxs)(T,{"aria-hidden":"true",children:[(0,d.jsxs)(U,{$visible:"idle"===aL,children:[a("workspace.save"),aM.length>1?` ${aM.length}`:""]}),(0,d.jsxs)(U,{$visible:"saving"===aL,children:[(0,d.jsx)(V,{className:"ri-loader-4-line"}),a("workspace.saving")]}),(0,d.jsxs)(U,{$visible:"saved"===aL,children:[(0,d.jsx)("i",{className:"ri-check-line"}),a("workspace.saved")]})]})}),(0,d.jsx)(W,{role:"status","aria-live":"polite",children:"saving"===aL?"Saving staged files":"saved"===aL?"All staged files saved":""})]})]})]})]}),aF&&(0,d.jsx)(X,{children:aF}),(0,d.jsx)(F,{"aria-label":a("workspace.panels"),children:["files","editor","outline"].map(b=>(0,d.jsx)(G,{type:"button","aria-pressed":a_===b,onClick:()=>a0(b),children:a(`workspace.${b}`)},b))}),(0,d.jsxs)(Y,{groupRef:a4,disabled:a1,children:[(0,d.jsx)(r.Panel,{className:"mf-editor-panel","data-section":"files",id:"workspace-left",defaultSize:a1?"0%":240,minSize:200*!a1,maxSize:a1?"100%":320,collapsible:a1,inert:a1&&"files"!==a_,children:(0,d.jsxs)($,{children:[(0,d.jsx)(e.G,{name:a("workspace.files")}),(0,d.jsx)(_,{ref:a$,children:aC?(0,d.jsx)(aB,{children:a("workspace.loadingFiles")}):a$.current&&(0,d.jsx)(e.d,{data:s,onSelect:aN,dndRootElement:a$.current,disableDrag:!0,disableFileOperations:a7,fillFlexParentComponent:j.f,onShowConfirm:aQ,onShowContextMenu:a7?B:aR,getFileObject:aU,getFileObjectByPath:aV})}),(0,d.jsxs)(aa,{"aria-label":a("workspace.staged"),children:[(0,d.jsxs)(ab,{children:[(0,d.jsxs)(ac,{children:[(0,d.jsx)("i",{className:"ri-git-commit-line","aria-hidden":"true"}),a("workspace.staged")]}),(0,d.jsx)(ad,{children:aM.length})]}),(0,d.jsx)(ae,{children:0===aM.length?(0,d.jsx)(af,{children:a("workspace.stagedEmpty")}):aM.map(({file:a,fileId:b})=>(0,d.jsxs)(ag,{type:"button",$active:u===b,onClick:()=>{aN(a),a0("editor")},"aria-current":u===b?"page":void 0,title:a.path,children:[(0,d.jsx)(ah,{className:"ri-file-text-line","aria-hidden":"true"}),(0,d.jsxs)(ai,{children:[(0,d.jsx)(aj,{children:a.name}),a.path&&a.path!==a.name&&(0,d.jsx)(ak,{children:a.path})]}),(0,d.jsx)(al,{"aria-hidden":"true"})]},b))})]})]})}),(0,d.jsx)(Z,{className:"mf-editor-separator"}),(0,d.jsx)(r.Panel,{className:"mf-editor-panel","data-section":"editor",id:"workspace-center",minSize:320*!a1,defaultSize:a1?"100%":void 0,collapsible:a1,inert:a1&&"editor"!==a_,groupResizeBehavior:"preserve-relative-size",children:(0,d.jsxs)(am,{children:[(0,d.jsx)(i.f,{viewType:m,onViewTypeChange:p}),(0,d.jsxs)(an,{ref:aZ,children:[aD&&(0,d.jsx)(ap,{children:(0,d.jsx)(aB,{children:a("workspace.loadingFile")})}),!aD&&0===y.length&&(0,d.jsxs)(aq,{children:[(0,d.jsx)(ar,{className:"ri-file-list-3-line"}),(0,d.jsx)(as,{children:a("workspace.noFile")})]}),y.map(a=>{let b=A[a];return b?(0,d.jsx)(ao,{$active:u===a,children:(0,d.jsx)(z,{fileId:a,initialContent:b.content,onChange:b=>aO(a,b),viewType:m,active:u===a,editable:!a7||aI})},a):null})]})]})}),(0,d.jsx)(Z,{className:"mf-editor-separator"}),(0,d.jsx)(r.Panel,{className:"mf-editor-panel","data-section":"outline",id:"workspace-right",defaultSize:a1?"0%":220,minSize:180*!a1,maxSize:a1?"100%":340,collapsible:a1,inert:a1&&"outline"!==a_,children:(0,d.jsxs)(at,{children:[(0,d.jsx)(e.G,{name:a("workspace.outline")}),(0,d.jsx)(au,{children:(0,d.jsx)(e.M,{headingsData:aW,variant:"sidebar",compact:!1,pinned:!0})})]})})]}),(0,d.jsxs)(av,{children:[(0,d.jsxs)(aw,{children:[(0,d.jsxs)(ay,{children:[(0,d.jsx)("i",{className:bd}),be]}),aM.length>0&&(0,d.jsxs)(ay,{$accent:!0,children:[aM.length," staged ",1===aM.length?"file":"files"]})]}),(0,d.jsxs)(ax,{children:[(0,d.jsx)(ay,{children:a(`workspace.${"wysiwyg"===m?"editor":"preview"===m?"previewMode":"source"}`)}),(0,d.jsx)(ay,{children:a("workspace.headingCount",{count:aW.length})})]})]}),(0,d.jsx)(e.c,{})]})})})}let D=s.default.div.withConfig({displayName:"[...id]__Container",componentId:"sc-4a1a5ad7-0"})`
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
`,E=s.default.header.withConfig({displayName:"[...id]__TopToolbar",componentId:"sc-4a1a5ad7-1"})`
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
`,F=s.default.nav.withConfig({displayName:"[...id]__MobilePanelNavigation",componentId:"sc-4a1a5ad7-2"})`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    gap: 6px;
    padding: 6px 16px;
    background: var(--paper-warm);
    border-bottom: 1px solid var(--line-soft);
  }
`,G=(0,s.default)(u.f).withConfig({displayName:"[...id]__MobilePanelButton",componentId:"sc-4a1a5ad7-3"})`
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
`,H=s.default.div.withConfig({displayName:"[...id]__ToolbarLeft",componentId:"sc-4a1a5ad7-4"})`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`,I=s.default.div.withConfig({displayName:"[...id]__ToolbarCenter",componentId:"sc-4a1a5ad7-5"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
`,J=s.default.div.withConfig({displayName:"[...id]__ToolbarRight",componentId:"sc-4a1a5ad7-6"})`
  flex: 0 1 auto;
  min-width: 0;
  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,K=(0,s.default)(m.default).withConfig({displayName:"[...id]__BackLink",componentId:"sc-4a1a5ad7-7"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,t.f)(4)};
  height: 34px;
  padding: 0 ${(0,t.f)(8)};
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  color: ${a=>a.theme.disabledFontColor};
  text-decoration: none;
  transition:
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    background: ${a=>a.theme.hoverColor};
    color: ${a=>a.theme.primaryFontColor};
  }
`,L=s.default.div.withConfig({displayName:"[...id]__WorkspaceInfo",componentId:"sc-4a1a5ad7-8"})`
  display: flex;
  align-items: center;
  gap: ${(0,t.f)(8)};
  min-width: 0;
  max-width: 100%;
`,M=s.default.div.withConfig({displayName:"[...id]__WorkspaceIcon",componentId:"sc-4a1a5ad7-9"})`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>a.theme.accentColorFocused};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  color: ${a=>a.theme.accentColor};
  font-size: ${(0,t.f)(15)};
  flex: 0 0 auto;
`,N=s.default.div.withConfig({displayName:"[...id]__WorkspaceTitle",componentId:"sc-4a1a5ad7-10"})`
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,O=s.default.select.withConfig({displayName:"[...id]__BranchSelect",componentId:"sc-4a1a5ad7-11"})`
  height: 34px;
  padding: 0 ${(0,t.f)(8)};
  font-size: ${a=>a.theme.fontXs};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  color: ${a=>a.theme.primaryFontColor};
  cursor: pointer;

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,P=s.default.div.withConfig({displayName:"[...id]__Actions",componentId:"sc-4a1a5ad7-12"})`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(0,t.f)(6)};
  min-width: 0;
`,Q=s.default.div.withConfig({displayName:"[...id]__FileChip",componentId:"sc-4a1a5ad7-13"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,t.f)(5)};
  max-width: ${(0,t.f)(180)};
  height: 34px;
  padding: 0 ${(0,t.f)(8)};
  font-size: ${a=>a.theme.fontXs};
  color: ${a=>a.theme.disabledFontColor};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,R=s.default.input.withConfig({displayName:"[...id]__CommitInput",componentId:"sc-4a1a5ad7-14"})`
  height: 34px;
  padding: 0 ${(0,t.f)(8)};
  font-size: ${a=>a.theme.fontXs};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  color: ${a=>a.theme.primaryFontColor};
  width: clamp(100px, 14vw, 180px);
  min-width: 0;
  @media (max-width: 900px) {
    flex: 1;
  }

  &:focus {
    outline: none;
  }
`,S=s.default.button.withConfig({displayName:"[...id]__SaveButton",componentId:"sc-4a1a5ad7-15"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 ${(0,t.f)(10)};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 500;
  background: ${a=>"saved"===a.$status?a.theme.successColor:a.theme.accentColor};
  color: var(--on-accent);
  border: 1px solid
    ${a=>"saved"===a.$status?a.theme.successColor:a.theme.accentColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
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
    opacity: ${a=>"saved"===a.$status?1:.65};
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
`,T=s.default.span.withConfig({displayName:"[...id]__SaveButtonViewport",componentId:"sc-4a1a5ad7-16"})`
  position: relative;
  display: block;
  width: ${(0,t.f)(64)};
  height: 1em;
  line-height: 1;
`,U=s.default.span.withConfig({displayName:"[...id]__SaveButtonState",componentId:"sc-4a1a5ad7-17"})`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,t.f)(4)};
  opacity: ${a=>+!!a.$visible};
  filter: ${a=>a.$visible?"blur(0)":"blur(2px)"};
  transform: ${a=>a.$visible?"translateY(0)":"translateY(4px)"};
  transition:
    opacity 180ms cubic-bezier(0.23, 1, 0.32, 1),
    filter 180ms ease,
    transform 180ms cubic-bezier(0.23, 1, 0.32, 1);

  @media (prefers-reduced-motion: reduce) {
    filter: none;
    transform: none;
    transition: opacity 120ms ease;
  }
`,V=s.default.i.withConfig({displayName:"[...id]__SaveSpinner",componentId:"sc-4a1a5ad7-18"})`
  animation: mf-web-save-spin 700ms linear infinite;

  @keyframes mf-web-save-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1.4s;
  }
`,W=s.default.span.withConfig({displayName:"[...id]__SaveAnnouncement",componentId:"sc-4a1a5ad7-19"})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,X=s.default.div.withConfig({displayName:"[...id]__ErrorBanner",componentId:"sc-4a1a5ad7-20"})`
  padding: ${(0,t.f)(8)} ${(0,t.f)(12)};
  background: ${a=>`color-mix(in srgb, ${a.theme.dangerColor} 7%, var(--paper))`};
  border-bottom: 1px solid ${a=>a.theme.dangerColor};
  color: ${a=>a.theme.dangerColor};
  font-size: ${a=>a.theme.fontSm};
`,Y=(0,s.default)(r.Group).withConfig({displayName:"[...id]__MainContent",componentId:"sc-4a1a5ad7-21"})`
  flex: 1;
  overflow: hidden;
  min-height: 0;
`,Z=(0,s.default)(r.Separator).withConfig({displayName:"[...id]__StyleSeparator",componentId:"sc-4a1a5ad7-22"})`
  width: 1px;
  background-color: ${a=>a.theme.borderColor};
  cursor: col-resize !important;
  transition:
    background-color 0.16s ease,
    width 0.16s ease;
  flex: 0 0 auto;

  &:focus-visible {
    outline: none;
    background-color: ${a=>a.theme.labelFontColor};
  }

  &[data-separator='hover'],
  &[data-separator='active'] {
    background-color: ${a=>a.theme.accentColor};
  }
`,$=s.default.div.withConfig({displayName:"[...id]__LeftSidebar",componentId:"sc-4a1a5ad7-23"})`
  width: 100%;
  height: 100%;
  background: ${a=>a.theme.sideBarBgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,_=s.default.div.withConfig({displayName:"[...id]__FileTreeWrapper",componentId:"sc-4a1a5ad7-24"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${(0,t.f)(6)} 0;
`,aa=s.default.section.withConfig({displayName:"[...id]__StagedPanel",componentId:"sc-4a1a5ad7-25"})`
  flex: 0 0 auto;
  min-height: 0;
  border-top: 1px solid ${a=>a.theme.borderColor};
  background: ${a=>a.theme.sideBarBgColor};
`,ab=s.default.div.withConfig({displayName:"[...id]__StagedHeader",componentId:"sc-4a1a5ad7-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(0,t.f)(30)};
  padding: 0 ${(0,t.f)(10)};
`,ac=s.default.span.withConfig({displayName:"[...id]__StagedTitle",componentId:"sc-4a1a5ad7-27"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,t.f)(6)};
  min-width: 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`,ad=s.default.span.withConfig({displayName:"[...id]__StagedCount",componentId:"sc-4a1a5ad7-28"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${(0,t.f)(18)};
  height: ${(0,t.f)(18)};
  padding: 0 ${(0,t.f)(5)};
  border-radius: 999px;
  background: ${a=>a.theme.accentColorFocused};
  color: ${a=>a.theme.accentColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1;
`,ae=s.default.div.withConfig({displayName:"[...id]__StagedList",componentId:"sc-4a1a5ad7-29"})`
  max-height: ${(0,t.f)(230)};
  overflow: auto;
  padding: 0 ${(0,t.f)(6)} ${(0,t.f)(7)};
`,af=s.default.div.withConfig({displayName:"[...id]__StagedEmpty",componentId:"sc-4a1a5ad7-30"})`
  padding: ${(0,t.f)(8)} ${(0,t.f)(6)} ${(0,t.f)(10)};
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
`,ag=s.default.button.withConfig({displayName:"[...id]__StagedItemButton",componentId:"sc-4a1a5ad7-31"})`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${(0,t.f)(7)};
  padding: ${(0,t.f)(6)} ${(0,t.f)(7)};
  border: 0;
  border-radius: ${a=>a.theme.smallBorderRadius};
  background: ${a=>a.$active?a.theme.fileTreeSelectedBgColor:"transparent"};
  color: ${a=>a.theme.primaryFontColor};
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
      background: ${a=>a.$active?a.theme.fileTreeSelectedBgColor:a.theme.hoverColor};
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
`,ah=s.default.i.withConfig({displayName:"[...id]__StagedFileIcon",componentId:"sc-4a1a5ad7-32"})`
  flex: 0 0 auto;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${(0,t.f)(14)};
`,ai=s.default.span.withConfig({displayName:"[...id]__StagedFileText",componentId:"sc-4a1a5ad7-33"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${(0,t.f)(1)};
`,aj=s.default.span.withConfig({displayName:"[...id]__StagedFileName",componentId:"sc-4a1a5ad7-34"})`
  overflow: hidden;
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontXs};
  text-overflow: ellipsis;
  white-space: nowrap;
`,ak=s.default.span.withConfig({displayName:"[...id]__StagedFilePath",componentId:"sc-4a1a5ad7-35"})`
  overflow: hidden;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  text-overflow: ellipsis;
  white-space: nowrap;
`,al=s.default.span.withConfig({displayName:"[...id]__StagedDot",componentId:"sc-4a1a5ad7-36"})`
  flex: 0 0 auto;
  width: ${(0,t.f)(6)};
  height: ${(0,t.f)(6)};
  border-radius: 50%;
  background: ${a=>a.theme.accentColor};
  box-shadow: 0 0 0 ${(0,t.f)(3)} ${a=>a.theme.accentColorFocused};
`,am=s.default.div.withConfig({displayName:"[...id]__CenterArea",componentId:"sc-4a1a5ad7-37"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  height: 100%;
  background: ${a=>a.theme.bgColor};
`,an=s.default.div.withConfig({displayName:"[...id]__EditorContent",componentId:"sc-4a1a5ad7-38"})`
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 0;
`,ao=s.default.div.withConfig({displayName:"[...id]__EditorWrapper",componentId:"sc-4a1a5ad7-39"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${a=>a.$active?"block":"none"};
`,ap=s.default.div.withConfig({displayName:"[...id]__EditorLoading",componentId:"sc-4a1a5ad7-40"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>a.theme.bgColor};
`,aq=s.default.div.withConfig({displayName:"[...id]__EditorEmpty",componentId:"sc-4a1a5ad7-41"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${a=>a.theme.bgColor};
  gap: ${(0,t.f)(8)};
`,ar=s.default.i.withConfig({displayName:"[...id]__EmptyIcon",componentId:"sc-4a1a5ad7-42"})`
  font-size: ${(0,t.f)(28)};
  color: ${a=>a.theme.disabledFontColor};
`,as=s.default.div.withConfig({displayName:"[...id]__EmptyText",componentId:"sc-4a1a5ad7-43"})`
  font-size: ${a=>a.theme.fontSm};
  color: ${a=>a.theme.disabledFontColor};
`,at=s.default.div.withConfig({displayName:"[...id]__RightSidebar",componentId:"sc-4a1a5ad7-44"})`
  width: 100%;
  height: 100%;
  background: ${a=>a.theme.rightBarBgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,au=s.default.div.withConfig({displayName:"[...id]__TocContainer",componentId:"sc-4a1a5ad7-45"})`
  flex: 1;
  overflow: hidden;
`,av=s.default.div.withConfig({displayName:"[...id]__StatusBar",componentId:"sc-4a1a5ad7-46"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 ${(0,t.f)(8)};
  background: ${a=>a.theme.statusBarBgColor};
  border-top: 1px solid ${a=>a.theme.borderColor};
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  flex-shrink: 0;
  gap: ${(0,t.f)(8)};
`,aw=s.default.div.withConfig({displayName:"[...id]__StatusLeft",componentId:"sc-4a1a5ad7-47"})`
  display: flex;
  align-items: center;
  gap: ${(0,t.f)(10)};
  min-width: 0;
`,ax=s.default.div.withConfig({displayName:"[...id]__StatusRight",componentId:"sc-4a1a5ad7-48"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,t.f)(10)};
  min-width: 0;
`,ay=s.default.span.withConfig({displayName:"[...id]__StatusItem",componentId:"sc-4a1a5ad7-49"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,t.f)(4)};
  color: ${a=>a.$accent?a.theme.warnColor:"inherit"};
  white-space: nowrap;
`,az=s.default.div.withConfig({displayName:"[...id]__LoadingContainer",componentId:"sc-4a1a5ad7-50"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${a=>a.theme.bgColor};
`,aA=s.default.div.withConfig({displayName:"[...id]__LoadingSpinner",componentId:"sc-4a1a5ad7-51"})`
  width: ${(0,t.f)(40)};
  height: ${(0,t.f)(40)};
  border: 3px solid var(--line-soft);
  border-top-color: var(--seal);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,aB=s.default.div.withConfig({displayName:"[...id]__LoadingText",componentId:"sc-4a1a5ad7-52"})`
  font-size: ${a=>a.theme.fontSm};
  color: ${a=>a.theme.disabledFontColor};
  text-align: center;
  padding: ${(0,t.f)(20)};
`;a.s(["default",0,function(){return(0,d.jsx)(A,{})},"getServerSideProps",0,C]),c()}catch(a){c(a)}},!1),66280,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(18328),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/workspace/[...id]",pathname:"/workspace/[...id]",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/workspace/[...id]",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1),56642,(a,b,c)=>{b.exports=a.r(1951).vendored.contexts.Loadable},26113,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},noSSR:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(84504),g=a.r(8171);a.r(27669);let h=f._(a.r(56642));function i(a){return{default:a?.default||a}}function j(a,b){delete b.webpack,delete b.modules;let c=b.loading;return()=>(0,g.jsx)(c,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function k(a,b){let c=h.default,d={loading:({error:a,isLoading:b,pastDelay:c})=>null};a instanceof Promise?d.loader=()=>a:"function"==typeof a?d.loader=a:"object"==typeof a&&(d={...d,...a});let e=(d={...d,...b}).loader;return(d.loadableGenerated&&(d={...d,...d.loadableGenerated},delete d.loadableGenerated),"boolean"!=typeof d.ssr||d.ssr)?c({...d,loader:()=>null!=e?e().then(i):Promise.resolve(i(()=>null))}):(delete d.webpack,delete d.modules,j(c,d))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)}],94405,(a,b,c)=>{b.exports=a.x("react-resizable-panels-d6a777856b7bfab6",()=>require("react-resizable-panels-d6a777856b7bfab6"))},85704,(a,b,c)=>{b.exports=a.r(26113)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1gg8tp98di5tq._.js.map