(()=>{"use strict";module.exports=[67168,a=>a.a(async(b,c)=>{try{var d=await a.y("markdown-to-jsx-85861d2a94ecb4b2");a.n(d),c()}catch(a){c(a)}},!0),90460,a=>{var b=a.i(42931);let c=b.styled.a.withConfig({displayName:"HighLightLink__HighlightLink",componentId:"sc-6474d635-0"})`
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
`;a.s(["f",0,c])},87322,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(90460),f=a.i(67168),g=a.i(21377),h=a.i(91854),i=a.i(27669),j=a.i(42931),k=a.i(55723),l=a.i(38667),m=a.i(65076),n=a.i(85763),o=b([f,k]);[f,k]=o.then?(await o)():o;let p=async({locale:a})=>{try{let b=await (0,n.f)();return{props:{releases:b,sidebarPages:b.map(a=>({href:a.tag_name,pathname:"",sections:[],title:a.name})),...await (0,h.serverSideTranslations)(a||"en",["common"])}}}catch(b){return console.error("Error fetching releases:",b),{props:{releases:[],sidebarPages:[],...await (0,h.serverSideTranslations)(a||"en",["common"])}}}},q=j.default.section.withConfig({displayName:"releases__Release",componentId:"sc-c134f3b5-0"})`
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
`,r=j.default.div.withConfig({displayName:"releases__ReleaseMeta",componentId:"sc-c134f3b5-1"})`
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
`,s=j.default.h2.withConfig({displayName:"releases__ReleaseTitle",componentId:"sc-c134f3b5-2"})`
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 27px;
  font-weight: 550;
  scroll-margin-top: 96px;
`;a.s(["default",0,function({releases:a,sidebarPages:b}){let{t:c}=(0,g.useTranslation)();return(0,d.jsxs)(k.f,{useDocsSidebarMenu:!1,pages:b,title:c("releases.title"),description:c("releases.meta_description"),children:[(0,d.jsx)("p",{className:"mf-eyebrow",children:c("site.releases.eyebrow")}),(0,d.jsxs)("p",{children:[c("releases.description_before_link")," ",(0,d.jsx)(e.f,{href:"https://github.com/drl990114/MarkFlowy/releases",target:"_blank",children:c("releases.github_link")})," ",c("releases.description_after_link")]}),a.length>0?a.map((a,b)=>(0,d.jsxs)(q,{id:a.tag_name,children:[(0,d.jsxs)(r,{children:[(0,d.jsx)("time",{dateTime:a.published_at||a.created_at,children:(a.published_at||a.created_at).slice(0,10)}),0===b&&(0,d.jsx)("span",{children:c("site.releases.latest")})]}),(0,d.jsxs)(s,{children:[a.name!==a.tag_name&&(0,d.jsx)("span",{id:a.name||void 0}),(0,d.jsx)("a",{href:`#${a.tag_name}`,children:a.name||a.tag_name})]}),(0,d.jsxs)(l.f,{href:a.html_url,target:"_blank",children:[c("releases.see_details")," ↗"]}),a.body&&(0,d.jsx)(m.f,{className:"mf-document-release",children:(0,d.jsx)(f.default,{options:{wrapper:i.Fragment},children:a.body})})]},a.id)):(0,d.jsx)("p",{children:c("site.releases.empty")})]})},"getStaticProps",0,p]),c()}catch(a){c(a)}},!1),85763,a=>{let b={},c=async(a="MarkFlowy")=>{let c=Date.now(),d=b[a];if(d&&Array.isArray(d.data)&&c-d.ts<864e5)return d.data;let e=await fetch(`https://api.github.com/repos/drl990114/${a}/releases?per_page=100`,{signal:AbortSignal.timeout(8e3),headers:{Accept:"application/vnd.github+json"}});if(!e.ok)throw Error(`GitHub releases request failed (${e.status})`);let f=await e.json();if(!Array.isArray(f))throw Error("GitHub releases response is not a list");let g={data:f,ts:c};return b[a]=g,g.data};a.s(["f",0,c])},47780,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(87322),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/releases",pathname:"/releases",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/releases",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=%5Broot-of-the-server%5D__0uh_md8ptw9n-._.js.map