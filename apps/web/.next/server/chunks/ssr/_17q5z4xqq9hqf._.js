(()=>{"use strict";module.exports=[44996,a=>{var b=a.i(8171),c=a.i(27669),d=a.i(1257),e=a.i(41910),f=a.i(91854),g=a.i(21377),h=a.i(42931),i=a.i(19730),j=a.i(68210),k=a.i(78906),l=a.i(98253),m=a.i(88844);let n=h.default.main.withConfig({displayName:"callback__CallbackLayout",componentId:"sc-8b9e3c31-0"})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(0,m.f)(24)};
  background: ${a=>a.theme.bgColor};
`,o=h.default.div.withConfig({displayName:"callback__CallbackCard",componentId:"sc-8b9e3c31-1"})`
  width: 100%;
  max-width: ${(0,m.f)(360)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(0,m.f)(14)};
  padding: ${(0,m.f)(28)};
  background: ${a=>a.theme.bgColorSecondary};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${(0,m.f)(8)};
  text-align: center;
`,p=h.default.i.withConfig({displayName:"callback__GitHubIcon",componentId:"sc-8b9e3c31-2"})`
  font-size: ${(0,m.f)(32)};
  color: ${a=>a.theme.primaryFontColor};
`,q=h.default.h1.withConfig({displayName:"callback__CallbackTitle",componentId:"sc-8b9e3c31-3"})`
  margin: 0;
  font-size: ${(0,m.f)(20)};
  line-height: 1.35;
`,r=h.default.p.withConfig({displayName:"callback__ErrorMessage",componentId:"sc-8b9e3c31-4"})`
  margin: 0;
  color: #ff7875;
  font-size: ${(0,m.f)(13)};
  line-height: 1.55;
`,s=(0,h.default)(d.default).withConfig({displayName:"callback__BackLink",componentId:"sc-8b9e3c31-5"})`
  color: ${a=>a.theme.accentColor};
  font-size: ${(0,m.f)(14)};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,t=h.default.div.withConfig({displayName:"callback__LoadingSpinner",componentId:"sc-8b9e3c31-6"})`
  width: ${(0,m.f)(20)};
  height: ${(0,m.f)(20)};
  border: 2px solid ${a=>a.theme.borderColor};
  border-top-color: ${a=>a.theme.accentColor};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,u=async({locale:a})=>({props:{...await (0,f.serverSideTranslations)(a||"en",["common"])}});a.s(["default",0,function(){let a=(0,e.useRouter)(),{t:d}=(0,g.useTranslation)("common"),f=(0,c.useRef)(null),[h,m]=(0,c.useState)("");return(0,c.useEffect)(()=>{if(!a.isReady)return;if(!f.current){let a=new URLSearchParams(window.location.hash.slice(1)),b=a.get("ticket"),c=(0,l.h)(),e=a.get("return_to"),g=!e?.startsWith("/")||e.startsWith("//")||e.includes("\\")?"/workspace":e;if(window.history.replaceState(window.history.state,"",window.location.pathname),!b||!c){(0,l.I)(),m(d("auth.githubCallbackError"));return}f.current={ticket:b,returnTo:g,promise:j.f.exchangeLoginTicket(b,c).finally(l.I)}}let b=f.current,c=!1;return(async()=>{try{let d=await b.promise;if(c)return;(0,k.m)(d),await a.replace(b.returnTo)}catch(a){if(c)return;m(a instanceof Error&&a.message?a.message:d("auth.githubCallbackError"))}})(),()=>{c=!0}},[a,d]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.f,{title:`${d("auth.githubCompleting")} - MarkFlowy`}),(0,b.jsx)(n,{children:(0,b.jsxs)(o,{"aria-live":"polite",children:[(0,b.jsx)(p,{className:"ri-github-fill","aria-hidden":"true"}),(0,b.jsx)(q,{children:h?d("auth.githubCallbackFailed"):d("auth.githubCompleting")}),h?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{children:h}),(0,b.jsx)(s,{href:"/auth",children:d("auth.backToSignIn")})]}):(0,b.jsx)(t,{"aria-hidden":"true"})]})})]})},"getStaticProps",0,u])},76565,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(44996),j=a.i(9193),k=b([h]);[h]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/auth/github/callback",pathname:"/auth/github/callback",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/auth/github/callback",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_17q5z4xqq9hqf._.js.map