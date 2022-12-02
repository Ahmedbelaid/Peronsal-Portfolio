(this["webpackJsonpAhmed-Belaid-portfolio"]=this["webpackJsonpAhmed-Belaid-portfolio"]||[]).push([[10],{136:function(e,t,i){"use strict";var a=i(32),n=i(4),o=(i(0),i(398)),c=i(432),r=i(426),s=i(452),l=i(2),d=["icon","href","fontSize"],m=Object(r.a)((function(e){return{icon:{color:e.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:function(e){return e.fontSize?"".concat(e.fontSize,"px"):"32px"},"&:hover":{color:e.palette.text.primary}}}}));t.a=function(e){var t=e.icon,i=e.href,r=e.fontSize,h=Object(n.a)(e,d),b=m({fontSize:r});return Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({display:"inline"},h),{},{component:s.a.div,whileHover:{scale:1.1},children:Object(l.jsx)(c.a,{href:i,children:Object(l.jsx)(t,{className:b.icon})})}))}},392:function(e,t,i){},453:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(452),o=i(15),c=i(428),r=i(429),s=i(426),l=i(468),d=i(145),m=i(32),h=i(4),b=i(270),p=i(2),j=["children"],u=Object(s.a)((function(e){return{container:Object(o.a)({minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:"calc( ".concat(e.spacing(4),"px + ").concat(e.navbarHeight," ) "),paddingBottom:e.spacing(4)},e.breakpoints.down("sm"),{paddingTop:e.navbarHeight})}})),g=function(e){var t=e.children,i=Object(h.a)(e,j),a=u();return Object(p.jsx)(b.a,Object(m.a)(Object(m.a)({className:a.container},i),{},{children:t}))},x=i(466),f=i(41),v=Object(s.a)((function(e){var t;return{subTitle:(t={marginBottom:"16px",fontSize:"75px"},Object(o.a)(t,e.breakpoints.down("sm"),{fontSize:"45px"}),Object(o.a)(t,e.breakpoints.down("xs"),{fontSize:"35px"}),t)}})),O=function(){var e=v(),t=Object(a.useContext)(f.a).isLoading,i=Object(l.a)(),o=Object(x.a)().t;return Object(a.useEffect)((function(){t?i.start({opacity:0,y:5}):i.start((function(e){return{y:0,opacity:1,transition:{delay:.1*e+1.2}}}))}),[t,i]),Object(p.jsx)(g,{id:"home",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(c.a,{component:n.a.div,animate:i,custom:0,color:"primary",variant:"h5",style:{marginBottom:"0px"},children:[o("home_welcome"),Object(p.jsx)(n.a.div,{style:{display:"inline-block"},animate:{rotate:[50,90,50]},transition:{repeat:1/0,duration:1.4,repeatDelay:.7},children:"\ud83d\udc4b"}),", ",o("home_i")]}),Object(p.jsx)(c.a,{component:n.a.p,animate:i,custom:2,variant:"h2",color:"#23",className:e.subTitle,children:o("who-am-i")}),Object(p.jsx)(c.a,{component:n.a.p,animate:i,custom:2,variant:"h2",color:"secondary",className:e.subTitle,children:o("home_what_i_do")}),Object(p.jsx)(c.a,{component:n.a.p,animate:i,custom:3,variant:"body2",color:"initial",style:{marginBottom:"0"},children:o("home_job")}),Object(p.jsx)(c.a,{component:n.a.p,animate:i,custom:4,variant:"body1",color:"initial",style:{marginBottom:"30px"},children:o("home_location")}),Object(p.jsx)(n.a.div,{animate:i,custom:5,children:Object(p.jsx)(r.a,{component:d.Link,spy:!0,smooth:!0,offset:0,duration:500,to:"contact",variant:"outlined",color:"primary",size:"large",children:o("home_contact_btn")})})]})})},y=i(87),w=i(99),k=i(431),I=i(398),C=i(18),N=i(284),S=["fullWidth","width"],B=Object(s.a)((function(e){return{root:{display:"inline",width:function(e){return e.fullWidth?"100%":e.width},height:"1px",backgroundColor:"#2da397"}}})),_=function(e){var t=e.fullWidth,i=e.width,a=Object(h.a)(e,S),n=B({fullWidth:t,width:i});return Object(p.jsx)("div",Object(m.a)({className:n.root},a))},z=["children","maxWidth","full","reverse","title","padding"],W=Object(s.a)((function(e){return{container:{paddingTop:function(e){return e.padding?"".concat(e.padding,"px"):"80px"},paddingBottom:function(e){return e.padding?"".concat(e.padding,"px"):"80px"}},titleContainer:{paddingBottom:e.spacing(8),display:"flex",alignItems:"center",maxWidth:"100%"},title:{margin:e.spacing(0,4),textTransform:"uppercase",whiteSpace:"nowrap"},childrenContainer:{minHeight:"100%"}}})),T=function(e){var t=e.children,i=e.maxWidth,o=e.full,r=(e.reverse,e.title),s=e.padding,d=Object(h.a)(e,z),j=W({full:o,maxWidth:i,padding:s}),u=Object(l.a)(),g=Object(l.a)(),x=Object(N.a)(),f=Object(C.a)(x,2),v=f[0],O=f[1],y=Object(N.a)(),w=Object(C.a)(y,2),k=w[0],I=w[1];return Object(a.useEffect)((function(){O&&u.start("visible")}),[u,O]),Object(a.useEffect)((function(){I&&g.start("visible")}),[g,I]),Object(p.jsxs)(b.a,Object(m.a)(Object(m.a)({component:"section",className:j.container},d),{},{children:[r&&Object(p.jsxs)(n.a.div,{ref:v,animate:u,initial:"hidden",transition:{delay:.3,type:"spring",stiffness:100,damping:20},variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:0}},className:j.titleContainer,children:[Object(p.jsx)(_,{width:"20%"}),Object(p.jsx)(c.a,{variant:"h4",color:"initial",className:j.title,children:r}),Object(p.jsx)(_,{fullWidth:!0})]}),Object(p.jsx)(n.a.div,{ref:k,animate:g,initial:"hidden",transition:{delay:.5,type:"spring",stiffness:100,damping:20,when:"beforeChildren"},variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:-50}},children:t})]}))},M=i(430),A=(Object(s.a)((function(e){return{container:{width:"100%",height:"1px",backgroundColor:"rgb(60,60,60)"},progress:{height:"1px",backgroundColor:e.palette.primary.main}}})),[{title:"React JS",value:75},{title:"Node JS",value:80},{title:"Chakra UI",value:60},{title:"Adobe Premiere Pro",value:80},{title:"Adobe Photoshop",value:80},{title:"Figma",value:80},{title:"Java ",value:60},{title:"Express JS ",value:70},{title:"MongoDB",value:70}]),E=[{id:1,title:"MasteryShare",technologies:["React JS","Node JS","Firebase"],backgroundImage:"https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",frontImage:"https://i.ibb.co/2jZjjg8/Screenshot-2021-05-11-042818.png"},{id:2,title:"Inceptum JE",technologies:["Figma"],backgroundImage:"https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",frontImage:"https://i.ibb.co/tCxcWzK/Screenshot-2022-11-21-192949.png"},{id:3,title:"Burpees.io",technologies:["React JS","Node JS","MongoDB"],backgroundImage:"https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",frontImage:"https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg"}],J=[{id:0,company:"Inceptum Junior Enterprise",links:{website:"http://inceptumje.tn/",facebook:"https://www.facebook.com/InceptumJuniorEntreprise/",instagram:"https://www.instagram.com/inceptumje/"}},{id:1,company:"Ordinarycoders",links:{website:"http://ordinarycoders.com/"}},{id:2,company:"Eliteware",links:{instagram:"https://www.instagram.com/"}}],L=[{id:1,title:"8 Habits To Become More Productive ",technologies:["Medium"],backgroundImage:"https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",frontImage:"https://i.ibb.co/2jZjjg8/Screenshot-2021-05-11-042818.png"},{id:2,title:"5 Key Principles For A Modern Web Design",technologies:["Ordinary Coders"],backgroundImage:"https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",frontImage:"https://i.ibb.co/tCxcWzK/Screenshot-2022-11-21-192949.png"},{id:3,title:"My Windows 11 Experience | By Ahmed Belaid",technologies:["Geek Culture"],backgroundImage:"https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",frontImage:"https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg"}];var D=Object(s.a)((function(e){return{container:{maxWidth:"600px",display:"flex",flexWrap:"wrap"},skillWrapper:{width:"100%"},skillTitle:{whiteSpace:"nowrap",marginRight:e.spacing(1)},paper:{marginRight:"10px",marginBottom:"10px",minWidth:"50px",padding:"10px"}}})),F=function(){var e=D();Object(y.a)();return Object(p.jsx)("div",{className:e.container,children:A.map((function(t,i){return Object(p.jsx)(M.a,{elevation:10,className:e.paper,children:Object(p.jsx)(c.a,{align:"center",children:t.title})},i)}))})},H=i.p+"static/media/avatar.db876a37.jpg",P=Object(s.a)((function(e){return{avatarImg:{borderRadius:"50%",width:"270px",height:"270px",objectFit:"cover",objectPosition:"0 -20px",boxShadow:e.shadows[10]}}})),R=function(){var e=P();return Object(p.jsx)("img",{src:H,alt:"Ahmed Belaid",className:e.avatarImg})},G=Object(s.a)((function(e){return{gridItemWrapper:{display:"flex",justifyContent:"center",alignItems:"center"}}})),q=function(){var e=G(),t=Object(y.a)(),i=Object(w.a)(t.breakpoints.down("sm")),a=Object(x.a)().t;return Object(p.jsx)(T,{id:"about",title:a("menu_about"),maxWidth:"md",children:Object(p.jsxs)(k.a,{container:!0,spacing:0,alignItems:"center",style:{width:"100%"},children:[i&&Object(p.jsx)(k.a,{item:!0,xs:12,md:5,className:e.gridItemWrapper,children:Object(p.jsx)(I.a,{mb:6,children:Object(p.jsx)(R,{})})}),Object(p.jsxs)(k.a,{item:!0,xs:12,md:7,className:e.gridItemWrapper,style:{flexDirection:"column",alignItems:"space-around"},children:[Object(p.jsx)(I.a,{mb:4,children:Object(p.jsx)(c.a,{variant:"body1",children:a("about_desc")})}),Object(p.jsx)(F,{})]}),!i&&Object(p.jsx)(k.a,{item:!0,xs:12,md:5,className:e.gridItemWrapper,children:Object(p.jsx)(R,{})})]})})},Z=i(456),U=i(433),X=i(432),K=i(434),V=i(435),Y=i(286),Q=i(136),$=["children","value","index"];function ee(e){var t=e.children,i=e.value,a=e.index,n=Object(h.a)(e,$),o=Object(y.a)(),c=Object(w.a)(o.breakpoints.down("sm"));return Object(p.jsx)("div",Object(m.a)(Object(m.a)({role:"tabpanel",hidden:i!==a,id:"tabpanel-".concat(a),"aria-labelledby":"tab-".concat(a)},n),{},{children:i===a&&Object(p.jsx)(I.a,{p:3,minHeight:c?0:"350px",children:Object(p.jsx)("div",{children:t})})}))}var te=Object(s.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.main,display:"flex",width:"100%",height:"100%",flexDirection:function(e){return e.isMobile?"column":"row"}},tabs:{borderRight:function(t){return t.isMobile?"none":"1px solid ".concat(e.palette.secondary.main)},borderBottom:function(t){return t.isMobile?"1px solid ".concat(e.palette.secondary.main):"none"},width:function(e){return e.isMobile?"inherit":"200px"},maxWidth:function(e){return e.isMobile?"inherit":"200px"},minWidth:function(e){return e.isMobile?"inherit":"200px"}},indicator:{backgroundColor:"red"}}})),ie=function(){var e=Object(y.a)(),t=Object(x.a)().t,i=Object(w.a)(e.breakpoints.down("sm")),n=te({isMobile:i}),o=Object(a.useState)(0),r=Object(C.a)(o,2),s=r[0],l=r[1];return Object(p.jsxs)("div",{className:n.root,children:[Object(p.jsx)(Z.a,{orientation:i?"horizontal":"vertical",value:s,onChange:function(e,t){l(t)},className:n.tabs,classes:{indicator:n.indicator},centered:!0,children:J.map((function(e){return Object(p.jsx)(U.a,{label:e.company},e.id)}))}),J.map((function(e){return Object(p.jsxs)(ee,{value:s,index:e.id,children:[Object(p.jsxs)(I.a,{mb:4,children:[Object(p.jsxs)(c.a,{variant:"h5",children:[t("experience_".concat(e.id,"_job"))," @"," ",Object(p.jsx)(X.a,{href:e.links.website||e.links.facebook||e.links.instagram,color:"primary",children:e.company})]}),Object(p.jsx)(c.a,{variant:"body2",color:"textSecondary",fontSize:"14",children:t("experience_".concat(e.id,"_duration"))})]}),Object(p.jsx)(I.a,{mb:4,children:Object(p.jsx)(c.a,{variant:"body1",color:"textPrimary",children:t("experience_".concat(e.id,"_overview"))})}),Object(p.jsxs)(I.a,{children:[e.links.website&&Object(p.jsx)(Q.a,{icon:K.a,fontSize:28,m:1,href:e.links.website}),e.links.facebook&&Object(p.jsx)(Q.a,{icon:V.a,fontSize:28,m:1,href:e.links.facebook}),e.links.instagram&&Object(p.jsx)(Q.a,{icon:Y.a,fontSize:28,m:1,href:e.links.instagram})]})]},e.id)}))]})},ae=function(){return Object(p.jsx)(T,{id:"experience",title:"Experience",maxWidth:"sm",padding:"120",reverse:!0,children:Object(p.jsx)(ie,{})})},ne=i(459),oe=i(463),ce=i(436),re=i(437),se=i(438),le=i(439),de=i(440),me=["id","title","backgroundImage","frontImage","overview","technologies","onClick"],he={hover:{opacity:1},initial:{opacity:0}},be={hover:{y:0,opacity:1},initial:{opacity:0,y:50}},pe=Object(s.a)((function(e){return{root:{position:"relative",height:350,overflow:"hidden",cursor:"pointer",backgroundColor:e.palette.primary.main},media:{height:200,width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden"},frontImage:{marginTop:"20px",objectFit:"cover",objectPosition:"center top",width:"90%",boxShadow:e.shadows[8]},title:{fontSize:"20px",fontWeight:700,marginBottom:e.spacing(1),color:e.palette.primary.contrastText},overview:{fontSize:"14px",marginBottom:e.spacing(1),color:e.palette.primary.contrastText},technologies:{fontSize:"15px",color:"rgb(10,10,10)"},hover:{position:"absolute",top:0,height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.97)",display:"flex",justifyContent:"center",alignItems:"center"}}})),je=function(e){var t=e.id,i=e.title,a=e.backgroundImage,o=e.frontImage,r=e.overview,s=e.technologies,d=e.onClick,b=Object(h.a)(e,me),j=pe(),u=Object(l.a)();return u.start("initial"),Object(p.jsxs)(ce.a,Object(m.a)(Object(m.a)({className:j.root,elevation:10,component:n.a.div,layoutId:t,onMouseEnter:function(){u.start("hover")},onMouseLeave:function(){u.start("initial")},onClick:function(){return d()}},b),{},{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(re.a,{component:n.a.div,layoutId:"img-container-".concat(t),className:j.media,image:a,title:i,children:Object(p.jsx)(n.a.img,{layoutId:"front-img-".concat(t),className:j.frontImage,src:o,alt:i})}),Object(p.jsxs)(se.a,{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[Object(p.jsx)(c.a,{variant:"h5",className:j.title,component:n.a.h5,layoutId:"title-".concat(t),children:i}),Object(p.jsx)(c.a,{variant:"body2",className:j.overview,component:n.a.h5,layoutId:"overview-".concat(t),style:{flexGrow:2},children:r}),Object(p.jsx)(c.a,{variant:"body2",className:j.technologies,component:n.a.h5,layoutId:"technologies-".concat(t),color:"primary",children:s.join(" \xb7 ")})]})]}),Object(p.jsx)(n.a.div,{transition:{delay:.15},variants:he,animate:u,className:j.hover,children:Object(p.jsxs)(I.a,{display:"flex",alignItems:"center",justofyContent:"center",transition:{delay:.3},component:n.a.div,variants:be,animate:u,children:[Object(p.jsx)(I.a,{mr:1,children:Object(p.jsx)(c.a,{variant:"h4",children:"View project "})}),Object(p.jsx)(le.a,{component:n.a.div,transition:{delay:.3,repeat:1/0,duration:1,repeatType:"reverse"},variants:{hover:{y:7},intial:{y:-2}},animate:"hover",children:Object(p.jsx)(de.a,{})})]})})]}))},ue=i(441),ge=i(442),xe=["id","title","backgroundImage","frontImage","overview","technologies","handleClose"],fe=Object(s.a)((function(e){return{wrapper:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:"10000"},container:{position:"fixed",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.22)",backdropFilter:"blur(2px)",opacity:0},root:{position:"fixed",left:0,right:0,top:0,margin:"0 auto",marginTop:"calc( ".concat(e.navbarHeight," + 20px )"),width:"90%",maxWidth:"600px",height:"600px",maxHeight:"80%",zIndex:"10000",boxShadow:e.shadows[10],backgroundColor:e.palette.secondary.main},media:{height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden"},frontImage:{marginTop:"20px",objectFit:"cover",objectPosition:"center top",width:"90%",boxShadow:e.shadows[8]},title:{fontSize:"20px",fontWeight:700,marginBottom:e.spacing(1),color:e.palette.secondary.contrastText},overview:{fontSize:"14px",marginBottom:e.spacing(1),color:e.palette.secondary.contrastText},technologies:{fontSize:"15px",color:"rgb(10,10,10)"},closeBtn:{position:"absolute",top:0,right:0,margin:"2px",color:"white"}}})),ve=function(e){var t=e.id,i=e.title,a=e.backgroundImage,o=e.frontImage,r=e.overview,s=e.technologies,l=e.handleClose,d=(Object(h.a)(e,xe),fe());return Object(p.jsxs)("div",{className:d.wrapper,children:[Object(p.jsx)(ce.a,{className:d.root,elevation:0,component:n.a.div,layoutId:t,children:Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(re.a,{component:n.a.div,layoutId:"img-container-".concat(t),className:d.media,image:a,title:i,children:Object(p.jsx)(n.a.img,{layoutId:"front-img-".concat(t),className:d.frontImage,src:o,alt:i})}),Object(p.jsxs)(se.a,{children:[Object(p.jsx)(c.a,{variant:"h5",className:d.title,component:n.a.h5,layoutId:"title-".concat(t),children:i}),Object(p.jsx)(c.a,{variant:"body2",className:d.overview,component:n.a.h5,layoutId:"overview-".concat(t),children:r}),Object(p.jsx)(c.a,{variant:"body1",className:d.technologies,component:n.a.h5,layoutId:"technologies-".concat(t),color:"primary",children:s.join(" \xb7 ")})]})]}),Object(p.jsx)(ue.a,{className:d.closeBtn,onClick:function(){return l()},children:Object(p.jsx)(ge.a,{})})]})}),Object(p.jsx)(n.a.div,{className:d.container,variants:{hidden:{opacity:0},visible:{opacity:1}},intial:"hidden",animate:"visible",exit:"hidden",onClick:function(){return l()}})]})},Oe=Object(s.a)((function(e){return{galleryContainer:{overflow:"visible",width:"100%",margin:"0 auto"},item:{overflow:"visible"}}})),ye=function(){var e=Oe(),t=Object(x.a)().t,i=Object(a.useState)(null),n=Object(C.a)(i,2),o=n[0],c=n[1],r=function(e){return E.find((function(t){return t.id===e}))};return Object(p.jsxs)(ne.a,{type:"crossfade",children:[Object(p.jsx)(k.a,{container:!0,spacing:4,className:e.galleryContainer,children:E.map((function(i,a){return Object(p.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,classes:{item:e.item},children:Object(p.jsx)(je,{id:i.id,title:i.title,overview:t("projects_".concat(i.id,"_overview")),backgroundImage:i.backgroundImage,frontImage:i.frontImage,technologies:i.technologies,onClick:function(){return c(i.id)},initial:{opacity:0,y:-50},animate:{opacity:1,y:0}})},i.id)}))}),Object(p.jsx)(oe.a,{children:o&&Object(p.jsx)(ve,{id:o,title:r(o).title,overview:t("projects_".concat(o,"_extended_overview")),backgroundImage:r(o).backgroundImage,frontImage:r(o).frontImage,technologies:r(o).technologies,handleClose:function(){return c(null)}},o)})]})},we=function(){var e=Object(x.a)().t;return Object(p.jsx)(T,{id:"projects",title:e("menu_projects"),maxWidth:"md",children:Object(p.jsx)(ye,{})})},ke=i(454),Ie=i(396),Ce=i(399),Ne=i(397),Se=(i(392),function(e){return Object(p.jsxs)("svg",Object(m.a)(Object(m.a)({id:"successAnimation",className:"animated",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70 70"},e),{},{children:[Object(p.jsx)("path",{id:"successAnimationResult",fill:"#D8D8D8",d:"M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"}),Object(p.jsx)("circle",{id:"successAnimationCircle",cx:"35",cy:"35",r:"24",stroke:"#979797",strokeWidth:"2",strokeLinecap:"round",fill:"transparent"}),Object(p.jsx)("polyline",{id:"successAnimationCheck",stroke:"#979797",strokeWidth:"2",points:"23 34 34 43 47 27",fill:"transparent"})]}))}),Be=Object(s.a)((function(e){return{form:{width:"100%"},submitBtn:{width:"200px"}}})),_e=function(){var e=Be(),t=Object(a.useState)(!1),i=Object(C.a)(t,2),o=i[0],s=i[1],l=Object(a.useState)(!1),d=Object(C.a)(l,2),m=d[0],h=d[1],j=Object(x.a)().t,u=Object(Ie.a)({initialValues:{from_name:"",email:"",message:""},validationSchema:Ne.a({from_name:Ne.b().required("Name is required"),email:Ne.b().email("Email adress is not valid").required("Email adress is required"),message:Ne.b().required("message is required")}),onSubmit:function(e){var t;t=e,s(!0),Ce.a.send("service_os0kd0b","template_d9kgett",t,"xAFquXXO72PgmLiI9").then((function(e){h(!0),s(!1),console.log(e.text)}),(function(e){s(!1),console.log(e.text)})),h(!0)},validateOnChange:!1,validateOnBlur:!1});return Object(p.jsx)(b.a,{maxWidth:"md",children:Object(p.jsxs)(I.a,{overflow:"hidden",style:{position:"relative",minHeight:"300px"},children:[Object(p.jsx)(oe.a,{children:!m&&Object(p.jsxs)("form",{className:e.form,onSubmit:u.handleSubmit,children:[Object(p.jsx)(ke.a,{error:Boolean(u.touched.from_name&&u.errors.from_name),onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.from_name,helperText:u.touched.from_name&&u.errors.from_name,variant:"filled",margin:"normal",type:"text",fullWidth:!0,id:"from_name",label:j("name"),name:"from_name"}),Object(p.jsx)(ke.a,{error:Boolean(u.touched.email&&u.errors.email),onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.email,helperText:u.touched.email&&u.errors.email,variant:"filled",type:"email",margin:"normal",fullWidth:!0,id:"email",label:j("contact_email"),name:"email"}),Object(p.jsx)(ke.a,{error:Boolean(u.touched.message&&u.errors.message),onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.message,helperText:u.touched.message&&u.errors.message,variant:"filled",margin:"normal",fullWidth:!0,name:"message",label:"Message",type:"text",id:"message",multiline:!0,minRows:5}),Object(p.jsx)(I.a,{display:"flex",justifyContent:"center",mt:2,children:Object(p.jsx)(r.a,{className:e.submitBtn,type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:o,children:j("contact_btn")})})]})}),Object(p.jsx)(oe.a,{children:m&&Object(p.jsxs)(I.a,{component:n.a.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},style:{position:"absolute",top:0,height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(p.jsx)(I.a,{m:2,children:Object(p.jsx)(Se,{width:"150"})}),Object(p.jsx)(c.a,{component:n.a.h4,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:1.5,duration:1},variant:"body2",children:"Your message has been successfully sent, i'll reply as soon as possible."})]})})]})})},ze=function(){return Object(p.jsx)(T,{id:"contact",title:"Contact",maxWidth:"sm",reverse:!0,children:Object(p.jsx)(_e,{})})},We=Object(s.a)((function(e){return{container:{position:"relative",height:"100vh",width:"100%",overflow:"hidden"},iframe:{position:"absolute",top:0,right:0,width:"100%",maxWidth:"600px"},wrapper:{position:"absolute",top:0,right:0,width:"100%",zIndex:-1},hideLogo:{position:"absolute",right:0,bottom:0,width:"100px",height:"100px",backgroundColor:e.palette.background.default}}})),Te=function(){var e=We(),t=Object(a.useContext)(f.a).isLoading,i=Object(l.a)();return Object(a.useEffect)((function(){t?i.start({opacity:0,y:-50}):i.start({y:0,opacity:1,transition:{delay:3,type:"spring",stiffness:260,damping:20}})}),[t,i]),Object(p.jsx)(n.a.div,{animate:i,className:e.wrapper,children:Object(p.jsxs)("div",{className:e.container,children:[Object(p.jsx)("iframe",{title:"background-3d",src:"https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/",frameBorder:"0",height:"100%",className:e.iframe}),Object(p.jsx)("div",{className:e.hideLogo})]})})},Me=["id","title","backgroundImage","frontImage","overview","technologies","onClick"],Ae={hover:{opacity:1},initial:{opacity:0}},Ee={hover:{y:0,opacity:1},initial:{opacity:0,y:50}},Je=Object(s.a)((function(e){return{root:{position:"relative",height:350,overflow:"hidden",cursor:"pointer",backgroundColor:e.palette.primary.main},media:{height:200,width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden"},frontImage:{marginTop:"20px",objectFit:"cover",objectPosition:"center top",width:"90%",boxShadow:e.shadows[8]},title:{fontSize:"20px",fontWeight:700,marginBottom:e.spacing(1),color:e.palette.primary.contrastText},overview:{fontSize:"14px",marginBottom:e.spacing(1),color:e.palette.primary.contrastText},technologies:{fontSize:"15px",color:"rgb(10,10,10)"},hover:{position:"absolute",top:0,height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.97)",display:"flex",justifyContent:"center",alignItems:"center"}}})),Le=function(e){var t=e.id,i=e.title,a=e.backgroundImage,o=e.frontImage,r=e.overview,s=e.technologies,d=e.onClick,b=Object(h.a)(e,Me),j=Je(),u=Object(l.a)();return u.start("initial"),Object(p.jsxs)(ce.a,Object(m.a)(Object(m.a)({className:j.root,elevation:10,component:n.a.div,layoutId:t,onMouseEnter:function(){u.start("hover")},onMouseLeave:function(){u.start("initial")},onClick:function(){return d()}},b),{},{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(re.a,{component:n.a.div,layoutId:"img-container-".concat(t),className:j.media,image:a,title:i,children:Object(p.jsx)(n.a.img,{layoutId:"front-img-".concat(t),className:j.frontImage,src:o,alt:i})}),Object(p.jsxs)(se.a,{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[Object(p.jsx)(c.a,{variant:"h5",className:j.title,component:n.a.h5,layoutId:"title-".concat(t),children:i}),Object(p.jsx)(c.a,{variant:"body2",className:j.overview,component:n.a.h5,layoutId:"overview-".concat(t),style:{flexGrow:2},children:r}),Object(p.jsx)(c.a,{variant:"body2",className:j.technologies,component:n.a.h5,layoutId:"technologies-".concat(t),color:"primary",children:s.join(" \xb7 ")})]})]}),Object(p.jsx)(n.a.div,{transition:{delay:.15},variants:Ae,animate:u,className:j.hover,children:Object(p.jsxs)(I.a,{display:"flex",alignItems:"center",justofyContent:"center",transition:{delay:.3},component:n.a.div,variants:Ee,animate:u,children:[Object(p.jsx)(I.a,{mr:1,children:Object(p.jsx)(c.a,{variant:"h4",children:"View Articles "})}),Object(p.jsx)(le.a,{component:n.a.div,transition:{delay:.3,repeat:1/0,duration:1,repeatType:"reverse"},variants:{hover:{y:7},intial:{y:-2}},animate:"hover",children:Object(p.jsx)(de.a,{})})]})})]}))},De=["id","title","backgroundImage","frontImage","overview","technologies","handleClose"],Fe=Object(s.a)((function(e){return{wrapper:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:"10000"},container:{position:"fixed",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.22)",backdropFilter:"blur(2px)",opacity:0},root:{position:"fixed",left:0,right:0,top:0,margin:"0 auto",marginTop:"calc( ".concat(e.navbarHeight," + 20px )"),width:"90%",maxWidth:"600px",height:"600px",maxHeight:"80%",zIndex:"10000",boxShadow:e.shadows[10],backgroundColor:e.palette.secondary.main},media:{height:"300px",width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"hidden"},frontImage:{marginTop:"20px",objectFit:"cover",objectPosition:"center top",width:"90%",boxShadow:e.shadows[8]},title:{fontSize:"20px",fontWeight:700,marginBottom:e.spacing(1),color:e.palette.secondary.contrastText},overview:{fontSize:"14px",marginBottom:e.spacing(1),color:e.palette.secondary.contrastText},technologies:{fontSize:"15px",color:"rgb(10,10,10)"},closeBtn:{position:"absolute",top:0,right:0,margin:"2px",color:"white"}}})),He=function(e){var t=e.id,i=e.title,a=e.backgroundImage,o=e.frontImage,r=e.overview,s=e.technologies,l=e.handleClose,d=(Object(h.a)(e,De),Fe());return Object(p.jsxs)("div",{className:d.wrapper,children:[Object(p.jsx)(ce.a,{className:d.root,elevation:0,component:n.a.div,layoutId:t,children:Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(re.a,{component:n.a.div,layoutId:"img-container-".concat(t),className:d.media,image:a,title:i,children:Object(p.jsx)(n.a.img,{layoutId:"front-img-".concat(t),className:d.frontImage,src:o,alt:i})}),Object(p.jsxs)(se.a,{children:[Object(p.jsx)(c.a,{variant:"h5",className:d.title,component:n.a.h5,layoutId:"title-".concat(t),children:i}),Object(p.jsx)(c.a,{variant:"body2",className:d.overview,component:n.a.h5,layoutId:"overview-".concat(t),children:r}),Object(p.jsx)(c.a,{variant:"body1",className:d.technologies,component:n.a.h5,layoutId:"technologies-".concat(t),color:"primary",children:s.join(" \xb7 ")})]})]}),Object(p.jsx)(ue.a,{className:d.closeBtn,onClick:function(){return l()},children:Object(p.jsx)(ge.a,{})})]})}),Object(p.jsx)(n.a.div,{className:d.container,variants:{hidden:{opacity:0},visible:{opacity:1}},intial:"hidden",animate:"visible",exit:"hidden",onClick:function(){return l()}})]})},Pe=Object(s.a)((function(e){return{galleryContainer:{overflow:"visible",width:"100%",margin:"0 auto"},item:{overflow:"visible"}}})),Re=function(){var e=Pe(),t=Object(x.a)().t,i=Object(a.useState)(null),n=Object(C.a)(i,2),o=n[0],c=n[1],r=function(e){return L.find((function(t){return t.id===e}))};return Object(p.jsxs)(ne.a,{type:"crossfade",children:[Object(p.jsx)(k.a,{container:!0,spacing:4,className:e.galleryContainer,children:L.map((function(i,a){return Object(p.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,classes:{item:e.item},children:Object(p.jsx)(Le,{id:i.id,title:i.title,overview:t("articles_".concat(i.id,"_overview")),backgroundImage:i.backgroundImage,frontImage:i.frontImage,technologies:i.technologies,onClick:function(){return c(i.id)},initial:{opacity:0,y:-50},animate:{opacity:1,y:0}})},i.id)}))}),Object(p.jsx)(oe.a,{children:o&&Object(p.jsx)(He,{id:o,title:r(o).title,overview:t("articles_".concat(o,"_extended_overview")),backgroundImage:r(o).backgroundImage,frontImage:r(o).frontImage,technologies:r(o).technologies,handleClose:function(){return c(null)}},o)})]})},Ge=Re,qe=function(){var e=Object(y.a)(),t=Object(w.a)(e.breakpoints.down("md"));return Object(p.jsxs)(n.a.main,{initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",stiffness:260,damping:20},children:[Object(p.jsx)(O,{}),Object(p.jsx)(q,{}),Object(p.jsx)(ae,{}),Object(p.jsx)(we,{}),Object(p.jsx)(Ge,{}),Object(p.jsx)(ze,{}),!t&&Object(p.jsx)(Te,{})]})};t.default=qe}}]);
//# sourceMappingURL=10.32047ed0.chunk.js.map