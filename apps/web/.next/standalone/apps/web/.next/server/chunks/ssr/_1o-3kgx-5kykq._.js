(()=>{"use strict";module.exports=[5340,a=>{a.i(40188),a.s([])},39600,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(91854),f=a.i(27669),g=a.i(42931);a.i(5340);var h=a.i(40188),i=a.i(87018),j=a.i(19730),k=a.i(20295),l=a.i(88844),m=b([i]);[i]=m.then?(await m)():m;let n=[{title:"Introduction",content:[{type:"paragraph",text:'MarkFlowy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our MarkFlowy application and services.'},{type:"paragraph",text:"Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the application."}]},{title:"Information We Do Not Collect",content:[{type:"paragraph",text:"MarkFlowy is designed with privacy in mind. We do not collect or store:"},{type:"list",items:["Your documents, files, or any content you create or edit","Your personal information such as name, email address, or phone number","Your browsing history or usage patterns","Any data from your local file system beyond what you explicitly choose to open"]}]},{title:"Local Data Storage",content:[{type:"paragraph",text:"All your data is stored locally on your device:"},{type:"list",items:["Your documents and files remain on your local file system","Application settings and configured provider credentials are stored in local application data files; these files are not an encrypted credential vault","Workspace information and bookmarks are stored locally on your device","AI chat history is stored locally; using an AI provider sends the selected conversation context to that provider"]}]},{title:"AI Features and Third-Party Services",content:[{type:"paragraph",text:"MarkFlowy offers optional AI-powered features that integrate with third-party AI providers:"},{type:"list",items:[{text:"<strong>OpenAI Integration:</strong> If you choose to use OpenAI features, your API key and requests are sent to the configured OpenAI-compatible endpoint. Your key is stored locally by the application, not on MarkFlowy servers.",isHtml:!0},{text:"<strong>DeepSeek Integration:</strong> Similar to OpenAI, your DeepSeek API key and requests are sent directly to DeepSeek's servers.",isHtml:!0},{text:"<strong>Ollama Integration:</strong> For local Ollama deployments, all AI processing happens on your local machine.",isHtml:!0},{text:"<strong>Google Gemini Integration:</strong> Your Gemini API key and requests are sent directly to Google's servers.",isHtml:!0}]},{type:"paragraph",text:"Please review the respective privacy policies of these third-party providers:"},{type:"list",items:[{text:'<a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a>',isHtml:!0},{text:'<a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer">DeepSeek Privacy Policy</a>',isHtml:!0},{text:'<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>',isHtml:!0}]}]},{title:"Optional Error Reports",content:[{type:"paragraph",text:"Desktop error reporting is off by default, including after upgrading from a version without this setting. You can enable Share error reports in Settings → General → Application and turn it off at any time. Builds without an error-reporting endpoint do not send reports."},{type:"paragraph",text:"When enabled, reports go to Sentry and contain error types and locations in bundled application code. The application removes error messages, document content, local file paths, request details, credentials, user context and browsing breadcrumbs. Automatic session tracking, session replay and performance tracing are disabled. Sentry still receives the network connection, including its source IP address."},{type:"paragraph",text:'Turning reporting off stops new reports and discards pending application errors. It cannot recall a report already sent. See <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Sentry’s Privacy Policy</a> for its processing practices.'}]},{title:"Open Source and Transparency",content:[{type:"paragraph",text:"MarkFlowy is an open-source application. You can inspect our source code at any time to verify our privacy claims:"},{type:"list",items:[{text:'Source code is available on <a href="https://github.com/drl990114/MarkFlowy" target="_blank" rel="noopener noreferrer">GitHub</a>',isHtml:!0},"All data handling is transparent and auditable","Community contributions are welcome and reviewed"]}]},{title:"Data Security",content:[{type:"paragraph",text:"We implement appropriate technical and organizational measures to protect your data:"},{type:"list",items:["Local workspaces and recovery history are stored on your device","Remote workspaces, AI services and error reporting communicate with their respective providers when you use or enable them","Protect your device account and application data backups; local configuration files may contain credentials"]}]},{title:"Your Rights",content:[{type:"paragraph",text:"Since all your data is stored locally, you have complete control over your information:"},{type:"list",items:["You can access all your data directly on your file system","You can delete application settings by clearing the application data","Uninstalling the application may leave documents and application data behind; remove those separately if you want to delete them"]}]},{title:"Changes to This Privacy Policy",content:[{type:"paragraph",text:'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'},{type:"paragraph",text:"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."}]},{title:"Contact Us",content:[{type:"paragraph",text:"If you have any questions about this Privacy Policy, please contact us:"},{type:"list",items:[{text:'By visiting our GitHub repository: <a href="https://github.com/drl990114/MarkFlowy" target="_blank" rel="noopener noreferrer">https://github.com/drl990114/MarkFlowy</a>',isHtml:!0},"By creating an issue on our GitHub issues page"]}]}],o=async({locale:a})=>({props:{...await (0,e.serverSideTranslations)(a??"en",["common"])}}),p=g.default.div.withConfig({displayName:"privacy__PageLayout",componentId:"sc-d8e93b3b-0"})`
  background: ${a=>a.theme.bgColor};
  color: ${a=>a.theme.primaryFontColor};
  font-family: ${a=>a.theme.fontFamily};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,q=g.default.header.withConfig({displayName:"privacy__HeaderWrapper",componentId:"sc-d8e93b3b-1"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${a=>a.theme.bgColor};
`,r=g.default.main.withConfig({displayName:"privacy__MainContent",componentId:"sc-d8e93b3b-2"})`
  flex: 1;
  padding-top: ${(0,l.f)(112)};
`,s=g.default.div.withConfig({displayName:"privacy__ContentContainer",componentId:"sc-d8e93b3b-3"})`
  max-width: ${(0,l.f)(800)};
  margin: 0 auto;
  padding: ${(0,l.f)(40)} ${(0,l.f)(20)};

  ${(0,k.C)(g.css`
    padding: ${(0,l.f)(20)} ${(0,l.f)(16)};
  `)};
`,t=g.default.h1.withConfig({displayName:"privacy__PageTitle",componentId:"sc-d8e93b3b-4"})`
  font-size: ${(0,l.f)(42)};
  font-weight: 700;
  margin-bottom: ${(0,l.f)(8)};
  color: ${a=>a.theme.primaryFontColor};

  ${(0,k.C)(g.css`
    font-size: ${(0,l.f)(32)};
  `)};
`,u=g.default.p.withConfig({displayName:"privacy__LastUpdated",componentId:"sc-d8e93b3b-5"})`
  font-size: ${(0,l.f)(14)};
  color: ${a=>a.theme.unselectedFontColor};
  margin-bottom: ${(0,l.f)(40)};
`,v=g.default.section.withConfig({displayName:"privacy__Section",componentId:"sc-d8e93b3b-6"})`
  margin-bottom: ${(0,l.f)(32)};
`,w=g.default.h2.withConfig({displayName:"privacy__SectionTitle",componentId:"sc-d8e93b3b-7"})`
  font-size: ${(0,l.f)(24)};
  font-weight: 600;
  margin-bottom: ${(0,l.f)(16)};
  color: ${a=>a.theme.primaryFontColor};

  ${(0,k.C)(g.css`
    font-size: ${(0,l.f)(20)};
  `)};
`,x=g.default.p.withConfig({displayName:"privacy__Paragraph",componentId:"sc-d8e93b3b-8"})`
  font-size: ${(0,l.f)(16)};
  line-height: 1.7;
  margin-bottom: ${(0,l.f)(16)};
  color: ${a=>a.theme.primaryFontColor};
`,y=g.default.ul.withConfig({displayName:"privacy__List",componentId:"sc-d8e93b3b-9"})`
  margin-bottom: ${(0,l.f)(16)};
  padding-left: ${(0,l.f)(24)};
`,z=g.default.li.withConfig({displayName:"privacy__ListItem",componentId:"sc-d8e93b3b-10"})`
  font-size: ${(0,l.f)(16)};
  line-height: 1.7;
  margin-bottom: ${(0,l.f)(8)};
  color: ${a=>a.theme.primaryFontColor};

  a {
    color: ${a=>a.theme.primaryFontColor};
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;a.s(["default",0,function(){let[a,b]=f.default.useState(!0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.f,{title:"Privacy Policy - MarkFlowy",description:"Read the MarkFlowy privacy policy, including local storage and optional AI services.",availableLocales:["en"]}),(0,d.jsxs)(p,{children:[(0,d.jsx)(q,{children:(0,d.jsx)(i.f,{showSideNav:!1,isMobileNavFolded:a,onMobileNavToggle:()=>b(a=>!a)})}),(0,d.jsx)(r,{id:"main-content",children:(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{children:"Privacy Policy"}),(0,d.jsx)(u,{children:"Last Updated: September 27, 2026"}),n.map((a,b)=>(0,d.jsxs)(v,{children:[(0,d.jsxs)(w,{children:[b+1,". ",a.title]}),a.content.map((a,b)=>"paragraph"===a.type&&a.text?(0,d.jsx)(x,{dangerouslySetInnerHTML:{__html:a.text}},b):"list"===a.type&&a.items?(0,d.jsx)(y,{children:a.items.map((a,b)=>"string"==typeof a?(0,d.jsx)(z,{children:a},b):(0,d.jsx)(z,{dangerouslySetInnerHTML:{__html:a.text}},b))},b):null)]},b))]})}),(0,d.jsx)(h.f,{})]})]})},"getStaticProps",0,o]),c()}catch(a){c(a)}},!1),40373,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(39600),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/privacy",pathname:"/privacy",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/privacy",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_1o-3kgx-5kykq._.js.map