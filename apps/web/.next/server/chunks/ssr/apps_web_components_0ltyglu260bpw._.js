(()=>{"use strict";module.exports=[55723,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(41910),f=a.i(27669);a.i(6768);var g=a.i(40188),h=a.i(93662),i=a.i(6954),j=a.i(19730),k=b([i]);[i]=k.then?(await k)():k,a.s(["f",0,function({children:a,title:b="",description:c="",hasTableOfContents:k=!1,useDocsSidebarMenu:l=!0,pages:m,seo:n}){let o=(0,e.useRouter)(),[p,q]=f.default.useState(!0),[r,s]=f.default.useState(!0),t=f.default.useCallback(()=>{s(!0),q(a=>!a)},[]),u=f.default.useCallback(()=>{s(a=>!a),q(!0)},[]);return f.default.useEffect(()=>{s(!0),q(!0)},[o.asPath]),f.default.useEffect(()=>{if(p)return;let a=a=>{"Escape"===a.key&&(q(!0),document.querySelector('[aria-controls="docs-sidebar"]')?.focus())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[p]),(0,d.jsxs)(h.t,{children:[(0,d.jsx)(j.f,{title:`MarkFlowy${b?`: ${b}`:""}`,description:c,...n}),(0,d.jsx)(i.f,{useDocsSidebarMenu:l,isSideFolded:p,isMobileNavFolded:r,pages:m,onSideToggle:t,onMobileNavToggle:u}),(0,d.jsxs)(h.c,{as:"main",id:"main-content",$hasTableOfContents:k,$moveRight:!p,"data-e2e-id":"content",children:[b&&(0,d.jsx)(h.Z,{children:b}),a]}),(0,d.jsx)(g.f,{})]})}]),c()}catch(a){c(a)}},!1),6768,a=>{a.i(40188),a.s([])},93662,a=>{var b=a.i(42931),c=a.i(20295),d=a.i(88844),e=a.i(84814);let f=b.default.div.withConfig({displayName:"Layout__Container",componentId:"sc-2aae1ad5-0"})`
  padding-left: ${e.Y/16}rem;
  background-color: var(--paper);

  ${(0,c.C)(b.css`
    padding-left: 0;
  `)};
`,g=b.default.div.withConfig({displayName:"Layout__Content",componentId:"sc-2aae1ad5-1"})`
  box-sizing: border-box;
  font-family: var(--body);
  margin: 0 auto;
  min-width: 0;
  width: 100%;
  min-height: ${a=>a.$footer?"0":`calc(100vh - ${(0,d.f)(e.R)})`};
  max-width: ${a=>a.$hero?"100ch":"54rem"};
  padding: ${a=>a.$footer?"0":"8rem 3rem 5rem"};

  @layer base {
    p,
    li {
      max-width: 100ch;
    }
  }

  ${(0,c.C)(b.css`
    padding: 7rem 1.5rem 3rem;
    transform: none;
  `)};

  ${a=>a.$hasTableOfContents&&b.css`
      width: calc(100% - 15rem);
      margin-left: max(0px, calc((100% - 69rem) / 2));
      margin-right: 15rem;

      @media (max-width: 75.999rem) {
        width: 100%;
        margin-inline: auto;
      }
    `};

  ${a=>a.$hero&&!a.$footer&&b.css`
      padding: ${(0,d.f)(84)} ${(0,d.f)(32)} 0;
    `};
`,h=b.default.h1.withConfig({displayName:"Layout__Title",componentId:"sc-2aae1ad5-2"})`
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
`;b.default.h2.withConfig({displayName:"Layout__Header",componentId:"sc-2aae1ad5-3"})`
  font-size: ${(0,d.f)(32)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
  margin: 2em 0 1em;

  + h3 {
    margin-top: -0.5em;
  }
`,b.default.h3.withConfig({displayName:"Layout__SubHeader",componentId:"sc-2aae1ad5-4"})`
  margin: 2em 0 1em;
  font-size: ${(0,d.f)(24)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);

  + h4 {
    margin-top: -0.5em;
  }
`,b.default.h4.withConfig({displayName:"Layout__TertiaryHeader",componentId:"sc-2aae1ad5-5"})`
  margin: 2em 0 1em;
  font-size: ${(0,d.f)(18)};
  font-weight: 600;
  font-family: var(--sans);
  color: var(--ink);
`,a.s(["t",0,f,"c",0,g,"Z",0,h])},54142,a=>a.a(async(b,c)=>{try{var d=a.i(42931),e=a.i(14139),f=b([e]);[e]=f.then?(await f)():f,d.default.span.withConfig({displayName:"Navbar__Brand",componentId:"sc-9212fb1f-0"})`
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 700;
`,a.s([]),c()}catch(a){c(a)}},!1),6954,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(42931),g=a.i(84814),h=a.i(54142),i=a.i(14139),j=a.i(13992),k=a.i(61411),l=b([h,i,k]);[h,i,k]=l.then?(await l)():l;let m=f.default.button.withConfig({displayName:"Nav__SidebarBackdrop",componentId:"sc-208244c2-0"})`
  display: none;

  @media (max-width: ${62.5}em) {
    position: fixed;
    inset: var(--mf-site-header-height, ${g.M}px) 0 0;
    z-index: 1;
    display: block;
    padding: 0;
    border: 0;
    background: color-mix(in srgb, var(--paper-deep) 62%, transparent);
    opacity: ${({$isVisible:a})=>+!!a};
    visibility: ${({$isVisible:a})=>a?"visible":"hidden"};
    pointer-events: ${({$isVisible:a})=>a?"auto":"none"};
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
`;a.s(["f",0,a=>{let{isSideFolded:b,isMobileNavFolded:c,onSideToggle:f,onMobileNavToggle:g,showSideNav:h,useDocsSidebarMenu:l,pages:n}=a,{t:o}=(0,e.useTranslation)(),p=!1===b;return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.f,{showSideNav:!1!==h,isSideFolded:b,isMobileNavFolded:c,onSideToggle:f,onMobileNavToggle:g}),!1!==h&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.f,{id:"docs-sidebar","aria-label":o(!1!==l?"common.docs":"navigation.releases"),$isFolded:b,children:!1!==l?(0,d.jsx)(k.l,{}):(0,d.jsx)(k.y,{pages:n})}),(0,d.jsx)(m,{type:"button","aria-label":o("navigation.closeMenu",{defaultValue:"Close menu"}),"aria-hidden":!p,tabIndex:p?0:-1,$isVisible:p,onClick:f})]})]})}]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=apps_web_components_0ltyglu260bpw._.js.map