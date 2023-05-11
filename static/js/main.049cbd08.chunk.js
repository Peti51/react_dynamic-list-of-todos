(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),r=c(2),i=c(3),l=c.n(i),o=c(1),d=(c(12),c(13),c(14),c(0)),j=function(e){var t=e.todos,c=void 0===t?[]:t,s=e.setButton,a=e.setTodo,n=e.listButton,i=e.setListButton,l=Object(o.useState)(""),j=Object(r.a)(l,2),u=j[0],b=j[1];return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(d.jsx)("td",{className:"is-vcentered",children:Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}):Object(d.jsx)("td",{className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e,t){s(!0),a(e),i(!0),b(t)}(e,e.title)},children:Object(d.jsx)("span",{className:"icon",children:n&&u===e.title?Object(d.jsx)("i",{className:"far fa-signal"}):Object(d.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},u=function(e){var t=e.setCurrentCase,c=e.cases,s=e.setCurrentQuery,a=e.query;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{value:c,"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},b=(c(16),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m,O=function(){return h("/todos")},x=function(e){return h("/users/".concat(e))},f=function(e){var t=e.setButton,c=e.title,s=e.setListButton,a=e.completed,i=e.userId,j=e.id,u=Object(o.useState)({id:0,name:"",email:"",phone:""}),h=Object(r.a)(u,2),m=h[0],O=h[1],f=Object(o.useState)(!0),p=Object(r.a)(f,2),v=p[0],N=p[1];return Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(i);case 2:t=e.sent,O(t),N(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),v?Object(d.jsx)(b,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",j]}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){t(!1),s(!1)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:a?"has-text-success block":"has-text-danger block","data-cy":"modal-title",children:c}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[a?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:m.email,children:m.name})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(m||(m={}));var p=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),i=Object(r.a)(a,2),h=i[0],x=i[1],p=Object(o.useState)(""),v=Object(r.a)(p,2),N=v[0],y=v[1],g=Object(o.useState)(""),C=Object(r.a)(g,2),w=C[0],k=C[1],L=Object(o.useState)(!1),B=Object(r.a)(L,2),S=B[0],A=B[1],T=Object(o.useState)(c[0]),E=Object(r.a)(T,2),I=E[0],_=E[1],q=Object(o.useState)(!1),J=Object(r.a)(q,2),P=J[0],Q=J[1];Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,s(t),x(!1),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error occurred:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=Object(o.useMemo)((function(){return c.filter((function(e){switch(N){case m.All:return e.title.toLowerCase().includes(w.toLowerCase().trim());case m.Active:return 0===w.length?!1===e.completed:!1===e.completed&&e.title.toLowerCase().includes(w.toLowerCase().trim());case m.Completed:return 0===w.length?!0===e.completed:!0===e.completed&&e.title.toLowerCase().includes(w.toLowerCase().trim());default:return e.title.toLowerCase().includes(w.toLowerCase().trim())}}))}),[c,w,N]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(u,{setCurrentCase:function(e){y(e)},setCurrentQuery:function(e){k(e)},cases:N,query:w})}),Object(d.jsx)("div",{className:"block",children:h?Object(d.jsx)(b,{}):Object(d.jsx)(j,{todos:D,setButton:A,setTodo:_,listButton:P,setListButton:Q})})]})})}),S&&Object(d.jsx)(f,{setButton:A,title:I.title,completed:I.completed,userId:I.userId,id:I.id,setListButton:Q})]})};a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.049cbd08.chunk.js.map