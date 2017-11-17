webpackJsonp([20],{1148:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deleteEdit=e.putEdit=e.getEdit=e.doctorScore=e.detail=void 0;var n=r(167),u=a(n),o=r(32),c=a(o),s=r(105),i=a(s),d=(e.detail=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var a;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=h+"/"+r,t.abrupt("return",(0,f.default)(a,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 2:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.doctorScore=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var a;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=v.doctorScore+"/"+r,t.abrupt("return",(0,f.default)(a,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 2:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.getEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var a;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=T(r),t.abrupt("return",(0,f.default)(a,{headers:{"Content-Type":"application/json",Authorization:e},method:"GET"}));case 2:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.putEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var a,n;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.data,n=T(r),t.abrupt("return",(0,f.default)(n,{headers:{"Content-Type":"application/json",Authorization:e},method:"PUT",body:(0,u.default)(a)}));case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),e.deleteEdit=function(){var t=(0,i.default)(c.default.mark(function t(e,r){var a,n;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.data,n=S(r),t.abrupt("return",(0,f.default)(n,{headers:{"Content-Type":"application/json",Authorization:e},method:"DELETE",body:(0,u.default)(a)}));case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),r(169)),f=a(d),l=r(76),p=a(l),y=r(391),v=(a(y),p.default.api),h=v.doctor,b=v.doctorBasic,x=v.doctorIdentity,m=v.doctorContact,E=v.doctorOccupation,k=v.doctorEducation,w=v.doctorAcademic,_=v.doctorEnterprise,g=v.doctorFamily,j=v.doctorAssets,A=v.doctorSocial,M=v.deleteEditInfo,T=function(t){var e=t.id,r=t.type,a="/"+e;return"basic"===r?a=b+a:"identity"===r?a=x+a:"contact"===r?a=m+a:"occupation"===r?a=E+a:"education"===r?a=k+a:"academic"===r?a=w+a:"family"===r?a=g+a:"assets"===r?a=j+a:"enterprise"===r?a=_+a:"social"===r&&(a=A+a),a},S=function(t){var e=t.id,r=t.type,a=t.rId;return M+"/"+e+"/"+r+"/"+a}},797:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(15),u=a(n),o=r(159),c=a(o),s=r(32),i=a(s),d=r(897),f=a(d),l=r(947),p=r(1148),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(p),v=r(391),h=(a(v),r(161)),b=a(h),x=(r(31),r(160)),m=a(x);e.default=(0,f.default)(l.model,{namespace:"doctor",state:{},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){var r=t.pathname;if(t.search,r.startsWith("/doctor/detail/")){var a=(0,b.default)("/doctor/detail/:id").exec(r);a&&e({type:"detail",payload:a[1]})}else if(r.startsWith("/doctor/edit/")){var n=(0,b.default)("/doctor/edit/:type/:id").exec(r);n&&(e({type:"account/getEdit",payload:n[2]}),e({type:"getEdit",payload:{id:n[2],type:n[1]}}),e({type:"getDataScore",payload:n[2]}),e({type:"roleAll/fetch",payload:1}))}})}},effects:{detail:i.default.mark(function t(e,r){var a,n,u,o=e.payload,c=r.call,s=r.put,d=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(function(t){return t.user.token});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,c(y.detail,a,o);case 7:return n=t.sent,u=n.data,t.next=11,s({type:"save",payload:{detail:u}});case 11:case"end":return t.stop()}},t,this)}),getEdit:i.default.mark(function t(e,r){var a,n,u,o=e.payload,s=r.call,d=r.put,f=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(function(t){return t.user.token});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,s(y.getEdit,a,o);case 7:return n=t.sent,u=n.data,t.next=11,d({type:"save",payload:(0,c.default)({},o.type,u)});case 11:case"end":return t.stop()}},t,this)}),putEdit:i.default.mark(function t(e,r){var a,n=e.payload,u=r.call,o=(r.put,r.select);return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.user.token});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,u(y.putEdit,a,n);case 7:case"end":return t.stop()}},t,this)}),deleteEdit:i.default.mark(function t(e,r){var a,n=e.payload,u=r.call,o=(r.put,r.select);return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.user.token});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,u(y.deleteEdit,a,n);case 7:case"end":return t.stop()}},t,this)}),getDataScore:i.default.mark(function t(e,r){var a,n,o,c=e.payload,s=r.call,d=r.put,f=r.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(function(t){return t.user.token});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(!m.default.isEmpty(c)){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,s(y.doctorScore,a,c);case 9:return n=t.sent,o=n.data,t.next=13,d({type:"save",payload:(0,u.default)({},o)});case 13:case"end":return t.stop()}},t,this)})},reducers:{}}),t.exports=e.default},897:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(){for(var t={state:{},subscriptions:{},effects:{},reducers:{}},e=[],r={},a=[],n={},u=[],c={},f=[],l={},p=arguments.length,y=Array(p),v=0;v<p;v++)y[v]=arguments[v];var h=y.reduce(function(t,d){return t.namespace=d.namespace,"object"!==(0,s.default)(d.state)||Array.isArray(d.state)?"state"in d&&(t.state=d.state):(i(d.state,e,r),(0,o.default)(t.state,d.state)),i(d.subscriptions,a,n),(0,o.default)(t.subscriptions,d.subscriptions),i(d.effects,u,c),(0,o.default)(t.effects,d.effects),i(d.reducers,f,l),(0,o.default)(t.reducers,d.reducers),t},t);return d(h,"state",r),d(h,"subscriptions",n),d(h,"effects",c),d(h,"reducers",l),h}Object.defineProperty(e,"__esModule",{value:!0});var u=r(402),o=a(u),c=r(51),s=a(c);e.default=n;var i=function(t,e,r){},d=function(t,e,r){}},947:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.pageModel=e.model=void 0;var n=r(15),u=a(n),o=r(897),c=a(o),s={reducers:{save:function(t,e){var r=e.payload;return(0,u.default)({},t,r)},clear:function(){return{}}}},i=(0,c.default)(s,{state:{list:[],pagination:{current:1,total:0}},reducers:{querySuccess:function(t,e){var r=e.payload,a=r.list,n=r.pagination;return(0,u.default)({},t,{list:a,pagination:(0,u.default)({},t.pagination,n)})}}});e.model=s,e.pageModel=i}});