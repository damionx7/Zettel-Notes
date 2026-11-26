(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[84532,e=>{var t=e.i(91398),n=e.i(3828),r=e.i(91788),i=e.i(63869),l=e.i(19174),a=e.i(27573),o=e.i(54410),s=e.i(20747);let u=l.U.div.withConfig({displayName:"Layout__Container",componentId:"sc-2aae1ad5-0"})`
  padding-left: ${s.Y/16}rem;
  background-color: var(--paper);

  ${(0,a.C)(l.m`
    padding-left: 0;
  `)};
`,c=l.U.div.withConfig({displayName:"Layout__Content",componentId:"sc-2aae1ad5-1"})`
  box-sizing: border-box;
  font-family: var(--body);
  margin: 0 auto;
  min-width: 0;
  width: 100%;
  min-height: ${e=>e.$footer?"0":`calc(100vh - ${(0,o.f)(s.R)})`};
  max-width: ${e=>e.$hero?"100ch":"54rem"};
  padding: ${e=>e.$footer?"0":"8rem 3rem 5rem"};

  @layer base {
    p,
    li {
      max-width: 100ch;
    }
  }

  ${(0,a.C)(l.m`
    padding: 7rem 1.5rem 3rem;
    transform: none;
  `)};

  ${e=>e.$hasTableOfContents&&l.m`
      width: calc(100% - 15rem);
      margin-left: max(0px, calc((100% - 69rem) / 2));
      margin-right: 15rem;

      @media (max-width: 75.999rem) {
        width: 100%;
        margin-inline: auto;
      }
    `};

  ${e=>e.$hero&&!e.$footer&&l.m`
      padding: ${(0,o.f)(84)} ${(0,o.f)(32)} 0;
    `};
`,d=l.U.h1.withConfig({displayName:"Layout__Title",componentId:"sc-2aae1ad5-2"})`
  width: 100%;
  margin: 0 0 1rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.15;
  text-align: left;
  text-wrap: balance;

  + h2 {
    margin-top: -0.5em;
  }
`;l.U.h2.withConfig({displayName:"Layout__Header",componentId:"sc-2aae1ad5-3"})`
  font-size: ${(0,o.f)(32)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
  margin: 2em 0 1em;

  + h3 {
    margin-top: -0.5em;
  }
`,l.U.h3.withConfig({displayName:"Layout__SubHeader",componentId:"sc-2aae1ad5-4"})`
  margin: 2em 0 1em;
  font-size: ${(0,o.f)(24)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);

  + h4 {
    margin-top: -0.5em;
  }
`,l.U.h4.withConfig({displayName:"Layout__TertiaryHeader",componentId:"sc-2aae1ad5-5"})`
  margin: 2em 0 1em;
  font-size: ${(0,o.f)(18)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
`,e.i(64157);var f=e.i(71179),p=e.i(21273);l.U.span.withConfig({displayName:"Navbar__Brand",componentId:"sc-9212fb1f-0"})`
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 700;
`;var m=e.i(79695),h=e.i(32371);let g=e=>{let{isSideFolded:n,isMobileNavFolded:r,onSideToggle:i,onMobileNavToggle:l,showSideNav:a,useDocsSidebarMenu:o,pages:s}=e,{t:u}=(0,f.f)(),c=!1===n;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p.f,{showSideNav:!1!==a,isSideFolded:n,isMobileNavFolded:r,onSideToggle:i,onMobileNavToggle:l}),!1!==a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{id:"docs-sidebar","aria-label":u(!1!==o?"common.docs":"navigation.releases"),$isFolded:n,children:!1!==o?(0,t.jsx)(h.l,{}):(0,t.jsx)(h.y,{pages:s})}),(0,t.jsx)(y,{type:"button","aria-label":u("navigation.closeMenu",{defaultValue:"Close menu"}),"aria-hidden":!c,tabIndex:c?0:-1,$isVisible:c,onClick:i})]})]})},y=l.U.button.withConfig({displayName:"Nav__SidebarBackdrop",componentId:"sc-208244c2-0"})`
  display: none;

  @media (max-width: ${62.5}em) {
    position: fixed;
    inset: var(--mf-site-header-height, ${s.M}px) 0 0;
    z-index: 1;
    display: block;
    padding: 0;
    border: 0;
    background: color-mix(in srgb, var(--paper-deep) 62%, transparent);
    opacity: ${({$isVisible:e})=>+!!e};
    visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
    pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
    transition: opacity 150ms ease;

    &:focus-visible {
      outline: none;
      text-decoration-line: underline;
      text-underline-offset: 2px;
      opacity: 0.8;
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0ms;
    }
  }
`;var x=e.i(66007);e.s(["f",0,function({children:e,title:l="",description:a="",hasTableOfContents:o=!1,useDocsSidebarMenu:s=!0,pages:f,seo:p}){let m=(0,n.useRouter)(),[h,y]=r.default.useState(!0),[b,v]=r.default.useState(!0),k=r.default.useCallback(()=>{v(!0),y(e=>!e)},[]),w=r.default.useCallback(()=>{v(e=>!e),y(!0)},[]);return r.default.useEffect(()=>{v(!0),y(!0)},[m.asPath]),r.default.useEffect(()=>{if(h)return;let e=e=>{"Escape"===e.key&&(y(!0),document.querySelector('[aria-controls="docs-sidebar"]')?.focus())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h]),(0,t.jsxs)(u,{children:[(0,t.jsx)(x.f,{title:`MarkFlowy${l?`: ${l}`:""}`,description:a,...p}),(0,t.jsx)(g,{useDocsSidebarMenu:s,isSideFolded:h,isMobileNavFolded:b,pages:f,onSideToggle:k,onMobileNavToggle:w}),(0,t.jsxs)(c,{as:"main",id:"main-content",$hasTableOfContents:o,$moveRight:!h,"data-e2e-id":"content",children:[l&&(0,t.jsx)(d,{children:l}),e]}),(0,t.jsx)(i.f,{})]})}],84532)},66007,84119,e=>{var t=e.i(91398),n=e.i(58678),r=e.i(3828);let i="https://www.markflowy.cc",l=["en","zh","ru"],a={en:"en_US",zh:"zh_CN",ru:"ru_RU"},o={en:"Find your writing flow with MarkFlowy, a local-first Markdown editor for macOS, Windows, and Linux. Visual and source editing, with optional AI assistance.",zh:"让想法流动，专注每一次写作。MarkFlowy 是适用于 macOS、Windows 和 Linux 的本地优先 Markdown 编辑器，支持所见即所得与源码编辑，可选接入云端 AI 或本地 Ollama 模型。",ru:"MarkFlowy — редактор Markdown для macOS, Windows и Linux с хранением файлов на вашем устройстве. Визуальное редактирование и исходный текст, ИИ-помощник по желанию."};function s(e){return{url:`${i}/social/markflowy-${"zh"===e?"zh":"en"}.png`,width:1200,height:630,type:"image/png",alt:"zh"===e?"MarkFlowy：让想法流动，专注每一次写作。白色背景上的蓝紫色丝带与本地优先 Markdown 编辑器标语。":"MarkFlowy: Your ideas, in full flow. Blue and violet ribbons on white, with the local-first Markdown editor tagline."}}function u(e,t){let n=p("/",e);return{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${i}/#website`,name:"MarkFlowy",url:`${i}/`,inLanguage:l.map(e=>"zh"===e?"zh-CN":e)},{"@type":"SoftwareApplication","@id":`${i}/#application`,name:"MarkFlowy",url:n,description:t,applicationCategory:"ProductivityApplication",operatingSystem:"macOS, Windows, Linux",image:s(e).url,downloadUrl:"https://github.com/drl990114/MarkFlowy/releases",sameAs:["https://github.com/drl990114/MarkFlowy"]}]}}function c(e){return JSON.stringify(e).replace(/</g,"\\u003c")}function d(e){return l.some(t=>t===e)}function f(e){return e.split(/[?#]/,1)[0].replace(/^\/(en|zh|ru)(?=\/|$)/,"").replace(/\/+$/,"")||"/"}function p(e,t="en"){let n=f(e),r="en"===t?"":`/${t}`;return`${i}${r}${"/"===n&&r?"":n}`}function m(e,t){let n=t.map(t=>({hrefLang:"zh"===t?"zh-CN":t,href:p(e,t)}));return t.includes("en")&&n.push({hrefLang:"x-default",href:p(e,"en")}),n}e.s(["q",0,a,"W",0,o,"Q",0,l,"l",0,i,"G",0,function(e,t){return"ru"===t&&/^\/docs\/[^?#]/.test(e)?"en":t},"b",0,u,"A",0,m,"I",0,p,"L",0,s,"v",0,d,"C",0,f,"B",0,c],84119),e.s(["f",0,function({canonical:e,children:h,description:g,image:y,title:x="MarkFlowy",url:b,availableLocales:v=l,markdownUrl:k}){let w=(0,r.useRouter)(),_=w.locale&&d(w.locale)?w.locale:"en",j=e||b||p(w.asPath,_),$=g?.trim()||o[_],C=m(w.asPath,v),M="string"==typeof y?{url:y,alt:x}:y||s(_),O=new URL(M.url,i).href,S="/"===f(w.pathname);return(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:x}),(0,t.jsx)("meta",{name:"description",content:$},"description"),(0,t.jsx)("meta",{property:"og:locale",content:a[_]},"og:locale"),v.filter(e=>e!==_).map(e=>(0,t.jsx)("meta",{property:"og:locale:alternate",content:a[e]},`og:locale:alternate:${e}`)),(0,t.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,t.jsx)("meta",{property:"og:title",content:x},"og:title"),(0,t.jsx)("meta",{property:"og:url",content:j},"og:url"),(0,t.jsx)("meta",{property:"og:image",content:O},"og:image"),(0,t.jsx)("meta",{property:"og:image:alt",content:M.alt},"og:image:alt"),M.type&&(0,t.jsx)("meta",{property:"og:image:type",content:M.type},"og:image:type"),M.width&&(0,t.jsx)("meta",{property:"og:image:width",content:String(M.width)},"og:image:width"),M.height&&(0,t.jsx)("meta",{property:"og:image:height",content:String(M.height)},"og:image:height"),(0,t.jsx)("meta",{property:"og:description",content:$},"og:description"),(0,t.jsx)("meta",{property:"og:site_name",content:"MarkFlowy"},"og:site_name"),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,t.jsx)("meta",{name:"twitter:title",content:x},"twitter:title"),(0,t.jsx)("meta",{name:"twitter:description",content:$},"twitter:description"),(0,t.jsx)("meta",{name:"twitter:image",content:O},"twitter:image"),(0,t.jsx)("meta",{name:"twitter:image:alt",content:M.alt},"twitter:image:alt"),(0,t.jsx)("link",{rel:"canonical",href:j},"canonical"),C.map(({hrefLang:e,href:n})=>(0,t.jsx)("link",{rel:"alternate",hrefLang:e,href:n},`alternate-${e}`)),k&&(0,t.jsx)("link",{rel:"alternate",type:"text/markdown",href:k}),(0,t.jsx)("link",{rel:"describedby",href:`${i}/llms.txt`,type:"text/plain"}),S&&(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:c(u(_,$))}},"site-structured-data"),h]})}],66007)},20250,46439,88913,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),r=e.i(61813),i=e.i(3828),l=e.i(91788),a=e.i(28431),o=e.i(19174),s=e.i(29880),u=e.i(54410),c=e.i(20747);let d=o.U.button.withConfig({displayName:"NavButton",componentId:"sc-c4937232-0"})`
  ${s.f};
  background: transparent;
  cursor: pointer;
  flex: 0 0 auto;
  height: ${(0,u.f)(c.M)};
  padding: 0 ${(0,u.f)(10)};
  text-align: center;
  transition: all 200ms ease-in-out;
  vertical-align: middle;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  & + & {
    padding-left: 0;
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`;function f({label:e,icon:n,value:r,options:o,onValueChange:s,disabled:u,className:c,style:p}){let[m,h]=(0,l.useState)(!1),[g,y]=(0,l.useState)(!1),x=(0,l.useRef)(!1),b=(0,i.useRouter)(),v=o.find(e=>e.value===r)?.label;return(0,l.useEffect)(()=>{let e=()=>h(!1);return b.events.on("routeChangeStart",e),()=>b.events.off("routeChangeStart",e)},[b.events]),(0,t.jsxs)(a.R,{open:m,onOpenChange:h,modal:!1,children:[(0,t.jsx)(a.X,{asChild:!0,children:(0,t.jsx)(d,{type:"button",className:["mf-preference-trigger",c].filter(Boolean).join(" "),style:p,disabled:u,"aria-label":e,title:v?`${e}: ${v}`:e,"data-instant":g,onPointerDown:()=>y(!1),onKeyDown:e=>{y(!0),"ArrowUp"===e.key&&(e.preventDefault(),x.current=!0,h(!0))},children:(0,t.jsx)("span",{className:"mf-preference-trigger-icon","aria-hidden":"true",children:n})})}),(0,t.jsxs)(a.L,{ref:e=>{e&&x.current&&(x.current=!1,queueMicrotask(()=>{if(!e.isConnected)return;let t=e.querySelectorAll('[role="menuitemradio"]:not([data-disabled])');t.item(t.length-1)?.focus()}))},className:"mf-preference-menu","aria-label":e,"data-instant":g,side:"bottom",align:"end",sideOffset:8,collisionPadding:12,loop:!0,onKeyDown:()=>y(!0),children:[(0,t.jsx)(a.B,{className:"mf-preference-menu-heading",children:e}),(0,t.jsx)(a.O,{value:r,onValueChange:e=>{let t=o.find(t=>t.value===e);t&&s(t.value)},children:o.map(e=>(0,t.jsxs)(a.T,{value:e.value,className:"mf-preference-menu-item",children:[(0,t.jsx)("span",{className:"mf-preference-option-icon","aria-hidden":"true",children:e.icon}),(0,t.jsx)("span",{className:"mf-preference-option-label",children:e.label}),(0,t.jsx)("i",{className:"ri-check-line mf-preference-option-check","aria-hidden":"true","data-checked":e.value===r})]},e.value))})]})]})}e.s(["f",0,d],46439),e.s(["f",0,f],88913);let p={system:"ri-computer-line",light:"ri-sun-line",dark:"ri-moon-line"},m=["system","light","dark"];e.s(["f",0,function(){let{t:e}=(0,n.f)(),{theme:i,setTheme:l,mounted:a}=(0,r.f)();return(0,t.jsx)(f,{label:e("navigation.theme"),icon:(0,t.jsx)("i",{className:p[i]}),value:i,disabled:!a,onValueChange:l,options:m.map(n=>({value:n,label:e(`theme.${n}`),icon:(0,t.jsx)("i",{className:p[n]})}))})}],20250)},28325,e=>{var t=e.i(91398);e.s(["f",0,function({className:e,...n}){return(0,t.jsx)("article",{...n,className:["mf-document",e].filter(Boolean).join(" ")})}])},81558,e=>{var t=e.i(91398),n=e.i(19174);let r=n.z.a.withConfig({displayName:"HighLightLink__HighlightLink",componentId:"sc-6474d635-0"})`
  display: inline-block;
  position: relative;
  margin: 0 4px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    &::before {
      height: 0.25em;
      border-radius: 2px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 0.125em;
    border-radius: 6px;
    box-sizing: border-box;
    background-image: linear-gradient(to right, #47b6ff, #ec4899);
  }
`;var i=e.i(91788);function l(){return(l=Object.assign.bind()).apply(this,arguments)}let a=["children","options"],o=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{class:"className",for:"htmlFor"}),s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},u=["style","script","pre"],c=["src","href","data","formAction","srcDoc","action"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,p=/\n{2,}$/,m=/^(\s*>[\s\S]*?)(?=\n\n|$)/,h=/^ *> ?/gm,g=/^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,y=/^ {2,}\n/,x=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,b=/^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,v=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)((?:\\`|(?!\1)`|[^`])+)\1/,w=/^(?:\n *)*\n/,_=/\r\n?/g,j=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,$=/^\[\^([^\]]+)]/,C=/\f/g,M=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,O=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,L=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,N=/^([^\n]+)\n *(=|-){3,} *\n/,P=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,T=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,z=/^<!--[\s\S]*?(?:-->)/,R=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,E=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,U=/^<([^ >]+@[^ >]+)>/,F=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,H=/^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,D=/^[^\n]+(?:  \n|\n{2,})/,W=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,K=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q=/^\[([^\]]*)\] ?\[([^\]]*)\]/,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,X=/(^ *\||\| *$)/g,Z=/^ *:-+: *$/,Y=/^ *:-+ *$/,J=/^ *-+: *$/,Q="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",ee=RegExp(`^([*_])\\1${Q}\\1\\1(?!\\1)`),et=RegExp(`^([*_])${Q}\\1(?!\\1)`),en=RegExp(`^(==)${Q}\\1`),er=RegExp(`^(~~)${Q}\\1`),ei=/^\\([^0-9A-Za-z\s])/,el=/\\([^0-9A-Za-z\s])/g,ea=/^[\s\S](?:(?!  |[0-9]\.|http)[^=*_~\-\n<`\\\[!])*/,eo=/^\n+/,es=/^([ \t]*)/,eu=/(?:^|\n)( *)$/,ec="(?:\\d+\\.)",ed="(?:[*+-])";function ef(e){return"( *)("+(1===e?ec:ed)+") +"}let ep=ef(1),em=ef(2);function eh(e){return RegExp("^"+(1===e?ep:em))}let eg=eh(1),ey=eh(2);function ex(e){return RegExp("^"+(1===e?ep:em)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ec:ed)+" )[^\\n]*)*(\\n|$)","gm")}let eb=ex(1),ev=ex(2);function ek(e){let t=1===e?ec:ed;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let ew=ek(1),e_=ek(2);function ej(e,t){let n=1===t,r=n?ew:e_,i=n?eb:ev,l=n?eg:ey;return{t:e=>l.test(e),o:ez(function(e,t){let n=eu.exec(t.prevCapture);return n&&(t.list||!t.inline&&!t.simple)?r.exec(e=n[1]+e):null}),i:1,u(e,t,r){let a=n?+e[2]:void 0,o=e[0].replace(p,"\n").match(i),s=!1;return{items:o.map(function(e,n){let i,a=RegExp("^ {1,"+l.exec(e)[0].length+"}","gm"),u=e.replace(a,"").replace(l,""),c=n===o.length-1,d=-1!==u.indexOf("\n\n")||c&&s;s=d;let f=r.inline,p=r.list;r.list=!0,d?(r.inline=!1,i=eM(u)+"\n\n"):(r.inline=!0,i=eM(u));let m=t(i,r);return r.inline=f,r.list=p,m}),ordered:n,start:a}},l:(t,n,r)=>e(t.ordered?"ol":"ul",{key:r.key,start:"20"===t.type?t.start:void 0},t.items.map(function(t,i){return e("li",{key:i},n(t,r))}))}}let e$=RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),eC=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;function eM(e){let t=e.length;for(;t>0&&e[t-1]<=" ";)t--;return e.slice(0,t)}function eO(e,t){return e.startsWith(t)}function eS(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eL(e){return J.test(e)?"right":Z.test(e)?"center":Y.test(e)?"left":null}function eN(e,t,n,r){let i=n.inTable;n.inTable=!0;let l=[[]],a="";function o(){if(!a)return;let e=l[l.length-1];e.push.apply(e,t(a,n)),a=""}return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e,t,n)=>{"|"===e.trim()&&(o(),r)?0!==t&&t!==n.length-1&&l.push([]):a+=e}),o(),n.inTable=i,l}function eP(e,t,n){var r;n.inline=!0;let i=e[2]?e[2].replace(X,"").split("|").map(eL):[],l=e[3]?(r=e[3],r.trim().split("\n").map(function(e){return eN(e,t,n,!0)})):[],a=eN(e[1],t,n,!!l.length);return n.inline=!1,l.length?{align:i,cells:l,header:a,type:"25"}:{children:a,type:"21"}}function eT(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ez(e){return e.inline=1,e}function eR(e){return ez(function(t,n){return n.inline?e.exec(t):null})}function eE(e){return ez(function(t,n){return n.inline||n.simple?e.exec(t):null})}function eA(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function eI(e){return ez(function(t){return e.exec(t)})}let eU=/(javascript|vbscript|data(?!:image)):/i;function eF(e){try{let t=decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"");if(eU.test(t))return null}catch(e){return null}return e}function eB(e){return e?e.replace(el,"$1"):e}function eH(e,t,n){let r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;let l=e(t,n);return n.inline=r,n.simple=i,l}function eD(e,t,n){let r=n.inline||!1;n.inline=!1;let i=e(t,n);return n.inline=r,i}let eW=(e,t,n)=>({children:eH(t,e[2],n)});function eK(){return{}}function eq(){return null}function eV(e,t,n){let r=e,i=t.split(".");for(;i.length&&void 0!==(r=r[i[0]]);)i.shift();return r||n}let eG=e=>{let{children:t="",options:n}=e,r=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(i[n]=e[n]);return i}(e,a);return i.cloneElement(function(e="",t={}){var n,r,a;t.overrides=t.overrides||{},t.namedCodesToUnicode=t.namedCodesToUnicode?l({},s,t.namedCodesToUnicode):s;let p=t.slugify||eS,X=t.sanitizer||eF,Z=t.createElement||i.createElement,Y=[m,b,v,t.enforceAtxHeadings?L:S,N,H,ew,e_],J=[...Y,D,P,z,E];function Q(e,n,...r){var i;let a,o=eV(t.overrides,e+".props",{});return Z((a=eV(i=t.overrides,e))?"function"==typeof a||"object"==typeof a&&"render"in a?a:eV(i,e+".component",e):e,l({},n,o,{className:function(...e){return e.filter(Boolean).join(" ")}(null==n?void 0:n.className,o.className)||void 0}),...r)}function el(e){let n;e=e.replace(M,"");let r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===V.test(e));let i=em(ep(r?e:eM(e).replace(eo,"")+"\n\n",{inline:r}));for(;"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;let l=t.wrapper||(r?"span":"div");if(i.length>1||t.forceWrapper)n=i;else{if(1===i.length)return"string"==typeof(n=i[0])?Q("span",{key:"outer"},n):n;n=null}return Z(l,{key:"outer"},n)}function eu(e,t){if(!t||!t.trim())return null;let n=t.match(d);return n?n.reduce(function(t,n){let r=n.indexOf("=");if(-1!==r){var i,l,a;let s,u=(-1!==(i=n.slice(0,r)).indexOf("-")&&null===i.match(R)&&(i=i.replace(B,function(e,t){return t.toUpperCase()})),i).trim(),d=('"'===(s=(l=n.slice(r+1).trim())[0])||"'"===s)&&l.length>=2&&l[l.length-1]===s?l.slice(1,-1):l,f=o[u]||u;if("ref"===f)return t;let p=t[f]=(a=d,"style"===u?(function(e){let t=[],n="",r=!1,i=!1,l="";if(!e)return t;for(let a=0;a<e.length;a++){let o=e[a];if('"'!==o&&"'"!==o||r||(i?o===l&&(i=!1,l=""):(i=!0,l=o)),"("===o&&n.endsWith("url")?r=!0:")"===o&&r&&(r=!1),";"!==o||i||r)n+=o;else{let e=n.trim();if(e){let n=e.indexOf(":");if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();t.push([r,i])}}n=""}}let a=n.trim();if(a){let e=a.indexOf(":");if(e>0){let n=a.slice(0,e).trim(),r=a.slice(e+1).trim();t.push([n,r])}}return t})(a).reduce(function(t,[n,r]){return t[n.replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=X(r,e,n),t},{}):-1!==c.indexOf(u)?X(eB(a),e,u):(a.match(A)&&(a=eB(a.slice(1,a.length-1))),"true"===a||"false"!==a&&a));"string"==typeof p&&(P.test(p)||E.test(p))&&(t[f]=el(p.trim()))}else"style"!==n&&(t[o[n]||n]=!0);return t},{}):null}let ec=[],ed={},ef={0:{t:[">"],o:eA(m),i:1,u(e,t,n){let[,r,i]=e[0].replace(h,"").match(g);return{alert:r,children:t(i,n)}},l(e,t,n){let r={key:n.key};return e.alert&&(r.className="markdown-alert-"+p(e.alert.toLowerCase(),eS),e.children.unshift({attrs:{},children:[{type:"27",text:e.alert}],noInnerParse:!0,type:"11",tag:"header"})),Q("blockquote",r,t(e.children,n))}},1:{o:eI(y),i:1,u:eK,l:(e,t,n)=>Q("br",{key:n.key})},2:{t:e=>{let t=e[0];return"-"===t||"*"===t||"_"===t},o:eA(x),i:1,u:eK,l:(e,t,n)=>Q("hr",{key:n.key})},3:{t:["    "],o:eA(v),i:0,u:e=>({lang:void 0,text:eB(eM(e[0].replace(/^ {4}/gm,"")))}),l:(e,t,n)=>Q("pre",{key:n.key},Q("code",l({},e.attrs,{className:e.lang?"lang-"+e.lang:""}),e.text))},4:{t:["```","~~~"],o:eA(b),i:0,u:e=>({attrs:eu("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{t:["`"],o:eE(k),i:3,u:e=>({text:eB(e[2])}),l:(e,t,n)=>Q("code",{key:n.key},e.text)},6:{t:["[^"],o:eA(j),i:0,u:e=>(ec.push({footnote:e[2],identifier:e[1]}),{}),l:eq},7:{t:["[^"],o:eR($),i:1,u:e=>({target:"#"+p(e[1],eS),text:e[1]}),l:(e,t,n)=>Q("a",{key:n.key,href:X(e.target,"a","href")},Q("sup",{key:n.key},e.text))},8:{t:["[ ]","[x]"],o:eR(O),i:1,u:e=>({completed:"x"===e[1].toLowerCase()}),l:(e,t,n)=>Q("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},9:{t:["#"],o:eA(t.enforceAtxHeadings?L:S),i:1,u:(e,t,n)=>({children:eH(t,e[2],n),id:p(e[2],eS),level:e[1].length}),l:(e,t,n)=>Q("h"+e.level,{id:e.id,key:n.key},t(e.children,n))},10:{o:eA(N),i:0,u:(e,t,n)=>({children:eH(t,e[1],n),level:"="===e[2]?1:2,type:"9"})},11:{t:["<"],o:eI(P),i:1,u(e,t,n){let[,r]=e[3].match(es),i=RegExp("^"+r,"gm"),l=e[3].replace(i,""),a=J.some(e=>e.test(l))?eD:eH,o=e[1].toLowerCase(),s=-1!==u.indexOf(o),c=(s?o:e[1]).trim(),d={attrs:eu(c,e[2]),noInnerParse:s,tag:c};if(n.inAnchor=n.inAnchor||"a"===o,s)d.text=e[3];else{let e=n.inHTML;n.inHTML=!0,d.children=a(t,l,n),n.inHTML=e}return n.inAnchor=!1,d},l:(e,t,n)=>Q(e.tag,l({key:n.key},e.attrs),e.text||(e.children?t(e.children,n):""))},13:{t:["<"],o:eI(E),i:1,u(e){let t=e[1].trim();return{attrs:eu(t,e[2]||""),tag:t}},l:(e,t,n)=>Q(e.tag,l({},e.attrs,{key:n.key}))},12:{t:["<!--"],o:eI(z),i:1,u:()=>({}),l:eq},14:{t:["!["],o:eE(eC),i:1,u:e=>({alt:eB(e[1]),target:eB(e[2]),title:eB(e[3])}),l:(e,t,n)=>Q("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:X(e.target,"img","src")})},15:{t:["["],o:eR(e$),i:3,u:(e,t,n)=>{var r;let i,l,a;return{children:(r=e[1],i=n.inline||!1,l=n.simple||!1,n.inline=!1,n.simple=!0,a=t(r,n),n.inline=i,n.simple=l,a),target:eB(e[2]),title:eB(e[3])}},l:(e,t,n)=>Q("a",{key:n.key,href:X(e.target,"a","href"),title:e.title},t(e.children,n))},16:{t:["<"],o:eR(F),i:0,u:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{t:(e,n)=>!n.inAnchor&&!t.disableAutoLink&&(eO(e,"http://")||eO(e,"https://")),o:eR(I),i:0,u:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{t:["<"],o:eR(U),i:0,u(e){let t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:"27"}],target:n,type:"15"}}},20:ej(Q,1),33:ej(Q,2),19:{o:eA(w),i:3,u:eK,l:()=>"\n"},21:{o:ez(function(e,t){if(t.inline||t.simple||t.inHTML&&-1===e.indexOf("\n\n")&&-1===t.prevCapture.indexOf("\n\n"))return null;let n="";e.split("\n").every(e=>(e+="\n",!Y.some(t=>t.test(e))&&(n+=e,!!e.trim())));let r=eM(n);return""===r?null:[n,,r]}),i:3,u:eW,l:(e,t,n)=>Q("p",{key:n.key},t(e.children,n))},22:{t:["["],o:eR(W),i:0,u:e=>(ed[e[1]]={target:e[2],title:e[4]},{}),l:eq},23:{t:["!["],o:eE(K),i:0,u:e=>({alt:e[1]?eB(e[1]):void 0,ref:e[2]}),l:(e,t,n)=>ed[e.ref]?Q("img",{key:n.key,alt:e.alt,src:X(ed[e.ref].target,"img","src"),title:ed[e.ref].title}):null},24:{t:["["],o:eR(q),i:0,u:(e,t,n)=>({children:t(e[1],n),fallbackChildren:e[0],ref:e[2]}),l:(e,t,n)=>ed[e.ref]?Q("a",{key:n.key,href:X(ed[e.ref].target,"a","href"),title:ed[e.ref].title},t(e.children,n)):Q("span",{key:n.key},e.fallbackChildren)},25:{t:["|"],o:eA(H),i:1,u:eP,l:(e,t,n)=>Q("table",{key:n.key},Q("thead",null,Q("tr",null,e.header.map(function(r,i){return Q("th",{key:i,style:eT(e,i)},t(r,n))}))),Q("tbody",null,e.cells.map(function(r,i){return Q("tr",{key:i},r.map(function(r,i){return Q("td",{key:i,style:eT(e,i)},t(r,n))}))})))},27:{o:eI(ea),i:4,u(e){let n=e[0];return{text:-1===n.indexOf("&")?n:n.replace(T,(e,n)=>t.namedCodesToUnicode[n]||e)}},l:e=>e.text},28:{t:["**","__"],o:eE(ee),i:2,u:(e,t,n)=>({children:t(e[2],n)}),l:(e,t,n)=>Q("strong",{key:n.key},t(e.children,n))},29:{t:e=>{let t=e[0];return("*"===t||"_"===t)&&e[1]!==t},o:eE(et),i:3,u:(e,t,n)=>({children:t(e[2],n)}),l:(e,t,n)=>Q("em",{key:n.key},t(e.children,n))},30:{t:["\\"],o:eE(ei),i:1,u:e=>({text:e[1],type:"27"})},31:{t:["=="],o:eE(en),i:3,u:eW,l:(e,t,n)=>Q("mark",{key:n.key},t(e.children,n))},32:{t:["~~"],o:eE(er),i:3,u:eW,l:(e,t,n)=>Q("del",{key:n.key},t(e.children,n))}};!0===t.disableParsingRawHTML&&(delete ef[11],delete ef[13]);let ep=((r=Object.keys(ef)).sort(function(e,t){return ef[e].i-ef[t].i||(e<t?-1:1)}),function(e,t){return function e(t,n){var i=[];if(n.prevCapture=n.prevCapture||"",t.trim())for(;t;)for(var l=0;l<r.length;){var a=r[l],o=ef[a];if(!o.t||function(e,t,n){if(Array.isArray(n)){for(let t=0;t<n.length;t++)if(eO(e,n[t]))return!0;return!1}return n(e,t)}(t,n,o.t)){var s=o.o(t,n);if(s&&s[0]){t=t.substring(s[0].length);var u=o.u(s,e,n);n.prevCapture+=s[0],u.type||(u.type=a),i.push(u);break}l++}else l++}return n.prevCapture="",i}(e.replace(_,"\n").replace(C,"").replace(G,"    "),t)}),em=(a=t.renderRule,n=function(e,t,n){let r=ef[e.type].l;return a?a(()=>r(e,t,n),e,t,n):r(e,t,n)},function e(t,r={}){if(Array.isArray(t)){let n=r.key,i=[],l=!1;for(let n=0;n<t.length;n++){r.key=n;let a=e(t[n],r),o="string"==typeof a;o&&l?i[i.length-1]+=a:null!==a&&i.push(a),l=o}return r.key=n,i}return n(t,e,r)}),eh=el(e);return ec.length?Q("div",null,eh,Q("footer",{key:"footer"},ec.map(function(e){return Q("div",{id:p(e.identifier,eS),key:e.identifier},e.identifier,em(ep(e.footnote,{inline:!0})))}))):eh}(t,n),r)};e.i(64157);var eX=e.i(71179),eZ=e.i(84532),eY=e.i(19520),eJ=e.i(28325);let eQ=n.U.section.withConfig({displayName:"releases__Release",componentId:"sc-c134f3b5-0"})`
  position: relative;
  margin: 3rem 0;
  padding: 0 0 0 1.75rem;
  border-left: 1px solid var(--line);
  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: -4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--seal);
  }
`,e0=n.U.div.withConfig({displayName:"releases__ReleaseMeta",componentId:"sc-c134f3b5-1"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: var(--ink-mute);
  font-size: 12px;
  span {
    color: var(--seal);
    background: var(--paper-warm);
    border: 1px solid var(--line-soft);
    border-radius: 4px;
    padding: 2px 8px;
  }
`,e1=n.U.h2.withConfig({displayName:"releases__ReleaseTitle",componentId:"sc-c134f3b5-2"})`
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 27px;
  font-weight: 550;
  scroll-margin-top: 96px;
`;e.s(["__N_SSG",0,!0,"default",0,function({releases:e,sidebarPages:n}){let{t:l}=(0,eX.f)();return(0,t.jsxs)(eZ.f,{useDocsSidebarMenu:!1,pages:n,title:l("releases.title"),description:l("releases.meta_description"),children:[(0,t.jsx)("p",{className:"mf-eyebrow",children:l("site.releases.eyebrow")}),(0,t.jsxs)("p",{children:[l("releases.description_before_link")," ",(0,t.jsx)(r,{href:"https://github.com/drl990114/MarkFlowy/releases",target:"_blank",children:l("releases.github_link")})," ",l("releases.description_after_link")]}),e.length>0?e.map((e,n)=>(0,t.jsxs)(eQ,{id:e.tag_name,children:[(0,t.jsxs)(e0,{children:[(0,t.jsx)("time",{dateTime:e.published_at||e.created_at,children:(e.published_at||e.created_at).slice(0,10)}),0===n&&(0,t.jsx)("span",{children:l("site.releases.latest")})]}),(0,t.jsxs)(e1,{children:[e.name!==e.tag_name&&(0,t.jsx)("span",{id:e.name||void 0}),(0,t.jsx)("a",{href:`#${e.tag_name}`,children:e.name||e.tag_name})]}),(0,t.jsxs)(eY.f,{href:e.html_url,target:"_blank",children:[l("releases.see_details")," ↗"]}),e.body&&(0,t.jsx)(eJ.f,{className:"mf-document-release",children:(0,t.jsx)(eG,{options:{wrapper:i.Fragment},children:e.body})})]},e.id)):(0,t.jsx)("p",{children:l("site.releases.empty")})]})}],81558)},29880,e=>{var t=e.i(19174);let n=t.m`
  background: none;
  outline: none;
  border: none;
`;e.s(["f",0,n])},27573,e=>{var t=e.i(19174);e.s(["C",0,e=>t.m`
  @media (max-width: ${62.5}em) {
    ${e};
  }
`,"u",0,e=>t.m`
  @media (max-width: ${40.625}em) {
    ${e};
  }
`])},54410,e=>{var t=e.i(50166);e.s(["f",0,e=>(0,t.default)(e,"18px")])},20747,e=>{e.s(["R",0,120,"M",0,76,"Y",0,260])},54471,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return i}});let r=e.r(70090);function i(t,n,i,l){{let a=e.r(2531).normalizeLocalePath,o=e.r(62205).detectDomainLocale,s=n||a(t,i).detectedLocale,u=o(l,void 0,s);if(u){let e=`http${u.http?"":"s"}://`,n=s===u.defaultLocale?"":`/${s}`;return`${e}${u.domain}${(0,r.normalizePathTrailingSlash)(`${n}${t}`)}`}return!1}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},39149,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return j},useLinkStatus:function(){return _}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let l=e.r(71650),a=e.r(91398),o=l._(e.r(91788)),s=e.r(60472),u=e.r(71112),c=e.r(28169),d=e.r(89129),f=e.r(14862),p=e.r(25479),m=e.r(71914),h=e.r(54471),g=e.r(44113),y=e.r(63230),x=new Set;function b(e,t,n,r){if(!("u"<typeof window)&&(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(x.has(i))return;x.add(i)}e.prefetch(t,n,r).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let k=o.default.forwardRef(function(e,t){let n,r,{href:i,as:l,children:c,prefetch:x=null,passHref:k,replace:w,shallow:_,scroll:j,locale:$,onClick:C,onNavigate:M,onMouseEnter:O,onTouchStart:S,legacyBehavior:L=!1,transitionTypes:N,...P}=e;n=c,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let T=o.default.useContext(p.RouterContext),z=!1!==x,{href:R,as:E}=o.default.useMemo(()=>{if(!T){let e=v(i);return{href:e,as:l?v(l):e}}let[e,t]=(0,s.resolveHref)(T,i,!0);return{href:e,as:l?(0,s.resolveHref)(T,l):t||e}},[T,i,l]),A=o.default.useRef(R),I=o.default.useRef(E);L&&(r=o.default.Children.only(n));let U=L?r&&"object"==typeof r&&r.ref:t,[F,B,H]=(0,m.useIntersection)({rootMargin:"200px"}),D=o.default.useCallback(e=>{(I.current!==E||A.current!==R)&&(H(),I.current=E,A.current=R),F(e)},[E,R,H,F]),W=(0,y.useMergedRef)(D,U);o.default.useEffect(()=>{!T||B&&z&&b(T,R,E,{bypassPrefetchedCheck:!1,locale:$})},[E,R,B,$,z,T?.locale,T]);let K={ref:W,onClick(e){L||"function"!=typeof C||C(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!T||e.defaultPrevented||function(e,t,n,r,i,l,a,o,s){let c,{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,u.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:o,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})})()}}(e,T,R,E,w,_,j,$,M)},onMouseEnter(e){L||"function"!=typeof O||O(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&b(T,R,E,{locale:$,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&b(T,R,E,{locale:$,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(E))K.href=E;else if(!L||k||"a"===r.type&&!("href"in r.props)){let e=void 0!==$?$:T?.locale;K.href=T?.isLocaleDomain&&(0,h.getDomainLocale)(E,e,T?.locales,T?.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(E,e,T?.defaultLocale))}return L?o.default.cloneElement(r,K):(0,a.jsx)("a",{...P,...K,children:n})}),w=(0,o.createContext)({pending:!1}),_=()=>(0,o.useContext)(w),j=k;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},2531,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});let r=(t,n)=>e.r(92090).normalizeLocalePath(t,n);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},71914,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),i=e.r(99604),l="function"==typeof IntersectionObserver,a=new Map,o=[];function s({rootRef:e,rootMargin:t,disabled:n}){let u=n||!l,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(u||c)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:i,elements:l}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},o.push(n),a.set(n,t),t}(n);return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),a.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}(n,e=>e&&d(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,t,e,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(91788);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=l(e,r)),t&&(i.current=l(t,r))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},50166,(e,t,n)=>{var r;n.__esModule=!0,n.default=void 0,n.default=(0,((r=e.r(87709))&&r.__esModule?r:{default:r}).default)("rem"),t.exports=n.default},12343,(e,t,n)=>{n.__esModule=!0,n.default=function(e){return"string"!=typeof e?e:e.match(r)?parseFloat(e):e};var r=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;t.exports=n.default},25920,(e,t,n)=>{n.__esModule=!0,n.default=function(e,t){return e.substr(-t.length)===t},t.exports=n.default},72827,(e,t,n)=>{function r(e){var t="function"==typeof Map?new Map:void 0;return(r=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(i())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var a=new(e.bind.apply(e,r));return n&&l(a,n.prototype),a}(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,e)})(e)}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(i=function(){return!!e})()}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.i(50461),n.__esModule=!0,n.default=void 0,n.default=function(e){function t(t){var n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e),t}(r(Error)),t.exports=n.default},87709,(e,t,n)=>{n.__esModule=!0,n.default=void 0;var r=a(e.r(25920)),i=a(e.r(12343)),l=a(e.r(72827));function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(t,n){void 0===n&&(n="16px");var a=t,o=n;if("string"==typeof t){if(!(0,r.default)(t,"px"))throw new l.default(69,e,t);a=(0,i.default)(t)}if("string"==typeof n){if(!(0,r.default)(n,"px"))throw new l.default(70,e,n);o=(0,i.default)(n)}if("string"==typeof a)throw new l.default(71,t,e);if("string"==typeof o)throw new l.default(72,n,e);return""+a/o+e}},t.exports=n.default}],46103,(e,t,n)=>{let r="/releases";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(81558)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},41158,(e,t,n)=>{t.exports=e.r(39149)},3828,(e,t,n)=>{t.exports=e.r(26990)}]);