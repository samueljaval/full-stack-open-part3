(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.filter,t=e.func;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.name,t=e.number,a=e.adding,u=e.changingName,c=e.changingNumber;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.func;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete")))})))},f=t(3),d=t.n(f),s="/api/persons",b=function(){return d.a.get(s).then((function(e){return e.data}))},h=function(e){return d.a.post(s,e).then((function(e){return e.data}))},g=function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){var n=e.message,t={color:e.color,fontStyle:"italic",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:r.a.createElement("div",{style:t},r.a.createElement("em",null,n))},p=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),d=f[0],s=f[1],p=Object(a.useState)(""),j=Object(o.a)(p,2),O=j[0],w=j[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),k=y[0],C=y[1],N=Object(a.useState)(null),T=Object(o.a)(N,2),A=T[0],B=T[1],D=Object(a.useState)("green"),I=Object(o.a)(D,2),J=I[0],L=I[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var x=t.filter((function(e){return e.name.toLowerCase().includes(k)}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:A,color:J}),r.a.createElement(l,{filter:k,func:function(e){return C(e.target.value.toLowerCase())}}),r.a.createElement("h2",null," add a new "),r.a.createElement(i,{name:d,number:O,adding:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),a={name:d,number:O};if(n.includes(d)){var r=t.filter((function(e){return e.name===d}))[0].id;window.confirm(d+" is already added to the phonebook, replace th old number with the old one?")&&(v(r,a).then((function(e){u(t.map((function(n){return n.id!==r?n:e})))})).catch((function(e){L("red"),B("Information of ".concat(d," has already been removed from server")),setTimeout((function(){B(null)}),5e3)})),L("green"),B("Added ".concat(d)),setTimeout((function(){B(null)}),5e3))}else h(a).then((function(e){u(t.concat(e))})),L("green"),B("Added ".concat(d)),setTimeout((function(){B(null)}),5e3);s(""),w("")},changingName:function(e){return s(e.target.value)},changingNumber:function(e){return w(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:x,func:function(e,n){window.confirm("Delete "+n+" ?")&&(g(e),u(t.filter((function(n){return n.id!==e}))))}}))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d2ae5f25.chunk.js.map