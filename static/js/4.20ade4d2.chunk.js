(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{288:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},289:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),s=r.n(a),o=r(22),i=r(101),l=r(82),c=r(12),u=r(288),f=r(13),d=r.p+"static/media/User.81251c2b.png",p=r(27),b=r(36),h=r(88),g=r(89),j=r.n(g),v=r(91);var m=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)};function y(e){return!e||"#"===e.trim()}var O=s.a.forwardRef((function(e,t){var r=e.as,n=void 0===r?"a":r,a=e.disabled,o=e.onKeyDown,i=Object(h.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=i.href,r=i.onClick;(a||y(t))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)};return y(i.href)&&(i.role=i.role||"button",i.href=i.href||"#"),a&&(i.tabIndex=-1,i["aria-disabled"]=!0),s.a.createElement(n,Object(b.a)({ref:t},i,{onClick:l,onKeyDown:m((function(e){" "===e.key&&(e.preventDefault(),l(e))}),o)}))}));O.displayName="SafeAnchor";var w=O,x=s.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,a=e.size,o=e.active,i=e.className,l=e.block,c=e.type,u=e.as,f=Object(h.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),d=Object(v.a)(r,"btn"),p=j()(i,d,o&&"active",n&&d+"-"+n,l&&d+"-block",a&&d+"-"+a);if(f.href)return s.a.createElement(w,Object(b.a)({},f,{as:u,ref:t,className:j()(p,f.disabled&&"disabled")}));t&&(f.ref=t),c?f.type=c:u||(f.type="button");var g=u||"button";return s.a.createElement(g,Object(b.a)({},f,{className:p}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1};var P=x;function C(){const e=Object(c.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n"]);return C=function(){return e},e}const S=({user:e,followingInProgress:t,follow:r,unfollow:s})=>{const o=Object(a.useState)(!1),i=Object(u.a)(o,2),l=i[0],c=i[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(p.b,{to:"/profile/"+e.id,children:Object(n.jsx)(N,{src:null!=e.photos.small?e.photos.small:d,alt:"Avatar"})})}),Object(n.jsx)("div",{children:e.followed?Object(n.jsx)(P,{variant:"primary",onClick:l?null:()=>{c(!0)},disabled:t.some((t=>t===e.id)),onClick:()=>{s(e.id)},children:l?"Loading\u2026":"Unfollow"}):Object(n.jsx)(P,{variant:"light",disabled:t.some((t=>t===e.id)),onClick:()=>{r(e.id)},children:"Follow"})}),Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:e.status}),Object(n.jsx)("div",{children:"user.location.country"}),Object(n.jsx)("div",{children:"user.location.city"})]})},N=f.a.img(C());var k=s.a.forwardRef((function(e,t){var r=e.active,n=e.disabled,a=e.className,o=e.style,i=e.activeLabel,l=e.children,c=Object(h.a)(e,["active","disabled","className","style","activeLabel","children"]),u=r||n?"span":w;return s.a.createElement("li",{ref:t,style:o,className:j()(a,"page-item",{active:r,disabled:n})},s.a.createElement(u,Object(b.a)({className:"page-link",disabled:n},c),l,r&&i&&s.a.createElement("span",{className:"sr-only"},i)))}));k.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},k.displayName="PageItem";var E=k;function I(e,t,r){function n(e){var n=e.children,a=Object(h.a)(e,["children"]);return s.a.createElement(k,a,s.a.createElement("span",{"aria-hidden":"true"},n||t),s.a.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),n.displayName=e,n}var z=I("First","\xab"),A=I("Prev","\u2039","Previous"),U=I("Ellipsis","\u2026","More"),F=I("Next","\u203a"),L=I("Last","\xbb"),D=s.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.children,o=e.size,i=Object(h.a)(e,["bsPrefix","className","children","size"]),l=Object(v.a)(r,"pagination");return s.a.createElement("ul",Object(b.a)({ref:t},i,{className:j()(n,l,o&&l+"-"+o)}),a)}));D.First=z,D.Prev=A,D.Ellipsis=U,D.Item=E,D.Next=F,D.Last=L;var M=D;const R=({onPageChanged:e,totalUsersCount:t,pageSize:r,portionSize:s=6})=>{const o=Math.ceil(t/r),i=Math.ceil(o/s),l=Object(a.useState)(1),c=Object(u.a)(l,2),f=c[0],d=c[1],p=(f-1)*s+1,b=f*s,h=[];for(let n=1;n<=o;n++)h.push(n);return Object(n.jsx)("div",{children:Object(n.jsxs)(M,{children:[f>2?Object(n.jsx)(M.First,{onClick:()=>{d(f-2)}}):null,f>1?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M.Prev,{onClick:()=>{d(f-1)}}),Object(n.jsx)(M.Ellipsis,{})]}):null,h.filter((e=>e>=p&&e<=b)).map((t=>Object(n.jsx)(M.Item,{onClick:r=>{e(t)},children:t},t))),i>f?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M.Ellipsis,{}),Object(n.jsx)(M.Next,{onClick:()=>{d(f+1)}})]}):null,i>f+1?Object(n.jsx)(M.Last,{onClick:()=>{d(f+2)}}):null]})})},q=e=>{let t=e.currentPage,r=e.onPageChanged,a=e.totalUsersCount,s=e.pageSize,o=e.users,i=e.followingInProgress,c=e.follow,u=e.unfollow;Object(l.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users","followingInProgress","follow","unfollow"]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{onPageChanged:r,totalUsersCount:a,pageSize:s,currentPage:t}),Object(n.jsx)("div",{children:o.map((e=>Object(n.jsx)(S,{user:e,followingInProgress:i,follow:c,unfollow:u},e.id)))})]})};var K=r(58),J=r(10);function T(e,t){return e===t}function B(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,a=0;a<n;a++)if(!e(t[a],r[a]))return!1;return!0}function $(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}var G=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];var s=0,o=n.pop(),i=$(n),l=e.apply(void 0,[function(){return s++,o.apply(null,arguments)}].concat(r)),c=e((function(){for(var e=[],t=i.length,r=0;r<t;r++)e.push(i[r].apply(null,arguments));return l.apply(null,e)}));return c.resultFunc=o,c.dependencies=i,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T,r=null,n=null;return function(){return B(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));const H=G((e=>e.usersPage.users),(e=>e.filter((e=>!0)))),Q=e=>e.usersPage.pageSize,V=e=>e.usersPage.totalUsersCount,W=e=>e.usersPage.currentPage,X=e=>e.usersPage.isFetching,Y=e=>e.usersPage.followingInProgress;class Z extends s.a.Component{constructor(...e){super(...e),this.onPageChanged=e=>{const t=this.props.pageSize;this.props.requestUsers(e,t)}}componentDidMount(){const e=this.props,t=e.currentPage,r=e.pageSize;this.props.requestUsers(t,r)}render(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:this.props.isFetching?Object(n.jsx)(K.a,{}):null}),Object(n.jsx)(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,currentPage:this.props.currentPage})]})}}const _=Object(J.d)(Object(o.b)((e=>({users:H(e),pageSize:Q(e),totalUsersCount:V(e),currentPage:W(e),isFetching:X(e),followingInProgress:Y(e)})),{follow:i.a,unfollow:i.d,toggleFollowingProgress:i.c,requestUsers:i.b}))(Z);t.default=_}}]);
//# sourceMappingURL=4.20ade4d2.chunk.js.map