"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[991],{7991:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var o=n(2791),r="Section_container__JEbOT",a=n(3329);var s=function(e){var t=e.title,n=e.children;return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("h2",{children:t}),n]})},i=n(885),c=n(4942),u=n(1413);function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=n(2982);function f(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function m(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o}var p=["theme","type"],v=["delay","staleId"];function g(e){return"number"==typeof e&&!isNaN(e)}function h(e){return"boolean"==typeof e}function y(e){return"string"==typeof e}function T(e){return"function"==typeof e}function E(e){return y(e)||T(e)?e:null}function b(e){return 0===e||e}function _(e){return(0,o.isValidElement)(e)||y(e)||T(e)||g(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},O={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function x(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,m=a?t+"--"+s:t,p=a?n+"--"+s:n,v=(0,o.useRef)(),g=(0,o.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,o.useLayoutEffect)((function(){!function(){var e=d.current;v.current=e.className,e.className+=" "+m,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,o.useEffect)((function(){f||(c?y():function(){g.current=1;var e=d.current;e.className+=" "+p,e.addEventListener("animationend",y)}())}),[f]),o.createElement(o.Fragment,null,r)}}function I(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var L={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},N=function(e){var t=e.theme,n=e.type,r=l(e,p);return o.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))},Z={info:function(e){return o.createElement(N,(0,u.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(N,(0,u.Z)({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(N,(0,u.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(N,(0,u.Z)({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function R(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],r=(0,o.useState)([]),a=(0,i.Z)(r,2),s=a[0],c=a[1],u=(0,o.useRef)(null),f=(0,o.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},p=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return f.get(e)}}).current;function C(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function O(e){c((function(t){return b(e)?t.filter((function(t){return t!==e})):[]}))}function x(){var e=p.queue.shift();R(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var r=t.delay,a=t.staleId,s=l(t,v);if(_(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||f.has(e.toastId)&&null==e.updateId}(s)){var i=s.toastId,c=s.updateId,d=s.data,m=p.props,C=function(){return O(i)},N=null==c;N&&p.count++;var k,w,P={toastId:i,updateId:c,data:d,containerId:s.containerId,isLoading:s.isLoading,theme:s.theme||m.theme,icon:null!=s.icon?s.icon:m.icon,isIn:!1,key:s.key||p.toastKey++,type:s.type,closeToast:C,closeButton:s.closeButton,rtl:m.rtl,position:s.position||m.position,transition:s.transition||m.transition,className:E(s.className||m.toastClassName),bodyClassName:E(s.bodyClassName||m.bodyClassName),style:s.style||m.toastStyle,bodyStyle:s.bodyStyle||m.bodyStyle,onClick:s.onClick||m.onClick,pauseOnHover:h(s.pauseOnHover)?s.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:h(s.pauseOnFocusLoss)?s.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:h(s.draggable)?s.draggable:m.draggable,draggablePercent:s.draggablePercent||m.draggablePercent,draggableDirection:s.draggableDirection||m.draggableDirection,closeOnClick:h(s.closeOnClick)?s.closeOnClick:m.closeOnClick,progressClassName:E(s.progressClassName||m.progressClassName),progressStyle:s.progressStyle||m.progressStyle,autoClose:!s.isLoading&&(k=s.autoClose,w=m.autoClose,!1===k||g(k)&&k>0?k:w),hideProgressBar:h(s.hideProgressBar)?s.hideProgressBar:m.hideProgressBar,progress:s.progress,role:s.role||m.role,deleteToast:function(){var e=I(f.get(i),"removed");f.delete(i),L.emit(4,e);var t=p.queue.length;if(p.count=b(i)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var o=b(i)?1:p.props.limit;if(1===t||1===o)p.displayedToast++,x();else{var r=o>t?t:o;p.displayedToast=r;for(var a=0;a<r;a++)x()}}else n()}};P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(T(a)?s=a(i):(0,o.isValidElement)(a)?s=(0,o.cloneElement)(a,i):y(a)||g(a)?s=a:r?s=Z.spinner():function(e){return e in Z}(n)&&(s=Z[n](i))),s}(P),T(s.onOpen)&&(P.onOpen=s.onOpen),T(s.onClose)&&(P.onClose=s.onClose),P.closeButton=m.closeButton,!1===s.closeButton||_(s.closeButton)?P.closeButton=s.closeButton:!0===s.closeButton&&(P.closeButton=!_(m.closeButton)||m.closeButton);var A=e;(0,o.isValidElement)(e)&&!y(e.type)?A=(0,o.cloneElement)(e,{closeToast:C,toastProps:P,data:d}):T(e)&&(A=e({closeToast:C,toastProps:P,data:d})),m.limit&&m.limit>0&&p.count>m.limit&&N?p.queue.push({toastContent:A,toastProps:P,staleId:a}):g(r)?setTimeout((function(){R(A,P,a)}),r):R(A,P,a)}}function R(e,t,n){var o=t.toastId;n&&f.delete(n);var r={content:e,props:t};f.set(o,r),c((function(e){return[].concat((0,d.Z)(e),[o]).filter((function(e){return e!==n}))})),L.emit(4,I(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return p.containerId=e.containerId,L.cancelEmit(3).on(0,N).on(1,(function(e){return u.current&&O(e)})).on(5,C).emit(2,p),function(){return L.emit(3,p)}}),[]),(0,o.useEffect)((function(){p.props=e,p.isToastActive=m,p.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(f.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,o.useState)(!1),n=(0,i.Z)(t,2),r=n[0],a=n[1],s=(0,o.useState)(!1),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,o.useRef)(e),p=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",x),document.addEventListener("touchmove",O),document.addEventListener("touchend",x);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=k(t.nativeEvent),f.y=w(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?C():_()}}function _(){a(!0)}function C(){a(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&C(),f.x=k(t),f.y=w(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",x);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){m.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",_,{once:!0}),T(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;T(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",_),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return p&&v&&(I.onMouseEnter=C,I.onMouseLeave=_),y&&(I.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:_,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:I}}function A(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,s=e.hide,i=e.className,l=e.style,d=e.controlledProgress,f=e.progress,p=e.rtl,v=e.isIn,g=e.theme,h=(0,u.Z)((0,u.Z)({},l),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});d&&(h.transform="scaleX("+f+")");var y=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+a,{"Toastify__progress-bar--rtl":p}),E=T(i)?i({rtl:p,type:a,defaultClassName:y}):m(y,i);return o.createElement("div",(0,c.Z)({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:E,style:h},d&&f>=1?"onTransitionEnd":"onAnimationEnd",d&&f<1?null:function(){v&&r()}))}F.defaultProps={type:O.DEFAULT,hide:!1};var j=function(e){var t=P(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,v=e.closeToast,g=e.transition,h=e.position,y=e.className,E=e.style,b=e.bodyClassName,_=e.bodyStyle,C=e.progressClassName,O=e.progressStyle,x=e.updateId,I=e.role,L=e.progress,N=e.rtl,Z=e.toastId,R=e.deleteToast,k=e.isIn,w=e.isLoading,j=e.iconOut,B=e.theme,D=m("Toastify__toast","Toastify__toast-theme--"+B,"Toastify__toast--"+f,{"Toastify__toast--rtl":N}),M=T(y)?y({rtl:N,position:h,type:f,defaultClassName:D}):m(D,y),S=!!L,z={closeToast:v,type:f,theme:B},H=null;return!1===i||(H=T(i)?i(z):o.isValidElement(i)?o.cloneElement(i,z):A(z)),o.createElement(g,{isIn:k,done:R,position:h,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,u.Z)((0,u.Z)({id:Z,onClick:d,className:M},s),{},{style:E,ref:a}),o.createElement("div",(0,u.Z)((0,u.Z)({},k&&{role:I}),{},{className:T(b)?b({type:f}):m("Toastify__toast-body",b),style:_}),null!=j&&o.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!w})},j),o.createElement("div",null,c)),H,(l||S)&&o.createElement(F,(0,u.Z)((0,u.Z)({},x&&!S?{key:"pb-"+x}:{}),{},{rtl:N,theme:B,delay:l,isRunning:n,isIn:k,closeToast:v,hide:p,type:f,style:O,className:C,controlledProgress:S,progress:L}))))},B=x({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),D=(x({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),x({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),x({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,o.forwardRef)((function(e,t){var n=R(e),r=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=e.className,c=e.style,l=e.rtl,d=e.containerId;function f(e){var t=m("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":l});return T(i)?i({position:e,rtl:l,defaultClassName:t}):m(t,E(i))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:d},r((function(e,t){var n=t.length?(0,u.Z)({},c):(0,u.Z)((0,u.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(j,(0,u.Z)((0,u.Z)({},a),{},{isIn:s(a.toastId),style:(0,u.Z)((0,u.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:C.TOP_RIGHT,transition:B,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,S=new Map,z=[];function H(){return Math.random().toString(36).substring(2,9)}function q(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:H()}function Q(e,t){return S.size>0?L.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function U(e,t){return(0,u.Z)((0,u.Z)({},t),{},{type:t&&t.type||e,toastId:q(t)})}function V(e){return function(t,n){return Q(t,U(e,n))}}function G(e,t){return Q(e,U(O.DEFAULT,t))}G.loading=function(e,t){return Q(e,U(O.DEFAULT,(0,u.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=y(r)?G.loading(r,n):G.loading(r.render,(0,u.Z)((0,u.Z)({},n),r)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=(0,u.Z)((0,u.Z)((0,u.Z)({type:e},i),n),{},{data:r}),s=y(t)?{render:t}:t;return o?G.update(o,(0,u.Z)((0,u.Z)({},a),s)):G(s.render,(0,u.Z)((0,u.Z)({},a),s)),r}G.dismiss(o)},l=T(e)?e():e;return l.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),l},G.success=V(O.SUCCESS),G.info=V(O.INFO),G.error=V(O.ERROR),G.warning=V(O.WARNING),G.warn=G.warning,G.dark=function(e,t){return Q(e,U(O.DEFAULT,(0,u.Z)({theme:"dark"},t)))},G.dismiss=function(e){return L.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),L.emit(5,e)},G.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||M);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=(0,u.Z)((0,u.Z)((0,u.Z)({},o),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,Q(s,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return L.on(4,e),function(){L.off(4,e)}},G.POSITION=C,G.TYPE=O,L.on(2,(function(e){M=e.containerId||e,S.set(M,e),z.forEach((function(e){L.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&L.off(0).off(1).off(5)}));var W=n(9434),Y=n(5036),X=n(9652);function K(){var e=(0,W.I0)(),t=(0,W.v9)((function(e){return e.contacts.entities})),n=(0,W.v9)((function(e){return e.contacts.filter})),o=function(e){return e.toLowerCase().trim()};return{dispatch:e,contacts:t,filter:n,isContactExists:function(e){return t.find((function(t){return o(t.name)===o(e.name)}))},transformValue:o,addContact:function(t){return e((0,Y.md)(t))},deleteContact:function(t){return e((0,Y.us)(t))},setFilter:function(t){return e((0,X.W)(t))}}}var J="ContactForm_form__gYQXO",$="ContactForm_name__6-DaA",ee="ContactForm_submit__Wdl6U";var te=function(){var e=(0,o.useState)(""),t=(0,i.Z)(e,2),n=t[0],r=t[1],s=(0,o.useState)(""),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=K(),f=d.addContact,m=d.isContactExists,p=function(e){"name"===e.currentTarget.name&&r(e.currentTarget.value),"number"===e.currentTarget.name&&l(e.currentTarget.value)},v=function(){r(""),l("")};return(0,a.jsxs)("form",{className:J,onSubmit:function(e){e.preventDefault();var t={name:n,number:u};if(m(t))return console.log("\u0443\u0436\u0435 \u0435\u0441\u0442\u044c, \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u044e"),void G.error("".concat(t.name," is already in contacts."));try{console.log("\u043d\u043e\u0432\u044b\u0439, \u0441\u043e\u0437\u0434\u0430\u044e"),f(t),G.success("New contact is added")}catch(o){G.error("Something went wrong"),console.log(o)}v()},children:[(0,a.jsxs)("label",{className:$,children:["Name",(0,a.jsx)("input",{type:"text",placeholder:"Enter some name",name:"name",value:n,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,a.jsxs)("label",{children:["Number",(0,a.jsx)("input",{type:"tel",placeholder:"Enter phone number",name:"number",value:u,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,a.jsx)("button",{className:ee,type:"submit",children:"Add contact"}),(0,a.jsx)(D,{})]})},ne="Filter_Filter_input__jTn16";var oe=function(){var e=K(),t=e.filter,n=e.setFilter;return(0,a.jsx)("form",{children:(0,a.jsxs)("label",{children:["Find contacts by name",(0,a.jsx)("input",{className:ne,type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Enter something to start searching"})]})})},re="ContactList_list__K6+Fs",ae="ContactList_contact__GO1QH",se="ContactList_delete__v4O9m";var ie=function(e){var t=e.id,n=e.name,o=e.number,r=K().deleteContact;return(0,a.jsxs)("li",{className:ae,children:[(0,a.jsx)("p",{children:n}),": ",(0,a.jsx)("span",{children:o}),(0,a.jsx)("button",{className:se,type:"button",onClick:function(){return function(e){r(e),G("".concat(n," is deleted from your list"))}(t)},children:"Delete"}),(0,a.jsx)(D,{})]})};var ce=function(e){var t=e.filteredContacts,n=K().contacts;return(0,a.jsx)("ul",{className:re,children:n&&t.map((function(e){var t=e.id,n=e.name,o=e.number;return(0,a.jsx)(ie,{id:t,name:n,number:o},t)}))})};var ue=function(){var e=K(),t=e.contacts,n=e.filter,r=e.transformValue,i=e.dispatch,c=(0,o.useMemo)((function(){return null===t||void 0===t?void 0:t.filter((function(e){var t;return null!==(t=r(e.name).includes(r(n)))&&void 0!==t?t:[]}))}),[t,r,n]);return(0,o.useEffect)((function(){i((0,Y.Y2)())}),[i]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{title:"Phonebook",children:(0,a.jsx)(te,{})}),(0,a.jsxs)(s,{title:"Contacts",children:[(0,a.jsx)(oe,{}),(0,a.jsx)(ce,{filteredContacts:c})]})]})}}}]);
//# sourceMappingURL=991.96cf8756.chunk.js.map