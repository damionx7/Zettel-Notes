module.exports=[[85618,a=>a.a(async(b,c)=>{try{var d=await a.y("motion-b670d5115ae5de8a/react");a.n(d),c()}catch(a){c(a)}},!0),38667,a=>{var b=a.i(8171),c=a.i(1257),d=a.i(42931),e=a.i(81377),f=a.i(35856),g=a.i(47224);(0,f.default)(.05,"#282a36"),(0,f.default)(.1,"rgb(219, 112, 147)"),(0,e.default)(.31,"rgb(219, 112, 147)"),(0,g.default)(.9,"rgb(243, 182, 97)"),(0,e.default)(.75,"rgb(33, 33, 33)");var h=a.i(88844);let i=d.default.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-a178356-0"})`
  display: inline-block;
  color: inherit;
  cursor: pointer;
  padding: ${(0,h.f)(2)} ${(0,h.f)(8)};
  margin: ${(0,h.f)(-2)} ${(0,h.f)(-8)};

  @media (min-width: ${62.5}em) {
    border-radius: ${(0,h.f)(3)};

    &:hover {
      background: ${"rgba(20, 20, 20, 0.1)"};
    }
  }
`,j=d.default.a.attrs(()=>({target:"_blank",rel:"noopener"})).withConfig({displayName:"Link__InlineLink",componentId:"sc-a178356-1"})`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${"#ff5555"};
  }

  &[data-white] {
    color: white !important;
  }
`;a.s(["f",0,function({"aria-label":a,"aria-current":d,children:e,className:f,inline:g,title:h,unstyled:k,white:l,target:m,...n}){let o,p=i;return g?p=j:k&&(p="a"),l&&(o={"data-white":l}),(0,b.jsx)(c.default,{passHref:!0,legacyBehavior:!0,...n,children:(0,b.jsx)(p,{"aria-current":d,"aria-label":a,className:f,title:h,...o,target:m,children:e})})}],38667)},38307,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(41910),g=a.i(75977),h=b([g]);[g]=h.then?(await h)():h;let i=()=>(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"20px"},viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6L14.0322 6.0006C13.2425 8.36616 11.9988 10.5057 10.4115 12.301C11.1344 12.9457 11.917 13.5176 12.7475 14.0079L11.9969 15.8855C10.9237 15.2781 9.91944 14.5524 8.99961 13.7249C7.21403 15.332 5.10914 16.5553 2.79891 17.2734L2.26257 15.3442C4.2385 14.7203 6.04543 13.6737 7.59042 12.3021C6.46277 11.0281 5.50873 9.57985 4.76742 8.00028L7.00684 8.00037C7.57018 9.03885 8.23979 10.0033 8.99967 10.877C10.2283 9.46508 11.2205 7.81616 11.9095 6.00101L2 6V4H8V2H10ZM17.5 12.8852L16.253 16H18.745L17.5 12.8852Z"})}),j=[{code:"en",name:"English",flag:"🇺🇸"},{code:"zh",name:"中文",flag:"🇨🇳"},{code:"ru",name:"Русский",flag:"🇷🇺"}];a.s(["f",0,function({className:a,style:b}){let{t:c}=(0,e.useTranslation)(),h=(0,f.useRouter)(),k=h.locale||"en";return(0,d.jsx)(g.f,{className:a,style:b,label:c("navigation.language"),icon:(0,d.jsx)(i,{}),value:k,onValueChange:a=>{let{pathname:b,asPath:c,query:d}=h;(document.cookie=`NEXT_LOCALE=${encodeURIComponent(a)}; Path=/; Max-Age=31536000; SameSite=Lax`,"ru"===a&&"/docs/[...slug]"===b)?h.push("/docs","/docs",{locale:a}):h.push({pathname:b,query:d},c,{locale:a})},options:j.map(a=>({value:a.code,label:a.name,icon:a.flag}))})}]),c()}catch(a){c(a)}},!1),91321,a=>{var b=a.i(8171);a.s(["f",0,({size:a=24})=>(0,b.jsx)("img",{src:"/logo.svg",alt:"Markflowy",style:{width:a,height:a}})])},13992,a=>{let b,c;var d,e=a.i(42931),f=a.i(20295),g=a.i(88844),h=a.i(84814),i=a.i(8171),j=a.i(27669);let k=(d=e.default.nav.withConfig({displayName:"Sidebar",componentId:"sc-908d4aef-0"})`
  position: fixed;
  transform: translateZ(0);
  display: block;
  z-index: 2;
  font-family: var(--body);

  left: 0;
  top: var(--mf-site-header-height, ${h.M}px);
  bottom: 0;
  right: auto;
  width: ${h.Y/16}rem;
  background: var(--paper);
  border-right: 1px solid var(--line-soft);
  box-sizing: border-box;
  color: var(--ink);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: var(--line) transparent;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  transition: transform 150ms ease-out;

  &::-webkit-scrollbar {
    width: ${(0,g.f)(8)};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--line);
    border: ${(0,g.f)(2)} solid transparent;
    border-radius: 999px;
    background-clip: padding-box;
  }

  ${(0,f.C)(e.css`
    width: min(24rem, calc(100vw - 0.375rem));
    box-shadow: var(--shadow);
    visibility: ${({$isFolded:a})=>a?"hidden":"visible"};

    ${a=>a.$isFolded?e.css`
            transform: translateX(-100%);
          `:""};
  `)};

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0ms;
  }
`,b?d:function(a){let e=j.default.useRef(null),f=j.default.useCallback(a=>{if(!e.current)return;a.stopImmediatePropagation();let{timeStamp:b,deltaY:d}=a,{offsetHeight:f,scrollHeight:g,scrollTop:h}=e.current;if(b-c<=400){c=b,a.preventDefault(),window.scrollBy(0,d);return}let i=g-f,j=d<0&&0===h,k=d>0&&h>=i,l=h+d<=0,m=h+d>=i;(j||k||l||m)&&a.preventDefault(),(l||m)&&(e.current.scrollTop=l?0:i)},[]),g=j.default.useCallback(()=>((b=window.matchMedia("(max-width: 62.5em)").matches)?e.current?.removeEventListener("wheel",f):e.current?.addEventListener("wheel",f),()=>e.current?.removeEventListener("wheel",f)),[]);return j.default.useEffect(()=>(e.current?.addEventListener("wheel",f),window.addEventListener("resize",g),()=>{e.current?.removeEventListener("wheel",f),window.removeEventListener("resize",g)}),[]),(0,i.jsx)(d,{...a,ref:e})});a.s(["f",0,k],13992)},61411,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(41910),g=a.i(42931),h=a.i(21583),i=a.i(38667),j=b([h]);[h]=j.then?(await j)():j;let k=a=>a.split(/[?#]/,1)[0].replace(/\/+$/,"")||"/",l=g.default.div.withConfig({displayName:"SidebarMenus__MenuInner",componentId:"sc-f2b578a9-0"})`
  box-sizing: border-box;
  min-height: 100%;
  padding: 1.25rem 1rem calc(1.5rem + env(safe-area-inset-bottom));
`,m=g.default.div.withConfig({displayName:"SidebarMenus__MenuHeader",componentId:"sc-f2b578a9-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 2rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n=g.default.section.withConfig({displayName:"SidebarMenus__Section",componentId:"sc-f2b578a9-2"})`
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`,o=g.default.div.withConfig({displayName:"SidebarMenus__SectionTitle",componentId:"sc-f2b578a9-3"})`
  display: flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.375rem 0.5rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-wrap: pretty;
`,p=g.default.ul.withConfig({displayName:"SidebarMenus__MenuList",componentId:"sc-f2b578a9-4"})`
  display: grid;
  gap: 0.125rem;
  margin: 0 0 0.25rem 0.75rem;
  padding: 0 0 0 0.5rem;
  border-left: 1px solid var(--line-faint);
  list-style: none;
`,q=g.default.li.withConfig({displayName:"SidebarMenus__MenuItem",componentId:"sc-f2b578a9-5"})`
  min-width: 0;
`,r=(0,g.default)(i.f).withConfig({displayName:"SidebarMenus__MenuLink",componentId:"sc-f2b578a9-6"})`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 2rem;
  margin: 0;
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: var(--ink-mute);
  font-family: var(--body);
  font-size: 0.8125rem;
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

  ${({$isActive:a})=>a&&g.css`
      background: color-mix(in srgb, var(--seal) 9%, transparent);
      color: var(--seal);
      font-weight: 500;
    `}

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0ms;
  }
`,s=g.default.span.withConfig({displayName:"SidebarMenus__MenuItemText",componentId:"sc-f2b578a9-7"})`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;a.s(["l",0,()=>{let a=(0,f.useRouter)(),b=a.locale||"en",c=k(a.asPath),g=(0,h.f)(b),i=Object.keys(g),{t:j}=(0,e.useTranslation)();return(0,d.jsxs)(l,{children:[(0,d.jsx)(m,{children:j("common.docs")}),i.map(a=>{let b=g[a];return(0,d.jsxs)(n,{children:[(0,d.jsx)(o,{children:j(`fileTitle.${a}`)}),(0,d.jsx)(p,{children:b.map(({slug:a,title:b,locale:e})=>{let f=`/docs${a}`,g=c===k(f),h=j(`fileTitle.${b}`);return(0,d.jsx)(q,{children:(0,d.jsx)(r,{href:f,locale:e,title:h,"aria-current":g?"page":void 0,$isActive:g,children:(0,d.jsx)(s,{children:h})})},a)})})]},a)})]})},"y",0,({pages:a=[]})=>{let b=(0,f.useRouter)(),{t:c}=(0,e.useTranslation)(),g=b.asPath;return(0,d.jsxs)(l,{children:[(0,d.jsx)(m,{children:c("navigation.releases")}),(0,d.jsx)(p,{children:a.map(({href:a,title:b})=>{let c=a.startsWith("/")||a.startsWith("#")||/^https?:\/\//.test(a)?a:`#${a}`,e=c.startsWith("#")?g.endsWith(c):k(g)===k(c);return(0,d.jsx)(q,{children:(0,d.jsx)(r,{href:c,title:b,"aria-current":e?"page":void 0,$isActive:e,children:(0,d.jsx)(s,{children:b})})},`${a}-${b}`)})})]})}]),c()}catch(a){c(a)}},!1),77483,a=>{var b=a.i(8171);a.s(["f",0,function(){return(0,b.jsxs)("svg",{className:"mf-hover-arrow",viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[(0,b.jsx)("path",{className:"mf-hover-arrow-shaft",d:"M1 6h8"}),(0,b.jsx)("path",{className:"mf-hover-arrow-chevron",d:"m2 2 4 4-4 4"})]})}])},55641,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(85618),f=a.i(27669),g=b([e]);[e]=g.then?(await g)():g;let h=[{id:"f-stem",d:"M11 56 C13 55 16 55 18 56 M16 56 C19 44 20 29 24 16 M18 17 C26 12 38 12 45 16",width:2.55},{id:"f-crossbar",d:"M19 34 C26 31 34 32 40 34",width:2.1},{id:"l",d:"M45 49 C49 39 51 26 54 16 C55 12 59 12 59 16 C59 25 54 37 51 43 C49 48 51 52 55 52 C58 52 60 49 62 45",width:2.5},{id:"o",d:"M64 41 C65 32 70 27 77 28 C84 29 86 37 83 44 C80 51 73 54 67 50 C63 47 62 43 64 41 Z",width:2.55},{id:"w",d:"M88 30 C89 40 88 50 93 52 C98 53 101 41 102 30 C102 40 103 51 108 52 C114 53 117 40 119 29",width:2.5},{id:"y",d:"M122 30 C123 41 124 50 129 52 C134 53 138 40 140 29 C138 43 136 55 131 61 C128 65 123 65 122 62 C121 58 126 55 136 53",width:2.5}];a.s(["f",0,function({paused:a=!1}){let b=(0,f.useRef)(null),c=(0,e.useInView)(b,{amount:.5}),[g,i]=(0,f.useState)(null),[j,k]=(0,f.useState)(!0),[l,m]=(0,f.useState)(!1),[n,o]=(0,f.useState)(0),p=c&&j&&!1===g&&!a,q=(0,f.useCallback)(()=>{p&&o(a=>a+1)},[p]);return(0,f.useEffect)(()=>{let a=window.matchMedia("(prefers-reduced-motion: reduce)"),b=()=>{k(!document.hidden),i(a.matches)};return b(),a.addEventListener("change",b),document.addEventListener("visibilitychange",b),()=>{a.removeEventListener("change",b),document.removeEventListener("visibilitychange",b)}},[]),(0,f.useEffect)(()=>{if(!p)return;m(!0);let a=window.setTimeout(q,8e3);return()=>window.clearTimeout(a)},[p,q,n]),(0,d.jsxs)(e.motion.span,{ref:b,className:"mf-site-wordmark","aria-hidden":"true",onHoverStart:q,children:[(0,d.jsx)("span",{children:"Mark"}),(0,d.jsxs)("svg",{className:"mf-site-wordmark-flowy","data-static":!p&&(!0===g||l||a),viewBox:"4 4 141 68",shapeRendering:"geometricPrecision",focusable:"false",children:[(0,d.jsx)("g",{className:"mf-site-wordmark-static",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:h.map(a=>(0,d.jsx)("path",{d:a.d,strokeWidth:1.3*a.width},a.id))}),p&&(0,d.jsxs)("g",{className:"mf-site-wordmark-animation",children:[(0,d.jsx)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:h.map((a,b)=>(0,d.jsx)(e.motion.path,{d:a.d,strokeWidth:1.3*a.width,initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{pathLength:{duration:1.05,delay:.16+.08*b,ease:[.77,0,.175,1]},opacity:{duration:.06,delay:.16+.08*b}}},a.id))}),(0,d.jsx)("g",{className:"mf-site-wordmark-highlight",fill:"none",stroke:"var(--seal)",strokeLinecap:"round",strokeLinejoin:"round",children:h.map((a,b)=>(0,d.jsx)(e.motion.path,{d:a.d,strokeWidth:1.3*a.width*1.08,initial:{pathLength:.16,pathOffset:0,opacity:0},animate:{pathLength:.16,pathOffset:.84,opacity:[0,.95,0]},transition:{pathOffset:{duration:1.05,delay:.16+.08*b,ease:[.77,0,.175,1]},opacity:{duration:1.05,delay:.16+.08*b,times:[0,.18,1],ease:"easeOut"}}},a.id))})]},n)]}),(0,d.jsx)("noscript",{children:(0,d.jsx)("style",{children:".mf-site .mf-site-wordmark-static { opacity: 1; }"})})]})}]),c()}catch(a){c(a)}},!1),40188,a=>{var b=a.i(8171),c=a.i(21377),d=a.i(1257),e=a.i(87383),f=a.i(91321);a.s(["f",0,function(){let{t:a}=(0,c.useTranslation)(),g=[{title:a("site.footer.product"),links:[[a("navigation.download"),e.x],[a("site.hero.try"),e.v],[a("navigation.releases"),"/releases"]]},{title:a("site.footer.resources"),links:[[a("navigation.docs"),"/docs"],[a("navigation.webApp"),"/workspace"]]},{title:a("site.footer.community"),links:[["GitHub",e.W],[a("site.footer.contribute"),`${e.W}/blob/main/CONTRIBUTING.md`],[a("site.footer.feedback"),`${e.W}/issues`]]}];return(0,b.jsxs)("footer",{className:"mf-site-footer",children:[(0,b.jsxs)("div",{className:"mf-container mf-footer-grid",children:[(0,b.jsxs)("div",{className:"mf-footer-brand",children:[(0,b.jsxs)(d.default,{href:"/",className:"mf-site-brand","aria-label":"MarkFlowy",children:[(0,b.jsx)(f.f,{size:28}),(0,b.jsx)("span",{children:"MarkFlowy"})]}),(0,b.jsx)("p",{children:a("site.footer.tagline")}),(0,b.jsx)("span",{className:"mf-footer-note",children:"macOS · Windows · Linux"})]}),g.map(({title:a,links:c})=>(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:a}),(0,b.jsx)("ul",{children:c.map(([a,c])=>(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{href:c,children:a})},c))})]},a))]}),(0,b.jsxs)("div",{className:"mf-container mf-footer-bottom",children:[(0,b.jsxs)("span",{children:["© 2023–",new Date().getFullYear()," MarkFlowy"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(d.default,{href:"/privacy",locale:"en",children:a("site.footer.privacy")}),(0,b.jsx)(d.default,{href:`${e.W}/blob/main/LICENSE`,children:a("site.footer.license")})]}),(0,b.jsx)("span",{children:a("site.footer.made")})]})]})}])},14139,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(85618),f=a.i(21377),g=a.i(1257),h=a.i(41910),i=a.i(27669),j=a.i(40477),k=a.i(87383),l=a.i(38307),m=a.i(91321),n=a.i(82539),o=a.i(99141),p=a.i(77483),q=a.i(55641),r=a.i(50282),s=b([e,l,o,q]);function t({menu:a,onNavigate:b}){let{t:c}=(0,f.useTranslation)(),{locale:i}=(0,h.useRouter)(),k=(0,e.useIsPresent)();return(0,d.jsx)("div",{className:"mf-menu-columns","data-columns":a.sections.length,inert:!k,children:a.sections.map(a=>(0,d.jsxs)("section",{className:"mf-menu-column",children:[(0,d.jsx)("h2",{children:c(a.title)}),(0,d.jsx)("ul",{children:a.links.map(a=>(0,d.jsx)("li",{children:(0,d.jsxs)(g.default,{href:a.href,locale:(0,j.G)(a.href,i),onClick:b,className:"mf-menu-link",children:[(0,d.jsxs)("span",{className:"mf-menu-link-title",children:[c(a.title),(0,d.jsx)(p.f,{})]}),a.description&&(0,d.jsx)("span",{className:"mf-menu-link-description",children:c(a.description)})]})},a.href))})]},a.title))})}[e,l,o,q]=s.then?(await s)():s,a.s(["f",0,function({isSideFolded:a,isMobileNavFolded:b=!0,onSideToggle:c,onMobileNavToggle:j,showSideNav:s=!1}){let{t:u}=(0,f.useTranslation)(),v=(0,h.useRouter)(),w=(0,e.useReducedMotion)(),x=(0,i.useRef)(null),y=(0,i.useRef)(null),z=(0,i.useRef)([]),A=(0,i.useRef)([]),B=(0,i.useRef)(null),C=(0,i.useRef)(!1),D=(0,i.useRef)(null),E=(0,i.useRef)(null),F=(0,i.useRef)(!1),G=(0,i.useRef)(!1),H=(0,i.useRef)(0),[I,J]=(0,i.useState)(null),[K,L]=(0,i.useState)(null),[M,N]=(0,i.useState)(0),[O,P]=(0,i.useState)(1),Q=!b,R=(0,i.useRef)(Q),S=Q||null!==I,T=r.f.find(a=>a.id===I),U=r.f.find(a=>a.id===K),V=w||G.current,W={duration:.24*!V,ease:[.22,1,.36,1]},X=(0,i.useCallback)(a=>{if(a)return D.current=a,()=>{D.current===a&&(D.current=null)}},[]),Y=(0,i.useCallback)(()=>{E.current&&clearTimeout(E.current),E.current=null},[]),Z=(0,i.useCallback)(()=>{Y(),J(null),L(null),R.current&&(R.current=!1,j?.())},[Y,j]),$=a=>{Y(),P(a>=H.current?1:-1),H.current=a,J(r.f[a].id)};return(0,i.useEffect)(()=>(v.events.on("routeChangeStart",Z),()=>v.events.off("routeChangeStart",Z)),[Z,v.events]),(0,i.useEffect)(()=>Y,[Y]),(0,i.useEffect)(()=>{R.current=Q},[Q]),(0,i.useEffect)(()=>{let a=D.current;if(!a||!I)return;let b=()=>N(a.getBoundingClientRect().height);b();let c=new ResizeObserver(b);return c.observe(a),F.current&&(a.querySelector("a")?.focus(),F.current=!1),()=>c.disconnect()},[I,v.locale]),(0,i.useEffect)(()=>{if(!S)return;let a=a=>{x.current?.contains(a.target)||Z()},b=a=>{"Escape"===a.key&&(a.preventDefault(),G.current=!0,Z(),Q?y.current?.focus():z.current[H.current]?.focus())},c=window.matchMedia("(min-width: 1001px)");return document.addEventListener("pointerdown",a),document.addEventListener("keydown",b),c.addEventListener("change",Z),()=>{document.removeEventListener("pointerdown",a),document.removeEventListener("keydown",b),c.removeEventListener("change",Z)}},[Z,Q,S]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"mf-navigation-scrim","data-open":S,"data-instant":V,"aria-hidden":"true"}),(0,d.jsxs)("header",{ref:x,className:"mf-site-header","data-home":"/"===v.pathname,"data-open":S,"data-keyboard":G.current,onPointerEnter:Y,onPointerLeave:a=>{"mouse"===a.pointerType&&!G.current&&(Y(),I&&(E.current=setTimeout(()=>J(null),180)))},onBlur:a=>{a.relatedTarget&&!a.currentTarget.contains(a.relatedTarget)&&Z()},children:[(0,d.jsx)("a",{className:"mf-skip-link",href:"#main-content",children:u("site.nav.skip")}),(0,d.jsxs)("div",{className:"mf-site-header-inner",children:[s&&c&&(0,d.jsx)(n.f,{className:"mf-site-sidebar-toggle",type:"button",onClick:c,"aria-expanded":!1===a,"aria-controls":"docs-sidebar","aria-label":u("common.docs"),children:(0,d.jsx)("i",{className:"ri-side-bar-line","aria-hidden":"true"})}),(0,d.jsxs)(g.default,{href:"/",className:"mf-site-brand","aria-label":"MarkFlowy",onPointerEnter:()=>{Y(),J(null)},children:[(0,d.jsx)(m.f,{size:28}),(0,d.jsx)(q.f,{paused:S})]}),(0,d.jsxs)("nav",{className:"mf-site-desktop-nav","aria-label":u("site.nav.main"),children:[r.f.map((a,b)=>(0,d.jsxs)(n.f,{ref:a=>{z.current[b]=a},className:"mf-nav-trigger",id:`mf-nav-${a.id}`,type:"button","aria-expanded":I===a.id,"aria-controls":I===a.id?"mf-site-mega-menu":void 0,onPointerEnter:a=>{"mouse"===a.pointerType&&(G.current=!1,Y(),E.current=setTimeout(()=>$(b),100*!I))},onPointerLeave:Y,onClick:c=>{G.current=0===c.detail,0===c.detail&&I===a.id?Z():$(b)},onKeyDown:c=>{if(G.current=!0,"ArrowDown"===c.key&&(c.preventDefault(),I===a.id?D.current?.querySelector("a")?.focus():(F.current=!0,$(b))),"ArrowRight"===c.key||"ArrowLeft"===c.key){c.preventDefault();let a=(b+("ArrowRight"===c.key?1:-1)+r.f.length)%r.f.length;z.current[a]?.focus(),I&&$(a)}},children:[u(a.title),(0,d.jsxs)("svg",{className:"mf-nav-chevron",viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[(0,d.jsx)("path",{className:"mf-nav-chevron-left",d:"m3 4 3 3"}),(0,d.jsx)("path",{className:"mf-nav-chevron-right",d:"m6 7 3-3"})]})]},a.id)),(0,d.jsx)(g.default,{href:"/releases",onPointerEnter:()=>{Y(),J(null)},"aria-current":"/releases"===v.pathname?"page":void 0,children:u("navigation.releases")})]}),(0,d.jsxs)("div",{className:"mf-site-header-actions",onPointerEnter:()=>{Y(),J(null)},children:[(0,d.jsx)(l.f,{}),(0,d.jsx)(o.f,{}),(0,d.jsxs)(g.default,{className:"mf-button mf-button-secondary mf-site-web-link",href:"/workspace",children:[u("navigation.webApp"),(0,d.jsx)("span",{className:"mf-beta",children:"Beta"})]}),(0,d.jsxs)(g.default,{className:"mf-button mf-header-download",href:k.x,children:[u("navigation.download"),(0,d.jsx)(p.f,{})]})]}),(0,d.jsx)(n.f,{ref:y,className:"mf-site-menu-toggle",type:"button","aria-expanded":Q,"aria-controls":"mf-site-mobile-menu","aria-label":u(Q?"navigation.closeMenu":"navigation.openMenu"),onClick:a=>{G.current=0===a.detail,j?.()},children:(0,d.jsx)("span",{className:"mf-menu-toggle-lines","aria-hidden":"true"})})]}),(0,d.jsx)(e.AnimatePresence,{custom:V,children:T&&(0,d.jsx)(e.motion.div,{id:"mf-site-mega-menu",className:"mf-site-mega-menu","aria-labelledby":`mf-nav-${T.id}`,initial:{clipPath:"inset(0 -60px 100% -60px)",opacity:0},animate:{height:M||"auto",clipPath:"inset(0 -60px -60px -60px)",opacity:1},variants:{exit:a=>({clipPath:"inset(0 -60px 100% -60px)",opacity:0,transition:{...W,duration:.2*!a}})},exit:"exit",transition:W,onPointerEnter:Y,children:(0,d.jsx)(e.AnimatePresence,{initial:!1,mode:"popLayout",custom:O,children:(0,d.jsx)(e.motion.div,{ref:X,custom:O,variants:{enter:a=>({transform:`translateX(${V?0:18*a}px)`,opacity:0}),visible:{transform:"translateX(0%)",opacity:1},exit:a=>({transform:`translateX(${V?0:-18*a}px)`,opacity:0})},initial:"enter",animate:"visible",exit:"exit",transition:{opacity:{duration:.16*!V},transform:{duration:.24*!V,ease:[.22,1,.36,1]}},children:(0,d.jsx)(t,{menu:T,onNavigate:Z})},T.id)})},"desktop-menu")}),(0,d.jsx)(e.AnimatePresence,{custom:V,children:Q&&(0,d.jsxs)(e.motion.div,{id:"mf-site-mobile-menu",className:"mf-site-mobile-menu",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},variants:{exit:a=>({height:0,opacity:0,transition:{...W,duration:.2*!a}})},exit:"exit",transition:W,children:[(0,d.jsx)(e.AnimatePresence,{initial:!1,mode:"wait",children:(0,d.jsx)(e.motion.div,{ref:B,initial:{opacity:0,transform:`translateX(${V?0:K?20:-20}px)`},animate:{opacity:1,transform:"translateX(0px)"},exit:{opacity:0,transform:`translateX(${V?0:K?20:-20}px)`},transition:{...W,duration:.16*!V},onAnimationComplete:()=>{R.current&&(K?B.current?.querySelector("button")?.focus():C.current&&(A.current[H.current]?.focus(),C.current=!1))},children:U?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.f,{className:"mf-mobile-back",type:"button",onClick:a=>{G.current=0===a.detail,H.current=r.f.findIndex(a=>a.id===K),C.current=!0,L(null)},children:[(0,d.jsx)("i",{className:"ri-arrow-left-line","aria-hidden":"true"}),u("site.nav.back")]}),(0,d.jsx)(t,{menu:U,onNavigate:Z})]}):(0,d.jsxs)("nav",{className:"mf-mobile-root","aria-label":u("site.nav.main"),children:[r.f.map((a,b)=>(0,d.jsxs)(n.f,{type:"button",ref:a=>{A.current[b]=a},onClick:b=>{G.current=0===b.detail,L(a.id)},children:[u(a.title),(0,d.jsx)("i",{className:"ri-arrow-right-s-line","aria-hidden":"true"})]},a.id)),(0,d.jsx)(g.default,{href:"/releases",onClick:Z,children:u("navigation.releases")}),(0,d.jsxs)(g.default,{href:"/workspace",onClick:Z,children:[u("navigation.webApp"),(0,d.jsx)("span",{className:"mf-beta",children:"Beta"})]})]})},K||"root")}),(0,d.jsx)("div",{className:"mf-mobile-cta",children:(0,d.jsxs)(g.default,{className:"mf-button",href:k.x,onClick:Z,children:[u("home.hero.download"),(0,d.jsx)(p.f,{})]})})]})})]})]})}]),c()}catch(a){c(a)}},!1),50282,a=>{var b=a.i(87383);let c=[{id:"product",title:"site.footer.product",sections:[{title:"site.nav.writing",links:[{title:"site.nav.editor",description:"site.nav.editorDescription",href:"/docs/intro"},{title:"site.hero.try",description:"site.nav.demoDescription",href:b.v}]},{title:"site.nav.workspace",links:[{title:"site.nav.files",description:"site.nav.filesDescription",href:"/docs/intro"},{title:"site.nav.assistant",description:"site.nav.assistantDescription",href:"/docs/Extension/UseCopilotWithOllama"},{title:"site.nav.themes",description:"site.nav.themesDescription",href:"/docs/Extension/CustomTheme"}]},{title:"site.nav.start",links:[{title:"navigation.download",description:"site.nav.downloadDescription",href:b.x},{title:"navigation.webApp",description:"site.nav.webDescription",href:"/workspace"},{title:"site.nav.features",description:"site.nav.featuresDescription",href:"/#features"}]}]},{id:"resources",title:"site.footer.resources",sections:[{title:"navigation.docs",links:[{title:"site.nav.quickstart",href:"/docs/intro"},{title:"fileTitle.Snippets",href:"/docs/Extension/Snippets"},{title:"site.nav.assistant",href:"/docs/Extension/UseCopilotWithOllama"},{title:"site.nav.themes",href:"/docs/Extension/CustomTheme"}]},{title:"site.nav.explore",links:[{title:"navigation.releases",href:"/releases"},{title:"site.footer.privacy",href:"/privacy"}]},{title:"site.nav.support",links:[{title:"site.footer.feedback",href:`${b.W}/issues`},{title:"site.footer.contribute",href:"/docs/Community/CONTRIBUTING"},{title:"site.footer.license",href:"/docs/Community/License"}]}]},{id:"community",title:"site.nav.openSource",sections:[{title:"site.nav.buildTogether",links:[{title:"GitHub",description:"site.nav.githubDescription",href:b.W},{title:"site.footer.contribute",description:"site.nav.contributeDescription",href:"/docs/Community/CONTRIBUTING"}]},{title:"site.footer.community",links:[{title:"site.footer.feedback",description:"site.nav.feedbackDescription",href:`${b.W}/issues`},{title:"site.nav.contributors",description:"site.nav.contributorsDescription",href:`${b.W}/graphs/contributors`}]}]}];a.s(["f",0,c])},21583,a=>a.a(async(b,c)=>{try{var d=a.i(81453),e=a.i(17019),f=b([d]);[d]=f.then?(await f)():f,a.s(["f",0,a=>{let b={},c=a&&e.f.some(b=>b.locale===a)?a:a?"en":void 0;return e.f.forEach(a=>{let d=a.slug.split("/"),e=a.locale;if(c&&e!==c)return;let f=d[1]||e;b[f]||(b[f]=[]),b[f].push(a)}),b}]),c()}catch(a){c(a)}},!1)],35856,(a,b,c)=>{b.exports=a.x("polished-2bf1d5ef4c4287ca/lib/color/darken.js",()=>require("polished-2bf1d5ef4c4287ca/lib/color/darken.js"))},81377,(a,b,c)=>{b.exports=a.x("polished-2bf1d5ef4c4287ca/lib/color/lighten.js",()=>require("polished-2bf1d5ef4c4287ca/lib/color/lighten.js"))},47224,(a,b,c)=>{b.exports=a.x("polished-2bf1d5ef4c4287ca/lib/color/shade.js",()=>require("polished-2bf1d5ef4c4287ca/lib/color/shade.js"))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1is9fjetah53w._.js.map