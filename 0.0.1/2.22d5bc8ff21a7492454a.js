webpackJsonp([2],{1101:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.pageModel=t.model=void 0;var a=r(15),u=n(a),s=r(981),c=n(s),o={reducers:{save:function(e,t){var r=t.payload;return(0,u.default)({},e,r)},clear:function(){return{}}}},i=(0,c.default)(o,{state:{list:[],pagination:{current:1,total:0}},reducers:{querySuccess:function(e,t){var r=t.payload,n=r.list,a=r.pagination;return(0,u.default)({},e,{list:n,pagination:(0,u.default)({},e.pagination,a)})}}});t.model=o,t.pageModel=i},1198:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.putEdit=t.getEdit=t.create=t.multiRemove=t.remove=t.fetch=void 0;var a=r(15),u=n(a),s=r(168),c=n(s),o=r(31),i=n(o),f=r(105),l=n(f),d=(t.fetch=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"?"+x.default.stringify(r),e.abrupt("return",(0,p.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"GET"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/"+r,e.abrupt("return",(0,p.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"DELETE"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.multiRemove=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"?"+x.default.stringify(r),e.abrupt("return",(0,p.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"DELETE"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.create=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b,e.abrupt("return",(0,p.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"POST",body:(0,c.default)(r)}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.getEdit=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/"+r,e.abrupt("return",(0,p.default)(n,{headers:{"Content-Type":"application/json",Authorization:t},method:"GET"}));case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),t.putEdit=function(){var e=(0,l.default)(i.default.mark(function e(t,r){var n,a,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.accountId,a=r.data,a=(0,u.default)({},a,{roles:[{id:parseInt(a.roles)}]}),s=b+"/"+n,e.abrupt("return",(0,p.default)(s,{headers:{"Content-Type":"application/json",Authorization:t},method:"PUT",body:(0,c.default)(a)}));case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r(170)),p=n(d),h=r(75),v=n(h),y=r(391),x=n(y),m=v.default.api,b=m.account},423:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(31),u=n(a),s=r(981),c=n(s),o=r(1101),i=r(1198),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i),l=r(391),d=n(l),p=r(38),h=r(161),v=n(h);t.default=(0,c.default)(o.pageModel,{namespace:"account",state:{selectedRowKeys:[]},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var r=e.pathname,n=e.search;if("/account/list"===r){var a=d.default.parse(n);t({type:"fetch",payload:a})}})}},effects:{fetch:u.default.mark(function e(t,r){var n,a,s,c,o,i,l,d,p,h,y,x,m=t.payload,b=r.call,w=r.put,g=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v.default.isEmpty(m)&&(m={currentPage:1,pageSize:20}),e.next=3,g(function(e){return e.user.token});case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,b(f.fetch,n,m);case 8:if(a=e.sent,s=a.data,c=s||{},o=c.list,i=c.total,l=c.hasNextPage,d=c.nextPage,p=c.pages,1==m.currentPage){e.next=18;break}return e.next=14,g(function(e){return e.account});case 14:h=e.sent,y=h.list,x=void 0===y?[]:y,o=x.concat(o);case 18:return e.next=20,w({type:"save",payload:{list:o,pagination:{current:Number(m.currentPage)||1,pageSize:Number(m.pageSize)||10,total:i,hasNextPage:l,nextPage:d,pages:p}}});case 20:case"end":return e.stop()}},e,this)}),delete:u.default.mark(function e(t,r){var n,a,s,c,o,i=t.payload,l=r.call,p=r.put,h=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l(f.remove,n,i);case 7:return e.next=9,h(function(e){return e.account});case 9:return a=e.sent,s=a.selectedRowKeys,e.next=13,p({type:"save",payload:{selectedRowKeys:s.filter(function(e){return e!==i})}});case 13:return e.next=15,h(function(e){return e.routing.location});case 15:return c=e.sent,o=c.search,e.next=19,p({type:"fetch",payload:d.default.parse(o)});case 19:case"end":return e.stop()}},e,this)}),multiDelete:u.default.mark(function e(t,r){var n,a,s,c=t.payload,o=r.call,i=r.put;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,select(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,o(f.multiRemove,c);case 7:return e.next=9,i({type:"save",payload:{selectedRowKeys:[]}});case 9:return e.next=11,select(function(e){return e.routing.location});case 11:return a=e.sent,s=a.search,e.next=15,i({type:"fetch",payload:d.default.parse(s)});case 15:case"end":return e.stop()}},e,this)}),create:u.default.mark(function e(t,r){var n,a,s,c,o=r.call,i=r.put,l=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return a=t.payload,e.next=8,o(f.create,n,a);case 8:return s=e.sent,c=s.data,e.next=12,i(p.routerRedux.push({pathname:"/doctor/edit/basic/"+c}));case 12:case"end":return e.stop()}},e,this)}),getEdit:u.default.mark(function e(t,r){var n,a,s,c=t.payload,o=r.call,i=r.put,l=r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,o(f.getEdit,n,c);case 7:return a=e.sent,s=a.data,e.next=11,i({type:"save",payload:{edit:s}});case 11:case"end":return e.stop()}},e,this)}),putEdit:u.default.mark(function e(t,r){var n,a=t.payload,s=r.call,c=(r.put,r.select);return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(function(e){return e.user.token});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,s(f.putEdit,n,a);case 7:case"end":return e.stop()}},e,this)})},reducers:{}}),e.exports=t.default},981:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=[],r={},n=[],a={},u=[],c={},l=[],d={},p=arguments.length,h=Array(p),v=0;v<p;v++)h[v]=arguments[v];var y=h.reduce(function(e,f){return e.namespace=f.namespace,"object"!==(0,o.default)(f.state)||Array.isArray(f.state)?"state"in f&&(e.state=f.state):(i(f.state,t,r),(0,s.default)(e.state,f.state)),i(f.subscriptions,n,a),(0,s.default)(e.subscriptions,f.subscriptions),i(f.effects,u,c),(0,s.default)(e.effects,f.effects),i(f.reducers,l,d),(0,s.default)(e.reducers,f.reducers),e},e);return f(y,"state",r),f(y,"subscriptions",a),f(y,"effects",c),f(y,"reducers",d),y}Object.defineProperty(t,"__esModule",{value:!0});var u=r(404),s=n(u),c=r(52),o=n(c);t.default=a;var i=function(e,t,r){},f=function(e,t,r){}}});