(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{245:function(e,t,s){},246:function(e,t,s){},251:function(e,t,s){},252:function(e,t,s){},253:function(e,t,s){},272:function(e,t,s){},329:function(e,t,s){},330:function(e,t,s){},461:function(e,t,s){},462:function(e,t,s){},463:function(e,t,s){},464:function(e,t,s){},465:function(e,t,s){"use strict";s.r(t);var c=s(3),a=s(0),n=s.n(a),i=s(31),o=s.n(i),r=(s(245),s(246),s(30)),l=s(21),d=function(e){var t=e.component;return sessionStorage.getItem("token")?Object(c.jsx)(t,{}):Object(c.jsx)(l.a,{to:{pathname:"/"}})},h=s(152),j=s(24),u=(s(251),s(479)),m=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),s=t[0],n=t[1];Object(a.useEffect)((function(){n(!0)}),[]);var i={transition:"all ".concat(1e3,"ms ease-in"),opacity:0},o={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},l=new Audio("./audio/The Clash - Should I Stay or Should I Go (Official Audio).mp3"),d=function(){l.play()};return Object(c.jsxs)("div",{className:"landing-page flexdiv",children:[Object(c.jsx)("img",{src:"./images/robot.png",alt:"robot logo",className:"landing-logo"}),Object(c.jsx)(u.a,{in:s,timeout:1e3,children:function(e){return Object(c.jsxs)("div",{className:"landing-text",style:Object(h.a)(Object(h.a)({},i),o[e]),children:[Object(c.jsx)("h1",{children:"SHOULD I GO?"}),Object(c.jsx)("p",{children:"Keeping you safe and social"}),Object(c.jsx)(r.b,{to:"start",children:Object(c.jsx)("button",{className:"landing-launch",children:"LAUNCH APPLICATION"})}),Object(c.jsx)("button",{className:"landing-launch2",onClick:d,children:"PLAY SONG"})]})}})]})},b=s(209),O=s.n(b),p=(s(252),function(){return sessionStorage.removeItem("token"),Object(c.jsxs)("div",{className:"success",children:[Object(c.jsx)(O.a,{width:window.innerWidth,height:window.innerHeight}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"You're good!"}),Object(c.jsxs)("p",{children:["If you are going out, just remember these ",Object(c.jsx)(r.b,{to:"/guidelines",children:"guidelines"}),"!"]})]})]})}),x=(s(253),function(){return Object(c.jsx)("div",{className:"error",children:Object(c.jsx)("h1",{children:"404 Error"})})}),g=s(101),f=s.n(g),v=s(210),y=s(212),N=s.n(y),k=(s(271),s(272),function(){var e=Object(l.g)().push,t=Object(a.useState)(new Date),s=Object(j.a)(t,2),n=s[0],i=s[1],o=Object(a.useState)(""),d=Object(j.a)(o,2),h=d[0],u=d[1],m=function(){document.getElementsByTagName("ul")[0].style.display="none"};return Object(c.jsxs)("div",{className:"flexdiv",style:{gridTemplateColumns:"1fr 1fr",height:"100vh"},children:[Object(c.jsxs)("div",{className:"plans",children:[Object(c.jsx)("h1",{children:"What are your plans this week?"}),Object(c.jsxs)("div",{className:"where",children:[Object(c.jsx)("p",{children:"Where?"}),Object(c.jsx)(v.a,{className:"location",placeholder:"Search",onBlur:m,onFocus:function(){document.getElementsByTagName("ul")[0].style.display="block"},onSuggestSelect:function(e){if(m(),void 0!==e){var t=e.description.split(", ");3===t.length?u(t[t.length-2].toLowerCase()):2===t.length&&u("ca")}else{document.getElementsByTagName("ul")[0].style.display="block",u("")}},location:new google.maps.LatLng(53.558572,9.9278215),radius:"20"})]}),Object(c.jsxs)("div",{className:"when",children:[Object(c.jsx)("p",{children:"When?"}),Object(c.jsx)(N.a,{className:"date",selected:n,onChange:function(e){return i(e)}})]}),Object(c.jsx)(r.b,{to:"/success",children:Object(c.jsx)("p",{onClick:function(){sessionStorage.setItem("token","auth")},children:"I don't have any plans."})}),Object(c.jsx)("button",{onClick:function(){""===h?alert("Location not selected"):(sessionStorage.setItem("token","auth"),f.a.get("https://covid-should-i-go.herokuapp.com/start/".concat(h)).then((function(t){t.data.shouldGoOut?e({pathname:"/symptoms"}):e({pathname:"/no",deaths:t.data.deaths,deathIncrease:t.data.deathIncrease,critical:t.data.critical})})))},className:"button",children:"Next"})]}),Object(c.jsx)("img",{src:"./images/schedule.png",alt:"",width:"400px"})]})}),C=(s(329),function(){return Object(c.jsxs)("div",{className:"guidelines flexdiv",children:[Object(c.jsx)("h1",{className:"first-class",children:"CDC GUIDELINES"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:"./images/mask.png",alt:"mask"}),Object(c.jsx)("h2",{className:"second-class",children:"Wear a Mask!"}),Object(c.jsx)("img",{src:"./images/close.png",alt:"X"}),Object(c.jsx)("h2",{className:"second-class",children:"No Large Gatherings!"}),Object(c.jsx)("img",{src:"./images/wash.png",alt:"wash hands"}),Object(c.jsx)("h2",{className:"second-class",children:"Wash Your Hands!"}),Object(c.jsx)("img",{src:"./images/ruler.png",alt:"ruler"}),Object(c.jsx)("h2",{className:"second-class",children:"Stay 6 Feet Apart!"})]})]})}),S=s(478),I=s(476),w=s(225),T=s(226),L=s(115),A=s(233),W=(s(330),function(){sessionStorage.removeItem("token");var e=Object(l.h)(),t=e.deaths,s=e.deathIncrease,a=e.critical;return console.log(t,s,a),Object(c.jsxs)("div",{className:"nogo-page",children:[Object(c.jsx)("h1",{className:"header2",children:"Uh-oh."}),Object(c.jsx)("p",{className:"recomend",children:"We recommend that you stay inside."}),Object(c.jsxs)("p",{className:"deaths",children:[t," people have died in total and ",s," of those deaths were from the past day alone."]}),Object(c.jsxs)("p",{className:"critical",children:["There are also ",a," people currently in critical condition."]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),function(){var e=[{name:"Number of Deaths (Total)",people:t+""},{name:"Number of Deaths (Today)",people:s+""},{name:"Number in Critical Condition",people:a+""}];return Object(c.jsx)(S.a,{width:1200,height:450,children:Object(c.jsxs)(I.a,{width:1200,height:450,data:e,children:[Object(c.jsx)(w.a,{dataKey:"name",domain:[0,5e4]}),Object(c.jsx)(T.a,{}),Object(c.jsx)(L.a,{}),Object(c.jsx)(A.a,{dataKey:"people",fill:"#f26419"})]})})}()]})}),B=s(232),D=s(227),E=s(109),F=s(150),H=s(228),G=s(234);var M=function(e){return Object(c.jsxs)("div",{className:"symptom",children:[Object(c.jsx)("input",{id:e.item.id,type:"checkbox"}),Object(c.jsx)("p",{children:e.item.value})]})},P=[{id:1,value:"Chills",isChecked:!1},{id:2,value:"Cough",isChecked:!1},{id:3,value:"Fever",isChecked:!1},{id:4,value:"Difficulty Breathing",isChecked:!1},{id:5,value:"Congestion",isChecked:!1},{id:6,value:"Fatigue",isChecked:!1},{id:7,value:"Muscle Aches",isChecked:!1},{id:8,value:"Headaches",isChecked:!1},{id:9,value:"Vomiting/Nausea",isChecked:!1},{id:10,value:"Loss of Taste/Smell",isChecked:!1},{id:11,value:"Sore Throat",isChecked:!1},{id:12,value:"Diarrhea",isChecked:!1}],U=(s(461),function(e){Object(H.a)(s,e);var t=Object(G.a)(s);function s(){var e;return Object(D.a)(this,s),(e=t.call(this)).submitSymptoms=e.submitSymptoms.bind(Object(E.a)(e)),e}return Object(F.a)(s,[{key:"componentDidMount",value:function(){sessionStorage.removeItem("token")}}]),Object(F.a)(s,[{key:"submitSymptoms",value:function(){for(var e=this,t=[],s=document.getElementsByClassName("symptom"),c=0;c<s.length;c+=1)s[c].firstElementChild.checked&&(t=[].concat(Object(B.a)(t),[s[c].children[1].innerHTML]));f.a.post("https://covid-should-i-go.herokuapp.com/symptoms",{symptoms:t}).then((function(t){console.log(t),sessionStorage.setItem("token","auth"),t.data.testForCovid?e.props.history.push({pathname:"/doctor"}):e.props.history.push({pathname:"/success",deaths:t.data.deaths,deathIncrease:t.data.deathIncrease,critical:t.data.critical})}))}},{key:"render",value:function(){var e=this,t=P.map((function(t){return Object(c.jsx)(M,{item:t,handleChange:e.handleChange},t.id)}));return Object(c.jsx)("div",{className:"symptoms-page",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"almost-title",children:"Almost There"}),Object(c.jsx)("p",{className:"first-header",children:"It is safe for you to social distance."}),Object(c.jsx)("p",{className:"second-header",children:"But first..."}),Object(c.jsx)("h1",{className:"third-header",children:"What are your symptoms?"}),Object(c.jsx)("ul",{className:"checkbox-grid",children:t}),Object(c.jsx)("button",{className:"button",onClick:this.submitSymptoms,children:"Next"})]})})}}]),s}(n.a.Component)),K=Object(l.i)(U);s(462);var Y=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"grid",children:[Object(c.jsx)("br",{}),Object(c.jsx)(r.b,{to:"/",children:Object(c.jsx)("img",{className:"logo",src:"./images/logo.png",alt:"",style:{width:"3em",height:"3em"}})}),Object(c.jsx)("em",{className:"slogan",children:"Wash Hands, Wear Masks, Stay Safe"})]})})},J=(s(463),n.a.useState),X=["Irvine","Long Beach","Fremont","Cupertino"],V={heart:Array("\u2665")};var q=function(){var e=J(0),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(c.jsx)("div",{className:"footerbar",onClick:function(){a((function(e){return e===X.length-1?0:e+1}))},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("footer",{className:"footerText",children:[" Made with ",V.heart," in ",X[s],", CA"]}),Object(c.jsx)("footer",{className:"copyright",children:"\xa9 Sahil, Xuan, Harshini, Sanjana 2021"})]})})},z=(s(464),function(){return sessionStorage.removeItem("token"),Object(c.jsx)("div",{className:"success",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Uh-Oh"}),Object(c.jsx)("p",{children:"We recommend you call a doctor. :("}),Object(c.jsx)("p",{children:"And make sure to mask up!"})]})})});var Q=function(){return Object(c.jsx)(r.a,{basename:"/Should-I-Go",children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Y,{}),Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/",exact:!0,component:m}),Object(c.jsx)(l.b,{path:"/start",component:k}),Object(c.jsx)(l.b,{path:"/guidelines",component:C}),Object(c.jsx)(l.b,{path:"/doctor",component:z}),Object(c.jsx)(d,{path:"/success",component:p}),Object(c.jsx)(d,{path:"/no",component:W}),Object(c.jsx)(d,{path:"/symptoms",component:K}),Object(c.jsx)(l.b,{component:x})]}),Object(c.jsx)(q,{})]})})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,480)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),R()}},[[465,1,2]]]);
//# sourceMappingURL=main.61fc92a5.chunk.js.map