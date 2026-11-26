(()=>{"use strict";module.exports=[77136,a=>{var b=a.i(8171),c=a.i(21377),d=a.i(42931),e=a.i(84814);let f=({items:a})=>{let{t:d}=(0,c.useTranslation)();if(0===a.length)return null;let e=d("docs.tableOfContents");return(0,b.jsxs)(g,{"aria-label":e,children:[(0,b.jsx)(h,{children:e}),(0,b.jsx)(i,{children:a.map(a=>(0,b.jsx)(j,{children:(0,b.jsx)(k,{href:`#${a.id}`,$isNested:3===a.level,children:a.title})},a.id))})]})},g=d.default.aside.withConfig({displayName:"DocsTableOfContents__TableOfContents",componentId:"sc-269e623e-0"})`
  position: fixed;
  top: 8rem;
  right: max(1.5rem, calc((100vw - ${e.Y/16}rem - 69rem) / 2 + 1.5rem));
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
`,h=d.default.p.withConfig({displayName:"DocsTableOfContents__TableOfContentsTitle",componentId:"sc-269e623e-1"})`
  margin: 0 0 0.75rem;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.25rem;
`,i=d.default.ul.withConfig({displayName:"DocsTableOfContents__TableOfContentsList",componentId:"sc-269e623e-2"})`
  display: grid;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--line-soft);
  list-style: none;
`,j=d.default.li.withConfig({displayName:"DocsTableOfContents__TableOfContentsListItem",componentId:"sc-269e623e-3"})`
  min-width: 0;
`,k=d.default.a.withConfig({displayName:"DocsTableOfContents__TableOfContentsLink",componentId:"sc-269e623e-4"})`
  display: block;
  min-height: 2rem;
  margin-left: -1px;
  padding: 0.375rem 0.5rem 0.375rem ${({$isNested:a})=>a?"1.5rem":"0.875rem"};
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
`;var l=a.i(65076);a.s(["f",0,({html:a,tableOfContents:c=[]})=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.f,{dangerouslySetInnerHTML:{__html:a}}),(0,b.jsx)(f,{items:c})]})],77136)},16569,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(81453),f=a.i(17019),g=a.i(91854),h=a.i(77136),i=a.i(55723),j=a.i(40477),k=a.i(56414),l=b([e,i]);[e,i]=l.then?(await l)():l;let m=async({locales:a=[]})=>{let b=[];return f.f.forEach(c=>{let d=c._raw.flattenedPath.split("/"),e=d[0],f=d.slice(1);a.includes(e)&&f.length>0&&b.push({params:{slug:f},locale:e})}),{paths:b,fallback:!1}},n=async({locale:a,params:b})=>{let c=Array.isArray(b?.slug)?b.slug.join("/"):"",d=f.f.find(b=>{let d=b._raw.flattenedPath.split("/"),e=d[0],f=d.slice(1).join("/");return e===(a||"en")&&f===c});if(!d)return{notFound:!0};let{html:e,items:h}=(0,k.f)(d.body.html),i=(0,j.k)(f.f),l=i.find(a=>a.slug===d.slug&&a.locale===d.locale);return{props:{html:e,tableOfContents:h,description:l.description,seo:{title:l.title,canonical:l.url,markdownUrl:l.markdownUrl,availableLocales:(0,j.r)(l,i)},...await (0,g.serverSideTranslations)(a||"en",["common"])}}};a.s(["default",0,({html:a,tableOfContents:b,seo:c,description:e})=>(0,d.jsx)(i.f,{hasTableOfContents:!0,seo:c,description:e,children:(0,d.jsx)(h.f,{html:a,tableOfContents:b})}),"getStaticPaths",0,m,"getStaticProps",0,n]),c()}catch(a){c(a)}},!1),56414,a=>{a.s(["f",0,a=>{let b=[],c=new Map;return{html:a.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,(a,d,e,f)=>{var g;let h,i=f.match(/\s*\{#([a-zA-Z][\w-]*)\}\s*$/),j=i?f.slice(0,i.index):f,k=(g=j.replace(/<[^>]+>/g,""),h={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},g.replace(/&(#x[\da-f]+|#\d+|amp|apos|gt|lt|quot);/gi,(a,b)=>{let c=b.toLowerCase();return c.startsWith("#x")?String.fromCodePoint(Number.parseInt(c.slice(2),16)):c.startsWith("#")?String.fromCodePoint(Number.parseInt(c.slice(1),10)):h[c]||""})).trim();if(!k)return a;let l=e.match(/\sid=(['"])(.*?)\1/i)?.[2],m=i?.[1]||l||k.toLowerCase().replace(/[^\p{Letter}\p{Number}\s_-]/gu,"").trim().replace(/\s+/g,"-")||"section",n=c.get(m)||0,o=0===n?m:`${m}-${n}`,p=Number(d);if(c.set(m,n+1),b.push({id:o,level:p,title:k}),!i&&l&&l===o)return a;let q=e.replace(/\sid=(['"])(.*?)\1/i,"");return`<h${d}${q} id="${o}">${j}</h${d}>`}),items:b}}])},37180,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(16569),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/docs/[...slug]",pathname:"/docs/[...slug]",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/docs/[...slug]",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_15k8dkhlewzp2._.js.map