(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a(80)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),l=a(47),r=a.n(l);a(60),a(61),a(62);function n(){return o.a.createElement("footer",null,"copy right @ Habibaeid2004")}a(63);var c=a(88),p=a(83),m=a(86),i=a(84),u=a(4),h=a(32),g=a(23);let d=Object(s.createContext)();function E(e){let{children:t}=e,a=new g.a,[l,r]=Object(s.useState)(a.get("email"));return o.a.createElement(d.Provider,{value:{value:l,setValue:r}},t)}function x(){let e=Object(s.useContext)(d),t=new g.a,a=Object(u.o)();console.log("undefined"===e.value),console.log(void 0===e.value);let l=o.a.createElement(c.a,{style:{display:"flex",gap:"5px",flexDirection:"row"}},o.a.createElement(h.b,{to:"register"},o.a.createElement(p.a,{variant:"success"},"register"))),r=o.a.createElement(c.a,null,o.a.createElement(p.a,{onClick:function(){t.remove("email"),e.setValue(void 0),a("/")},variant:"success",style:{width:"fit-content"}},"Log Out"));return o.a.createElement("header",null,o.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",className:"bg-body-tertiary"},o.a.createElement(i.a,null,o.a.createElement(m.a.Brand,{href:"/"},"Logo"),o.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(c.a,{className:"me-auto"},o.a.createElement(c.a.Link,{href:"/"},"Home"),o.a.createElement(c.a.Link,{href:void 0===e.value?"/error":"/products"},"Products")),void 0===e.value?l:r))))}var b=a(87),f=a(90);a(69);function y(){let[e,t]=Object(s.useState)(""),[a,l]=Object(s.useState)(""),[r,n]=Object(s.useState)(""),[c,m]=Object(s.useState)(""),[u,h]=Object(s.useState)(!1),[E,x]=Object(s.useState)(!1),y=new g.a,w=Object(s.useContext)(d);return o.a.createElement(i.a,{style:{paddingBottom:"50px"}},o.a.createElement(b.a,{style:{margin:"100px auto 20px"}},E?o.a.createElement(f.a,{variant:"success"},"the data submitted successfully"):"",o.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicName"},o.a.createElement(b.a.Label,null,"User Name"),o.a.createElement(b.a.Control,{type:"text",placeholder:"Enter your name",onChange:e=>t(e.target.value)}),o.a.createElement(b.a.Text,null,u&&e.length<1?"*name is required!":"")),o.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicPassword"},o.a.createElement(b.a.Label,null,"Password"),o.a.createElement(b.a.Control,{type:"password",placeholder:"Password",onChange:e=>n(e.target.value)}),o.a.createElement(b.a.Text,null,u&&r.length<8?"*password length most be at least 8 characters!":"")),o.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicRePassword"},o.a.createElement(b.a.Label,null,"Re-Password"),o.a.createElement(b.a.Control,{type:"password",placeholder:"reenter Password",onChange:e=>m(e.target.value)}),o.a.createElement(b.a.Text,null,u&&r!==c?"*re-enter password correctly!":"")),o.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicEmail"},o.a.createElement(b.a.Label,null,"Email"),o.a.createElement(b.a.Control,{type:"email",placeholder:"Enter Email",onChange:e=>l(e.target.value)})),o.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(t){t.preventDefault(),h(!0),r.length>=8&&r===c&&0!==e.length&&(y.set("email",a),w.setValue(a),x(!0))}},"Register")))}var w=a(85),v=a(89),j=a(48),N=a(45),C=a(49),O=a(50);a(70);const k=["https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg","https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg","https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg","https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2189685/pexels-photo-2189685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg","https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=600"];function T(){let[e,t]=Object(s.useState)([]),a=k;return Object(s.useEffect)(()=>{w.a.get("https://fakestoreapi.com/products").then(e=>{console.log(e.data);let s=e.data.map(e=>o.a.createElement(v.a,{style:{width:"18rem"},key:e.id},o.a.createElement(j.a,{src:a[e.id],alt:"...",className:"card-img"}),o.a.createElement(N.a,null,o.a.createElement(C.a,null,e.title.slice(0,10)),o.a.createElement(O.a,null,e.description.slice(0,150)),o.a.createElement(p.a,{variant:"danger"},"Buy"))));t(s)})},[]),o.a.createElement("div",{className:"content"},o.a.createElement("h1",{className:"mainTitle"},"Our Homes"),o.a.createElement(i.a,null,o.a.createElement("div",{className:"products"},e)))}a(75);const S=[{featureTitle:"Beautiful",featureImg:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{featureTitle:"Clean",featureImg:"https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{featureTitle:"safe neighborhood",featureImg:"https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}];a(76);function L(){let e=S.map(e=>o.a.createElement(v.a,{style:{width:"18rem"},key:e.id},o.a.createElement(j.a,{src:e.featureImg,alt:"..."}),o.a.createElement(N.a,null,o.a.createElement(C.a,null,e.featureTitle),o.a.createElement(O.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))));return o.a.createElement("div",{className:"features"},o.a.createElement("h1",{className:"mainTitle"},"Our Features"),o.a.createElement(i.a,null,o.a.createElement("div",{className:"feature"},e)))}a(77);function P(){return o.a.createElement("div",{className:"section"},o.a.createElement("img",{src:"https://images.pexels.com/photos/786944/pexels-photo-786944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"",className:"background"}),o.a.createElement("div",{className:"txt"},o.a.createElement("h1",null,"Welcom in our website"),o.a.createElement("div",null,"Here you can buy any house you dream it !"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias perferendis placeat aliquid, voluptates praesentium pariatur fugiat eum. Suscipit nam fuga, minima optio amet molestiae iure eius, adipisci porro nostrum quae.")))}function B(){return o.a.createElement("div",{className:"home"},o.a.createElement(P,null),o.a.createElement(L,null))}a(78);function I(){return o.a.createElement("div",{class:"error"},o.a.createElement("div",{class:"content"},o.a.createElement("div",{class:"title"},"Oops"),o.a.createElement("div",{class:"small_title"},"warnning"),o.a.createElement("p",null,"You Must Register to see the Users and The Products.")))}var F=function(){return o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",element:o.a.createElement(B,null)}),o.a.createElement(u.a,{path:"/products",element:o.a.createElement(T,null)}),o.a.createElement(u.a,{path:"/register",element:o.a.createElement(y,null)}),o.a.createElement(u.a,{path:"/error",element:o.a.createElement(I,null)})),o.a.createElement(n,null))};var R=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then(t=>{let{getCLS:a,getFID:s,getFCP:o,getLCP:l,getTTFB:r}=t;a(e),s(e),o(e),l(e),r(e)})};a(79);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(h.a,null,o.a.createElement(E,null,o.a.createElement(F,null)))),R()}},[[52,1,2]]]);
//# sourceMappingURL=main.be3e5968.chunk.js.map