(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(20),o=n.n(i),s=(n(27),n(2)),l=n(3),r=n(4),d=n(7),j=n.n(d),u=n(0),h=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)([]),d=Object(s.a)(o,2),h=d[0],p=d[1],b=Object(c.useContext)(N),f=b.state,O=b.dispatch,m=Object(l.f)();Object(c.useEffect)((function(){j.a.Modal.init(e.current)}),[]);return Object(u.jsxs)("nav",{children:[Object(u.jsxs)("div",{className:"nav-wrapper white",children:[Object(u.jsx)(r.b,{to:f?"/":"/signin",className:"brand-logo left",children:"SheepCloud"}),Object(u.jsx)("ul",{id:"nav-mobile",className:"right ",children:f?[Object(u.jsx)("li",{children:Object(u.jsx)("i",{"data-target":"modal1",className:"large material-icons modal-trigger",style:{color:"black"},children:"search"})},"1"),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/profile",children:"\u81ea\u5df1"})},"2"),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/create",children:"PO\u6587"})},"3"),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/myfollowingpost",children:"\u8ffd\u8e64"})},"4"),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),O({type:"CLEAR"}),m.push("/signin")},children:"Logout"})},"5")]:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/signin",children:"Signin"})},"6"),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/signup",children:"Signup"})},"7")]})]}),Object(u.jsxs)("div",{id:"modal1",className:"modal",ref:e,style:{color:"black"},children:[Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsx)("input",{type:"text",placeholder:"search users",value:a,onChange:function(e){return t=e.target.value,i(t),void fetch("/search-users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){p(e.user)}));var t}}),Object(u.jsx)("ul",{className:"collection",children:h.map((function(t){return Object(u.jsx)(r.b,{to:t._id!==f._id?"/profile/"+t._id:"/profile",onClick:function(){j.a.Modal.getInstance(e.current).close(),i("")},children:Object(u.jsx)("li",{className:"collection-item",children:t.email})})}))})]}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsx)("button",{className:"modal-close waves-effect waves-green btn-flat",onClick:function(){return i("")},children:"close"})})]})]})},p=(n(33),function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(N),o=i.state;i.dispatch;Object(c.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e.posts)}))}),[]);return Object(u.jsx)("div",{className:"home",children:n.map((function(e){return Object(u.jsxs)("div",{className:"card home-card",children:[Object(u.jsxs)("h5",{style:{padding:"5px"},children:[Object(u.jsx)(r.b,{to:e.postedBy._id!==o._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id==o._id&&Object(u.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}));var t},children:"delete"})]}),Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:e.photo})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(o._id)?Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(u.jsx)("div",{children:"\u672a\u4f86\u5206\u4eab\u6309\u9215"}),Object(u.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(u.jsxs)("h6",{children:[Object(u.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name}),e.text]},e._id)})),Object(u.jsx)("form",{onSubmit:function(t){var c,i;t.preventDefault(),c=t.target[0].value,i=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:i,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:Object(u.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}),b=function(){var e=Object(c.useContext)(N),t=(e.state,e.dispatch),n=Object(l.f)(),a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],d=i[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),b=p[0],f=p[1];return Object(u.jsx)("div",{className:"mycard",children:Object(u.jsxs)("div",{className:"card auth-card input-field",children:[Object(u.jsx)("h2",{children:"Sheep Cloud"}),Object(u.jsx)("input",{type:"text",placeholder:"email",value:b,onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"password",value:o,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:o,email:b})}).then((function(e){return e.json()})).then((function(e){e.error?j.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),j.a.toast({html:"signedin success",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)})):j.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},children:"Login"}),Object(u.jsx)("div",{children:"\u6e2c\u8a66\u5e33\u865f yale918@gmail.com / 12345"}),Object(u.jsx)("h5",{children:Object(u.jsx)(r.b,{to:"/signup",children:"Don't have an account ?"})})]})})},f=n(6),O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(N),o=i.state,l=i.dispatch,r=Object(c.useState)(""),d=Object(s.a)(r,2),j=d[0],h=d[1],p=Object(c.useState)(""),b=Object(s.a)(p,2);b[0],b[1];Object(c.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.mypost)}))}),[]),Object(c.useEffect)((function(){if(j){var e=new FormData;e.append("file",j),e.append("upload_preset","insta-clone"),e.append("cloud_name","yalecloud"),fetch("https://api.cloudinary.com/v1_1/yalecloud/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(t){console.log(t),localStorage.setItem("user",JSON.stringify(Object(f.a)(Object(f.a)({},o),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:t.pic})}))})).catch((function(e){console.log(e)}))}}),[j]);return Object(u.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(u.jsxs)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:o?o.pic:"loading"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:o?o.name:"loading"}),Object(u.jsx)("h5",{children:o?o.email:"loading"}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(u.jsxs)("h6",{children:[n.length," posts"]}),Object(u.jsxs)("h6",{children:[o?o.followers.length:"0"," followers"]}),Object(u.jsxs)("h6",{children:[o?o.following.length:"0"," following"]})]})]})]}),Object(u.jsxs)("div",{className:"file-field input-field",style:{margin:"10px"},children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:"Update pic"}),Object(u.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void h(t);var t}})]}),Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(u.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]})},m=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(""),d=Object(s.a)(o,2),h=d[0],p=d[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),O=f[0],m=f[1],x=Object(c.useState)(""),g=Object(s.a)(x,2),y=g[0],v=g[1],w=Object(c.useState)(void 0),S=Object(s.a)(w,2),N=S[0],C=S[1];Object(c.useEffect)((function(){N&&_()}),[N]);var _=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,password:h,email:O,pic:N})}).then((function(e){return e.json()})).then((function(t){t.error?j.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(j.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):j.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},k=function(){y?function(){var e=new FormData;e.append("file",y),e.append("upload_preset","insta-clone"),e.append("cloud_name","yalecloud"),fetch("https://api.cloudinary.com/v1_1/yalecloud/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){C(e.url)})).catch((function(e){console.log(e)}))}():_()};return Object(u.jsx)("div",{className:"mycard",children:Object(u.jsxs)("div",{className:"card auth-card input-field",children:[Object(u.jsx)("h2",{children:"Sheep Cloud"}),Object(u.jsx)("input",{type:"text",placeholder:"name",value:a,onChange:function(e){i(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"email",value:O,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"password",value:h,onChange:function(e){return p(e.target.value)}}),Object(u.jsxs)("div",{className:"file-field input-field",children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:"Upload pic"}),Object(u.jsx)("input",{type:"file",onChange:function(e){return v(e.target.files[0])}})]}),Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(u.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return k()},children:"SignUP"}),Object(u.jsx)("h5",{children:Object(u.jsx)(r.b,{to:"/signin",children:"Already have an account ?"})})]})})},x=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),d=r[0],h=r[1],p=Object(c.useState)(""),b=Object(s.a)(p,2),f=b[0],O=b[1],m=Object(c.useState)(""),x=Object(s.a)(m,2),g=x[0],y=x[1];Object(c.useEffect)((function(){g&&(console.log("hi"),fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:a,body:d,pic:g})}).then((function(e){return e.json()})).then((function(t){t.error?j.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(j.a.toast({html:"created post successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)})))}),[g]);return Object(u.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(u.jsx)("input",{type:"text",placeholder:"title",value:a,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"body",value:d,onChange:function(e){return h(e.target.value)}}),Object(u.jsxs)("div",{className:"file-field input-field",children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:"Upload Image"}),Object(u.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(u.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","insta-clone"),e.append("cloud_name","yalecloud"),fetch("https://api.cloudinary.com/v1_1/yalecloud/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){y(e.url)})).catch((function(e){console.log(e)}))}()},children:"Submit post"})]})},g=null,y=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(f.a)(Object(f.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(f.a)(Object(f.a)({},e),{},{pic:t.payload}):e},v=n(22),w=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(N),o=i.state,r=i.dispatch,d=Object(l.g)().userid,j=Object(c.useState)(!o||!o.following.includes(d)),h=Object(s.a)(j,2),p=h[0],b=h[1];Object(c.useEffect)((function(){fetch("/user/".concat(d),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(u.jsx)(u.Fragment,{children:n?Object(u.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:n.user.name}),Object(u.jsx)("h5",{children:n.user.email}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(u.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(u.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(u.jsxs)("h6",{children:[n.user.following.length," following"]})]}),p?Object(u.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:d})}).then((function(e){return e.json()})).then((function(e){console.log(e),r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:[].concat(Object(v.a)(t.user.followers),[e._id])})})})),b(!1)}))},children:"Follow"}):Object(u.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:d})}).then((function(e){return e.json()})).then((function(e){r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:n})})})),b(!0)}))},children:"UnFollow"})]})]}),Object(u.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(u.jsx)("h2",{children:"loading...!"})})},S=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useContext)(N),o=i.state;i.dispatch;Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.posts)}))}),[]);return Object(u.jsx)("div",{className:"home",children:n.map((function(e){return Object(u.jsxs)("div",{className:"card home-card",children:[Object(u.jsxs)("h5",{style:{padding:"5px"},children:[Object(u.jsx)(r.b,{to:e.postedBy._id!==o._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==o._id&&Object(u.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}));var t},children:"delete"})]}),Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:e.photo})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(o._id)?Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(u.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(u.jsxs)("h6",{children:[Object(u.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name}),e.text]},e._id)})),Object(u.jsx)("form",{onSubmit:function(t){var c,i;t.preventDefault(),c=t.target[0].value,i=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:i,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:Object(u.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})},N=Object(c.createContext)(),C=function(){var e=Object(l.f)(),t=Object(c.useContext)(N),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.push("/signin")}),[]),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(l.a,{path:"/signin",children:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{path:"/signup",children:Object(u.jsx)(m,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/profile",children:Object(u.jsx)(O,{})}),Object(u.jsx)(l.a,{path:"/create",children:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"/profile/:userid",children:Object(u.jsx)(w,{})}),Object(u.jsx)(l.a,{path:"/myfollowingpost",children:Object(u.jsx)(S,{})})]})};var _=function(){var e=Object(c.useReducer)(y,g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)(N.Provider,{value:{state:n,dispatch:a},children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(C,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.8bf89c80.chunk.js.map