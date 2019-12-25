(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=(a(19),a(13)),l=a(6),s=(a(25),function(e){var t=e.value,a=e.onChange,n=e.onKeyPress;return r.a.createElement("div",{className:"todo-input-wrapper"},r.a.createElement("i",{className:"material-icons  plus"},"add"),r.a.createElement("input",{className:"todo-input",placeholder:"Click to add task",onChange:a,onKeyPress:n,value:t}))});s.defaultProps={onChange:function(){},onKeyPress:function(){},value:""};var u=s,m=(a(26),function(e){var t=e.text,a=e.isCompleted,n=e.removeTask,o=e.id,i=e.completeTask;return r.a.createElement("li",{className:"todo-item"},r.a.createElement("i",{onClick:function(){i(o)},className:"material-icons"},a?"done":"panorama_fish_eye"),r.a.createElement("span",{className:a?"completed text":"text"},t),r.a.createElement("i",{onClick:function(){return n(o)},className:"material-icons close-item"},"close"))});m.defaultProps={text:"",isCompleted:!1,removeTask:function(){},id:0};var d=m,f=(a(27),function(e){var t=e.tasksList,a=e.removeTask,n=e.completeTask;return r.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id,o=e.text,i=e.isCompleted;return r.a.createElement(d,{removeTask:a,id:t,key:t,text:o,isCompleted:i,completeTask:n})})))});f.defaultProps={tasksList:[],removeTask:function(){},completeTask:function(){}};var p=f,v=(a(28),[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}]),k=function(e){var t=e.amount,a=e.activeFilter,n=e.changeFilter;return r.a.createElement("div",{className:"footer"},r.a.createElement("span",{className:"amount"},"".concat(t," Tasks active")),r.a.createElement("div",{className:"btn-group"},v.map((function(e){var t=e.text,o=e.id;return r.a.createElement("button",{onClick:function(){n(o)},key:o,className:o===a?"filter-btn active":"filter-btn"},t)}))))};k.defaultProps={changeFilter:function(){},amount:0,activeFilter:"all"};var E=k,h=(a(29),Object(l.b)((function(e){return{tasks:e.tasks,filters:e.filters}}),{addTask:function(e,t,a){return{type:"ADD_TASK",id:e,text:t,isCompleted:a}},removeTask:function(e){return{type:"REMOVE_TASK",id:e}},completeTask:function(e){return{type:"COMPLETE_TASK",id:e}},changeFilter:function(e){return{type:"CHANGE_FILTER",activeFilter:e}}})((function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=e.tasks,s=l&&l.length>0;return r.a.createElement("div",{className:"todo-wrapper"},r.a.createElement(u,{onKeyPress:function(t){var a=t.key;o.length>0&&"Enter"===a&&((0,e.addTask)((new Date).getTime(),o,!1),i(""))},onChange:function(e){i(e.target.value)},value:o}),s&&r.a.createElement(p,{removeTask:e.removeTask,completeTask:e.completeTask,tasksList:function(e,t){switch(t){case"completed":return e.filter((function(e){return e.isCompleted}));case"active":return e.filter((function(e){return!e.isCompleted}));default:return e}}(l,e.filters)}),s&&r.a.createElement(E,{changeFilter:e.changeFilter,amount:function(e){return e.filter((function(e){return!e.isCompleted})).length}(e.tasks),activeFilter:e.filters}))}))),T=(a(30),function(e){var t=e.title;return r.a.createElement("h1",{className:"title"},t)});T.defaultProps={title:"Simple title"};a(31);var g=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(T,{title:"Todo App"}),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(2),b=a(7),y=a(5),N=Object(y.load)({namespace:"todo-list"});N&&N.tasks&&N.tasks.length||(N={tasks:[]});var O,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N.tasks,t=arguments.length>1?arguments[1]:void 0,a=t.id,n=t.text,r=t.isCompleted,o=t.type;switch(o){case"ADD_TASK":return[].concat(Object(b.a)(e),[{id:a,text:n,isCompleted:r}]);case"REMOVE_TASK":return Object(b.a)(e).filter((function(e){return e.id!==a}));case"COMPLETE_TASK":return Object(b.a)(e).map((function(e){return e.id===a&&(e.isCompleted=!e.isCompleted),e}));default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.activeFilter;switch(a){case"CHANGE_FILTER":return n;default:return e}},A=Object(C.c)({tasks:w,filters:x}),F=C.d,j=(O={},Object(C.e)(A,O,F(Object(C.a)(Object(y.save)({namespace:"todo-list"})))));i.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.558cd1d2.chunk.js.map