(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71261,(e,i,n)=>{let o="/workspace";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(49013)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([o])})},49013,e=>{"use strict";var i=e.i(91398),n=e.i(44019),o=e.i(53744),t=e.i(68306),a=e.i(48547),r=e.i(41158);e.i(64157);var s=e.i(71179),c=e.i(66007),d=e.i(3828),l=e.i(91788),f=e.i(19174),p=e.i(40548),h=e.i(9020),g=e.i(54410),m=e.i(78639),u=e.i(20250);let x=e=>e?new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):"Not available",w=e=>`${e.installationId}:${e.id}`,$={page:m.e.webPaperWarm,header:m.e.navBackground,surface:m.e.webPaper,surfaceRaised:m.e.hoverColor,surfaceMuted:m.e.webPaperWarm,line:m.e.webLineSoft,lineStrong:m.e.borderColor,text:m.e.primaryFontColor,textMuted:m.e.webInkSoft,textFaint:m.e.webInkFaint,accent:m.e.accentColor,accentHover:"color-mix(in srgb, var(--seal) 85%, var(--ink))",accentSoft:m.e.accentColorFocused,danger:m.e.dangerColor,success:m.e.successColor},b=f.U.div.withConfig({displayName:"workspace__Container",componentId:"sc-c0fa666f-0"})`
  min-height: 100vh;
  background: linear-gradient(155deg, ${$.surface} 10%, transparent 60%),
    ${$.page};
  color: ${$.text};
  font-family: ${e=>e.theme.fontFamily};
`,y=f.U.header.withConfig({displayName:"workspace__Header",componentId:"sc-c0fa666f-1"})`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${$.line};
  background: ${$.header};
  backdrop-filter: blur(${(0,g.f)(18)});
  -webkit-backdrop-filter: blur(${(0,g.f)(18)});
`,k=f.U.div.withConfig({displayName:"workspace__HeaderInner",componentId:"sc-c0fa666f-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${(0,g.f)(1180)};
  min-height: ${(0,g.f)(64)};
  margin: 0 auto;
  padding: 0 ${(0,g.f)(28)};
  gap: ${(0,g.f)(18)};

  @media (max-width: 720px) {
    min-height: ${(0,g.f)(58)};
    padding: 0 ${(0,g.f)(14)};
    gap: ${(0,g.f)(10)};
  }
`,j=f.U.nav.withConfig({displayName:"workspace__HeaderNavigation",componentId:"sc-c0fa666f-3"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(10)};
  min-width: 0;
`,_=(0,f.U)(r.default).withConfig({displayName:"workspace__BrandLink",componentId:"sc-c0fa666f-4"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,g.f)(40)};
  gap: ${(0,g.f)(9)};
  color: ${$.text};
  text-decoration: none;
  border-radius: ${(0,g.f)(8)};

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,v=f.U.img.withConfig({displayName:"workspace__BrandLogo",componentId:"sc-c0fa666f-5"})`
  width: ${(0,g.f)(25)};
  height: ${(0,g.f)(25)};
  flex: 0 0 auto;
`,C=f.U.strong.withConfig({displayName:"workspace__BrandName",componentId:"sc-c0fa666f-6"})`
  font-size: ${(0,g.f)(20)};
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 350px) {
    display: none;
  }
`,N=f.U.span.withConfig({displayName:"workspace__NavigationDivider",componentId:"sc-c0fa666f-7"})`
  width: 1px;
  height: ${(0,g.f)(20)};
  background: ${$.lineStrong};

  @media (max-width: 720px) {
    display: none;
  }
`,I=f.U.span.withConfig({displayName:"workspace__CurrentLocation",componentId:"sc-c0fa666f-8"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,g.f)(7)};
  color: ${$.textMuted};
  font-size: ${(0,g.f)(13)};
  white-space: nowrap;

  i {
    color: ${$.accent};
    font-size: ${(0,g.f)(15)};
  }

  @media (max-width: 720px) {
    display: none;
  }
`,U=f.U.div.withConfig({displayName:"workspace__HeaderRight",componentId:"sc-c0fa666f-9"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(8)};
  flex-shrink: 0;
`,S=(0,f.U)(r.default).withConfig({displayName:"workspace__HeaderActionLink",componentId:"sc-c0fa666f-10"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,g.f)(7)};
  height: ${(0,g.f)(36)};
  padding: 0 ${(0,g.f)(13)};
  background: ${$.surfaceRaised};
  border: 1px solid ${$.lineStrong};
  border-radius: ${(0,g.f)(8)};
  font-size: ${(0,g.f)(13)};
  font-weight: 600;
  color: ${$.text};
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);
  white-space: nowrap;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${$.surfaceRaised};
      border-color: ${$.accent};
      color: ${$.accent};
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,z=(0,f.U)(S).withConfig({displayName:"workspace__SettingsLink",componentId:"sc-c0fa666f-11"})`
  min-width: ${(0,g.f)(104)};

  @media (max-width: 720px) {
    width: ${(0,g.f)(36)};
    min-width: ${(0,g.f)(36)};
    padding: 0;

    span {
      display: none;
    }
  }
`,H=f.U.button.withConfig({displayName:"workspace__ImportButton",componentId:"sc-c0fa666f-12"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,g.f)(7)};
  min-width: ${(0,g.f)(156)};
  height: ${(0,g.f)(36)};
  padding: 0 ${(0,g.f)(15)};
  background: ${$.accent};
  border: 1px solid ${$.accent};
  border-radius: ${(0,g.f)(8)};
  font-size: ${(0,g.f)(13)};
  font-weight: 700;
  color: var(--on-accent);
  cursor: pointer;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);
  white-space: nowrap;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${$.accentHover};
      border-color: ${$.accentHover};
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (max-width: 720px) {
    min-width: ${(0,g.f)(132)};
  }
`,M=(0,f.U)(r.default).withConfig({displayName:"workspace__GitHubSignInLink",componentId:"sc-c0fa666f-13"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,g.f)(7)};
  min-width: ${(0,g.f)(94)};
  height: ${(0,g.f)(36)};
  padding: 0 ${(0,g.f)(15)};
  background: ${$.accent};
  border: 1px solid ${$.accent};
  border-radius: ${(0,g.f)(8)};
  color: var(--on-accent);
  font-size: ${(0,g.f)(13)};
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${$.accentHover};
      border-color: ${$.accentHover};
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,L=f.U.div.withConfig({displayName:"workspace__PageIntro",componentId:"sc-c0fa666f-14"})`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${(0,g.f)(28)};
  margin-bottom: ${(0,g.f)(28)};
  padding: ${(0,g.f)(8)} ${(0,g.f)(2)} 0;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${(0,g.f)(14)};
    margin-bottom: ${(0,g.f)(22)};
    padding-top: ${(0,g.f)(2)};
  }
`,R=f.U.div.withConfig({displayName:"workspace__PageIntroCopy",componentId:"sc-c0fa666f-15"})`
  min-width: 0;
`,F=f.U.div.withConfig({displayName:"workspace__PageEyebrow",componentId:"sc-c0fa666f-16"})`
  margin-bottom: ${(0,g.f)(8)};
  color: ${$.accent};
  font-size: ${(0,g.f)(11)};
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1;
  text-transform: uppercase;
`,T=f.U.h1.withConfig({displayName:"workspace__Title",componentId:"sc-c0fa666f-17"})`
  margin: 0;
  color: ${$.text};
  font-size: clamp(${(0,g.f)(30)}, 4vw, ${(0,g.f)(42)});
  font-weight: 720;
  letter-spacing: -0.035em;
  line-height: 1.08;
`,G=f.U.p.withConfig({displayName:"workspace__Subtitle",componentId:"sc-c0fa666f-18"})`
  max-width: ${(0,g.f)(690)};
  margin: ${(0,g.f)(10)} 0 0;
  color: ${$.textMuted};
  font-size: ${(0,g.f)(14)};
  line-height: 1.6;
`,P=f.U.div.withConfig({displayName:"workspace__PageStatus",componentId:"sc-c0fa666f-19"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,g.f)(8)};
  min-height: ${(0,g.f)(30)};
  padding: 0 ${(0,g.f)(11)};
  border: 1px solid ${$.line};
  border-radius: ${(0,g.f)(999)};
  background: ${$.surface};
  color: ${$.textMuted};
  font-size: ${(0,g.f)(12)};
  font-weight: 600;
  white-space: nowrap;
`,D=f.U.span.withConfig({displayName:"workspace__StatusDot",componentId:"sc-c0fa666f-20"})`
  width: ${(0,g.f)(7)};
  height: ${(0,g.f)(7)};
  border-radius: 50%;
  background: ${$.success};
  box-shadow: 0 0 0 ${(0,g.f)(3)} rgba(115, 201, 145, 0.12);
`,E=f.U.main.withConfig({displayName:"workspace__Content",componentId:"sc-c0fa666f-21"})`
  width: 100%;
  max-width: ${(0,g.f)(1180)};
  margin: 0 auto;
  padding: ${(0,g.f)(64)} ${(0,g.f)(28)} ${(0,g.f)(72)};

  @media (max-width: 720px) {
    padding: ${(0,g.f)(24)} ${(0,g.f)(14)} ${(0,g.f)(32)};
  }
`,B=f.U.div.withConfig({displayName:"workspace__WorkspaceShell",componentId:"sc-c0fa666f-22"})`
  min-width: 0;
`,W=f.U.div.withConfig({displayName:"workspace__SectionStack",componentId:"sc-c0fa666f-23"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,g.f)(24)};
`,A=f.U.div.withConfig({displayName:"workspace__GitHubLockedState",componentId:"sc-c0fa666f-24"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(14)};
  min-height: ${(0,g.f)(88)};
  padding: ${(0,g.f)(16)} ${(0,g.f)(18)};

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`,O=f.U.div.withConfig({displayName:"workspace__GitHubLockedCopy",componentId:"sc-c0fa666f-25"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(0,g.f)(3)};
  min-width: 0;
`,X=(0,f.U)(r.default).withConfig({displayName:"workspace__GitHubLockedLink",componentId:"sc-c0fa666f-26"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${(0,g.f)(92)};
  min-height: ${(0,g.f)(34)};
  padding: 0 ${(0,g.f)(13)};
  border: 1px solid ${$.lineStrong};
  border-radius: ${(0,g.f)(7)};
  background: ${$.surfaceRaised};
  color: ${$.text};
  font-size: ${(0,g.f)(13)};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    border-color: ${$.accent};
    color: ${$.accent};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`,K=f.U.div.withConfig({displayName:"workspace__LoadingContainer",componentId:"sc-c0fa666f-27"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${$.page};
`,q=f.U.div.withConfig({displayName:"workspace__LoadingSpinner",componentId:"sc-c0fa666f-28"})`
  width: ${(0,g.f)(40)};
  height: ${(0,g.f)(40)};
  border: 3px solid ${$.line};
  border-top-color: ${$.accent};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,Y=f.U.section.withConfig({displayName:"workspace__Section",componentId:"sc-c0fa666f-29"})`
  border: 1px solid ${$.lineStrong};
  background: ${$.surface};
  border-radius: ${(0,g.f)(12)};
  overflow: hidden;
  box-shadow: 0 3px 6px -2px color-mix(in srgb, var(--shadow-color) 7%, transparent);
`,J=f.U.div.withConfig({displayName:"workspace__SectionHeader",componentId:"sc-c0fa666f-30"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(0,g.f)(52)};
  padding: 0 ${(0,g.f)(18)};
  border-bottom: 1px solid ${$.line};
  background: ${$.surface};
  gap: ${(0,g.f)(12)};
`,Q=f.U.div.withConfig({displayName:"workspace__SectionHeading",componentId:"sc-c0fa666f-31"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(9)};
  min-width: 0;
`,V=f.U.i.withConfig({displayName:"workspace__SectionIcon",componentId:"sc-c0fa666f-32"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(0,g.f)(26)};
  height: ${(0,g.f)(26)};
  border: 1px solid ${$.accentSoft};
  border-radius: ${(0,g.f)(7)};
  background: ${$.accentSoft};
  color: ${$.accent};
  font-size: ${(0,g.f)(14)};
  flex: 0 0 auto;
`,Z=f.U.h2.withConfig({displayName:"workspace__SectionTitle",componentId:"sc-c0fa666f-33"})`
  font-size: ${(0,g.f)(13)};
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  color: ${$.text};
`,ee=f.U.span.withConfig({displayName:"workspace__SectionMeta",componentId:"sc-c0fa666f-34"})`
  min-height: ${(0,g.f)(24)};
  display: inline-flex;
  align-items: center;
  padding: 0 ${(0,g.f)(8)};
  border: 1px solid ${$.line};
  border-radius: ${(0,g.f)(999)};
  background: ${$.surfaceMuted};
  font-size: ${(0,g.f)(11)};
  color: ${$.textFaint};
  white-space: nowrap;
`,ei=f.U.div.withConfig({displayName:"workspace__WorkspaceList",componentId:"sc-c0fa666f-35"})`
  display: flex;
  flex-direction: column;
`,en=(0,f.U)(r.default).withConfig({displayName:"workspace__WorkspaceRow",componentId:"sc-c0fa666f-36"})`
  display: grid;
  grid-template-columns: ${(0,g.f)(38)} minmax(0, 1fr) auto ${(0,g.f)(32)};
  align-items: center;
  gap: ${(0,g.f)(14)};
  min-height: ${(0,g.f)(92)};
  padding: ${(0,g.f)(20)} ${(0,g.f)(24)};
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid ${$.line};
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease;

  &:last-child {
    border-bottom: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${$.surfaceRaised};
    }
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (max-width: 720px) {
    grid-template-columns: ${(0,g.f)(38)} minmax(0, 1fr) ${(0,g.f)(32)};
    gap: ${(0,g.f)(10)};
    padding: ${(0,g.f)(13)} ${(0,g.f)(14)};
  }
`,eo=f.U.div.withConfig({displayName:"workspace__WorkspaceIcon",componentId:"sc-c0fa666f-37"})`
  width: ${(0,g.f)(38)};
  height: ${(0,g.f)(38)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>"github"===e.$variant?$.surfaceMuted:$.accentSoft};
  border: 1px solid
    ${e=>"github"===e.$variant?$.line:$.accentSoft};
  border-radius: ${(0,g.f)(10)};
  color: ${e=>"github"===e.$variant?$.text:$.accent};
  font-size: ${(0,g.f)(18)};
  flex-shrink: 0;
`,et=f.U.div.withConfig({displayName:"workspace__WorkspaceMain",componentId:"sc-c0fa666f-38"})`
  min-width: 0;
`,ea=f.U.div.withConfig({displayName:"workspace__WorkspaceName",componentId:"sc-c0fa666f-39"})`
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,er=f.U.div.withConfig({displayName:"workspace__WorkspacePath",componentId:"sc-c0fa666f-40"})`
  margin-top: ${(0,g.f)(2)};
  color: ${$.textMuted};
  font-size: ${(0,g.f)(13)};
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,es=f.U.div.withConfig({displayName:"workspace__WorkspaceTags",componentId:"sc-c0fa666f-41"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,g.f)(6)};
  min-width: 0;

  @media (max-width: 720px) {
    display: none;
  }
`,ec=f.U.span.withConfig({displayName:"workspace__WorkspaceTag",componentId:"sc-c0fa666f-42"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,g.f)(24)};
  padding: 0 ${(0,g.f)(8)};
  background: ${$.surfaceMuted};
  border: 1px solid ${$.line};
  color: ${$.textMuted};
  font-size: ${(0,g.f)(12)};
  font-weight: 600;
  border-radius: ${(0,g.f)(999)};
  white-space: nowrap;
`,ed=f.U.div.withConfig({displayName:"workspace__EmptyPanel",componentId:"sc-c0fa666f-43"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(12)};
  min-height: ${(0,g.f)(72)};
  padding: ${(0,g.f)(16)};
  border: 1px dashed ${$.lineStrong};
  border-radius: ${(0,g.f)(8)};
  background: ${$.surfaceMuted};
  color: ${$.textMuted};

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(0,g.f)(36)};
    height: ${(0,g.f)(36)};
    border: 1px solid ${$.line};
    border-radius: ${(0,g.f)(8)};
    color: ${$.textFaint};
    font-size: ${(0,g.f)(18)};
    flex: 0 0 auto;
  }
`,el=f.U.div.withConfig({displayName:"workspace__EmptyCopy",componentId:"sc-c0fa666f-44"})`
  min-width: 0;
`,ef=f.U.div.withConfig({displayName:"workspace__EmptyTitle",componentId:"sc-c0fa666f-45"})`
  color: ${$.text};
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  line-height: 1.35;
`,ep=f.U.div.withConfig({displayName:"workspace__EmptyTextLine",componentId:"sc-c0fa666f-46"})`
  margin-top: ${(0,g.f)(2)};
  color: ${$.textMuted};
  font-size: ${(0,g.f)(13)};
  line-height: 1.45;
`,eh=f.U.i.withConfig({displayName:"workspace__OpenIndicator",componentId:"sc-c0fa666f-47"})`
  color: ${$.textFaint};
  font-size: ${(0,g.f)(20)};
  justify-self: center;
`,eg=f.U.button.withConfig({displayName:"workspace__DeleteButton",componentId:"sc-c0fa666f-48"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,g.f)(30)};
  height: ${(0,g.f)(30)};
  background: transparent;
  border: 1px solid transparent;
  border-radius: ${(0,g.f)(7)};
  color: ${$.textFaint};
  cursor: pointer;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;
  justify-self: center;

  &:hover {
    background: rgba(255, 107, 100, 0.1);
    border-color: rgba(255, 107, 100, 0.28);
    color: ${$.danger};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,em=f.U.div.withConfig({displayName:"workspace__ModalOverlay",componentId:"sc-c0fa666f-49"})`
  position: fixed;
  inset: 0;
  background: ${m.e.dialogBackdropColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${(0,g.f)(18)};
  backdrop-filter: blur(${(0,g.f)(10)});
`,eu=f.U.div.withConfig({displayName:"workspace__ModalContent",componentId:"sc-c0fa666f-50"})`
  background: ${$.surface};
  border: 1px solid ${$.lineStrong};
  border-radius: ${(0,g.f)(8)};
  width: 100%;
  max-width: ${(0,g.f)(700)};
  max-height: 84vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${m.e.webShadow};
`,ex=f.U.div.withConfig({displayName:"workspace__ModalHeader",componentId:"sc-c0fa666f-51"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(0,g.f)(54)};
  padding: 0 ${(0,g.f)(18)};
  border-bottom: 1px solid ${$.line};
  background: ${$.surfaceMuted};
`,ew=f.U.h3.withConfig({displayName:"workspace__ModalTitle",componentId:"sc-c0fa666f-52"})`
  font-size: ${(0,g.f)(16)};
  font-weight: 700;
  margin: 0;
`,e$=f.U.button.withConfig({displayName:"workspace__ModalClose",componentId:"sc-c0fa666f-53"})`
  background: transparent;
  border: 1px solid transparent;
  width: ${(0,g.f)(30)};
  height: ${(0,g.f)(30)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(0,g.f)(7)};
  font-size: ${(0,g.f)(18)};
  color: ${$.textMuted};
  cursor: pointer;
  line-height: 1;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    background: ${$.surfaceRaised};
    border-color: ${$.line};
    color: ${$.text};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,eb=f.U.div.withConfig({displayName:"workspace__ModalBody",componentId:"sc-c0fa666f-54"})`
  padding: ${(0,g.f)(18)};
  overflow-y: auto;
  flex: 1;
`,ey=f.U.div.withConfig({displayName:"workspace__ImportForm",componentId:"sc-c0fa666f-55"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,g.f)(14)};
`,ek=f.U.div.withConfig({displayName:"workspace__ImportField",componentId:"sc-c0fa666f-56"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,g.f)(7)};
`,ej=f.U.label.withConfig({displayName:"workspace__FieldLabel",componentId:"sc-c0fa666f-57"})`
  font-size: ${(0,g.f)(12)};
  font-weight: 700;
  color: ${$.textMuted};
`,e_=f.U.select.withConfig({displayName:"workspace__RepoSelect",componentId:"sc-c0fa666f-58"})`
  width: 100%;
  min-height: ${(0,g.f)(38)};
  padding: 0 ${(0,g.f)(12)};
  background: ${$.surfaceMuted};
  border: 1px solid ${$.lineStrong};
  border-radius: ${(0,g.f)(7)};
  color: ${$.text};
  font-size: ${(0,g.f)(14)};
  outline: none;
  cursor: pointer;
  transition:
    border-color 0.16s ease,
    background-color 0.16s ease;

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ev=f.U.div.withConfig({displayName:"workspace__SelectedRepoPanel",componentId:"sc-c0fa666f-59"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(0,g.f)(12)} ${(0,g.f)(14)};
  background: ${$.surfaceMuted};
  border: 1px solid ${$.line};
  border-radius: ${(0,g.f)(8)};
  gap: ${(0,g.f)(12)};
`,eC=f.U.div.withConfig({displayName:"workspace__RepoInfo",componentId:"sc-c0fa666f-60"})`
  flex: 1;
  min-width: 0;
`,eN=f.U.div.withConfig({displayName:"workspace__RepoName",componentId:"sc-c0fa666f-61"})`
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  margin-bottom: ${(0,g.f)(4)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eI=f.U.div.withConfig({displayName:"workspace__RepoDesc",componentId:"sc-c0fa666f-62"})`
  font-size: ${(0,g.f)(13)};
  color: ${$.textMuted};
  margin-bottom: ${(0,g.f)(6)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eU=f.U.div.withConfig({displayName:"workspace__RepoMeta",componentId:"sc-c0fa666f-63"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(8)};
  min-width: 0;
`,eS=f.U.span.withConfig({displayName:"workspace__RepoTag",componentId:"sc-c0fa666f-64"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,g.f)(22)};
  padding: 0 ${(0,g.f)(8)};
  background: ${e=>e.$private?"rgba(255, 107, 100, 0.11)":"rgba(115, 201, 145, 0.11)"};
  border: 1px solid
    ${e=>e.$private?"rgba(255, 107, 100, 0.24)":"rgba(115, 201, 145, 0.24)"};
  color: ${e=>e.$private?$.danger:$.success};
  font-size: ${(0,g.f)(12)};
  font-weight: 700;
  border-radius: ${(0,g.f)(6)};
`,ez=f.U.span.withConfig({displayName:"workspace__RepoUpdated",componentId:"sc-c0fa666f-65"})`
  font-size: ${(0,g.f)(12)};
  color: ${$.textFaint};
  white-space: nowrap;
`,eH=f.U.div.withConfig({displayName:"workspace__ModalActions",componentId:"sc-c0fa666f-66"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,g.f)(8)};
`,eM=f.U.button.withConfig({displayName:"workspace__ImportRepoButton",componentId:"sc-c0fa666f-67"})`
  min-height: ${(0,g.f)(36)};
  padding: 0 ${(0,g.f)(15)};
  background: ${$.accent};
  border: 1px solid ${$.accent};
  border-radius: ${(0,g.f)(7)};
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  color: var(--on-accent);
  cursor: pointer;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    opacity 0.16s ease;

  &:hover:not(:disabled) {
    background: ${$.accentHover};
    border-color: ${$.accentHover};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.58;
    cursor: not-allowed;
  }
`,eL=f.U.div.withConfig({displayName:"workspace__SetupPanel",componentId:"sc-c0fa666f-68"})`
  display: grid;
  grid-template-columns: ${(0,g.f)(38)} minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,g.f)(13)};
  padding: ${(0,g.f)(14)};
  background: ${$.surfaceMuted};
  border: 1px solid ${$.line};
  border-radius: ${(0,g.f)(8)};

  @media (max-width: 640px) {
    grid-template-columns: ${(0,g.f)(38)} minmax(0, 1fr);
  }
`,eR=f.U.div.withConfig({displayName:"workspace__SetupIcon",componentId:"sc-c0fa666f-69"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,g.f)(38)};
  height: ${(0,g.f)(38)};
  background: ${$.surfaceMuted};
  border: 1px solid ${$.lineStrong};
  border-radius: ${(0,g.f)(8)};
  color: ${$.text};
  font-size: ${(0,g.f)(19)};
`,eF=f.U.div.withConfig({displayName:"workspace__SetupCopy",componentId:"sc-c0fa666f-70"})`
  min-width: 0;
`,eT=f.U.div.withConfig({displayName:"workspace__SetupTitle",componentId:"sc-c0fa666f-71"})`
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  line-height: 1.35;
`,eG=f.U.div.withConfig({displayName:"workspace__SetupText",componentId:"sc-c0fa666f-72"})`
  margin-top: ${(0,g.f)(3)};
  font-size: ${(0,g.f)(13)};
  color: ${$.textMuted};
  line-height: 1.5;
`,eP=(0,f.U)(r.default).withConfig({displayName:"workspace__SetupLink",componentId:"sc-c0fa666f-73"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,g.f)(6)};
  min-height: ${(0,g.f)(34)};
  padding: 0 ${(0,g.f)(13)};
  background: ${$.accent};
  border: 1px solid ${$.accent};
  border-radius: ${(0,g.f)(7)};
  color: var(--on-accent);
  font-size: ${(0,g.f)(14)};
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${$.accentHover};
    border-color: ${$.accentHover};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
  }
`,eD=f.U.div.withConfig({displayName:"workspace__ErrorPanel",componentId:"sc-c0fa666f-74"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(8)};
  min-height: ${(0,g.f)(38)};
  padding: ${(0,g.f)(9)} ${(0,g.f)(11)};
  background: rgba(255, 107, 100, 0.1);
  border: 1px solid rgba(255, 107, 100, 0.24);
  border-radius: ${(0,g.f)(8)};
  color: ${$.danger};
  font-size: ${(0,g.f)(14)};
`,eE=f.U.div.withConfig({displayName:"workspace__NoticePanel",componentId:"sc-c0fa666f-75"})`
  display: flex;
  align-items: center;
  gap: ${(0,g.f)(8)};
  min-height: ${(0,g.f)(38)};
  padding: ${(0,g.f)(9)} ${(0,g.f)(11)};
  background: rgba(115, 201, 145, 0.1);
  border: 1px solid rgba(115, 201, 145, 0.24);
  border-radius: ${(0,g.f)(8)};
  color: ${$.success};
  font-size: ${(0,g.f)(14)};
`,eB=(0,f.U)(r.default).withConfig({displayName:"workspace__ExistingWorkspaceLink",componentId:"sc-c0fa666f-76"})`
  margin-left: auto;
  color: inherit;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,eW=f.U.div.withConfig({displayName:"workspace__LoadingText",componentId:"sc-c0fa666f-77"})`
  font-size: ${(0,g.f)(14)};
  color: ${$.textMuted};
  text-align: center;
  padding: ${(0,g.f)(18)} 0;
`;e.s(["__N_SSG",0,!0,"default",0,function(){let{t:e}=(0,s.f)(),r=(0,d.useRouter)(),{loading:f,isAuthenticated:g}=(0,a.F)(!1),[m,$]=(0,l.useState)([]),[S,eA]=(0,l.useState)(!1),[eO,eX]=(0,l.useState)(""),[eK,eq]=(0,l.useState)([]),[eY,eJ]=(0,l.useState)(null),[eQ,eV]=(0,l.useState)(!1),[eZ,e0]=(0,l.useState)(""),[e6,e1]=(0,l.useState)(!1),[e2,e3]=(0,l.useState)(""),[e4,e8]=(0,l.useState)(""),[e7,e5]=(0,l.useState)(!1),[e9,ie]=(0,l.useState)(!1),{importingRepo:ii,importError:io,clearImportError:it,importRepository:ia}=(0,o.f)();(0,l.useEffect)(()=>{g&&!f&&ir()},[g,f]);let ir=async()=>{eA(!0),eX("");try{let e=await p.k.get("/workspaces");$(e)}catch(e){eX((0,t.w)(e,"Failed to load workspaces"))}finally{eA(!1)}},is=async()=>{e1(!0),e3("");try{let e=await n.f.listRepos(1,100);eq(e)}catch(e){e3(e?.message||"Failed to load GitHub repositories")}finally{e1(!1)}},ic=async()=>{eV(!0),e0("");try{let e=await n.f.getConnection();return eJ(e),e}catch(e){return eJ(null),e0(e instanceof Error&&e.message?e.message:"Failed to load GitHub connection"),null}finally{eV(!1)}},id=async()=>{ie(!0),e8(""),eq([]),e3(""),it();let e=await ic();e?.linked&&await is()},il=async()=>{if(!e7){e5(!0),e3("");try{let e=r.locale===r.defaultLocale?void 0:r.locale,{authorizeUrl:i}=await n.f.startInstallation("/workspace",e);(0,h.f)(i)}catch(e){e3(e instanceof Error&&e.message?e.message:"Failed to start GitHub repository authorization"),e5(!1)}}},ip=async e=>{await ia(e)&&(await ir(),ie(!1))},ih=async e=>{if(confirm("Are you sure you want to delete this workspace?"))try{await p.k.delete(`/workspaces/${e}`),await ir()}catch(e){alert(e?.message||"Failed to delete workspace")}},ig=e=>`/workspace/${encodeURIComponent(e.id)}`;if(f)return(0,i.jsx)(K,{children:(0,i.jsx)(q,{})});let im=m.filter(e=>"GITHUB"!==e.type),iu=m.filter(e=>"GITHUB"===e.type),ix=eK.find(e=>w(e)===e4),iw=ix?m.find(e=>"GITHUB"===e.type&&e.githubRepoId===ix.id):void 0;return(0,i.jsxs)(b,{children:[(0,i.jsx)(c.f,{title:`${e("workspace.title")} | MarkFlowy`}),(0,i.jsx)(y,{children:(0,i.jsxs)(k,{children:[(0,i.jsxs)(j,{"aria-label":"Workspace navigation",children:[(0,i.jsxs)(_,{href:"/","aria-label":"Go to MarkFlowy home",children:[(0,i.jsx)(v,{src:"/logo.svg",alt:""}),(0,i.jsx)(C,{children:"MarkFlowy"})]}),(0,i.jsx)(N,{"aria-hidden":"true"}),(0,i.jsxs)(I,{"aria-current":"page",children:[(0,i.jsx)("i",{className:"ri-folder-3-line","aria-hidden":"true"}),e("workspace.title")]})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(u.f,{}),g?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(z,{href:"/settings",children:[(0,i.jsx)("i",{className:"ri-user-settings-line","aria-hidden":"true"}),(0,i.jsx)("span",{children:e("workspace.settings")})]}),(0,i.jsxs)(H,{type:"button",onClick:id,children:[(0,i.jsx)("i",{className:"ri-add-line","aria-hidden":"true"}),e("workspace.import")]})]}):(0,i.jsxs)(M,{href:"/auth",children:[(0,i.jsx)("i",{className:"ri-github-fill","aria-hidden":"true"}),e("auth.signIn")]})]})]})}),(0,i.jsxs)(E,{children:[(0,i.jsxs)(L,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(F,{children:e("workspace.eyebrow")}),(0,i.jsx)(T,{children:e("workspace.title")}),(0,i.jsx)(G,{children:e("workspace.description")})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(D,{"aria-hidden":"true"}),g?e("workspace.syncedCount",{count:m.length}):e("workspace.ready")]})]}),(0,i.jsxs)(B,{children:[eO&&(0,i.jsxs)(eD,{children:[(0,i.jsx)("i",{className:"ri-error-warning-line"}),(0,i.jsx)("span",{children:eO})]}),(0,i.jsxs)(W,{children:[!g&&(0,i.jsxs)(Y,{children:[(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{className:"ri-history-line","aria-hidden":"true"}),(0,i.jsx)(Z,{children:e("workspace.recent")})]}),(0,i.jsx)(ee,{children:e("workspace.pinned")})]}),(0,i.jsx)(ei,{children:(0,i.jsxs)(en,{href:"/workspace/demo-workspace",children:[(0,i.jsx)(eo,{$variant:"demo",children:(0,i.jsx)("i",{className:"ri-folder-3-line"})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ea,{children:e("workspace.demo")}),(0,i.jsx)(er,{children:e("workspace.demoDescription")})]}),(0,i.jsxs)(es,{children:[(0,i.jsx)(ec,{children:"Demo"}),(0,i.jsx)(ec,{children:e("workspace.local")})]}),(0,i.jsx)(eh,{className:"ri-arrow-right-s-line"})]})})]}),!g&&(0,i.jsxs)(Y,{"aria-labelledby":"github-workspaces-heading",children:[(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{className:"ri-github-fill","aria-hidden":"true"}),(0,i.jsx)(Z,{id:"github-workspaces-heading",children:"GitHub"})]}),(0,i.jsx)(ee,{children:e("workspace.signInRequired")})]}),(0,i.jsxs)(A,{children:[(0,i.jsx)(eo,{$variant:"github",children:(0,i.jsx)("i",{className:"ri-github-fill","aria-hidden":"true"})}),(0,i.jsxs)(O,{children:[(0,i.jsx)(ea,{children:e("workspace.connectTitle")}),(0,i.jsx)(ep,{children:e("workspace.connectDescription")})]}),(0,i.jsx)(X,{href:"/auth",children:e("auth.signIn")})]})]}),g&&im.length>0&&(0,i.jsxs)(Y,{children:[(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{className:"ri-folder-shared-line","aria-hidden":"true"}),(0,i.jsx)(Z,{children:e("workspace.localShared")})]}),(0,i.jsx)(ee,{children:e("workspace.count",{count:im.length})})]}),(0,i.jsx)(ei,{children:im.map(n=>(0,i.jsxs)(en,{href:ig(n),children:[(0,i.jsx)(eo,{$variant:"local",children:(0,i.jsx)("i",{className:"ri-folder-3-line"})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ea,{children:n.name}),(0,i.jsx)(er,{children:n.sourceUrl||n.slug})]}),(0,i.jsxs)(es,{children:[(0,i.jsx)(ec,{children:(i=>{switch(i){case"GITHUB":return"GitHub";case"LOCAL":return e("workspace.local");case"SYNCED":return e("workspace.synced");case"SHARED":return e("workspace.shared");default:return i}})(n.type)}),(0,i.jsx)(ec,{children:x(n.updatedAt)})]}),(0,i.jsx)(eg,{onClick:e=>{e.preventDefault(),e.stopPropagation(),ih(n.id)},"aria-label":`Delete ${n.name}`,title:`Delete ${n.name}`,children:(0,i.jsx)("i",{className:"ri-delete-bin-line"})})]},n.id))})]}),g&&iu.length>0&&(0,i.jsxs)(Y,{children:[(0,i.jsxs)(J,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(V,{className:"ri-github-fill","aria-hidden":"true"}),(0,i.jsx)(Z,{children:"GitHub"})]}),(0,i.jsx)(ee,{children:e("workspace.repositories",{count:iu.length})})]}),(0,i.jsx)(ei,{children:iu.map(e=>(0,i.jsxs)(en,{href:ig(e),children:[(0,i.jsx)(eo,{$variant:"github",children:(0,i.jsx)("i",{className:"ri-github-fill"})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(ea,{children:e.name}),(0,i.jsx)(er,{children:e.sourceUrl||e.slug})]}),(0,i.jsxs)(es,{children:[(0,i.jsx)(ec,{children:"GitHub"}),(0,i.jsx)(ec,{children:x(e.updatedAt)})]}),(0,i.jsx)(eg,{onClick:i=>{i.preventDefault(),i.stopPropagation(),ih(e.id)},"aria-label":`Delete ${e.name}`,title:`Delete ${e.name}`,children:(0,i.jsx)("i",{className:"ri-delete-bin-line"})})]},e.id))})]}),S&&(0,i.jsx)(eW,{children:e("workspace.loading")}),g&&!S&&0===m.length&&(0,i.jsxs)(ed,{children:[(0,i.jsx)("i",{className:"ri-inbox-2-line"}),(0,i.jsxs)(el,{children:[(0,i.jsx)(ef,{children:e("workspace.emptyTitle")}),(0,i.jsx)(ep,{children:e("workspace.emptyDescription")})]})]})]})]})]}),e9&&(0,i.jsx)(em,{onClick:()=>ie(!1),children:(0,i.jsxs)(eu,{onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(ex,{children:[(0,i.jsx)(ew,{children:"Import Workspace"}),(0,i.jsx)(e$,{onClick:()=>ie(!1),"aria-label":"Close",title:"Close",children:(0,i.jsx)("i",{className:"ri-close-line"})})]}),(0,i.jsxs)(eb,{children:[eQ&&(0,i.jsx)(eW,{children:"Checking GitHub connection..."}),!eQ&&eZ&&(0,i.jsxs)(eD,{children:[(0,i.jsx)("i",{className:"ri-error-warning-line"}),(0,i.jsx)("span",{children:eZ})]}),!eQ&&!eZ&&!eY?.linked&&(0,i.jsxs)(eL,{children:[(0,i.jsx)(eR,{children:(0,i.jsx)("i",{className:"ri-github-fill"})}),(0,i.jsxs)(eF,{children:[(0,i.jsx)(eT,{children:"Connect GitHub first"}),(0,i.jsx)(eG,{children:"Link your GitHub account in personal settings before importing a repository workspace."})]}),(0,i.jsxs)(eP,{href:"/settings#github",children:["Link GitHub",(0,i.jsx)("i",{className:"ri-arrow-right-line"})]})]}),!eQ&&!eZ&&eY?.linked&&(0,i.jsxs)(ey,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(ej,{htmlFor:"github-repo-select",children:"GitHub repository"}),(0,i.jsxs)(e_,{id:"github-repo-select",value:e4,onChange:e=>e8(e.target.value),disabled:e6||e7||!!ii,children:[(0,i.jsx)("option",{value:"",children:e6?"Loading repositories...":"Select a repository"}),eK.map(e=>(0,i.jsx)("option",{value:w(e),children:e.full_name},w(e)))]})]}),(e2||io)&&(0,i.jsxs)(eD,{children:[(0,i.jsx)("i",{className:"ri-error-warning-line"}),(0,i.jsx)("span",{children:e2||io})]}),!e6&&0===eK.length&&!e2&&(0,i.jsxs)(eL,{children:[(0,i.jsx)(eR,{children:(0,i.jsx)("i",{className:"ri-github-fill"})}),(0,i.jsxs)(eF,{children:[(0,i.jsx)(eT,{children:"No authorized repositories found"}),(0,i.jsx)(eG,{children:"Choose the GitHub repositories that MarkFlowy can import and edit."})]}),(0,i.jsx)(eM,{type:"button",onClick:il,disabled:e7,children:e7?"Opening GitHub...":"Choose Repositories"})]}),ix&&(0,i.jsx)(ev,{children:(0,i.jsxs)(eC,{children:[(0,i.jsx)(eN,{children:ix.full_name}),ix.description&&(0,i.jsx)(eI,{children:ix.description}),(0,i.jsxs)(eU,{children:[(0,i.jsx)(eS,{$private:ix.private,children:ix.private?"Private":"Public"}),(0,i.jsxs)(ez,{children:["Updated ",new Date(ix.updated_at).toLocaleDateString()]})]})]})}),iw&&(0,i.jsxs)(eE,{children:[(0,i.jsx)("i",{className:"ri-checkbox-circle-line"}),(0,i.jsx)("span",{children:"This repository is already imported."}),(0,i.jsx)(eB,{href:ig(iw),children:"Open"})]}),(0,i.jsx)(eH,{children:(0,i.jsx)(eM,{onClick:()=>ix&&ip(ix),disabled:!ix||!!iw||e7||!!ii,children:ii===ix?.full_name?"Importing...":"Import Repository"})})]})]})]})})]})}])}]);