(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[84532,e=>{var t=e.i(91398),n=e.i(3828),r=e.i(91788),o=e.i(63869),a=e.i(19174),i=e.i(27573),l=e.i(54410),s=e.i(20747);let u=a.U.div.withConfig({displayName:"Layout__Container",componentId:"sc-2aae1ad5-0"})`
  padding-left: ${s.Y/16}rem;
  background-color: var(--paper);

  ${(0,i.C)(a.m`
    padding-left: 0;
  `)};
`,c=a.U.div.withConfig({displayName:"Layout__Content",componentId:"sc-2aae1ad5-1"})`
  box-sizing: border-box;
  font-family: var(--body);
  margin: 0 auto;
  min-width: 0;
  width: 100%;
  min-height: ${e=>e.$footer?"0":`calc(100vh - ${(0,l.f)(s.R)})`};
  max-width: ${e=>e.$hero?"100ch":"54rem"};
  padding: ${e=>e.$footer?"0":"8rem 3rem 5rem"};

  @layer base {
    p,
    li {
      max-width: 100ch;
    }
  }

  ${(0,i.C)(a.m`
    padding: 7rem 1.5rem 3rem;
    transform: none;
  `)};

  ${e=>e.$hasTableOfContents&&a.m`
      width: calc(100% - 15rem);
      margin-left: max(0px, calc((100% - 69rem) / 2));
      margin-right: 15rem;

      @media (max-width: 75.999rem) {
        width: 100%;
        margin-inline: auto;
      }
    `};

  ${e=>e.$hero&&!e.$footer&&a.m`
      padding: ${(0,l.f)(84)} ${(0,l.f)(32)} 0;
    `};
`,d=a.U.h1.withConfig({displayName:"Layout__Title",componentId:"sc-2aae1ad5-2"})`
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
`;a.U.h2.withConfig({displayName:"Layout__Header",componentId:"sc-2aae1ad5-3"})`
  font-size: ${(0,l.f)(32)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
  margin: 2em 0 1em;

  + h3 {
    margin-top: -0.5em;
  }
`,a.U.h3.withConfig({displayName:"Layout__SubHeader",componentId:"sc-2aae1ad5-4"})`
  margin: 2em 0 1em;
  font-size: ${(0,l.f)(24)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);

  + h4 {
    margin-top: -0.5em;
  }
`,a.U.h4.withConfig({displayName:"Layout__TertiaryHeader",componentId:"sc-2aae1ad5-5"})`
  margin: 2em 0 1em;
  font-size: ${(0,l.f)(18)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
`,e.i(64157);var f=e.i(71179),p=e.i(21273);a.U.span.withConfig({displayName:"Navbar__Brand",componentId:"sc-9212fb1f-0"})`
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 700;
`;var m=e.i(79695),h=e.i(32371);let g=e=>{let{isSideFolded:n,isMobileNavFolded:r,onSideToggle:o,onMobileNavToggle:a,showSideNav:i,useDocsSidebarMenu:l,pages:s}=e,{t:u}=(0,f.f)(),c=!1===n;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p.f,{showSideNav:!1!==i,isSideFolded:n,isMobileNavFolded:r,onSideToggle:o,onMobileNavToggle:a}),!1!==i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{id:"docs-sidebar","aria-label":u(!1!==l?"common.docs":"navigation.releases"),$isFolded:n,children:!1!==l?(0,t.jsx)(h.l,{}):(0,t.jsx)(h.y,{pages:s})}),(0,t.jsx)(y,{type:"button","aria-label":u("navigation.closeMenu",{defaultValue:"Close menu"}),"aria-hidden":!c,tabIndex:c?0:-1,$isVisible:c,onClick:o})]})]})},y=a.U.button.withConfig({displayName:"Nav__SidebarBackdrop",componentId:"sc-208244c2-0"})`
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
`;var b=e.i(66007);e.s(["f",0,function({children:e,title:a="",description:i="",hasTableOfContents:l=!1,useDocsSidebarMenu:s=!0,pages:f,seo:p}){let m=(0,n.useRouter)(),[h,y]=r.default.useState(!0),[v,x]=r.default.useState(!0),w=r.default.useCallback(()=>{x(!0),y(e=>!e)},[]),_=r.default.useCallback(()=>{x(e=>!e),y(!0)},[]);return r.default.useEffect(()=>{x(!0),y(!0)},[m.asPath]),r.default.useEffect(()=>{if(h)return;let e=e=>{"Escape"===e.key&&(y(!0),document.querySelector('[aria-controls="docs-sidebar"]')?.focus())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h]),(0,t.jsxs)(u,{children:[(0,t.jsx)(b.f,{title:`MarkFlowy${a?`: ${a}`:""}`,description:i,...p}),(0,t.jsx)(g,{useDocsSidebarMenu:s,isSideFolded:h,isMobileNavFolded:v,pages:f,onSideToggle:w,onMobileNavToggle:_}),(0,t.jsxs)(c,{as:"main",id:"main-content",$hasTableOfContents:l,$moveRight:!h,"data-e2e-id":"content",children:[a&&(0,t.jsx)(d,{children:a}),e]}),(0,t.jsx)(o.f,{})]})}],84532)},66007,84119,e=>{var t=e.i(91398),n=e.i(58678),r=e.i(3828);let o="https://www.markflowy.cc",a=["en","zh","ru"],i={en:"en_US",zh:"zh_CN",ru:"ru_RU"},l={en:"Find your writing flow with MarkFlowy, a local-first Markdown editor for macOS, Windows, and Linux. Visual and source editing, with optional AI assistance.",zh:"让想法流动，专注每一次写作。MarkFlowy 是适用于 macOS、Windows 和 Linux 的本地优先 Markdown 编辑器，支持所见即所得与源码编辑，可选接入云端 AI 或本地 Ollama 模型。",ru:"MarkFlowy — редактор Markdown для macOS, Windows и Linux с хранением файлов на вашем устройстве. Визуальное редактирование и исходный текст, ИИ-помощник по желанию."};function s(e){return{url:`${o}/social/markflowy-${"zh"===e?"zh":"en"}.png`,width:1200,height:630,type:"image/png",alt:"zh"===e?"MarkFlowy：让想法流动，专注每一次写作。白色背景上的蓝紫色丝带与本地优先 Markdown 编辑器标语。":"MarkFlowy: Your ideas, in full flow. Blue and violet ribbons on white, with the local-first Markdown editor tagline."}}function u(e,t){let n=p("/",e);return{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${o}/#website`,name:"MarkFlowy",url:`${o}/`,inLanguage:a.map(e=>"zh"===e?"zh-CN":e)},{"@type":"SoftwareApplication","@id":`${o}/#application`,name:"MarkFlowy",url:n,description:t,applicationCategory:"ProductivityApplication",operatingSystem:"macOS, Windows, Linux",image:s(e).url,downloadUrl:"https://github.com/drl990114/MarkFlowy/releases",sameAs:["https://github.com/drl990114/MarkFlowy"]}]}}function c(e){return JSON.stringify(e).replace(/</g,"\\u003c")}function d(e){return a.some(t=>t===e)}function f(e){return e.split(/[?#]/,1)[0].replace(/^\/(en|zh|ru)(?=\/|$)/,"").replace(/\/+$/,"")||"/"}function p(e,t="en"){let n=f(e),r="en"===t?"":`/${t}`;return`${o}${r}${"/"===n&&r?"":n}`}function m(e,t){let n=t.map(t=>({hrefLang:"zh"===t?"zh-CN":t,href:p(e,t)}));return t.includes("en")&&n.push({hrefLang:"x-default",href:p(e,"en")}),n}e.s(["q",0,i,"W",0,l,"Q",0,a,"l",0,o,"G",0,function(e,t){return"ru"===t&&/^\/docs\/[^?#]/.test(e)?"en":t},"b",0,u,"A",0,m,"I",0,p,"L",0,s,"v",0,d,"C",0,f,"B",0,c],84119),e.s(["f",0,function({canonical:e,children:h,description:g,image:y,title:b="MarkFlowy",url:v,availableLocales:x=a,markdownUrl:w}){let _=(0,r.useRouter)(),j=_.locale&&d(_.locale)?_.locale:"en",C=e||v||p(_.asPath,j),k=g?.trim()||l[j],$=m(_.asPath,x),M="string"==typeof y?{url:y,alt:b}:y||s(j),O=new URL(M.url,o).href,S="/"===f(_.pathname);return(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:b}),(0,t.jsx)("meta",{name:"description",content:k},"description"),(0,t.jsx)("meta",{property:"og:locale",content:i[j]},"og:locale"),x.filter(e=>e!==j).map(e=>(0,t.jsx)("meta",{property:"og:locale:alternate",content:i[e]},`og:locale:alternate:${e}`)),(0,t.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,t.jsx)("meta",{property:"og:title",content:b},"og:title"),(0,t.jsx)("meta",{property:"og:url",content:C},"og:url"),(0,t.jsx)("meta",{property:"og:image",content:O},"og:image"),(0,t.jsx)("meta",{property:"og:image:alt",content:M.alt},"og:image:alt"),M.type&&(0,t.jsx)("meta",{property:"og:image:type",content:M.type},"og:image:type"),M.width&&(0,t.jsx)("meta",{property:"og:image:width",content:String(M.width)},"og:image:width"),M.height&&(0,t.jsx)("meta",{property:"og:image:height",content:String(M.height)},"og:image:height"),(0,t.jsx)("meta",{property:"og:description",content:k},"og:description"),(0,t.jsx)("meta",{property:"og:site_name",content:"MarkFlowy"},"og:site_name"),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,t.jsx)("meta",{name:"twitter:title",content:b},"twitter:title"),(0,t.jsx)("meta",{name:"twitter:description",content:k},"twitter:description"),(0,t.jsx)("meta",{name:"twitter:image",content:O},"twitter:image"),(0,t.jsx)("meta",{name:"twitter:image:alt",content:M.alt},"twitter:image:alt"),(0,t.jsx)("link",{rel:"canonical",href:C},"canonical"),$.map(({hrefLang:e,href:n})=>(0,t.jsx)("link",{rel:"alternate",hrefLang:e,href:n},`alternate-${e}`)),w&&(0,t.jsx)("link",{rel:"alternate",type:"text/markdown",href:w}),(0,t.jsx)("link",{rel:"describedby",href:`${o}/llms.txt`,type:"text/plain"}),S&&(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:c(u(j,k))}},"site-structured-data"),h]})}],66007)},20250,46439,88913,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),r=e.i(61813),o=e.i(3828),a=e.i(91788),i=e.i(28431),l=e.i(19174),s=e.i(29880),u=e.i(54410),c=e.i(20747);let d=l.U.button.withConfig({displayName:"NavButton",componentId:"sc-c4937232-0"})`
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
`;function f({label:e,icon:n,value:r,options:l,onValueChange:s,disabled:u,className:c,style:p}){let[m,h]=(0,a.useState)(!1),[g,y]=(0,a.useState)(!1),b=(0,a.useRef)(!1),v=(0,o.useRouter)(),x=l.find(e=>e.value===r)?.label;return(0,a.useEffect)(()=>{let e=()=>h(!1);return v.events.on("routeChangeStart",e),()=>v.events.off("routeChangeStart",e)},[v.events]),(0,t.jsxs)(i.R,{open:m,onOpenChange:h,modal:!1,children:[(0,t.jsx)(i.X,{asChild:!0,children:(0,t.jsx)(d,{type:"button",className:["mf-preference-trigger",c].filter(Boolean).join(" "),style:p,disabled:u,"aria-label":e,title:x?`${e}: ${x}`:e,"data-instant":g,onPointerDown:()=>y(!1),onKeyDown:e=>{y(!0),"ArrowUp"===e.key&&(e.preventDefault(),b.current=!0,h(!0))},children:(0,t.jsx)("span",{className:"mf-preference-trigger-icon","aria-hidden":"true",children:n})})}),(0,t.jsxs)(i.L,{ref:e=>{e&&b.current&&(b.current=!1,queueMicrotask(()=>{if(!e.isConnected)return;let t=e.querySelectorAll('[role="menuitemradio"]:not([data-disabled])');t.item(t.length-1)?.focus()}))},className:"mf-preference-menu","aria-label":e,"data-instant":g,side:"bottom",align:"end",sideOffset:8,collisionPadding:12,loop:!0,onKeyDown:()=>y(!0),children:[(0,t.jsx)(i.B,{className:"mf-preference-menu-heading",children:e}),(0,t.jsx)(i.O,{value:r,onValueChange:e=>{let t=l.find(t=>t.value===e);t&&s(t.value)},children:l.map(e=>(0,t.jsxs)(i.T,{value:e.value,className:"mf-preference-menu-item",children:[(0,t.jsx)("span",{className:"mf-preference-option-icon","aria-hidden":"true",children:e.icon}),(0,t.jsx)("span",{className:"mf-preference-option-label",children:e.label}),(0,t.jsx)("i",{className:"ri-check-line mf-preference-option-check","aria-hidden":"true","data-checked":e.value===r})]},e.value))})]})]})}e.s(["f",0,d],46439),e.s(["f",0,f],88913);let p={system:"ri-computer-line",light:"ri-sun-line",dark:"ri-moon-line"},m=["system","light","dark"];e.s(["f",0,function(){let{t:e}=(0,n.f)(),{theme:o,setTheme:a,mounted:i}=(0,r.f)();return(0,t.jsx)(f,{label:e("navigation.theme"),icon:(0,t.jsx)("i",{className:p[o]}),value:o,disabled:!i,onValueChange:a,options:m.map(n=>({value:n,label:e(`theme.${n}`),icon:(0,t.jsx)("i",{className:p[n]})}))})}],20250)},28325,e=>{var t=e.i(91398);e.s(["f",0,function({className:e,...n}){return(0,t.jsx)("article",{...n,className:["mf-document",e].filter(Boolean).join(" ")})}])},1400,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),r=e.i(19174),o=e.i(20747);let a=({items:e})=>{let{t:r}=(0,n.f)();if(0===e.length)return null;let o=r("docs.tableOfContents");return(0,t.jsxs)(i,{"aria-label":o,children:[(0,t.jsx)(l,{children:o}),(0,t.jsx)(s,{children:e.map(e=>(0,t.jsx)(u,{children:(0,t.jsx)(c,{href:`#${e.id}`,$isNested:3===e.level,children:e.title})},e.id))})]})},i=r.U.aside.withConfig({displayName:"DocsTableOfContents__TableOfContents",componentId:"sc-269e623e-0"})`
  position: fixed;
  top: 8rem;
  right: max(1.5rem, calc((100vw - ${o.Y/16}rem - 69rem) / 2 + 1.5rem));
  width: 13rem;
  max-height: calc(100vh - 9rem);
  padding: 0.25rem 0 1.5rem;
  box-sizing: border-box;
  overflow-y: auto;
  color: var(--ink-mute);
  font-family: var(--body);
  scrollbar-color: var(--line) transparent;
  scrollbar-width: thin;

  @media (max-width: 75.999rem) {
    display: none;
  }
`,l=r.U.p.withConfig({displayName:"DocsTableOfContents__TableOfContentsTitle",componentId:"sc-269e623e-1"})`
  margin: 0 0 0.75rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.25rem;
`,s=r.U.ul.withConfig({displayName:"DocsTableOfContents__TableOfContentsList",componentId:"sc-269e623e-2"})`
  display: grid;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--line-soft);
  list-style: none;
`,u=r.U.li.withConfig({displayName:"DocsTableOfContents__TableOfContentsListItem",componentId:"sc-269e623e-3"})`
  min-width: 0;
`,c=r.U.a.withConfig({displayName:"DocsTableOfContents__TableOfContentsLink",componentId:"sc-269e623e-4"})`
  display: block;
  min-height: 2rem;
  margin-left: -1px;
  padding: 0.375rem 0.5rem 0.375rem ${({$isNested:e})=>e?"1.5rem":"0.875rem"};
  border-left: 2px solid transparent;
  box-sizing: border-box;
  overflow-wrap: anywhere;
  color: var(--ink-mute);
  font-size: 0.8125rem;
  line-height: 1.25rem;
  text-decoration: none;
  touch-action: manipulation;
  transition:
    border-color 150ms ease,
    color 150ms ease;

  &:focus-visible {
    outline: 2px solid var(--seal);
    outline-offset: -2px;
    color: var(--seal);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-left-color: var(--seal);
      color: var(--seal);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0ms;
  }
`;var d=e.i(28325);let f=({html:e,tableOfContents:n=[]})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{dangerouslySetInnerHTML:{__html:e}}),(0,t.jsx)(a,{items:n})]});var p=e.i(84532);e.s(["__N_SSG",0,!0,"default",0,({html:e,tableOfContents:n,seo:r,description:o})=>(0,t.jsx)(p.f,{hasTableOfContents:!0,seo:r,description:o,children:(0,t.jsx)(f,{html:e,tableOfContents:n})})],1400)},29880,e=>{var t=e.i(19174);let n=t.m`
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
`])},54410,e=>{var t=e.i(50166);e.s(["f",0,e=>(0,t.default)(e,"18px")])},20747,e=>{e.s(["R",0,120,"M",0,76,"Y",0,260])},54471,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return o}});let r=e.r(70090);function o(t,n,o,a){{let i=e.r(2531).normalizeLocalePath,l=e.r(62205).detectDomainLocale,s=n||i(t,o).detectedLocale,u=l(a,void 0,s);if(u){let e=`http${u.http?"":"s"}://`,n=s===u.defaultLocale?"":`/${s}`;return`${e}${u.domain}${(0,r.normalizePathTrailingSlash)(`${n}${t}`)}`}return!1}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},39149,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return C},useLinkStatus:function(){return j}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(71650),i=e.r(91398),l=a._(e.r(91788)),s=e.r(60472),u=e.r(71112),c=e.r(28169),d=e.r(89129),f=e.r(14862),p=e.r(25479),m=e.r(71914),h=e.r(54471),g=e.r(44113),y=e.r(63230),b=new Set;function v(e,t,n,r){if(!("u"<typeof window)&&(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=l.default.forwardRef(function(e,t){let n,r,{href:o,as:a,children:c,prefetch:b=null,passHref:w,replace:_,shallow:j,scroll:C,locale:k,onClick:$,onNavigate:M,onMouseEnter:O,onTouchStart:S,legacyBehavior:N=!1,transitionTypes:P,...L}=e;n=c,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let T=l.default.useContext(p.RouterContext),z=!1!==b,{href:I,as:R}=l.default.useMemo(()=>{if(!T){let e=x(o);return{href:e,as:a?x(a):e}}let[e,t]=(0,s.resolveHref)(T,o,!0);return{href:e,as:a?(0,s.resolveHref)(T,a):t||e}},[T,o,a]),U=l.default.useRef(I),E=l.default.useRef(R);N&&(r=l.default.Children.only(n));let F=N?r&&"object"==typeof r&&r.ref:t,[D,A,B]=(0,m.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{(E.current!==R||U.current!==I)&&(B(),E.current=R,U.current=I),D(e)},[R,I,B,D]),K=(0,y.useMergedRef)(H,F);l.default.useEffect(()=>{!T||A&&z&&v(T,I,R,{bypassPrefetchedCheck:!1,locale:k})},[R,I,A,k,z,T?.locale,T]);let W={ref:K,onClick(e){N||"function"!=typeof $||$(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!T||e.defaultPrevented||function(e,t,n,r,o,a,i,l,s){let c,{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,u.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=i??!0;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,T,I,R,_,j,C,k,M)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&v(T,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&v(T,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(R))W.href=R;else if(!N||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:T?.locale;W.href=T?.isLocaleDomain&&(0,h.getDomainLocale)(R,e,T?.locales,T?.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(R,e,T?.defaultLocale))}return N?l.default.cloneElement(r,W):(0,i.jsx)("a",{...L,...W,children:n})}),_=(0,l.createContext)({pending:!1}),j=()=>(0,l.useContext)(_),C=w;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},2531,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});let r=(t,n)=>e.r(92090).normalizeLocalePath(t,n);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},71914,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),o=e.r(99604),a="function"==typeof IntersectionObserver,i=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let u=n||!a,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(u||c)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&d(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,t,e,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(91788);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},50166,(e,t,n)=>{var r;n.__esModule=!0,n.default=void 0,n.default=(0,((r=e.r(87709))&&r.__esModule?r:{default:r}).default)("rem"),t.exports=n.default},12343,(e,t,n)=>{n.__esModule=!0,n.default=function(e){return"string"!=typeof e?e:e.match(r)?parseFloat(e):e};var r=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;t.exports=n.default},25920,(e,t,n)=>{n.__esModule=!0,n.default=function(e,t){return e.substr(-t.length)===t},t.exports=n.default},72827,(e,t,n)=>{function r(e){var t="function"==typeof Map?new Map:void 0;return(r=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&a(i,n.prototype),i}(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)})(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.i(50461),n.__esModule=!0,n.default=void 0,n.default=function(e){function t(t){var n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e),t}(r(Error)),t.exports=n.default},87709,(e,t,n)=>{n.__esModule=!0,n.default=void 0;var r=i(e.r(25920)),o=i(e.r(12343)),a=i(e.r(72827));function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(t,n){void 0===n&&(n="16px");var i=t,l=n;if("string"==typeof t){if(!(0,r.default)(t,"px"))throw new a.default(69,e,t);i=(0,o.default)(t)}if("string"==typeof n){if(!(0,r.default)(n,"px"))throw new a.default(70,e,n);l=(0,o.default)(n)}if("string"==typeof i)throw new a.default(71,t,e);if("string"==typeof l)throw new a.default(72,n,e);return""+i/l+e}},t.exports=n.default}],53877,(e,t,n)=>{let r="/docs/[...slug]";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(1400)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},41158,(e,t,n)=>{t.exports=e.r(39149)},3828,(e,t,n)=>{t.exports=e.r(26990)}]);