(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,r){},22:function(e){e.exports=[{username:"Herman Woo",displayPic:"https://avatars.githubusercontent.com/u/72119202?v=4",description:"My Personal Account"},{username:"NasaAPOD",displayPic:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/726px-NGC_4414_%28NASA-med%29.jpg",description:"Astronomy Photo of the Day"},{username:"CuriosityRover",displayPic:"https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg",description:"Visions of Mars"},{username:"OpportunityRover",displayPic:"https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg",description:"Mars Exploration Rover \u2013 B"},{username:"SpiritRover",displayPic:"https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg",description:"Mars Exploration Rover \u2013 A"}]},24:function(e,t,r){e.exports=r(57)},32:function(e,t,r){},34:function(e,t,r){},36:function(e,t,r){},38:function(e,t,r){e.exports=r.p+"static/media/default.ad04c91f.jpg"},39:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){},53:function(e,t,r){},55:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),i=r.n(o),c=r(8),s=(r(32),r(12)),u=r(2),l=r(3),p=r(5),h=r(4),d=r(6),f=r(1),m=(r(34),r(36),r(38),function(e){var t=document.createElement("div");document.getElementById(e).appendChild(t),t.id="refreshing-animation",t.className="loading"}),v=function(){var e=document.getElementById("refreshing-animation");e&&e.remove()},y=function(e){var t=document.getElementById(e);t.scrollIntoView(),t.remove()},g=function(e){return e.split("  ").map(function(e){return a.a.createElement("p",null,e)})},b=new Date,E=b.getDate().toString(),k=b.toString().slice(4,7),w="0"+(b.getMonth()+1).toString(),j=b.getFullYear();function O(){var e=E+("1"===E.slice(-1)&&"1"!==E.slice(0,1)?"st":"2"===E.slice(-1)&&"1"!==E.slice(0,1)?"nd":"3"===E.slice(-1)&&"1"!==E.slice(0,1)?"rd":"th");return"".concat(k," ").concat(e," ").concat(j)}function L(){return"".concat(j,"-").concat(w.slice(-2),"-").concat(E)}function N(e,t){var r=t.split("-")[2],n=t.split("-")[1],a=t.split("-")[0];return e>r?(1==n?(n=12,a-=1):n-=1,r-=e,r+=function(e){switch(e){case 1:return 31;case 2:return 28;case 3:return 31;case 4:return 30;case 5:return 31;case 6:return 30;case 7:case 8:return 31;case 9:return 30;case 10:return 31;case 11:return 30;case 12:return 31}}(n)):r-=e,a.toString()+"-"+n.toString()+"-"+r.toString()}function x(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(){_=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:k(e,r,c)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var p={};function h(){}function d(){}function f(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=f.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(p).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function k(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=f,n(g,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var P="DrEgeC2ok305jh1fHGtE5XdxBqvK7QJFfY5cCUkh",C=function(){var e=Object(s.a)(_().mark(function e(t,r){var n,a,o;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nasa.gov/planetary/apod?start_date=".concat(t,"&end_date=").concat(r,"&api_key=").concat(P));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,a.map(function(e){return{key:"apod-"+e.date,id:"apod-"+e.date,user:"NasaAPOD",date:e.date,type:e.media_type,title:e.title,desc:e.explanation,url:e.url,hdef:e.hdurl}});case 9:return o=e.sent,e.abrupt("return",o.reverse());case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(_().mark(function e(t){var r,n,a,o,i,c,s,u;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,C(t,L());case 3:for(n=e.sent,a=0,o=[n];a<o.length;a++)if(i=o[a]){c=x(i);try{for(c.s();!(s=c.n()).done;)u=s.value,r.push(u)}catch(l){c.e(l)}finally{c.f()}}else console.log("empty");return e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=(r(39),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={post:r.props.data,more:!1},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.data,n=t.like,o=t.addLike,i=t.unLike,s="/user/".concat(r.user,"/");return a.a.createElement("div",{className:"post"},a.a.createElement("div",{className:"post-header"},a.a.createElement(c.b,{to:s,className:"post-user"},a.a.createElement("h3",null,r.user)),a.a.createElement("h5",{className:"post-date"},r.date)),a.a.createElement("section",null,"video"===r.type?a.a.createElement("iframe",{className:"post-image",src:r.url}):a.a.createElement(c.b,{className:"post-view-more",to:s+r.id},a.a.createElement("div",{className:"post-image",style:{backgroundImage:"url(".concat(r.url,")")}}))),a.a.createElement("section",{className:"post-footer"},a.a.createElement("div",{className:"like-holder"},a.a.createElement("h4",null,r.title),1===n.length?a.a.createElement("button",{className:"liked-button heart-button",onClick:function(){return i(r.id)}}):a.a.createElement("button",{className:"unliked-button heart-button",onClick:function(){return o(r.id)}})),a.a.createElement("span",{className:"post-description"},!1===this.state.more?a.a.createElement("p",null,r.desc.slice(0,250),r.desc.length>250&&a.a.createElement("a",{onClick:function(){return e.setState({more:!0})},className:"post-view-more"},"...more")):g(r.desc)),a.a.createElement(c.b,{className:"post-view-more",to:s+r.id},a.a.createElement("p",null,"View Post"))))}}]),t}(n.Component)),I=(r(48),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.loadMore;return a.a.createElement("button",{className:"loading",onClick:e})}}]),t}(n.Component)),D=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[],r=[],n=[],o=this.props.data,i=this.props.likes;return o.map(function(e){return e.date===L()?t.push(e):e.date==="".concat(j,"-").concat(w.slice(-2),"-").concat(E-1)?r.push(e):n.push(e),null}),a.a.createElement("div",{className:"home-body"},t.length>0&&a.a.createElement("h5",{className:"home-subtitle"},"Today's Posts"),t.map(function(t){var r=i.filter(function(e){return e===t.id});return a.a.createElement(M,{data:t,like:r,addLike:e.props.addLike,unLike:e.props.unLike})}),r.length>0&&a.a.createElement("h5",{className:"home-subtitle"},"Yesterday's Posts"),r.map(function(t){var r=i.filter(function(e){return e===t.id});return a.a.createElement(M,{data:t,like:r,addLike:e.props.addLike,unLike:e.props.unLike})}),n.length>0&&a.a.createElement("h5",{className:"home-subtitle"},"Earlier Posts"),n.map(function(t){var r=i.filter(function(e){return e===t.id});return a.a.createElement(M,{data:t,like:r,addLike:e.props.addLike,unLike:e.props.unLike})}),o.length>0&&a.a.createElement(I,{loadMore:this.props.loadMorePosts}))}}]),t}(n.Component),G=r(22);function F(e){return G.filter(function(t){return t.username===e})[0]}r(50);var T=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={date:O(),username:"",picture:""},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=F("Herman Woo");this.setState({username:e.username,picture:e.displayPic})}},{key:"render",value:function(){var e=this.state,t=e.date,r=e.username,n=e.picture;return a.a.createElement("header",{id:"app-header"},a.a.createElement("div",{className:"app-logo header-item"},a.a.createElement("h1",null,"Spacestagram"),a.a.createElement("h5",null,"Image-sharing from the Final Frontier")),a.a.createElement("div",{className:"app-date header-item"},a.a.createElement("h2",null,t)),a.a.createElement("a",{href:"https://herman-woo.github.io/",className:"app-user header-item header-link"},a.a.createElement("div",{className:"app-user-image",style:{backgroundImage:"url(".concat(n,")")}}),a.a.createElement("h3",{className:"app-user-name"},r)))}}]),t}(n.Component),R=(r(18),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return a.a.createElement("div",{className:"profile-posts"},e.map(function(e){return a.a.createElement(c.b,{className:"profile-post-top",to:"/user/"+e.user+"/"+e.id},"video"===e.type?a.a.createElement("div",null,a.a.createElement("div",{className:"profile-post-item link-overlay"}),a.a.createElement("iframe",{title:e.title,className:"profile-post-item",src:e.url})):a.a.createElement("div",{className:"profile-post-item",style:{backgroundImage:"url(".concat(e.url,")")}}))}))}}]),t}(n.Component)),Y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.search,r=e.filter(function(e){return e.date===t});return a.a.createElement("div",{className:"search-body"},""===t?a.a.createElement("h3",null,"Search"):1===r.length?a.a.createElement("h3",null,r.length," Result for ",t,":"):a.a.createElement("h3",null,r.length," Results for ",t,":"),""===t?a.a.createElement(R,{data:e}):a.a.createElement(R,{data:r}))}}]),t}(n.Component),B=(r(53),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){y("page-topper")}},{key:"render",value:function(){var e=this.props,t=e.liked,r=e.addLike,n=e.unLike,o=this.props.user,i=this.props.post;return a.a.createElement("div",{className:"page"},a.a.createElement("div",{id:"page-topper"}),i.map(function(e){return a.a.createElement("div",{className:"page-body"},"video"===e.type?a.a.createElement("iframe",{className:"post-image",src:e.url}):a.a.createElement("a",{className:"post-image-container",href:e.hdef,target:"_blank"},a.a.createElement("img",{className:"page-image",src:e.url})),a.a.createElement("div",{className:"page-info"},a.a.createElement("div",{className:"page-header"},a.a.createElement(c.b,{to:"/user/"+o},a.a.createElement("h3",{className:"page-text"},o)),a.a.createElement("h4",{className:"page-text date-small"},e.date)),a.a.createElement("h2",{className:"page-text"},e.title),a.a.createElement("h4",{className:"page-text date-large"},e.date),!0===t?a.a.createElement("button",{className:"liked-button heart-button",onClick:function(){return n(e.id)}}):a.a.createElement("button",{className:"unliked-button heart-button",onClick:function(){return r(e.id)}}),a.a.createElement("div",{className:"page-desc"},g(e.desc))))}))}}]),t}(n.Component));function H(e){var t=e.data,r=e.likes,n=e.addLike,o=e.unLike,i=Object(f.f)(),c=i.id,s=i.postid,u=t.filter(function(e){return e.id===s}),l=r.includes(s);return a.a.createElement(B,{user:c,post:u,liked:l,addLike:n,unLike:o})}var J=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:"footer-dashboard"},a.a.createElement(c.b,{to:"/",className:"footer-icon home"}),a.a.createElement(c.b,{to:"/search",className:"footer-icon search"}),a.a.createElement(c.b,{to:"/liked",className:"footer-icon liked"})))}}]),t}(n.Component),V=(r(55),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={imgs:[],user:{}},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){m("profile-posts"),y("top"),v()}},{key:"render",value:function(){var e=this.props.user,t=this.props.posts,r=this.props.loadMore;return a.a.createElement("div",{className:"profile-body"},a.a.createElement("div",{id:"top"}),a.a.createElement("div",{className:"profile-header"},a.a.createElement("div",{className:"profile-picture",style:{backgroundImage:"url(".concat(e.displayPic,")")}}),a.a.createElement("div",{className:"profile-info"},a.a.createElement("h1",null,e.username),a.a.createElement("h2",null,e.description))),a.a.createElement("h3",{className:"profile-posts-title",id:"profile-posts"},"Posts"),a.a.createElement(R,{data:t}),t.length>0&&a.a.createElement(I,{loadMore:r}))}}]),t}(n.Component));function U(e){var t=Object(f.f)().id,r=e.data,n=e.loadMore,o=r.filter(function(e){return e.user===t}),i=F(t);return a.a.createElement(V,{key:i.username,user:i,posts:o,loadMore:n})}var W=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.likes,t=this.props.data.filter(function(t){return e.includes(t.id)});return a.a.createElement("div",{className:"saved-body"},a.a.createElement(R,{data:t}))}}]),t}(n.Component),q=r(23),K=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={dropdown:!1},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleDropdown",value:function(e){this.setState({dropdown:e})}},{key:"componentDidMount",value:function(){this.props.search(""),this.setState({dropdown:!1})}},{key:"render",value:function(){var e=this,t=this.props,r=t.search,n=t.data,o=t.result,i=new Set(n.map(function(e){return e.date}));return a.a.createElement("header",{id:"app-header"},a.a.createElement("div",{className:"search-header"},a.a.createElement("button",{className:"search-bar",onClick:function(){return e.toggleDropdown(!e.state.dropdown)}},!1===this.state.dropdown?"Search Posts by Date":"Click to Close Menu"),!0===this.state.dropdown&&a.a.createElement("div",{className:"search-dropdown-menu"},""!==o&&a.a.createElement("button",{className:"search-dropdown-item",onClick:function(){r(""),e.toggleDropdown(!1)}},a.a.createElement("p",null,"- Clear Search -")),Object(q.a)(i).map(function(t){return a.a.createElement("button",{className:"search-dropdown-item",onClick:function(){r(t),e.toggleDropdown(!1)}},a.a.createElement("p",null,t))}))))}}]),t}(n.Component);function Q(){Q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:k(e,r,c)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var p={};function h(){}function d(){}function f(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=f.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(p).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(s.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function k(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function w(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=f,n(g,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),s(g,c,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var X=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={data:[],likes:[],search:"",earliestDate:0},r.loadMorePosts=Object(s.a)(Q().mark(function e(){var t,n,a,o;return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 9,t=N(1,r.state.earliestDate),n=N(8,t),e.next=5,C(n,t);case 5:a=e.sent,o=r.state.data.concat(a),console.log(n,t),r.setState({data:o,earliestDate:n}),localStorage.setItem("posts",r.state.data);case 10:case"end":return e.stop()}},e)})),r.updateSearch=function(e){r.setState({search:e})},r.addLike=function(){var e=Object(s.a)(Q().mark(function e(t){var n;return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=r.state.likes.concat([t]),console.log(n),r.updateLikes(n);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r.unLike=function(e){var t=r.state.likes.filter(function(t){return t!==e});r.updateLikes(t)},r.updateLikes=function(e){r.setState({likes:e}),localStorage.setItem("likes",e)},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(){var e=Object(s.a)(Q().mark(function e(){var t,r;return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 9,8,t=N(8,L()),e.next=5,A(t);case 5:r=e.sent,this.setState({data:r,earliestDate:t}),v(),localStorage.setItem("posts",r);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"retrieveLikes",value:function(){var e=localStorage.getItem("likes");if(console.log("retrieve likes ",e),e){var t=e.split(",");this.setState({likes:t})}}},{key:"retrievePosts",value:function(){var e=localStorage.getItem("posts");if(e){var t=e.split(",");this.setState({data:t})}}},{key:"componentDidMount",value:function(){this.retrieveLikes(),this.getData(),m("main")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"app",id:"app"},a.a.createElement(f.c,null,a.a.createElement(f.a,{exact:!0,path:"/search",render:function(){return a.a.createElement(K,{data:e.state.data,result:e.state.search,search:e.updateSearch})}}),a.a.createElement(f.a,{path:"/",render:function(){return a.a.createElement(T,null)}})),a.a.createElement("main",{id:"main"},a.a.createElement(f.c,null,a.a.createElement(f.a,{exact:!0,path:"/",render:function(){return a.a.createElement(D,{data:e.state.data,likes:e.state.likes,addLike:e.addLike,unLike:e.unLike,loadMorePosts:e.loadMorePosts})}}),a.a.createElement(f.a,{exact:!0,path:"/search",render:function(){return a.a.createElement(Y,{data:e.state.data,search:e.state.search})}}),a.a.createElement(f.a,{exact:!0,path:"/liked",render:function(){return a.a.createElement("div",null,a.a.createElement("h5",{className:"liked-header"},"Liked Posts:"),a.a.createElement(W,{data:e.state.data,likes:e.state.likes}))}}),a.a.createElement(f.a,{exact:!0,path:"/user/:id",render:function(){return a.a.createElement(U,{data:e.state.data,loadMore:e.loadMorePosts})}}),a.a.createElement(f.a,{exact:!0,path:"/user/:id/:postid",render:function(){return a.a.createElement(H,{data:e.state.data,likes:e.state.likes,addLike:e.addLike,unLike:e.unLike})}}))),a.a.createElement(J,null))}}]),t}(n.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null,a.a.createElement(X,null))),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.e704da2f.chunk.js.map