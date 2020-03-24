(this["webpackJsonpauth0-react-01-login"]=this["webpackJsonpauth0-react-01-login"]||[]).push([[0],{176:function(e,t){},180:function(e){e.exports=JSON.parse('{"domain":"dev-vglls3oa.auth0.com","clientId":"a4LpD3YCc51pw90F3XFoclzHkgOHBsTj"}')},291:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},303:function(e,t,a){e.exports=a(929)},308:function(e,t,a){},336:function(e,t){},338:function(e,t){},368:function(e,t){},369:function(e,t){},414:function(e,t){},416:function(e,t){},439:function(e,t){},928:function(e,t,a){},929:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(129),c=a.n(o),l=(a(308),a(66)),i=a(932),s=a(49),m=a.n(s),u=a(98),d=a(138),p=a(68),h=a(289),f=a.n(h),E=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=r.a.createContext(),b=function(){return Object(n.useContext)(g)},v=Object(l.f)((function(e){var t=e.component,a=e.path,o=Object(d.a)(e,["component","path"]),c=b(),i=c.loading,s=c.isAuthenticated,p=c.loginWithRedirect;Object(n.useEffect)((function(){i||s||function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({appState:{targetUrl:a}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,s,p,a]);return r.a.createElement(l.a,Object.assign({path:a,render:function(e){return!0===s?r.a.createElement(t,e):null}},o))})),y=a(291),w=a.n(y),O=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:w.a,alt:"Loading"}))},_=a(59),C=a(931),S=a(933),x=a(934),N=a(935),k=a(936),j=a(937),T=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"nav-container"},r.a.createElement(C.a,{color:"light",light:!0,expand:"md"},r.a.createElement(i.a,null,r.a.createElement(S.a,{onClick:function(){return o(!a)}}),r.a.createElement(x.a,{isOpen:a,navbar:!0},r.a.createElement(N.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,{className:"d-flex flex-nowrap"},r.a.createElement(j.a,{tag:_.a,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home"),r.a.createElement(j.a,{tag:_.a,to:"/About",exact:!0,activeClassName:"router-link-exact-active"},"About")))),r.a.createElement("h2",{className:"primary"},"World Feeding World"))))},W=function(){return r.a.createElement("footer",{className:"bg-light p-3 text-center"},r.a.createElement("div",{className:"logo"}),r.a.createElement("p",null,"Protected by ",r.a.createElement("a",{href:"https://auth0.com"},"Auth0")))},D=(a(944),a(938)),P=function(){var e=b(),t=(e.user,e.isAuthenticated),a=e.loginWithRedirect,n=e.logout;return r.a.createElement("div",{className:"text-center hero my-5"},r.a.createElement("a",{href:"https://paypal.me/pools/c/8noKMABXxc"},r.a.createElement(D.a,{color:"primary",size:"lg"},"Have Food")),!t&&r.a.createElement(N.a,{className:"justify-content-center mt-5 mb-5"},r.a.createElement(k.a,null,r.a.createElement(D.a,{id:"qsLoginBtn",color:"primary",size:"lg",block:!0,onClick:function(){return a({})}},"Need Food"))),t&&r.a.createElement(N.a,{className:"justify-content-center mt-5"},r.a.createElement(k.a,null,r.a.createElement(_.a,{to:"/profile",activeClassName:"router-link-exact-active"},r.a.createElement(D.a,{color:"primary",className:"btn-margin"},"Request Funds")),r.a.createElement(_.a,{to:"#",id:"qsLogoutBtn",onClick:function(){n({returnTo:window.location.origin})}},"Log out"))))},R=a(292),A=a(293),I=a(301),L=a(294),K=a(302),U=a(939),F=a(940),B=a(295),H=[{title:"Center for Disease Control and Prevention",link:"https://www.cdc.gov/coronavirus/2019-ncov/index.html",description:"Get the latest updates regarding the Coronavirus (COVID-19) as well as resources to protect yourself from the disease. "},{title:"Learn About the Economical Effects of COVID-19 ",link:"https://www.cnn.com/2020/03/16/economy/job-losses-coronavirus/index.html",description:"Get informed about the economical effects of the Coronavirus (COVID-19), and how nearly 80 million US jobs are at risk."}],V=function(e){function t(){return Object(R.a)(this,t),Object(I.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"next-steps my-5"},r.a.createElement("h2",{className:"my-5 text-center"},"Get Informed"),r.a.createElement(U.a,{className:"d-flex justify-content-between"},H.map((function(e,t){return r.a.createElement(F.a,{key:t,md:5,className:"mb-4"},r.a.createElement("h6",{className:"mb-3"},r.a.createElement("a",{href:e.link},r.a.createElement(B.a,{icon:"link",className:"mr-2"}),e.title)),r.a.createElement("p",null,e.description))}))))}}]),t}(n.Component),G=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("hr",null),r.a.createElement(V,null))},q=a(941),M=a(942),z=a(943),J=a(300),$=a(77),X=function(e,t){var n=a(117),r=new(a(530).S3)({accessKeyId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).auth0clientid,secretAccessKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).auth0clientsecret});n({method:"POST",url:"https://dev-vglls3oa.auth0.com/oauth/token",headers:{"content-type":"application/json"},body:'{"client_id":'+r.accessKeyId+',"client_secret":'+r.secretAccessKey+',"audience":"https://dev-vglls3oa.auth0.com/api/v2/","grant_type":"client_credentials"}'},(function(n,r,o){if(n)throw new Error(n);var c=JSON.parse(o);a(117)({method:"PATCH",url:"https://dev-vglls3oa.auth0.com/api/v2/users/"+String(e.sub),headers:{authorization:"Bearer "+c.access_token,"content-type":"application/json"},body:{app_metadata:{lastUse:(new Date).getTime()}},json:!0},(function(e,a,n){if(e)throw new Error(e);t({returnTo:window.location.origin})}))}))},Y=function(e,t,n,r){console.log(e),console.log(t);var o=a(908),c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).OTHER_PAYPAL,l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).OTHER_PAYPAL;a(925).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),o.configure({mode:"sandbox",client_id:String(c),client_secret:String(l)});var i={sender_batch_header:{sender_batch_id:Math.random().toString(36).substring(9),email_subject:"World Feeding World"},items:[{recipient_type:"EMAIL",amount:{value:1,currency:"USD"},receiver:e,note:t+", I am very happy to know that during your tough times, WFW was able to help put food on the table. This is only possible due to the donations made, and hopefully, when you are back on your feet, you will be able to give back to the WFW community as well! Enjoy your Paypal funds that can be instantly turned into gift cards for select grocerry stores and restaraunts.",sender_item_id:"item_1"}]};o.payout.create(i,(function(e,t){if(e)throw console.log("ERROR"),console.log(e.response),e;console.log("Create Payout Response"),console.log(t),X(n,r)}))},Q=function(){var e=b(),t=e.loading,a=e.user,n=e.logout;if(t||!a)return r.a.createElement(O,null);var o=$.a({name:$.c().required(),email:$.c().email("*Must be a valid email adress").required("*Email is required"),cemail:$.c().oneOf([$.b("email"),null],"*Emails do not match"),giftcard:$.c().required().min(4,"*Select")});return r.a.createElement("div",null,r.a.createElement("button",{onClick:Y},"Paypal"),r.a.createElement(i.a,{className:"mb-5"},r.a.createElement(U.a,{className:"align-items-center text-center"},r.a.createElement(F.a,null,r.a.createElement(q.a,{src:"https://pics.paypal.com/00/c/gifts/us/wmt2.png",className:"w-75 h-75"})),r.a.createElement(F.a,null,r.a.createElement(q.a,{src:"https://www.paypalobjects.com/digitalassets/c/gifts/media/catalog/product/s/a/safeway_xxlweb.png",className:"w-75 h-75"})),r.a.createElement(F.a,null,r.a.createElement(q.a,{src:"https://www.paypalobjects.com/digitalassets/c/gifts/media/catalog/product/b/u/burger_king_1.png",className:"w-75 h-75"})))),r.a.createElement(J.a,{initialValues:{name:"",email:"",cemail:"",giftcard:""},validationSchema:o,onSubmit:function(e,t){var r=t.setSubmitting,o=t.resetForm;r(!0),setTimeout((function(){Y(e.email,e.name,a,n),o(),r(!1)}),500)}},(function(e){var t=e.values,a=e.errors,n=e.touched,o=e.handleChange,c=e.handleBlur,l=e.handleSubmit,i=e.isSubmitting;return r.a.createElement(M.a,{onSubmit:l},r.a.createElement(M.a.Group,{as:U.a,controlId:"formEmail"},r.a.createElement(M.a.Label,{column:!0,sm:2},"Email"),r.a.createElement(F.a,{sm:10},r.a.createElement(M.a.Control,{type:"email",name:"email",placeholder:"Email",onChange:o,onBlur:c,value:t.email,className:n.email&&a.email?"block-example border border-danger":null}))),r.a.createElement(M.a.Group,{as:U.a,controlId:"formcEmail"},r.a.createElement(M.a.Label,{column:!0,sm:2},"Confirm Email"),r.a.createElement(F.a,{sm:10},r.a.createElement(M.a.Control,{type:"email",name:"cemail",placeholder:"Confirm Email",onChange:o,onBlur:c,value:t.cemail,className:n.cemail&&a.cemail?"block-example border border-danger":null}))),r.a.createElement(M.a.Group,{as:U.a,controlId:"formName"},r.a.createElement(M.a.Label,{column:!0,sm:2},"Name"),r.a.createElement(F.a,{sm:10},r.a.createElement(M.a.Control,{type:"text",name:"name",placeholder:"Name",onChange:o,onBlur:c,value:t.name,className:n.name&&a.name?"block-example border border-danger":null}))),r.a.createElement(M.a.Group,{as:U.a,controlId:"formGiftcard"},r.a.createElement(M.a.Label,{column:!0,sm:2},"Select Giftcard"),r.a.createElement(F.a,{sm:10},r.a.createElement(M.a.Control,{as:"select",name:"giftcard",onChange:o,value:t.giftcard,className:n.giftcard&&a.giftcard?"block-example border border-danger":null},r.a.createElement("option",{value:""},"Choose..."),r.a.createElement("option",{value:"walmart"},"Walmart - $10"),r.a.createElement("option",{value:"safeway"},"Safeway - $10"),r.a.createElement("option",{value:"burgerking"},"Burger King - $10")))),r.a.createElement(M.a.Group,{as:U.a},r.a.createElement(F.a,{sm:{span:10,offset:11}},r.a.createElement(z.a,{type:"submit",disabled:i},"Submit"))))})))},Z=function(){return r.a.createElement("div",{className:"next-steps my-5"},r.a.createElement("h2",{className:"my-5 text-center"},"About World Feeding World"),r.a.createElement("p",{className:"text-center mb-5"},"World Feeding World was an idea brought upon by the current economical difficulties faced during the spread of the COVID-19. From children dependent on school lunches, business owners forced to shut down, and employees left with no work; World Feeding World has the ability to lend a helping hand to all those in need. Donate what you can and take what you need!"),r.a.createElement(U.a,{className:"d-flex justify-content-between mb-5"},r.a.createElement(F.a,null,r.a.createElement("h5",null,"Donate"),r.a.createElement("li",null,"Non-profit"),r.a.createElement("li",null,"Money is donated into WFW Paypal Money Pool"),r.a.createElement("li",null,"(Coming soon) Donators can recieve custom thank you posts from reciever's")),r.a.createElement(F.a,{key:2},r.a.createElement("h5",null,"Request"),r.a.createElement("li",null,"Request $10 gift card to available grocery stores and restaurants"),r.a.createElement("li",null,"Available every other day upon recieving gift card"),r.a.createElement("li",null,"(Coming soon) Ability to thank donators directly"))),r.a.createElement("hr",null),r.a.createElement("h2",{className:"my-5 text-center"},"About Me"),r.a.createElement("div",{className:"text-center mb-5"},r.a.createElement("img",{className:"rounded-circle",src:"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/s150x150/89738654_231752254636843_4364936883097042944_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=P6NB1jzipDsAX-Fegph&oh=ad34df123a914cde3cafae1ecc4cacd5&oe=5E9D45C4",alt:"instagram.com"})),r.a.createElement("p",{className:"text-center mb-5"},"My name is Jonathan Hein and I am a senior at Washington State University graduating May 2020 with a bachelors in computer science. I created WFW with inspiration from my university's Cougs Feeding Cougs. It is a similiar idea that allows students to donate leftover RDA that can be claimed by students in need to purchase food at dining halls. When COVID-19 started disrupting our economy, I decided to implement a similiar idea avalable to those world wide."))},ee=a(32),te=Object(ee.a)(),ae=(a(928),a(76)),ne=a(142);(function(){ae.b.add(ne.a),ae.b.add(ne.c),ae.b.add(ne.b)})();var re=function(){return b().loading?r.a.createElement(O,null):r.a.createElement(l.b,{history:te},r.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},r.a.createElement(T,null),r.a.createElement(i.a,{className:"flex-grow-1 mt-5"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:G}),r.a.createElement(l.a,{path:"/About",exact:!0,component:Z}),r.a.createElement(v,{path:"/profile",component:Q}))),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(180);c.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,o=void 0===a?E:a,c=Object(d.a)(e,["children","onRedirectCallback"]),l=Object(n.useState)(),i=Object(p.a)(l,2),s=i[0],h=i[1],b=Object(n.useState)(),v=Object(p.a)(b,2),y=v[0],w=v[1],O=Object(n.useState)(),_=Object(p.a)(O,2),C=_[0],S=_[1],x=Object(n.useState)(!0),N=Object(p.a)(x,2),k=N[0],j=N[1],T=Object(n.useState)(!1),W=Object(p.a)(T,2),D=W[0],P=W[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(c);case 2:if(t=e.sent,S(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,o(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,h(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,w(l);case 19:j(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var R=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},P(!0),e.prev=2,e.next=5,C.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:return e.next=15,C.getUser();case 15:a=e.sent,w(a),h(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,C.handleRedirectCallback();case 3:return e.next=5,C.getUser();case 5:t=e.sent,j(!1),h(!0),w(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{isAuthenticated:s,user:y,loading:k,popupOpen:D,loginWithPopup:R,handleRedirectCallback:A,getIdTokenClaims:function(){return C.getIdTokenClaims.apply(C,arguments)},loginWithRedirect:function(){return C.loginWithRedirect.apply(C,arguments)},getTokenSilently:function(){return C.getTokenSilently.apply(C,arguments)},getTokenWithPopup:function(){return C.getTokenWithPopup.apply(C,arguments)},logout:function(){return C.logout.apply(C,arguments)}}},t)}),{domain:oe.domain,client_id:oe.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){te.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[303,1,2]]]);
//# sourceMappingURL=main.a970eeed.chunk.js.map