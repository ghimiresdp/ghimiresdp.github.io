(this["webpackJsonpsudip-ghimire"]=this["webpackJsonpsudip-ghimire"]||[]).push([[0],{15:function(e,t,a){"use strict";var n=a(31);a.d(t,"ScrollToTop",(function(){return n.a}));var i=a(32);a.d(t,"Footer",(function(){return i.a}));var c=a(33);a.o(c,"Navbar")&&a.d(t,"Navbar",(function(){return c.Navbar}));var s=a(35);a.d(t,"Navbar",(function(){return s.a}))},18:function(e,t,a){"use strict";t.a={index:"/",blog:"/blog",contact:"/contact",gallery:"/gallery",notes:"/notes"}},3:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(7),i=[{name:"LinkedIn",url:"https://linkedin.com/in/ghimiresdp",icon:n.n},{name:"ResearchGate",url:"https://www.researchgate.net/profile/Sudip_Ghimire3",icon:n.r},{name:"Github",url:"https://github.com/ghimiresdp",icon:n.g},{name:"Facebook",url:"https://facebook.com/ghimiresdp",icon:n.c},{name:"Skype",url:"skype:ghimiresdp",icon:n.t}],c=function(e){return"https://ghimiresdp.github.io".concat(e)}},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),i=a(0),c=a(1),s=a(5),r=a(6),o=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(!0),d=Object(n.a)(l,2),m=d[0],j=d[1],h=function(){o(window.scrollY<1500),j(window.scrollY<200)};return Object(c.useEffect)((function(){return document.addEventListener("scroll",h),function(){document.removeEventListener("scroll",h)}}),[]),Object(i.jsx)("button",{className:"scroll-to-top rounded-circle".concat(m?" animated":""),onClick:function(e){e.preventDefault(),a?(window.scrollTo(0,window.scrollY+700),o(!1)):(window.scrollTo(0,0),o(!0))},children:Object(i.jsx)(s.a,{icon:a?r.a:r.b,size:"2x"})})}},32:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),i=a(5),c=a(7),s=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"container py-3",children:[Object(n.jsxs)("p",{className:"text-center text-muted",children:["\xa9 Sudip Ghimire ",(new Date).getFullYear()]}),Object(n.jsxs)("div",{className:"d-flex flex-row align-items-center justify-content-center py-3",children:[Object(n.jsx)("a",{className:"mx-2",href:"https://www.facebook.com/ghimiresdp",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.a,{size:"2x",icon:c.d})}),Object(n.jsx)("a",{className:"mx-2",href:"https://www.linkedin.com/in/ghimiresdp",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.a,{size:"2x",icon:c.m})}),Object(n.jsx)("a",{className:"mx-2",href:"https://www.github.com/ghimiresdp",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.a,{size:"2x",icon:c.h})}),Object(n.jsx)("a",{className:"mx-2",href:"skype:ghimiresdp",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.a,{size:"2x",icon:c.t})})]})]})})}},33:function(e,t){},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(20),i=a(0),c=a(1),s=a(22),r=a(6),o=a(5),l=a(18),d=a(3),m=a(2),j=a(38),h=a(12),b=function(e){var t;return Object(i.jsxs)("nav",{className:"sidebar shadow bg-primary-gradient".concat(null!==(t=e.collapsed)&&void 0!==t&&t?" sidebar-sm":""),children:[Object(i.jsx)("span",{className:"pin-icon",onClick:function(t){e.onCollapse()},children:Object(i.jsx)(o.a,{icon:e.collapsed?r.c:r.p,transform:{size:22}})}),e.children]})},u=function(e){var t,a=e.icon,n=e.children,c=e.link,r=(e.className,Object(j.a)(e,["icon","children","link","className"]));Object(h.f)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(s.c,Object(m.a)(Object(m.a)({className:"sidebar-item ".concat(null!==(t=e.className)&&void 0!==t?t:""),to:c},r),{},{children:[Object(i.jsx)("span",{className:"sidebar-icon",children:Object(i.jsx)(o.a,{icon:a,transform:{size:20}})}),Object(i.jsx)("span",{className:"sidebar-body",children:n})]}))})},p=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],m=t[1],j=[{name:"Home",icon:r.j,exact:!0,type:"link",link:l.a.index,addSeparator:!1},{name:"Gallery",icon:r.o,exact:!0,type:"link",link:l.a.gallery,addSeparator:!1},{name:"Blog",icon:r.d,exact:!0,type:"link",link:l.a.blog,addSeparator:!1},{name:"Lecture Notes",icon:r.e,exact:!0,type:"link",link:l.a.notes,addSeparator:!1},{name:"Contact",icon:r.k,exact:!0,type:"link",link:l.a.contact,addSeparator:!1}];return Object(c.useEffect)((function(){window.innerWidth<768?m(!0):m("true"===localStorage.getItem("collapsed"))}),[]),Object(c.useEffect)((function(){var e,t;a?null===(e=document.querySelector("#root"))||void 0===e||e.classList.remove("shifted"):null===(t=document.querySelector("#root"))||void 0===t||t.classList.add("shifted"),localStorage.setItem("collapsed","".concat(a))}),[a]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"mobile-menu text-primary",onClick:function(){m(!a)},children:Object(i.jsx)(o.a,{icon:r.c,size:"2x"})}),Object(i.jsxs)(b,{collapsed:a,onCollapse:function(){return m(!a)},children:[Object(i.jsxs)("div",{className:"sidebar-header d-flex flex-column align-items-center justify-content-center my-3",children:[Object(i.jsx)("img",{className:"profile-img",src:Object(d.a)("/img/profile.jpg"),alt:""}),Object(i.jsxs)("div",{className:"sidebar-header-content",children:[Object(i.jsx)(s.b,{className:"mb-3",to:"/",style:{fontSize:"xx-large"},children:Object(i.jsx)("strong",{children:"Sudip Ghimire"})}),Object(i.jsx)("span",{className:"social-icons social-icons-sm",children:d.b.map((function(e,t){var a=e.url,n=e.icon;return Object(i.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferer",children:Object(i.jsx)(o.a,{icon:n})},t)}))})]})]}),j.map((function(e,t){return Object(i.jsx)(u,{icon:e.icon,link:e.link,exact:e.exact,children:e.name},t)}))]})]})}},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(36),c=a.n(i),s=(a(44),a(45),a(54),a(46),a(15)),r=a(22),o=a(12),l=a(18),d=a(8),m=a(9),j=a(11),h=a(10),b=a(1),u=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{style:{height:"70vh"},children:[Object(n.jsx)("h2",{children:"Blog"}),Object(n.jsx)("strong",{children:"This page is still being constructed"})]}),Object(n.jsx)(s.Footer,{})]})}}]),a}(b.Component),p=a(5),g=a(6),x=a(7),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"container",style:{height:"70vh"},children:Object(n.jsxs)("div",{className:"row  mb-5",children:[Object(n.jsxs)("div",{className:"col-12 col-lg-7",children:[Object(n.jsx)("h1",{children:"Er. Sudip Ghimire"}),Object(n.jsxs)("div",{className:"subheading mb-3",children:[Object(n.jsx)(p.a,{icon:g.m,className:"mr-3"}),"Bhaktapur, BA 44809 | Nepal",Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"mailto:ghimire.sdp+connect@gmail.com?subject=Connect with sudip",target:"_top",children:[Object(n.jsx)(p.a,{icon:g.l,className:"mr-3"})," ghimire.sdp+connect@gmail.com"]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("p",{children:[Object(n.jsx)(p.a,{icon:g.n,className:"mr-3"}),"+977 9843202217",Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://sudipghimire.com.np",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(p.a,{icon:g.i,className:"mr-3"}),"sudipghimire.com.np"]}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"skype:ghimiresdp",children:[Object(n.jsx)(p.a,{icon:x.t,className:"mr-3"}),"ghimiresdp"]}),Object(n.jsx)("br",{})]})]}),Object(n.jsx)("div",{className:"col-12 col-lg-5",children:Object(n.jsx)("iframe",{title:"MyPlace",src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23776.386771932397!2d85.39141038729838!3d27.643680367344125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1592639388328!5m2!1sen!2snp",width:"100%",height:300,frameBorder:0,allowFullScreen:!0})})]})}),Object(n.jsx)(s.Footer,{})]})}}]),a}(b.Component),f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h2",{className:"px-2",children:"Facebook"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"fb-gallery",children:[[{url:"https://www.facebook.com/ghimiresdp/posts/2890527241035002",subtitle:"At Bhaisepati",date:"Thursday, March 26, 2020"},{url:"https://www.facebook.com/ghimiresdp/posts/2848869395200787:0",subtitle:"At Pokhara",date:"Saturday, March 7, 2020"},{url:"https://www.facebook.com/ghimiresdp/posts/2815828371838223:0",subtitle:"At Robotics Process Automation Lab",date:"Thursday, February 20, 2020"},{url:"https://www.facebook.com/ghimiresdp/posts/2332354706852261",subtitle:"\u092a\u0941\u0930\u093e\u0928\u093e \u0924\u0940 \u0915\u0947\u0939\u0940 \u0905\u0928\u0941\u0939\u093e\u0930, \u0906\u091c \u0906\u090f \u092e\u0932\u093e\u0908 \u092b\u0947\u0930\u0940 \u092f\u093e\u0926 \u0964\n\u092c\u0930\u094d\u0937\u094c\u0901 \u092c\u093f\u0924\u094d\u092f\u094b \u092d\u0947\u091f\u0918\u093e\u091f \u091b\u0948\u0928, \u0938\u092e\u092f \u0938\u0901\u0917\u0948 \u092d\u092f\u094b \u092c\u0926\u0932\u093e\u092d \u0964\u0964\nRobotics Club",date:"Saturday, June 29, 2019"},{url:"https://www.facebook.com/ghimiresdp/posts/1968802249874177",subtitle:"Tried not to upload, but I couldn't do it.  8 hours well spent.",date:"Thursday, November 8, 2018"},{url:"https://www.facebook.com/ghimiresdp/posts/1127032440717833",subtitle:"and this is my 4 feet long self-made Galilean telescope with about 9X Magnification :D",date:"Wednesday, October 19, 2016"}].map((function(e){var t=e.url,a=e.subtitle,i=e.date;return Object(n.jsx)("div",{className:"fb-post","data-href":t,"data-show-text":"true","data-width":"",children:Object(n.jsxs)("blockquote",{cite:t,className:"fb-xfbml-parse-ignore",children:[Object(n.jsx)("p",{children:a}),"Posted by ",Object(n.jsx)("a",{href:"https://www.facebook.com/ghimiresdp",children:"Sudip"})," on\xa0",Object(n.jsx)("a",{href:t,children:i})]})},t)})),Object(n.jsx)("div",{className:"fb-post",style:{width:"80%"},children:Object(n.jsx)("iframe",{title:"test",width:"100%",src:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fghimiresdp%2Fvideos%2F1112982902122787%2F&show_text=true&width=560",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})]})]})},v=a(3),w=function(){Object(b.useEffect)((function(){window.FB&&window.FB.XFBML.parse()}),[]);var e=[{image:Object(v.a)("/img/education.jpg"),title:"Graduation",subtitle:"Achievements are meant to be shared!!"},{image:Object(v.a)("/img/experience.jpg"),title:"Space Apps Challenge",subtitle:"I want some Space!!"},{image:Object(v.a)("/img/interest.jpg"),title:"Telescope",subtitle:"Look here, I'm Waving man"}];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"demo",className:"carousel slide cover-container","data-ride":"carousel",children:[Object(n.jsx)("ul",{className:"carousel-indicators",children:e.map((function(e,t){return Object(n.jsx)("li",{"data-target":"#demo","data-slide-to":t},t)}))}),Object(n.jsx)("div",{className:"carousel-inner",children:e.map((function(e,t){return Object(n.jsxs)("div",{className:"carousel-item ".concat(!t&&"active"),children:[Object(n.jsx)("img",{className:"cover-image",src:e.image,alt:"Los Angeles"}),Object(n.jsxs)("div",{className:"cover-heading d-flex flex-column align-items-center justify-content-center",children:[Object(n.jsx)("h1",{children:e.title}),Object(n.jsx)("p",{className:"text-lg",children:e.subtitle})]})]},t)}))}),Object(n.jsx)("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev",children:Object(n.jsx)("span",{className:"carousel-control-prev-icon"})}),Object(n.jsx)("a",{className:"carousel-control-next",href:"#demo","data-slide":"next",children:Object(n.jsx)("span",{className:"carousel-control-next-icon"})})]}),Object(n.jsx)(f,{}),Object(n.jsx)("div",{className:"container-fluid mt-5",children:Object(n.jsx)("h2",{className:"text-secondary",children:"Wait!!, We are coming soon with more Galleries"})}),Object(n.jsx)(s.Footer,{})]})},y=a(20),N=function(){var e=["An Engineer","A Software Developer","A System Architect","An AI Enthusiast","A Graphics Designer","A 3D Designer"],t=Object(b.useState)(0),a=Object(y.a)(t,2),i=a[0],c=a[1],s=Object(b.useState)(!0),r=Object(y.a)(s,2),o=r[0],l=r[1];return Object(b.useEffect)((function(){o?setTimeout((function(){c(i<e.length-1?i+1:0),l(!1)}),2200):setTimeout((function(){l(!0)}),50)}),[o]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h3",{className:"d-flex align-items-center mb-5",children:["I'm\xa0",Object(n.jsx)("div",{className:"text-secondary overflow-hidden d-inline-block".concat(o?" typewriter":" d-none"),children:e[i]})]})})},k=function(){return Object(n.jsxs)("div",{className:"section-image-bg",children:[Object(n.jsx)("img",{className:"section-background",src:Object(v.a)("/img/intro.jpg"),alt:""}),Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsxs)("h1",{className:"text-primary",children:["Er. Sudip ",Object(n.jsx)("span",{className:"text-accent",children:"Ghimire"})]}),Object(n.jsx)(N,{}),Object(n.jsxs)("a",{href:"/res/Sudip_Ghimire_Resume.pdf",target:"_blank",className:"btn btn-outline-primary site-button mb-5 mx-3 d-inline-flex align-items-center",children:[Object(n.jsx)(p.a,{size:"2x",icon:g.h,className:"mx-2"})," View My Resume"]}),Object(n.jsxs)("a",{href:"/res/Sudip_Ghimire_Resume.pdf",target:"_blank",download:"sudip-ghimire-resume.pdf",className:"btn btn-primary site-button mb-5 mx-3 d-inline-flex align-items-center",children:[Object(n.jsx)(p.a,{size:"2x",icon:g.g,className:"mx-2"})," Download My Resume"]}),Object(n.jsx)("p",{className:"lead mb-5 text-justify",children:"I am an electronics and communication Engineer and an enthusiast who adores nearly everything identified\n    with innovation. With over 5 years of dynamic contribution in programming, robotics, data science, AI, ML, and\n    automation, I have prepared myself as an ideal student and a professional. Functioning as a software engineer\n    and an embedded systems programmer, I have taken in a great deal about the patterns and upgraded my demonstrable\n    skill appropriately."}),Object(n.jsx)("div",{className:"social-icons",children:v.b.map((function(e,t){var a=e.url,i=e.icon;return Object(n.jsx)("a",{className:"m-3",href:a,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(p.a,{icon:i,transform:{size:24}})},t)}))})]})}),Object(n.jsxs)("div",{style:{position:"relative",margin:"20px",paddingBottom:"56.25%",paddingTop:"25px",height:0},children:[Object(n.jsx)("iframe",{style:{position:"absolute",top:0,left:0},title:"Intro Video",width:"100%",height:"100%",src:"https://www.youtube.com/embed/UnHriYVfSzg",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(n.jsx)("hr",{className:"mt-3 mb-3"})]})]})},S=function(){var e=[{name:"Python",icon:x.q},{name:"Rust",icon:x.s},{name:"Javascript",icon:x.l},{name:"Node Js",icon:x.p},{name:"Java",icon:x.k},{name:"Html",icon:x.j},{name:"Css",icon:x.b},{name:"Git",icon:x.f},{name:"Github",icon:x.g},{name:"Gitlab",icon:x.i},{name:"Figma",icon:x.e},{name:"Windows",icon:x.u},{name:"Linux",icon:x.o},{name:"Android",icon:x.a}];return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills",children:Object(n.jsxs)("div",{className:"row w-100",children:[Object(n.jsx)("h2",{className:"mb-5 col-12",children:"Skills"}),[{title:"Technologies",skills:[" Artificial Intelligence"," Block Chain Technology"," Cloud Computing"," Distributed Computing"," Internet of Things (IOT)"," API Development"," Frontend Web Development"," Desktop Software Development"," Mobile Development"]},{title:"Web Frameworks and Services",skills:["Django Rest Framework","Amazon Web Services","Actix-web","Bootstrap","React JS","React Native"]},{title:"Productivity Tools",skills:["Blender 3D","Adobe Photoshop","Draw.IO (Diagrams)","Microsoft Office","Asana"]}].map((function(e,t){return Object(n.jsxs)("div",{className:"my-3 col-12 col-md-6 col-lg-4",children:[Object(n.jsx)("span",{className:"subheading mb-3",children:e.title}),Object(n.jsx)("ul",{className:"fa-ul mb-0",children:e.skills.map((function(e,t){return Object(n.jsxs)("li",{className:"mb-2",children:[Object(n.jsx)(p.a,{className:"text-secondary me-2",icon:g.f}),e]},t)}))})]},t)})),Object(n.jsxs)("div",{className:"my-3 col-12",children:[Object(n.jsx)("span",{className:"subheading",children:"Programming Languages, Design Tools, and Operating Systems"}),Object(n.jsx)("ul",{className:"list-inline",children:e.map((function(e,t){return Object(n.jsx)("li",{className:"list-inline-item m-3 text-secondary",children:Object(n.jsx)(p.a,{icon:e.icon,size:"2x"})},t)}))})]})]})}),Object(n.jsx)("hr",{className:"m-0"})]})},C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=[{name:"Connecting Dots Private Limited",date:"November 2019 - Present",website:"http://connectingdots.global",image:Object(v.a)("/img/icons/cdts.png"),position:"Senior Software Engineer",roles:["Fullstack Web development with Python, Java, and React Js","RESTful API development with Django Rest Framework","System Architecture design and development","Software Developer Lead","E-commerce Project"]},{name:"IGC Technology Private Limited",date:"June 2018 - July 2019",website:"https://igctech.com.np/",image:Object(v.a)("/img/icons/igc.png"),position:"Software Developer",roles:["Python based web applications with Django and Rest Framework","Mobile application development with React Native","Payment gateways , Ride Sharing application, and e-learning applications"]},{name:"Eton Technology Private Limited",date:"November 2017 - June 2018",website:"https://etonins.com/",image:Object(v.a)("/img/icons/eton.png"),position:"Systems Programmer",roles:["IOT systems for GPS and RFID based trackers with Python and Java","Electronic Circuit Design and Firmware Programming","School Management and Vehicle tracking projects"]}];return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5",id:"experience",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsx)("h2",{className:"mb-5",children:"Experience"}),e.map((function(e,t){return Object(n.jsxs)("div",{className:"resume-item row mb-5",children:[Object(n.jsxs)("div",{className:"col-md-8 col-12",children:[Object(n.jsx)("p",{className:"resume-date mb-0",children:e.date}),Object(n.jsx)("h3",{className:"mb-0",children:e.position}),Object(n.jsx)("a",{className:"subheading mb-2",href:e.website,target:"_blank",rel:"noopener noreferrer",children:e.name}),Object(n.jsx)("ul",{className:"fa-ul",children:e.roles.map((function(e,t){return Object(n.jsxs)("li",{children:[Object(n.jsx)(p.a,{icon:g.f,className:"text-secondary me-2"}),e]},t)}))})]}),Object(n.jsx)("div",{className:"col-md-4 col-12 d-flex align-items-center justify-content-center",children:Object(n.jsx)("a",{href:e.website,children:Object(n.jsx)("img",{src:e.image,alt:"connecting dots logo",width:128})})})]},t)}))]})}),Object(n.jsx)("hr",{className:"m-0"})]})}}]),a}(b.Component),A=function(){var e=[{name:"Himalaya College of Engineering",affiliation:"Tribhuvan University",date:"January, 2018",degree:"Bachelor of Engineering in Electronics and communication",icon:Object(v.a)("/img/icons/hcoe.png"),website:"https://hcoe.edu.np",majors:["Artificial Intelligence","Radar Technology","Optical Fiber Communication"]},{name:"Moon Light Higher Secondary School",affiliation:"Higher Secondary Education Board",date:"August, 2013",degree:"Science",icon:Object(v.a)("/img/icons/molihss.png"),website:"https://www.molihss.edu.np/",majors:["Physics","Chemistry","Mathematics","Computer science"]}];return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsx)("h2",{className:"mb-5",children:"Education"}),e.map((function(e,t){return Object(n.jsxs)("div",{className:"resume-item mb-5 row",children:[Object(n.jsxs)("div",{className:"col-12 col-md-8",children:[Object(n.jsxs)("span",{className:"subheading mb-0",children:[e.affiliation,Object(n.jsxs)("span",{className:"resume-date mx-2 me-0",children:["(",e.date,")"]})]}),Object(n.jsx)("a",{href:e.website,target:"_blank",style:{textDecoration:"none"},children:Object(n.jsx)("h3",{className:"mb-0 mb-0",children:e.name})}),Object(n.jsx)("div",{className:"subheading mb-3 text-secondary",children:e.degree}),Object(n.jsx)("ul",{className:"fa-ul mb-0",children:e.majors.map((function(e,t){return Object(n.jsxs)("li",{children:[Object(n.jsx)(p.a,{icon:g.f,className:"text-secondary me-2"}),e]},t)}))})]}),Object(n.jsx)("div",{className:"col-12 col-md-4 d-flex align-items-center justify-content-center",children:Object(n.jsx)("a",{href:e.website,target:"_blank",children:Object(n.jsx)("img",{src:e.icon,alt:"",width:"128"})})})]},t)}))]})}),Object(n.jsx)("hr",{className:"m-0"})]})},T=function(){var e=[{name:"Robotic Navigation by Vision",thumbnail:Object(v.a)("/img/projects/rnbv.jpg"),summary:["The main theme of this project is to make the automation work more efficient and\n\t\t\t\tqualitative with the help of computer vision.","Robots have wide range of applications including industrial\n\t\t\t\tmanufacturing, packaging and assembly, military fields, laboratories, different\n\t\t\t\tscientific and research applications, etc. The robot can be used track certain things from\n\t\t\t\tone location by recognizing it through a camera and then navigate according to the\n\t\t\t\tinstructions given by symbols for the fulfillment of any task.\n\t\t\t\tThe robot detects, tracks, navigates to the target, classifies the object and picks it.","This project is supposed to be helpful in easier management of the industrial works\n\t\t\t\tand different manufacturing plants."]},{name:"Virtual Space Exploration App",thumbnail:"img/projects/vse.png",link:"https://2017.spaceappschallenge.org/challenges/ideate-and-create/space-jockey/teams/virtual-space-exploration",summary:["Since now, there are lot of general people who are facing problems finding out data and\n\t\t\t\tinformation given by different space probes and earth observing satellites. Lot of researchers,\n\t\t\t\tstudents and enthusiasts try to experience the tour to the space, but real tour is too much\n\t\t\t\texpensive and hence not practical to everybody.","We tried to make a model of an application that helps\n\t\t\t\tus virtually ride abroad one of the earth observing satellites and collect data and information\n\t\t\t\tfrom there.","The project is a part of Nasa's International Space apps challenge, 2017."]},{name:"Optical Communication System",thumbnail:Object(v.a)("/img/projects/ocs.jpg"),summary:["This project addresses the model of an optical communication system between two devices\n\t\t\t\tseparated by some distance.","In the analysis it was found that the data transmission using laser light is\n\t\t\t\tsuperior in many aspects to the conventional communication system. Laser light\n\t\t\t\thas higher intensity, directivity, efficiency, better visibility, high noise resistance,\n\t\t\t\tand better energy management. It provides a much simpler communication system\n\t\t\t\treducing the complex wiring."]},{name:"Printed circuit board maker",thumbnail:Object(v.a)("/img/projects/cnc.jpg"),summary:["This project is in fact a small research on replacing the traditional chemical methods\n\t\t\t\tof etching with the modern and sophisticated technique of 3d printing.","Two methods \u2014 Carving and Laser penetration \u2014 were tested.\n\t\t\t\tBecause of an unavailability of high intensity lasers, we were not able to successfully\n\t\t\t\tperform PCB design with laser, but with drill bits, the output was quite good and efficient too."]}];return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsx)("h2",{className:"mb-3",children:"Projects"}),Object(n.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{className:"mb-3 mt-5",children:e.name}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-lg-6 image-col"+(t%2!==0?" order-lg-2":""),children:Object(n.jsx)("img",{src:e.thumbnail,alt:""})}),Object(n.jsx)("div",{className:"col-12 col-lg-6",children:e.summary.map((function(e,t){return Object(n.jsx)("p",{className:"text-justify",children:e},t)}))})]})})]},t)}))})]})}),Object(n.jsx)("hr",{className:"m-0"})]})},I=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={selected:null},e}return Object(m.a)(a,[{key:"render",value:function(){var e=[{name:"Introduction to Machine Learning",date:"May 14, 2021",provider:"Duke University",url:"https://www.coursera.org/account/accomplishments/certificate/9Q6ZKJ4JXTLE",thumb:Object(v.a)("/img/certs/intro_ml.jpg"),detail:["Introduction to Machine Learning","Basics of Model Learning","Image Analysis with Convolutional Neural Networks","Recurrent Neural Network for Natural Language Processing","Word Vectors","Long Short-Term Memory","The Transformer network for Natural Language Processing","Attention Mechanism","Introduction to Reinforcement Learning","Q learning and Deep Q learning"]},{name:"Blockchain Technology",date:"June 1, 2020",provider:"Udemy",url:"https://www.udemy.com/certificate/UC-f6edc0e9-c001-4773-a7ef-b504896ffe16/",thumb:Object(v.a)("/img/certs/blockchain.jpg"),detail:["Importance of Blockchain Technology","Theory behind Blockchain","Creating Blockchain","Theory behind Cryptocurrency","Creating Cryptocurrency","Theory Behind Smart Contracts","Creating Smart Contracts"]},{name:"Deep learning with Tensorflow 2.0",date:"April 18, 2020",provider:"Udemy",url:"https://www.udemy.com/certificate/UC-2d666353-556e-4b98-8b7b-1ed4e20d8033/",thumb:Object(v.a)("/img/certs/tflow.jpg"),detail:["Neural Networks","Machine Learning Algorithm","Deep Neural Networks","Back Propagation","Overfitting","Initialization","Gradient Decent"]},{name:"Machine Learning ",date:"January 23, 2020",provider:"Stanford University Online",url:"https://www.coursera.org/account/accomplishments/verify/G8UUMWLG4QP8",thumb:Object(v.a)("/img/certs/ml.jpg"),detail:["Linear Algebra","Linear Regression with One Variable","Linear Regression with Multiple Variables","Octave/ Matlab","Logistic Regression","Regularization","Artificial Neural Network","Machine Learning System Design","Support Vector Machines","Unsupervised Learning","Dimensionality Reduction","Anomaly Detection","Recommender Systems","Large Scale Machine Learning"]},{name:"Himalaya Exhibition (HEx)",date:"July 16, 2017",provider:"Himalaya College of Engineering",url:Object(v.a)("/img/certs/hex.jpg"),thumb:Object(v.a)("/img/certs/hex_thumb.jpg"),detail:["Robotic Navigation By Vision","Hardware Competition","Winner of the competition"]},{name:"Nasa's International Space apps Challenge",date:"April 30, 2017",provider:"NASA & Robotics Association of Nepal",url:Object(v.a)("/img/certs/isac.jpg"),thumb:Object(v.a)("/img/certs/isac_thumb.jpg"),detail:["Virtual Space Exploration","Virtual Tour Concept","First Runner Up","International Nomination"]},{name:"Basic Hardware Troubleshooting",date:"January 10, 2015",provider:"Himalaya College of Engineering",url:Object(v.a)("/img/certs/hardware.jpg"),thumb:Object(v.a)("/img/certs/hardware_thumb.jpg"),detail:["Circuit Design with CAD","PCB design and etching","Hardware troubleshooting","Soldering and drilling"]},{name:"Graphics Designing",date:"Jul 15, 2012",provider:"Soft-Tech Computer Institute (P) Ltd.",url:Object(v.a)("/img/certs/graphics.jpg"),thumb:Object(v.a)("/img/certs/graphics_thumb.jpg"),detail:["Adobe Photoshop","Adobe PageMaker","Coral Draw","Adobe(MacroMedia) Freehand","Creating Web images","Creating Vector images","Magazines design"]}];return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsx)("h2",{className:"mb-5",children:"Awards & Certifications"}),e.map((function(e,t){return Object(n.jsxs)("div",{className:"row mb-5",children:[Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsxs)("span",{className:"subheading",children:[e.provider,Object(n.jsxs)("span",{className:"resume-date mx-2",children:["( ",e.date," )"]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{className:"mb-3",children:e.name})]}),Object(n.jsx)("div",{className:"col-12 col-lg-6 image-col"+(t%2!==0?" order-lg-2":""),children:Object(n.jsx)("a",{className:"image-link",href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:e.thumb,alt:"",height:"100%",style:{objectFit:"cover"}})})}),Object(n.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(n.jsx)("h4",{className:"text-accent",children:"Contents"}),Object(n.jsx)("ul",{children:e.detail.map((function(e,t){return Object(n.jsxs)("li",{className:"fa-ul",children:[Object(n.jsx)(p.a,{icon:g.f,className:"text-secondary me-2"}),e]},t)}))}),Object(n.jsx)("a",{className:"subheading text-accent",href:e.url,target:"_blank",children:" see credential"})]},t)]},t)}))]})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"modal",id:"previewModal",tabIndex:-1,role:"dialog",children:Object(n.jsx)("div",{className:"modal-dialog",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h5",{className:"modal-title",children:"Modal title"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsx)("p",{children:"Modal body text goes here."})}),Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save changes"}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})]})]})})})]})}}]),a}(b.Component),L=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests",children:Object(n.jsxs)("div",{className:"w-100",children:[Object(n.jsx)("h2",{className:"mb-5",children:"Interests"}),Object(n.jsx)("p",{children:"I am interested in the projects related to Computer Vision, Human-Computer Interaction, Robotics and intelligent systems. I love sketching the spacecrafts, Space stations, and satellites in 3D CAD software, and animating them."}),Object(n.jsx)("p",{children:"During leisure, I enjoy most of the nights looking at the stars. I've made some cardboard telescopes just to see the beauty of the sky. I love photographing stars and constellations."}),Object(n.jsx)("p",{className:"mb-0",children:"I love watching Space documentaries and Sci-fi movies. I never miss an opportunity to watch anything related to Robots, Astronautics, and Autonomous Systems"})]})}),Object(n.jsx)("hr",{className:"m-0"})]})}}]),a}(b.Component),D=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k,{}),Object(n.jsx)(S,{}),Object(n.jsx)(C,{}),Object(n.jsx)(A,{}),Object(n.jsx)(T,{}),Object(n.jsx)(I,{}),Object(n.jsx)(L,{}),Object(n.jsx)(s.Footer,{}),Object(n.jsx)(s.ScrollToTop,{})]})},F=function(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{style:{height:"70vh"},children:[Object(n.jsx)("h2",{children:"Lecture Notes"}),Object(n.jsx)("strong",{children:"This page will be available soon"})]}),Object(n.jsx)(s.Footer,{})]})},M=function(){var e=function(e){e.preventDefault(),e.stopImmediatePropagation()};return Object(b.useEffect)((function(){return window.addEventListener("contextmenu",e),function(){window.removeEventListener("contextmenu",e)}}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(s.Navbar,{}),Object(n.jsx)(o.c,{children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{exact:!0,path:l.a.index,component:D}),Object(n.jsx)(o.a,{exact:!0,path:l.a.blog,component:u}),Object(n.jsx)(o.a,{exact:!0,path:l.a.contact,component:O}),Object(n.jsx)(o.a,{exact:!0,path:l.a.gallery,component:w}),Object(n.jsx)(o.a,{exact:!0,path:l.a.notes,component:F})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(n.jsx)(M,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.edd8a534.chunk.js.map