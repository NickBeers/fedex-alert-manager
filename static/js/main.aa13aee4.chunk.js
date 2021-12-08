(this.webpackJsonpfedex_alert_management=this.webpackJsonpfedex_alert_management||[]).push([[0],{193:function(e,t,a){},199:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(37),c=a.n(r),s=a(86),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,308)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))},A=(a(193),a(49)),o=a(50),d=a(75),h=a(74),j=a(8),u=a(20),b=a(5),g=a(33),x=a(304),O=a(299),m=a(294),f=a(305),p=a(303),C=a(302),w=a(290),E=a(70),S=a(154),N=a.n(S),U=a(100),v=a.n(U),B=a(155),y=a.n(B),Q=a(297),Y=a(163),R=a(156),G=a.n(R),L=a(157),J=a.n(L),k=a(293),D=a(298),F=a(18),I=a(144),V=a(26),M=(a(199),a(2)),Z=[{field:"title",headerName:"Title",width:275},{field:"location",headerName:"Location",width:150},{field:"timestamp",headerName:"Timestamp",width:150},{field:"critical",headerName:"Critical",type:"boolean",width:100},{field:"body",headerName:"Body",sortable:!1,width:500}];function T(){var e=Object(V.b)((function(e){return e.alerts}));return console.log(e),Object(M.jsxs)("div",{className:"history-container",children:[Object(M.jsx)("div",{className:"history-header",children:Object(M.jsx)("h3",{children:"Historic Alerts"})}),Object(M.jsx)(I.a,{rows:e.filter((function(e){return e.resolved})),columns:Z,pageSize:100,bulkActionButtons:!1,rowsPerPageOptions:[100],disableSelectionOnClick:!0})]})}a(204);var K=function(){return Object(M.jsx)("div",{className:"history",children:Object(M.jsx)(T,{})})},W=function(){return Object(M.jsx)("section",{className:"history",children:Object(M.jsx)(K,{})})},P=(a(205),a(291)),z=a(292),q=a(39),X=a(57),H=a(296),_=Object(X.b)({name:"alert",initialState:{},reducers:{alertAdded:function(e,t){e.id=Object(H.a)(),e.title=t.payload.title,e.body=t.payload.body,e.critical=t.payload.critical,e.location=t.payload.location,e.timestamp=(new Date).toString(),e.alertClass=t.payload.alertClass,e.resolved=!1},alertResolved:function(e,t){e.resolved=!0}}}),$=_.reducer,ee=_.actions,te=(ee.alertAdded,ee.alertResolved,Object(X.b)({name:"alerts",initialState:[],reducers:{alertAdded:function(e,t){e.push({id:Object(H.a)(),title:t.payload.title,body:t.payload.body,critical:t.payload.critical,location:t.payload.location,timestamp:(new Date).toString(),alertClass:t.payload.alertClass,resolved:!1})},alertDeleted:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));a>-1&&e.splice(a,1)},alertResolved:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].resolved=!0}}})),ae=te.reducer,ie=te.actions,ne=ie.alertAdded,re=(ie.alertDeleted,ie.alertResolved),ce=Object(X.b)({name:"ui",initialState:{index:-1,filter:"all",search:""},reducers:{alertSelected:function(e,t){e.index=t.payload.index,e.id=t.payload.id,e.title=t.payload.title,e.body=t.payload.body,e.critical=t.payload.critical,e.location=t.payload.location,e.timestamp=t.payload.timestamp,e.alertClass=t.payload.alertClass,e.resolved=t.payload.resolved},alertFilter:function(e,t){e.filter=t.payload.filter},alertSearch:function(e,t){e.search=t.payload.search}}}),se=ce.reducer,le=ce.actions,Ae=le.alertSelected,oe=le.alertFilter,de=le.alertSearch,he=Object(X.a)({reducer:Object(q.b)({alert:$,alerts:ae,ui:se}),preloadedState:localStorage["alerts2-store"]?JSON.parse(localStorage["alerts2-store"]):{}});he.subscribe((function(){localStorage["alerts2-store"]=JSON.stringify(he.getState())}));var je=he,ue=a(98),be=a(99),ge=a.n(be),xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAkxJREFUWEfdV+E1BEEMTjqgAlSADuiACugAFWRTgesAFaACOqADOqCDeHNvZ182l5nJ7rr3PH6eueTLl+9Lcgh/7A+3iUdELgFAEPEhmmdrgBIYZr5LQIjoMgpqa4C6rhPNStd1oVyhRzW6ReSCme/Tm5xURHaY+Ut/j4gOEPEzfSYiV8y8IqIbRFzpd4sBWSaiWsnvLHP/D1DfqpFeoix5ulrMkAeIiE4R8VUD064rtSt9vhiQiOwz80dOosVrmbKgiGgXEb9nizq5BwDO1Hw5B4C95Jha1cb+G+3VcyrEkGWhpBHPxvZtyZUZVBNQnhlRoXptaDGkp3kV0NwZUwPlxQy1TEROmPnFTNsN95Rs71naEfUwvXOeIkO2klYrnGQj8F6B4Tlkv1yzckQfJf2FAc3d1N5SbZmhussKW/oMEZ9bgfP/RSTNqcfo+yKg0qzx1kAkmRcvJ88dqJ4fJYtHDysPpNViJNbaZSJyxMxvah/dAMC93TNeUlWte6bqQqcAumbm29o+StUCwCEAPGSgEQZmAWq5yupBnaqj4WkZsAKfwtDwC6HfK6OzoMRECWgvg9FZ0k/05u7MGvKO8mNEfPc0pisttLJ65NdcOiAWkZGOdEV6PhHROSI+1YI6R9tQXGtkjCi0+yjS81KCHIuIwmBSrI2e9lfhTv4N1arIa1nrO6GWzQlSE/WceC5Dlc28voX1MRWZQ1OBNW3Yu8ydN3bCL9FcBr4U0GDviPsibEUBjYbcbzBRAhcClNtmd1mk4qlvwoCmBp77/geo9tc0CY50UgAAAABJRU5ErkJggg==",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAYZJREFUWEftmN1VBCEMhUkH2oGlaAeWsFYSUoluBZagnWgHbgfx4JE5LAL5gfFp5hXmzsdNyAQgLHiY+S6EcAGAy6wczAgw84mInksNRDwBwNmr6wJqgdQAXjATkOSINK5xTQVk/ZB1fgk6BOqFRhsOD1gTSJMjaVV7gF0BMfM9Eb2Ndo1n1Vmv8+4DALznORtQqiVE9JEHpNWvBEPEDWoDijGyp554wFrvxBh/WLpAWqeEcFwVyVFudoHSgGfVI7BW/ckpkSMzBLKsulfstCXDBOQFszjsAtKCWUCy5hSQJU+ksrEUSOuY5me6xKH6Q7WoBmQXh3qiB9ARMksOpLlHUkuO7eoQIt5aD3xeIGa+IaKv37D3+6HcCkjOzNahsin8037U/bT2X+RJ6von3GxhkzAzPxLRq7WV1YbM1OSXENY2QgKy6JkPiq1Q9oAsINmQJUfpGsgDYgKS+h8ieklzEPFp9npG5VC9/TVHbcsuLfVdQJJj/35h1XAsXekFAPjUFtPevG8HNzFD2mbQpwAAAABJRU5ErkJggg==",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAflJREFUWEftl+1Nw0AMhu0NYAPYgBHoBmWDbgBM4HgC2AAxATABjMAGdAPYwChSUt1d7Lv3In60Ev1Xxbl7/P2G6ch+fGQ8dPpAZnZGRFeq+l6LrojcMPNrbwbgCI0gqvrde8FoLyKXzLxH3oWAzOxWVR+RAyMbEdkx83PrjCbQMAxWuWRDRPvZeySdwzBU76w+9GBEZMPMHy1Px+dmtlPVp9K2BhUCBTDnzPyDwMw2Ue1FUC6Q51l0gJldqOpXq3hLB6MuXAClF8xe1kJcXtRjKyKLiC+AHE+qaeoB8tJXOlAFQlq1B2gq9Ot0qJZRyoDMbKuqL0iqEptsLLTaenwvdaLs2gyo19vy8Ol/92xLnQiB0Hmzxgkzy9KGAkEzZyXQYVSUUQ0j1KqF3oHnTOtD7UERqgzCcOsjXek1AwQUSYZo2YrIPTNDiqCMLgrkLtG/2HGrijpq4XRWeaMfWby1RigHY9iOyEWoTTEYt8z8Nr9bAmUFi84iFMTTSF27bJIU0DxCoFYtV+Ql5HLPxlESC/EfCbQ7VX1ID20NyhakA+OK/tOQsJG0mGoK+pyZCjiTM4is6ZYKaWrGLiSiz1n4j/KXiMbFGX7VtlLfBPJatVUv3nN0tUBAE1QmGXqgeiY6DJQClFI3iEiWTtSBVUDo4Wvs/oFaUfsFK1CMNLxC9bsAAAAASUVORK5CYII=",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAidJREFUWEftl+1NxDAMhuMNYAJgA9gANoAJ4CbgmMD1BLABMAEwAWwAGwATwAZGqZoqceLYx4d0SHc/e2/dp6/jj0JYsx+sGU/YAFkZ+b8OMfNWCOGUiK7SWyLiMoTwAABv+Zszc9TdxGuaRnPKdCiCENGHZTUibgPAZ9QNw8Atfa75FpAXJnNshNKAJsdm8BZU16FWYERchBBiinaJ6FoGHYZhjMnMh5ZmJaAYkIge85vSw8S1Ij2IeAQAT6tqkl51SLrTgklBPFqPJsZzASHiAQC8aAdRutmC92jcQD13Wi5p+twlTeN1qFsZshoVh4r28VOgCwCYG6JMHTOf5RWnAJkad8qm/rEnO/JU3rH8X7NedAYAt6JzmxqzylpNUZZ0qzUgYgHOzPtE9JwDSk3+X7cxth7YGyGIeAIA90YP6qbfAiqsdsyzKq1Kt6/APSk7zye7BaN1dGZuvhQiVmdNPdSdaR3XjfcQQpzqcR3Z0aBlpTHzMRHdibNUOVWlTLG4mk+9KsqaZRG/5ZY84PKGKk2eLq3NNESsDnALKn/GDGQJvWdIOtxaymT15u1kBvJOYw+YJ5amaQJpFeCBmbp3sUutMv3Tdld001XOjQaZO6CtLy1NAipK8g+AFgAwfoVoXTyuxlEzAnly7k2XVnHW+psqMjm0JKLLaap3Z40XjJnNmEIzdu4ENC9Pnm8nD1S+LWgxWxrzQ9Hz8N/UbIAsNzcOWQ59AWQzvzT7dY7YAAAAAElFTkSuQmCC",pe=(a(206),function(e,t){switch(e){case"weather":return xe;case"timing":return me;case"volume":return Oe;case"staff":return fe}}),Ce=function(){var e=Object(V.b)((function(e){return e.alerts})),t=Object(V.b)((function(e){return e.ui}));return Object(M.jsx)(x.a,{className:"alert-list-container",children:Object(M.jsxs)(C.a,{className:"alert-list",children:[e.filter((function(e){return!e.resolved})).filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())||e.body.toLowerCase().includes(t.search.toLowerCase())||new Date(e.timestamp).toLocaleDateString().includes(t.search)||new Date(e.timestamp).toLocaleTimeString().includes(t.search)})).filter((function(e){return"all"===t.filter?e:e.alertClass===t.filter})).sort((function(e,t){return e.critical===t.critical?0:t.critical?1:-1})).map((function(e,a){return[Object(M.jsx)(w.a,{},e.id+1),Object(M.jsxs)(P.a,{selected:a===t.index,onClick:function(t){return function(e,t,a){je.dispatch(Ae(Object(u.a)(Object(u.a)({},a),{},{index:t})))}(0,a,e)},className:"alert-list-item-button",sx:{backgroundColor:(e.critical,"")},children:[Object(M.jsx)(Y.a,{children:Object(M.jsx)(D.a,{alt:e.alertClass,src:pe(e.alertClass,e.critical),sx:{width:25,height:25},variant:"round"})}),e.critical?Object(M.jsx)(Y.a,{children:Object(M.jsx)(ue.a,{icon:ge.a,color:"red",width:"24",height:"24"})}):null,Object(M.jsx)(z.a,{primary:e.title})]},e.id)]})),Object(M.jsx)(P.a,{className:"alert-list-item-button",children:" "})]})})},we=a(69);a(207);function Ee(e){e.title;var t=Object(V.b)((function(e){return e.ui})),a=Object(V.b)((function(e){return e.alerts}));return Object(M.jsxs)(k.a,{spacing:2,direction:"row",children:[Object(M.jsx)(we.a,{variant:"outlined",sx:{color:"gray",border:"1px solid gray"},children:"Comment"}),Object(M.jsx)(we.a,{variant:"outlined",onClick:function(e){return function(e,t,a){var i=t.index,n=a.filter((function(e){return!e.resolved})).filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())||e.body.toLowerCase().includes(t.search.toLowerCase())||new Date(e.timestamp).toLocaleDateString().includes(t.search)||new Date(e.timestamp).toLocaleTimeString().includes(t.search)})).filter((function(e){return"all"===t.filter?e:e.alertClass===t.filter})).filter((function(e){return e.index!==i})).sort((function(e,t){return e.critical===t.critical?0:t.critical?1:-1})),r=n.length;i<r-1?je.dispatch(Ae(Object(u.a)(Object(u.a)({},n[i+1]),{},{index:i}))):i===r-1?je.dispatch(Ae(Object(u.a)(Object(u.a)({},n[i-1]),{},{index:i-1}))):je.dispatch(Ae({index:-1})),je.dispatch(re({id:t.id}))}(0,t,a)},sx:{color:"gray",border:"1px solid gray"},children:"Resolve"})]})}var Se=a(149),Ne=a.n(Se);function Ue(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function ve(){var e=Object(i.useState)(Ue()),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n(Ue())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}a(208);function Be(){var e=Object(V.b)((function(e){return e.ui})),t=(Object(V.b)((function(e){return e.alerts})),ve()),a=(t.height,t.width);return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(m.a,{}),a<961?Object(M.jsx)(x.a,{sx:{flex:"0 1 auto"},children:Object(M.jsx)(E.a,{color:"inherit",onClick:function(e){je.dispatch(Ae({index:-1}))},sx:{width:"30px",height:"30px"},children:Object(M.jsx)(v.a,{})})}):null,Object(M.jsxs)(x.a,{className:"alert-detail-container",children:[e.critical?Object(M.jsx)(ue.a,{className:"alert-icon",icon:ge.a,color:"red",width:"64",height:"64"}):null,Object(M.jsxs)(x.a,{className:"alert-detail-body",children:[Object(M.jsx)("h1",{children:e.title}),Object(M.jsx)("h2",{children:e.location}),Object(M.jsx)("h3",{children:Object(M.jsxs)(k.a,{spacing:3,direction:"row",children:[Object(M.jsx)("span",{children:new Date(e.timestamp).toLocaleDateString()}),Object(M.jsx)("span",{children:new Date(e.timestamp).toLocaleTimeString()}),Object(M.jsx)("span",{children:Ne()(e.timestamp).fromNow()})]})}),Object(M.jsx)("p",{children:e.body})]}),Object(M.jsx)(x.a,{className:"alert-detail-buttons",children:Object(M.jsx)(Ee,{})})]})]})}a(210);function ye(){return Object(M.jsxs)(i.Fragment,{children:[Object(M.jsx)(m.a,{}),Object(M.jsx)(x.a,{className:"alert-detail-blank",children:Object(M.jsx)("p",{children:"no alert selected"})})]})}var Qe=a(127);a(211);function Ye(){var e=Object(V.b)((function(e){return e.ui})),t=Object(V.b)((function(e){return e.alerts})),a=function(a){je.dispatch(oe({filter:a.target.alt}));var i=t.filter((function(e){return!e.resolved})).filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())||t.body.toLowerCase().includes(e.search.toLowerCase())||new Date(t.timestamp).toLocaleDateString().includes(e.search)||new Date(t.timestamp).toLocaleTimeString().includes(e.search)})).filter((function(e){return"all"===a.target.alt?e:e.alertClass===a.target.alt})).sort((function(e,t){return e.critical===t.critical?0:t.critical?1:-1})),n=i.findIndex((function(t){return t.id===e.id}));i.length>0?je.dispatch(Ae(Object(u.a)(Object(u.a)({},i[n]),{},{index:n}))):je.dispatch(Ae({index:-1}))};return Object(M.jsxs)(k.a,{direction:"row",className:"alert-button-container",children:[Object(M.jsx)(Qe.a,{title:"All Alerts",children:Object(M.jsx)(x.a,{className:"alert-list-button",onClick:a,children:Object(M.jsx)(D.a,{alt:"all",src:"all"===e.filter?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7dbRCYAwDATQWBzEVdzETYqbdLO6SQxYxMTmz0DBeyClV/AEtZQIAAB8zJz5kp08guqaTDHfC6KXR3h2JbO2m5Gc+Zci7w0/ZP+yRYZNriIf/tHJI6guMg9U295QnTyC6ko0mNnMV2qvzMkjFAKIwjh+vLtw/AAAGN0J+XZe4xhAweUAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAKBJREFUWEftlVEOgCAMQ9lN9KSMk+pN8EcMGkkTQpZ+1E8a3PrWBUtkn5H1k9QQmogIiRAigHTuDLl7bQ7c/Wm2P0cOZ/S+1ouQGrpxDgnN4F59hzvUq93O/I+bUK11K6UcOefdzM7msJ3POEZ3vrW09n/EhmtPNzI07wide8siCKAa3IT02qPXno4QClyEzh3qCAKohgiJECKAdGUIEboAiyhgJZiLRV4AAAAASUVORK5CYII=",sx:{width:25,height:25},variant:"square"})})}),Object(M.jsx)(Qe.a,{title:"Volume Alerts",children:Object(M.jsx)(x.a,{className:"alert-list-button",onClick:a,children:Object(M.jsx)(D.a,{alt:"volume",src:"volume"===e.filter?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgB7dftEYIwDAbgnhM4AqMwghvoBo6gm+EGjMAIjhCr1qNiQz4IwR9973qeZ5o+itIagkEAoIljH7ZORJzi6GHMEMcxeCdBhgxyT8MXVoB8LUy97gZZWr8E8rk8rOZmMKTRVdtcDYtFLTVxybtG5rZYcSNZxBjWloo6r8tRmNOVivKGq8CQmldQELe5EIb+IFggybsmYPndG/vU+CAtTFKvAnEXAt0XXA8iFhZBTEEETLQ1mILWmLsLf5YKolJBVCqIyg8IHP/wldbKQbf0eAl+OU/WHgPv87RqC5DeqYFzhE2FB83exAWB5JDPmDh3/pkFgcEmLGqEgcwg0sZT0GoQLix77gNhwKbxgTBg/SaQAqx5jmCQB9UTEwR8vLR+AAAAAElFTkSuQmCC":Oe,sx:{width:25,height:25},variant:"round"})})}),Object(M.jsx)(Qe.a,{title:"Staff Alerts",children:Object(M.jsx)(x.a,{onClick:a,className:"alert-list-button",children:Object(M.jsx)(D.a,{alt:"staff",src:"staff"===e.filter?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgB7ZbhkYMgEIUxcwVYgiWkBEqwg6SDSweXDpIOtIObVGA6SK4CchVoB3twYmazgizor4xvhhFnPh+PVUAhVq16M2VcEAByfdnpJnUz/U63q26XLMsehDVcaW+dTLJMEN1OMK2TDTw804aYOWFuwNNtGFBfmxCTGqgmhmagvW7SXunA3+jZIBMbRhKjo4c7Ek6mMJxAuDrVXDbGzzeIQgbbAIurqVIZo2xiEHhCWiI8gSDPYTbCrw4Z5YEwwZUDzNU1FeiO+nsxrRL1rzMYv8jKULoVHq4g39suheEEMptiS0JJwkgy0Ci4WRAhJiYU3YsGw4YMMqh0eFDuIFJlSx1zdBSMQMoVnBPmE9L05ZhU7eD435GGK4dBY0OW0L/K0t43DrZyeJYwrla4UjD+1WggcPaA+9VWDM4smmLKmL6mo4gQjA/RgyeUwhMWE7NUqWGQz5lUIHcwdPVKlxF+VUrMEGdi8Pqhn0Mm8TvpqxeuQBvNQL+bLlId5Il3+S2XGQ7XAnE/YhldUN/3P3WlzMbxwF0sow71Cw/zi/o5DtR5jObowfDEzP939GFvatFXCWx/CdUMz4ExgS9i1ap31B/wFZZ2fJZHyAAAAABJRU5ErkJggg==":fe,sx:{width:25,height:25},variant:"round"})})}),Object(M.jsx)(Qe.a,{title:"Timing Alerts",children:Object(M.jsx)(x.a,{onClick:a,className:"alert-list-button",children:Object(M.jsx)(D.a,{alt:"timing",src:"timing"===e.filter?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgB7ViLUcMwDFU5BsgIZgLYoN6AbkCZoNmgYYKWCVomACagTEA7QbJBu4GQL0pPcZ2PHecO7vrudHUT6eVZcSwlAFf8M0zAE4iY0M8D2YxsSqbIEj59ItuTHch2k8nkA8aCEUK2JDtif+QcoyAmiHDhKcQl7AligIhWjgsYcRmZlrPHMovm2JpF2FjBEBDBxjFT7RE/dwjbQAgcmTGzTgJ4Eo4NzxTPTCJr8VWchRxbFi/fYokZ9BRTXeCcmQ7/rI9w9pWZOroyfuOIM0+D4nFBlkE8ZMxpYMSk0EPQXBLQ5naCSGCuZ3FoYWepJojvq+K/BRG8QWQQ5w7KHd2g2vXdgghajD9hPLyKcW1x24LuxXi8OkR1Toyn8oQtSKZvD+OhEGMlT9xajucF1rWYeTEu2LxA3AXFX1zTJagTQkhqkxFyiAmsV3TV4POOlzBxqcd1Ehnb5vgjHDV0i66qvleNw7IjqPAlz9mL+luMdQOf2dh2ZC9kd7QeQjZP+agfGr0s5UcYCVatfGxzTKxboiEysN5JdD8EWK/eOQb0QC3ciZWdrG+QzNKwtrPOvbImq/oGpljHEgYCy7cPCb+mHx1tJ4a3sBuLaw0hoMCtRZT7zIx8Z3jZ5G9hCByZqoSZ41pmDcv2V2PzC2VYZhyiXK8zPvAqLX1FmdlnnsK8S4v3xwYWZ7Z+DWVDZ3oo+bGhgLIEmQZvH7Mnv+JP4hd65P1wET+dvAAAAABJRU5ErkJggg==":me,sx:{width:25,height:25},variant:"round"})})}),Object(M.jsx)(Qe.a,{title:"Weather Alerts",children:Object(M.jsx)(x.a,{onClick:a,className:"alert-list-button",children:Object(M.jsx)(D.a,{alt:"weather",src:"weather"===e.filter?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgB5Vf/VcIwEL76/N9uQJ1ANrBOAE4ATgAbwAbgBMUJwAnQCcAJihOAE5x3NsVrSGhSWuQ9v/futSSXL3e5HykA/wmI2CfpwSVAGZPD2agraA6ReL8FR5xsEHtPkpJMxFhIjzuh1qKxSMwPSFYkQ6gbijjHiGSGdiRsuPi9hbpBpGOsjik0ASY2bLZU4wlmIdUxg6aAxTDx5rFBh6tuK/QSaAJEHGmeR0d0+5puqOsE4AFF0IXfkl6TtEjyXHgNgqBbwpGK9QuSD5KU1r2AhyGRyokylJYx2qvwp3mW9iFSHLAHJDGU494UBh8EJcaM6DHWht8gO+YdZM2vDcWuzGF8oBDsLJwyZDOST3AJGVeKdqQrU/UoXb0XJRa9vmsBGD3RjAlL9PXNYjh0UJb9HDyMiat4gocNcq7GlniICbhCI3ZuYHyK6IeJC+FIO9oOeID0u+pkTEiwmG/pMSLuNamBJIYKMPCNxdxUOT08RmBqWEs4AVjMxZXPwrZmyBAdGxxmCcve9izze4ArlAH7OFt02NuBNFQ7gQXUYNC1esrT+DKQRvTIw8ed+cnAdWNYJy/aNTggv8s2YqxjCFdked9Y3nMnZFm/gyswK3dZ6innlZhv2xLdEsoQixWWos81oUiGWmIvtA2WyuiuA5f8aNtK53yN6gvPxnACFFdS2RhBFPocrylkfwYtNLV8tDv/c0VzA4ws780ahNl9xsJheRRTO6gZVf7bywa4geyTlg17hnOhiVw5GRdVTefEN8MofjzJiDwFAAAAAElFTkSuQmCC":xe,sx:{width:25,height:25},variant:"round"})})})]})}var Re=a(3),Ge=a(300),Le=a(151),Je=a.n(Le),ke=a(124),De=a(152),Fe=a.n(De),Ie=a(150),Ve=function(){var e,t=Object(V.b)((function(e){return e.ui})),a=Object(V.b)((function(e){return e.alerts}));return Object(M.jsx)(ke.a,(e={onChange:function(e){console.log(e),je.dispatch(de({search:""}))}},Object(Re.a)(e,"onChange",Object(Ie.debounce)((function(e){je.dispatch(de({search:e.target.value}));var i=a.filter((function(e){return!e.resolved})).filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())||t.body.toLowerCase().includes(e.target.value.toLowerCase())||new Date(t.timestamp).toLocaleDateString().includes(e.target.value)||new Date(t.timestamp).toLocaleTimeString().includes(e.target.value)})).filter((function(e){return"all"===t.filter?e:e.alertClass===t.filter})).sort((function(e,t){return e.critical===t.critical?0:t.critical?1:-1})),n=i.findIndex((function(e){return e.id===t.id}));i.length>0?je.dispatch(Ae(Object(u.a)(Object(u.a)({},i[n]),{},{index:n}))):je.dispatch(Ae({index:-1}))}),250)),Object(Re.a)(e,"sx",{width:"100%",marginBottom:"3%"}),Object(Re.a)(e,"label","Search"),Object(Re.a)(e,"InputProps",{endAdornment:Object(M.jsx)(Ge.a,{position:"start",children:Object(M.jsx)(E.a,{children:""===t.search?Object(M.jsx)(Je.a,{}):Object(M.jsx)(Fe.a,{})})})}),e))};function Me(){var e=Object(V.b)((function(e){return e.ui})),t=ve(),a=(t.height,t.width);return console.log(a),Object(M.jsx)(x.a,{className:"alert-page",children:a<961?-1===e.index?Object(M.jsxs)(x.a,{className:"alert-page-list-container",children:[Object(M.jsx)(x.a,{className:"alert-page-search-input",children:Object(M.jsx)(Ve,{})}),Object(M.jsx)(x.a,{className:"alert-page-filter-buttons",children:Object(M.jsx)(Ye,{})}),Object(M.jsx)(x.a,{className:"alert-page-list",children:Object(M.jsx)(Ce,{})})]}):Object(M.jsx)(x.a,{className:"alert-page-detail",children:-1===e.index?Object(M.jsx)(ye,{}):Object(M.jsx)(Be,{})}):Object(M.jsxs)(x.a,{className:"alert-page-container",children:[Object(M.jsxs)(x.a,{className:"alert-page-list-container",children:[Object(M.jsx)(x.a,{className:"alert-page-search-input",children:Object(M.jsx)(Ve,{})}),Object(M.jsx)(x.a,{className:"alert-page-filter-buttons",children:Object(M.jsx)(Ye,{})}),Object(M.jsx)(x.a,{className:"alert-page-list",children:Object(M.jsx)(Ce,{})})]}),Object(M.jsx)(x.a,{className:"alert-page-detail",children:-1===e.index?Object(M.jsx)(ye,{}):Object(M.jsx)(Be,{})})]})})}var Ze=function(){return Object(M.jsx)(Me,{})},Te=function(){return Object(M.jsx)("main",{children:Object(M.jsxs)(F.c,{children:[Object(M.jsx)(F.a,{path:"/",element:Object(M.jsx)(Ze,{})}),Object(M.jsx)(F.a,{path:"/alerts",element:Object(M.jsx)(Ze,{})}),Object(M.jsx)(F.a,{path:"/history",element:Object(M.jsx)(W,{})})]})})},Ke=a(153),We=["Unscheduled employee on the clock","Engineering staff plan exceeds scheduled employee count","Excessive absentees"],Pe=["Late plane","Late truck","Early plane","Early truck","Unexpected ratio of time-definite services in inbound volume"],ze=["Additional inbound truck","Additional inbound plane","Volume exceeds route capacity","Expected low capacity"],qe=["National weather alert","Traffic disruption","Delay due to weather","Winter weather","Tornado","Hurricane","Earthquake"],Xe=[!0,!1,!1],He=["Memphis, TN","Starkville, MS","Columbus, MS","Nashville, TN","Jackson, MS","West Point, MS","Cleveland, OH"];function _e(e){return Math.floor(Math.random()*e)}var $e=function(){var e,t;switch(_e(4)){case 0:e=We[_e(We.length)],t="staff";break;case 1:e=Pe[_e(Pe.length)],t="timing";break;case 2:e=ze[_e(ze.length)],t="volume";break;case 3:e=qe[_e(qe.length)],t="weather"}var a=Xe[_e(Xe.length)],i=He[_e(He.length)];je.dispatch(ne({title:e,body:Object(Ke.loremIpsum)({random:!0})[0],critical:a,location:i,alertClass:t}))},et=(a(220),function(e){$e()});function tt(){return Object(M.jsx)(D.a,{alt:"Fedex",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAABBCAYAAADYDeZ2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZnSURBVHgB7ZxfbttGEMY/qkUQ9KXqCcqcoM4N5BMkPkFkoH/SJ7snMH0CW29JWiDKCeygfRdzgsgnCHsCqy9B0NZmZ5YrVLVJcYbalSV3fsCClr3kUtxvZ2dnh05KAvF5lCRJgS2FHtGQDq9bK/56DPyWIRo9eo4vUGDD6cEwAmOiMoJjojKCY6IygmOiMoJjojKCY6IygmOiMoLzOXQ8pXIBJdsc+IxCghGVUyjZhsAnoxXVHyaQAJSYJS+3QyBdsOnPCI6JygiOdvoLDm3W9ukwoPI1lR3/65TKzJffqUyp5DT1zhCAG20+ovKlb+eSygW1k8PojFZUKXVIqjmhzgfzncpO/zNUnSuCzsvpMKZrvkEH6PwBHY7a2qR6BR1yKsdRfMgE/fK5GzjR0Tj35SH6+IS+tD4ekm94ilsDPYmd+kKdkix+puZYTCfASg+1oJJJxUVt7vg2B9BRUNlHda93n/pS4rDDqjFLXuG4rZIT+TUmkPZL6cS0m/zsZpH/sDafiq0TFe6YM2DlUZpSGdP1jtoqUp0DOryHXlDzdvhBP8Mm8BneUmfuK8/Kyu+X379aUEyC/TpBMWsRlZ8y+aaHCEvmhdrULotOHQ+qYYANgTpyTIdWy3ODcZOw3JSnFVSPBPUK581/Xg9snXYQhyGJ5+TmL72FynAPoQ7N0EVYz2sGx0eloNjPfOGE3Uh0UXlrIRVUTmWE6oGN/GcJh94Jn7eZ4p4Kak4nYV3jrPzu376gn9nKawb7sW93KesIKWSCOuz07ZPjfcukKhz711T3sQ87ZFTkq5iq/cIfmQG2AO7g8lt6Lj2xz9cnX2hCYtql4xPo3BGRoJhNCX7u1gmK8b/fBdAWo0pRTYV81DjWbBH5xQwWJN8Ht/UV9NPLnZD8QsK4hibEwoONp7xMfEaJkVRQzCaIiuNO02UVfKxohHZ49GWQw3Gow5tBVf5MJQPUK6274W8KNQBTcf1EYcVJsLQ4OIQC7fTHVkMa1d6BbL6+WPSHlnApqDOA/P7GXjiN0N85bKEK0AqZUsfKRTDnU/13S8aYlUOy5g+cBQq5IJo6S6hEK6qRdAuDOkO64jtBWKSjUGL5GJ4GBwjL2+Rl2IWEE9Zz7KnDA81M8YVzO9TEnP5SbC5F25Q7xw+iIHuOsXFbMj0nhAKrwdfZq9uCkRBTVJrV17rRJhoW2BICCMudv0pC4P/VUkn8s0W2wlLNcYIoaSos1fc9W1VQTExRbVVH3Ds4DpWoZwvesll5nzNm8JNF1RfUOUc4Usic6hQ6Nnkqv0X5Aw7ISmXoBm9AQ5LZ0ERMUbEjnLbU4XhQsFiQ/+8sA0HVAWdNSJL+fDA11r5lcMofydJcrbyJzsIqSFid8tZiiuodqkS8ZXDS3450JSaArV573lMFB/QyQb0nCM83tFUyhJa/cM6hg6Y/u329q+WbvQrG3mKphRVTVNzBkhgUZxO0WiufLSqZhnLIrNURXfN8maC9lVJFk4U8JX+nbcDd5qH7brWi8hvFE4TllK570ZQ31UQ0R91vreSCqsO2ZDvfuZxo96Gl8EN9BzkTHzGva3Pgr5diw3FJdgnOOjjmbcw3oFXTf+y9P6mz55Lt6vLflZ2boUrKk648uRN4K+Y9Fb6HA3+cYJsEpY+iaxZHLKwzTU59VFH5aLT0CwypfPAdPPFHjidJHxhPZW+8861dufBInGeJtr4YsSl0ElSVtbmnzGxw7UiFtY4sBfaXCkV97uCBP0rNeUHlp/kHEhaLI8c9plMa8GLWpjazQSGs6KLyliPEflQTfP29mleptGLeGpyguqQBL+REuVXkn65ftMI6o8DN0sG+lnwq3+ExhFW9JlSzggvcpjSjYT18DJMG7IRFG8fQziQPyGItEdbakvR8Jz+m0imgVkPO11sWElgQVo7usMULFUdbGZ9XLg9HtGRtdtyAZmE1xgM5TpVDzkr7eX4q5BBChmql1mWfiTv4VPoi6VxYPtrOTngKGXweT6tTnyeft56R+BKLK/I1e+7+c1H9axdjao2zsbDIV9olAUoDxwy/ZT1se7Nm7XAIgTubE/p4pVfWc+lXg6fCDNG2Ntvam/jQwlbt920SMcdVJ27Eqmah/inHkrbSeVuokveitWcYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYxn3jHzM4pWS9dN3uAAAAAElFTkSuQmCC",variant:"square",sx:{height:45,width:100},onClick:et})}a(221);var at=240,it=Object(b.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(u.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(at,"px")},a&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),nt=Object(b.a)(f.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(u.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{width:"calc(100% - ".concat(at,"px)"),marginLeft:"".concat(at,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),rt=Object(b.a)("div")((function(e){var t=e.theme;return Object(u.a)({padding:t.spacing(0,1)},t.mixins.toolbar)}));function ct(){var e=Object(g.a)(),t=i.useState(!1),a=Object(j.a)(t,2),n=a[0],r=a[1];return Object(M.jsxs)(x.a,{sx:{display:"flex",position:"relative"},children:[Object(M.jsx)(m.a,{}),Object(M.jsx)(k.a,{direction:"row",children:Object(M.jsx)(nt,{open:n,sx:{display:"flex",backgroundColor:"#8429F8"},children:Object(M.jsxs)(p.a,{children:[Object(M.jsx)(x.a,{sx:{flex:"0 1 auto"},children:Object(M.jsx)(E.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",sx:Object(u.a)({mr:2},n&&{display:"none"}),children:Object(M.jsx)(N.a,{})})}),Object(M.jsx)(x.a,{sx:{flex:"0 1 auto",marginTop:"1%",position:"absolute",left:"50%",transform:"translateX(-50%)"},children:Object(M.jsx)(tt,{})}),Object(M.jsxs)(x.a,{direction:"row",sx:{display:"flex",flex:"0 1 auto",marginLeft:"auto"},children:[Object(M.jsx)(x.a,{className:"location-text",children:Object(M.jsx)("h3",{children:"Memphis, TN"})}),Object(M.jsx)(E.a,{children:Object(M.jsx)(D.a,{alt:"Profile",src:"data:image/png;base64,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",variant:"round",sx:{width:45,height:45}})})]})]})})}),Object(M.jsxs)(O.a,{sx:{width:at,flexShrink:0,"& .MuiDrawer-paper":{width:at,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:n,children:[Object(M.jsx)(rt,{children:Object(M.jsx)(E.a,{onClick:function(){r(!1)},children:"ltr"===e.direction?Object(M.jsx)(v.a,{}):Object(M.jsx)(y.a,{})})}),Object(M.jsx)(w.a,{}),Object(M.jsx)(C.a,{children:["Alerts","History"].map((function(e,t){return Object(M.jsxs)(Q.a,{button:!0,children:[Object(M.jsx)(Y.a,{children:t%2===0?Object(M.jsx)(G.a,{}):Object(M.jsx)(J.a,{})}),Object(M.jsx)(s.b,{to:e.toLocaleLowerCase(),children:e})]},e)}))}),Object(M.jsx)(w.a,{})]}),Object(M.jsxs)(it,{open:n,children:[Object(M.jsx)(rt,{}),Object(M.jsx)(Te,{})]})]})}a(222);window.React=n.a;var st=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)(V.a,{store:je,children:Object(M.jsx)(ct,{})})})}}]),a}(i.Component);console.log(je.getState()),c.a.render(Object(M.jsx)(s.a,{children:Object(M.jsx)(st,{})}),document.getElementById("root")),l()}},[[223,1,2]]]);
//# sourceMappingURL=main.aa13aee4.chunk.js.map