(this["webpackJsonpspacestagram-app"]=this["webpackJsonpspacestagram-app"]||[]).push([[0],{19:function(e,t,a){},23:function(e){e.exports=JSON.parse('[{"username":"Herman Woo","displayPic":"https://avatars.githubusercontent.com/u/72119202?v=4","description":"My Personal Account"},{"username":"NasaAPOD","displayPic":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/726px-NGC_4414_%28NASA-med%29.jpg","description":"Astronomy Photo of the Day"},{"username":"CuriosityRover","displayPic":"https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg","description":"Visions of Mars"},{"username":"OpportunityRover","displayPic":"https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg","description":"Mars Exploration Rover \u2013 B"},{"username":"SpiritRover","displayPic":"https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg","description":"Mars Exploration Rover \u2013 A"}]')},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(20),c=a.n(s),i=a(10),o=(a(29),a(8)),u=a.n(o),d=a(13),l=a(3),p=a(4),j=a(6),h=a(5),b=a(2),m=(a(31),a(32),a.p,function(e){var t=document.createElement("div");document.getElementById(e).appendChild(t),t.id="loading"}),f=function(){var e=document.getElementById("loading");e&&e.remove()},O=function(e){var t=document.getElementById(e);t.scrollIntoView(),t.remove()},v="uTCzdhDIJkuDsqKV8GFOHd2HuvHa0kxq9qg7gifo",x=new Date,k=x.getUTCMonth()+1,g=x.getDate(),y=x.getFullYear(),N=(y.toString(),k.toString(),g.toString(),y.toString()+"-"+k.toString()+"-"+(g-1).toString()),w=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.getUTCMonth(),e.next=3,fetch("https://api.nasa.gov/planetary/apod?start_date=2021-".concat(t,"-").concat(g+1,"&api_key=").concat(v));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,n.map((function(e){return{id:"apod-"+e.date,user:"NasaAPOD",date:e.date,type:e.media_type,title:e.title,desc:e.explanation,url:e.url,like:!1}}));case 9:return r=e.sent,e.abrupt("return",r.reverse().slice(0,30));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=".concat(N,"&page=1&api_key=").concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a.photos.map((function(e){return{id:"curiosity-"+e.id,user:"CuriosityRover",date:e.earth_date,type:"image",desc:e.camera.name,title:e.camera.name,url:e.img_src,like:!1}}));case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2014-06-01&page=1&api_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a.photos.map((function(e){return{id:"opportunity-"+e.id,user:"OpportunityRover",date:e.earth_date,type:"image",desc:e.camera.name,title:e.camera.name,url:e.img_src,like:!1}}));case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2009-06-01&page=1&api_key=".concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a.photos.map((function(e){return{id:"spirit-"+e.id,user:"SpiritRover",date:e.earth_date,type:"image",desc:e.camera.name,title:e.camera.name,url:e.img_src,liked:!1}}));case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,s,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,C();case 3:return a=e.sent,e.next=6,S();case 6:return n=e.sent,e.next=9,L();case 9:return r=e.sent,e.next=12,w();case 12:for(s=e.sent,c=0,i=[s,a,n,r];c<i.length;c++)i[c].map((function(e){t.push(e)}));return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=new Date,A=D.toString().slice(4,7),P="0"+(D.getMonth()+1).toString(),M=D.getDate().toString(),I=D.getFullYear();function R(){var e=M+("1"===M.slice(-1)&&"1"!==M.slice(0,1)?"st":"2"===M.slice(-1)&&"1"!==M.slice(0,1)?"nd":"3"===M.slice(-1)&&"1"!==M.slice(0,1)?"rd":"th");return"".concat(A," ").concat(e," ").concat(I)}a(33);var E=a(0),B=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={post:e.props.data},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.like,n=e.addLike,r=e.unLike,s="/user/".concat(t.user,"/");return Object(E.jsxs)("div",{className:"post",children:[Object(E.jsxs)("div",{className:"post-header",children:[Object(E.jsx)(i.b,{to:s,className:"post-user",children:Object(E.jsx)("h3",{children:t.user})}),Object(E.jsx)("h5",{className:"post-date",children:t.date})]}),Object(E.jsx)("section",{children:Object(E.jsx)("a",{children:"video"===t.type?Object(E.jsx)("iframe",{className:"post-image",src:t.url}):Object(E.jsx)("div",{className:"post-image",style:{backgroundImage:"url(".concat(t.url,")")}})})}),Object(E.jsxs)("section",{className:"post-footer",children:[Object(E.jsxs)("div",{className:"like-holder",children:[Object(E.jsx)("h4",{children:t.title}),1===a.length?Object(E.jsx)("button",{className:"liked-button heart-button",onClick:function(){return r(t.id)}}):Object(E.jsx)("button",{className:"unliked-button heart-button",onClick:function(){return n(t.id)}})]}),Object(E.jsxs)("span",{className:"post-description",children:[Object(E.jsx)("p",{children:t.desc.slice(0,250)+(t.desc.length>250&&"...")}),Object(E.jsx)(i.b,{className:"post-view-more",to:s+t.id,children:"View Post"})]})]})]})}}]),a}(n.Component),F=B,H=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=[],a=[],n=[],r=this.props.data,s=this.props.likes;return r.map((function(e){e.date==="".concat(I,"-").concat(P.slice(-2),"-").concat(M)?t.push(e):e.date==="".concat(I,"-").concat(P.slice(-2),"-").concat(M-1)?a.push(e):n.push(e)})),Object(E.jsxs)("div",{className:"home-body",children:[t.length>0&&Object(E.jsx)("h5",{className:"home-subtitle",children:"Today's Posts"}),t.slice(0,5).map((function(t){var a=s.filter((function(e){return e===t.id}));return Object(E.jsx)(F,{data:t,like:a,addLike:e.props.addLike,unLike:e.props.unLike})})),a.length>0&&Object(E.jsx)("h5",{className:"home-subtitle",children:"Yesterday's Posts"}),a.slice(0,5).map((function(t){var a=s.filter((function(e){return e===t.id}));return Object(E.jsx)(F,{data:t,like:a,addLike:e.props.addLike,unLike:e.props.unLike})})),n.length>0&&Object(E.jsx)("h5",{className:"home-subtitle",children:"Earlier Posts"}),n.slice(0,15).map((function(t){var a=s.filter((function(e){return e===t.id}));return Object(E.jsx)(F,{data:t,like:a,addLike:e.props.addLike,unLike:e.props.unLike})}))]})}}]),a}(n.Component),J=H,T=a(23);function V(e){return T.filter((function(t){return t.username===e}))[0]}a(43);var q=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:R(),username:"",picture:""},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=V("Herman Woo");this.setState({username:e.username,picture:e.displayPic})}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.username,n=e.picture;return Object(E.jsxs)("header",{id:"app-header",children:[Object(E.jsxs)("div",{className:"app-logo header-item",children:[Object(E.jsx)("h1",{children:"Spacestagram"}),Object(E.jsx)("h5",{children:"Image-sharing from the Final Frontier"})]}),Object(E.jsx)("div",{className:"app-date header-item",children:Object(E.jsx)("h2",{children:t})}),Object(E.jsxs)("a",{href:"https://herman-woo.github.io/",className:"app-user header-item header-link",children:[Object(E.jsx)("div",{className:"app-user-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(E.jsx)("h3",{className:"app-user-name",children:a})]})]})}}]),a}(n.Component),G=q,Y=(a(19),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.data;return Object(E.jsx)("div",{className:"profile-posts",children:e.map((function(e){return Object(E.jsx)("a",{className:"profile-post-link",children:"video"===e.type?Object(E.jsx)("div",{className:"profile-post-item",children:Object(E.jsx)("iframe",{src:e.url})}):Object(E.jsx)(i.b,{to:"/user/"+e.user+"/"+e.id,children:Object(E.jsx)("div",{className:"profile-post-item",style:{backgroundImage:"url(".concat(e.url,")")}})})})}))})}}]),a}(n.Component)),U=Y,W=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.props.search,a=e.filter((function(e){return e.date===t}));return Object(E.jsxs)("div",{className:"search-body",children:[""===t?Object(E.jsx)("h3",{children:"Search"}):1===a.length?Object(E.jsxs)("h3",{children:[a.length," Result for ",t,":"]}):Object(E.jsxs)("h3",{children:[a.length," Results for ",t,":"]}),""===t?Object(E.jsx)(U,{data:e}):Object(E.jsx)(U,{data:a})]})}}]),a}(n.Component),z=W,K=(a(44),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){O("page-topper")}},{key:"render",value:function(){var e=this.props,t=e.liked,a=e.addLike,n=e.unLike,r=this.props.user,s=this.props.post;return Object(E.jsxs)("div",{className:"page",children:[Object(E.jsx)("div",{id:"page-topper"}),s.map((function(e){return Object(E.jsxs)("div",{className:"page-body",children:[Object(E.jsx)("img",{className:"page-image",src:e.url}),Object(E.jsxs)("div",{className:"page-info",children:[Object(E.jsxs)("div",{className:"page-header",children:[Object(E.jsx)(i.b,{to:"/user/"+r,children:Object(E.jsx)("h3",{className:"page-text",children:r})}),Object(E.jsx)("h4",{className:"page-text date-small",children:e.date})]}),Object(E.jsx)("h2",{className:"page-text",children:e.title}),Object(E.jsx)("h4",{className:"page-text date-large",children:e.date}),!0===t?Object(E.jsx)("button",{className:"liked-button heart-button",onClick:function(){return n(e.id)}}):Object(E.jsx)("button",{className:"unliked-button heart-button",onClick:function(){return a(e.id)}}),Object(E.jsx)("div",{className:"page-desc",children:e.desc})]})]})}))]})}}]),a}(n.Component)),Q=K;function X(e){var t=e.data,a=e.likes,n=e.addLike,r=e.unLike,s=Object(b.f)(),c=s.id,i=s.postid,o=t.filter((function(e){return e.id===i})),u=a.includes(i);return Object(E.jsx)(Q,{user:c,post:o,liked:u,addLike:n,unLike:r})}var Z=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(E.jsx)("footer",{children:Object(E.jsxs)("div",{className:"footer-dashboard",children:[Object(E.jsx)(i.b,{to:"/",className:"footer-icon home"}),Object(E.jsx)(i.b,{to:"/search",className:"footer-icon search"}),Object(E.jsx)(i.b,{to:"/liked",className:"footer-icon liked"})]})})}}]),a}(n.Component),$=Z,ee=(a(45),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imgs:[],user:{}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){m("profile-posts"),O("top");var e=document.getElementById("loading");e&&e.remove()}},{key:"render",value:function(){var e=this.props.user,t=this.props.posts;"/user/".concat(e.username,"/");return Object(E.jsxs)("div",{className:"profile-body",children:[Object(E.jsx)("div",{id:"top"}),Object(E.jsxs)("div",{className:"profile-header",children:[Object(E.jsx)("div",{className:"profile-picture",style:{backgroundImage:"url(".concat(e.displayPic,")")}}),Object(E.jsxs)("div",{className:"profile-info",children:[Object(E.jsx)("h1",{children:e.username}),Object(E.jsx)("h2",{children:e.description})]})]}),Object(E.jsx)("h3",{className:"profile-posts-title",id:"profile-posts",children:"Posts"}),Object(E.jsx)(U,{data:t})]})}}]),a}(n.Component)),te=ee;function ae(e){var t=Object(b.f)().id,a=e.data.filter((function(e){return e.user===t})),n=V(t);return Object(E.jsx)(te,{user:n,posts:a},n.username)}var ne=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.likes,t=this.props.data.filter((function(t){return e.includes(t.id)}));return Object(E.jsx)("div",{className:"saved-body",children:Object(E.jsx)(U,{data:t})})}}]),a}(n.Component),re=ne,se=a(24),ce=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={dropdown:!1},e}return Object(p.a)(a,[{key:"toggleDropdown",value:function(e){this.setState({dropdown:e})}},{key:"componentDidMount",value:function(){this.props.search(""),this.state.dropdown=!1}},{key:"render",value:function(){var e=this,t=this.props,a=t.search,n=t.data,r=t.result,s=new Set(n.map((function(e){return e.date})));return Object(E.jsx)("header",{id:"app-header",children:Object(E.jsxs)("div",{className:"search-header",children:[Object(E.jsx)("button",{className:"search-bar",onClick:function(){return e.toggleDropdown(!e.state.dropdown)},children:"Search by Date"}),!0===this.state.dropdown&&Object(E.jsxs)("div",{className:"search-dropdown-menu",children:[""!==r&&Object(E.jsx)("button",{className:"search-dropdown-item",onClick:function(){a(""),e.toggleDropdown(!1)},children:Object(E.jsx)("p",{children:"- Clear Search -"})}),Object(se.a)(s).map((function(t){return Object(E.jsx)("button",{className:"search-dropdown-item",onClick:function(){a(t),e.toggleDropdown(!1)},children:Object(E.jsx)("p",{children:t})})}))]})]})})}}]),a}(n.Component),ie=ce,oe=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:[],likes:[],search:""},e.updateSearch=function(t){e.setState({search:t})},e.addLike=function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.likes.concat([a]),e.setState({likes:n}),e.updateLocal(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.unLike=function(t){var a=e.state.likes.filter((function(e){return e!==t}));e.setState({likes:a}),e.updateLocal(a)},e.updateLocal=function(e){localStorage.setItem("likes",e)},e}return Object(p.a)(a,[{key:"getData",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,this.setState({data:t}),f();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"retrieveLocal",value:function(){var e=localStorage.getItem("likes");if(e){var t=e.split(",");this.setState({likes:t})}}},{key:"componentDidMount",value:function(){this.retrieveLocal(),this.getData(),m("main")}},{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{className:"app",id:"app",children:[Object(E.jsxs)(b.c,{children:[Object(E.jsx)(b.a,{exact:!0,path:"/search",render:function(){return Object(E.jsx)(ie,{data:e.state.data,result:e.state.search,search:e.updateSearch})}}),Object(E.jsx)(b.a,{path:"/",render:function(){return Object(E.jsx)(G,{})}})]}),Object(E.jsx)("main",{id:"main",children:Object(E.jsxs)(b.c,{children:[Object(E.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(E.jsx)(J,{data:e.state.data,likes:e.state.likes,addLike:e.addLike,unLike:e.unLike})}}),Object(E.jsx)(b.a,{exact:!0,path:"/search",render:function(){return Object(E.jsx)(z,{data:e.state.data,search:e.state.search})}}),Object(E.jsx)(b.a,{exact:!0,path:"/liked",render:function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h5",{className:"liked-header",children:"Liked Posts:"}),Object(E.jsx)(re,{data:e.state.data,likes:e.state.likes})]})}}),Object(E.jsx)(b.a,{exact:!0,path:"/user/:id",render:function(){return Object(E.jsx)(ae,{data:e.state.data})}}),Object(E.jsx)(b.a,{exact:!0,path:"/user/:id/:postid",render:function(){return Object(E.jsx)(X,{data:e.state.data,likes:e.state.likes,addLike:e.addLike,unLike:e.unLike})}})]})}),Object(E.jsx)($,{})]})}}]),a}(n.Component),ue=oe;c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(i.a,{children:Object(E.jsx)(ue,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.51e97a9f.chunk.js.map