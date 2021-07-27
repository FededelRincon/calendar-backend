(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{122:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=n(9),s=n(25),i=n(63),l=n(5),u="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Logout event",m="[event] Add new",O="[event] Clear active event",f="[event] Event updated",p="[event] Event deleted",v="[event] Events loaded",h="[auth] Finish checking login state",x="[auth] Login",g="[auth] Logout",y={modalOpen:!1},N=n(52),w={events:[],activeEvent:null},k={checking:!0},E=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(l.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(E,S(Object(s.a)(i.a))),D=n(33),T=n(10),P=n(15),I=n(24),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(l.a)(Object(l.a)({},c),{},Object(I.a)({},t.name,t.value)))};return[c,s,o]},_=n(12),L=n.n(_),R=n(21),G="https://mern-calendar-fdr.herokuapp.com/api",F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},H=n(18),J=n.n(H),M=n(17),U=n.n(M),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:U()(e.end).toDate(),start:U()(e.start).toDate()})}))},X=function(e){return{type:m,payload:e}},q=function(){return{type:O}},z=function(e){return{type:f,payload:e}},K=function(){return{type:p}},Q=function(e){return{type:v,payload:e}},W=function(){return{type:h}},Y=function(e){return{type:x,payload:e}},Z=function(){return function(e){localStorage.clear(),e({type:b}),e($())}},$=function(){return{type:g}},ee=(n(87),n(2)),te=function(){var e=Object(o.b)(),t=A({lEmail:"",lPassword:""}),n=Object(P.a)(t,2),a=n[0],c=n[1],r=A({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),s=Object(P.a)(r,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,O=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(R.a)(L.a.mark((function e(t){var c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:r.uid,name:r.name}))):J.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:c})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:c})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return J.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,c;console.log("?"),e((n=b,a=m,c=d,function(){var e=Object(R.a)(L.a.mark((function e(t){var r,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:o.uid,name:o.name}))):J.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(51),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Z())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},re=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("strong",{children:[" ",n," "]}),Object(ee.jsxs)("span",{children:["- ",a.name," "]})]})},oe=n(46),se=n.n(oe),ie=n(47),le=n.n(ie),ue=function(){return{type:u}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=U()().minutes(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},Oe=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),c=Object(a.useState)(de.toDate()),r=Object(P.a)(c,2),s=r[0],i=r[1],u=Object(a.useState)(be.toDate()),d=Object(P.a)(u,2),b=d[0],m=d[1],O=Object(a.useState)(!0),f=Object(P.a)(O,2),p=f[0],v=f[1],h=Object(a.useState)(me),x=Object(P.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(t||me)}),[t,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(I.a)({},t.name,t.value)))},C=function(){n({type:j}),n(q()),y(me)};return Object(ee.jsxs)(se.a,{isOpen:e,onRequestClose:C,style:je,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,c=U()(k),r=U()(E);return c.isSameOrAfter(r)?J.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):w.trim().length<2?v(!1):(n(t?(a=g,function(){var e=Object(R.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(z(a)):J.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n,a){var c,r,o,s,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(X(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(le.a,{onChange:function(e){i(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(le.a,{onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},fe=(n(117),n(118),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})}),pe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t,n){var a,c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(K()):J.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar evento "})]})};U.a.locale("es");var ve=Object(ne.b)(U.a),he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,r=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(P.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=B(a.eventos),t(Q(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(q())},selectable:!0,view:l,components:{event:re}}),Object(ee.jsx)(fe,{}),c&&Object(ee.jsx)(pe,{}),Object(ee.jsx)(Oe,{})]})},xe=n(36),ge=["isAuthenticated","component"],ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,ge);return Object(ee.jsx)(T.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(l.a)({},e))}}))},Ne=["isAuthenticated","component"],we=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,Ne);return Object(ee.jsx)(T.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(l.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},ke=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:a.uid,name:a.name}))):t(W());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ye,{exact:!0,path:"/login",component:te,isAuthenticated:!!c}),Object(ee.jsx)(we,{exact:!0,path:"/",component:he,isAuthenticated:!!c}),Object(ee.jsx)(T.a,{to:"/"})]})})})},Ee=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(ke,{})})};n(122);r.a.render(Object(ee.jsx)(Ee,{}),document.getElementById("root"))},87:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.4d76d7b6.chunk.js.map