(this["webpackJsonpspacestagram-app"]=this["webpackJsonpspacestagram-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),r=a.n(s),i=(a(12),a(2)),o=a(3),j=a(5),l=a(4),h=(a(13),a(14),a.p,a(15),a(0)),u=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"post-header",children:[Object(h.jsx)("a",{children:Object(h.jsx)("h3",{className:"post-user",children:"Astronomy Photo of the Day"})}),Object(h.jsx)("h5",{className:"post-date",children:e.date})]}),Object(h.jsx)("section",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("div",{className:"post-image",style:{backgroundImage:"url(".concat(e.url,")")}})})}),Object(h.jsxs)("section",{className:"post-footer",children:[Object(h.jsx)("h5",{className:"post-subtitle",children:e.url}),Object(h.jsx)("span",{className:"post-description",children:Object(h.jsx)("p",{children:e.desc})})]})]})}}]),a}(n.Component),d=u,p=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={imgs:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nasa.gov/planetary/apod?start_date=2021-09-01&api_key=".concat("uTCzdhDIJkuDsqKV8GFOHd2HuvHa0kxq9qg7gifo")).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{url:e.url,date:e.date,desc:e.explanation}}))})).then((function(t){return e.setState({imgs:t})}))}},{key:"render",value:function(){var e=this.state.imgs;return Object(h.jsx)("div",{children:e.map((function(e){return Object(h.jsx)(d,{data:e})}))})}}]),a}(n.Component),b=p,O=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={date:"September 15th 2021",user:"Herman Woo",displayPic:"./imgs/default.jpg"},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=new Date,t=e.toString().slice(8,10),a=e.toString().slice(4,7)+" "+t+("1"===t.slice(-1)?"1"===t.slice(-2)?"th":"st":"2"===t.slice(-1)?"nd":"3"===t.slice(-1)?"rd":"th")+"  "+e.toString().slice(11,15);this.setState({date:a})}},{key:"render",value:function(){return Object(h.jsxs)("header",{children:[Object(h.jsxs)("div",{className:"app-logo header-item",children:[Object(h.jsx)("h1",{children:"Spacestagram"}),Object(h.jsx)("h5",{children:"Image-sharing from the Final Frontier"})]}),Object(h.jsx)("div",{className:"app-date header-item",children:Object(h.jsx)("h2",{children:this.state.date})}),Object(h.jsxs)("a",{className:"app-user header-item header-link",children:[Object(h.jsx)("img",{className:"app-user-image"}),Object(h.jsx)("h3",{children:this.state.user})]})]})}}]),a}(n.Component),m=O,f=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"footer-dashboard",children:[Object(h.jsx)("a",{className:"footer-icon home"}),Object(h.jsx)("a",{className:"footer-icon search"}),Object(h.jsx)("a",{className:"footer-icon info"})]})})}}]),a}(n.Component),x=f,v=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(m,{}),Object(h.jsx)("main",{children:Object(h.jsx)(b,{})}),Object(h.jsx)(x,{})]})}}]),a}(n.Component),g=v;r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.31921a7a.chunk.js.map