(this.webpackJsonpreact_live_coding_cars_table_task=this.webpackJsonpreact_live_coding_cars_table_task||[]).push([[0],{11:function(e,r,c){},12:function(e,r,c){"use strict";c.r(r);var t=c(4),n=c.n(t),d=c(5),i=c(3),o=c(1),a=[{id:1,name:"white"},{id:2,name:"black"},{id:3,name:"red"}],l=c(0),b=[{id:1,brand:"Audi",rentPrice:100,colorId:1},{id:2,brand:"Audi",rentPrice:100,colorId:2},{id:3,brand:"Ferarri",rentPrice:500,colorId:3},{id:4,brand:"Ford",rentPrice:80,colorId:1},{id:5,brand:"Peugot",rentPrice:50,colorId:1},{id:6,brand:"Ford",rentPrice:150,colorId:1},{id:7,brand:"Ford",rentPrice:140,colorId:2},{id:8,brand:"Lada",rentPrice:20,colorId:3},{id:9,brand:"Opel",rentPrice:100,colorId:1},{id:10,brand:"Opel",rentPrice:100,colorId:2},{id:11,brand:"Mitsubishi",rentPrice:300,colorId:1}].map((function(e){var r;return Object(i.a)(Object(i.a)({},e),{},{color:null===(r=a.find((function(r){return r.id===e.colorId})))||void 0===r?void 0:r.name})})),s=function(){var e=Object(o.useState)(""),r=Object(d.a)(e,2),c=r[0],t=r[1],n=b.filter((function(e){return r=e.brand,t=c,r.toLowerCase().includes(t.toLowerCase().trim());var r,t}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:c,onChange:function(e){t(e.currentTarget.value)},type:"search",placeholder:"Find by car brand"}),Object(l.jsx)("select",{children:Object(l.jsx)("option",{children:"Chose a color"})}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Id"}),Object(l.jsx)("th",{children:"Brand"}),Object(l.jsx)("th",{children:"Color"}),Object(l.jsx)("th",{children:"Rent price"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){var r=e.brand,c=e.id,t=e.rentPrice,n=e.color;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{style:{color:"".concat(n)},children:n}),Object(l.jsx)("td",{children:t})]},c)}))})]})]})};c(11);n.a.render(Object(l.jsx)(s,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf25ddef.chunk.js.map