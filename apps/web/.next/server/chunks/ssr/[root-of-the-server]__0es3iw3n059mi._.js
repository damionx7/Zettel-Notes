module.exports=[[63727,a=>a.a(async(b,c)=>{try{var d=await a.y("@tanstack/react-virtual-dce1c551706884fa");a.n(d),c()}catch(a){c(a)}},!0),63776,a=>a.a(async(b,c)=>{try{var d=await a.y("@vercel/analytics-1f9aee0aef7a977b/react");a.n(d),c()}catch(a){c(a)}},!0),69320,a=>a.a(async(b,c)=>{try{var d=await a.y("sonner-9908e9c26092bf41");a.n(d),c()}catch(a){c(a)}},!0),19501,a=>a.a(async(b,c)=>{try{var d=await a.y("zustand-25da2d5e6841a3ac");a.n(d),c()}catch(a){c(a)}},!0),8158,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(42931),f=a.i(27669),g=a.i(68921),h=a.i(19059),i=a.i(76712),j=a.i(7294),k=a.i(7110),l=b([i,j,k]);function m(){let{resolvedTheme:a}=(0,k.f)();return(0,d.jsx)(h.default,{children:(0,d.jsx)("meta",{name:"theme-color",content:j.c[a].webPaper})})}function n({children:a,website:b=!1}){let{resolvedTheme:c}=(0,k.f)(),h=b?j.T:j.e,i=(0,f.useMemo)(()=>(0,g.o)(h),[h]);return(0,d.jsx)(e.ThemeProvider,{theme:h,children:(0,d.jsx)(g.n,{variables:i,mode:c,children:a})})}[i,j,k]=l.then?(await l)():l,a.s(["f",0,({children:a,website:b=!1})=>(0,d.jsxs)(i.ThemeProvider,{attribute:"data-mf-theme",storageKey:"mf-web-theme",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[(0,d.jsx)(m,{}),(0,d.jsx)(n,{website:b,children:a})]})]),c()}catch(a){c(a)}},!1),16942,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(63776),f=a.i(8158),g=a.i(21377),h=a.i(19059),i=a.i(42931),j=a.i(57507),k=a.i(87383),l=a.i(7294),m=b([e,f,j,l]);[e,f,j,l]=m.then?(await m)():m;let n=(0,g.appWithTranslation)(function({Component:a,pageProps:b,router:c}){(0,g.useTranslation)("common");let i=(0,k.U)(c.pathname);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(h.default,{children:[(0,d.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),(0,d.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,d.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=yes"}),i&&(0,d.jsx)("link",{rel:"preload",href:"/fonts/InterVariable.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"}),/^\/(auth|workspace|settings)(\/|$)/.test(c.pathname)?(0,d.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots"):i&&!["/404","/_error"].includes(c.pathname)?(0,d.jsx)("meta",{name:"robots",content:"max-image-preview:large"},"robots"):null]}),(0,d.jsxs)(f.f,{website:i,children:[(0,d.jsx)(p,{}),(0,d.jsx)(o,{$website:i}),(0,d.jsx)(j.b,{}),i?(0,d.jsx)("div",{className:"mf-site",children:(0,d.jsx)(a,{...b})}):(0,d.jsx)("div",{className:"mf-webapp",children:(0,d.jsx)(a,{...b})}),(0,d.jsx)(e.Analytics,{})]})]})}),o=i.createGlobalStyle`
  ${({$website:a})=>a?l.n:l.r}
  :root {
    --paper: ${a=>a.theme.webPaper};
    --paper-warm: ${a=>a.theme.webPaperWarm};
    --paper-dark: ${a=>a.theme.webPaperDark};
    --surface-raised: var(--mf-web-webSurfaceRaised);
    --surface-hover: var(--mf-web-webSurfaceHover);
    --surface-active: var(--mf-web-webSurfaceActive);
    --ink: ${a=>a.theme.webInk};
    --ink-soft: ${a=>a.theme.webInkSoft};
    --ink-mute: ${a=>a.theme.webInkMute};
    --ink-faint: ${a=>a.theme.webInkFaint};
    --seal: ${a=>a.theme.webSeal};
    --seal-soft: ${a=>a.theme.webSealSoft};
    --ink-wash: ${a=>a.theme.webInkWash};
    --line: ${a=>a.theme.webLine};
    --line-soft: ${a=>a.theme.webLineSoft};
    --line-faint: ${a=>a.theme.webLineFaint};
    --shadow: ${a=>a.theme.webShadow};
    --shadow-color: var(--mf-web-webShadowColor);
    --serif: ${a=>a.theme.webFontSerif};
    --sans: ${a=>a.theme.webFontSans};
    --body: ${a=>a.theme.webFontBody};
    --mono: ${a=>a.theme.webFontMono};
    --on-accent: var(--mf-web-webOnAccent);
    --paper-deep: ${a=>a.theme.webPaperWarm};
    --on-paper-light: #1a1a1a;
    --on-paper-light-soft: #383838;
    --on-paper-light-muted: #5a5854;
    --on-paper-light-faint: #8a8884;
    --on-paper-light-line: rgba(26, 26, 26, 0.10);
    --on-paper-light-line-soft: rgba(26, 26, 26, 0.06);
  }
`,p=i.createGlobalStyle`
  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button; cursor: pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}

  #__next {
    overflow-x: hidden;
  }

  html, body {
    font-size: 16px;
    line-height: 1.55;
    font-weight: 400;
    font-family: var(--body);
    font-variant-ligatures: common-ligatures;
    font-style: normal;
    padding: 0;
    margin: 0;
    color: var(--ink);
    background-color: var(--paper);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body.sticky {
    overflow: hidden;
  }

  .root {
    position: relative;
  }

  strong {
    font-weight: 600;
  }

  ::selection {
    background: ${a=>a.theme.accentColorFocused};
    color: ${a=>a.theme.primaryFontColor};
  }
`;a.s(["default",0,n]),c()}catch(a){c(a)}},!1),87383,a=>{let b="https://github.com/drl990114/MarkFlowy",c=`${b}/releases`;a.s(["v",0,"/workspace/demo-workspace","x",0,c,"W",0,b,"U",0,function(a){return["/","/docs","/releases","/privacy","/404","/_error"].includes(a)||a.startsWith("/docs/")}])},11276,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(84504),g=a.r(59393),h=a.r(8171),i=g._(a.r(27669)),j=f._(a.r(75974)),k=a.r(40175);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},75974,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(27669),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;return b?.mountedInstances?.add(a.children),function(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}(),e(),e(),null}},57507,a=>a.a(async(b,c)=>{try{var d,e,f,g,h=a.i(8171),i=a.i(27669),j=a.i(32432),k=a.i(80672),l=a.i(42931),m=a.i(85719),n=a.i(30318),o=a.i(35957),p=a.i(69320),q=a.i(9124),r=a.i(31633),s=a.i(79093),t=a.i(61909),u=a.i(19501),v=a.i(63727),w=a.i(17197),x=b([j,k,n,o,p,q,s,t,u,v,w]);[j,k,n,o,p,q,s,t,u,v,w]=x.then?(await x)():x,l.default.div.withConfig({displayName:"dist__Container$1",componentId:"sc-4c293bea-0"})`
  font-size: 3rem;
  color: ${a=>a.theme.labelFontColor};
`,l.default.div.withConfig({displayName:"dist__PageLayout",componentId:"sc-4c293bea-1"})`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  border-top: 1px solid ${a=>a.theme.borderColor};
`,l.default.div.withConfig({displayName:"dist__ListContainer",componentId:"sc-4c293bea-2"})`
  width: 200px;
  padding: 6px 0;

  .list {
    width: 100%;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;

    &-title {
      padding: 0 6px;
      margin: 0 0 6px 0;
    }

    &-item {
      margin: 4px 0;
      padding: 4px 6px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;

      &:hover {
        background-color: ${a=>a.theme.tipsBgColor};
      }
      &__text {
        margin: 4;
        padding: 0;
        font-size: 12px;
      }

      &__avatar {
        width: 20px;
        height: 20px;
        line-height: 20px;
        min-width: 20px;
      }
    }
  }
`;let J=l.default.div.withConfig({displayName:"dist__Container",componentId:"sc-4c293bea-3"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  font-size: 0.8rem;

  .sidebar-header {
    &__name {
      font-size: 0.75rem;
    }
  }
`;l.default.div.withConfig({displayName:"dist__Wrapper",componentId:"sc-4c293bea-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontXs};
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: ${a=>a.theme.accentColor};
    background-color: ${a=>a.theme.hoverColor};
  }

  .btn-icon {
    font-size: 1rem;
  }
`;let K=(0,i.createContext)(void 0),L=()=>{let a=(0,i.useContext)(K);if(!a)throw Error("useFileSystem must be used within a FileSystemProvider");return a},M=(0,i.createContext)(void 0),N=()=>{let a=(0,i.useContext)(M);if(!a)throw Error("useFileTree must be used within a FileTreeProvider");return a},O=(0,i.createContext)(void 0),P=a=>{if(a.path)return{id:a.id,path:a.path}},Q=(a,b,c)=>{let d=b(c.id);if(d?.id!==c.id||d.path!==c.path)return;let e=a.find(c.id);if(e?.data.id===c.id&&e.data.path===c.path)return e},R=(a,b,c,d)=>{if(a.data[0]?.id===d)return Q(a,b,c)},S=(a,b,c)=>{let d=new Set,e=new Set,f=a=>{d.add(a.id),a.path&&(e.add(a.path),c?.(a.path).forEach(a=>d.add(a))),a.children?.forEach(f)};return a.forEach(f),d.forEach(a=>{let c=b(a)?.path;c&&e.add(c)}),{fileIds:[...d],paths:[...e]}},T=(a,b)=>{let{id:c,...d}=b;c&&a.update({id:c,changes:d})},U=(a,b,c,d,e,f,g,h,i,j={})=>{let k=d(b.old_path),l=[a.root],m=k?a.find(k.id):null;for(;!m&&l.length>0;){let a=l.pop();if(a.data.path===b.old_path){m=a;break}a.children&&l.push(...a.children)}if(b.is_replaced){let c=new Set(j.replacementIds??[]);m&&c.add(m.id),c.size>0?(c.forEach(b=>a.drop({id:b})),j.deleteFileObjectsByIds?j.deleteFileObjectsByIds([...c]):i?i(b.old_path):e&&e(b.old_path)):i?i(b.old_path):e&&e(b.old_path);return}let n=k??m?.data;if(!n)throw Error(`File not found for path: ${b.old_path}`);let o=(a,b)=>{let d=c(a.id),e={...a,...d,path:b};f?.(b,e),g?.(a.id,e)};if(b.is_folder){let d=f=>{let g=f.path,i=(a=>{if(!a)return;if(a===b.old_path)return b.new_path;if(!a.startsWith(b.old_path))return;let c=a.charAt(b.old_path.length);if("/"===c||"\\"===c)return`${b.new_path}${a.slice(b.old_path.length)}`})(g);i&&(T(a,{id:f.id,path:i}),h&&c(f.id)||(g&&e&&e(g),o(f,i)),f.children?.forEach(d))};m&&d(m.data),h?.(b.old_path,b.new_path)}else if(T(a,{id:n.id,path:b.new_path}),h){let a=!!c(n.id);h(b.old_path,b.new_path),a||o(n,b.new_path)}else e&&e(b.old_path),o(n,b.new_path)};class V{data;parent;id;children;constructor(a,b){this.data=a,this.parent=b,this.id=a.id}hasParent(){return!!this.parent}get childIndex(){return this.hasParent()?this.parent.children.indexOf(this):-1}addChild(a,b){let c=y(a,this);this.children=this.children??[],null==b&&(b=this.children.findIndex(a=>!Array.isArray(a.children))||0),this.children.splice(b,0,c),this.data.children=this.data.children??[],this.data.children.splice(b,0,a)}removeChild(a){this.children?.splice(a,1),this.data.children?.splice(a,1)}cleanChildren(){this.children=[],this.data.children=[]}update(a){if(this.hasParent()){let b=this.childIndex;this.parent.addChild({...this.data,...a},b),this.drop()}}drop(){this.hasParent()&&this.parent.removeChild(this.childIndex)}}function y(a,b){let c=new V(a,b);return a.children&&(c.children=a.children.map(a=>y(a,c))),c}class W{root;constructor(a){let b;this.root=((b=new V({id:"ROOT"},null)).children=a.map(a=>y(a,b)),b)}get data(){return this.root.children?.map(a=>a.data)??[]}create(a){let b=a.parentId?this.find(a.parentId):this.root;if(!b)return null;b.addChild(a.data,a.index)}move(a){let b=this.find(a.id),c=a.parentId?this.find(a.parentId):this.root;b&&c&&(c.addChild(b.data,a.index),b.drop())}update(a){let b=this.find(a.id);b&&b.update(a.changes)}drop(a){let b=this.find(a.id);b&&b.drop()}find(a,b=this.root){if(!b)return null;if(b.id===a)return b;if(b.children)for(let c of b.children){let b=this.find(a,c);if(b)return b}return null}}let X=["<",">",":",'"',"|","?","*","/"];function z(a){a.endsWith("/")&&(a=a.slice(0,-1));let b=/[\/\\]([^\/\\]+)$/.exec(a);return b&&b.length>1?b[1]:a}function A(a){return(/^[a-z]:[\\/]/i.test(a)||a.startsWith("\\\\")?a.replace(/\\/g,"/"):a).replace(/\/+$/,"")||"/"}async function B(a){let b,{fileSystem:c,source:d,parent:e,root:f,getFileObject:g,getFileObjectByPath:h}=a;if("copy-to"===a.mode){let a=await c.selectCopyDirectory?.(d.path);if(!a)return null;b=a}return c.runFileMutation(async i=>{let j=()=>{let b=a.getCurrentFolderData();return b[0]?.id===f.id&&b[0]?.path===f.path?new W(b):null},k=j();if(!k)return null;let l=R(k,g,d,f.id),m=R(k,g,e,f.id);if(l?.data.kind!=="file"||m?.data.kind!=="dir")return null;let n=b?function(a,b,c){let d=c(b),e=d?a.find(d.id):void 0;if(e?.data.kind==="dir"&&e.data.path===b)return e;let f=A(b),g=[...a.root.children??[]];for(;g.length;){let a=g.pop();if("dir"===a.data.kind){if(a.data.path&&A(a.data.path)===f)return a;g.push(...a.children??[])}}}(k,b,h):m,o=n?P(n.data):void 0,p=S([l.data],g,a.getFileIdsByPathPrefix);i.protectFileIds([...p.fileIds,...o?[o.id]:[]]),i.protectPaths([...p.paths,b??e.path]);let q=await c.copyFile(d.path,b?n?.data.path??b:void 0),r=j();if(!r||!o)return q;let s=R(r,g,o,f.id);if(s?.data.kind!=="dir"||!a.canInsertIntoDirectory(s.data))return q;if(s.data.children?.some(a=>a.path===q))return await a.refreshDirectory?.(s.data),q;let t={name:z(q),path:q,kind:"file",ext:l.data.ext,content:void 0},u=a.createFile?a.createFile(t):{...t,id:crypto.randomUUID()},v=s.children?.findIndex(a=>a.id===d.id)??-1;return r.create({parentId:s.id,data:u,index:v>=0?v+1:s.children?.length??0}),a.setFolderData(r.data),await a.refreshDirectory?.(s.data),q})}async function C(a){let{currentPath:b,candidatePath:c,fileExists:d,pathsReferToSameDirectoryEntry:e}=a;return b!==c&&!!await d(c)&&!await e(b,c)}let Y=a=>{var b;let{fileNode:c,parentNode:d,inputType:e="file",onCreate:f,onCancel:g,...j}=a,{pathJoin:k,fileExists:l,pathsReferToSameDirectoryEntry:m}=L(),p={same:"file"===e?"has same file":"has same folder",empty:"file name can not be empty",invalid:`file name can not include ${X.join(" ")}`},q=(b=c.name||"",/\.(md|markdown)$/i.exec(b)?.[0]),r="file"===e?(c.name||"").replace(/\.(md|markdown)$/i,""):c.name||"",[s,t]=(0,i.useState)(r),[u,v]=(0,i.useState)(!1),[w,x]=(0,i.useState)(p.same),y=(0,i.useRef)(!1),z=(0,i.useRef)(0),A=(0,i.useRef)(!1),B=(0,i.useRef)(null),D=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let a=setTimeout(()=>{B.current?.focus({preventScroll:!0})});return()=>clearTimeout(a)},[r]);let E=(0,i.useCallback)(async a=>{var b;let f=d?.path;"file"!==e||(b=a)&&b.endsWith(".md")||(a=`${a}${q??".md"}`);let g=await k(f||"",a);return{id:c.id,kind:e,path:g,name:a}},[c,d,e,k,q]),F=(0,i.useCallback)(async a=>{let b=++z.current;y.current=!0;try{if(""===a){x(p.empty),v(!0);return}if(!1===function(a){for(let b of X)if(a.includes(b))return!1;return!0}(a)){x(p.invalid),v(!0);return}{let d=await E(a);if(d.path){let a=await C({currentPath:c.path??"",candidatePath:d.path,fileExists:l,pathsReferToSameDirectoryEntry:m});if(b!==z.current)return;if(!a)return v(!1),d;x(p.same),v(!0)}}}catch(a){b===z.current&&(x(a instanceof Error?a.message:String(a)),v(!0))}finally{b===z.current&&(y.current=!1)}},[E,l,m,c,p.empty,p.invalid,p.same]),G=(0,i.useCallback)(async a=>{a.stopPropagation();let b=a.target.value;t(b),D.current||F(b)},[F]),H=(0,i.useCallback)(()=>{D.current=!0},[]),I=(0,i.useCallback)(a=>{D.current=!1;let b=a.target.value;t(b),F(b)},[F]);return(0,h.jsx)(n.f,{title:w,open:u,children:(0,h.jsx)(o.f,{size:"small",type:"text",inputRef:B,value:s,"aria-invalid":u||void 0,"data-error":u||void 0,onChange:G,onCompositionStart:H,onCompositionEnd:I,spellCheck:!1,onClick:a=>a.stopPropagation(),onKeyDown:a=>{a.stopPropagation(),"Escape"!==a.key||D.current||a.nativeEvent.isComposing||229===a.keyCode||(a.preventDefault(),A.current||g())},onPressEnter:async a=>{if(!a.isComposing&&!D.current&&229!==a.keyCode&&!A.current){a.preventDefault(),A.current=!0;try{let a=await F(B.current?.value??s);a&&await f(a)}catch(a){x(a instanceof Error?a.message:String(a)),v(!0)}finally{A.current=!1}}},onBlur:()=>{if(!0===A.current||D.current)return;let a=B.current?.value||r;!1===u&&!1===y.current&&a?E(a).then(a=>{g?.(a)}).catch(()=>{g?.()}):g?.()},...j})})},Z=l.keyframes`
  to {
    transform: rotate(360deg);
  }
`,$=l.default.i.withConfig({displayName:"dist__LoadingIcon",componentId:"sc-4c293bea-5"})`
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1;
  animation: ${Z} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_=l.default.span.withConfig({displayName:"dist__EmptyFolderStatus",componentId:"sc-4c293bea-6"})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 5px;
  margin-left: 8px;
  color: ${a=>a.theme.labelFontColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1;

  &::before {
    width: 3px;
    height: 3px;
    border-radius: 9999px;
    background: currentColor;
    content: '';
    opacity: 0.7;
  }
`,aa=l.default.div.withConfig({displayName:"dist__FileTreeStickyViewport",componentId:"sc-4c293bea-7"})`
  position: relative;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`,ab=l.default.div.withConfig({displayName:"dist__FileTreeStickyRoot",componentId:"sc-4c293bea-8"})`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 24px;
  background: var(
    --mf-surface-panel-left,
    var(--mf-surface-panel, ${a=>a.theme.sideBarBgColor})
  );
  box-shadow: 0 1px 0 var(--mf-ui-border-subtle, ${a=>a.theme.borderColor});

  > [data-mf-file-tree-sticky-item] {
    outline: none;
  }

  > [data-mf-file-tree-sticky-item]:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,ac=l.default.div.withConfig({displayName:"dist__NodeContainer",componentId:"sc-4c293bea-9"})`
  font-size: ${a=>a.theme.fontSm};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: default;
  height: 100%;
  color: ${a=>a.highlight||a.selected?a.theme.primaryFontColor:a.theme.unselectedFontColor};
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;

  > .mf-file-tree-row {
    display: flex;
    align-items: center;
    width: calc(100% - 8px);
    height: calc(100% - 2px);
    margin: 1px 4px;
    padding: 0 6px;
    border-radius: ${a=>a.theme.smallBorderRadius};
    background-color: ${a=>a.highlight?a.theme.accentColorFocused:a.selected?`color-mix(in srgb, ${a.theme.hoverColor} 86%, transparent)`:"transparent"};
    box-sizing: border-box;
  }

  &:hover > .mf-file-tree-row {
    background-color: ${a=>`color-mix(in srgb, ${a.theme.hoverColor} 86%, transparent)`};
  }

  &:hover {
    color: ${a=>a.theme.primaryFontColor};
  }

  .file-icon {
    flex-shrink: 0;
    margin-right: 4px;
  }

  .mf-file-tree-name-input {
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 4px;
    font: inherit;
  }
`;async function D({path:a,type:b,rootPath:c,copyText:d,getRelativePath:e}){let f="relative"===b&&c?await e(a,c):a;await d(f)}let ad={md:"ri-markdown-line",markdown:"ri-markdown-line",json:"ri-file-code-line"},ae=a=>{let b=a.ext;return b&&ad[b]?ad[b]:"ri-file-line"};function E({style:a,node:b,dragHandle:c,tree:d,getCurrentFolderData:e,canInsertIntoDirectory:f=a=>!!a.children?.length,setFolderData:g,refreshDirectory:j,onFocusActiveFile:l,onOpen:m,isRoot:n=!1,onShowConfirm:o,onRequestDelete:q,onShowInputConfirm:r,onShowContextMenu:s,getFileObject:t,getFileObjectByPath:u,createFile:v,updateFile:w,deletePathEntry:x,getFileIdsByPathPrefix:y,setFileObject:A,setFileObjectByPath:F,moveFileObjectsByPathPrefix:G,deleteFileObjectsByPathPrefix:H,fileTreeHandler:I,disableFileOperations:J=!1,iconButtonComponent:K,renderNodeIcon:M,renderNodeName:R,renderNodePrefix:T,rootActions:V,isLoading:X=!1,isEmpty:Z=!1,isStickyRoot:aa=!1,isRootSuppressed:ab=!1}){let{t:ad}=(0,k.useTranslation)(),af=i.default.useContext(O),{deleteNode:ag,trashNode:ah,activeId:ai,refreshFolder:aj,getRootPath:ak}=N(),{runFileMutation:al,renameFile:am,copyFile:an,selectCopyDirectory:ao,createFolder:ap,writeFile:aq,fileExists:ar,getMdRelativePath:as,pathsReferToSameDirectoryEntry:at,revealInFolder:au}=L(),av=a=>{let c=P(b.data),d=e()[0],f=d?P(d):void 0;if(!c||!f||c.id===f.id&&c.path===f.path)return;let h={id:c.id,path:c.path,name:b.data.name,kind:b.data.kind,ext:b.data.ext},i=a=>a[0]?.id===f.id&&a[0]?.path===f.path,j=async()=>{try{await al(async b=>{let d=e();if(!i(d)||d[0]?.id===c.id&&d[0]?.path===c.path)return;let f=Q(new W(d),t,c);if(!f)return;let h=S([f.data],t,y);b.protectFileIds(h.fileIds),b.protectPaths(h.paths),await ("permanent"===a?ag:ah)(f.data);let j=e();if(!i(j))return;let k=new W(j);Q(k,t,c)&&(k.drop({id:c.id}),H?H(c.path):x?.(c.path),g(k.data))})}catch(a){p.toast.error(a instanceof Error?a.message:String(a))}};q?q({file:h,mode:a,onConfirm:j}):o({title:"permanent"===a?`Are you sure you want to delete ${h.name}?`:`Are you sure you want to move ${h.name} to trash?`,onConfirm:j})},aw=["pending_new_file","pending_new_folder","pending_edit_folder","pending_edit_file"].includes(b.data.kind),ax="pending_new_folder"===b.data.kind||"pending_edit_folder"===b.data.kind?"dir":"file",ay="pending_edit_folder"===b.data.kind||"pending_edit_file"===b.data.kind,az=async a=>{let c=b.id,d=b.data.kind,f=b.parent?P(b.parent.data):void 0;a.path&&f&&await al(async()=>{let b=new W(e()),h=b.find(c),i=Q(b,t,f);if(!h||h.data.kind!==d||!i)return;if(await ar(a.path))return void p.toast.error("File already exists");"dir"===ax?await ap(a.path):await aq(a.path,"");let k=v?v({path:a.path,name:a.name,content:"",id:c,kind:a.kind}):{...a,content:""};b.update({id:c,changes:{...h.data,...k}}),g(b.data),"file"===k.kind&&m?.(k,{mode:"permanent"}),await j?.(i.data)})},aA=async a=>{let c=P(b.data),d=a.path;c&&d&&await al(async b=>{let f=new W(e()),h=Q(f,t,c);if(!h)return;let i=S([h.data],t,y);(b.protectFileIds(i.fileIds),b.protectPaths(i.paths),b.protectPaths([d]),await C({currentPath:c.path,candidatePath:d,fileExists:ar,pathsReferToSameDirectoryEntry:at}))?p.toast.error("File already exists"):(U(f,await am(c.path,d),t,u,x,F,A,G,H),j||I?.clearLoadedDirsCache?.(),w&&w({path:d,name:a.name,id:c.id,kind:a.kind}),f.update({id:c.id,changes:{kind:a.kind,name:a.name}}),g(f.data),h.parent&&await j?.(h.parent.data,"dir"===a.kind?c.path:void 0))})},aB=!!(d.dragDestinationParent?.isAncestorOf(b)&&d.dragDestinationParent?.id!==d.dragNode?.parent?.id),aC=ai===b.id;return(0,h.jsx)(ac,{style:a,"data-mf-file-tree-drop-highlight":aB||void 0,"data-mf-file-tree-node":"","data-mf-file-tree-editing":aw||void 0,"data-mf-file-tree-root":n||void 0,"data-mf-file-tree-sticky-root":aa||void 0,"data-mf-file-tree-root-suppressed":ab||void 0,"aria-hidden":ab||void 0,inert:ab||void 0,highlight:aB,selected:aC,"aria-busy":X||void 0,onContextMenu:a=>{if(a.stopPropagation(),a.preventDefault(),J)return;let c=[];if(b.parent&&c.push({label:ad("contextmenu.explorer.new"),value:"new",children:[{label:ad("contextmenu.explorer.add_file"),value:"new_file",handler:()=>{if(b.parent){let a=new W(e()),c=P(b.isInternal?b.data:b.parent.data);if(!c||!Q(a,t,c))return;let d={id:`pending-${Date.now()}`,name:"",kind:"pending_new_file"};b.isInternal&&b.open(),a.create({parentId:c.id,data:d}),g(a.data)}}},{label:ad("contextmenu.explorer.add_folder"),value:"new_folder",handler:()=>{if(b.parent){let a=new W(e()),c=P(b.isInternal?b.data:b.parent.data);if(!c||!Q(a,t,c))return;let d={id:`pending-${Date.now()}`,name:"",kind:"pending_new_folder",children:[]};b.isInternal&&b.open(),a.create({parentId:c.id,data:d}),g(a.data)}}}]}),("dir"===b.data.kind||"md"===b.data.ext)&&c.push({label:ad("contextmenu.explorer.rename"),value:"rename",handler:()=>{let a=P(b.data);if(b.parent&&a){let b=new W(e()),c=Q(b,t,a);if(!c)return;b.update({id:a.id,changes:{kind:"dir"===c.data.kind?"pending_edit_folder":"pending_edit_file"}}),g(b.data)}}}),"file"===b.data.kind){let a=P(b.data),d=b.parent?P(b.parent.data):void 0,h=e()[0],i=h?P(h):void 0,k=async b=>{if(a&&d&&i)try{let c,h,k=await B({source:a,parent:d,root:i,mode:b,fileSystem:{runFileMutation:al,copyFile:an,selectCopyDirectory:ao},getCurrentFolderData:e,setFolderData:g,getFileObject:t,getFileObjectByPath:u,getFileIdsByPathPrefix:y,createFile:v,canInsertIntoDirectory:f,refreshDirectory:j});k&&p.toast.success(ad("duplicate"===b?"contextmenu.explorer.duplicate_success":"contextmenu.explorer.copy_to_success",{name:z(k),folder:(c=Math.max(k.lastIndexOf("/"),k.lastIndexOf("\\")),h=/^[a-z]:[\\/]/i.test(k)?3:1,k.slice(0,Math.max(c,h)))}))}catch(a){p.toast.error(ad("contextmenu.explorer.copy_failed",{reason:a instanceof Error?a.message:String(a)}))}};c.push({value:"duplicate_file",label:ad("contextmenu.explorer.duplicate_file"),handler:()=>void k("duplicate")}),ao&&c.push({value:"copy_to",label:ad("contextmenu.explorer.copy_to"),handler:()=>void k("copy-to")})}let d="file"===b.data.kind&&!!b.data.path&&!!af?.isNoteEncrypted?.(b.data.path);if(b.data.path&&af?.encryptNote&&!d){let a="dir"===b.data.kind;c.push({value:a?"encrypt_folder":"encrypt_note",label:a?ad("contextmenu.explorer.encrypt_folder"):ad("contextmenu.explorer.encrypt_note"),handler:()=>void(a?af?.encryptNotesInFolder?.(b.data.path):af?.encryptNote?.(b.data.path))})}if("file"===b.data.kind&&b.data.path&&af?.toggleBookmarkNote&&c.push({value:"bookmark_note",label:ad("bookmarks.add"),handler:()=>void af?.toggleBookmarkNote?.(b.data.path,b.data.name)}),b.data.path&&af?.copyText){var h,i,k;let a=af.copyText;c.push({value:"copy_paths",label:ad("contextmenu.explorer.copy_path"),children:(h=b.data.path,i=async(b,c)=>{try{await D({path:b,type:c,rootPath:ak(),copyText:a,getRelativePath:as})}catch(a){p.toast.error(a instanceof Error?a.message:String(a))}},[{value:"copy_path",label:(k={absolute:ad("contextmenu.explorer.absolute_path"),relative:ad("contextmenu.explorer.relative_path")}).absolute,handler:()=>void i(h,"absolute")},{value:"copy_relative_path",label:k.relative,handler:()=>void i(h,"relative")}])})}n||(c.push({value:"dir"===b.data.kind?"delete_folder":"delete_file",label:"dir"===b.data.kind?ad("contextmenu.explorer.delete_folder"):ad("contextmenu.explorer.delete_file"),handler:()=>av("permanent")}),c.push({value:"trash",label:ad("contextmenu.explorer.moveto_trash"),handler:()=>av("trash")})),au&&c.push({value:"show_in_folder",label:ad("contextmenu.explorer.show_in_folder"),handler:async()=>{try{if(!await ar(b.data.path)||!b.data.path)return void p.toast.error("File not found");await au(b.data.path)}catch(a){console.error("Failed to show in folder:",a)}}}),s({x:a.clientX,y:a.clientY,items:c})},onClick:a=>{aw?a.stopPropagation():a.shiftKey||"dir"===b.data.kind&&b.toggle()},onMouseUp:a=>{aw&&a.stopPropagation()},ref:aw?null:c,children:(0,h.jsxs)("div",{className:"mf-file-tree-row",children:[(0,h.jsx)("div",{className:"indentLines",children:Array.from({length:b.level},(a,b)=>`indent-${b+1}`).map(a=>(0,h.jsx)("div",{},a))}),aw?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{"aria-hidden":"true",className:"file-icon mf-file-tree-icon",children:M?M({...b.data,kind:ax,ext:b.data.ext??("file"===ax?"md":void 0)},{isLoading:!1,isOpen:!1}):(0,h.jsx)("i",{className:"dir"===ax?"ri-folder-3-fill":ae(b.data)})}),(0,h.jsx)(Y,{"aria-label":ad(ay?"contextmenu.explorer.rename":"dir"===ax?"contextmenu.explorer.add_folder":"contextmenu.explorer.add_file"),className:"mf-file-tree-name-input",fileNode:b.data,inputType:ax,parentNode:b.parent?.data,onCreate:async a=>{ay?await aA(a):await az(a)},onCancel:a=>{let c=()=>{let a=new W(e()),c=a.find(b.id);c&&(ay?a.update({id:b.id,changes:{kind:"pending_edit_folder"===c.data.kind?"dir":"file"}}):a.drop({id:b.id}),g(a.data))};a&&r?r({title:"Save changes?",confirmText:"Save",cancelText:"Discard",onConfirm:async()=>{ay?await aA(a):await az(a)},onClose:()=>{c()}}):c()}},b.id)]}):(0,h.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{"aria-hidden":aa||void 0,style:{flex:1,display:"flex",alignItems:"center",overflow:"hidden",minWidth:0},children:[T?(0,h.jsx)("span",{className:"mf-file-tree-prefix",children:T(b.data)}):null,M?(0,h.jsx)("span",{"aria-label":X?`${ad("common.fetching")} ${b.data.name}`:void 0,className:"file-icon mf-file-tree-icon",role:X?"status":void 0,children:M(b.data,{isLoading:X,isOpen:b.isOpen})}):b.data?.kind==="dir"?X?(0,h.jsx)($,{className:"ri-loader-4-line file-icon",role:"status","aria-label":`${ad("common.fetching")} ${b.data.name}`}):(0,h.jsx)("i",{className:`${b.isOpen?"ri-folder-5-fill":"ri-folder-3-fill"} file-icon`}):(0,h.jsx)("i",{className:`${ae(b.data)} file-icon`}),(0,h.jsx)("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R?R(b.data):b.data.name}),Z?(0,h.jsx)(_,{role:"status",children:ad("file.emptyFolder")}):null]}),n&&(K||V)?(0,h.jsxs)("div",{style:{display:"flex",gap:"2px"},children:[V,K?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(K,{size:"small",rounded:"smooth",icon:"ri-refresh-line",onClick:async a=>{a?.stopPropagation(),a?.preventDefault(),await aj()},tooltipProps:{title:"Refresh"}}),(0,h.jsx)(K,{size:"small",rounded:"smooth",icon:"ri-focus-3-line",onClick:a=>{a?.stopPropagation(),a?.preventDefault(),ai&&(l?l(ai):d.select(ai,{align:"center"}))},tooltipProps:{title:"Focus Active File"}}),(0,h.jsx)(K,{size:"small",rounded:"smooth",icon:"ri-collapse-vertical-fill",onClick:a=>{a?.stopPropagation(),a?.preventDefault(),d.closeAll(),b.open()},tooltipProps:{title:"Collapse All"}})]}):null]}):null]})]})})}function F(a){return(/^[a-z]:[\\/]/i.test(a)||a.startsWith("\\\\")?a.replace(/\\/g,"/").toLowerCase():a).replace(/\/+$/,"")}let af=(0,i.createContext)({suppressRoot:!1}),ag=(0,i.createContext)(null);function G(a){let b=(0,i.useContext)(ag);return b?.(a)}let ah={rootTree:void 0,updateTreeView:void 0,clearLoadedDirsCache:void 0};function H({attrs:a,children:b,innerRef:c,node:d,revealRoot:e,rootId:f,suppressRoot:g}){let j=(0,i.useContext)(af),k=e??j.revealRoot,l=f??j.rootId,m=g??j.suppressRoot,n=d.id===l,o=n&&m,p=!!j.onOpen&&"file"===d.data.kind&&!d.isEditing;return(0,h.jsx)("div",{...a,ref:c,"aria-label":o?d.data.name:a["aria-label"],"data-mf-file-tree-root-row":n||void 0,"data-mf-file-tree-root-row-suppressed":o||void 0,onClick:a=>{d.handleClick(a),p&&!a.defaultPrevented&&j.onOpen?.(d.data,{mode:j.openInSameTab?"replace":"permanent"})},onAuxClick:a=>{p&&1===a.button&&(a.preventDefault(),j.onOpen?.(d.data,{mode:"permanent"}))},onMouseDown:a=>{1===a.button&&a.preventDefault()},onDoubleClick:a=>{p&&!a.defaultPrevented&&j.onOpen?.(d.data,{mode:"permanent"})},onKeyDown:a=>{p&&a.target===a.currentTarget&&("Enter"===a.key||" "===a.key)&&(a.preventDefault(),a.stopPropagation(),d.select(),j.onOpen?.(d.data,{mode:"permanent"}))},onFocus:a=>{o&&k?.(),a.stopPropagation()},children:b})}var I=(0,i.memo)(a=>{let{data:b,compareNodes:c,rootActions:d,expandedPaths:e,onExpandedPathsChange:f,onSelect:g,onOpen:j,openInSameTab:k,dndRootElement:l,disableDrag:m=!1,disableFileOperations:n=!1,fillFlexParentComponent:o,onShowConfirm:p,onRequestDelete:q,onShowInputConfirm:s,onShowContextMenu:t,getFileObject:u,getFileObjectByPath:v,setFileObject:w,setFileObjectByPath:x,deletePathEntry:y,getFileIdsByPathPrefix:z,moveFileObjectsByPathPrefix:A,deleteFileObjectsByIds:B,deleteFileObjectsByPathPrefix:C,onBeforeReplace:D,createFile:I,updateFile:J,iconButtonComponent:K,renderNodeIcon:M,renderNodePrefix:O,renderNodeName:T,stickyRoot:V=!1,indentSize:X=16,rowHeight:Y=24}=a,{activeId:Z,setFolderDataPure:$}=N(),{runFileMutation:_,pathJoin:ac,fileExists:ad,moveFilesToTargetFolder:ae,readSubdirectory:ai}=L(),aj=(0,i.useMemo)(()=>new W(b),[b]),ak=(0,i.useCallback)(a=>a.children?c?[...a.children].sort(c):a.children:null,[c]),al=(0,i.useRef)(null),[am,an]=(0,i.useState)(),ao=(0,i.useRef)(new Set),ap=(0,i.useRef)(new Map),aq=(0,i.useRef)(new Set),ar=(0,i.useRef)(0),as=(0,i.useRef)(0),[at,au]=(0,i.useState)(()=>new Set),[av,aw]=(0,i.useState)(()=>new Set),[ax,ay]=(0,i.useState)(!1),[,az]=(0,i.useState)(0),aA=(0,i.useRef)(!1);(0,i.useEffect)(()=>(aA.current=!0,()=>{aA.current=!1}),[]);let aB=(0,i.useRef)(b);aB.current=b;let aC=(0,i.useCallback)(()=>aA.current?aB.current:[],[]),aD=(0,i.useCallback)(a=>{q?.({...a,onConfirm:async()=>{aA.current&&await a.onConfirm()}})},[q]),aE=(0,i.useCallback)(a=>{aB.current=a,$(a)},[$]),aF=(0,i.useCallback)(a=>!!(a.children?.length||a.path&&(ao.current.has(a.path)||ap.current.has(a.path))),[]),aG=b[0]?.path,aH=b[0]?.id,aI=(0,i.useRef)(new Set(e??(b[0]?.path?[b[0].path]:[]))),aJ=(0,i.useMemo)(()=>aH?{[aH]:!e||e.includes(aG??"")}:{},[aH,aG,e]),aK=(0,i.useCallback)(()=>ay(!1),[]),aL=(0,i.useMemo)(()=>({onOpen:j,openInSameTab:k,revealRoot:aK,rootId:aH,suppressRoot:V&&ax}),[j,k,aK,aH,ax,V]),aM=(0,i.useCallback)(({scrollOffset:a})=>{if(!V)return;let b=a>0;ay(a=>a===b?a:b)},[V]),aN=async a=>{if("dir"!==a.kind||!a.path)return;let c=b[0]?.id,d=P(a);if(!c||!d||ao.current.has(d.path))return;let e=ap.current.get(d.path);if(e)return e;let f=aq.current.has(d.path);if(f||!a.children||0===a.children.length){let a=ar.current;au(a=>new Set(a).add(d.id));let b=Promise.resolve().then(async()=>{let e=()=>a===ar.current&&ap.current.get(d.path)===b;try{let a=await ai(d.path);if(!e())return;let b=new W(aB.current),g=R(b,u,d,c);if(!g||"dir"!==g.data.kind||ao.current.has(d.path))return;if(ao.current.add(d.path),aq.current.delete(d.path),aw(a=>new Set(a).add(d.path)),a.length>0){let c=g.data.children??[];if(f){let b=function(a,b){let c=new Map(a.map(a=>[a.id,a])),d=new Map(a.filter(a=>a.path).map(a=>[a.path,a])),e=new Set,f=b.map(a=>{let b=a.path&&d.get(a.path)||c.get(a.id)||a;return e.add(b.id),b}),g=[],h=0;for(let b of a)e.has(b.id)?h<f.length&&g.push(f[h++]):g.push(b);for(;h<f.length;)g.push(f[h++]);return g.length===a.length&&g.every((b,c)=>b===a[c])?a:g}(c,a);if(b===c)return;g.data.children=b}else{let b=new Set(c.map(a=>a.id)),d=new Set(c.map(a=>a.path).filter(Boolean));g.data.children=[...c,...a.filter(a=>!b.has(a.id)&&(!a.path||!d.has(a.path)))]}$([...b.data])}}catch(a){console.error("Failed to load subdirectory:",a)}finally{e()&&(ap.current.delete(d.path),au(a=>{if(!a.has(d.id))return a;let b=new Set(a);return b.delete(d.id),b}))}});ap.current.set(d.path,b),await b}},aO=async(a,b)=>{if(!a.path)return;let c=new Set([a.path]);if(b)for(let a of new Set([...ao.current,...ap.current.keys(),...aq.current]))(a===b||a.startsWith(`${b}/`)||a.startsWith(`${b}\\`))&&c.add(a);for(let a of c)ao.current.delete(a),ap.current.delete(a),aq.current.delete(a);aq.current.add(a.path),aw(a=>new Set([...a].filter(a=>!c.has(a)))),au(a=>new Set([...a].filter(a=>{let b=u(a)?.path;return!b||!c.has(b)}))),await aN(a)},aP=async a=>{V&&ax&&a===aH&&az(a=>a+1);let b=new W(aB.current).find(a),c=b?.data;if(c?.kind!=="dir"||!c.path)return;let d=!!al.current?.isOpen(a);aI.current.has(c.path)!==d&&(d?aI.current.add(c.path):aI.current.delete(c.path),f?.([...aI.current])),d&&await aN(c)};(0,i.useEffect)(()=>()=>{as.current+=1},[Z,aH,aG]);let aQ=async a=>{let b=al.current;if(!b)return;let c=++as.current,d=ar.current,e=()=>c===as.current&&d===ar.current&&aB.current[0]?.id===aH&&aB.current[0]?.path===aG&&al.current===b,f=new W(aB.current).find(a)?.data,g=(f??u(a))?.path,h=g?F(g):void 0,i=aB.current;for(;!f&&h&&e();){let c=i.find(a=>"dir"===a.kind&&a.path&&h.startsWith(`${F(a.path)}/`));if(!c||(b.open(c.id),await aN(c),!e()))return;let d=new W(aB.current).find(c.id)?.data;if(!d||d.path!==c.path)return;f=(i=d.children??[]).find(b=>b.id===a||b.path&&F(b.path)===h)}f&&"file"===f.kind&&e()&&(await b.scrollTo(f.id,"center"),e()&&b.get(f.id)&&b.select(f.id,{align:"center"}))};(0,i.useEffect)(()=>()=>{ar.current+=1,ap.current.clear()},[]);let aR=(0,i.useRef)(aP);aR.current=aP,(0,i.useEffect)(()=>{if(!e||!am)return;let a=new Set(e);aI.current=a;let c=b=>{for(let d of b)"dir"===d.kind&&d.path&&a.has(d.path)&&(am.isOpen(d.id)?aR.current?.(d.id):am.open(d.id),d.children&&c(d.children))};c(b)},[b,e,am]);let aS=async a=>{if(n)return;let b=a.dragNodes.filter(b=>!a.dragIds.includes(b.parent?.id||"")),c=b[0],d=a.parentNode;if(!c||!d||c.parent?.id===d.id)return;let e=b.map(a=>P(a.data)),f=P(d.data);if(e.some(a=>!a)||!f)return;let g=e.filter(a=>!!a),h=await Promise.all(b.map(a=>ac(f.path,a.data.name))),i=(await Promise.all(h.map(ad))).some(Boolean),j=async(a=!1)=>{await _(async b=>{let c=aC(),d=c[0]?.id,e=new W(c),h=Q(e,u,f),i=((a,b,c)=>{let d=c.map(c=>Q(a,b,c));if(!d.some(a=>!a))return d})(e,u,g);if(!h||!i||i.some(a=>a.parent?.id===f.id))return;let k=S(i.map(a=>a.data),u,z);b.protectFileIds(k.fileIds),b.protectPaths(k.paths);let l=await Promise.all(i.map(a=>ac(f.path,a.data.name)));b.protectPaths(l);let m=(await Promise.all(l.map(async a=>({exists:await ad(a),path:a})))).filter(({exists:a})=>a);if(!a&&m.length>0)return void p({title:`Replace ${i[0].data.name}?`,onConfirm:()=>void j(!0)});let n=new Map;if(a&&D)for(let{path:a}of m){let c=await D(a);if(n.set(a,c.targetIds),b.protectFileIds(c.targetIds),b.protectPaths(c.targetIds.map(a=>u(a)?.path).filter(a=>!!a)),!c.allowed)return}let o=await ae({files:g.map(a=>a.path),targetFolder:f.path,replaceExist:a});if(Array.isArray(o)&&o.length>0){let a=aC();if(a[0]?.id!==d)return;a!==c&&(e=new W(a));let b=Q(e,u,f);if(!b)return;let h=new Set(o.filter(a=>!a.is_replaced).map(({old_path:a})=>a)),j=g.filter(a=>h.has(a.path)).map(a=>a.id);for(let a of(o.forEach(a=>{U(e,a,u,v,y,x,w,A,C,{deleteFileObjectsByIds:B,replacementIds:n.get(a.old_path)})}),j))e.move({id:a,parentId:f.id,index:b.children?.length??0});let l=new Set([f.path]),m=new Set;for(let a of i){let b=a.parent?.data;b?.path&&ap.current.has(b.path)&&(l.add(b.path),m.add(b.path))}let p=o.filter(a=>a.is_folder).map(a=>a.old_path);if(p.length>0)for(let a of new Set([...ao.current,...ap.current.keys(),...aq.current]))p.some(b=>a===b||a.startsWith(`${b}/`)||a.startsWith(`${b}\\`))&&l.add(a);for(let a of l)ao.current.delete(a),ap.current.delete(a),aq.current.delete(a);m.forEach(a=>aq.current.add(a)),aq.current.add(f.path),aw(a=>new Set([...a].filter(a=>!l.has(a))));let q=new Set(k.fileIds);au(a=>new Set([...a].filter(a=>{let b=u(a)?.path;return!q.has(a)&&(!b||!l.has(b))})));let r=e.data;aB.current=r,$(r),j.length>0&&await aN(b.data)}})};i?p({title:`Replace ${c.data.name}?`,onConfirm:()=>void j(!0)}):p({title:`Move ${c.data.name}?`,onConfirm:()=>void j()})},aT=a=>{a&&a.length>0&&a[0]?.data&&g?.(a[0].data)},aU=(a,b,c=!1,e=!1)=>(0,h.jsx)(E,{...a,getCurrentFolderData:aC,canInsertIntoDirectory:aF,setFolderData:aE,refreshDirectory:aO,onFocusActiveFile:aQ,onOpen:j,isRoot:b,onShowConfirm:p,onRequestDelete:q?aD:void 0,onShowInputConfirm:s,onShowContextMenu:t,getFileObject:u,getFileObjectByPath:v,setFileObject:w,setFileObjectByPath:x,deletePathEntry:y,getFileIdsByPathPrefix:z,moveFileObjectsByPathPrefix:A,deleteFileObjectsByPathPrefix:C,createFile:I,updateFile:J,fileTreeHandler:ah,disableFileOperations:n,iconButtonComponent:K,renderNodeIcon:M,renderNodePrefix:O,renderNodeName:T,rootActions:d,isLoading:at.has(a.node.id),isEmpty:a.node.isOpen&&!!a.node.data.path&&av.has(a.node.data.path)&&a.node.data.children?.length===0,isStickyRoot:c,isRootSuppressed:e});return 0===b.length?null:(0,h.jsx)(ag.Provider,{value:a=>{let b=a.node.id===aH;return b&&(al.current=a.tree,ah.rootTree=a.tree,ah.updateTreeView=a=>{ah.rootTree?.update({data:a.data}),$(a.data)},ah.clearLoadedDirsCache=()=>{ar.current+=1,ao.current.clear(),ap.current.clear(),aq.current.clear(),au(a=>0===a.size?a:new Set),aw(a=>0===a.size?a:new Set)}),aU(a,b,!1,b&&ax)},children:(0,h.jsx)(o,{children:a=>{let c=(0,h.jsx)(r.Tree,{ref:an,...a,data:b,childrenAccessor:ak,dndRootElement:l,disableDrag:m,initialOpenState:aJ,openByDefault:!1,selection:Z,indent:X,rowHeight:Y,rowClassName:"mf-file-tree-item",renderRow:V||j?H:void 0,disableMultiSelection:!0,onSelect:aT,onMove:aS,onToggle:aP,onScroll:V?aM:void 0,onContextMenu:a=>{if(n)return;let c=[],d=b[0];d&&c.push({label:"New File",value:"new_file",handler:()=>{let a={id:`pending-${Date.now()}`,name:"",kind:"pending_new_file"};al.current?.open(d.id),aj.create({parentId:d.id,data:a}),$(aj.data)}},{label:"New Folder",value:"new_folder",handler:()=>{let a={id:`pending-${Date.now()}`,name:"",kind:"pending_new_folder",children:[]};al.current?.open(d.id),aj.create({parentId:d.id,data:a}),$(aj.data)}}),0!==c.length&&t({x:a.clientX,y:a.clientY,items:c})},children:G},aH);if(!V)return(0,h.jsx)(af.Provider,{value:aL,children:c});let d=al.current,e=d?.get(aH??null);return(0,h.jsx)(af.Provider,{value:aL,children:(0,h.jsxs)(aa,{style:a,children:[c,ax&&e&&d?(0,h.jsx)(ab,{"aria-label":e.data.name,"data-mf-file-tree-sticky-layer":"",role:"tree",style:{height:Y},children:(0,h.jsx)("div",{"aria-expanded":e.isInternal?e.isOpen:void 0,"aria-label":e.data.name,"aria-level":1,"aria-selected":e.isSelected,className:"mf-file-tree-item","data-mf-file-tree-sticky-item":"",onClick:e.handleClick,onKeyDown:a=>{if(a.target===a.currentTarget){if("Enter"===a.key||" "===a.key){a.preventDefault(),a.stopPropagation(),e.select(),e.activate(),e.toggle();return}if("ArrowLeft"===a.key){a.preventDefault(),a.stopPropagation(),e.isInternal&&e.isOpen&&e.close();return}if("ArrowRight"===a.key){a.preventDefault(),a.stopPropagation(),e.isInternal&&!e.isOpen&&e.open();return}("Home"===a.key||"ArrowUp"===a.key)&&(a.preventDefault(),a.stopPropagation(),aK(),d.focus(e))}},role:"treeitem",style:{height:"100%"},tabIndex:0,children:aU({dragHandle:void 0,node:e,style:{paddingLeft:0},tree:d},!0,!0)})}):null]})})}})})});l.default.div.withConfig({displayName:"dist__FileTreeContainer",componentId:"sc-4c293bea-10"})`
  flex: 1;
  overflow-y: auto;
  font-size: ${a=>a.theme.fontSm||"13px"};
  position: relative;
`,l.default.div.withConfig({displayName:"dist__IndentLines",componentId:"sc-4c293bea-11"})`
  --indent-size: 16px;

  position: absolute;
  top: 0;
  left: 4px;
  z-index: 0;
  display: flex;
  align-items: flex-start;
  height: 100%;
  pointer-events: none;

  & > div {
    height: 100%;
    padding-left: 10px;
    border-right: 1px solid
      ${a=>`color-mix(in srgb, ${a.theme.fileTreeIndentLineColor||a.theme.borderColor} 58%, transparent)`};
    margin-right: calc(var(--indent-size) - 10px - 1px);
    z-index: 1;
  }
`,l.default.div.withConfig({displayName:"dist__FileTreeItemWrapper",componentId:"sc-4c293bea-12"})`
  font-size: ${a=>a.theme.fontSm};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  padding: 0 8px;
  margin: 0 4px;
  color: ${a=>a.$active?a.theme.primaryFontColor:a.theme.unselectedFontColor};
  background-color: ${a=>a.$active?`color-mix(in srgb, ${a.theme.hoverColor} 86%, transparent)`:"transparent"};
  border: 1px solid transparent;
  border-radius: ${a=>a.theme.smallBorderRadius||"4px"};
  box-sizing: border-box;
  position: relative;

  &:hover {
    background-color: ${a=>`color-mix(in srgb, ${a.theme.hoverColor} 86%, transparent)`};
    color: ${a=>a.theme.primaryFontColor};
  }
`,l.default.div.withConfig({displayName:"dist__ItemRow",componentId:"sc-4c293bea-13"})`
  display: flex;
  padding: 0 6px;
  padding-left: calc(6px + ${a=>16*a.$level}px);
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  z-index: 1;

  .file-icon {
    flex-shrink: 0;
    margin-right: 4px;
    font-size: 16px;
    color: inherit;
  }
`;l.default.span.withConfig({displayName:"dist__FileName",componentId:"sc-4c293bea-14"})`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;l.default.div.withConfig({displayName:"dist__SectionWrapper",componentId:"sc-4c293bea-15"})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  ${a=>a.$hidden&&`
    display: none !important;
  `}
`;let ai=l.default.div.withConfig({displayName:"dist__ToolbarWrapper",componentId:"sc-4c293bea-16"})`
  background-color: ${({theme:a})=>a.bgColor};
  width: 100%;
  padding: 4px 8px;
  border-bottom: 1px solid
    ${({theme:a})=>`color-mix(in srgb, ${a.borderColor} 72%, transparent)`};
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`,aj=l.default.div.withConfig({displayName:"dist__ToolbarDivider",componentId:"sc-4c293bea-17"})`
  width: 1px;
  height: 20px;
  background-color: ${({theme:a})=>`color-mix(in srgb, ${a.borderColor} 72%, transparent)`};
  margin: 0 4px;
  flex-shrink: 0;
`,ak=(0,u.create)(a=>({x:0,y:0,open:!1,items:[],show:({x:b,y:c,items:d})=>{a({x:b,y:c,items:d,open:!0})},hide:()=>{a({x:0,y:0,items:[],open:!1})}})),al=null,am=(0,i.memo)(()=>{let{x:a,y:b,items:c,open:d}=ak();return(0,h.jsx)(q.f,{"aria-label":"Context menu",open:d,onOpenChange:a=>{a||ak.getState().hide()},items:c,anchorPoint:{x:a,y:b},onCloseAutoFocus:a=>{a.preventDefault(),al?.isConnected&&al.focus({preventScroll:!0}),al=null}})});am.displayName="ContextMenu";class an{title;children;parent;offsetCacheVersion;cachedOffsetTop;htmlNode;depth;id;key;chapter;h;onClick;constructor(a){let{depth:b,key:c,offsetCacheVersion:d,chapter:e,h:f}=a,{htmlNode:g,value:h,id:i,onClick:j}=f;this.htmlNode=g,this.title=h,this.parent=null,this.children=[],this.depth=b,this.id=i,this.key=c,this.cachedOffsetTop=null,this.offsetCacheVersion=d-1,this.chapter=e,this.h=f,this.onClick=j}lazyLoad(a){a!==this.offsetCacheVersion&&(this.htmlNode||(this.htmlNode=document.getElementById(this.id)),this.htmlNode&&(this.cachedOffsetTop=this.htmlNode.offsetTop,this.offsetCacheVersion=a))}}(d=f||(f={}))[d.Continue=1]="Continue",d[d.NoChildren=2]="NoChildren",d[d.Stop=3]="Stop";class ao{root;offsetCacheVersion;constructor(a){let b=a.reduce((a,b)=>Math.min(a,b.depth),1/0),c=a.map((a,c)=>new an({h:a,depth:a.depth-b,key:c,offsetCacheVersion:0,chapter:"0"})),d=[new an({h:{depth:-1,value:"",id:"",htmlNode:null},depth:-1,key:-1,offsetCacheVersion:0,chapter:"0"})],e=new Map;c.forEach(a=>{for(;d.length&&d[d.length-1].depth>=a.depth;)d.pop();d[d.length-1].children.push(a),a.parent=d[d.length-1];let b=e.get(a.parent);b||(b=new Map,e.set(a.parent,b));let c=(b.get(a.depth)??0)+1;b.set(a.depth,c);let f=a.depth-Math.max(a.parent.depth,0);if(0===f)a.chapter=String(c);else if(1===f)a.chapter=`${a.parent.chapter}.${c}`;else for(a.chapter=a.parent.chapter;f>=1;)a.chapter+=".",1===f?a.chapter+=c:a.chapter+=0,f--;"string"==typeof a.h.chapter&&(a.chapter=a.h.chapter),d.push(a)}),this.root=d[0],this.offsetCacheVersion=0}getRoot(){return this.root}markOffsetCacheStale(){this.offsetCacheVersion++}traverseInPreorder(a){let b=c=>{let d=a(c);if(d===f.Stop)return f.Stop;if(d===f.NoChildren)return f.Continue;for(let a of c.children)if(b(a)===f.Stop)return f.Stop;return f.Continue};if(this.root){for(let a of this.root.children)if(b(a)===f.Stop)break}}}let ap=({activeId:a,activeNodeKey:b,firstHeadingKey:c,headingId:d,headingKey:e})=>a?d===a:void 0!==b?e===b:e===c,aq=l.css`
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: transparent;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  overflow: hidden;
`,ar=l.css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background: ${a=>a.theme.scrollbarThumbColor};
  }

  scrollbar-width: thin;
  -ms-overflow-style: auto;
  overflow: auto;
`,as=l.css`
  ul {
    align-items: stretch;
  }

  li {
    justify-content: flex-start;
  }

  .toc-list a {
    justify-content: flex-start;
  }
`,at=l.default.div.withConfig({displayName:"dist__TocDiv",componentId:"sc-4c293bea-18"})`
  position: relative;
  height: 100%;
  width: 100%;
  line-height: 1.45;
  padding-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.78rem;
  box-sizing: border-box;

  .toc-list {
    height: 100%;
    padding: 0.5rem 0.65rem 0.75rem 0.55rem;
    overflow: hidden;
    box-sizing: border-box;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${aq};

    &:hover::-webkit-scrollbar-thumb {
      background: ${a=>a.theme.scrollbarThumbColor};
    }
  }

  .toc-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 32px;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background: ${a=>a.theme.rightBarHeaderBgColor};
    border: 1px solid ${a=>a.theme.borderColor};
    opacity: 0;
    transform: translateY(-4px);
    pointer-events: none;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    z-index: 2;
    ${a=>a.toolbarFixed&&l.css`
        position: sticky;
        top: 0;
      `}

    ${a=>!a.compact&&l.css`
        background-color: transparent;
        border: none;
        opacity: 1;
      `}
  }

  .toc-toolbar__title {
    font-weight: 600;
    font-size: 0.9rem;
    color: ${a=>a.theme.primaryFontColor};
  }

  .toc-toolbar__pin {
    display: none;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: ${a=>a.theme.labelFontColor};
    cursor: pointer;
    transition:
      color 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      color: ${a=>a.theme.primaryFontColor};
      background: ${a=>a.theme.hoverColor};
      transform: translateY(-1px);
    }

    &.is-active {
      color: ${a=>a.theme.accentColor};
      background: ${a=>a.theme.accentColorFocused};
    }
  }

  nav {
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    ${aq};

    &:hover,
    &.show-scrollbar,
    .toc-list--expanded & {
      ${ar};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1px;
    align-items: center;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  ${a=>"editor"===a.variant&&l.css`
      font-size: 0.72rem;
      line-height: 1.35em;

      .toc-list {
        padding: 0.25rem 0.5rem;
      }

      ul {
        gap: 2px;
        align-items: flex-end;
      }

      li {
        justify-content: flex-end;
      }

      a {
        gap: 6px;
        min-height: 12px;
      }
    `}

  ${a=>a.compact&&l.css`
      .toc-list a::before {
        height: 3px;
      }
    `}

  &:hover {
    .toc-toolbar__pin {
      display: inline-flex;
    }

    .toc-toolbar {
      opacity: 1;
      pointer-events: auto;
    }
  }

  ${a=>!1===a.compact&&l.css`
      .toc-list {
        overflow: auto;
      }

      nav {
        ${ar};

        &:hover {
          ${ar};
        }
      }

      ${as};

      .toc-link__chapter {
        white-space: nowrap;
        word-break: nowrap;
      }
    `}

  ${a=>!1!==a.compact&&l.css`
      &:hover,
      .toc-list--expanded {
        .toc-list {
          overflow: auto;
        }

        nav {
          ${ar};
        }

        ${as};

        .toc-link__chapter,
        .toc-link__title {
          opacity: 1;
          transform: translateX(0);
        }

        .toc-link__title {
          margin-left: 0;
        }

        .toc-list a::before {
          width: 0;
          opacity: 0;
        }
      }

      nav:hover {
        ${ar};
      }
    `}
`,au=l.default.a.withConfig({displayName:"dist__TocLink",componentId:"sc-4c293bea-19"})`
  color: ${a=>a.active?a.theme.primaryFontColor:a.theme.labelFontColor};
  font-weight: ${a=>a.active?"500":"400"};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  box-shadow: none;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-height: ${a=>a.compact?"14px":"24px"};
  width: 100%;
  max-width: 100%;
  padding: ${a=>a.compact?"0":`0 7px 0 calc(7px + ${+a.depth}em)`};
  border-radius: ${a=>a.compact?"0":"4px"};
  background: transparent;
  box-sizing: border-box;
  transition:
    color 100ms ease,
    background 100ms ease;

  &:hover {
    color: ${a=>a.theme.primaryFontColor};
    background: ${a=>a.compact?"transparent":a.theme.hoverColor};
  }

  ${a=>a.compact&&l.css`
      &::before {
        position: absolute;
        right: 0;
        content: '';
        width: ${a.tocBarWidth||18}px;
        height: 4px;
        border-radius: 999px;
        background: ${a.active?a.theme.tocbarProgressActiveBgColor:a.theme.tocbarProgressBgColor};
        transition:
          width 0.2s ease,
          background 0.2s ease,
          opacity 0.2s ease;
        max-width: 80px;
        flex: 0 0 auto;
      }
    `}

  & .toc-link__chapter {
    flex: 0 0 auto;
    min-width: 0;
    margin-right: 0;
    text-align: left;
    color: ${a=>a.active?a.theme.accentColor:a.theme.labelFontColor};
    font-size: 0.68rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    opacity: ${a=>a.active?.9:.42};
  }

  & .toc-link__title {
    flex: 0 1 auto;
    min-width: 0;
    opacity: ${a=>a.active?1:.78};
  }

  & .toc-link__chapter,
  & .toc-link__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: auto;
    white-space: nowrap;
    word-break: nowrap;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      max-width 0.2s ease;

    ${a=>!1!==a.compact?l.css`
            opacity: 0;
            transform: translateX(-6px);
            max-width: 0;
            pointer-events: none;
          `:l.css`
            opacity: 1;
            transform: translateX(0);
            pointer-events: auto;
          `}
  }
`,av=l.default.li.withConfig({displayName:"dist__TocListItem",componentId:"sc-4c293bea-20"})`
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 0;

  &[data-mf-toc-collapsible] > a {
    padding-inline-start: 2px;
    min-width: 0;
  }

  &:hover [data-slot='toc-disclosure'],
  &:focus-within [data-slot='toc-disclosure'],
  &[data-collapsed] [data-slot='toc-disclosure'] {
    opacity: 1;
  }
`,aw=l.default.span.withConfig({displayName:"dist__TocDisclosureSlot",componentId:"sc-4c293bea-21"})`
  display: inline-flex;
  flex: 0 0 22px;
  align-items: center;
  justify-content: center;
  width: 22px;
`,ax=(0,l.default)(w.f).withConfig({displayName:"dist__TocDisclosure",componentId:"sc-4c293bea-22"})`
  opacity: 0;

  @media (hover: none) {
    opacity: 1;
  }
`,ay=(0,i.forwardRef)((a,b)=>{let{headingsData:c,containerEl:d,scrollEl:e,autoExpand:g=!1,variant:j="sidebar",compact:k=!0,pinned:l=!1,toolbar:m,toolbarFixed:n=!1,activeId:o,showChapter:p=!0,collapsible:q=!1,collapsedHeadingIds:r,onCollapsedHeadingIdsChange:s,collapseLabel:t="Collapse",expandLabel:u="Expand",renderTitle:w,Empty:x=null}=a,[y,z]=(0,i.useState)(c),[A,B]=(0,i.useState)(),[C,D]=(0,i.useState)(),[E,F]=(0,i.useState)(),[G,H]=(0,i.useState)(),[I,J]=(0,i.useState)(e),K=(0,i.useRef)(null),L=(0,i.useRef)(void 0),[M,N]=(0,i.useState)(()=>new Set),O=r??M,P=a=>{void 0===r&&N(a),s?.(a)};(0,i.useEffect)(()=>{z(c),c&&B(new ao(c))},[c]);let Q=(0,i.useMemo)(()=>{if(!A)return[];let a=[];return A.traverseInPreorder(b=>(a.push(b),q)?O.has(b.id)?f.NoChildren:f.Continue:!g||E?.[b.key]||b.parent?.key===-1?f.Continue:f.NoChildren),a},[A,g,E,q,O]),R=(0,i.useMemo)(()=>{let a;if(!q||!A)return o;let b=o??C?.id;if(!b)return;A.traverseInPreorder(c=>c.id!==b?f.Continue:(a=c,f.Stop));let c=a;for(;a?.parent&&-1!==a.parent.key;)a=a.parent,O.has(a.id)&&(c=a);return c?.id??o},[o,C?.id,A,q,O]),S=(0,v.useVirtualizer)({count:Q.length,getScrollElement:()=>K.current,estimateSize:()=>"editor"===j?18:28,overscan:10}),T=S.scrollRect?.height,U=(0,i.useCallback)(a=>{if(!a)return;let b=a.querySelectorAll("h1, h2, h3, h4, h5, h6"),c=[];b.forEach((a,b)=>{let d={depth:parseInt(a.tagName[1],10),value:a.innerText,htmlNode:a,id:a.id||`heading-${b}`};c.push(d)}),z(c);let d=new ao(c);return B(d),d},[]),V=(0,i.useCallback)(a=>{let b=a||d;if(b||y){if(y)B(new ao(y));else if(b)U(b);else throw Error("No headings and containerEl found");return H(b),b}},[d,y,U]),W=(0,i.useCallback)(()=>{if(!A||!I)return null;let a=I.scrollTop+10,b=null,c=null;return(A.traverseInPreorder(d=>a>Math.max((d.cachedOffsetTop||0)-(G?.offsetTop||0),0)?(c=d,f.Continue):(b=c,f.Stop)),null===b&&null!==c&&G)?c:b},[A,G,I]),X=(0,i.useCallback)(a=>{if(A){let b=a,c={},d=A.getRoot();if(d){for(c[d.key]=!0;null!==b;)c[b.key]=!0,b=b.parent;return c}}},[A]);(0,i.useEffect)(()=>{if(!o||!A)return;let a=null;A.traverseInPreorder(b=>b.id===o?(a=b,f.Stop):f.Continue),a&&a!==C&&(D(a),F(X(a)))},[o,A,C,X]);let Y=(0,i.useCallback)(()=>{if(o)return;let a=W();if(a&&a!==C){let b=X(a);D(a),F(b)}},[o,C,X,W]);return(0,i.useEffect)(()=>(A?Y():V(),I?.addEventListener("scroll",Y),()=>{I?.removeEventListener("scroll",Y)}),[A,I,V,Y]),(0,i.useEffect)(()=>{if(!Q.length){L.current=void 0;return}let a=K.current;if(!a||a.clientHeight<=0||!q&&g&&o&&C?.id!==o)return;let b=Q.findIndex(a=>ap({activeId:R,activeNodeKey:C?.key,firstHeadingKey:Q[0]?.key,headingId:a.id,headingKey:a.key}));if(b<0)return;let c=o??C?.id??Q[b].id;if(L.current===c)return;if(Q.length>50){let d=S.getOffsetForIndex(b,"auto")?.[0];if(void 0===d)return;L.current=c,d!==a.scrollTop&&S.scrollToOffset(d);return}let d=a.querySelector(`li[aria-posinset="${b+1}"]`);if(!d)return;L.current=c;let e=d.getBoundingClientRect(),f=a.getBoundingClientRect().top+a.clientTop,h=f+a.clientHeight,i=e.top<f?e.top-f:Math.max(0,e.bottom-h);i&&a.scrollTo({top:a.scrollTop+i,behavior:"auto"})},[o,C?.id,C?.key,g,q,R,Q,S,T]),(0,i.useImperativeHandle)(b,()=>({refresh:({newContainer:a,newScroll:b})=>{U(a||G),H(a),J(b)},refreshByHeadings:({newHeadings:a})=>{z(a),B(new ao(a)),J(void 0),H(void 0)},collapseAll:()=>{if(!q)return;let a=new Set;A?.traverseInPreorder(b=>(b.children.length&&a.add(b.id),f.Continue)),P(a)},expandAll:()=>{q&&P(new Set)}})),(0,h.jsx)(at,{variant:j,compact:k,toolbarFixed:n,hasToolbar:!!m,children:(0,h.jsxs)("div",{className:`toc-list ${!k||l?"toc-list--expanded":""}`,children:[m,A?.getRoot()?.children?.length===0?x:(0,h.jsx)(h.Fragment,{children:(()=>{if(0===Q.length)return null;let a=(a,b,c)=>{let d=ap({activeId:R,activeNodeKey:C?.key,firstHeadingKey:Q[0]?.key,headingId:a.id,headingKey:a.key}),e=Math.min(160,Math.max(16,10+4*(a.title?.length||0)-3*a.depth)),f=Math.max(4,24-4*(Math.min(6,Math.max(1,(a.h?.depth??a.depth+1)||1))-1));return(0,h.jsxs)(av,{depth:a.depth,active:d,"aria-posinset":b+1,"aria-setsize":Q.length,"data-mf-toc-collapsible":q||void 0,"data-collapsed":q&&O.has(a.id)||void 0,style:c,children:[q?(0,h.jsx)(aw,{style:{marginInlineStart:`calc(7px + ${a.depth}em)`},children:a.children.length?(0,h.jsx)(ax,{"data-slot":"toc-disclosure","aria-label":`${O.has(a.id)?u:t} ${a.title}`,"aria-expanded":!O.has(a.id),size:"icon-chrome",variant:"ghost",onClick:()=>{let b=new Set(O);b.has(a.id)?b.delete(a.id):b.add(a.id),P(b)},children:(0,h.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:(0,h.jsx)("path",{d:O.has(a.id)?"m6 4 4 4-4 4":"m4 6 4 4 4-4"})})}):null}):null,(0,h.jsxs)(au,{"aria-current":d?"location":void 0,href:`#${a.id}`,active:d,depth:a.depth,compact:k,tocBarWidth:"editor"===j?f:e,onClick:b=>{if(b.preventDefault(),a.onClick)a.onClick(a.h);else{let c;b.preventDefault(),c=(a.cachedOffsetTop||0)-(G?.offsetTop||0),I?.scrollTo(0,c),D(a),F(X(a))}},children:[p&&null!==a.h.chapter?(0,h.jsx)("span",{className:"toc-link__chapter",children:a.h.chapter??a.chapter}):null,(0,h.jsx)("span",{className:"toc-link__title",children:w?w(a.title):a.title})]})]},a.key)};if(Q.length>50){let b={height:`${S.getTotalSize()}px`,width:"100%",position:"relative"};return(0,h.jsx)("nav",{ref:K,onWheel:a=>{a.stopPropagation()},className:!k||l?"show-scrollbar":"",children:(0,h.jsx)("ul",{style:b,children:S.getVirtualItems().map(b=>a(Q[b.index],b.index,{position:"absolute",top:0,left:0,width:"100%",height:`${b.size}px`,transform:`translateY(${b.start}px)`}))})})}return(0,h.jsx)("nav",{ref:K,className:!k||l?"show-scrollbar":"",children:(0,h.jsx)("ul",{children:Q.map((b,c)=>a(b,c))})})})()})]})})});ay.displayName="TableOfContents",(e=g||(g={})).Success="Success",e.NotFound="NotFound",e.PermissionDenied="PermissionDenied",e.InvalidPath="InvalidPath",e.Binary="Binary",e.UnknownError="UnknownError";let az=l.createGlobalStyle`
  .icon {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    font-size: 1rem;
    cursor: pointer;
    transition:
      color 100ms ease,
      background-color 100ms ease,
      opacity 100ms ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" 1, "calt" 1;
    font-display: swap;

    &:hover {
      color: ${a=>a.theme.primaryFontColor};
      background-color: ${a=>a.theme.hoverColor};
    }

    &--active {
      color: ${a=>a.theme.accentColor};
    }

    &-unselected {
      color: ${a=>a.theme.unselectedFontColor};
    }

    &-disabled {
      color: ${a=>a.theme.disabledFontColor};
      cursor: not-allowed;
    }
  }

  .icon-small {
    height: 22px;
    width: 22px;
    font-size: 14px;
  }

  .icon-medium {
    height: 32px;
    width: 32px;
    font-size: 16px;
  }

  .icon-large {
    height: 40px;
    width: 40px;
    font-size: 18px;
  }

  .icon-rounded {
    border-radius: 50%;
  }

  .icon-smooth {
    border-radius: 6px;
  }

  .icon-square {
    border-radius: 0;
  }

  .popover {
    border: 1px solid ${a=>a.theme.borderColor};
  }

  .display-none {
    display: none;
  }

  /* Styles for scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${a=>a.theme.scrollbarTrackColor};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${a=>a.theme.scrollbarThumbColor};
  }
`;a.s(["i",0,O,"c",0,am,"R",0,K,"d",0,I,"X",0,M,"b",0,az,"Z",0,a=>{let{icon:b,onClick:c,tooltipProps:d,iconRef:e,rounded:f="square",disabled:g=!1,unselected:i=!1}=a,j=(0,m.default)("icon",b,a.className,{"icon--active":a.active,[`icon-${a.size||"medium"}`]:!0,"icon-rounded":"rounded"===f,"icon-smooth":"smooth"===f,"icon-square":"square"===f,"icon-unselected":i,"icon-disabled":g});return d?(0,h.jsx)(n.f,{...d,children:(0,h.jsx)("i",{ref:e,className:j,onClick:c})}):(0,h.jsx)("i",{ref:e,className:j,onClick:c})},"G",0,a=>{let b=b=>{a.onRightNavItemClick&&a.onRightNavItemClick(b)};return(0,h.jsxs)(J,{children:[(0,h.jsx)("small",{className:"sidebar-header__name",children:a.name}),(0,h.jsxs)("div",{className:"flex",children:[a.actions,a.rightNavItems?.map(a=>a.tooltip?(0,i.createElement)(n.f,{...a.tooltip,key:a.key},(0,h.jsx)("i",{className:`icon icon-small icon-smooth ${a.iconCls}`,onClick:()=>b(a)})):(0,h.jsx)("i",{className:`icon icon-small icon-smooth ${a.iconCls}`,onClick:()=>b(a)},a.key))]})]})},"M",0,ay,"e",0,aj,"E",0,ai,"T",0,ah,"u",0,a=>{!ak.getState().open&&"u">typeof document&&(al=document.activeElement instanceof HTMLElement?document.activeElement:null),ak.getState().show(a)}]),c()}catch(a){c(a)}},!1)],85719,(a,b,c)=>{b.exports=a.x("classnames-086ff0dbc8dfad22",()=>require("classnames-086ff0dbc8dfad22"))},21377,(a,b,c)=>{b.exports=a.x("next-i18next-72a9335eea5cea01",()=>require("next-i18next-72a9335eea5cea01"))},31633,(a,b,c)=>{b.exports=a.x("react-arborist-b10cd26985f31e8d",()=>require("react-arborist-b10cd26985f31e8d"))},19059,(a,b,c)=>{b.exports=a.r(11276)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0es3iw3n059mi._.js.map