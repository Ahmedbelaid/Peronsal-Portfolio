(this["webpackJsonpAhmed-Belaid-portfolio"]=this["webpackJsonpAhmed-Belaid-portfolio"]||[]).push([[12],{142:function(e,t,n){"use strict";var a=n(0),c=n(394),o=n(401),i=n(43),r=n(466),s=n(2),l=function(e){var t=e.onClose,n=Object(a.useContext)(i.a),l=n.isDarkMode,j=n.setIsDarkMode,u=Object(r.a)().t;return Object(s.jsx)(c.a,{control:Object(s.jsx)(o.a,{checked:l,name:"checkedDarkMode",color:"#2626262",onChange:function(){t&&t(),j(!l)}}),label:u("dark_mode")})};t.a=l},456:function(e,t,n){"use strict";n.r(t);var a=n(18),c=n(0),o=n.n(c),i=n(99),r=n(87),s=n(447),l=n(448),j=n(462),u=n(426),b=n(468),d=n(452),m=n(32),p=n(429),O=n(432),f=n(39),x=n(433),h=n(455),g=n(162),v=n(400),y=n(445),C=n(444),k=n(36),w=n(466),N=(n(393),n(2)),I=[{code:"fr",name:"FR",country_code:"fr"},{code:"en",name:"EN",country_code:"gb"}],S=Object(u.a)((function(e){return{profileMenu:{"& .MuiPaper-root":{backgroundColor:e.palette.primary.main,marginTop:"2px",boxShadow:e.shadows[4]}},menuItem:{"&:hover":{backgroundColor:e.backgroundSecondary}},flagIcon:{marginRight:e.spacing(1)}}})),E=function(e){var t=S(),n=Object(w.a)().t,o=Object(c.useState)(null),i=Object(a.a)(o,2),r=i[0],s=i[1],l=function(t){k.a.changeLanguage(t),s(null),e.onClose&&e.onClose()},j=I.find((function(e){return e.code===n("language")}));return Object(N.jsxs)("div",Object(m.a)(Object(m.a)({},e),{},{children:[Object(N.jsxs)(p.a,{variant:"contained",color:"primary",onClick:function(e){return s(e.currentTarget)},children:[j&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("span",{className:"flag-icon flag-icon-".concat(j.country_code," ").concat(t.flagIcon)}),j.name]}),Object(N.jsx)(C.a,{style:{color:"white"}})]}),Object(N.jsxs)(v.a,{id:"profile-menu",anchorEl:r,open:Boolean(r),onClose:function(){return s(null)},keepMounted:!0,elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:t.profileMenu,disableScrollLock:!0,children:[Object(N.jsxs)(y.a,{className:t.menuItem,onClick:function(){return l("en")},children:[Object(N.jsx)("span",{className:"flag-icon flag-icon-gb ".concat(t.flagIcon)}),"EN"]}),Object(N.jsxs)(y.a,{className:t.menuItem,onClick:function(){return l("fr")},children:[Object(N.jsx)("span",{className:"flag-icon flag-icon-fr ".concat(t.flagIcon)}),"FR"]})]})]}))},_=n(41),L={spy:!0,smooth:!0,offset:-70,duration:500},M=o.a.forwardRef((function(e,t){return Object(N.jsx)(d.a.div,{ref:t,custom:e.custom,animate:e.animate,children:Object(N.jsx)(g.Link,Object(m.a)(Object(m.a)({},L),e))})})),A=Object(u.a)((function(e){return{wrapper:{display:"flex",alignItems:"center"},tabs:{marginRight:e.spacing(4)},navMenuItem:{marginRight:e.spacing(1)}}})),R=Object(f.a)((function(e){return{root:{transition:".2s",minWidth:120,"&:hover":{color:e.palette.text.primary}}}}))((function(e){return Object(N.jsx)(x.a,Object(m.a)({disableRipple:!0},e))})),D=Object(f.a)({indicator:{"& > span":{maxWidth:20}}})((function(e){return Object(N.jsx)(h.a,Object(m.a)(Object(m.a)({},e),{},{variant:"fullWidth",TabIndicatorProps:{children:Object(N.jsx)("span",{})}}))})),B=function(e){var t=e.homeIsActive,n=A(),o=Object(c.useState)(!1),i=Object(a.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(!1),j=Object(a.a)(l,2),u=j[0],m=j[1],f=Object(c.useContext)(_.a).isLoading,x=Object(b.a)(),h=Object(w.a)().t;Object(c.useEffect)((function(){g.Events.scrollEvent.register("begin",(function(e,t){m(!0)})),g.Events.scrollEvent.register("end",(function(e,t){m(!1)}))})),Object(c.useEffect)((function(){f?x.start({opacity:0,y:-5}):x.start((function(e){return{y:0,opacity:1,transition:{delay:.1*e+.3}}}))}),[f,x]);var v=function(e){u||s(e)};return Object(c.useEffect)((function(){t&&s(!1)}),[t]),Object(N.jsxs)("div",{className:n.wrapper,children:[Object(N.jsxs)(D,{className:n.tabs,value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){s(t)},"aria-label":"disabled tabs example",children:[Object(N.jsx)(R,{component:M,custom:0,animate:x,to:"about",label:h("menu_about"),onSetActive:function(){return v(0)},onSetInactive:function(){return v(!1)}}),Object(N.jsx)(R,{component:M,animate:x,custom:1,to:"experience",label:h("menu_experience"),onSetActive:function(){return v(1)}}),Object(N.jsx)(R,{component:M,animate:x,custom:2,to:"projects",label:h("menu_projects"),onSetActive:function(){return v(2)}}),Object(N.jsx)(R,{component:M,animate:x,custom:3,to:"contact",label:h("menu_contact"),onSetActive:function(){return v(3)}})]}),Object(N.jsx)(d.a.div,{custom:4,animate:x,children:Object(N.jsx)(p.a,{component:O.a,href:"https://publuu.com/flip-book/59153/173725",variant:"outlined",color:"primary",underline:"none",children:h("menu_resume")})}),Object(N.jsx)(d.a.div,{custom:5,animate:x,children:Object(N.jsx)(E,{style:{marginLeft:"32px"}})})]})},T=n(461),F=n(443),W=n(446),z=n(395),J=n(142),P=Object(u.a)((function(e){return{drawer:{backgroundColor:e.palette.background.default},list:{width:250},fullList:{width:"auto",marginTop:e.spacing(4)},listItem:{display:"flex",justifyContent:"center",padding:e.spacing(2,0),"&:hover":{backgroundColor:"rgb(80,80,80)"}},btnContainer:{display:"flex",justifyContent:"center",marginTop:e.spacing(1)},active:{backgroundColor:e.palette.primary.main}}})),U=function(e){var t=e.open,n=e.onClose,a=(e.onOpen,P()),c=Object(w.a)().t,o={button:!0,component:g.Link,onClick:n,onKeyDown:n,spy:!0,smooth:!0,offset:0,duration:500,className:a.listItem,activeClass:a.active};return Object(N.jsx)(T.a,{anchor:"left",open:t,onClose:n,classes:{paper:a.drawer},children:Object(N.jsx)("div",{className:a.list,role:"presentation",children:Object(N.jsxs)(F.a,{className:a.fullList,children:[Object(N.jsx)(W.a,Object(m.a)(Object(m.a)({},o),{},{to:"about",children:c("menu_about")})),Object(N.jsx)(W.a,Object(m.a)(Object(m.a)({},o),{},{to:"experience",children:c("menu_experience")})),Object(N.jsx)(W.a,Object(m.a)(Object(m.a)({},o),{},{to:"projects",children:c("menu_projects")})),Object(N.jsx)(W.a,Object(m.a)(Object(m.a)({},o),{},{to:"contact",children:c("menu_contact")})),Object(N.jsx)(W.a,{className:a.btnContainer,children:Object(N.jsx)(p.a,{component:O.a,href:"https://publuu.com/flip-book/59153/173725",variant:"outlined",color:"primary",underline:"none",children:c("menu_resume")})}),Object(N.jsx)(W.a,{className:a.btnContainer,children:Object(N.jsx)(E,{onClose:n})}),Object(N.jsx)(W.a,{className:a.btnContainer,children:Object(N.jsx)(J.a,{onClose:n})}),Object(N.jsx)(z.a,{})]})})})},H=n(4),K=["isOpen"],Y=Object(u.a)((function(e){return{container:{overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"flex-end",cursor:"pointer",padding:"2px"},line:{height:"3px",backgroundColor:e.palette.text.secondary},line1:{width:"35px",marginBottom:"7px"},line2:{width:"25px",marginBottom:"7px"},line3:{width:"35px"}}})),q=function(e){var t=e.isOpen,n=Object(H.a)(e,K),a=Object(b.a)(),o=Y();return Object(c.useEffect)((function(){t?a.start("animate"):a.start("initial")}),[t,a]),Object(N.jsxs)(d.a.div,Object(m.a)(Object(m.a)({className:o.container},n),{},{children:[Object(N.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line1),variants:{initial:{rotate:0,y:0},animate:{rotate:45,y:9}},animate:a}),Object(N.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line2),variants:{initial:{x:0,opacity:1},animate:{x:250,opacity:0}},animate:a}),Object(N.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line3),variants:{initial:{rotate:0,y:0},animate:{rotate:-45,y:-9}},animate:a})]}))},G=n.p+"static/media/ahmedbelaid.80be955b.png",Q=Object(u.a)((function(e){return{navbar:{backgroundColor:e.palette.background.default},toolbar:{justifyContent:"space-between",alignItems:"center",padding:function(t){return t.isMobile?e.spacing(0,2):e.spacing(0,6)}}}})),V=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=(t[1],Object(i.a)("(max-width:700px)")),u=Object(c.useContext)(_.a).isLoading,m=Object(b.a)(),p=Object(r.a)(),O=Object(c.useState)(!1),f=Object(a.a)(O,2),x=f[0],h=f[1],g=Object(c.useState)(!1),v=Object(a.a)(g,2),y=v[0],C=v[1],k=Q({scroll:x,isMobile:o});window.addEventListener("scroll",(function(){return h(window.scrollY>30)}));var w={initial:{height:o?70:100,boxShadow:p.shadows[0]},scrolled:{height:p.navbarHeight,boxShadow:p.shadows[10]}};return Object(c.useEffect)((function(){u?m.start({y:-100}):m.start({y:0,transition:{delay:.05,type:"spring",stiffness:260,damping:20}})}),[u,m]),Object(N.jsxs)(d.a.div,{animate:m,children:[Object(N.jsx)(s.a,{position:"fixed",elevation:0,className:k.navbar,component:"nav",children:Object(N.jsxs)(l.a,{className:k.toolbar,component:d.a.div,variants:w,animate:x?"scrolled":"initial",transition:{type:"spring",stiffness:260,damping:20},children:[Object(N.jsx)("img",{src:G,alt:"Logo",href:"/home",width:"130rem"}),Object(N.jsx)(j.a,{smDown:!0,children:Object(N.jsx)(B,{homeIsActive:n})}),Object(N.jsx)(j.a,{mdUp:!0,children:Object(N.jsx)(q,{isOpen:y,onClick:function(){return C(!y)}})})]})}),Object(N.jsx)(j.a,{mdUp:!0,children:Object(N.jsx)(U,{open:y,onClose:function(){return C(!1)},onOpen:function(){return C(!0)}})})]})};t.default=V}}]);
//# sourceMappingURL=12.4b24c45d.chunk.js.map