module.exports=[[32682,a=>a.a(async(b,c)=>{try{var d=a.i(49470),e=a.i(95426),f=b([d,e]);[d,e]=f.then?(await f)():f,a.s(["SaveableEditor",()=>e.f,"WebEditor",()=>d.C,"default",()=>d.U]),c()}catch(a){c(a)}},!1),49470,a=>a.a(async(b,c)=>{try{a.s(["C",()=>o,"U",()=>p]);var d=a.i(8171),e=a.i(24199),f=a.i(62945),g=a.i(27669),h=a.i(42931),i=a.i(95426),j=b([e,i]);[e,i]=j.then?(await j)():j;let k=h.default.div.withConfig({displayName:"Editor__EditorContainer",componentId:"sc-df9104aa-0"})`
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
`,l=h.default.div.withConfig({displayName:"Editor__PreviewScroller",componentId:"sc-df9104aa-1"})`
  width: 100%;
  height: 100%;
  overflow: auto;
`,m=h.default.div.withConfig({displayName:"Editor__PreviewWidth",componentId:"sc-df9104aa-2"})`
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;
  box-sizing: border-box;
  --rme-editor-inline-padding: clamp(16px, 5vw, 40px);
`,n=h.default.div.withConfig({displayName:"Editor__LoadingContainer",componentId:"sc-df9104aa-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: var(--ink-faint);
  font-family: var(--body);
`,o=(0,g.forwardRef)(function(a,b){let{viewType:c,initialContent:h,onChange:i,editable:j=!0}=a,{Editor:o,EditorViewType:p,createWysiwygDelegate:q,createSourceCodeDelegate:r,loading:s,error:t}=(0,f.Y)(),[u,v]=(0,g.useState)(void 0===h?"##### Welcome to MarkFlowy!":h),w=(0,g.useRef)(u),x=(0,g.useRef)(!1),y=(0,g.useRef)(i),z=(0,g.useRef)(null);y.current=i;let[A,B]=(0,g.useState)(c||"wysiwyg"),[C,D]=(0,g.useState)(0),[E,F]=(0,g.useState)(!1),G=(0,g.useCallback)(a=>q&&r?"wysiwyg"===a?q():r({language:"markdown",onCodemirrorViewLoad:()=>{}}):null,[q,r]),[H,I]=(0,g.useState)(()=>G(c||"wysiwyg"));(0,g.useEffect)(()=>{if(!H&&q&&r){let a=G(A);a&&I(a)}},[H,q,r,A,G]),(0,g.useEffect)(()=>{F(!0)},[]),(0,g.useEffect)(()=>{if(void 0!==h&&h!==w.current&&(w.current=h,v(h),z.current)){x.current=!0;try{z.current.setContent(h)}finally{x.current=!1}}},[h]),(0,g.useEffect)(()=>{if(c&&c!==A&&(B(c),"wysiwyg"===c||"source"===c)){let a=G(c);a&&(I(a),D(a=>a+1))}},[c,A,G]);let J=(0,g.useCallback)(a=>{if(a&&a.state&&H&&"function"==typeof H.docToString)try{let b=H.docToString(a.state.doc);if(void 0!==b){let a=x.current;w.current=b,v(b),a||y.current?.(b)}}catch{}},[H]);(0,g.useImperativeHandle)(b,()=>({getContent:()=>w.current}),[]);let K=(0,g.useMemo)(()=>({initialType:"wysiwyg"===A&&p?p.WYSIWYG:p?.SOURCE_CODE||"sourceCode",content:u,delegate:H}),[A,p,u,H]);return!E||s?(0,d.jsx)(n,{children:"Loading Editor..."}):t?(0,d.jsxs)(n,{children:["Error loading editor: ",t.message]}):o&&p&&H?"preview"===A?(0,d.jsx)(e.f,{children:(0,d.jsx)(l,{children:(0,d.jsx)(m,{children:(0,d.jsx)(o,{ref:z,...K,initialType:"preview",delegate:H,editable:!1},`preview-${C}`)})})}):(0,d.jsx)(e.f,{children:(0,d.jsx)(k,{children:(0,d.jsx)(o,{ref:z,...K,delegate:H,editable:j,onChange:J},C)})}):(0,d.jsx)(n,{children:"Loading Editor..."})}),p=o;c()}catch(a){c(a)}},!1),4174,a=>{var b=a.i(8171),c=a.i(42931);let d=c.default.div.withConfig({displayName:"Loading__LoadingContainer",componentId:"sc-8d211eee-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: ${a=>a.theme.labelFontColor};
`;a.s(["f",0,()=>(0,b.jsx)("div",{style:{position:"absolute",left:"50%",transform:"translate(50%,0)"},children:(0,b.jsx)(d,{children:"Loading ..."})})])},24199,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(32432),f=a.i(31909),g=a.i(80672),h=a.i(41910),i=a.i(27669),j=a.i(7294),k=a.i(7110),l=a.i(62945),m=a.i(4174),n=b([e,f,g,j,k]);[e,f,g,j,k]=n.then?(await n)():n,a.s(["f",0,({themeTokens:a,children:b})=>{let{ThemeProvider:c,loading:n,error:o,reload:p}=(0,l.C)(),q=(0,h.useRouter)(),{resolvedTheme:r}=(0,k.f)(),s=(0,i.useMemo)(()=>(0,f.createInstance)(),[]),t=(0,i.useMemo)(()=>{let a;return{locales:e.k,language:(a=(q.locale||"en").toLowerCase()).startsWith("zh")?"cn":a.startsWith("ja")?"ja":a.startsWith("fr")?"frFR":a.startsWith("es")?"es":a.startsWith("ru")?"ru":"en"}},[q.locale]),u=(0,i.useMemo)(()=>({mode:r,token:{...j.I[r],...a||{}}}),[r,a]);return((0,i.useEffect)(()=>{(async()=>{s.isInitialized?await s.changeLanguage(t.language):await s.use(g.initReactI18next).init({resources:e.k,interpolation:{escapeValue:!1},fallbackLng:"en",lng:t.language})})()},[s,t.language]),(0,i.useEffect)(()=>{n&&!c&&p&&p().catch(console.warn)},[n,c,p]),n)?(0,d.jsx)(m.f,{}):o?(0,d.jsxs)("div",{style:{padding:"2rem",textAlign:"center",color:j.e.primaryFontColor,backgroundColor:j.e.bgColorSecondary},children:[(0,d.jsxs)("p",{children:["Error loading RME: ",o.message]}),(0,d.jsx)("button",{onClick:()=>p&&p(),style:{marginTop:"1rem",padding:"0.5rem 1rem",backgroundColor:j.e.accentColor,color:"var(--on-accent)",border:"none",borderRadius:"999px",cursor:"pointer"},children:"Retry"})]}):c?(0,d.jsx)(g.I18nextProvider,{i18n:s,children:(0,d.jsx)(c,{theme:u,i18n:t,children:b},t.language)}):(0,d.jsx)(m.f,{})}]),c()}catch(a){c(a)}},!1),95426,a=>a.a(async(b,c)=>{try{a.s(["f",()=>h]);var d=a.i(8171),e=a.i(27669),f=a.i(49470),g=b([f]);[f]=g.then?(await g)():g;let h=(0,e.forwardRef)(function(a,b){let{fileId:c,viewType:g,initialContent:h,onSave:i,onChange:j}=a,k=(0,e.useRef)(null),l=(0,e.useCallback)(()=>k.current?.getContent(),[]),m=(0,e.useCallback)(()=>{let a=l();void 0!==a&&i&&i(a)},[l,i]);return(0,e.useImperativeHandle)(b,()=>({getContent:l,save:m}),[l,m]),(0,d.jsx)(f.C,{ref:k,fileId:c,viewType:g,initialContent:h,onChange:j})});c()}catch(a){c(a)}},!1),62945,a=>{var b=a.i(27669);let c=null,d=null,e=async()=>c||d||(d=a.A(19166).then(a=>(c=a,a)).catch(a=>{throw d=null,a})),f=()=>{let[a,d]=(0,b.useState)(c),[f,g]=(0,b.useState)(!c),[h,i]=(0,b.useState)(null);return(0,b.useEffect)(()=>{if(c){d(c),g(!1),i(null);return}e().then(a=>{d(a),g(!1),i(null)}).catch(a=>{console.error("Failed to load RME module:",a),i(a),g(!1)})},[]),(0,b.useMemo)(()=>({rmeModule:a,loading:f,error:h}),[a,f,h])};a.s(["Y",0,()=>{let{rmeModule:a,loading:c,error:d}=f();return(0,b.useMemo)(()=>({Editor:a?.Editor,EditorViewType:a?.EditorViewType,createWysiwygDelegate:a?.createWysiwygDelegate,createSourceCodeDelegate:a?.createSourceCodeDelegate,loading:c,error:d}),[a?.Editor,a?.EditorViewType,a?.createWysiwygDelegate,a?.createSourceCodeDelegate,c,d])},"C",0,()=>{let{rmeModule:a,loading:c,error:d}=f();return(0,b.useMemo)(()=>({ThemeProvider:a?.ThemeProvider,loading:c,error:d,reload:()=>e()}),[a?.ThemeProvider,c,d])}])}],28905,function(a){a.n(a.i(32682))}];

//# sourceMappingURL=apps_web_0bo-sl01dxf8m._.js.map