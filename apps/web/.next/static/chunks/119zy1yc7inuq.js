(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[20250,46439,88913,e=>{var t=e.i(91398);e.i(64157);var n=e.i(71179),i=e.i(61813),o=e.i(3828),r=e.i(91788),s=e.i(28431),a=e.i(19174),l=e.i(29880),d=e.i(54410),c=e.i(20747);let u=a.U.button.withConfig({displayName:"NavButton",componentId:"sc-c4937232-0"})`
  ${l.f};
  background: transparent;
  cursor: pointer;
  flex: 0 0 auto;
  height: ${(0,d.f)(c.M)};
  padding: 0 ${(0,d.f)(10)};
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
`;function f({label:e,icon:n,value:i,options:a,onValueChange:l,disabled:d,className:c,style:h}){let[p,m]=(0,r.useState)(!1),[g,b]=(0,r.useState)(!1),y=(0,r.useRef)(!1),x=(0,o.useRouter)(),$=a.find(e=>e.value===i)?.label;return(0,r.useEffect)(()=>{let e=()=>m(!1);return x.events.on("routeChangeStart",e),()=>x.events.off("routeChangeStart",e)},[x.events]),(0,t.jsxs)(s.R,{open:p,onOpenChange:m,modal:!1,children:[(0,t.jsx)(s.X,{asChild:!0,children:(0,t.jsx)(u,{type:"button",className:["mf-preference-trigger",c].filter(Boolean).join(" "),style:h,disabled:d,"aria-label":e,title:$?`${e}: ${$}`:e,"data-instant":g,onPointerDown:()=>b(!1),onKeyDown:e=>{b(!0),"ArrowUp"===e.key&&(e.preventDefault(),y.current=!0,m(!0))},children:(0,t.jsx)("span",{className:"mf-preference-trigger-icon","aria-hidden":"true",children:n})})}),(0,t.jsxs)(s.L,{ref:e=>{e&&y.current&&(y.current=!1,queueMicrotask(()=>{if(!e.isConnected)return;let t=e.querySelectorAll('[role="menuitemradio"]:not([data-disabled])');t.item(t.length-1)?.focus()}))},className:"mf-preference-menu","aria-label":e,"data-instant":g,side:"bottom",align:"end",sideOffset:8,collisionPadding:12,loop:!0,onKeyDown:()=>b(!0),children:[(0,t.jsx)(s.B,{className:"mf-preference-menu-heading",children:e}),(0,t.jsx)(s.O,{value:i,onValueChange:e=>{let t=a.find(t=>t.value===e);t&&l(t.value)},children:a.map(e=>(0,t.jsxs)(s.T,{value:e.value,className:"mf-preference-menu-item",children:[(0,t.jsx)("span",{className:"mf-preference-option-icon","aria-hidden":"true",children:e.icon}),(0,t.jsx)("span",{className:"mf-preference-option-label",children:e.label}),(0,t.jsx)("i",{className:"ri-check-line mf-preference-option-check","aria-hidden":"true","data-checked":e.value===i})]},e.value))})]})]})}e.s(["f",0,u],46439),e.s(["f",0,f],88913);let h={system:"ri-computer-line",light:"ri-sun-line",dark:"ri-moon-line"},p=["system","light","dark"];e.s(["f",0,function(){let{t:e}=(0,n.f)(),{theme:o,setTheme:r,mounted:s}=(0,i.f)();return(0,t.jsx)(f,{label:e("navigation.theme"),icon:(0,t.jsx)("i",{className:h[o]}),value:o,disabled:!s,onValueChange:r,options:p.map(n=>({value:n,label:e(`theme.${n}`),icon:(0,t.jsx)("i",{className:h[n]})}))})}],20250)},53744,e=>{var t=e.i(91788),n=e.i(68306),i=e.i(44019);e.s(["f",0,function(){let[e,o]=(0,t.useState)(null),[r,s]=(0,t.useState)(""),a=(0,t.useRef)(0);return{importingRepo:e,importError:r,clearImportError:()=>s(""),importRepository:(0,t.useCallback)(async e=>{let t=++a.current;o(e.full_name),s("");try{let n=await i.f.importRepository(e.id,e.installationId);return t===a.current?n:null}catch(e){return t===a.current&&s((0,n.w)(e,"Failed to import GitHub repository")),null}finally{t===a.current&&o(null)}},[])}}])},44019,e=>{var t=e.i(40548);function n(e,t){return t?`${e}?locale=${encodeURIComponent(t)}`:e}e.s(["f",0,{startLogin:(e,i,o)=>t.k.post(n("/auth/github/start",o),{returnTo:e,browserNonce:i},{skipAuth:!0}),exchangeLoginTicket:(e,n)=>t.k.post("/auth/github/exchange",{ticket:e,browserNonce:n},{skipAuth:!0}),getConnection:()=>t.k.get("/github/connection"),startConnection:e=>t.k.post(n("/github/connection/start",e)),deleteConnection:()=>t.k.delete("/github/connection"),startInstallation:(e,i)=>t.k.post(n("/github/installations/start",i),{returnTo:e}),deleteInstallation:e=>t.k.delete(`/github/installations/${encodeURIComponent(e)}`),listRepos:(e=1,n=30)=>t.k.get(`/github/repos?page=${e}&per_page=${n}`),importRepository:(e,n)=>t.k.post("/workspaces/import/github",{repositoryId:e,installationId:n})}])},68306,e=>{var t=e.i(40548);let n=e=>`/workspaces/${encodeURIComponent(e)}/remote`,i=(e,t)=>[...e].sort((e,t)=>e.kind!==t.kind?"directory"===e.kind?-1:1:e.path.localeCompare(t.path)).map(e=>{let n,i="directory"===e.kind;return{id:(n=e.path,`remote-workspace-${t}-${n||"root"}`),name:e.name,kind:i?"dir":"file",path:e.path,ext:i?void 0:e.name.split(".").pop(),children:i?[]:void 0}});e.s(["w",0,function(e,n){let i=e instanceof t.z?e.status:void 0;return 403===i?"You do not have permission to access or update this remote workspace.":409===i?e instanceof t.z&&e.message.includes("repository identity changed")?e.message:"One or more staged files changed in the remote workspace. Reload them before retrying.":404===i?"The remote workspace, ref, or file could not be found.":e instanceof Error&&e.message?e.message:n},"a",0,{getDescriptor:e=>t.k.get(`${n(e)}/descriptor`),getRefs:e=>t.k.get(`${n(e)}/refs`),getTree(e,i){let o=new URLSearchParams;return i&&o.set("ref",i),o.set("recursive","0"),t.k.get(`${n(e)}/tree?${o.toString()}`)},getContents:(e,i,o)=>t.k.post(`${n(e)}/contents`,{path:i,...o?{ref:o}:{}}),saveFileContent(e,i,o){let{ref:r,...s}=o;return t.k.put(`${n(e)}/contents`,{path:i,...s,...r?{ref:r}:{}})},saveFileContents(e,i){let{ref:o,...r}=i;return t.k.put(`${n(e)}/contents/batch`,{...r,...o?{ref:o}:{}})},async loadTree(e,t){return i((await this.getTree(e,t)).entries,e)},async loadSubdirectory(e,t,n){let o=await this.getContents(e,t,n);if("directory"!==o.kind)throw Error(`"${t}" is a file, not a directory.`);return i(o.entries,e)},async loadFileContent(e,t,n){let i=await this.getContents(e,t,n);if("file"!==i.kind)throw Error(`"${t}" is a directory, not a file. Please select a file to open.`);if("utf-8"!==i.encoding)throw Error("This file is not UTF-8 text and cannot be edited in the workspace.");return{content:i.content,version:i.version}}}])},48547,e=>{var t=e.i(91788),n=e.i(3828),i=e.i(40548),o=e.i(72667);e.s(["F",0,function(e=!1){let r=(0,n.useRouter)(),[s,a]=(0,t.useState)({user:null,loading:!0,isAuthenticated:!1});(0,t.useEffect)(()=>{let t=!1;return(async()=>{try{if(!await i.k.restoreSession()){(0,o.F)(),!t&&(a({user:null,loading:!1,isAuthenticated:!1}),e&&await r.push("/auth"));return}let n=await i.k.get("/me");if(t)return;localStorage.setItem("user",JSON.stringify(n)),a({user:n,loading:!1,isAuthenticated:!0})}catch(n){console.error("Auth check failed:",n),(0,o.F)(),!t&&(a({user:null,loading:!1,isAuthenticated:!1}),e&&await r.push("/auth"))}})(),()=>{t=!0}},[e,r]);let l=async()=>{try{await i.k.logoutSession()}catch(e){console.error("Logout request failed:",e)}(0,o.F)(),a({user:null,loading:!1,isAuthenticated:!1}),await r.push("/auth")};return{...s,logout:l}},"R",0,function(){let e=(0,n.useRouter)(),[o,r]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{let t=!1;return(async()=>{try{if(await i.k.restoreSession()){t||await e.replace("/workspace");return}}finally{t||r(!1)}})(),()=>{t=!0}},[e]),o}])},22516,e=>{var t=e.i(91398),n=e.i(91788),i=e.i(3828),o=e.i(53744),r=e.i(44019),s=e.i(9020);let a={linked:!1,installations:[]};var l=e.i(19174),d=e.i(54410);function c({isAuthenticated:e,authLoading:l}){let{connection:d,loading:eo,startingAction:er,disconnecting:es,deletingInstallationId:ea,error:el,success:ed,repos:ec,loadingRepos:eu,repoError:ef,importingRepo:eh,handleStartConnection:ep,handleStartInstallation:em,handleDeleteConnection:eg,handleDeleteInstallation:eb,handleOpenWorkspace:ey}=function(e,t){let l=(0,i.useRouter)(),[d,c]=(0,n.useState)(null),[u,f]=(0,n.useState)(!0),[h,p]=(0,n.useState)(null),[m,g]=(0,n.useState)(!1),[b,y]=(0,n.useState)(null),[x,$]=(0,n.useState)(""),[w,C]=(0,n.useState)(""),[_,v]=(0,n.useState)([]),[j,k]=(0,n.useState)(!1),[S,I]=(0,n.useState)(""),{importingRepo:N,importError:U,importRepository:P}=(0,o.f)(),H=(0,n.useCallback)(async()=>{k(!0),I("");try{let e=await r.f.listRepos(1,100);v(e)}catch(e){I(e instanceof Error&&e.message?e.message:"Failed to load repositories")}finally{k(!1)}},[]),R=(0,n.useCallback)(async()=>{f(!0),$("");try{let e=await r.f.getConnection();c(e),e.linked?H():(v([]),I(""))}catch(e){$(e instanceof Error&&e.message?e.message:"Failed to load GitHub connection")}finally{f(!1)}},[H]);(0,n.useEffect)(()=>{e&&!t&&R()},[t,e,R]),(0,n.useEffect)(()=>{l.isReady&&("linked"===l.query.github?C("GitHub account linked successfully."):"installed"===l.query.github?C("GitHub repository access authorized successfully."):"string"==typeof l.query.github_error&&$("GitHub authorization was not completed. Please try again."))},[l.isReady,l.query.github,l.query.github_error]);let G=async e=>{if(!h){p(e),$(""),C("");try{let t=l.locale===l.defaultLocale?void 0:l.locale,{authorizeUrl:n}="connection"===e?await r.f.startConnection(t):await r.f.startInstallation(void 0,t);(0,s.f)(n)}catch(e){$(e instanceof Error&&e.message?e.message:"Failed to start GitHub authorization"),p(null)}}};return{connection:d,loading:u,startingAction:h,disconnecting:m,deletingInstallationId:b,error:x||U,success:w,repos:_,loadingRepos:j,repoError:S,importingRepo:N,handleStartConnection:()=>G("connection"),handleStartInstallation:()=>G("installation"),handleDeleteConnection:async()=>{if(confirm("Unlink this GitHub account from MarkFlowy?")){g(!0),$(""),C("");try{await r.f.deleteConnection(),c(a),v([]),C("GitHub account unlinked successfully.")}catch(e){$(e instanceof Error&&e.message?e.message:"Failed to unlink GitHub account")}finally{g(!1)}}},handleDeleteInstallation:async e=>{if(confirm("Remove this authorization record from your MarkFlowy account? This does not uninstall the GitHub App or change access on GitHub.")){y(e),$(""),C("");try{await r.f.deleteInstallation(e),C("GitHub repository authorization removed from this MarkFlowy account. The GitHub App remains installed."),await R()}catch(e){$(e instanceof Error&&e.message?e.message:"Failed to remove the GitHub authorization from MarkFlowy")}finally{y(null)}}},handleOpenWorkspace:async e=>{let t=await P(e);t&&await l.push(`/workspace/${encodeURIComponent(t.id)}`)}}}(e,l),ex=d?.linked===!0,e$=!!d?.installations.length,ew=!!(er||es||ea);return(0,t.jsxs)(u,{id:"github",children:[(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)("i",{className:"ri-github-fill"}),"GitHub"]}),(0,t.jsx)(p,{children:"GitHub Integration"}),(0,t.jsx)(m,{children:"Link your GitHub identity, then authorize the GitHub App for the repositories you want to use in MarkFlowy. Personal access tokens are not required."})]}),(0,t.jsxs)(g,{children:[eo&&(0,t.jsx)(b,{children:"Loading GitHub configuration..."}),el&&(0,t.jsx)(y,{children:el}),ed&&(0,t.jsx)(x,{children:ed}),!eo&&d&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)($,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{children:"GitHub identity"}),(0,t.jsxs)(_,{$connected:ex,children:[(0,t.jsx)(v,{$connected:ex}),ex?"Linked":"Not linked"]})]}),ex&&d.login&&(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{children:"Linked account"}),(0,t.jsxs)(k,{children:[d.avatarUrl&&(0,t.jsx)(S,{src:d.avatarUrl,alt:"","aria-hidden":"true"}),(0,t.jsxs)(j,{children:["@",d.login]})]})]}),ex&&(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{children:"Repository authorizations"}),(0,t.jsx)(j,{children:d.installations.length})]}),ex&&d.linkedAt&&(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{children:"Linked at"}),(0,t.jsx)(j,{children:new Date(d.linkedAt).toLocaleString()})]})]}),(0,t.jsx)(I,{children:ex?(0,t.jsx)(U,{type:"button",onClick:eg,disabled:ew,children:es?"Unlinking...":"Unlink GitHub Account"}):(0,t.jsx)(N,{type:"button",onClick:ep,disabled:ew,children:"connection"===er?"Opening GitHub...":"Link GitHub Account"})})]})]}),ex&&d&&(0,t.jsxs)(P,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(F,{children:"Repository Access"}),(0,t.jsx)(L,{children:"Install the MarkFlowy GitHub App for a personal account or organization, and choose which repositories it can access."})]}),0===d.installations.length?(0,t.jsx)(O,{children:"No GitHub App repository access has been authorized yet."}):(0,t.jsx)(H,{children:d.installations.map(e=>(0,t.jsxs)(R,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(D,{children:e.accountLogin}),(0,t.jsxs)(X,{children:[(0,t.jsx)(T,{children:e.accountType}),(0,t.jsx)(W,{children:"all"===e.repositorySelection?"All repositories":"Selected repositories"})]})]}),(0,t.jsx)(U,{type:"button",onClick:()=>eb(e.installationId),disabled:ew,children:ea===e.installationId?"Removing from MarkFlowy...":"Remove from MarkFlowy"})]},e.installationId))}),(0,t.jsx)(I,{children:(0,t.jsx)(N,{type:"button",onClick:em,disabled:ew,children:"installation"===er?"Opening GitHub...":e$?"Add or Update Repository Access":"Authorize Repositories"})})]}),ex&&(0,t.jsxs)(z,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(F,{children:"Authorized Repositories"}),(0,t.jsx)(L,{children:"Select a repository to open or create a workspace."})]}),eu&&(0,t.jsx)(b,{children:"Loading repositories..."}),ef&&(0,t.jsx)(y,{children:ef}),!eu&&0===ec.length&&!ef&&(0,t.jsx)(O,{children:"No repositories found."}),(0,t.jsx)(M,{role:"region","aria-label":"Authorized repositories",tabIndex:ec.length>0?0:void 0,children:ec.map(e=>(0,t.jsxs)(B,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(D,{children:e.full_name}),e.description&&(0,t.jsx)(q,{children:e.description}),(0,t.jsxs)(X,{children:[(0,t.jsx)(K,{$private:e.private,children:e.private?"Private":"Public"}),(0,t.jsxs)(W,{children:["Updated ",new Date(e.updated_at).toLocaleDateString()]})]})]}),(0,t.jsxs)(J,{type:"button",onClick:()=>ey(e),disabled:!!eh,children:[(0,t.jsx)("i",{className:"ri-folder-open-line"}),eh===e.full_name?"Opening...":"Open"]})]},`${e.installationId}:${e.id}`))})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(Y,{children:"How GitHub access works"}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"1"}),(0,t.jsx)(et,{children:"Link your GitHub identity to your MarkFlowy account."})]}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"2"}),(0,t.jsx)(et,{children:"Install the MarkFlowy GitHub App and select repository access."})]}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"3"}),(0,t.jsx)(et,{children:"Import an authorized repository as a workspace. Tokens stay server-side."})]})]}),(0,t.jsxs)(en,{children:["To revoke or change access on GitHub, manage or uninstall the app in"," ",(0,t.jsx)(ei,{href:"https://github.com/settings/installations",target:"_blank",rel:"noopener noreferrer",children:"GitHub Settings"}),"."]})]})]})}let u=l.U.section.withConfig({displayName:"GitHubSettingsPanel__Panel",componentId:"sc-754cd7e5-0"})`
  background: ${e=>e.theme.bgColorSecondary};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
  overflow: hidden;
`,f=l.U.div.withConfig({displayName:"GitHubSettingsPanel__PanelHeader",componentId:"sc-754cd7e5-1"})`
  padding: ${(0,d.f)(20)} ${(0,d.f)(20)} ${(0,d.f)(16)};
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  background: ${e=>e.theme.sideBarHeaderBgColor};
`,h=l.U.div.withConfig({displayName:"GitHubSettingsPanel__PanelKicker",componentId:"sc-754cd7e5-2"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,d.f)(6)};
  color: ${e=>e.theme.accentColor};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: ${(0,d.f)(8)};
`,p=l.U.h2.withConfig({displayName:"GitHubSettingsPanel__PanelTitle",componentId:"sc-754cd7e5-3"})`
  font-size: ${(0,d.f)(20)};
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
`,m=l.U.p.withConfig({displayName:"GitHubSettingsPanel__PanelDesc",componentId:"sc-754cd7e5-4"})`
  margin: ${(0,d.f)(6)} 0 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  line-height: 1.6;
  max-width: ${(0,d.f)(640)};
`,g=l.U.div.withConfig({displayName:"GitHubSettingsPanel__PanelBody",componentId:"sc-754cd7e5-5"})`
  padding: ${(0,d.f)(20)};
`,b=l.U.div.withConfig({displayName:"GitHubSettingsPanel__LoadingText",componentId:"sc-754cd7e5-6"})`
  font-size: ${e=>e.theme.fontSm};
  color: ${e=>e.theme.disabledFontColor};
  padding: ${(0,d.f)(12)} 0;
`,y=l.U.div.withConfig({displayName:"GitHubSettingsPanel__ErrorBanner",componentId:"sc-754cd7e5-7"})`
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: rgba(255, 77, 79, 0.1);
  border: 1px solid rgba(255, 77, 79, 0.24);
  border-radius: ${e=>e.theme.midBorderRadius};
  color: #ff7875;
  font-size: ${e=>e.theme.fontSm};
  margin-bottom: ${(0,d.f)(14)};
`,x=l.U.div.withConfig({displayName:"GitHubSettingsPanel__SuccessBanner",componentId:"sc-754cd7e5-8"})`
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: rgba(82, 196, 26, 0.1);
  border: 1px solid rgba(82, 196, 26, 0.24);
  border-radius: ${e=>e.theme.midBorderRadius};
  color: #73d13d;
  font-size: ${e=>e.theme.fontSm};
  margin-bottom: ${(0,d.f)(14)};
`,$=l.U.div.withConfig({displayName:"GitHubSettingsPanel__StatusGrid",componentId:"sc-754cd7e5-9"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${(0,d.f)(10)};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,w=l.U.div.withConfig({displayName:"GitHubSettingsPanel__StatusItem",componentId:"sc-754cd7e5-10"})`
  min-height: ${(0,d.f)(62)};
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
`,C=l.U.div.withConfig({displayName:"GitHubSettingsPanel__StatusLabel",componentId:"sc-754cd7e5-11"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  line-height: 1.4;
  margin-bottom: ${(0,d.f)(6)};
`,_=l.U.div.withConfig({displayName:"GitHubSettingsPanel__StatusValue",componentId:"sc-754cd7e5-12"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,d.f)(6)};
  color: ${e=>e.$connected?"#73d13d":e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
`,v=l.U.span.withConfig({displayName:"GitHubSettingsPanel__StatusDot",componentId:"sc-754cd7e5-13"})`
  width: ${(0,d.f)(8)};
  height: ${(0,d.f)(8)};
  border-radius: 50%;
  background: ${e=>e.$connected?"#73d13d":e.theme.disabledFontColor};
`,j=l.U.div.withConfig({displayName:"GitHubSettingsPanel__StatusText",componentId:"sc-754cd7e5-14"})`
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
  overflow-wrap: anywhere;
`,k=l.U.div.withConfig({displayName:"GitHubSettingsPanel__AccountSummary",componentId:"sc-754cd7e5-15"})`
  display: flex;
  align-items: center;
  gap: ${(0,d.f)(7)};
  min-width: 0;
`,S=l.U.img.withConfig({displayName:"GitHubSettingsPanel__AccountAvatar",componentId:"sc-754cd7e5-16"})`
  width: ${(0,d.f)(22)};
  height: ${(0,d.f)(22)};
  border-radius: 50%;
`,I=l.U.div.withConfig({displayName:"GitHubSettingsPanel__Actions",componentId:"sc-754cd7e5-17"})`
  display: flex;
  align-items: center;
  gap: ${(0,d.f)(10)};
  margin-top: ${(0,d.f)(16)};
  flex-wrap: wrap;
`,N=l.U.button.withConfig({displayName:"GitHubSettingsPanel__SaveButton",componentId:"sc-754cd7e5-18"})`
  min-height: ${(0,d.f)(32)};
  padding: 0 ${(0,d.f)(14)};
  background: ${e=>e.theme.accentColor};
  color: var(--on-accent);
  border: 1px solid ${e=>e.theme.accentColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
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
`,U=l.U.button.withConfig({displayName:"GitHubSettingsPanel__DeleteButton",componentId:"sc-754cd7e5-19"})`
  min-height: ${(0,d.f)(32)};
  padding: 0 ${(0,d.f)(14)};
  background: transparent;
  color: #ff7875;
  border: 1px solid rgba(255, 77, 79, 0.3);
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
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
`,P=l.U.div.withConfig({displayName:"GitHubSettingsPanel__InstallationBody",componentId:"sc-754cd7e5-20"})`
  padding: ${(0,d.f)(20)};
  border-top: 1px solid ${e=>e.theme.borderColor};
`,H=l.U.div.withConfig({displayName:"GitHubSettingsPanel__InstallationList",componentId:"sc-754cd7e5-21"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,d.f)(8)};
`,R=l.U.div.withConfig({displayName:"GitHubSettingsPanel__InstallationItem",componentId:"sc-754cd7e5-22"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,d.f)(12)};
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,G=l.U.div.withConfig({displayName:"GitHubSettingsPanel__InstallationInfo",componentId:"sc-754cd7e5-23"})`
  min-width: 0;
`,T=l.U.span.withConfig({displayName:"GitHubSettingsPanel__AccessTag",componentId:"sc-754cd7e5-24"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,d.f)(20)};
  padding: 0 ${(0,d.f)(7)};
  background: rgba(82, 196, 26, 0.1);
  border: 1px solid rgba(82, 196, 26, 0.2);
  border-radius: ${e=>e.theme.smallBorderRadius};
  color: #73d13d;
  font-size: ${e=>e.theme.fontXs};
  font-weight: 600;
`,z=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepositoryBody",componentId:"sc-754cd7e5-25"})`
  padding: ${(0,d.f)(20)};
  border-top: 1px solid ${e=>e.theme.borderColor};
`,A=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepositoryHeader",componentId:"sc-754cd7e5-26"})`
  margin-bottom: ${(0,d.f)(12)};
`,F=l.U.h3.withConfig({displayName:"GitHubSettingsPanel__RepositoryTitle",componentId:"sc-754cd7e5-27"})`
  font-size: ${e=>e.theme.fontBase};
  font-weight: 700;
  margin: 0;
`,L=l.U.p.withConfig({displayName:"GitHubSettingsPanel__RepositoryDesc",componentId:"sc-754cd7e5-28"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  margin: ${(0,d.f)(4)} 0 0;
`,O=l.U.div.withConfig({displayName:"GitHubSettingsPanel__EmptyText",componentId:"sc-754cd7e5-29"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  padding: ${(0,d.f)(12)} 0;
`,M=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoList",componentId:"sc-754cd7e5-30"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,d.f)(8)};
  max-height: min(50vh, ${(0,d.f)(360)});
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: ${(0,d.f)(4)};
  scrollbar-color: ${e=>e.theme.scrollbarThumbColor}
    ${e=>e.theme.scrollbarTrackColor};
  scrollbar-width: thin;

  &:focus-visible {
    outline: none;
    scrollbar-color: ${e=>e.theme.primaryFontColor}
      ${e=>e.theme.scrollbarTrackColor};
  }

  @media (max-width: 640px) {
    max-height: min(52vh, ${(0,d.f)(320)});
  }
`,B=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoItem",componentId:"sc-754cd7e5-31"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,d.f)(12)};
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,E=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoInfo",componentId:"sc-754cd7e5-32"})`
  min-width: 0;
`,D=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoName",componentId:"sc-754cd7e5-33"})`
  font-size: ${e=>e.theme.fontSm};
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,q=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoDesc",componentId:"sc-754cd7e5-34"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  line-height: 1.5;
  margin-top: ${(0,d.f)(2)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,X=l.U.div.withConfig({displayName:"GitHubSettingsPanel__RepoMeta",componentId:"sc-754cd7e5-35"})`
  display: flex;
  align-items: center;
  gap: ${(0,d.f)(8)};
  margin-top: ${(0,d.f)(6)};
`,K=l.U.span.withConfig({displayName:"GitHubSettingsPanel__RepoTag",componentId:"sc-754cd7e5-36"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,d.f)(20)};
  padding: 0 ${(0,d.f)(7)};
  background: ${e=>e.$private?"rgba(255, 77, 79, 0.1)":"rgba(82, 196, 26, 0.1)"};
  border: 1px solid
    ${e=>e.$private?"rgba(255, 77, 79, 0.2)":"rgba(82, 196, 26, 0.2)"};
  border-radius: ${e=>e.theme.smallBorderRadius};
  color: ${e=>e.$private?"#ff7875":"#73d13d"};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 600;
`,W=l.U.span.withConfig({displayName:"GitHubSettingsPanel__RepoUpdated",componentId:"sc-754cd7e5-37"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
`,J=l.U.button.withConfig({displayName:"GitHubSettingsPanel__OpenButton",componentId:"sc-754cd7e5-38"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,d.f)(6)};
  min-height: ${(0,d.f)(30)};
  padding: 0 ${(0,d.f)(12)};
  background: ${e=>e.theme.buttonBgColor};
  color: ${e=>e.theme.primaryFontColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease;

  &:hover:not(:disabled) {
    background: ${e=>e.theme.hoverColor};
    border-color: ${e=>e.theme.borderColorFocused};
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
`,V=l.U.div.withConfig({displayName:"GitHubSettingsPanel__HelpBody",componentId:"sc-754cd7e5-39"})`
  padding: ${(0,d.f)(20)};
  border-top: 1px solid ${e=>e.theme.borderColor};
  background: ${e=>e.theme.bgColor};
`,Y=l.U.h3.withConfig({displayName:"GitHubSettingsPanel__HelpTitle",componentId:"sc-754cd7e5-40"})`
  font-size: ${e=>e.theme.fontBase};
  font-weight: 700;
  margin: 0 0 ${(0,d.f)(12)};
`,Q=l.U.div.withConfig({displayName:"GitHubSettingsPanel__HelpGrid",componentId:"sc-754cd7e5-41"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${(0,d.f)(10)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,Z=l.U.div.withConfig({displayName:"GitHubSettingsPanel__HelpItem",componentId:"sc-754cd7e5-42"})`
  display: grid;
  grid-template-columns: ${(0,d.f)(24)} minmax(0, 1fr);
  gap: ${(0,d.f)(8)};
  align-items: flex-start;
`,ee=l.U.span.withConfig({displayName:"GitHubSettingsPanel__HelpNumber",componentId:"sc-754cd7e5-43"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,d.f)(24)};
  height: ${(0,d.f)(24)};
  background: ${e=>e.theme.accentColor};
  border-radius: 50%;
  color: var(--on-accent);
  font-size: ${e=>e.theme.fontXs};
  font-weight: 700;
`,et=l.U.span.withConfig({displayName:"GitHubSettingsPanel__HelpText",componentId:"sc-754cd7e5-44"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  line-height: 1.55;
`,en=l.U.p.withConfig({displayName:"GitHubSettingsPanel__HelpNote",componentId:"sc-754cd7e5-45"})`
  margin: ${(0,d.f)(14)} 0 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  line-height: 1.55;
`,ei=l.U.a.withConfig({displayName:"GitHubSettingsPanel__HelpLink",componentId:"sc-754cd7e5-46"})`
  color: ${e=>e.theme.accentColor};
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
`;var eo=e.i(48547),er=e.i(41158),es=e.i(20250);function ea(e){return e?new Date(e).toLocaleString():"Not available"}let el=l.U.div.withConfig({displayName:"settings__Container",componentId:"sc-d8600b95-0"})`
  min-height: 100vh;
  background: ${e=>e.theme.bgColor};
  color: ${e=>e.theme.primaryFontColor};
  font-family: ${e=>e.theme.fontFamily};
`,ed=l.U.header.withConfig({displayName:"settings__Header",componentId:"sc-d8600b95-1"})`
  padding: ${(0,d.f)(24)} ${(0,d.f)(28)} ${(0,d.f)(20)};
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  background: ${e=>e.theme.bgColorSecondary};

  @media (max-width: 720px) {
    padding: ${(0,d.f)(18)} ${(0,d.f)(14)} ${(0,d.f)(16)};
  }
`,ec=(0,l.U)(er.default).withConfig({displayName:"settings__BackLink",componentId:"sc-d8600b95-2"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,d.f)(6)};
  min-height: ${(0,d.f)(28)};
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${(0,d.f)(14)};

  &:hover {
    color: ${e=>e.theme.primaryFontColor};
  }
`,eu=l.U.div.withConfig({displayName:"settings__HeaderMain",componentId:"sc-d8600b95-3"})`
  display: flex;
  align-items: center;
  gap: ${(0,d.f)(12)};
`,ef=l.U.div.withConfig({displayName:"settings__HeaderIcon",componentId:"sc-d8600b95-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,d.f)(40)};
  height: ${(0,d.f)(40)};
  background: ${e=>e.theme.buttonBgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
  color: ${e=>e.theme.accentColor};
  font-size: ${(0,d.f)(20)};
  flex: 0 0 auto;
`,eh=l.U.div.withConfig({displayName:"settings__HeaderCopy",componentId:"sc-d8600b95-5"})`
  min-width: 0;
`,ep=l.U.h1.withConfig({displayName:"settings__Title",componentId:"sc-d8600b95-6"})`
  font-size: ${(0,d.f)(26)};
  line-height: 1.25;
  font-weight: 700;
  margin: 0;
`,em=l.U.p.withConfig({displayName:"settings__Subtitle",componentId:"sc-d8600b95-7"})`
  margin: ${(0,d.f)(4)} 0 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
`,eg=l.U.div.withConfig({displayName:"settings__Shell",componentId:"sc-d8600b95-8"})`
  display: grid;
  grid-template-columns: ${(0,d.f)(180)} minmax(0, ${(0,d.f)(860)});
  gap: ${(0,d.f)(24)};
  align-items: start;
  padding: ${(0,d.f)(24)} ${(0,d.f)(28)} ${(0,d.f)(32)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 720px) {
    padding: ${(0,d.f)(16)} ${(0,d.f)(12)} ${(0,d.f)(24)};
  }
`,eb=l.U.nav.withConfig({displayName:"settings__Sidebar",componentId:"sc-d8600b95-9"})`
  position: sticky;
  top: ${(0,d.f)(16)};
  display: flex;
  flex-direction: column;
  gap: ${(0,d.f)(6)};

  @media (max-width: 860px) {
    position: static;
    flex-direction: row;
    overflow-x: auto;
  }
`,ey=l.U.a.withConfig({displayName:"settings__SidebarLink",componentId:"sc-d8600b95-10"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,d.f)(8)};
  min-height: ${(0,d.f)(34)};
  padding: 0 ${(0,d.f)(10)};
  background: ${e=>e.theme.buttonBgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${e=>e.theme.hoverColor};
    border-color: ${e=>e.theme.borderColorFocused};
  }
`,ex=l.U.main.withConfig({displayName:"settings__Main",componentId:"sc-d8600b95-11"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,d.f)(18)};
`,e$=l.U.section.withConfig({displayName:"settings__ProfilePanel",componentId:"sc-d8600b95-12"})`
  background: ${e=>e.theme.bgColorSecondary};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
  overflow: hidden;
`,ew=l.U.div.withConfig({displayName:"settings__PanelHeader",componentId:"sc-d8600b95-13"})`
  padding: ${(0,d.f)(20)} ${(0,d.f)(20)} ${(0,d.f)(16)};
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  background: ${e=>e.theme.sideBarHeaderBgColor};
`,eC=l.U.div.withConfig({displayName:"settings__PanelKicker",componentId:"sc-d8600b95-14"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,d.f)(6)};
  color: ${e=>e.theme.accentColor};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 700;
  margin-bottom: ${(0,d.f)(8)};
`,e_=l.U.h2.withConfig({displayName:"settings__PanelTitle",componentId:"sc-d8600b95-15"})`
  font-size: ${(0,d.f)(20)};
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
`,ev=l.U.p.withConfig({displayName:"settings__PanelDesc",componentId:"sc-d8600b95-16"})`
  margin: ${(0,d.f)(6)} 0 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  line-height: 1.6;
`,ej=l.U.div.withConfig({displayName:"settings__PanelBody",componentId:"sc-d8600b95-17"})`
  padding: ${(0,d.f)(20)};
`,ek=l.U.div.withConfig({displayName:"settings__ProfileSummary",componentId:"sc-d8600b95-18"})`
  display: flex;
  align-items: center;
  gap: ${(0,d.f)(12)};
  margin-bottom: ${(0,d.f)(18)};
`,eS=l.U.img.withConfig({displayName:"settings__AvatarImage",componentId:"sc-d8600b95-19"})`
  width: ${(0,d.f)(52)};
  height: ${(0,d.f)(52)};
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${e=>e.theme.borderColor};
`,eI=l.U.div.withConfig({displayName:"settings__AvatarFallback",componentId:"sc-d8600b95-20"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,d.f)(52)};
  height: ${(0,d.f)(52)};
  border-radius: 50%;
  background: ${e=>e.theme.accentColorFocused};
  border: 1px solid ${e=>e.theme.borderColor};
  color: ${e=>e.theme.accentColor};
  font-size: ${(0,d.f)(18)};
  font-weight: 800;
`,eN=l.U.div.withConfig({displayName:"settings__ProfileCopy",componentId:"sc-d8600b95-21"})`
  min-width: 0;
`,eU=l.U.div.withConfig({displayName:"settings__ProfileName",componentId:"sc-d8600b95-22"})`
  font-size: ${(0,d.f)(18)};
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,eP=l.U.div.withConfig({displayName:"settings__ProfileEmail",componentId:"sc-d8600b95-23"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontSm};
  overflow-wrap: anywhere;
`,eH=l.U.div.withConfig({displayName:"settings__InfoGrid",componentId:"sc-d8600b95-24"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(0,d.f)(10)};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,eR=l.U.div.withConfig({displayName:"settings__InfoItem",componentId:"sc-d8600b95-25"})`
  min-height: ${(0,d.f)(64)};
  padding: ${(0,d.f)(10)} ${(0,d.f)(12)};
  background: ${e=>e.theme.bgColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.midBorderRadius};
`,eG=l.U.div.withConfig({displayName:"settings__InfoLabel",componentId:"sc-d8600b95-26"})`
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  line-height: 1.4;
  margin-bottom: ${(0,d.f)(6)};
`,eT=l.U.div.withConfig({displayName:"settings__InfoValue",componentId:"sc-d8600b95-27"})`
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 600;
  overflow-wrap: anywhere;
`,ez=l.U.div.withConfig({displayName:"settings__SessionAction",componentId:"sc-d8600b95-28"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(0,d.f)(18)};

  @media (max-width: 680px) {
    align-items: stretch;
    flex-direction: column;
  }
`,eA=l.U.div.withConfig({displayName:"settings__SessionCopy",componentId:"sc-d8600b95-29"})`
  min-width: 0;
`,eF=l.U.div.withConfig({displayName:"settings__SessionTitle",componentId:"sc-d8600b95-30"})`
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 700;
  overflow-wrap: anywhere;
`,eL=l.U.p.withConfig({displayName:"settings__SessionDescription",componentId:"sc-d8600b95-31"})`
  margin: ${(0,d.f)(5)} 0 0;
  color: ${e=>e.theme.disabledFontColor};
  font-size: ${e=>e.theme.fontXs};
  line-height: 1.5;
`,eO=l.U.div.withConfig({displayName:"settings__LogoutConfirmation",componentId:"sc-d8600b95-32"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${(0,d.f)(7)};

  @media (max-width: 680px) {
    align-items: stretch;
  }
`,eM=l.U.div.withConfig({displayName:"settings__LogoutConfirmText",componentId:"sc-d8600b95-33"})`
  color: ${e=>e.theme.primaryFontColor};
  font-size: ${e=>e.theme.fontXs};
  font-weight: 700;
`,eB=l.U.div.withConfig({displayName:"settings__LogoutConfirmActions",componentId:"sc-d8600b95-34"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,d.f)(8)};
`,eE=l.U.button.withConfig({displayName:"settings__CancelLogoutButton",componentId:"sc-d8600b95-35"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${(0,d.f)(34)};
  padding: 0 ${(0,d.f)(14)};
  background: ${e=>e.theme.buttonBgColor};
  color: ${e=>e.theme.primaryFontColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 700;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${e=>e.theme.hoverColor};
    border-color: ${e=>e.theme.borderColorFocused};
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
`,eD=l.U.button.withConfig({displayName:"settings__SignOutButton",componentId:"sc-d8600b95-36"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,d.f)(7)};
  min-height: ${(0,d.f)(34)};
  padding: 0 ${(0,d.f)(14)};
  background: transparent;
  color: ${e=>e.theme.dangerColor};
  border: 1px solid ${e=>e.theme.dangerColor};
  border-radius: ${e=>e.theme.smallBorderRadius};
  font-size: ${e=>e.theme.fontSm};
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.16s ease,
    opacity 0.16s ease;

  &:hover:not(:disabled) {
    background: ${e=>e.theme.accentColorFocused};
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
`,eq=l.U.div.withConfig({displayName:"settings__LoadingContainer",componentId:"sc-d8600b95-37"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${e=>e.theme.bgColor};
`,eX=l.U.div.withConfig({displayName:"settings__LoadingSpinner",componentId:"sc-d8600b95-38"})`
  width: ${(0,d.f)(40)};
  height: ${(0,d.f)(40)};
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${e=>e.theme.accentColor};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;e.s(["__N_SSG",0,!0,"default",0,function(){let{loading:e,isAuthenticated:i,logout:o,user:r}=(0,eo.F)(!0),[s,a]=(0,n.useState)("idle"),l="logging-out"===s,d=async()=>{l||(a("logging-out"),await o())};if(e)return(0,t.jsx)(eq,{children:(0,t.jsx)(eX,{})});if(!i||!r)return null;let u=r.displayName||r.email||"User",f=u.split(/\s+|@/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()).join("")||"U";return(0,t.jsxs)(el,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsxs)(ec,{href:"/workspace",children:[(0,t.jsx)("i",{className:"ri-arrow-left-line"}),"Workspaces"]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:(0,t.jsx)("i",{className:"ri-user-settings-line"})}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(ep,{children:"Personal Settings"}),(0,t.jsx)(em,{children:"Manage basic information and connected services."})]}),(0,t.jsx)(es.f,{})]})]}),(0,t.jsxs)(eg,{children:[(0,t.jsxs)(eb,{"aria-label":"Settings navigation",children:[(0,t.jsxs)(ey,{href:"#basic",children:[(0,t.jsx)("i",{className:"ri-user-line"}),"Basic Info"]}),(0,t.jsxs)(ey,{href:"#github",children:[(0,t.jsx)("i",{className:"ri-github-fill"}),"GitHub"]}),(0,t.jsxs)(ey,{href:"#session",children:[(0,t.jsx)("i",{className:"ri-logout-box-r-line"}),"Session"]})]}),(0,t.jsxs)(ex,{children:[(0,t.jsxs)(e$,{id:"basic",children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)(eC,{children:[(0,t.jsx)("i",{className:"ri-user-line"}),"Account"]}),(0,t.jsx)(e_,{children:"Basic Information"}),(0,t.jsx)(ev,{children:"Your MarkFlowy account profile for the web workspace."})]}),(0,t.jsxs)(ej,{children:[(0,t.jsxs)(ek,{children:[r.avatarUrl?(0,t.jsx)(eS,{src:r.avatarUrl,alt:u}):(0,t.jsx)(eI,{children:f}),(0,t.jsxs)(eN,{children:[(0,t.jsx)(eU,{children:u}),(0,t.jsx)(eP,{children:r.email})]})]}),(0,t.jsxs)(eH,{children:[(0,t.jsxs)(eR,{children:[(0,t.jsx)(eG,{children:"Display name"}),(0,t.jsx)(eT,{children:r.displayName||"Not set"})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eG,{children:"Email"}),(0,t.jsx)(eT,{children:r.email})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eG,{children:"User ID"}),(0,t.jsx)(eT,{children:r.id})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eG,{children:"Created"}),(0,t.jsx)(eT,{children:ea(r.createdAt)})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eG,{children:"Updated"}),(0,t.jsx)(eT,{children:ea(r.updatedAt)})]})]})]})]}),(0,t.jsx)(c,{isAuthenticated:i,authLoading:e}),(0,t.jsxs)(e$,{id:"session",children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)(eC,{children:[(0,t.jsx)("i",{className:"ri-shield-user-line"}),"Session"]}),(0,t.jsx)(e_,{children:"Sign out"}),(0,t.jsx)(ev,{children:"End this browser session without changing your account data."})]}),(0,t.jsx)(ej,{children:(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eA,{children:[(0,t.jsxs)(eF,{children:["Signed in as ",r.email]}),(0,t.jsx)(eL,{children:"You will need to sign in again to access remote workspaces and connected services."})]}),"idle"===s?(0,t.jsxs)(eD,{type:"button",onClick:()=>a("confirming"),children:[(0,t.jsx)("i",{className:"ri-logout-box-r-line","aria-hidden":"true"}),"Sign out"]}):(0,t.jsxs)(eO,{role:"group","aria-label":"Confirm sign out",children:[(0,t.jsx)(eM,{children:"Are you sure you want to sign out?"}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(eE,{type:"button",onClick:()=>a("idle"),disabled:l,autoFocus:!0,children:"Cancel"}),(0,t.jsxs)(eD,{type:"button",onClick:d,disabled:l,"aria-busy":l,children:[(0,t.jsx)("i",{className:l?"ri-loader-4-line":"ri-logout-box-r-line","aria-hidden":"true"}),l?"Signing out…":"Confirm sign out"]})]})]})]})})]})]})]})]})}],22516)},40548,72667,e=>{let t=null;function n(){return t}function i(e){t=e}function o(){t=null,localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user")}e.s(["F",0,o,"r",0,n,"m",0,function(e){i(e.accessToken),localStorage.setItem("user",JSON.stringify(e.user))},"f",0,i],72667);class r extends Error{status;constructor(e,t){super(e),this.status=t,this.name="ApiClientError"}}let s=new class{baseUrl;isRefreshing=!1;refreshPromise=null;constructor(){this.baseUrl="/api/cloud"}getAuthToken(){return n()}getTokenExpiry(e){try{let[,t]=e.split(".");if(!t)return null;let n=t.replace(/-/g,"+").replace(/_/g,"/"),i=JSON.parse(atob(n.padEnd(4*Math.ceil(n.length/4),"=")));return"number"==typeof i.exp?i.exp:null}catch{return null}}shouldRefreshAccessToken(){let e=this.getAuthToken();if(!e)return!0;let t=this.getTokenExpiry(e);return!t||t<=Math.floor(Date.now()/1e3)+60}isRefreshTokenResponse(e){return"object"==typeof e&&null!==e&&"string"==typeof e.accessToken}setAccessToken(e){i(e)}clearAuth(){o(),window.location.href="/auth"}async refreshAccessToken(){try{let e=await fetch(`${this.baseUrl}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}",credentials:"include"});if(!e.ok)return null;let t=await e.json();if(!this.isRefreshTokenResponse(t))return null;return this.setAccessToken(t.accessToken),t}catch{return null}}async refreshWithinTabLock(e){if(this.isRefreshing&&this.refreshPromise)return this.refreshPromise;if(!e&&!this.shouldRefreshAccessToken()){let e=this.getAuthToken();return e?{accessToken:e}:null}this.isRefreshing=!0,this.refreshPromise=this.refreshAccessToken();try{return await this.refreshPromise}finally{this.isRefreshing=!1,this.refreshPromise=null}}async refreshWithLock(e=!1){return"u">typeof navigator&&navigator.locks?navigator.locks.request("markflowy-auth-refresh",()=>this.refreshWithinTabLock(e)):this.refreshWithinTabLock(e)}async ensureFreshAccessToken(){this.shouldRefreshAccessToken()&&await this.refreshWithLock()}async restoreSession(){return!!await this.refreshWithLock()}async logoutSession(){let e=async()=>{let e=await fetch(`${this.baseUrl}/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}",credentials:"include"});return this.handleResponse(e)};return"u">typeof navigator&&navigator.locks?navigator.locks.request("markflowy-auth-refresh",e):e()}async handleResponse(e,t){if(!e.ok){let n="Request failed";try{let t=await e.json();n=t.message||t.error||n}catch{n=e.statusText||n}if(401===e.status&&t){if(await this.refreshWithLock(!0))return t();throw this.clearAuth(),Error("Session expired")}throw new r(n,e.status)}let n=e.headers.get("content-type");return n&&n.includes("application/json")?e.json():e.text()}async request(e,t={}){let{skipAuth:n=!1,headers:i={},...o}=t;n||await this.ensureFreshAccessToken();let r={"Content-Type":"application/json",...i};if(!n){let e=this.getAuthToken();e&&(r.Authorization=`Bearer ${e}`)}let s=async()=>{if(!n){let e=this.getAuthToken();e&&(r.Authorization=`Bearer ${e}`)}return fetch(`${this.baseUrl}${e}`,{...o,headers:r,credentials:"include"})},a=await s();return this.handleResponse(a,()=>s().then(e=>this.handleResponse(e)))}async get(e,t){return this.request(e,{method:"GET",...t})}async post(e,t,n){return this.request(e,{method:"POST",body:JSON.stringify(t),...n})}async put(e,t,n){return this.request(e,{method:"PUT",body:JSON.stringify(t),...n})}async patch(e,t,n){return this.request(e,{method:"PATCH",body:JSON.stringify(t),...n})}async delete(e,t){return this.request(e,{method:"DELETE",...t})}async upload(e,t,n){let i=new FormData;i.append("file",t);let{skipAuth:o=!1,headers:r={}}=n||{};o||await this.ensureFreshAccessToken();let s={...r};if(!o){let e=this.getAuthToken();e&&(s.Authorization=`Bearer ${e}`)}let a=await fetch(`${this.baseUrl}${e}`,{method:"POST",headers:s,body:i,credentials:"include"});return this.handleResponse(a)}};e.s(["z",0,r,"k",0,s],40548)},29880,e=>{var t=e.i(19174);let n=t.m`
  background: none;
  outline: none;
  border: none;
`;e.s(["f",0,n])},9020,e=>{e.s(["f",0,function(e){let t=new URL(e);if("https://github.com"!==t.origin)throw Error("Invalid GitHub authorization URL");let n="/login/oauth/authorize"===t.pathname,i=/^\/apps\/[a-z0-9-]+\/installations\/new$/i.test(t.pathname);if(!n&&!i)throw Error("Invalid GitHub authorization path");window.location.assign(t.toString())}])},54410,e=>{var t=e.i(50166);e.s(["f",0,e=>(0,t.default)(e,"18px")])},20747,e=>{e.s(["R",0,120,"M",0,76,"Y",0,260])},54471,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return o}});let i=e.r(70090);function o(t,n,o,r){{let s=e.r(2531).normalizeLocalePath,a=e.r(62205).detectDomainLocale,l=n||s(t,o).detectedLocale,d=a(r,void 0,l);if(d){let e=`http${d.http?"":"s"}://`,n=l===d.defaultLocale?"":`/${l}`;return`${e}${d.domain}${(0,i.normalizePathTrailingSlash)(`${n}${t}`)}`}return!1}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},39149,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return v},useLinkStatus:function(){return _}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(71650),s=e.r(91398),a=r._(e.r(91788)),l=e.r(60472),d=e.r(71112),c=e.r(28169),u=e.r(89129),f=e.r(14862),h=e.r(25479),p=e.r(71914),m=e.r(54471),g=e.r(44113),b=e.r(63230),y=new Set;function x(e,t,n,i){if(!("u"<typeof window)&&(0,d.isLocalURL)(t)){if(!i.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==i.locale?i.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}e.prefetch(t,n,i).catch(e=>{})}}function $(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=a.default.forwardRef(function(e,t){let n,i,{href:o,as:r,children:c,prefetch:y=null,passHref:w,replace:C,shallow:_,scroll:v,locale:j,onClick:k,onNavigate:S,onMouseEnter:I,onTouchStart:N,legacyBehavior:U=!1,transitionTypes:P,...H}=e;n=c,U&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let R=a.default.useContext(h.RouterContext),G=!1!==y,{href:T,as:z}=a.default.useMemo(()=>{if(!R){let e=$(o);return{href:e,as:r?$(r):e}}let[e,t]=(0,l.resolveHref)(R,o,!0);return{href:e,as:r?(0,l.resolveHref)(R,r):t||e}},[R,o,r]),A=a.default.useRef(T),F=a.default.useRef(z);U&&(i=a.default.Children.only(n));let L=U?i&&"object"==typeof i&&i.ref:t,[O,M,B]=(0,p.useIntersection)({rootMargin:"200px"}),E=a.default.useCallback(e=>{(F.current!==z||A.current!==T)&&(B(),F.current=z,A.current=T),O(e)},[z,T,B,O]),D=(0,b.useMergedRef)(E,L);a.default.useEffect(()=>{!R||M&&G&&x(R,T,z,{bypassPrefetchedCheck:!1,locale:j})},[z,T,M,j,G,R?.locale,R]);let q={ref:D,onClick(e){U||"function"!=typeof k||k(e),U&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),!R||e.defaultPrevented||function(e,t,n,i,o,r,s,a,l){let c,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let e=s??!0;"beforePopState"in t?t[o?"replace":"push"](n,i,{shallow:r,locale:a,scroll:e}):t[o?"replace":"push"](i||n,{scroll:e})})()}}(e,R,T,z,C,_,v,j,S)},onMouseEnter(e){U||"function"!=typeof I||I(e),U&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),R&&x(R,T,z,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){U||"function"!=typeof N||N(e),U&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),R&&x(R,T,z,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(z))q.href=z;else if(!U||w||"a"===i.type&&!("href"in i.props)){let e=void 0!==j?j:R?.locale;q.href=R?.isLocaleDomain&&(0,m.getDomainLocale)(z,e,R?.locales,R?.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(z,e,R?.defaultLocale))}return U?a.default.cloneElement(i,q):(0,s.jsx)("a",{...H,...q,children:n})}),C=(0,a.createContext)({pending:!1}),_=()=>(0,a.useContext)(C),v=w;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},2531,(e,t,n)=>{e.i(50461),Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"normalizeLocalePath",{enumerable:!0,get:function(){return i}});let i=(t,n)=>e.r(92090).normalizeLocalePath(t,n);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},71914,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return l}});let i=e.r(91788),o=e.r(99604),r="function"==typeof IntersectionObserver,s=new Map,a=[];function l({rootRef:e,rootMargin:t,disabled:n}){let d=n||!r,[c,u]=(0,i.useState)(!1),f=(0,i.useRef)(null),h=(0,i.useCallback)(e=>{f.current=e},[]);return(0,i.useEffect)(()=>{if(r){if(d||c)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:i,observer:o,elements:r}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},i=a.find(e=>e.root===n.root&&e.margin===n.margin);if(i&&(t=s.get(i)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),s.set(n,t),t}(n);return r.set(e,t),o.observe(e),function(){if(r.delete(e),o.unobserve(e),0===r.size){o.disconnect(),s.delete(i);let e=a.findIndex(e=>e.root===i.root&&e.margin===i.margin);e>-1&&a.splice(e,1)}}}(n,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>u(!0));return()=>(0,o.cancelIdleCallback)(e)}},[d,t,e,c,f.current]),[h,c,(0,i.useCallback)(()=>{u(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=e.r(91788);function o(e,t){let n=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=r(e,i)),t&&(o.current=r(t,i))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},50166,(e,t,n)=>{var i;n.__esModule=!0,n.default=void 0,n.default=(0,((i=e.r(87709))&&i.__esModule?i:{default:i}).default)("rem"),t.exports=n.default},12343,(e,t,n)=>{n.__esModule=!0,n.default=function(e){return"string"!=typeof e?e:e.match(i)?parseFloat(e):e};var i=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;t.exports=n.default},25920,(e,t,n)=>{n.__esModule=!0,n.default=function(e,t){return e.substr(-t.length)===t},t.exports=n.default},72827,(e,t,n)=>{function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(o())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,t);var s=new(e.bind.apply(e,i));return n&&r(s,n.prototype),s}(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r(n,e)})(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.i(50461),n.__esModule=!0,n.default=void 0,n.default=function(e){function t(t){var n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e),t}(i(Error)),t.exports=n.default},87709,(e,t,n)=>{n.__esModule=!0,n.default=void 0;var i=s(e.r(25920)),o=s(e.r(12343)),r=s(e.r(72827));function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(t,n){void 0===n&&(n="16px");var s=t,a=n;if("string"==typeof t){if(!(0,i.default)(t,"px"))throw new r.default(69,e,t);s=(0,o.default)(t)}if("string"==typeof n){if(!(0,i.default)(n,"px"))throw new r.default(70,e,n);a=(0,o.default)(n)}if("string"==typeof s)throw new r.default(71,t,e);if("string"==typeof a)throw new r.default(72,n,e);return""+s/a+e}},t.exports=n.default}],61728,(e,t,n)=>{let i="/settings";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(22516)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},41158,(e,t,n)=>{t.exports=e.r(39149)},3828,(e,t,n)=>{t.exports=e.r(26990)}]);