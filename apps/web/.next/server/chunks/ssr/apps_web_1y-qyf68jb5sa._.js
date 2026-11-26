(()=>{"use strict";module.exports=[82539,a=>{var b=a.i(42931);let c=b.css`
  background: none;
  outline: none;
  border: none;
`;var d=a.i(88844),e=a.i(84814);let f=b.default.button.withConfig({displayName:"NavButton",componentId:"sc-c4937232-0"})`
  ${c};
  background: transparent;
  cursor: pointer;
  flex: 0 0 auto;
  height: ${(0,d.f)(e.M)};
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
`;a.s(["f",0,f],82539)},75977,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(41910),f=a.i(27669),g=a.i(15148),h=a.i(82539),i=b([g]);[g]=i.then?(await i)():i,a.s(["f",0,function({label:a,icon:b,value:c,options:i,onValueChange:j,disabled:k,className:l,style:m}){let[n,o]=(0,f.useState)(!1),[p,q]=(0,f.useState)(!1),r=(0,f.useRef)(!1),s=(0,e.useRouter)(),t=i.find(a=>a.value===c)?.label;return(0,f.useEffect)(()=>{let a=()=>o(!1);return s.events.on("routeChangeStart",a),()=>s.events.off("routeChangeStart",a)},[s.events]),(0,d.jsxs)(g.R,{open:n,onOpenChange:o,modal:!1,children:[(0,d.jsx)(g.X,{asChild:!0,children:(0,d.jsx)(h.f,{type:"button",className:["mf-preference-trigger",l].filter(Boolean).join(" "),style:m,disabled:k,"aria-label":a,title:t?`${a}: ${t}`:a,"data-instant":p,onPointerDown:()=>q(!1),onKeyDown:a=>{q(!0),"ArrowUp"===a.key&&(a.preventDefault(),r.current=!0,o(!0))},children:(0,d.jsx)("span",{className:"mf-preference-trigger-icon","aria-hidden":"true",children:b})})}),(0,d.jsxs)(g.L,{ref:a=>{a&&r.current&&(r.current=!1,queueMicrotask(()=>{if(!a.isConnected)return;let b=a.querySelectorAll('[role="menuitemradio"]:not([data-disabled])');b.item(b.length-1)?.focus()}))},className:"mf-preference-menu","aria-label":a,"data-instant":p,side:"bottom",align:"end",sideOffset:8,collisionPadding:12,loop:!0,onKeyDown:()=>q(!0),children:[(0,d.jsx)(g.B,{className:"mf-preference-menu-heading",children:a}),(0,d.jsx)(g.O,{value:c,onValueChange:a=>{let b=i.find(b=>b.value===a);b&&j(b.value)},children:i.map(a=>(0,d.jsxs)(g.T,{value:a.value,className:"mf-preference-menu-item",children:[(0,d.jsx)("span",{className:"mf-preference-option-icon","aria-hidden":"true",children:a.icon}),(0,d.jsx)("span",{className:"mf-preference-option-label",children:a.label}),(0,d.jsx)("i",{className:"ri-check-line mf-preference-option-check","aria-hidden":"true","data-checked":a.value===c})]},a.value))})]})]})}]),c()}catch(a){c(a)}},!1),99141,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(21377),f=a.i(7110),g=a.i(75977),h=b([f,g]);[f,g]=h.then?(await h)():h;let i={system:"ri-computer-line",light:"ri-sun-line",dark:"ri-moon-line"},j=["system","light","dark"];a.s(["f",0,function(){let{t:a}=(0,e.useTranslation)(),{theme:b,setTheme:c,mounted:h}=(0,f.f)();return(0,d.jsx)(g.f,{label:a("navigation.theme"),icon:(0,d.jsx)("i",{className:i[b]}),value:b,disabled:!h,onValueChange:c,options:j.map(b=>({value:b,label:a(`theme.${b}`),icon:(0,d.jsx)("i",{className:i[b]})}))})}]),c()}catch(a){c(a)}},!1),84814,a=>{a.s(["R",0,120,"M",0,76,"Y",0,260])}]})();

//# sourceMappingURL=apps_web_1y-qyf68jb5sa._.js.map