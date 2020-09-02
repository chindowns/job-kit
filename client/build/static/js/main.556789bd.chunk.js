(this["webpackJsonpjob-application-manager"]=this["webpackJsonpjob-application-manager"]||[]).push([[0],{103:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),o=t.n(r),c=(t(78),t(11)),i=t(23),m=t(8),s=t(111),u=t(110),p=t(70),d=t(108),b=t(58),f=t.n(b),E=(t(79),t(7)),j=t(109),g=function(e){var a=Object(n.useState)({}),t=Object(c.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)(!1),m=Object(c.a)(i,2),s=m[0],u=m[1],p=function(){return u(!1)};return Object(n.useEffect)((function(){e.showModal&&u(!0)}),[e.showModal]),l.a.createElement(j.a,{show:s,onHide:p},l.a.createElement(j.a.Header,{closeButton:!0},l.a.createElement(j.a.Title,null,"Comment or Request")),l.a.createElement(j.a.Body,null,l.a.createElement("p",null,"Let me know what you think about this app.  If you would like a response, leave your email, otherwise empty is fine."),l.a.createElement("input",{id:"email",type:"email",name:"email",placeholder:"email",onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{email:e.target.value}))}}),l.a.createElement("textarea",{id:"feedbackBox",type:"textarea",name:"feedback",placeholder:"feedback",onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{feedback:e.target.value}))}})),l.a.createElement(j.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:function(){var e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("site","jam"),a.append("email",r.email),a.append("feedback",r.feedback);var t={method:"POST",headers:e,mode:"no-cors",body:a,redirect:"follow"};console.log(a),console.log(t),fetch("https://feedback-and-comments.herokuapp.com/api/feedback",t).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),p()}},"Submit")))},h=t(14),v=function(){var e=new h.a("job-manager","applications"),a=Object(m.f)();return Object(h.d)(e).then((function(e){e.length>0&&a.replace("/view")})),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),l.a.createElement("div",{id:"jumbo",className:"radius"},l.a.createElement("h1",{className:"text-shadow slate-blue"},"Job Application Manager"),l.a.createElement("p",null,"Job Application Manager Light is a simple and fast tool that helps you keep track of all your Job Applications and keep notes during the application / interview process."),l.a.createElement("p",null,'CLICK on "Add Application" to get started'),l.a.createElement("p",null,"This app uses your browsers internal DB, indexedDB to store application info.  ",l.a.createElement("br",null),"The full Job Application Manager supports access from multible devices and browsers. ",l.a.createElement("br",null),"Use ",l.a.createElement("a",{href:"https://job-kit.herokuapp.com",target:"_blank",rel:"noopener noreferrer"},"https://job-kit.herokuapp.com")))},y=t(28),w=t(64);t(106),t(84);y.initializeApp(w);new y.auth.GoogleAuthProvider,y.auth(),y.analytics();var O=y,N=t(47),T=t.n(N),x=function(){var e,a=Object(n.useState)({}),t=Object(c.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)(),s=Object(c.a)(i,2),u=s[0],p=s[1],d=Object(m.f)();Object(n.useEffect)((function(){!u&&e&&p(e),console.log(u)}),[e]);return O.auth().isSignInWithEmailLink(window.location.href)&&(e=window.localStorage.getItem("emailForSignIn"),O.auth().signInWithEmailLink(e,window.location.href).then((function(e){console.log(e),e.additionalUserInfo.isNewUser&&e.user.email===u?(console.log("Set new user ".concat(e.user.email)),T.a.post("/api/user/",{email:u}).then((function(e){console.log("Signed In New User: ".concat(e.data.id," ").concat(e.data.email)),o(e.data),window.sessionStorage.setItem("userID",e.data.id),window.sessionStorage.setItem("userEmail",e.data.email),window.localStorage.removeItem("emailForSignIn"),d.replace("/add")})).catch((function(e){return console.log(e)}))):e.user.email===u&&(console.log("Get user ".concat(e.user.email)),T()("/api/user/".concat(u)).then((function(e){console.log(e.data),console.log("Signed In User: ".concat(e.data.id," ").concat(e.data.email)),o(e.data),window.sessionStorage.setItem("userID",e.data.id),window.sessionStorage.setItem("userEmail",e.data.email),window.localStorage.removeItem("emailForSignIn"),d.replace("/view")})).catch((function(e){return console.log(e)})))})).catch((function(e){console.log(e),window.localStorage.removeItem("emailForSignIn")})),console.log(r)),l.a.createElement("div",{className:"form"},l.a.createElement("form",{className:"form-group form-add",onSubmit:function(e){e.preventDefault(),console.log(u);u===window.sessionStorage.getItem("user.email")&&d.replace("/view"),O.auth().sendSignInLinkToEmail(u,{url:"http://localhost:3400/user",handleCodeInApp:!0,iOS:{},android:{}}).then((function(){window.localStorage.setItem("emailForSignIn",u),console.log("Sending signin link to ".concat(u))})).catch((function(e){return console.log(e)}))}},l.a.createElement("label",{className:"form-label"},"Enter Email",l.a.createElement("br",null),l.a.createElement("input",{id:"emailLink",type:"text",name:"emailLink",onChange:function(e){return p(e.target.value)},placeholder:"Enter email"})),l.a.createElement("br",null),l.a.createElement("button",{className:"btn-small",type:"submit"},"Send Link")))},k=function(){return l.a.createElement(x,null)},S=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),i=Object(c.a)(o,2),m=(i[0],i[1],(new Date).toISOString().slice(0,10)),s=new h.a("job-manager","applications");return l.a.createElement("div",{className:"form"},l.a.createElement("form",{className:"form-group form-add",onSubmit:function(e){e.preventDefault(),console.log("Submit Form");var a={companyName:t.companyName,jobTitle:t.jobTitle,jobDescription:t.jobDescription,source:t.source,resume:t.resume,dateApplied:m,stage:"1 - Applied"};Object(h.e)(t.companyName,a,s).then((function(){return window.location.reload(!1)})).catch((function(e){return console.log("It failed!",e)}))}},l.a.createElement("label",{className:"form-label"},"Company Name",l.a.createElement("br",null),l.a.createElement("input",{id:"inputCompanyName",type:"text",name:"companyName",onChange:function(e){return r(Object(E.a)(Object(E.a)({},t),{},{companyName:e.target.value}))},placeholder:"Company Name"})),l.a.createElement("label",{className:"form-label"},"Job Title",l.a.createElement("br",null),l.a.createElement("input",{id:"inputJobTitle",type:"text",name:"jobTitle",onChange:function(e){return r(Object(E.a)(Object(E.a)({},t),{},{jobTitle:e.target.value}))},placeholder:"Job Title"})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Link to Job Posting",l.a.createElement("br",null),l.a.createElement("input",{id:"inpurtSource",type:"url",name:"source",onChange:function(e){r(Object(E.a)(Object(E.a)({},t),{},{source:e.target.value})),fetch(t.source).then((function(e){return console.log(e)}))},placeholder:"Link to Source"})),l.a.createElement("label",{className:"form-label"},"Link to Resume Used",l.a.createElement("br",null),l.a.createElement("input",{id:"inputResume",type:"url",name:"resume",onChange:function(e){return r(Object(E.a)(Object(E.a)({},t),{},{resume:e.target.value}))},placeholder:"Link to Resume"})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Job Description",l.a.createElement("br",null),l.a.createElement("textarea",{id:"inputJobDescription",type:"textarea",name:"jobDescription-Overview",wrap:"soft",onChange:function(e){return r(Object(E.a)(Object(E.a)({},t),{},{jobDescription:e.target.value}))},placeholder:"Job Description"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit Application")))},J=t(72),W=t(66),X=t(112),U=t(67),K=function(e){var a=e.application;return l.a.createElement(X.a,{bg:"dark",key:e.idx,text:"white",style:{width:"300px",margin:" 15px 0px 0px 15px"},className:""},l.a.createElement(X.a.Header,{className:"d-flex justify-content-between align-center"},a.companyName,l.a.createElement(i.b,{to:{pathname:"/edit",data:{application:a}}},l.a.createElement(d.a,{variant:"outline-secondary",className:"fa fa-pencil-square-o",style:{padding:"1px 3px 1px 7px"}}))),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,a.jobTitle),l.a.createElement(X.a.Text,{style:{fontWeight:"300"}},a.jobDescription.split(" ").slice(0,25).join(" ")),l.a.createElement(W.a,{md:{span:4,offset:4}},l.a.createElement(U.a,null,l.a.createElement("a",{href:a.source,target:"_blank",rel:"noopener noreferrer",className:"underline slate-blue"},"Job Posting")),l.a.createElement(U.a,null,l.a.createElement("a",{href:a.resume,target:"_blank",rel:"noopener noreferrer",className:"underline slate-blue"},"Resume Link")))),l.a.createElement(X.a.Footer,{className:"d-flex justify-content-around"},l.a.createElement("div",null,a.dateApplied),l.a.createElement("div",null,a.stage)))},V=function(){var e=new h.a("job-manager","applications"),a=Object(n.useState)([]),t=Object(c.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){Object(h.d)(e).then((function(a){a.forEach((function(a){Object(h.c)(a,e).then((function(e){return o((function(a){return[].concat(Object(J.a)(a),[e])}))}))}))}))}),[]),l.a.createElement(W.a,{style:{margin:"15px 15px"}},r.sort(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return function(t,n){if(!t.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var l="string"===typeof t[e]?t[e].toUpperCase():t[e],r="string"===typeof n[e]?n[e].toUpperCase():n[e],o=0;return l>r?o=1:l<r&&(o=-1),"desc"===a?-1*o:o}}("stage")).map((function(e,a){return l.a.createElement(K,{application:e,key:a})})))},P=(t(103),function(e){var a=e.note;return console.log(e),l.a.createElement("div",null,l.a.createElement(W.a,{className:"note-head d-flex justify-content-between align-center"},l.a.createElement(U.a,{className:"text-left"},a.contact),l.a.createElement(U.a,{className:"text-right"},a.date)),l.a.createElement(W.a,{className:"note-text"},a.note))}),C=function(e){var a=Object(n.useState)({}),t=Object(c.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)({}),s=Object(c.a)(i,2),u=(s[0],s[1]),p=Object(n.useState)({}),d=Object(c.a)(p,2),b=d[0],f=d[1],j=Object(n.useState)(!1),g=Object(c.a)(j,2),v=g[0],y=g[1],w=(new Date).toISOString().slice(0,10),O=new h.a("job-manager","applications"),N=Object(m.f)(),T={},x=[];T=e.location.data.application?e.location.data.application:{},x=e.location.data.application.notes?e.location.data.application.notes:[],Object(n.useEffect)((function(){o(T),u(T.jobDescription)}),[T]);return l.a.createElement("div",{className:"form"},l.a.createElement("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),b.hasOwnProperty("note")&&x.push(b);var a={companyName:r.companyName,jobTitle:r.jobTitle,jobDescription:r.jobDescription,source:r.source,resume:r.resume,dateApplied:r.dateApplied,stage:r.stage,notes:x};Object(h.b)(r.companyName,O).then((function(){Object(h.e)(r.companyName,a,O).then((function(){return N.replace("/view")})).catch((function(e){return console.log("It failed!",e)}))})).catch((function(e){return console.log("Failed to delete",e)}))}},l.a.createElement("label",{className:"form-label"},"Company Name",l.a.createElement("br",null),l.a.createElement("input",{id:"editCompanyName",readOnly:"readOnly",type:"text",name:"companyName",value:T.companyName})),l.a.createElement("label",{className:"form-label"},"Job Title",l.a.createElement("br",null),l.a.createElement("input",{id:"editJobTitle",type:"text",name:"jobTitle",defaultValue:T.jobTitle,onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{jobTitle:e.target.value?e.target.value:T.jobTitle}))}})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Link to Job Posting",l.a.createElement("br",null),l.a.createElement("input",{id:"edittSource",type:"url",name:"source",defaultValue:T.source,onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{source:e.target.value?e.target.value:T.source}))}})),l.a.createElement("label",{className:"form-label"},"Link to Resume Used",l.a.createElement("br",null),l.a.createElement("input",{id:"editResume",type:"url",name:"resume",defaultValue:T.resume,onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{resume:e.target.value?e.target.value:T.resume}))}})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Stage",l.a.createElement("br",null),l.a.createElement("input",{id:"editStage",type:"select",name:"stage",list:"stages",placeholder:T.stage,onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{stage:e.target.value?e.target.value:T.stage}))}}),l.a.createElement("datalist",{id:"stages"},l.a.createElement("option",{value:"0 - Declined"}),l.a.createElement("option",{value:"1 - Applied"}),l.a.createElement("option",{value:"2 - Recruiter"}),l.a.createElement("option",{value:"3 - Interview"}),l.a.createElement("option",{value:"4 - Hired"}))),l.a.createElement("br",null),v?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"form-label"},"Job Description",l.a.createElement("br",null),l.a.createElement("textarea",{id:"editJobDescription",type:"textarea",name:"jobDescription",wrap:"soft",defaultValue:T.jobDescription,onChange:function(e){return o(Object(E.a)(Object(E.a)({},r),{},{jobDescription:e.target.value?e.target.value:T.jobDescription}))}}))):l.a.createElement("label",{className:"form-label"},"Job Description",l.a.createElement("br",null),l.a.createElement("div",{className:"radius text-left"},l.a.createElement("div",{className:"fa fa-pencil-square-o",style:{position:"relative",float:"right",padding:"1px 3px 1px 7px"},onClick:function(e){return y(!0)}}),T.jobDescription,l.a.createElement("br",null))),l.a.createElement("br",null),x?l.a.createElement("label",{className:"form-label"},"Notes",l.a.createElement("div",{className:"radius"},x.map((function(e,a){return l.a.createElement(P,{note:e,key:a})})))):null,l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Add Contact",l.a.createElement("br",null),l.a.createElement("input",{id:"addContact",type:"text",name:"contact",onChange:function(e){return f(Object(E.a)(Object(E.a)({},b),{},{date:w,contact:e.target.value}))}})),l.a.createElement("br",null),l.a.createElement("label",{className:"form-label"},"Add Note",l.a.createElement("br",null),l.a.createElement("textarea",{id:"addNote",type:"textarea",name:"note",onChange:function(e){return f(Object(E.a)(Object(E.a)({},b),{},{note:e.target.value}))}})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit Application")))};var D=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=(new Date).getFullYear();return console.log(t),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:""},l.a.createElement("div",{id:"brand"},l.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",{className:"App-header"},"JAM")),l.a.createElement(s.a,{variant:"",className:"nav"},l.a.createElement(s.a.Link,{id:"view",className:"nav",href:"/view"},"View App"),l.a.createElement(s.a.Link,{className:"nav",href:"/add"},"Add App"),l.a.createElement(s.a.Link,{href:"/user"},"Login")),l.a.createElement(u.a,{inline:!0,id:"search-form"},l.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(d.a,{variant:"outline-info"},"Search"))),l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:v}),l.a.createElement(m.a,{exact:!0,path:"/home",component:v}),l.a.createElement(m.a,{exact:!0,path:"/user",component:k}),l.a.createElement(m.a,{exact:!0,path:"/view",component:V}),l.a.createElement(m.a,{exact:!0,path:"/add",component:S}),l.a.createElement(m.a,{exact:!0,path:"/edit",component:C}))),l.a.createElement(g,{showModal:t}),l.a.createElement("footer",{className:"footer"},"\xa9 Copyright ",o,", All Rights Reserved",l.a.createElement(d.a,{variant:"white",id:"feedback",onClick:function(){return r(!0)}},"Leave Comment")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a){e.exports="data:image/png;base64,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"},64:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyChTyTbYySItXrH4DOjkmLAAkG7s_ChP1s","authDomain":"job-manager-dc3f0.firebaseapp.com","databaseURL":"https://job-manager-dc3f0.firebaseio.com","projectId":"job-manager-dc3f0","storageBucket":"job-manager-dc3f0.appspot.com","messagingSenderId":"1039852111779","appId":"1:1039852111779:web:03d1411527f2f9799f7c16","measurementId":"G-2ZSY59G81R"}')},73:function(e,a,t){e.exports=t(105)},78:function(e,a,t){},79:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.556789bd.chunk.js.map