(this["webpackJsonpAhmed-Belaid-portfolio"]=this["webpackJsonpAhmed-Belaid-portfolio"]||[]).push([[12],{142:function(e,t,n){"use strict";var a=n(0),c=n(394),o=n(401),i=n(43),r=n(466),s=n(2),l=function(e){var t=e.onClose,n=Object(a.useContext)(i.a),l=n.isDarkMode,u=n.setIsDarkMode,j=Object(r.a)().t;return Object(s.jsx)(c.a,{control:Object(s.jsx)(o.a,{checked:l,name:"checkedDarkMode",color:"#2626262",onChange:function(){t&&t(),u(!l)}}),label:j("dark_mode")})};t.a=l},455:function(e,t,n){"use strict";n.r(t);var a=n(18),c=n(0),o=n.n(c),i=n(99),r=n(87),s=n(447),l=n(448),u=n(462),j=n(426),b=n(468),d=n(452),m=n(32),p=n(4),O=n(145),f=(n(38),n(2)),x=(Object(j.a)((function(e){return{root:{cursor:"pointer"}}})),n(429)),h=n(432),g=n(39),v=n(433),y=n(456),C=n(400),k=n(445),w=n(444),N=n(36),I=n(466),S=(n(393),[{code:"fr",name:"FR",country_code:"fr"},{code:"en",name:"EN",country_code:"gb"}]),E=Object(j.a)((function(e){return{profileMenu:{"& .MuiPaper-root":{backgroundColor:e.palette.primary.main,marginTop:"2px",boxShadow:e.shadows[4]}},menuItem:{"&:hover":{backgroundColor:e.backgroundSecondary}},flagIcon:{marginRight:e.spacing(1)}}})),_=function(e){var t=E(),n=Object(I.a)().t,o=Object(c.useState)(null),i=Object(a.a)(o,2),r=i[0],s=i[1],l=function(t){N.a.changeLanguage(t),s(null),e.onClose&&e.onClose()},u=S.find((function(e){return e.code===n("language")}));return Object(f.jsxs)("div",Object(m.a)(Object(m.a)({},e),{},{children:[Object(f.jsxs)(x.a,{variant:"contained",color:"primary",onClick:function(e){return s(e.currentTarget)},children:[u&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"flag-icon flag-icon-".concat(u.country_code," ").concat(t.flagIcon)}),u.name]}),Object(f.jsx)(w.a,{style:{color:"white"}})]}),Object(f.jsxs)(C.a,{id:"profile-menu",anchorEl:r,open:Boolean(r),onClose:function(){return s(null)},keepMounted:!0,elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:t.profileMenu,disableScrollLock:!0,children:[Object(f.jsxs)(k.a,{className:t.menuItem,onClick:function(){return l("en")},children:[Object(f.jsx)("span",{className:"flag-icon flag-icon-gb ".concat(t.flagIcon)}),"EN"]}),Object(f.jsxs)(k.a,{className:t.menuItem,onClick:function(){return l("fr")},children:[Object(f.jsx)("span",{className:"flag-icon flag-icon-fr ".concat(t.flagIcon)}),"FR"]})]})]}))},L=n(41),M={spy:!0,smooth:!0,offset:-70,duration:500},A=o.a.forwardRef((function(e,t){return Object(f.jsx)(d.a.div,{ref:t,custom:e.custom,animate:e.animate,children:Object(f.jsx)(O.Link,Object(m.a)(Object(m.a)({},M),e))})})),R=Object(j.a)((function(e){return{wrapper:{display:"flex",alignItems:"center"},tabs:{marginRight:e.spacing(4)},navMenuItem:{marginRight:e.spacing(1)}}})),D=Object(g.a)((function(e){return{root:{transition:".2s",minWidth:120,"&:hover":{color:e.palette.text.primary}}}}))((function(e){return Object(f.jsx)(v.a,Object(m.a)({disableRipple:!0},e))})),B=Object(g.a)({indicator:{"& > span":{maxWidth:20}}})((function(e){return Object(f.jsx)(y.a,Object(m.a)(Object(m.a)({},e),{},{variant:"fullWidth",TabIndicatorProps:{children:Object(f.jsx)("span",{})}}))})),T=function(e){var t=e.homeIsActive,n=R(),o=Object(c.useState)(!1),i=Object(a.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(!1),u=Object(a.a)(l,2),j=u[0],m=u[1],p=Object(c.useContext)(L.a).isLoading,g=Object(b.a)(),v=Object(I.a)().t;Object(c.useEffect)((function(){O.Events.scrollEvent.register("begin",(function(e,t){m(!0)})),O.Events.scrollEvent.register("end",(function(e,t){m(!1)}))})),Object(c.useEffect)((function(){p?g.start({opacity:0,y:-5}):g.start((function(e){return{y:0,opacity:1,transition:{delay:.1*e+.3}}}))}),[p,g]);var y=function(e){j||s(e)};return Object(c.useEffect)((function(){t&&s(!1)}),[t]),Object(f.jsxs)("div",{className:n.wrapper,children:[Object(f.jsxs)(B,{className:n.tabs,value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){s(t)},"aria-label":"disabled tabs example",children:[Object(f.jsx)(D,{component:A,custom:0,animate:g,to:"about",label:v("menu_about"),onSetActive:function(){return y(0)},onSetInactive:function(){return y(!1)}}),Object(f.jsx)(D,{component:A,animate:g,custom:1,to:"experience",label:v("menu_experience"),onSetActive:function(){return y(1)}}),Object(f.jsx)(D,{component:A,animate:g,custom:2,to:"projects",label:v("menu_projects"),onSetActive:function(){return y(2)}}),Object(f.jsx)(D,{component:A,animate:g,custom:3,to:"contact",label:v("menu_contact"),onSetActive:function(){return y(3)}})]}),Object(f.jsx)(d.a.div,{custom:4,animate:g,children:Object(f.jsx)(x.a,{component:h.a,href:"https://publuu.com/flip-book/59153/173725",variant:"outlined",color:"primary",underline:"none",children:v("menu_resume")})}),Object(f.jsx)(d.a.div,{custom:5,animate:g,children:Object(f.jsx)(_,{style:{marginLeft:"32px"}})})]})},F=n(461),W=n(443),z=n(446),J=n(395),P=n(142),U=Object(j.a)((function(e){return{drawer:{backgroundColor:e.palette.background.default},list:{width:250},fullList:{width:"auto",marginTop:e.spacing(4)},listItem:{display:"flex",justifyContent:"center",padding:e.spacing(2,0),"&:hover":{backgroundColor:"rgb(80,80,80)"}},btnContainer:{display:"flex",justifyContent:"center",marginTop:e.spacing(1)},active:{backgroundColor:e.palette.primary.main}}})),H=function(e){var t=e.open,n=e.onClose,a=(e.onOpen,U()),c=Object(I.a)().t,o={button:!0,component:O.Link,onClick:n,onKeyDown:n,spy:!0,smooth:!0,offset:0,duration:500,className:a.listItem,activeClass:a.active};return Object(f.jsx)(F.a,{anchor:"left",open:t,onClose:n,classes:{paper:a.drawer},children:Object(f.jsx)("div",{className:a.list,role:"presentation",children:Object(f.jsxs)(W.a,{className:a.fullList,children:[Object(f.jsx)(z.a,Object(m.a)(Object(m.a)({},o),{},{to:"about",children:c("menu_about")})),Object(f.jsx)(z.a,Object(m.a)(Object(m.a)({},o),{},{to:"experience",children:c("menu_experience")})),Object(f.jsx)(z.a,Object(m.a)(Object(m.a)({},o),{},{to:"projects",children:c("menu_projects")})),Object(f.jsx)(z.a,Object(m.a)(Object(m.a)({},o),{},{to:"contact",children:c("menu_contact")})),Object(f.jsx)(z.a,{className:a.btnContainer,children:Object(f.jsx)(x.a,{component:h.a,href:"https://publuu.com/flip-book/59153/173725",variant:"outlined",color:"primary",underline:"none",children:c("menu_resume")})}),Object(f.jsx)(z.a,{className:a.btnContainer,children:Object(f.jsx)(_,{onClose:n})}),Object(f.jsx)(z.a,{className:a.btnContainer,children:Object(f.jsx)(P.a,{onClose:n})}),Object(f.jsx)(J.a,{})]})})})},K=["isOpen"],Y=Object(j.a)((function(e){return{container:{overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"flex-end",cursor:"pointer",padding:"2px"},line:{height:"3px",backgroundColor:e.palette.text.secondary},line1:{width:"35px",marginBottom:"7px"},line2:{width:"25px",marginBottom:"7px"},line3:{width:"35px"}}})),q=function(e){var t=e.isOpen,n=Object(p.a)(e,K),a=Object(b.a)(),o=Y();return Object(c.useEffect)((function(){t?a.start("animate"):a.start("initial")}),[t,a]),Object(f.jsxs)(d.a.div,Object(m.a)(Object(m.a)({className:o.container},n),{},{children:[Object(f.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line1),variants:{initial:{rotate:0,y:0},animate:{rotate:45,y:9}},animate:a}),Object(f.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line2),variants:{initial:{x:0,opacity:1},animate:{x:250,opacity:0}},animate:a}),Object(f.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line3),variants:{initial:{rotate:0,y:0},animate:{rotate:-45,y:-9}},animate:a})]}))},G=n.p+"static/media/ahmedbelaid.80be955b.png",Q=Object(j.a)((function(e){return{navbar:{backgroundColor:e.palette.background.default},toolbar:{justifyContent:"space-between",alignItems:"center",padding:function(t){return t.isMobile?e.spacing(0,2):e.spacing(0,6)}}}})),V=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=(t[1],Object(i.a)("(max-width:700px)")),j=Object(c.useContext)(L.a).isLoading,m=Object(b.a)(),p=Object(r.a)(),O=Object(c.useState)(!1),x=Object(a.a)(O,2),h=x[0],g=x[1],v=Object(c.useState)(!1),y=Object(a.a)(v,2),C=y[0],k=y[1],w=Q({scroll:h,isMobile:o});window.addEventListener("scroll",(function(){return g(window.scrollY>30)}));var N={initial:{height:o?70:100,boxShadow:p.shadows[0]},scrolled:{height:p.navbarHeight,boxShadow:p.shadows[10]}};return Object(c.useEffect)((function(){j?m.start({y:-100}):m.start({y:0,transition:{delay:.05,type:"spring",stiffness:260,damping:20}})}),[j,m]),Object(f.jsxs)(d.a.div,{animate:m,children:[Object(f.jsx)(s.a,{position:"fixed",elevation:0,className:w.navbar,component:"nav",children:Object(f.jsxs)(l.a,{className:w.toolbar,component:d.a.div,variants:N,animate:h?"scrolled":"initial",transition:{type:"spring",stiffness:260,damping:20},children:[Object(f.jsx)("img",{src:G,alt:"Logo",href:"/home",width:"130rem"}),Object(f.jsx)(u.a,{smDown:!0,children:Object(f.jsx)(T,{homeIsActive:n})}),Object(f.jsx)(u.a,{mdUp:!0,children:Object(f.jsx)(q,{isOpen:C,onClick:function(){return k(!C)}})})]})}),Object(f.jsx)(u.a,{mdUp:!0,children:Object(f.jsx)(H,{open:C,onClose:function(){return k(!1)},onOpen:function(){return k(!0)}})})]})};t.default=V}}]);
//# sourceMappingURL=12.ccf7c0e4.chunk.js.map