(()=>{"use strict";module.exports=[12946,a=>{var b=a.i(8171),c=a.i(27669),d=a.i(41910),e=a.i(60494),f=a.i(68210),g=a.i(64180);let h={linked:!1,installations:[]};var i=a.i(42931),j=a.i(88844);let k=i.default.section.withConfig({displayName:"GitHubSettingsPanel__Panel",componentId:"sc-754cd7e5-0"})`
  background: ${a=>a.theme.bgColorSecondary};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
  overflow: hidden;
`,l=i.default.div.withConfig({displayName:"GitHubSettingsPanel__PanelHeader",componentId:"sc-754cd7e5-1"})`
  padding: ${(0,j.f)(20)} ${(0,j.f)(20)} ${(0,j.f)(16)};
  border-bottom: 1px solid ${a=>a.theme.borderColor};
  background: ${a=>a.theme.sideBarHeaderBgColor};
`,m=i.default.div.withConfig({displayName:"GitHubSettingsPanel__PanelKicker",componentId:"sc-754cd7e5-2"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,j.f)(6)};
  color: ${a=>a.theme.accentColor};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: ${(0,j.f)(8)};
`,n=i.default.h2.withConfig({displayName:"GitHubSettingsPanel__PanelTitle",componentId:"sc-754cd7e5-3"})`
  font-size: ${(0,j.f)(20)};
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
`,o=i.default.p.withConfig({displayName:"GitHubSettingsPanel__PanelDesc",componentId:"sc-754cd7e5-4"})`
  margin: ${(0,j.f)(6)} 0 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  line-height: 1.6;
  max-width: ${(0,j.f)(640)};
`,p=i.default.div.withConfig({displayName:"GitHubSettingsPanel__PanelBody",componentId:"sc-754cd7e5-5"})`
  padding: ${(0,j.f)(20)};
`,q=i.default.div.withConfig({displayName:"GitHubSettingsPanel__LoadingText",componentId:"sc-754cd7e5-6"})`
  font-size: ${a=>a.theme.fontSm};
  color: ${a=>a.theme.disabledFontColor};
  padding: ${(0,j.f)(12)} 0;
`,r=i.default.div.withConfig({displayName:"GitHubSettingsPanel__ErrorBanner",componentId:"sc-754cd7e5-7"})`
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: rgba(255, 77, 79, 0.1);
  border: 1px solid rgba(255, 77, 79, 0.24);
  border-radius: ${a=>a.theme.midBorderRadius};
  color: #ff7875;
  font-size: ${a=>a.theme.fontSm};
  margin-bottom: ${(0,j.f)(14)};
`,s=i.default.div.withConfig({displayName:"GitHubSettingsPanel__SuccessBanner",componentId:"sc-754cd7e5-8"})`
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: rgba(82, 196, 26, 0.1);
  border: 1px solid rgba(82, 196, 26, 0.24);
  border-radius: ${a=>a.theme.midBorderRadius};
  color: #73d13d;
  font-size: ${a=>a.theme.fontSm};
  margin-bottom: ${(0,j.f)(14)};
`,t=i.default.div.withConfig({displayName:"GitHubSettingsPanel__StatusGrid",componentId:"sc-754cd7e5-9"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${(0,j.f)(10)};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,u=i.default.div.withConfig({displayName:"GitHubSettingsPanel__StatusItem",componentId:"sc-754cd7e5-10"})`
  min-height: ${(0,j.f)(62)};
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
`,v=i.default.div.withConfig({displayName:"GitHubSettingsPanel__StatusLabel",componentId:"sc-754cd7e5-11"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1.4;
  margin-bottom: ${(0,j.f)(6)};
`,w=i.default.div.withConfig({displayName:"GitHubSettingsPanel__StatusValue",componentId:"sc-754cd7e5-12"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,j.f)(6)};
  color: ${a=>a.$connected?"#73d13d":a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
`,x=i.default.span.withConfig({displayName:"GitHubSettingsPanel__StatusDot",componentId:"sc-754cd7e5-13"})`
  width: ${(0,j.f)(8)};
  height: ${(0,j.f)(8)};
  border-radius: 50%;
  background: ${a=>a.$connected?"#73d13d":a.theme.disabledFontColor};
`,y=i.default.div.withConfig({displayName:"GitHubSettingsPanel__StatusText",componentId:"sc-754cd7e5-14"})`
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  overflow-wrap: anywhere;
`,z=i.default.div.withConfig({displayName:"GitHubSettingsPanel__AccountSummary",componentId:"sc-754cd7e5-15"})`
  display: flex;
  align-items: center;
  gap: ${(0,j.f)(7)};
  min-width: 0;
`,A=i.default.img.withConfig({displayName:"GitHubSettingsPanel__AccountAvatar",componentId:"sc-754cd7e5-16"})`
  width: ${(0,j.f)(22)};
  height: ${(0,j.f)(22)};
  border-radius: 50%;
`,B=i.default.div.withConfig({displayName:"GitHubSettingsPanel__Actions",componentId:"sc-754cd7e5-17"})`
  display: flex;
  align-items: center;
  gap: ${(0,j.f)(10)};
  margin-top: ${(0,j.f)(16)};
  flex-wrap: wrap;
`,C=i.default.button.withConfig({displayName:"GitHubSettingsPanel__SaveButton",componentId:"sc-754cd7e5-18"})`
  min-height: ${(0,j.f)(32)};
  padding: 0 ${(0,j.f)(14)};
  background: ${a=>a.theme.accentColor};
  color: var(--on-accent);
  border: 1px solid ${a=>a.theme.accentColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.16s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,D=i.default.button.withConfig({displayName:"GitHubSettingsPanel__DeleteButton",componentId:"sc-754cd7e5-19"})`
  min-height: ${(0,j.f)(32)};
  padding: 0 ${(0,j.f)(14)};
  background: transparent;
  color: #ff7875;
  border: 1px solid rgba(255, 77, 79, 0.3);
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.16s ease,
    opacity 0.16s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 77, 79, 0.1);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,E=i.default.div.withConfig({displayName:"GitHubSettingsPanel__InstallationBody",componentId:"sc-754cd7e5-20"})`
  padding: ${(0,j.f)(20)};
  border-top: 1px solid ${a=>a.theme.borderColor};
`,F=i.default.div.withConfig({displayName:"GitHubSettingsPanel__InstallationList",componentId:"sc-754cd7e5-21"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,j.f)(8)};
`,G=i.default.div.withConfig({displayName:"GitHubSettingsPanel__InstallationItem",componentId:"sc-754cd7e5-22"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,j.f)(12)};
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,H=i.default.div.withConfig({displayName:"GitHubSettingsPanel__InstallationInfo",componentId:"sc-754cd7e5-23"})`
  min-width: 0;
`,I=i.default.span.withConfig({displayName:"GitHubSettingsPanel__AccessTag",componentId:"sc-754cd7e5-24"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,j.f)(20)};
  padding: 0 ${(0,j.f)(7)};
  background: rgba(82, 196, 26, 0.1);
  border: 1px solid rgba(82, 196, 26, 0.2);
  border-radius: ${a=>a.theme.smallBorderRadius};
  color: #73d13d;
  font-size: ${a=>a.theme.fontXs};
  font-weight: 600;
`,J=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepositoryBody",componentId:"sc-754cd7e5-25"})`
  padding: ${(0,j.f)(20)};
  border-top: 1px solid ${a=>a.theme.borderColor};
`,K=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepositoryHeader",componentId:"sc-754cd7e5-26"})`
  margin-bottom: ${(0,j.f)(12)};
`,L=i.default.h3.withConfig({displayName:"GitHubSettingsPanel__RepositoryTitle",componentId:"sc-754cd7e5-27"})`
  font-size: ${a=>a.theme.fontBase};
  font-weight: 700;
  margin: 0;
`,M=i.default.p.withConfig({displayName:"GitHubSettingsPanel__RepositoryDesc",componentId:"sc-754cd7e5-28"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  margin: ${(0,j.f)(4)} 0 0;
`,N=i.default.div.withConfig({displayName:"GitHubSettingsPanel__EmptyText",componentId:"sc-754cd7e5-29"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  padding: ${(0,j.f)(12)} 0;
`,O=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoList",componentId:"sc-754cd7e5-30"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,j.f)(8)};
  max-height: min(50vh, ${(0,j.f)(360)});
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: ${(0,j.f)(4)};
  scrollbar-color: ${a=>a.theme.scrollbarThumbColor}
    ${a=>a.theme.scrollbarTrackColor};
  scrollbar-width: thin;

  &:focus-visible {
    outline: none;
    scrollbar-color: ${a=>a.theme.primaryFontColor}
      ${a=>a.theme.scrollbarTrackColor};
  }

  @media (max-width: 640px) {
    max-height: min(52vh, ${(0,j.f)(320)});
  }
`,P=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoItem",componentId:"sc-754cd7e5-31"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,j.f)(12)};
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Q=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoInfo",componentId:"sc-754cd7e5-32"})`
  min-width: 0;
`,R=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoName",componentId:"sc-754cd7e5-33"})`
  font-size: ${a=>a.theme.fontSm};
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoDesc",componentId:"sc-754cd7e5-34"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1.5;
  margin-top: ${(0,j.f)(2)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T=i.default.div.withConfig({displayName:"GitHubSettingsPanel__RepoMeta",componentId:"sc-754cd7e5-35"})`
  display: flex;
  align-items: center;
  gap: ${(0,j.f)(8)};
  margin-top: ${(0,j.f)(6)};
`,U=i.default.span.withConfig({displayName:"GitHubSettingsPanel__RepoTag",componentId:"sc-754cd7e5-36"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,j.f)(20)};
  padding: 0 ${(0,j.f)(7)};
  background: ${a=>a.$private?"rgba(255, 77, 79, 0.1)":"rgba(82, 196, 26, 0.1)"};
  border: 1px solid
    ${a=>a.$private?"rgba(255, 77, 79, 0.2)":"rgba(82, 196, 26, 0.2)"};
  border-radius: ${a=>a.theme.smallBorderRadius};
  color: ${a=>a.$private?"#ff7875":"#73d13d"};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 600;
`,V=i.default.span.withConfig({displayName:"GitHubSettingsPanel__RepoUpdated",componentId:"sc-754cd7e5-37"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
`,W=i.default.button.withConfig({displayName:"GitHubSettingsPanel__OpenButton",componentId:"sc-754cd7e5-38"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,j.f)(6)};
  min-height: ${(0,j.f)(30)};
  padding: 0 ${(0,j.f)(12)};
  background: ${a=>a.theme.buttonBgColor};
  color: ${a=>a.theme.primaryFontColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease;

  &:hover:not(:disabled) {
    background: ${a=>a.theme.hoverColor};
    border-color: ${a=>a.theme.borderColorFocused};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,X=i.default.div.withConfig({displayName:"GitHubSettingsPanel__HelpBody",componentId:"sc-754cd7e5-39"})`
  padding: ${(0,j.f)(20)};
  border-top: 1px solid ${a=>a.theme.borderColor};
  background: ${a=>a.theme.bgColor};
`,Y=i.default.h3.withConfig({displayName:"GitHubSettingsPanel__HelpTitle",componentId:"sc-754cd7e5-40"})`
  font-size: ${a=>a.theme.fontBase};
  font-weight: 700;
  margin: 0 0 ${(0,j.f)(12)};
`,Z=i.default.div.withConfig({displayName:"GitHubSettingsPanel__HelpGrid",componentId:"sc-754cd7e5-41"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${(0,j.f)(10)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,$=i.default.div.withConfig({displayName:"GitHubSettingsPanel__HelpItem",componentId:"sc-754cd7e5-42"})`
  display: grid;
  grid-template-columns: ${(0,j.f)(24)} minmax(0, 1fr);
  gap: ${(0,j.f)(8)};
  align-items: flex-start;
`,_=i.default.span.withConfig({displayName:"GitHubSettingsPanel__HelpNumber",componentId:"sc-754cd7e5-43"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,j.f)(24)};
  height: ${(0,j.f)(24)};
  background: ${a=>a.theme.accentColor};
  border-radius: 50%;
  color: var(--on-accent);
  font-size: ${a=>a.theme.fontXs};
  font-weight: 700;
`,aa=i.default.span.withConfig({displayName:"GitHubSettingsPanel__HelpText",componentId:"sc-754cd7e5-44"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  line-height: 1.55;
`,ab=i.default.p.withConfig({displayName:"GitHubSettingsPanel__HelpNote",componentId:"sc-754cd7e5-45"})`
  margin: ${(0,j.f)(14)} 0 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  line-height: 1.55;
`,ac=i.default.a.withConfig({displayName:"GitHubSettingsPanel__HelpLink",componentId:"sc-754cd7e5-46"})`
  color: ${a=>a.theme.accentColor};
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
`;a.s(["f",0,function({isAuthenticated:a,authLoading:i}){let{connection:j,loading:ad,startingAction:ae,disconnecting:af,deletingInstallationId:ag,error:ah,success:ai,repos:aj,loadingRepos:ak,repoError:al,importingRepo:am,handleStartConnection:an,handleStartInstallation:ao,handleDeleteConnection:ap,handleDeleteInstallation:aq,handleOpenWorkspace:ar}=function(a,b){let i=(0,d.useRouter)(),[j,k]=(0,c.useState)(null),[l,m]=(0,c.useState)(!0),[n,o]=(0,c.useState)(null),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)(null),[t,u]=(0,c.useState)(""),[v,w]=(0,c.useState)(""),[x,y]=(0,c.useState)([]),[z,A]=(0,c.useState)(!1),[B,C]=(0,c.useState)(""),{importingRepo:D,importError:E,importRepository:F}=(0,e.f)(),G=(0,c.useCallback)(async()=>{A(!0),C("");try{let a=await f.f.listRepos(1,100);y(a)}catch(a){C(a instanceof Error&&a.message?a.message:"Failed to load repositories")}finally{A(!1)}},[]),H=(0,c.useCallback)(async()=>{m(!0),u("");try{let a=await f.f.getConnection();k(a),a.linked?G():(y([]),C(""))}catch(a){u(a instanceof Error&&a.message?a.message:"Failed to load GitHub connection")}finally{m(!1)}},[G]);(0,c.useEffect)(()=>{a&&!b&&H()},[b,a,H]),(0,c.useEffect)(()=>{i.isReady&&("linked"===i.query.github?w("GitHub account linked successfully."):"installed"===i.query.github?w("GitHub repository access authorized successfully."):"string"==typeof i.query.github_error&&u("GitHub authorization was not completed. Please try again."))},[i.isReady,i.query.github,i.query.github_error]);let I=async a=>{if(!n){o(a),u(""),w("");try{let b=i.locale===i.defaultLocale?void 0:i.locale,{authorizeUrl:c}="connection"===a?await f.f.startConnection(b):await f.f.startInstallation(void 0,b);(0,g.f)(c)}catch(a){u(a instanceof Error&&a.message?a.message:"Failed to start GitHub authorization"),o(null)}}};return{connection:j,loading:l,startingAction:n,disconnecting:p,deletingInstallationId:r,error:t||E,success:v,repos:x,loadingRepos:z,repoError:B,importingRepo:D,handleStartConnection:()=>I("connection"),handleStartInstallation:()=>I("installation"),handleDeleteConnection:async()=>{if(confirm("Unlink this GitHub account from MarkFlowy?")){q(!0),u(""),w("");try{await f.f.deleteConnection(),k(h),y([]),w("GitHub account unlinked successfully.")}catch(a){u(a instanceof Error&&a.message?a.message:"Failed to unlink GitHub account")}finally{q(!1)}}},handleDeleteInstallation:async a=>{if(confirm("Remove this authorization record from your MarkFlowy account? This does not uninstall the GitHub App or change access on GitHub.")){s(a),u(""),w("");try{await f.f.deleteInstallation(a),w("GitHub repository authorization removed from this MarkFlowy account. The GitHub App remains installed."),await H()}catch(a){u(a instanceof Error&&a.message?a.message:"Failed to remove the GitHub authorization from MarkFlowy")}finally{s(null)}}},handleOpenWorkspace:async a=>{let b=await F(a);b&&await i.push(`/workspace/${encodeURIComponent(b.id)}`)}}}(a,i),as=j?.linked===!0,at=!!j?.installations.length,au=!!(ae||af||ag);return(0,b.jsxs)(k,{id:"github",children:[(0,b.jsxs)(l,{children:[(0,b.jsxs)(m,{children:[(0,b.jsx)("i",{className:"ri-github-fill"}),"GitHub"]}),(0,b.jsx)(n,{children:"GitHub Integration"}),(0,b.jsx)(o,{children:"Link your GitHub identity, then authorize the GitHub App for the repositories you want to use in MarkFlowy. Personal access tokens are not required."})]}),(0,b.jsxs)(p,{children:[ad&&(0,b.jsx)(q,{children:"Loading GitHub configuration..."}),ah&&(0,b.jsx)(r,{children:ah}),ai&&(0,b.jsx)(s,{children:ai}),!ad&&j&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(t,{children:[(0,b.jsxs)(u,{children:[(0,b.jsx)(v,{children:"GitHub identity"}),(0,b.jsxs)(w,{$connected:as,children:[(0,b.jsx)(x,{$connected:as}),as?"Linked":"Not linked"]})]}),as&&j.login&&(0,b.jsxs)(u,{children:[(0,b.jsx)(v,{children:"Linked account"}),(0,b.jsxs)(z,{children:[j.avatarUrl&&(0,b.jsx)(A,{src:j.avatarUrl,alt:"","aria-hidden":"true"}),(0,b.jsxs)(y,{children:["@",j.login]})]})]}),as&&(0,b.jsxs)(u,{children:[(0,b.jsx)(v,{children:"Repository authorizations"}),(0,b.jsx)(y,{children:j.installations.length})]}),as&&j.linkedAt&&(0,b.jsxs)(u,{children:[(0,b.jsx)(v,{children:"Linked at"}),(0,b.jsx)(y,{children:new Date(j.linkedAt).toLocaleString()})]})]}),(0,b.jsx)(B,{children:as?(0,b.jsx)(D,{type:"button",onClick:ap,disabled:au,children:af?"Unlinking...":"Unlink GitHub Account"}):(0,b.jsx)(C,{type:"button",onClick:an,disabled:au,children:"connection"===ae?"Opening GitHub...":"Link GitHub Account"})})]})]}),as&&j&&(0,b.jsxs)(E,{children:[(0,b.jsxs)(K,{children:[(0,b.jsx)(L,{children:"Repository Access"}),(0,b.jsx)(M,{children:"Install the MarkFlowy GitHub App for a personal account or organization, and choose which repositories it can access."})]}),0===j.installations.length?(0,b.jsx)(N,{children:"No GitHub App repository access has been authorized yet."}):(0,b.jsx)(F,{children:j.installations.map(a=>(0,b.jsxs)(G,{children:[(0,b.jsxs)(H,{children:[(0,b.jsx)(R,{children:a.accountLogin}),(0,b.jsxs)(T,{children:[(0,b.jsx)(I,{children:a.accountType}),(0,b.jsx)(V,{children:"all"===a.repositorySelection?"All repositories":"Selected repositories"})]})]}),(0,b.jsx)(D,{type:"button",onClick:()=>aq(a.installationId),disabled:au,children:ag===a.installationId?"Removing from MarkFlowy...":"Remove from MarkFlowy"})]},a.installationId))}),(0,b.jsx)(B,{children:(0,b.jsx)(C,{type:"button",onClick:ao,disabled:au,children:"installation"===ae?"Opening GitHub...":at?"Add or Update Repository Access":"Authorize Repositories"})})]}),as&&(0,b.jsxs)(J,{children:[(0,b.jsxs)(K,{children:[(0,b.jsx)(L,{children:"Authorized Repositories"}),(0,b.jsx)(M,{children:"Select a repository to open or create a workspace."})]}),ak&&(0,b.jsx)(q,{children:"Loading repositories..."}),al&&(0,b.jsx)(r,{children:al}),!ak&&0===aj.length&&!al&&(0,b.jsx)(N,{children:"No repositories found."}),(0,b.jsx)(O,{role:"region","aria-label":"Authorized repositories",tabIndex:aj.length>0?0:void 0,children:aj.map(a=>(0,b.jsxs)(P,{children:[(0,b.jsxs)(Q,{children:[(0,b.jsx)(R,{children:a.full_name}),a.description&&(0,b.jsx)(S,{children:a.description}),(0,b.jsxs)(T,{children:[(0,b.jsx)(U,{$private:a.private,children:a.private?"Private":"Public"}),(0,b.jsxs)(V,{children:["Updated ",new Date(a.updated_at).toLocaleDateString()]})]})]}),(0,b.jsxs)(W,{type:"button",onClick:()=>ar(a),disabled:!!am,children:[(0,b.jsx)("i",{className:"ri-folder-open-line"}),am===a.full_name?"Opening...":"Open"]})]},`${a.installationId}:${a.id}`))})]}),(0,b.jsxs)(X,{children:[(0,b.jsx)(Y,{children:"How GitHub access works"}),(0,b.jsxs)(Z,{children:[(0,b.jsxs)($,{children:[(0,b.jsx)(_,{children:"1"}),(0,b.jsx)(aa,{children:"Link your GitHub identity to your MarkFlowy account."})]}),(0,b.jsxs)($,{children:[(0,b.jsx)(_,{children:"2"}),(0,b.jsx)(aa,{children:"Install the MarkFlowy GitHub App and select repository access."})]}),(0,b.jsxs)($,{children:[(0,b.jsx)(_,{children:"3"}),(0,b.jsx)(aa,{children:"Import an authorized repository as a workspace. Tokens stay server-side."})]})]}),(0,b.jsxs)(ab,{children:["To revoke or change access on GitHub, manage or uninstall the app in"," ",(0,b.jsx)(ac,{href:"https://github.com/settings/installations",target:"_blank",rel:"noopener noreferrer",children:"GitHub Settings"}),"."]})]})]})}],12946)},35344,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(12946),f=a.i(79297),g=a.i(1257),h=a.i(27669),i=a.i(42931),j=a.i(88844),k=a.i(91854),l=a.i(99141),m=b([l]);[l]=m.then?(await m)():m;let o=async({locale:a})=>({props:{...await (0,k.serverSideTranslations)(a||"en",["common"])}});function n(a){return a?new Date(a).toLocaleString():"Not available"}let p=i.default.div.withConfig({displayName:"settings__Container",componentId:"sc-d8600b95-0"})`
  min-height: 100vh;
  background: ${a=>a.theme.bgColor};
  color: ${a=>a.theme.primaryFontColor};
  font-family: ${a=>a.theme.fontFamily};
`,q=i.default.header.withConfig({displayName:"settings__Header",componentId:"sc-d8600b95-1"})`
  padding: ${(0,j.f)(24)} ${(0,j.f)(28)} ${(0,j.f)(20)};
  border-bottom: 1px solid ${a=>a.theme.borderColor};
  background: ${a=>a.theme.bgColorSecondary};

  @media (max-width: 720px) {
    padding: ${(0,j.f)(18)} ${(0,j.f)(14)} ${(0,j.f)(16)};
  }
`,r=(0,i.default)(g.default).withConfig({displayName:"settings__BackLink",componentId:"sc-d8600b95-2"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,j.f)(6)};
  min-height: ${(0,j.f)(28)};
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${(0,j.f)(14)};

  &:hover {
    color: ${a=>a.theme.primaryFontColor};
  }
`,s=i.default.div.withConfig({displayName:"settings__HeaderMain",componentId:"sc-d8600b95-3"})`
  display: flex;
  align-items: center;
  gap: ${(0,j.f)(12)};
`,t=i.default.div.withConfig({displayName:"settings__HeaderIcon",componentId:"sc-d8600b95-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,j.f)(40)};
  height: ${(0,j.f)(40)};
  background: ${a=>a.theme.buttonBgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
  color: ${a=>a.theme.accentColor};
  font-size: ${(0,j.f)(20)};
  flex: 0 0 auto;
`,u=i.default.div.withConfig({displayName:"settings__HeaderCopy",componentId:"sc-d8600b95-5"})`
  min-width: 0;
`,v=i.default.h1.withConfig({displayName:"settings__Title",componentId:"sc-d8600b95-6"})`
  font-size: ${(0,j.f)(26)};
  line-height: 1.25;
  font-weight: 700;
  margin: 0;
`,w=i.default.p.withConfig({displayName:"settings__Subtitle",componentId:"sc-d8600b95-7"})`
  margin: ${(0,j.f)(4)} 0 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
`,x=i.default.div.withConfig({displayName:"settings__Shell",componentId:"sc-d8600b95-8"})`
  display: grid;
  grid-template-columns: ${(0,j.f)(180)} minmax(0, ${(0,j.f)(860)});
  gap: ${(0,j.f)(24)};
  align-items: start;
  padding: ${(0,j.f)(24)} ${(0,j.f)(28)} ${(0,j.f)(32)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 720px) {
    padding: ${(0,j.f)(16)} ${(0,j.f)(12)} ${(0,j.f)(24)};
  }
`,y=i.default.nav.withConfig({displayName:"settings__Sidebar",componentId:"sc-d8600b95-9"})`
  position: sticky;
  top: ${(0,j.f)(16)};
  display: flex;
  flex-direction: column;
  gap: ${(0,j.f)(6)};

  @media (max-width: 860px) {
    position: static;
    flex-direction: row;
    overflow-x: auto;
  }
`,z=i.default.a.withConfig({displayName:"settings__SidebarLink",componentId:"sc-d8600b95-10"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,j.f)(8)};
  min-height: ${(0,j.f)(34)};
  padding: 0 ${(0,j.f)(10)};
  background: ${a=>a.theme.buttonBgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${a=>a.theme.hoverColor};
    border-color: ${a=>a.theme.borderColorFocused};
  }
`,A=i.default.main.withConfig({displayName:"settings__Main",componentId:"sc-d8600b95-11"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,j.f)(18)};
`,B=i.default.section.withConfig({displayName:"settings__ProfilePanel",componentId:"sc-d8600b95-12"})`
  background: ${a=>a.theme.bgColorSecondary};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
  overflow: hidden;
`,C=i.default.div.withConfig({displayName:"settings__PanelHeader",componentId:"sc-d8600b95-13"})`
  padding: ${(0,j.f)(20)} ${(0,j.f)(20)} ${(0,j.f)(16)};
  border-bottom: 1px solid ${a=>a.theme.borderColor};
  background: ${a=>a.theme.sideBarHeaderBgColor};
`,D=i.default.div.withConfig({displayName:"settings__PanelKicker",componentId:"sc-d8600b95-14"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,j.f)(6)};
  color: ${a=>a.theme.accentColor};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 700;
  margin-bottom: ${(0,j.f)(8)};
`,E=i.default.h2.withConfig({displayName:"settings__PanelTitle",componentId:"sc-d8600b95-15"})`
  font-size: ${(0,j.f)(20)};
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
`,F=i.default.p.withConfig({displayName:"settings__PanelDesc",componentId:"sc-d8600b95-16"})`
  margin: ${(0,j.f)(6)} 0 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  line-height: 1.6;
`,G=i.default.div.withConfig({displayName:"settings__PanelBody",componentId:"sc-d8600b95-17"})`
  padding: ${(0,j.f)(20)};
`,H=i.default.div.withConfig({displayName:"settings__ProfileSummary",componentId:"sc-d8600b95-18"})`
  display: flex;
  align-items: center;
  gap: ${(0,j.f)(12)};
  margin-bottom: ${(0,j.f)(18)};
`,I=i.default.img.withConfig({displayName:"settings__AvatarImage",componentId:"sc-d8600b95-19"})`
  width: ${(0,j.f)(52)};
  height: ${(0,j.f)(52)};
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${a=>a.theme.borderColor};
`,J=i.default.div.withConfig({displayName:"settings__AvatarFallback",componentId:"sc-d8600b95-20"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,j.f)(52)};
  height: ${(0,j.f)(52)};
  border-radius: 50%;
  background: ${a=>a.theme.accentColorFocused};
  border: 1px solid ${a=>a.theme.borderColor};
  color: ${a=>a.theme.accentColor};
  font-size: ${(0,j.f)(18)};
  font-weight: 800;
`,K=i.default.div.withConfig({displayName:"settings__ProfileCopy",componentId:"sc-d8600b95-21"})`
  min-width: 0;
`,L=i.default.div.withConfig({displayName:"settings__ProfileName",componentId:"sc-d8600b95-22"})`
  font-size: ${(0,j.f)(18)};
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,M=i.default.div.withConfig({displayName:"settings__ProfileEmail",componentId:"sc-d8600b95-23"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontSm};
  overflow-wrap: anywhere;
`,N=i.default.div.withConfig({displayName:"settings__InfoGrid",componentId:"sc-d8600b95-24"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(0,j.f)(10)};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,O=i.default.div.withConfig({displayName:"settings__InfoItem",componentId:"sc-d8600b95-25"})`
  min-height: ${(0,j.f)(64)};
  padding: ${(0,j.f)(10)} ${(0,j.f)(12)};
  background: ${a=>a.theme.bgColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.midBorderRadius};
`,P=i.default.div.withConfig({displayName:"settings__InfoLabel",componentId:"sc-d8600b95-26"})`
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1.4;
  margin-bottom: ${(0,j.f)(6)};
`,Q=i.default.div.withConfig({displayName:"settings__InfoValue",componentId:"sc-d8600b95-27"})`
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 600;
  overflow-wrap: anywhere;
`,R=i.default.div.withConfig({displayName:"settings__SessionAction",componentId:"sc-d8600b95-28"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(0,j.f)(18)};

  @media (max-width: 680px) {
    align-items: stretch;
    flex-direction: column;
  }
`,S=i.default.div.withConfig({displayName:"settings__SessionCopy",componentId:"sc-d8600b95-29"})`
  min-width: 0;
`,T=i.default.div.withConfig({displayName:"settings__SessionTitle",componentId:"sc-d8600b95-30"})`
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 700;
  overflow-wrap: anywhere;
`,U=i.default.p.withConfig({displayName:"settings__SessionDescription",componentId:"sc-d8600b95-31"})`
  margin: ${(0,j.f)(5)} 0 0;
  color: ${a=>a.theme.disabledFontColor};
  font-size: ${a=>a.theme.fontXs};
  line-height: 1.5;
`,V=i.default.div.withConfig({displayName:"settings__LogoutConfirmation",componentId:"sc-d8600b95-32"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${(0,j.f)(7)};

  @media (max-width: 680px) {
    align-items: stretch;
  }
`,W=i.default.div.withConfig({displayName:"settings__LogoutConfirmText",componentId:"sc-d8600b95-33"})`
  color: ${a=>a.theme.primaryFontColor};
  font-size: ${a=>a.theme.fontXs};
  font-weight: 700;
`,X=i.default.div.withConfig({displayName:"settings__LogoutConfirmActions",componentId:"sc-d8600b95-34"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,j.f)(8)};
`,Y=i.default.button.withConfig({displayName:"settings__CancelLogoutButton",componentId:"sc-d8600b95-35"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${(0,j.f)(34)};
  padding: 0 ${(0,j.f)(14)};
  background: ${a=>a.theme.buttonBgColor};
  color: ${a=>a.theme.primaryFontColor};
  border: 1px solid ${a=>a.theme.borderColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 700;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${a=>a.theme.hoverColor};
    border-color: ${a=>a.theme.borderColorFocused};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,Z=i.default.button.withConfig({displayName:"settings__SignOutButton",componentId:"sc-d8600b95-36"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,j.f)(7)};
  min-height: ${(0,j.f)(34)};
  padding: 0 ${(0,j.f)(14)};
  background: transparent;
  color: ${a=>a.theme.dangerColor};
  border: 1px solid ${a=>a.theme.dangerColor};
  border-radius: ${a=>a.theme.smallBorderRadius};
  font-size: ${a=>a.theme.fontSm};
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.16s ease,
    opacity 0.16s ease;

  &:hover:not(:disabled) {
    background: ${a=>a.theme.accentColorFocused};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &[aria-busy='true'] i {
    animation: spin 0.8s linear infinite;
  }
`,$=i.default.div.withConfig({displayName:"settings__LoadingContainer",componentId:"sc-d8600b95-37"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${a=>a.theme.bgColor};
`,_=i.default.div.withConfig({displayName:"settings__LoadingSpinner",componentId:"sc-d8600b95-38"})`
  width: ${(0,j.f)(40)};
  height: ${(0,j.f)(40)};
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${a=>a.theme.accentColor};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;a.s(["default",0,function(){let{loading:a,isAuthenticated:b,logout:c,user:g}=(0,f.F)(!0),[i,j]=(0,h.useState)("idle"),k="logging-out"===i,m=async()=>{k||(j("logging-out"),await c())};if(a)return(0,d.jsx)($,{children:(0,d.jsx)(_,{})});if(!b||!g)return null;let o=g.displayName||g.email||"User",aa=o.split(/\s+|@/).filter(Boolean).slice(0,2).map(a=>a[0]?.toUpperCase()).join("")||"U";return(0,d.jsxs)(p,{children:[(0,d.jsxs)(q,{children:[(0,d.jsxs)(r,{href:"/workspace",children:[(0,d.jsx)("i",{className:"ri-arrow-left-line"}),"Workspaces"]}),(0,d.jsxs)(s,{children:[(0,d.jsx)(t,{children:(0,d.jsx)("i",{className:"ri-user-settings-line"})}),(0,d.jsxs)(u,{children:[(0,d.jsx)(v,{children:"Personal Settings"}),(0,d.jsx)(w,{children:"Manage basic information and connected services."})]}),(0,d.jsx)(l.f,{})]})]}),(0,d.jsxs)(x,{children:[(0,d.jsxs)(y,{"aria-label":"Settings navigation",children:[(0,d.jsxs)(z,{href:"#basic",children:[(0,d.jsx)("i",{className:"ri-user-line"}),"Basic Info"]}),(0,d.jsxs)(z,{href:"#github",children:[(0,d.jsx)("i",{className:"ri-github-fill"}),"GitHub"]}),(0,d.jsxs)(z,{href:"#session",children:[(0,d.jsx)("i",{className:"ri-logout-box-r-line"}),"Session"]})]}),(0,d.jsxs)(A,{children:[(0,d.jsxs)(B,{id:"basic",children:[(0,d.jsxs)(C,{children:[(0,d.jsxs)(D,{children:[(0,d.jsx)("i",{className:"ri-user-line"}),"Account"]}),(0,d.jsx)(E,{children:"Basic Information"}),(0,d.jsx)(F,{children:"Your MarkFlowy account profile for the web workspace."})]}),(0,d.jsxs)(G,{children:[(0,d.jsxs)(H,{children:[g.avatarUrl?(0,d.jsx)(I,{src:g.avatarUrl,alt:o}):(0,d.jsx)(J,{children:aa}),(0,d.jsxs)(K,{children:[(0,d.jsx)(L,{children:o}),(0,d.jsx)(M,{children:g.email})]})]}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(O,{children:[(0,d.jsx)(P,{children:"Display name"}),(0,d.jsx)(Q,{children:g.displayName||"Not set"})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(P,{children:"Email"}),(0,d.jsx)(Q,{children:g.email})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(P,{children:"User ID"}),(0,d.jsx)(Q,{children:g.id})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(P,{children:"Created"}),(0,d.jsx)(Q,{children:n(g.createdAt)})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(P,{children:"Updated"}),(0,d.jsx)(Q,{children:n(g.updatedAt)})]})]})]})]}),(0,d.jsx)(e.f,{isAuthenticated:b,authLoading:a}),(0,d.jsxs)(B,{id:"session",children:[(0,d.jsxs)(C,{children:[(0,d.jsxs)(D,{children:[(0,d.jsx)("i",{className:"ri-shield-user-line"}),"Session"]}),(0,d.jsx)(E,{children:"Sign out"}),(0,d.jsx)(F,{children:"End this browser session without changing your account data."})]}),(0,d.jsx)(G,{children:(0,d.jsxs)(R,{children:[(0,d.jsxs)(S,{children:[(0,d.jsxs)(T,{children:["Signed in as ",g.email]}),(0,d.jsx)(U,{children:"You will need to sign in again to access remote workspaces and connected services."})]}),"idle"===i?(0,d.jsxs)(Z,{type:"button",onClick:()=>j("confirming"),children:[(0,d.jsx)("i",{className:"ri-logout-box-r-line","aria-hidden":"true"}),"Sign out"]}):(0,d.jsxs)(V,{role:"group","aria-label":"Confirm sign out",children:[(0,d.jsx)(W,{children:"Are you sure you want to sign out?"}),(0,d.jsxs)(X,{children:[(0,d.jsx)(Y,{type:"button",onClick:()=>j("idle"),disabled:k,autoFocus:!0,children:"Cancel"}),(0,d.jsxs)(Z,{type:"button",onClick:m,disabled:k,"aria-busy":k,children:[(0,d.jsx)("i",{className:k?"ri-loader-4-line":"ri-logout-box-r-line","aria-hidden":"true"}),k?"Signing out…":"Confirm sign out"]})]})]})]})})]})]})]})]})},"getStaticProps",0,o]),c()}catch(a){c(a)}},!1),56145,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(35344),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/settings/index",pathname:"/settings",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/settings/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_1yqp7dk7m8zxt._.js.map