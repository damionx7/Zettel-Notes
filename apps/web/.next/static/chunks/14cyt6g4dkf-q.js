(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16559,e=>{"use strict";var t=e.i(91398),i=e.i(45161),r=e.i(73279),n=e.i(47977),o=e.i(24340),a=e.i(3828),s=e.i(91788),l=e.i(78639),c=e.i(61813);let d=null,u=null,g=async()=>d||u||(u=e.A(12047).then(e=>(d=e,e)).catch(e=>{throw u=null,e})),h=()=>{let[e,t]=(0,s.useState)(d),[i,r]=(0,s.useState)(!d),[n,o]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(d){t(d),r(!1),o(null);return}g().then(e=>{t(e),r(!1),o(null)}).catch(e=>{console.error("Failed to load RME module:",e),o(e),r(!1)})},[]),(0,s.useMemo)(()=>({rmeModule:e,loading:i,error:n}),[e,i,n])};var f=e.i(19174);let m=f.U.div.withConfig({displayName:"Loading__LoadingContainer",componentId:"sc-8d211eee-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: ${e=>e.theme.labelFontColor};
`,p=()=>(0,t.jsx)("div",{style:{position:"absolute",left:"50%",transform:"translate(50%,0)"},children:(0,t.jsx)(m,{children:"Loading ..."})}),w=({themeTokens:e,children:d})=>{let{ThemeProvider:u,loading:f,error:m,reload:w}=(()=>{let{rmeModule:e,loading:t,error:i}=h();return(0,s.useMemo)(()=>({ThemeProvider:e?.ThemeProvider,loading:t,error:i,reload:()=>g()}),[e?.ThemeProvider,t,i])})(),y=(0,a.useRouter)(),{resolvedTheme:x}=(0,c.f)(),v=(0,s.useMemo)(()=>(0,r.p)(),[]),C=(0,s.useMemo)(()=>{let e;return{locales:i.k,language:(e=(y.locale||"en").toLowerCase()).startsWith("zh")?"cn":e.startsWith("ja")?"ja":e.startsWith("fr")?"frFR":e.startsWith("es")?"es":e.startsWith("ru")?"ru":"en"}},[y.locale]),j=(0,s.useMemo)(()=>({mode:x,token:{...l.I[x],...e||{}}}),[x,e]);return((0,s.useEffect)(()=>{(async()=>{v.isInitialized?await v.changeLanguage(C.language):await v.use(o.f).init({resources:i.k,interpolation:{escapeValue:!1},fallbackLng:"en",lng:C.language})})()},[v,C.language]),(0,s.useEffect)(()=>{f&&!u&&w&&w().catch(console.warn)},[f,u,w]),f)?(0,t.jsx)(p,{}):m?(0,t.jsxs)("div",{style:{padding:"2rem",textAlign:"center",color:l.e.primaryFontColor,backgroundColor:l.e.bgColorSecondary},children:[(0,t.jsxs)("p",{children:["Error loading RME: ",m.message]}),(0,t.jsx)("button",{onClick:()=>w&&w(),style:{marginTop:"1rem",padding:"0.5rem 1rem",backgroundColor:l.e.accentColor,color:"var(--on-accent)",border:"none",borderRadius:"999px",cursor:"pointer"},children:"Retry"})]}):u?(0,t.jsx)(n.f,{i18n:v,children:(0,t.jsx)(u,{theme:j,i18n:C,children:d},C.language)}):(0,t.jsx)(p,{})},y=(0,s.forwardRef)(function(e,i){let{fileId:r,viewType:n,initialContent:o,onSave:a,onChange:l}=e,c=(0,s.useRef)(null),d=(0,s.useCallback)(()=>c.current?.getContent(),[]),u=(0,s.useCallback)(()=>{let e=d();void 0!==e&&a&&a(e)},[d,a]);return(0,s.useImperativeHandle)(i,()=>({getContent:d,save:u}),[d,u]),(0,t.jsx)(E,{ref:c,fileId:r,viewType:n,initialContent:o,onChange:l})}),x=f.U.div.withConfig({displayName:"Editor__EditorContainer",componentId:"sc-df9104aa-0"})`
  padding: 0;
  width: 100%;
  min-width: 0;
  height: 100%;
  overflow: auto;
  font-weight: 400;

  .rme-editor-root {
    padding: 32px clamp(20px, 4vw, 56px);
    max-width: 880px;
    margin-inline: auto;
  }
`,v=f.U.div.withConfig({displayName:"Editor__PreviewScroller",componentId:"sc-df9104aa-1"})`
  width: 100%;
  height: 100%;
  overflow: auto;
`,C=f.U.div.withConfig({displayName:"Editor__PreviewWidth",componentId:"sc-df9104aa-2"})`
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;
  box-sizing: border-box;
  --rme-editor-inline-padding: clamp(16px, 5vw, 40px);
`,j=f.U.div.withConfig({displayName:"Editor__LoadingContainer",componentId:"sc-df9104aa-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: var(--ink-faint);
  font-family: var(--body);
`,E=(0,s.forwardRef)(function(e,i){let{viewType:r,initialContent:n,onChange:o,editable:a=!0}=e,{Editor:l,EditorViewType:c,createWysiwygDelegate:d,createSourceCodeDelegate:u,loading:g,error:f}=(()=>{let{rmeModule:e,loading:t,error:i}=h();return(0,s.useMemo)(()=>({Editor:e?.Editor,EditorViewType:e?.EditorViewType,createWysiwygDelegate:e?.createWysiwygDelegate,createSourceCodeDelegate:e?.createSourceCodeDelegate,loading:t,error:i}),[e?.Editor,e?.EditorViewType,e?.createWysiwygDelegate,e?.createSourceCodeDelegate,t,i])})(),[m,p]=(0,s.useState)(void 0===n?"##### Welcome to MarkFlowy!":n),y=(0,s.useRef)(m),E=(0,s.useRef)(!1),b=(0,s.useRef)(o),k=(0,s.useRef)(null);b.current=o;let[S,R]=(0,s.useState)(r||"wysiwyg"),[T,W]=(0,s.useState)(0),[_,I]=(0,s.useState)(!1),L=(0,s.useCallback)(e=>d&&u?"wysiwyg"===e?d():u({language:"markdown",onCodemirrorViewLoad:()=>{}}):null,[d,u]),[M,z]=(0,s.useState)(()=>L(r||"wysiwyg"));(0,s.useEffect)(()=>{if(!M&&d&&u){let e=L(S);e&&z(e)}},[M,d,u,S,L]),(0,s.useEffect)(()=>{I(!0)},[]),(0,s.useEffect)(()=>{if(void 0!==n&&n!==y.current&&(y.current=n,p(n),k.current)){E.current=!0;try{k.current.setContent(n)}finally{E.current=!1}}},[n]),(0,s.useEffect)(()=>{if(r&&r!==S&&(R(r),"wysiwyg"===r||"source"===r)){let e=L(r);e&&(z(e),W(e=>e+1))}},[r,S,L]);let P=(0,s.useCallback)(e=>{if(e&&e.state&&M&&"function"==typeof M.docToString)try{let t=M.docToString(e.state.doc);if(void 0!==t){let e=E.current;y.current=t,p(t),e||b.current?.(t)}}catch{}},[M]);(0,s.useImperativeHandle)(i,()=>({getContent:()=>y.current}),[]);let U=(0,s.useMemo)(()=>({initialType:"wysiwyg"===S&&c?c.WYSIWYG:c?.SOURCE_CODE||"sourceCode",content:m,delegate:M}),[S,c,m,M]);return!_||g?(0,t.jsx)(j,{children:"Loading Editor..."}):f?(0,t.jsxs)(j,{children:["Error loading editor: ",f.message]}):l&&c&&M?"preview"===S?(0,t.jsx)(w,{children:(0,t.jsx)(v,{children:(0,t.jsx)(C,{children:(0,t.jsx)(l,{ref:k,...U,initialType:"preview",delegate:M,editable:!1},`preview-${T}`)})})}):(0,t.jsx)(w,{children:(0,t.jsx)(x,{children:(0,t.jsx)(l,{ref:k,...U,delegate:M,editable:a,onChange:P},T)})}):(0,t.jsx)(j,{children:"Loading Editor..."})});e.s(["SaveableEditor",0,y,"WebEditor",0,E,"default",0,E],16559)},1245,function(e){e.n(e.i(16559))},12047,e=>{e.v(t=>Promise.all(["static/chunks/2w68ht09zved1.js","static/chunks/2yu9rpifvm59j.js","static/chunks/2nuia8_u8608z.js","static/chunks/1ckzihv95amw-.js","static/chunks/3kj-x4rttoyae.js","static/chunks/200kuqr07vq9p.js","static/chunks/36wxw2zo43ps0.js"].map(t=>e.l(t))).then(()=>t(16240)))}]);