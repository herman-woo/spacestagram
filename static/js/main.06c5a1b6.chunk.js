(this["webpackJsonpspacestagram-app"]=this["webpackJsonpspacestagram-app"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"username":"Herman Woo","displayPic":"https://avatars.githubusercontent.com/u/72119202?v=4","description":"My Personal Account"},{"username":"NasaAPOD","displayPic":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/726px-NGC_4414_%28NASA-med%29.jpg","description":"Astronomy Photo of the Day"},{"username":"CuriosityRover","displayPic":"https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg","description":"Visions of Mars"}]')},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),c=a.n(s),i=a(9),o=(a(27),a(12)),u=a.n(o),l=a(14),p=a(4),d=a(5),j=a(7),h=a(6),m=a(2),b=(a(29),a(30),a.p,function(e){var t=document.createElement("div");document.getElementById(e).appendChild(t),t.id="loading"}),O=function(){var e=document.getElementById("loading");e&&e.remove()},f="uTCzdhDIJkuDsqKV8GFOHd2HuvHa0kxq9qg7gifo",x=new Date,v=x.getUTCMonth()+1,g=x.getDate(),y=x.getFullYear(),N=(y.toString(),v.toString(),g.toString(),y.toString()+"-"+v.toString()+"-"+(g-1).toString()),k=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.getUTCMonth(),e.next=3,fetch("https://api.nasa.gov/planetary/apod?start_date=2021-".concat(t,"-").concat(g+1,"&api_key=").concat(f));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,n.map((function(e){return{id:"apod-"+e.date,user:"NasaAPOD",date:e.date,type:e.media_type,title:e.title,desc:e.explanation,url:e.url}}));case 9:return r=e.sent,e.abrupt("return",r.reverse().slice(0,30));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=".concat(N,"&page=1&api_key=").concat(f));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a.photos.map((function(e){return{id:"curiosity-"+e.id,user:"CuriosityRover",date:e.earth_date,type:"image",desc:e.camera.name,title:e.camera.name,url:e.img_src}}));case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,w();case 3:return a=e.sent,e.next=6,k();case 6:for(n=e.sent,r=0,s=[n,a];r<s.length;r++)s[r].map((function(e){return t.push(e)}));return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=new Date,D=S.toString().slice(4,7),P="0"+(S.getMonth()+1).toString(),_=S.getDate().toString(),A=S.getFullYear();function I(){var e=_+("1"===_.slice(-1)&&"1"!==_.slice(0,1)?"st":"2"===_.slice(-1)&&"1"!==_.slice(0,1)?"nd":"3"===_.slice(-1)&&"1"!==_.slice(0,1)?"rd":"th");return"".concat(D," ").concat(e," ").concat(A)}a(31);var M=a(0),E=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.data,t="/spacestagram/user/".concat(e.user,"/");return Object(M.jsxs)("div",{className:"post",children:[Object(M.jsxs)("div",{className:"post-header",children:[Object(M.jsx)(i.b,{to:t,className:"post-user",children:Object(M.jsx)("h3",{children:e.user})}),Object(M.jsx)("h5",{className:"post-date",children:e.date})]}),Object(M.jsx)("section",{children:Object(M.jsx)("a",{children:"video"===e.type?Object(M.jsx)("iframe",{className:"post-image",src:e.url}):Object(M.jsx)("div",{className:"post-image",style:{backgroundImage:"url(".concat(e.url,")")}})})}),Object(M.jsxs)("section",{className:"post-footer",children:[Object(M.jsx)("h5",{className:"post-subtitle",children:"0 Likes"}),Object(M.jsxs)("span",{className:"post-description",children:[Object(M.jsx)("p",{children:e.desc.slice(0,250)+(e.desc.length>250&&"...")}),Object(M.jsx)(i.b,{className:"post-view-more",to:t+e.id,children:"View Post"})]})]})]})}}]),a}(n.Component),B=E,F=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={load:2},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=[],t=[],a=[];return this.props.data.map((function(n){n.date==="".concat(A,"-").concat(P.slice(-2),"-").concat(_)?e.push(n):n.date==="".concat(A,"-").concat(P.slice(-2),"-").concat(_-1)?t.push(n):a.push(n)})),Object(M.jsxs)("div",{className:"home-body",children:[e.length>0&&Object(M.jsx)("h5",{children:"Today's Posts"}),e.slice(0,5).map((function(e){return Object(M.jsx)(B,{data:e})})),t.length>0&&Object(M.jsx)("h5",{children:"Yesterday's Posts"}),t.slice(0,5).map((function(e){return Object(M.jsx)(B,{data:e})})),a.length>0&&Object(M.jsx)("h5",{children:"Earlier Posts"}),a.slice(0,5).map((function(e){return Object(M.jsx)(B,{data:e})}))]})}}]),a}(n.Component),H=F,J=a(22);function T(e){return J.filter((function(t){return t.username===e}))[0]}a(41);var U=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:I(),username:"",picture:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=T("Herman Woo");this.setState({username:e.username,picture:e.displayPic})}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.username,n=e.picture;return Object(M.jsxs)("header",{children:[Object(M.jsxs)("div",{className:"app-logo header-item",children:[Object(M.jsx)("h1",{children:"Spacestagram"}),Object(M.jsx)("h5",{children:"Image-sharing from the Final Frontier"})]}),Object(M.jsx)("div",{className:"app-date header-item",children:Object(M.jsx)("h2",{children:t})}),Object(M.jsxs)("a",{href:"https://herman-woo.github.io/",className:"app-user header-item header-link",children:[Object(M.jsx)("div",{className:"app-user-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(M.jsx)("h3",{className:"app-user-name",children:a})]})]})}}]),a}(n.Component),V=U,q=(a(42),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.user;return this.props.post.map((function(t){return Object(M.jsxs)("div",{className:"page-body",children:[Object(M.jsx)("img",{className:"page-img",style:{backgroundImage:"url(".concat(t.url,")")}}),Object(M.jsxs)("div",{className:"page-info",children:[Object(M.jsx)(i.b,{to:"/spacestagram/user/"+e,children:Object(M.jsx)("h3",{className:"page-text",children:e})}),Object(M.jsx)("h2",{className:"page-text",children:t.title}),Object(M.jsx)("h4",{className:"page-text",children:t.date}),Object(M.jsx)("h5",{children:"0 Likes"}),Object(M.jsx)("div",{className:"page-desc",children:t.desc})]})]})}))}}]),a}(n.Component)),G=q;function Y(e){var t=e.data,a=Object(m.e)(),n=a.id,r=a.postid,s=t.filter((function(e){return e.id===r}));return Object(M.jsx)(G,{user:n,post:s})}var L=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(M.jsx)("footer",{children:Object(M.jsxs)("div",{className:"footer-dashboard",children:[Object(M.jsx)(i.b,{to:"/spacestagram",className:"footer-icon home"}),Object(M.jsx)(i.b,{to:"/spacestagram/search",className:"footer-icon search"}),Object(M.jsx)(i.b,{to:"/spacestagram/about",className:"footer-icon about"})]})})}}]),a}(n.Component),R=L,W=(a(43),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imgs:[],user:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){b("profile-posts");var e=document.getElementById("top");e.scrollIntoView(),e.remove();var t=document.getElementById("loading");t&&t.remove()}},{key:"render",value:function(){var e=this.props.user,t=this.props.posts,a="/spacestagram/user/".concat(e.username,"/");return Object(M.jsxs)("div",{className:"profile-body",children:[Object(M.jsx)("div",{id:"top"}),Object(M.jsxs)("div",{className:"profile-header",children:[Object(M.jsx)("div",{className:"profile-picture",style:{backgroundImage:"url(".concat(e.displayPic,")")}}),Object(M.jsxs)("div",{className:"profile-info",children:[Object(M.jsx)("h1",{children:e.username}),Object(M.jsx)("h2",{children:e.description})]})]}),Object(M.jsx)("h3",{className:"profile-posts-title",id:"profile-posts",children:"Posts"}),Object(M.jsx)("div",{className:"profile-posts",children:t.map((function(e){return Object(M.jsx)("a",{children:"video"===e.type?Object(M.jsx)("iframe",{className:"profile-post-item",src:e.url}):Object(M.jsx)(i.b,{to:a+e.id,children:Object(M.jsx)("div",{className:"profile-post-item",style:{backgroundImage:"url(".concat(e.url,")")}})})})}))})]})}}]),a}(n.Component)),z=W;function K(e){var t=Object(m.e)().id,a=e.data.filter((function(e){return e.user===t})),n=T(t);return Object(M.jsx)(z,{user:n,posts:a},n.username)}var Q=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(d.a)(a,[{key:"getData",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({data:t}),O();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData(),b("main")}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"app",children:[Object(M.jsx)(V,{}),Object(M.jsxs)("main",{id:"main",children:[Object(M.jsx)(m.a,{exact:!0,path:"/spacestagram",render:function(){return Object(M.jsx)(H,{data:e.state.data})}}),Object(M.jsx)(m.a,{exact:!0,path:"/spacestagram/search",render:function(){return Object(M.jsx)("h5",{children:"Search page Under Construction"})}}),Object(M.jsx)(m.a,{exact:!0,path:"/spacestagram/about",render:function(){return Object(M.jsx)("h5",{children:"About page Under Construction"})}}),Object(M.jsx)(m.a,{exact:!0,path:"/spacestagram/user/:id",render:function(){return Object(M.jsx)(K,{data:e.state.data})}}),Object(M.jsx)(m.a,{exact:!0,path:"/spacestagram/user/:id/:postid",render:function(){return Object(M.jsx)(Y,{data:e.state.data})}})]}),Object(M.jsx)(R,{})]})}}]),a}(n.Component),X=Q;c.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(i.a,{children:Object(M.jsx)(X,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.06c5a1b6.chunk.js.map