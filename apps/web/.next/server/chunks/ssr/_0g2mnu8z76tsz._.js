(()=>{"use strict";module.exports=[41419,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(68210),f=a.i(60494),g=a.i(71211),h=a.i(79297),i=a.i(1257),j=a.i(21377),k=a.i(91854),l=a.i(19730),m=a.i(41910),n=a.i(27669),o=a.i(42931),p=a.i(13753),q=a.i(64180),r=a.i(88844),s=a.i(7294),t=a.i(99141),u=b([s,t]);[s,t]=u.then?(await u)():u;let v=a=>a?new Date(a).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):"Not available",w=a=>`${a.installationId}:${a.id}`,x={page:s.e.webPaperWarm,header:s.e.navBackground,surface:s.e.webPaper,surfaceRaised:s.e.hoverColor,surfaceMuted:s.e.webPaperWarm,line:s.e.webLineSoft,lineStrong:s.e.borderColor,text:s.e.primaryFontColor,textMuted:s.e.webInkSoft,textFaint:s.e.webInkFaint,accent:s.e.accentColor,accentHover:"color-mix(in srgb, var(--seal) 85%, var(--ink))",accentSoft:s.e.accentColorFocused,danger:s.e.dangerColor,success:s.e.successColor},y=o.default.div.withConfig({displayName:"workspace__Container",componentId:"sc-c0fa666f-0"})`
  min-height: 100vh;
  background: linear-gradient(155deg, ${x.surface} 10%, transparent 60%),
    ${x.page};
  color: ${x.text};
  font-family: ${a=>a.theme.fontFamily};
`,z=o.default.header.withConfig({displayName:"workspace__Header",componentId:"sc-c0fa666f-1"})`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${x.line};
  background: ${x.header};
  backdrop-filter: blur(${(0,r.f)(18)});
  -webkit-backdrop-filter: blur(${(0,r.f)(18)});
`,A=o.default.div.withConfig({displayName:"workspace__HeaderInner",componentId:"sc-c0fa666f-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${(0,r.f)(1180)};
  min-height: ${(0,r.f)(64)};
  margin: 0 auto;
  padding: 0 ${(0,r.f)(28)};
  gap: ${(0,r.f)(18)};

  @media (max-width: 720px) {
    min-height: ${(0,r.f)(58)};
    padding: 0 ${(0,r.f)(14)};
    gap: ${(0,r.f)(10)};
  }
`,B=o.default.nav.withConfig({displayName:"workspace__HeaderNavigation",componentId:"sc-c0fa666f-3"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(10)};
  min-width: 0;
`,C=(0,o.default)(i.default).withConfig({displayName:"workspace__BrandLink",componentId:"sc-c0fa666f-4"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,r.f)(40)};
  gap: ${(0,r.f)(9)};
  color: ${x.text};
  text-decoration: none;
  border-radius: ${(0,r.f)(8)};

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,D=o.default.img.withConfig({displayName:"workspace__BrandLogo",componentId:"sc-c0fa666f-5"})`
  width: ${(0,r.f)(25)};
  height: ${(0,r.f)(25)};
  flex: 0 0 auto;
`,E=o.default.strong.withConfig({displayName:"workspace__BrandName",componentId:"sc-c0fa666f-6"})`
  font-size: ${(0,r.f)(20)};
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 350px) {
    display: none;
  }
`,F=o.default.span.withConfig({displayName:"workspace__NavigationDivider",componentId:"sc-c0fa666f-7"})`
  width: 1px;
  height: ${(0,r.f)(20)};
  background: ${x.lineStrong};

  @media (max-width: 720px) {
    display: none;
  }
`,G=o.default.span.withConfig({displayName:"workspace__CurrentLocation",componentId:"sc-c0fa666f-8"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,r.f)(7)};
  color: ${x.textMuted};
  font-size: ${(0,r.f)(13)};
  white-space: nowrap;

  i {
    color: ${x.accent};
    font-size: ${(0,r.f)(15)};
  }

  @media (max-width: 720px) {
    display: none;
  }
`,H=o.default.div.withConfig({displayName:"workspace__HeaderRight",componentId:"sc-c0fa666f-9"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(8)};
  flex-shrink: 0;
`,I=(0,o.default)(i.default).withConfig({displayName:"workspace__HeaderActionLink",componentId:"sc-c0fa666f-10"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,r.f)(7)};
  height: ${(0,r.f)(36)};
  padding: 0 ${(0,r.f)(13)};
  background: ${x.surfaceRaised};
  border: 1px solid ${x.lineStrong};
  border-radius: ${(0,r.f)(8)};
  font-size: ${(0,r.f)(13)};
  font-weight: 600;
  color: ${x.text};
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);
  white-space: nowrap;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${x.surfaceRaised};
      border-color: ${x.accent};
      color: ${x.accent};
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
`,J=(0,o.default)(I).withConfig({displayName:"workspace__SettingsLink",componentId:"sc-c0fa666f-11"})`
  min-width: ${(0,r.f)(104)};

  @media (max-width: 720px) {
    width: ${(0,r.f)(36)};
    min-width: ${(0,r.f)(36)};
    padding: 0;

    span {
      display: none;
    }
  }
`,K=o.default.button.withConfig({displayName:"workspace__ImportButton",componentId:"sc-c0fa666f-12"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,r.f)(7)};
  min-width: ${(0,r.f)(156)};
  height: ${(0,r.f)(36)};
  padding: 0 ${(0,r.f)(15)};
  background: ${x.accent};
  border: 1px solid ${x.accent};
  border-radius: ${(0,r.f)(8)};
  font-size: ${(0,r.f)(13)};
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
      background: ${x.accentHover};
      border-color: ${x.accentHover};
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
    min-width: ${(0,r.f)(132)};
  }
`,L=(0,o.default)(i.default).withConfig({displayName:"workspace__GitHubSignInLink",componentId:"sc-c0fa666f-13"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,r.f)(7)};
  min-width: ${(0,r.f)(94)};
  height: ${(0,r.f)(36)};
  padding: 0 ${(0,r.f)(15)};
  background: ${x.accent};
  border: 1px solid ${x.accent};
  border-radius: ${(0,r.f)(8)};
  color: var(--on-accent);
  font-size: ${(0,r.f)(13)};
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${x.accentHover};
      border-color: ${x.accentHover};
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
`,M=o.default.div.withConfig({displayName:"workspace__PageIntro",componentId:"sc-c0fa666f-14"})`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${(0,r.f)(28)};
  margin-bottom: ${(0,r.f)(28)};
  padding: ${(0,r.f)(8)} ${(0,r.f)(2)} 0;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${(0,r.f)(14)};
    margin-bottom: ${(0,r.f)(22)};
    padding-top: ${(0,r.f)(2)};
  }
`,N=o.default.div.withConfig({displayName:"workspace__PageIntroCopy",componentId:"sc-c0fa666f-15"})`
  min-width: 0;
`,O=o.default.div.withConfig({displayName:"workspace__PageEyebrow",componentId:"sc-c0fa666f-16"})`
  margin-bottom: ${(0,r.f)(8)};
  color: ${x.accent};
  font-size: ${(0,r.f)(11)};
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1;
  text-transform: uppercase;
`,P=o.default.h1.withConfig({displayName:"workspace__Title",componentId:"sc-c0fa666f-17"})`
  margin: 0;
  color: ${x.text};
  font-size: clamp(${(0,r.f)(30)}, 4vw, ${(0,r.f)(42)});
  font-weight: 720;
  letter-spacing: -0.035em;
  line-height: 1.08;
`,Q=o.default.p.withConfig({displayName:"workspace__Subtitle",componentId:"sc-c0fa666f-18"})`
  max-width: ${(0,r.f)(690)};
  margin: ${(0,r.f)(10)} 0 0;
  color: ${x.textMuted};
  font-size: ${(0,r.f)(14)};
  line-height: 1.6;
`,R=o.default.div.withConfig({displayName:"workspace__PageStatus",componentId:"sc-c0fa666f-19"})`
  display: inline-flex;
  align-items: center;
  gap: ${(0,r.f)(8)};
  min-height: ${(0,r.f)(30)};
  padding: 0 ${(0,r.f)(11)};
  border: 1px solid ${x.line};
  border-radius: ${(0,r.f)(999)};
  background: ${x.surface};
  color: ${x.textMuted};
  font-size: ${(0,r.f)(12)};
  font-weight: 600;
  white-space: nowrap;
`,S=o.default.span.withConfig({displayName:"workspace__StatusDot",componentId:"sc-c0fa666f-20"})`
  width: ${(0,r.f)(7)};
  height: ${(0,r.f)(7)};
  border-radius: 50%;
  background: ${x.success};
  box-shadow: 0 0 0 ${(0,r.f)(3)} rgba(115, 201, 145, 0.12);
`,T=o.default.main.withConfig({displayName:"workspace__Content",componentId:"sc-c0fa666f-21"})`
  width: 100%;
  max-width: ${(0,r.f)(1180)};
  margin: 0 auto;
  padding: ${(0,r.f)(64)} ${(0,r.f)(28)} ${(0,r.f)(72)};

  @media (max-width: 720px) {
    padding: ${(0,r.f)(24)} ${(0,r.f)(14)} ${(0,r.f)(32)};
  }
`,U=o.default.div.withConfig({displayName:"workspace__WorkspaceShell",componentId:"sc-c0fa666f-22"})`
  min-width: 0;
`,V=o.default.div.withConfig({displayName:"workspace__SectionStack",componentId:"sc-c0fa666f-23"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,r.f)(24)};
`,W=o.default.div.withConfig({displayName:"workspace__GitHubLockedState",componentId:"sc-c0fa666f-24"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(14)};
  min-height: ${(0,r.f)(88)};
  padding: ${(0,r.f)(16)} ${(0,r.f)(18)};

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`,X=o.default.div.withConfig({displayName:"workspace__GitHubLockedCopy",componentId:"sc-c0fa666f-25"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(0,r.f)(3)};
  min-width: 0;
`,Y=(0,o.default)(i.default).withConfig({displayName:"workspace__GitHubLockedLink",componentId:"sc-c0fa666f-26"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${(0,r.f)(92)};
  min-height: ${(0,r.f)(34)};
  padding: 0 ${(0,r.f)(13)};
  border: 1px solid ${x.lineStrong};
  border-radius: ${(0,r.f)(7)};
  background: ${x.surfaceRaised};
  color: ${x.text};
  font-size: ${(0,r.f)(13)};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    border-color: ${x.accent};
    color: ${x.accent};
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
`,Z=o.default.div.withConfig({displayName:"workspace__LoadingContainer",componentId:"sc-c0fa666f-27"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${x.page};
`,$=o.default.div.withConfig({displayName:"workspace__LoadingSpinner",componentId:"sc-c0fa666f-28"})`
  width: ${(0,r.f)(40)};
  height: ${(0,r.f)(40)};
  border: 3px solid ${x.line};
  border-top-color: ${x.accent};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,_=o.default.section.withConfig({displayName:"workspace__Section",componentId:"sc-c0fa666f-29"})`
  border: 1px solid ${x.lineStrong};
  background: ${x.surface};
  border-radius: ${(0,r.f)(12)};
  overflow: hidden;
  box-shadow: 0 3px 6px -2px color-mix(in srgb, var(--shadow-color) 7%, transparent);
`,aa=o.default.div.withConfig({displayName:"workspace__SectionHeader",componentId:"sc-c0fa666f-30"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(0,r.f)(52)};
  padding: 0 ${(0,r.f)(18)};
  border-bottom: 1px solid ${x.line};
  background: ${x.surface};
  gap: ${(0,r.f)(12)};
`,ab=o.default.div.withConfig({displayName:"workspace__SectionHeading",componentId:"sc-c0fa666f-31"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(9)};
  min-width: 0;
`,ac=o.default.i.withConfig({displayName:"workspace__SectionIcon",componentId:"sc-c0fa666f-32"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(0,r.f)(26)};
  height: ${(0,r.f)(26)};
  border: 1px solid ${x.accentSoft};
  border-radius: ${(0,r.f)(7)};
  background: ${x.accentSoft};
  color: ${x.accent};
  font-size: ${(0,r.f)(14)};
  flex: 0 0 auto;
`,ad=o.default.h2.withConfig({displayName:"workspace__SectionTitle",componentId:"sc-c0fa666f-33"})`
  font-size: ${(0,r.f)(13)};
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  color: ${x.text};
`,ae=o.default.span.withConfig({displayName:"workspace__SectionMeta",componentId:"sc-c0fa666f-34"})`
  min-height: ${(0,r.f)(24)};
  display: inline-flex;
  align-items: center;
  padding: 0 ${(0,r.f)(8)};
  border: 1px solid ${x.line};
  border-radius: ${(0,r.f)(999)};
  background: ${x.surfaceMuted};
  font-size: ${(0,r.f)(11)};
  color: ${x.textFaint};
  white-space: nowrap;
`,af=o.default.div.withConfig({displayName:"workspace__WorkspaceList",componentId:"sc-c0fa666f-35"})`
  display: flex;
  flex-direction: column;
`,ag=(0,o.default)(i.default).withConfig({displayName:"workspace__WorkspaceRow",componentId:"sc-c0fa666f-36"})`
  display: grid;
  grid-template-columns: ${(0,r.f)(38)} minmax(0, 1fr) auto ${(0,r.f)(32)};
  align-items: center;
  gap: ${(0,r.f)(14)};
  min-height: ${(0,r.f)(92)};
  padding: ${(0,r.f)(20)} ${(0,r.f)(24)};
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid ${x.line};
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease;

  &:last-child {
    border-bottom: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${x.surfaceRaised};
    }
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }

  @media (max-width: 720px) {
    grid-template-columns: ${(0,r.f)(38)} minmax(0, 1fr) ${(0,r.f)(32)};
    gap: ${(0,r.f)(10)};
    padding: ${(0,r.f)(13)} ${(0,r.f)(14)};
  }
`,ah=o.default.div.withConfig({displayName:"workspace__WorkspaceIcon",componentId:"sc-c0fa666f-37"})`
  width: ${(0,r.f)(38)};
  height: ${(0,r.f)(38)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>"github"===a.$variant?x.surfaceMuted:x.accentSoft};
  border: 1px solid
    ${a=>"github"===a.$variant?x.line:x.accentSoft};
  border-radius: ${(0,r.f)(10)};
  color: ${a=>"github"===a.$variant?x.text:x.accent};
  font-size: ${(0,r.f)(18)};
  flex-shrink: 0;
`,ai=o.default.div.withConfig({displayName:"workspace__WorkspaceMain",componentId:"sc-c0fa666f-38"})`
  min-width: 0;
`,aj=o.default.div.withConfig({displayName:"workspace__WorkspaceName",componentId:"sc-c0fa666f-39"})`
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ak=o.default.div.withConfig({displayName:"workspace__WorkspacePath",componentId:"sc-c0fa666f-40"})`
  margin-top: ${(0,r.f)(2)};
  color: ${x.textMuted};
  font-size: ${(0,r.f)(13)};
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,al=o.default.div.withConfig({displayName:"workspace__WorkspaceTags",componentId:"sc-c0fa666f-41"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,r.f)(6)};
  min-width: 0;

  @media (max-width: 720px) {
    display: none;
  }
`,am=o.default.span.withConfig({displayName:"workspace__WorkspaceTag",componentId:"sc-c0fa666f-42"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,r.f)(24)};
  padding: 0 ${(0,r.f)(8)};
  background: ${x.surfaceMuted};
  border: 1px solid ${x.line};
  color: ${x.textMuted};
  font-size: ${(0,r.f)(12)};
  font-weight: 600;
  border-radius: ${(0,r.f)(999)};
  white-space: nowrap;
`,an=o.default.div.withConfig({displayName:"workspace__EmptyPanel",componentId:"sc-c0fa666f-43"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(12)};
  min-height: ${(0,r.f)(72)};
  padding: ${(0,r.f)(16)};
  border: 1px dashed ${x.lineStrong};
  border-radius: ${(0,r.f)(8)};
  background: ${x.surfaceMuted};
  color: ${x.textMuted};

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(0,r.f)(36)};
    height: ${(0,r.f)(36)};
    border: 1px solid ${x.line};
    border-radius: ${(0,r.f)(8)};
    color: ${x.textFaint};
    font-size: ${(0,r.f)(18)};
    flex: 0 0 auto;
  }
`,ao=o.default.div.withConfig({displayName:"workspace__EmptyCopy",componentId:"sc-c0fa666f-44"})`
  min-width: 0;
`,ap=o.default.div.withConfig({displayName:"workspace__EmptyTitle",componentId:"sc-c0fa666f-45"})`
  color: ${x.text};
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  line-height: 1.35;
`,aq=o.default.div.withConfig({displayName:"workspace__EmptyTextLine",componentId:"sc-c0fa666f-46"})`
  margin-top: ${(0,r.f)(2)};
  color: ${x.textMuted};
  font-size: ${(0,r.f)(13)};
  line-height: 1.45;
`,ar=o.default.i.withConfig({displayName:"workspace__OpenIndicator",componentId:"sc-c0fa666f-47"})`
  color: ${x.textFaint};
  font-size: ${(0,r.f)(20)};
  justify-self: center;
`,as=o.default.button.withConfig({displayName:"workspace__DeleteButton",componentId:"sc-c0fa666f-48"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,r.f)(30)};
  height: ${(0,r.f)(30)};
  background: transparent;
  border: 1px solid transparent;
  border-radius: ${(0,r.f)(7)};
  color: ${x.textFaint};
  cursor: pointer;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;
  justify-self: center;

  &:hover {
    background: rgba(255, 107, 100, 0.1);
    border-color: rgba(255, 107, 100, 0.28);
    color: ${x.danger};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,at=o.default.div.withConfig({displayName:"workspace__ModalOverlay",componentId:"sc-c0fa666f-49"})`
  position: fixed;
  inset: 0;
  background: ${s.e.dialogBackdropColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${(0,r.f)(18)};
  backdrop-filter: blur(${(0,r.f)(10)});
`,au=o.default.div.withConfig({displayName:"workspace__ModalContent",componentId:"sc-c0fa666f-50"})`
  background: ${x.surface};
  border: 1px solid ${x.lineStrong};
  border-radius: ${(0,r.f)(8)};
  width: 100%;
  max-width: ${(0,r.f)(700)};
  max-height: 84vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${s.e.webShadow};
`,av=o.default.div.withConfig({displayName:"workspace__ModalHeader",componentId:"sc-c0fa666f-51"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(0,r.f)(54)};
  padding: 0 ${(0,r.f)(18)};
  border-bottom: 1px solid ${x.line};
  background: ${x.surfaceMuted};
`,aw=o.default.h3.withConfig({displayName:"workspace__ModalTitle",componentId:"sc-c0fa666f-52"})`
  font-size: ${(0,r.f)(16)};
  font-weight: 700;
  margin: 0;
`,ax=o.default.button.withConfig({displayName:"workspace__ModalClose",componentId:"sc-c0fa666f-53"})`
  background: transparent;
  border: 1px solid transparent;
  width: ${(0,r.f)(30)};
  height: ${(0,r.f)(30)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(0,r.f)(7)};
  font-size: ${(0,r.f)(18)};
  color: ${x.textMuted};
  cursor: pointer;
  line-height: 1;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    background: ${x.surfaceRaised};
    border-color: ${x.line};
    color: ${x.text};
  }

  &:focus-visible {
    outline: none;
    text-decoration-line: underline;
    text-underline-offset: 2px;
    opacity: 0.8;
  }
`,ay=o.default.div.withConfig({displayName:"workspace__ModalBody",componentId:"sc-c0fa666f-54"})`
  padding: ${(0,r.f)(18)};
  overflow-y: auto;
  flex: 1;
`,az=o.default.div.withConfig({displayName:"workspace__ImportForm",componentId:"sc-c0fa666f-55"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,r.f)(14)};
`,aA=o.default.div.withConfig({displayName:"workspace__ImportField",componentId:"sc-c0fa666f-56"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,r.f)(7)};
`,aB=o.default.label.withConfig({displayName:"workspace__FieldLabel",componentId:"sc-c0fa666f-57"})`
  font-size: ${(0,r.f)(12)};
  font-weight: 700;
  color: ${x.textMuted};
`,aC=o.default.select.withConfig({displayName:"workspace__RepoSelect",componentId:"sc-c0fa666f-58"})`
  width: 100%;
  min-height: ${(0,r.f)(38)};
  padding: 0 ${(0,r.f)(12)};
  background: ${x.surfaceMuted};
  border: 1px solid ${x.lineStrong};
  border-radius: ${(0,r.f)(7)};
  color: ${x.text};
  font-size: ${(0,r.f)(14)};
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
`,aD=o.default.div.withConfig({displayName:"workspace__SelectedRepoPanel",componentId:"sc-c0fa666f-59"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(0,r.f)(12)} ${(0,r.f)(14)};
  background: ${x.surfaceMuted};
  border: 1px solid ${x.line};
  border-radius: ${(0,r.f)(8)};
  gap: ${(0,r.f)(12)};
`,aE=o.default.div.withConfig({displayName:"workspace__RepoInfo",componentId:"sc-c0fa666f-60"})`
  flex: 1;
  min-width: 0;
`,aF=o.default.div.withConfig({displayName:"workspace__RepoName",componentId:"sc-c0fa666f-61"})`
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  margin-bottom: ${(0,r.f)(4)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aG=o.default.div.withConfig({displayName:"workspace__RepoDesc",componentId:"sc-c0fa666f-62"})`
  font-size: ${(0,r.f)(13)};
  color: ${x.textMuted};
  margin-bottom: ${(0,r.f)(6)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aH=o.default.div.withConfig({displayName:"workspace__RepoMeta",componentId:"sc-c0fa666f-63"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(8)};
  min-width: 0;
`,aI=o.default.span.withConfig({displayName:"workspace__RepoTag",componentId:"sc-c0fa666f-64"})`
  display: inline-flex;
  align-items: center;
  min-height: ${(0,r.f)(22)};
  padding: 0 ${(0,r.f)(8)};
  background: ${a=>a.$private?"rgba(255, 107, 100, 0.11)":"rgba(115, 201, 145, 0.11)"};
  border: 1px solid
    ${a=>a.$private?"rgba(255, 107, 100, 0.24)":"rgba(115, 201, 145, 0.24)"};
  color: ${a=>a.$private?x.danger:x.success};
  font-size: ${(0,r.f)(12)};
  font-weight: 700;
  border-radius: ${(0,r.f)(6)};
`,aJ=o.default.span.withConfig({displayName:"workspace__RepoUpdated",componentId:"sc-c0fa666f-65"})`
  font-size: ${(0,r.f)(12)};
  color: ${x.textFaint};
  white-space: nowrap;
`,aK=o.default.div.withConfig({displayName:"workspace__ModalActions",componentId:"sc-c0fa666f-66"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(0,r.f)(8)};
`,aL=o.default.button.withConfig({displayName:"workspace__ImportRepoButton",componentId:"sc-c0fa666f-67"})`
  min-height: ${(0,r.f)(36)};
  padding: 0 ${(0,r.f)(15)};
  background: ${x.accent};
  border: 1px solid ${x.accent};
  border-radius: ${(0,r.f)(7)};
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  color: var(--on-accent);
  cursor: pointer;
  transition:
    background-color 0.16s ease,
    border-color 0.16s ease,
    opacity 0.16s ease;

  &:hover:not(:disabled) {
    background: ${x.accentHover};
    border-color: ${x.accentHover};
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
`,aM=o.default.div.withConfig({displayName:"workspace__SetupPanel",componentId:"sc-c0fa666f-68"})`
  display: grid;
  grid-template-columns: ${(0,r.f)(38)} minmax(0, 1fr) auto;
  align-items: center;
  gap: ${(0,r.f)(13)};
  padding: ${(0,r.f)(14)};
  background: ${x.surfaceMuted};
  border: 1px solid ${x.line};
  border-radius: ${(0,r.f)(8)};

  @media (max-width: 640px) {
    grid-template-columns: ${(0,r.f)(38)} minmax(0, 1fr);
  }
`,aN=o.default.div.withConfig({displayName:"workspace__SetupIcon",componentId:"sc-c0fa666f-69"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(0,r.f)(38)};
  height: ${(0,r.f)(38)};
  background: ${x.surfaceMuted};
  border: 1px solid ${x.lineStrong};
  border-radius: ${(0,r.f)(8)};
  color: ${x.text};
  font-size: ${(0,r.f)(19)};
`,aO=o.default.div.withConfig({displayName:"workspace__SetupCopy",componentId:"sc-c0fa666f-70"})`
  min-width: 0;
`,aP=o.default.div.withConfig({displayName:"workspace__SetupTitle",componentId:"sc-c0fa666f-71"})`
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  line-height: 1.35;
`,aQ=o.default.div.withConfig({displayName:"workspace__SetupText",componentId:"sc-c0fa666f-72"})`
  margin-top: ${(0,r.f)(3)};
  font-size: ${(0,r.f)(13)};
  color: ${x.textMuted};
  line-height: 1.5;
`,aR=(0,o.default)(i.default).withConfig({displayName:"workspace__SetupLink",componentId:"sc-c0fa666f-73"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,r.f)(6)};
  min-height: ${(0,r.f)(34)};
  padding: 0 ${(0,r.f)(13)};
  background: ${x.accent};
  border: 1px solid ${x.accent};
  border-radius: ${(0,r.f)(7)};
  color: var(--on-accent);
  font-size: ${(0,r.f)(14)};
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${x.accentHover};
    border-color: ${x.accentHover};
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
`,aS=o.default.div.withConfig({displayName:"workspace__ErrorPanel",componentId:"sc-c0fa666f-74"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(8)};
  min-height: ${(0,r.f)(38)};
  padding: ${(0,r.f)(9)} ${(0,r.f)(11)};
  background: rgba(255, 107, 100, 0.1);
  border: 1px solid rgba(255, 107, 100, 0.24);
  border-radius: ${(0,r.f)(8)};
  color: ${x.danger};
  font-size: ${(0,r.f)(14)};
`,aT=o.default.div.withConfig({displayName:"workspace__NoticePanel",componentId:"sc-c0fa666f-75"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.f)(8)};
  min-height: ${(0,r.f)(38)};
  padding: ${(0,r.f)(9)} ${(0,r.f)(11)};
  background: rgba(115, 201, 145, 0.1);
  border: 1px solid rgba(115, 201, 145, 0.24);
  border-radius: ${(0,r.f)(8)};
  color: ${x.success};
  font-size: ${(0,r.f)(14)};
`,aU=(0,o.default)(i.default).withConfig({displayName:"workspace__ExistingWorkspaceLink",componentId:"sc-c0fa666f-76"})`
  margin-left: auto;
  color: inherit;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,aV=o.default.div.withConfig({displayName:"workspace__LoadingText",componentId:"sc-c0fa666f-77"})`
  font-size: ${(0,r.f)(14)};
  color: ${x.textMuted};
  text-align: center;
  padding: ${(0,r.f)(18)} 0;
`,aW=async({locale:a})=>({props:{...await (0,k.serverSideTranslations)(a||"en",["common"])}});a.s(["default",0,function(){let{t:a}=(0,j.useTranslation)(),b=(0,m.useRouter)(),{loading:c,isAuthenticated:i}=(0,h.F)(!1),[k,o]=(0,n.useState)([]),[r,s]=(0,n.useState)(!1),[u,x]=(0,n.useState)(""),[I,aW]=(0,n.useState)([]),[aX,aY]=(0,n.useState)(null),[aZ,a$]=(0,n.useState)(!1),[a_,a0]=(0,n.useState)(""),[a1,a2]=(0,n.useState)(!1),[a3,a4]=(0,n.useState)(""),[a5,a6]=(0,n.useState)(""),[a7,a8]=(0,n.useState)(!1),[a9,ba]=(0,n.useState)(!1),{importingRepo:bb,importError:bc,clearImportError:bd,importRepository:be}=(0,f.f)();(0,n.useEffect)(()=>{i&&!c&&bf()},[i,c]);let bf=async()=>{s(!0),x("");try{let a=await p.k.get("/workspaces");o(a)}catch(a){x((0,g.w)(a,"Failed to load workspaces"))}finally{s(!1)}},bg=async()=>{a2(!0),a4("");try{let a=await e.f.listRepos(1,100);aW(a)}catch(a){a4(a?.message||"Failed to load GitHub repositories")}finally{a2(!1)}},bh=async()=>{a$(!0),a0("");try{let a=await e.f.getConnection();return aY(a),a}catch(a){return aY(null),a0(a instanceof Error&&a.message?a.message:"Failed to load GitHub connection"),null}finally{a$(!1)}},bi=async()=>{ba(!0),a6(""),aW([]),a4(""),bd();let a=await bh();a?.linked&&await bg()},bj=async()=>{if(!a7){a8(!0),a4("");try{let a=b.locale===b.defaultLocale?void 0:b.locale,{authorizeUrl:c}=await e.f.startInstallation("/workspace",a);(0,q.f)(c)}catch(a){a4(a instanceof Error&&a.message?a.message:"Failed to start GitHub repository authorization"),a8(!1)}}},bk=async a=>{await be(a)&&(await bf(),ba(!1))},bl=async a=>{if(confirm("Are you sure you want to delete this workspace?"))try{await p.k.delete(`/workspaces/${a}`),await bf()}catch(a){alert(a?.message||"Failed to delete workspace")}},bm=a=>`/workspace/${encodeURIComponent(a.id)}`;if(c)return(0,d.jsx)(Z,{children:(0,d.jsx)($,{})});let bn=k.filter(a=>"GITHUB"!==a.type),bo=k.filter(a=>"GITHUB"===a.type),bp=I.find(a=>w(a)===a5),bq=bp?k.find(a=>"GITHUB"===a.type&&a.githubRepoId===bp.id):void 0;return(0,d.jsxs)(y,{children:[(0,d.jsx)(l.f,{title:`${a("workspace.title")} | MarkFlowy`}),(0,d.jsx)(z,{children:(0,d.jsxs)(A,{children:[(0,d.jsxs)(B,{"aria-label":"Workspace navigation",children:[(0,d.jsxs)(C,{href:"/","aria-label":"Go to MarkFlowy home",children:[(0,d.jsx)(D,{src:"/logo.svg",alt:""}),(0,d.jsx)(E,{children:"MarkFlowy"})]}),(0,d.jsx)(F,{"aria-hidden":"true"}),(0,d.jsxs)(G,{"aria-current":"page",children:[(0,d.jsx)("i",{className:"ri-folder-3-line","aria-hidden":"true"}),a("workspace.title")]})]}),(0,d.jsxs)(H,{children:[(0,d.jsx)(t.f,{}),i?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(J,{href:"/settings",children:[(0,d.jsx)("i",{className:"ri-user-settings-line","aria-hidden":"true"}),(0,d.jsx)("span",{children:a("workspace.settings")})]}),(0,d.jsxs)(K,{type:"button",onClick:bi,children:[(0,d.jsx)("i",{className:"ri-add-line","aria-hidden":"true"}),a("workspace.import")]})]}):(0,d.jsxs)(L,{href:"/auth",children:[(0,d.jsx)("i",{className:"ri-github-fill","aria-hidden":"true"}),a("auth.signIn")]})]})]})}),(0,d.jsxs)(T,{children:[(0,d.jsxs)(M,{children:[(0,d.jsxs)(N,{children:[(0,d.jsx)(O,{children:a("workspace.eyebrow")}),(0,d.jsx)(P,{children:a("workspace.title")}),(0,d.jsx)(Q,{children:a("workspace.description")})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(S,{"aria-hidden":"true"}),i?a("workspace.syncedCount",{count:k.length}):a("workspace.ready")]})]}),(0,d.jsxs)(U,{children:[u&&(0,d.jsxs)(aS,{children:[(0,d.jsx)("i",{className:"ri-error-warning-line"}),(0,d.jsx)("span",{children:u})]}),(0,d.jsxs)(V,{children:[!i&&(0,d.jsxs)(_,{children:[(0,d.jsxs)(aa,{children:[(0,d.jsxs)(ab,{children:[(0,d.jsx)(ac,{className:"ri-history-line","aria-hidden":"true"}),(0,d.jsx)(ad,{children:a("workspace.recent")})]}),(0,d.jsx)(ae,{children:a("workspace.pinned")})]}),(0,d.jsx)(af,{children:(0,d.jsxs)(ag,{href:"/workspace/demo-workspace",children:[(0,d.jsx)(ah,{$variant:"demo",children:(0,d.jsx)("i",{className:"ri-folder-3-line"})}),(0,d.jsxs)(ai,{children:[(0,d.jsx)(aj,{children:a("workspace.demo")}),(0,d.jsx)(ak,{children:a("workspace.demoDescription")})]}),(0,d.jsxs)(al,{children:[(0,d.jsx)(am,{children:"Demo"}),(0,d.jsx)(am,{children:a("workspace.local")})]}),(0,d.jsx)(ar,{className:"ri-arrow-right-s-line"})]})})]}),!i&&(0,d.jsxs)(_,{"aria-labelledby":"github-workspaces-heading",children:[(0,d.jsxs)(aa,{children:[(0,d.jsxs)(ab,{children:[(0,d.jsx)(ac,{className:"ri-github-fill","aria-hidden":"true"}),(0,d.jsx)(ad,{id:"github-workspaces-heading",children:"GitHub"})]}),(0,d.jsx)(ae,{children:a("workspace.signInRequired")})]}),(0,d.jsxs)(W,{children:[(0,d.jsx)(ah,{$variant:"github",children:(0,d.jsx)("i",{className:"ri-github-fill","aria-hidden":"true"})}),(0,d.jsxs)(X,{children:[(0,d.jsx)(aj,{children:a("workspace.connectTitle")}),(0,d.jsx)(aq,{children:a("workspace.connectDescription")})]}),(0,d.jsx)(Y,{href:"/auth",children:a("auth.signIn")})]})]}),i&&bn.length>0&&(0,d.jsxs)(_,{children:[(0,d.jsxs)(aa,{children:[(0,d.jsxs)(ab,{children:[(0,d.jsx)(ac,{className:"ri-folder-shared-line","aria-hidden":"true"}),(0,d.jsx)(ad,{children:a("workspace.localShared")})]}),(0,d.jsx)(ae,{children:a("workspace.count",{count:bn.length})})]}),(0,d.jsx)(af,{children:bn.map(b=>(0,d.jsxs)(ag,{href:bm(b),children:[(0,d.jsx)(ah,{$variant:"local",children:(0,d.jsx)("i",{className:"ri-folder-3-line"})}),(0,d.jsxs)(ai,{children:[(0,d.jsx)(aj,{children:b.name}),(0,d.jsx)(ak,{children:b.sourceUrl||b.slug})]}),(0,d.jsxs)(al,{children:[(0,d.jsx)(am,{children:(b=>{switch(b){case"GITHUB":return"GitHub";case"LOCAL":return a("workspace.local");case"SYNCED":return a("workspace.synced");case"SHARED":return a("workspace.shared");default:return b}})(b.type)}),(0,d.jsx)(am,{children:v(b.updatedAt)})]}),(0,d.jsx)(as,{onClick:a=>{a.preventDefault(),a.stopPropagation(),bl(b.id)},"aria-label":`Delete ${b.name}`,title:`Delete ${b.name}`,children:(0,d.jsx)("i",{className:"ri-delete-bin-line"})})]},b.id))})]}),i&&bo.length>0&&(0,d.jsxs)(_,{children:[(0,d.jsxs)(aa,{children:[(0,d.jsxs)(ab,{children:[(0,d.jsx)(ac,{className:"ri-github-fill","aria-hidden":"true"}),(0,d.jsx)(ad,{children:"GitHub"})]}),(0,d.jsx)(ae,{children:a("workspace.repositories",{count:bo.length})})]}),(0,d.jsx)(af,{children:bo.map(a=>(0,d.jsxs)(ag,{href:bm(a),children:[(0,d.jsx)(ah,{$variant:"github",children:(0,d.jsx)("i",{className:"ri-github-fill"})}),(0,d.jsxs)(ai,{children:[(0,d.jsx)(aj,{children:a.name}),(0,d.jsx)(ak,{children:a.sourceUrl||a.slug})]}),(0,d.jsxs)(al,{children:[(0,d.jsx)(am,{children:"GitHub"}),(0,d.jsx)(am,{children:v(a.updatedAt)})]}),(0,d.jsx)(as,{onClick:b=>{b.preventDefault(),b.stopPropagation(),bl(a.id)},"aria-label":`Delete ${a.name}`,title:`Delete ${a.name}`,children:(0,d.jsx)("i",{className:"ri-delete-bin-line"})})]},a.id))})]}),r&&(0,d.jsx)(aV,{children:a("workspace.loading")}),i&&!r&&0===k.length&&(0,d.jsxs)(an,{children:[(0,d.jsx)("i",{className:"ri-inbox-2-line"}),(0,d.jsxs)(ao,{children:[(0,d.jsx)(ap,{children:a("workspace.emptyTitle")}),(0,d.jsx)(aq,{children:a("workspace.emptyDescription")})]})]})]})]})]}),a9&&(0,d.jsx)(at,{onClick:()=>ba(!1),children:(0,d.jsxs)(au,{onClick:a=>a.stopPropagation(),children:[(0,d.jsxs)(av,{children:[(0,d.jsx)(aw,{children:"Import Workspace"}),(0,d.jsx)(ax,{onClick:()=>ba(!1),"aria-label":"Close",title:"Close",children:(0,d.jsx)("i",{className:"ri-close-line"})})]}),(0,d.jsxs)(ay,{children:[aZ&&(0,d.jsx)(aV,{children:"Checking GitHub connection..."}),!aZ&&a_&&(0,d.jsxs)(aS,{children:[(0,d.jsx)("i",{className:"ri-error-warning-line"}),(0,d.jsx)("span",{children:a_})]}),!aZ&&!a_&&!aX?.linked&&(0,d.jsxs)(aM,{children:[(0,d.jsx)(aN,{children:(0,d.jsx)("i",{className:"ri-github-fill"})}),(0,d.jsxs)(aO,{children:[(0,d.jsx)(aP,{children:"Connect GitHub first"}),(0,d.jsx)(aQ,{children:"Link your GitHub account in personal settings before importing a repository workspace."})]}),(0,d.jsxs)(aR,{href:"/settings#github",children:["Link GitHub",(0,d.jsx)("i",{className:"ri-arrow-right-line"})]})]}),!aZ&&!a_&&aX?.linked&&(0,d.jsxs)(az,{children:[(0,d.jsxs)(aA,{children:[(0,d.jsx)(aB,{htmlFor:"github-repo-select",children:"GitHub repository"}),(0,d.jsxs)(aC,{id:"github-repo-select",value:a5,onChange:a=>a6(a.target.value),disabled:a1||a7||!!bb,children:[(0,d.jsx)("option",{value:"",children:a1?"Loading repositories...":"Select a repository"}),I.map(a=>(0,d.jsx)("option",{value:w(a),children:a.full_name},w(a)))]})]}),(a3||bc)&&(0,d.jsxs)(aS,{children:[(0,d.jsx)("i",{className:"ri-error-warning-line"}),(0,d.jsx)("span",{children:a3||bc})]}),!a1&&0===I.length&&!a3&&(0,d.jsxs)(aM,{children:[(0,d.jsx)(aN,{children:(0,d.jsx)("i",{className:"ri-github-fill"})}),(0,d.jsxs)(aO,{children:[(0,d.jsx)(aP,{children:"No authorized repositories found"}),(0,d.jsx)(aQ,{children:"Choose the GitHub repositories that MarkFlowy can import and edit."})]}),(0,d.jsx)(aL,{type:"button",onClick:bj,disabled:a7,children:a7?"Opening GitHub...":"Choose Repositories"})]}),bp&&(0,d.jsx)(aD,{children:(0,d.jsxs)(aE,{children:[(0,d.jsx)(aF,{children:bp.full_name}),bp.description&&(0,d.jsx)(aG,{children:bp.description}),(0,d.jsxs)(aH,{children:[(0,d.jsx)(aI,{$private:bp.private,children:bp.private?"Private":"Public"}),(0,d.jsxs)(aJ,{children:["Updated ",new Date(bp.updated_at).toLocaleDateString()]})]})]})}),bq&&(0,d.jsxs)(aT,{children:[(0,d.jsx)("i",{className:"ri-checkbox-circle-line"}),(0,d.jsx)("span",{children:"This repository is already imported."}),(0,d.jsx)(aU,{href:bm(bq),children:"Open"})]}),(0,d.jsx)(aK,{children:(0,d.jsx)(aL,{onClick:()=>bp&&bk(bp),disabled:!bp||!!bq||a7||!!bb,children:bb===bp?.full_name?"Importing...":"Import Repository"})})]})]})]})})]})},"getStaticProps",0,aW]),c()}catch(a){c(a)}},!1),55395,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(41419),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/workspace/index",pathname:"/workspace",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/workspace/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_0g2mnu8z76tsz._.js.map