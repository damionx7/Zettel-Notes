(()=>{"use strict";module.exports=[91767,a=>{var b,c,d=a.i(41910),e=a.i(27669),f=a.i(13753),g=a.i(78906),h=((b={}).LOGIN="login",b.REGISTER="register",b),i=((c={}).EMAIL="email",c.CODE="code",c);a.s(["w",()=>h,"Z",()=>i,"E",0,function(){let a=(0,d.useRouter)(),[b,c]=(0,e.useState)("login"),[h,i]=(0,e.useState)("email"),[j,k]=(0,e.useState)(""),[l,m]=(0,e.useState)(""),[n,o]=(0,e.useState)(""),[p,q]=(0,e.useState)(!1),[r,s]=(0,e.useState)(""),[t,u]=(0,e.useState)(0),v="register"===b;(0,e.useEffect)(()=>{j?u(0):u(0)},[j]),(0,e.useEffect)(()=>{if(t<=0)return;let a=setInterval(()=>{clearInterval(a),u(0)},1e3);return()=>clearInterval(a)},[t,j]);let w=async()=>{if(j&&!p&&!(t>0)){q(!0),s("");try{await f.k.post("/auth/email/send-code",{email:j,purpose:v?"register":"login",...v&&n?{displayName:n}:{}},{skipAuth:!0}),i("code"),Date.now(),u(60)}catch(a){s(a.message||"Failed to send verification code")}finally{q(!1)}}},x=async()=>{if(l&&!p){q(!0),s("");try{let b=await f.k.post("/auth/email/verify-code",{email:j,code:l,...v&&n?{displayName:n}:{}},{skipAuth:!0});(0,g.m)(b),a.push("/workspace")}catch(a){s(a.message||"Failed to verify code")}finally{q(!1)}}};return{mode:b,step:h,email:j,setEmail:k,code:l,setCode:m,displayName:n,setDisplayName:o,loading:p,error:r,countdown:t,isRegister:v,handleSendCode:w,handleVerifyCode:x,handleResendCode:()=>{t>0||w()},switchMode:a=>{c(a),i("email"),k(""),m(""),o(""),s(""),u(0)},setStep:i}}])},12337,a=>{var b=a.i(27669),c=a.i(41910),d=a.i(68210),e=a.i(64180),f=a.i(98253);a.s(["f",0,function(a,g){let h=(0,c.useRouter)(),i=(0,b.useRef)(!1),[j,k]=(0,b.useState)(!1),[l,m]=(0,b.useState)("");return(0,b.useEffect)(()=>{h.isReady&&"string"==typeof h.query.github_error&&((0,f.I)(),i.current=!1,k(!1),m("account_exists_link_required"===h.query.github_error?g:a))},[g,a,h.isReady,h.query.github_error]),{loading:j,error:l,startLogin:async()=>{if(!i.current){i.current=!0,k(!0),m("");try{let a=(0,f.i)(),b=h.locale===h.defaultLocale?void 0:h.locale,{authorizeUrl:c}=await d.f.startLogin("/workspace",a,b);(0,e.f)(c)}catch(b){(0,f.I)(),i.current=!1,m(b instanceof Error&&b.message?b.message:a),k(!1)}}}}}])},12810,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(91854),g=a.i(1257),h=a.i(42931),i=a.i(19730),j=a.i(99141),k=a.i(79297),l=a.i(91767),m=a.i(12337),n=a.i(20295),o=b([j]);function p(){let{t:a}=(0,e.useTranslation)("common"),{loading:b,error:c,startLogin:f}=(0,m.f)(a("auth.githubLoginError"),a("auth.githubAccountLinkRequired")),{mode:h,step:k,email:n,setEmail:o,code:p,setCode:T,displayName:U,setDisplayName:V,loading:W,error:X,countdown:Y,isRegister:Z,handleSendCode:$,handleVerifyCode:_,handleResendCode:aa,switchMode:ab,setStep:ac}=(0,l.E)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.f,{title:Z?"Sign Up - MarkFlowy":"Sign In - MarkFlowy"}),(0,d.jsx)(q,{children:(0,d.jsxs)(r,{children:[(0,d.jsxs)(s,{children:[(0,d.jsx)(g.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,d.jsxs)(t,{children:[(0,d.jsx)(u,{src:"/logo.svg",alt:"MarkFlowy"}),(0,d.jsx)(v,{children:"MarkFlowy"})]})}),(0,d.jsx)(j.f,{})]}),(0,d.jsxs)(w,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)("h1",{children:a(Z?"auth.createAccount":"auth.welcomeBack")}),(0,d.jsx)("p",{children:a("auth.welcomeDescription")})]}),(0,d.jsxs)(y,{children:[(0,d.jsxs)(z,{type:"button",onClick:f,disabled:b,children:[(0,d.jsx)("i",{className:"ri-github-fill","aria-hidden":"true"}),a(b?"auth.githubRedirecting":"auth.continueWithGitHub")]}),c&&(0,d.jsx)(L,{children:c}),(0,d.jsx)(A,{children:(0,d.jsx)("span",{children:a("auth.orContinueWithEmail")})})]}),(0,d.jsxs)(B,{children:[(0,d.jsx)(C,{$active:h===l.w.LOGIN,onClick:()=>ab(l.w.LOGIN),children:a("auth.login")}),(0,d.jsx)(C,{$active:h===l.w.REGISTER,onClick:()=>ab(l.w.REGISTER),children:a("auth.register")})]}),(0,d.jsx)(D,{children:k===l.Z.EMAIL?(0,d.jsxs)(d.Fragment,{children:[Z&&(0,d.jsxs)(E,{children:[(0,d.jsx)(F,{htmlFor:"auth-name",children:a("auth.displayName")}),(0,d.jsx)(G,{id:"auth-name",type:"text",autoComplete:"name",value:U,onChange:a=>V(a.target.value),placeholder:a("auth.displayNamePlaceholder")||a("auth.displayName")})]}),(0,d.jsxs)(E,{children:[(0,d.jsx)(F,{htmlFor:"auth-email",children:a("auth.email")}),(0,d.jsx)(G,{id:"auth-email",type:"email",autoComplete:"email",value:n,onChange:a=>o(a.target.value),placeholder:a("auth.emailPlaceholder")||a("auth.email"),onKeyDown:a=>{"Enter"===a.key&&$()}})]}),!Z&&(0,d.jsx)(K,{children:a("auth.autoRegisterHint")}),X&&(0,d.jsx)(L,{children:X}),(0,d.jsx)(M,{onClick:$,disabled:!n||W||Y>0,children:W?(0,d.jsx)(N,{}):Y>0?a("auth.resendCode",{seconds:Y}):a("auth.sendCode")})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(I,{children:[n,(0,d.jsx)(J,{onClick:()=>ac(l.Z.EMAIL),children:a("auth.changeEmail")})]}),(0,d.jsxs)(E,{children:[(0,d.jsx)(F,{htmlFor:"auth-code",children:a("auth.verificationCode")}),(0,d.jsx)(H,{id:"auth-code",type:"text",autoComplete:"one-time-code",value:p,onChange:a=>T(a.target.value),placeholder:a("auth.codePlaceholder")||a("auth.verificationCode"),maxLength:8,onKeyDown:a=>{"Enter"===a.key&&_()}})]}),X&&(0,d.jsx)(L,{children:X}),(0,d.jsx)(M,{onClick:_,disabled:!p||p.length<8||W,children:W?(0,d.jsx)(N,{}):a(Z?"auth.createAccount":"auth.signIn")}),(0,d.jsx)(O,{children:Y>0?(0,d.jsx)(P,{children:a("auth.resendCode",{seconds:Y})}):(0,d.jsx)(Q,{onClick:aa,children:a("auth.resend")})})]})})]}),(0,d.jsx)(R,{children:(0,d.jsx)(g.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,d.jsxs)(S,{children:["← ",a("auth.backToHome")]})})})]})})]})}[j]=o.then?(await o)():o;let q=h.default.main.withConfig({displayName:"auth__AuthLayout",componentId:"sc-7cb028fd-0"})`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100dvh;
  background: var(--paper-warm);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    pointer-events: none;
    width: 150%;
    left: -25%;
    transform: skewY(-12deg);
  }
  &::before {
    height: 360px;
    top: -155px;
    background: linear-gradient(
      100deg,
      color-mix(in srgb, var(--seal) 12%, var(--paper)),
      color-mix(in srgb, var(--seal) 75%, var(--paper))
    );
  }
  &::after {
    top: 183px;
    height: 16px;
    background: linear-gradient(90deg, transparent 18%, var(--seal) 65%, transparent 95%);
    opacity: 0.5;
  }
  :root[data-mf-theme='dark'] & {
    background: var(--paper);
    &::before {
      background: linear-gradient(100deg, var(--paper-warm), var(--mf-web-accentColorFocused));
    }
    &::after {
      opacity: 0.18;
    }
  }
  ${(0,n.C)(h.css`
    align-items: flex-start;
    padding: 40px 20px;
  `)}
`,r=h.default.div.withConfig({displayName:"auth__AuthContainer",componentId:"sc-7cb028fd-1"})`
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`,s=h.default.div.withConfig({displayName:"auth__LogoSection",componentId:"sc-7cb028fd-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
`,t=h.default.a.withConfig({displayName:"auth__LogoLink",componentId:"sc-7cb028fd-3"})`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  text-decoration: none;
`,u=h.default.img.withConfig({displayName:"auth__LogoImage",componentId:"sc-7cb028fd-4"})`
  width: 32px;
  height: 32px;
`,v=h.default.span.withConfig({displayName:"auth__LogoText",componentId:"sc-7cb028fd-5"})`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
`,w=h.default.div.withConfig({displayName:"auth__AuthCard",componentId:"sc-7cb028fd-6"})`
  padding: 36px 40px;
  background: var(--surface-raised);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);

  ${(0,n.C)(h.css`
    padding: 28px 24px;
  `)}
`,x=h.default.div.withConfig({displayName:"auth__AuthHeading",componentId:"sc-7cb028fd-7"})`
  margin-bottom: 28px;
  h1 {
    margin: 0 0 10px;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.035em;
  }
  p {
    margin: 0;
    color: var(--ink-mute);
    font-size: 14px;
    line-height: 1.6;
  }
`,y=h.default.div.withConfig({displayName:"auth__SocialAuthSection",componentId:"sc-7cb028fd-8"})`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,z=h.default.button.attrs({type:"button"}).withConfig({displayName:"auth__GitHubButton",componentId:"sc-7cb028fd-9"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 16px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 7px;
  color: var(--ink);
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 4px color-mix(in srgb, var(--shadow-color) 4%, transparent);
  transition:
    background-color 160ms ease,
    border-color 160ms ease;
  i {
    font-size: 20px;
  }
  &:hover:not(:disabled) {
    background: var(--paper-warm);
    border-color: var(--ink-faint);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,A=h.default.div.withConfig({displayName:"auth__AuthDivider",componentId:"sc-7cb028fd-10"})`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink-faint);
  font-size: 12px;
  &::before,
  &::after {
    content: '';
    height: 1px;
    flex: 1;
    background: var(--line-soft);
  }
`,B=h.default.div.withConfig({displayName:"auth__TabContainer",componentId:"sc-7cb028fd-11"})`
  display: flex;
  gap: 24px;
  margin-top: 14px;
  border-bottom: 1px solid var(--line-soft);
`,C=h.default.button.attrs({type:"button"}).withConfig({displayName:"auth__Tab",componentId:"sc-7cb028fd-12"})`
  padding: 12px 0;
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${a=>a.$active?"var(--seal)":"transparent"};
  margin-bottom: -1px;
  font-size: 14px;
  font-weight: 600;
  color: ${a=>a.$active?"var(--seal)":"var(--ink-mute)"};
  cursor: pointer;
  transition:
    color 160ms ease,
    border-color 160ms ease;
  &:hover {
    color: var(--seal);
  }
`,D=h.default.div.withConfig({displayName:"auth__FormSection",componentId:"sc-7cb028fd-13"})`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,E=h.default.div.withConfig({displayName:"auth__InputGroup",componentId:"sc-7cb028fd-14"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,F=h.default.label.withConfig({displayName:"auth__FieldLabel",componentId:"sc-7cb028fd-15"})`
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
`,G=h.default.input.withConfig({displayName:"auth__Input",componentId:"sc-7cb028fd-16"})`
  width: 100%;
  min-height: 44px;
  padding: 10px 13px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 6px;
  font-size: 15px;
  color: var(--ink);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--shadow-color) 4%, transparent);
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
  &:focus {
    border-color: var(--seal);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--seal) 12%, transparent);
  }
  &::placeholder {
    color: var(--ink-faint);
  }
  ${(0,n.C)(h.css`
    font-size: 16px;
  `)}
`,H=(0,h.default)(G).withConfig({displayName:"auth__CodeInput",componentId:"sc-7cb028fd-17"})`
  font-size: 18px;
  letter-spacing: 4px;
  text-align: center;
`,I=h.default.div.withConfig({displayName:"auth__EmailDisplay",componentId:"sc-7cb028fd-18"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  overflow-wrap: anywhere;
  background: var(--paper-warm);
  border-radius: 6px;
  font-size: 14px;
  color: var(--ink);
`,J=h.default.button.attrs({type:"button"}).withConfig({displayName:"auth__ChangeEmail",componentId:"sc-7cb028fd-19"})`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  padding: 2px;
  font-size: 12px;
  color: var(--seal);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,K=h.default.div.withConfig({displayName:"auth__HintMessage",componentId:"sc-7cb028fd-20"})`
  font-size: 12px;
  color: var(--ink-mute);
  line-height: 1.5;
`,L=h.default.div.attrs({role:"alert"}).withConfig({displayName:"auth__ErrorMessage",componentId:"sc-7cb028fd-21"})`
  padding: 10px 12px;
  background: ${a=>`color-mix(in srgb, ${a.theme.dangerColor} 7%, var(--paper))`};
  border: 1px solid ${a=>`color-mix(in srgb, ${a.theme.dangerColor} 25%, transparent)`};
  border-radius: 6px;
  font-size: 13px;
  color: ${a=>a.theme.dangerColor};
`,M=h.default.button.attrs({type:"button"}).withConfig({displayName:"auth__SubmitButton",componentId:"sc-7cb028fd-22"})`
  width: 100%;
  min-height: 44px;
  padding: 10px 16px;
  background: var(--seal);
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  color: var(--on-accent);
  cursor: pointer;
  transition:
    background-color 160ms ease,
    transform 160ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
  &:hover:not(:disabled) {
    background: color-mix(in srgb, var(--seal) 85%, var(--ink));
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,N=h.default.div.withConfig({displayName:"auth__LoadingSpinner",componentId:"sc-7cb028fd-23"})`
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: mf-auth-spin 800ms linear infinite;
  @keyframes mf-auth-spin {
    to {
      transform: rotate(360deg);
    }
  }
`,O=h.default.div.withConfig({displayName:"auth__ResendSection",componentId:"sc-7cb028fd-24"})`
  text-align: center;
  margin-top: 4px;
`,P=h.default.span.withConfig({displayName:"auth__ResendText",componentId:"sc-7cb028fd-25"})`
  font-size: 13px;
  color: var(--ink-faint);
`,Q=h.default.button.attrs({type:"button"}).withConfig({displayName:"auth__ResendButton",componentId:"sc-7cb028fd-26"})`
  background: transparent;
  border: 0;
  font-size: 13px;
  color: var(--seal);
  cursor: pointer;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`,R=h.default.div.withConfig({displayName:"auth__BackLink",componentId:"sc-7cb028fd-27"})`
  padding-left: 6px;
`,S=h.default.a.withConfig({displayName:"auth__StyledLink",componentId:"sc-7cb028fd-28"})`
  font-size: 13px;
  color: var(--ink-mute);
  text-decoration: none;
  transition: color 160ms ease;
  &:hover {
    color: var(--seal);
  }
`,T=async({locale:a})=>({props:{...await (0,f.serverSideTranslations)(a||"en",["common"])}});a.s(["default",0,function(){return(0,k.R)()?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.f,{title:"Sign In - MarkFlowy"}),(0,d.jsx)(q,{"aria-busy":"true",children:(0,d.jsx)(N,{role:"status","aria-label":"Checking login status"})})]}):(0,d.jsx)(p,{})},"getStaticProps",0,T]),c()}catch(a){c(a)}},!1),53113,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(58638),h=a.i(16942),i=a.i(12810),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.f)(i,"default"),m=(0,f.f)(i,"getStaticProps"),n=(0,f.f)(i,"getStaticPaths"),o=(0,f.f)(i,"getServerSideProps"),p=(0,f.f)(i,"config"),q=(0,f.f)(i,"reportWebVitals"),r=(0,f.f)(i,"unstable_getStaticProps"),s=(0,f.f)(i,"unstable_getStaticPaths"),t=(0,f.f)(i,"unstable_getStaticParams"),u=(0,f.f)(i,"unstable_getServerProps"),v=(0,f.f)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.f.PAGES,page:"/auth/index",pathname:"/auth",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.f)({srcPage:"/auth/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)]})();

//# sourceMappingURL=_1w5iewqumhepr._.js.map