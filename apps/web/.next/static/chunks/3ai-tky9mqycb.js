(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[84532,e=>{var t=e.i(91398),n=e.i(3828),r=e.i(91788),o=e.i(63869),i=e.i(19174),a=e.i(27573),l=e.i(54410),s=e.i(20747);let c=i.U.div.withConfig({displayName:"Layout__Container",componentId:"sc-2aae1ad5-0"})`
  padding-left: ${s.Y/16}rem;
  background-color: var(--paper);

  ${(0,a.C)(i.m`
    padding-left: 0;
  `)};
`,u=i.U.div.withConfig({displayName:"Layout__Content",componentId:"sc-2aae1ad5-1"})`
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

  ${(0,a.C)(i.m`
    padding: 7rem 1.5rem 3rem;
    transform: none;
  `)};

  ${e=>e.$hasTableOfContents&&i.m`
      width: calc(100% - 15rem);
      margin-left: max(0px, calc((100% - 69rem) / 2));
      margin-right: 15rem;

      @media (max-width: 75.999rem) {
        width: 100%;
        margin-inline: auto;
      }
    `};

  ${e=>e.$hero&&!e.$footer&&i.m`
      padding: ${(0,l.f)(84)} ${(0,l.f)(32)} 0;
    `};
`,d=i.U.h1.withConfig({displayName:"Layout__Title",componentId:"sc-2aae1ad5-2"})`
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
`;i.U.h2.withConfig({displayName:"Layout__Header",componentId:"sc-2aae1ad5-3"})`
  font-size: ${(0,l.f)(32)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
  margin: 2em 0 1em;

  + h3 {
    margin-top: -0.5em;
  }
`,i.U.h3.withConfig({displayName:"Layout__SubHeader",componentId:"sc-2aae1ad5-4"})`
  margin: 2em 0 1em;
  font-size: ${(0,l.f)(24)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);

  + h4 {
    margin-top: -0.5em;
  }
`,i.U.h4.withConfig({displayName:"Layout__TertiaryHeader",componentId:"sc-2aae1ad5-5"})`
  margin: 2em 0 1em;
  font-size: ${(0,l.f)(18)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
`,e.i(64157);var f=e.i(71179),p=e.i(21273);i.U.span.withConfig({displayName:"Navbar__Brand",componentId:"sc-9212fb1f-0"})`
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 700;
`;var m=e.i(79695),h=e.i(32371);let g=e=>{let{isSideFolded:n,isMobileNavFolded:r,onSideToggle:o,onMobileNavToggle:i,showSideNav:a,useDocsSidebarMenu:l,pages:s}=e,{t:c}=(0,f.f)(),u=!1===n;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p.f,{showSideNav:!1!==a,isSideFolded:n,isMobileNavFolded:r,onSideToggle:o,onMobileNavToggle:i}),!1!==a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{id:"docs-sidebar","aria-label":c(!1!==l?"common.docs":"navigation.releases"),$isFolded:n,children:!1!==l?(0,t.jsx)(h.l,{}):(0,t.jsx)(h.y,{pages:s})}),(0,t.jsx)(y,{type:"button","aria-label":c("navigation.closeMenu",{defaultValue:"Close menu"}),"aria-hidden":!u,tabIndex:u?0:-1,$isVisible:u,onClick:o})]})]})},y=i.U.button.withConfig({displayName:"Nav__SidebarBackdrop",componentId:"sc-208244c2-0"})`
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
`;var b=e.i(66007);e.s(["f",0,function({children:e,title:i="",description:a="",hasTableOfContents:l=!1,useDocsSidebarMenu:s=!0,pages:f,seo:p}){let m=(0,n.useRouter)(),[h,y]=r.default.useState(!0),[v,w]=r.default.useState(!0),x=r.default.useCallback(()=>{w(!0),y(e=>!e)},[]),_=r.default.useCallback(()=>{w(e=>!e),y(!0)},[]);return r.default.useEffect(()=>{w(!0),y(!0)},[m.asPath]),r.default.useEffect(()=>{if(h)return;let e=e=>{"Escape"===e.key&&(y(!0),document.querySelector('[aria-controls="docs-sidebar"]')?.focus())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h]),(0,t.jsxs)(c,{children:[(0,t.jsx)(b.f,{title:`MarkFlowy${i?`: ${i}`:""}`,description:a,...p}),(0,t.jsx)(g,{useDocsSidebarMenu:s,isSideFolded:h,isMobileNavFolded:v,pages:f,onSideToggle:x,onMobileNavToggle:_}),(0,t.jsxs)(u,{as:"main",id:"main-content",$hasTableOfContents:l,$moveRight:!h,"data-e2e-id":"content",children:[i&&(0,t.jsx)(d,{children:i}),e]}),(0,t.jsx)(o.f,{})]})}],84532)},66007,84119,e=>{var t=e.i(91398),n=e.i(58678),r=e.i(3828);let o="https://www.markflowy.cc",i=["en","zh","ru"],a={en:"en_US",zh:"zh_CN",ru:"ru_RU"},l={en:"Find your writing flow with MarkFlowy, a local-first Markdown editor for macOS, Windows, and Linux. Visual and source editing, with optional AI assistance.",zh:"让想法流动，专注每一次写作。MarkFlowy 是适用于 macOS、Windows 和 Linux 的本地优先 Markdown 编辑器，支持所见即所得与源码编辑，可选接入云端 AI 或本地 Ollama 模型。",ru:"MarkFlowy — редактор Markdown для macOS, Windows и Linux с хранением файлов на вашем устройстве. Визуальное редактирование и исходный текст, ИИ-помощник по желанию."};function s(e){return{url:`${o}/social/markflowy-${"zh"===e?"zh":"en"}.png`,width:1200,height:630,type:"image/png",alt:"zh"===e?"MarkFlowy：让想法流动，专注每一次写作。白色背景上的蓝紫色丝带与本地优先 Markdown 编辑器标语。":"MarkFlowy: Your ideas, in full flow. Blue and violet ribbons on white, with the local-first Markdown editor tagline."}}function c(e,t){let n=p("/",e);return{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${o}/#website`,name:"MarkFlowy",url:`${o}/`,inLanguage:i.map(e=>"zh"===e?"zh-CN":e)},{"@type":"SoftwareApplication","@id":`${o}/#application`,name:"MarkFlowy",url:n,description:t,applicationCategory:"ProductivityApplication",operatingSystem:"macOS, Windows, Linux",image:s(e).url,downloadUrl:"https://github.com/drl990114/MarkFlowy/releases",sameAs:["https://github.com/drl990114/MarkFlowy"]}]}}function u(e){return JSON.stringify(e).replace(/</g,"\\u003c")}function d(e){return i.some(t=>t===e)}function f(e){return e.split(/[?#]/,1)[0].replace(/^\/(en|zh|ru)(?=\/|$)/,"").replace(/\/+$/,"")||"/"}function p(e,t="en"){let n=f(e),r="en"===t?"":`/${t}`;return`${o}${r}${"/"===n&&r?"":n}`}function m(e,t){let n=t.map(t=>({hrefLang:"zh"===t?"zh-CN":t,href:p(e,t)}));return t.includes("en")&&n.push({hrefLang:"x-default",href:p(e,"en")}),n}e.s(["q",0,a,"W",0,l,"Q",0,i,"l",0,o,"G",0,function(e,t){return"ru"===t&&/^\/docs\/[^?#]/.test(e)?"en":t},"b",0,c,"A",0,m,"I",0,p,"L",0,s,"v",0,d,"C",0,f,"B",0,u],84119),e.s(["f",0,function({canonical:e,children:h,description:g,image:y,title:b="MarkFlowy",url:v,availableLocales:w=i,markdownUrl:x}){let _=(0,r.useRouter)(),j=_.locale&&d(_.locale)?_.locale:"en",k=e||v||p(_.asPath,j),$=g?.trim()||l[j],C=m(_.asPath,w),M="string"==typeof y?{url:y,alt:b}:y||s(j),O=new URL(M.url,o).href,S="/"===f(_.pathname);return(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:b}),(0,t.jsx)("meta",{name:"description",content:$},"description"),(0,t.jsx)("meta",{property:"og:locale",content:a[j]},"og:locale"),w.filter(e=>e!==j).map(e=>(0,t.jsx)("meta",{property:"og:locale:alternate",content:a[e]},`og:locale:alternate:${e}`)),(0,t.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,t.jsx)("meta",{property:"og:title",content:b},"og:title"),(0,t.jsx)("meta",{property:"og:url",content:k},"og:url"),(0,t.jsx)("meta",{property:"og:image",content:O},"og:image"),(0,t.jsx)("meta",{property:"og:image:alt",content:M.alt},"og:image:alt"),M.type&&(0,t.jsx)("meta",{property:"og:image:type",content:M.type},"og:image:type"),M.width&&(0,t.jsx)("meta",{property:"og:image:width",content:String(M.width)},"og:image:width"),M.height&&(0,t.jsx)("meta",{property:"og:image:height",content:String(M.height)},"og:image:height"),(0,t.jsx)("meta",{property:"og:description",content:$},"og:description"),(0,t.jsx)("meta",{property:"og:site_name",content:"MarkFlowy"},"og:site_name"),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,t.jsx)("meta",{name:"twitter:title",content:b},"twitter:title"),(0,t.jsx)("meta",{name:"twitter:description",content:$},"twitter:description"),(0,t.jsx)("meta",{name:"twitter:image",content:O},"twitter:image"),(0,t.jsx)("meta",{name:"twitter:image:alt",content:M.alt},"twitter:image:alt"),(0,t.jsx)("link",{rel:"canonical",href:k},"canonical"),C.map(({hrefLang:e,href:n})=>(0,t.jsx)("link",{rel:"alternate",hrefLang:e,href:n},`alternate-${e}`)),x&&(0,t.jsx)("link",{rel:"alternate",type:"text/markdown",href:x}),(0,t.jsx)("link",{rel:"describedby",href:`${o}/llms.txt`,type:"text/plain"}),S&&(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:u(c(j,$))}},"site-structured-data"),h]})}],66007)},20250,46439,88913,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),r=e.i(61813),o=e.i(3828),i=e.i(91788),a=e.i(28431),l=e.i(19174),s=e.i(29880),c=e.i(54410),u=e.i(20747);let d=l.U.button.withConfig({displayName:"NavButton",componentId:"sc-c4937232-0"})`
  ${s.f};
  background: transparent;
  cursor: pointer;
  flex: 0 0 auto;
  height: ${(0,c.f)(u.M)};
  padding: 0 ${(0,c.f)(10)};
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
`;function f({label:e,icon:n,value:r,options:l,onValueChange:s,disabled:c,className:u,style:p}){let[m,h]=(0,i.useState)(!1),[g,y]=(0,i.useState)(!1),b=(0,i.useRef)(!1),v=(0,o.useRouter)(),w=l.find(e=>e.value===r)?.label;return(0,i.useEffect)(()=>{let e=()=>h(!1);return v.events.on("routeChangeStart",e),()=>v.events.off("routeChangeStart",e)},[v.events]),(0,t.jsxs)(a.R,{open:m,onOpenChange:h,modal:!1,children:[(0,t.jsx)(a.X,{asChild:!0,children:(0,t.jsx)(d,{type:"button",className:["mf-preference-trigger",u].filter(Boolean).join(" "),style:p,disabled:c,"aria-label":e,title:w?`${e}: ${w}`:e,"data-instant":g,onPointerDown:()=>y(!1),onKeyDown:e=>{y(!0),"ArrowUp"===e.key&&(e.preventDefault(),b.current=!0,h(!0))},children:(0,t.jsx)("span",{className:"mf-preference-trigger-icon","aria-hidden":"true",children:n})})}),(0,t.jsxs)(a.L,{ref:e=>{e&&b.current&&(b.current=!1,queueMicrotask(()=>{if(!e.isConnected)return;let t=e.querySelectorAll('[role="menuitemradio"]:not([data-disabled])');t.item(t.length-1)?.focus()}))},className:"mf-preference-menu","aria-label":e,"data-instant":g,side:"bottom",align:"end",sideOffset:8,collisionPadding:12,loop:!0,onKeyDown:()=>y(!0),children:[(0,t.jsx)(a.B,{className:"mf-preference-menu-heading",children:e}),(0,t.jsx)(a.O,{value:r,onValueChange:e=>{let t=l.find(t=>t.value===e);t&&s(t.value)},children:l.map(e=>(0,t.jsxs)(a.T,{value:e.value,className:"mf-preference-menu-item",children:[(0,t.jsx)("span",{className:"mf-preference-option-icon","aria-hidden":"true",children:e.icon}),(0,t.jsx)("span",{className:"mf-preference-option-label",children:e.label}),(0,t.jsx)("i",{className:"ri-check-line mf-preference-option-check","aria-hidden":"true","data-checked":e.value===r})]},e.value))})]})]})}e.s(["f",0,d],46439),e.s(["f",0,f],88913);let p={system:"ri-computer-line",light:"ri-sun-line",dark:"ri-moon-line"},m=["system","light","dark"];e.s(["f",0,function(){let{t:e}=(0,n.f)(),{theme:o,setTheme:i,mounted:a}=(0,r.f)();return(0,t.jsx)(f,{label:e("navigation.theme"),icon:(0,t.jsx)("i",{className:p[o]}),value:o,disabled:!a,onValueChange:i,options:m.map(n=>({value:n,label:e(`theme.${n}`),icon:(0,t.jsx)("i",{className:p[n]})}))})}],20250)},70736,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),r=e.i(3828),o=e.i(19174),i=e.i(54822),a=e.i(84532),l=e.i(19520),s=e.i(27573);let c=o.U.p.withConfig({displayName:"docs__Description",componentId:"sc-72740c0c-0"})`
  max-width: 38rem;
  margin: 0;
  color: var(--ink-soft);
  font-size: 1.0625rem;
  line-height: 1.75;
  text-wrap: pretty;
`,u=o.U.ul.withConfig({displayName:"docs__Row",componentId:"sc-72740c0c-1"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  ${(0,s.C)(o.m`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `)}

  ${(0,s.u)(o.m`
    grid-template-columns: minmax(0, 1fr);
  `)};
`,d=o.U.li.withConfig({displayName:"docs__Column",componentId:"sc-72740c0c-2"})`
  min-width: 0;
  padding: 1.25rem;
  border: 1px solid var(--line-soft);
  border-radius: 0.75rem;
  background: var(--paper);
`,f=o.U.h2.withConfig({displayName:"docs__SectionTitle",componentId:"sc-72740c0c-3"})`
  margin: 0 0 0.875rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-wrap: balance;
`,p=o.U.ul.withConfig({displayName:"docs__DocumentList",componentId:"sc-72740c0c-4"})`
  display: grid;
  gap: 0.125rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,m=o.U.li.withConfig({displayName:"docs__DocumentItem",componentId:"sc-72740c0c-5"})`
  min-width: 0;
`,h=(0,o.U)(l.f).withConfig({displayName:"docs__DocumentLink",componentId:"sc-72740c0c-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  min-height: 2.5rem;
  margin: 0;
  padding: 0.5rem;
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: var(--ink-mute);
  font-family: var(--body);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-decoration: none;
  touch-action: manipulation;
  transition:
    background-color 150ms ease,
    color 150ms ease;

  &:focus-visible {
    outline: 2px solid var(--seal);
    outline-offset: 2px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: color-mix(in srgb, var(--seal) 5%, transparent);
      color: var(--seal);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0ms;
  }
`,g=o.U.span.withConfig({displayName:"docs__DocumentTitle",componentId:"sc-72740c0c-7"})`
  min-width: 0;
  overflow-wrap: anywhere;
`;e.s(["__N_SSG",0,!0,"default",0,function(){let{t:e}=(0,n.f)(),o=(0,r.useRouter)().locale||"en",l=(0,i.f)(o),s=Object.keys(l),y=Object.values(l).some(e=>e.some(e=>e.locale!==o));return(0,t.jsxs)(a.f,{title:e("docs.sidebar.gettingStarted"),description:e("docs.content.description",{defaultValue:e("common.docs")}),children:[(0,t.jsx)(c,{children:e("docs.content.description",{defaultValue:e("common.docs")})}),y&&(0,t.jsx)(c,{children:e("docs.content.fallback")}),(0,t.jsx)(u,{children:s.map(n=>{let r=l[n];return(0,t.jsxs)(d,{children:[(0,t.jsx)(f,{children:e(`fileTitle.${n}`)}),(0,t.jsx)(p,{children:r.map(({slug:n,title:r,locale:o})=>(0,t.jsx)(m,{children:(0,t.jsxs)(h,{href:`/docs${n}`,locale:o,children:[(0,t.jsx)(g,{children:e(`fileTitle.${r}`)}),(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]})},n))})]},n)})})]})}])},29880,e=>{var t=e.i(19174);let n=t.m`
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
`])},54410,e=>{var t=e.i(50166);e.s(["f",0,e=>(0,t.default)(e,"18px")])},20747,e=>{e.s(["R",0,120,"M",0,76,"Y",0,260])},54471,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return o}});let r=e.r(70090);function o(t,n,o,i){{let a=e.r(2531).normalizeLocalePath,l=e.r(62205).detectDomainLocale,s=n||a(t,o).detectedLocale,c=l(i,void 0,s);if(c){let e=`http${c.http?"":"s"}://`,n=s===c.defaultLocale?"":`/${s}`;return`${e}${c.domain}${(0,r.normalizePathTrailingSlash)(`${n}${t}`)}`}return!1}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},39149,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return k},useLinkStatus:function(){return j}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(71650),a=e.r(91398),l=i._(e.r(91788)),s=e.r(60472),c=e.r(71112),u=e.r(28169),d=e.r(89129),f=e.r(14862),p=e.r(25479),m=e.r(71914),h=e.r(54471),g=e.r(44113),y=e.r(63230),b=new Set;function v(e,t,n,r){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let x=l.default.forwardRef(function(e,t){let n,r,{href:o,as:i,children:u,prefetch:b=null,passHref:x,replace:_,shallow:j,scroll:k,locale:$,onClick:C,onNavigate:M,onMouseEnter:O,onTouchStart:S,legacyBehavior:N=!1,transitionTypes:P,...L}=e;n=u,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let I=l.default.useContext(p.RouterContext),T=!1!==b,{href:z,as:R}=l.default.useMemo(()=>{if(!I){let e=w(o);return{href:e,as:i?w(i):e}}let[e,t]=(0,s.resolveHref)(I,o,!0);return{href:e,as:i?(0,s.resolveHref)(I,i):t||e}},[I,o,i]),U=l.default.useRef(z),E=l.default.useRef(R);N&&(r=l.default.Children.only(n));let F=N?r&&"object"==typeof r&&r.ref:t,[D,A,B]=(0,m.useIntersection)({rootMargin:"200px"}),K=l.default.useCallback(e=>{(E.current!==R||U.current!==z)&&(B(),E.current=R,U.current=z),D(e)},[R,z,B,D]),H=(0,y.useMergedRef)(K,F);l.default.useEffect(()=>{!I||A&&T&&v(I,z,R,{bypassPrefetchedCheck:!1,locale:$})},[R,z,A,$,T,I?.locale,I]);let V={ref:H,onClick(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!I||e.defaultPrevented||function(e,t,n,r,o,i,a,l,s){let u,{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,I,z,R,_,j,k,$,M)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&v(I,z,R,{locale:$,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&v(I,z,R,{locale:$,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(R))V.href=R;else if(!N||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==$?$:I?.locale;V.href=I?.isLocaleDomain&&(0,h.getDomainLocale)(R,e,I?.locales,I?.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(R,e,I?.defaultLocale))}return N?l.default.cloneElement(r,V):(0,a.jsx)("a",{...L,...V,children:n})}),_=(0,l.createContext)({pending:!1}),j=()=>(0,l.useContext)(_),k=x;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},2531,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});let r=(t,n)=>e.r(92090).normalizeLocalePath(t,n);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},71914,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),o=e.r(99604),i="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let c=n||!i,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||u)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&d(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,t,e,u,f.current]),[p,u,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(91788);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},50166,(e,t,n)=>{var r;n.__esModule=!0,n.default=void 0,n.default=(0,((r=e.r(87709))&&r.__esModule?r:{default:r}).default)("rem"),t.exports=n.default},12343,(e,t,n)=>{n.__esModule=!0,n.default=function(e){return"string"!=typeof e?e:e.match(r)?parseFloat(e):e};var r=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;t.exports=n.default},25920,(e,t,n)=>{n.__esModule=!0,n.default=function(e,t){return e.substr(-t.length)===t},t.exports=n.default},72827,(e,t,n)=>{function r(e){var t="function"==typeof Map?new Map:void 0;return(r=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var a=new(e.bind.apply(e,r));return n&&i(a,n.prototype),a}(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,e)})(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.i(50461),n.__esModule=!0,n.default=void 0,n.default=function(e){function t(t){var n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e),t}(r(Error)),t.exports=n.default},87709,(e,t,n)=>{n.__esModule=!0,n.default=void 0;var r=a(e.r(25920)),o=a(e.r(12343)),i=a(e.r(72827));function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(t,n){void 0===n&&(n="16px");var a=t,l=n;if("string"==typeof t){if(!(0,r.default)(t,"px"))throw new i.default(69,e,t);a=(0,o.default)(t)}if("string"==typeof n){if(!(0,r.default)(n,"px"))throw new i.default(70,e,n);l=(0,o.default)(n)}if("string"==typeof a)throw new i.default(71,t,e);if("string"==typeof l)throw new i.default(72,n,e);return""+a/l+e}},t.exports=n.default}],36738,(e,t,n)=>{let r="/docs";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(70736)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},41158,(e,t,n)=>{t.exports=e.r(39149)},3828,(e,t,n)=>{t.exports=e.r(26990)}]);