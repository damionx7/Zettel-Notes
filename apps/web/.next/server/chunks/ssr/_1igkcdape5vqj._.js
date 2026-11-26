(()=>{"use strict";module.exports=[32420,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(91854),g=a.i(41910),h=a.i(42931),i=a.i(21583),j=a.i(55723),k=a.i(38667),l=a.i(20295),m=b([i,j]);[i,j]=m.then?(await m)():m;let n=h.default.p.withConfig({displayName:"docs__Description",componentId:"sc-72740c0c-0"})`
  max-width: 38rem;
  margin: 0;
  color: var(--ink-soft);
  font-size: 1.0625rem;
  line-height: 1.75;
  text-wrap: pretty;
`,o=h.default.ul.withConfig({displayName:"docs__Row",componentId:"sc-72740c0c-1"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  ${(0,l.C)(h.css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `)}

  ${(0,l.u)(h.css`
    grid-template-columns: minmax(0, 1fr);
  `)};
`,p=h.default.li.withConfig({displayName:"docs__Column",componentId:"sc-72740c0c-2"})`
  min-width: 0;
  padding: 1.25rem;
  border: 1px solid var(--line-soft);
  border-radius: 0.75rem;
  background: var(--paper);
`,q=h.default.h2.withConfig({displayName:"docs__SectionTitle",componentId:"sc-72740c0c-3"})`
  margin: 0 0 0.875rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-wrap: balance;
`,r=h.default.ul.withConfig({displayName:"docs__DocumentList",componentId:"sc-72740c0c-4"})`
  display: grid;
  gap: 0.125rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,s=h.default.li.withConfig({displayName:"docs__DocumentItem",componentId:"sc-72740c0c-5"})`
  min-width: 0;
`,t=(0,h.default)(k.f).withConfig({displayName:"docs__DocumentLink",componentId:"sc-72740c0c-6"})`
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
`,u=h.default.span.withConfig({displayName:"docs__DocumentTitle",componentId:"sc-72740c0c-7"})`
  min-width: 0;
  overflow-wrap: anywhere;
`,v=async({locale:a})=>({props:{...await (0,f.serverSideTranslations)(a||"en",["common"])}});a.s(["default",0,function(){let{t:a}=(0,e.useTranslation)(),b=(0,g.useRouter)().locale||"en",c=(0,i.f)(b),f=Object.keys(c),h=Object.values(c).some(a=>a.some(a=>a.locale!==b));return(0,d.jsxs)(j.f,{title:a("docs.sidebar.gettingStarted"),description:a("docs.content.description",{defaultValue:a("common.docs")}),children:[(0,d.jsx)(n,{children:a("docs.content.description",{defaultValue:a("common.docs")})}),h&&(0,d.jsx)(n,{children:a("docs.content.fallback")}),(0,d.jsx)(o,{children:f.map(b=>{let e=c[b];return(0,d.jsxs)(p,{children:[(0,d.jsx)(q,{children:a(`fileTitle.${b}`)}),(0,d.jsx)(r,{children:e.map(({slug:b,title:c,locale:e})=>(0,d.jsx)(s,{children:(0,d.jsxs)(t,{href:`/docs${b}`,locale:e,children:[(0,d.jsx)(u,{children:a(`fileTitle.${c}`)}),(0,d.jsx)("span",{"aria-hidden":"true",children:"→"})]})},b))})]},b)})})]})},"getStaticProps",0,v]),c()}catch(a){c(a)}},!1),48389,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(32420),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/docs/index",pathname:"/docs",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/docs/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_1igkcdape5vqj._.js.map