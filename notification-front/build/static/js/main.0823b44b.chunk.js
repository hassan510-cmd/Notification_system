(this["webpackJsonpnotification-front"]=this["webpackJsonpnotification-front"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(35),r=n.n(s),i=(n(42),n(43),n(9)),l=n(10),o=n(12),d=n(11),j=(n(16),n(0)),m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("form",{onSubmit:this.HandleSendMessage,children:Object(j.jsxs)("div",{className:"d-flex flex-column mt-5",children:[Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"to_email"})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"First name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email",name:"to_email"})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"Last name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email",name:"to_email"})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter message title",name:"msg_title"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"register"})]})})})}}]),n}(a.Component),b=n(13),u=n.n(b),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).HandleSendMessage=function(e){e.preventDefault();var t={title:e.target.msg_title.value,content:e.target.msg_content.value,receiver_email:e.target.to_email.value,sender:a.props.userid};console.log(t),u.a.post("".concat(a.url,"/notifications/notify/"),t).then((function(){e.target.msg_title.value="",e.target.msg_content.value="",e.target.to_email.value="",a.setState({done:1})})).catch((function(e){console.log(e)}))},a.state={done:"default"},a.url="",a}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("form",{onSubmit:this.HandleSendMessage,children:Object(j.jsxs)("div",{className:"d-flex flex-column mt-5",children:[Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"From"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",disabled:!0,value:this.props.useremail})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"To"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"to_email"})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"Message Title"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter message title",name:"msg_title"})]}),Object(j.jsxs)("div",{className:"form-group mb-3",children:[Object(j.jsx)("label",{children:"Message Content"}),Object(j.jsx)("textarea",{type:"email",className:"form-control",placeholder:"Enter message content",name:"msg_content"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send"})]})})})}}]),n}(a.Component),f=n(24),x=n(21),O=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).HandleLoginas=function(e){e.preventDefault();var t=e.target.user_id.value;u.a.get("".concat(a.url,"/users/unread-notify/").concat(t,"/")).then((function(e){console.log(e.data),a.setState({notify_count:e.data.count,notify_content:Object(x.a)(e.data.notifications),current_username:e.data.username,current_mail:e.data.useremail,current_id:t},(function(){console.log(a.state.notify_content)}))}))},a.ChangeNotifyState=function(e){u.a.patch("".concat(a.url,"/notifications/notify/").concat(e,"/")).then((function(){console.log(e);var t,n=a.state.notify_content,c=Object(f.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;s.id==e&&(n.splice(n.indexOf(s),1),a.setState({notify_content:Object(x.a)(n),notify_count:a.state.notify_count-=1}))}}catch(r){c.e(r)}finally{c.f()}}))},a.DeleteNotify=function(e){u.a.delete("".concat(a.url,"/notifications/notify/").concat(e,"/")).then((function(){console.log(e);var t,n=a.state.notify_content,c=Object(f.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;s.id==e&&(n.splice(n.indexOf(s),1),a.setState({notify_content:Object(x.a)(n),notify_count:a.state.notify_count-=1}))}}catch(r){c.e(r)}finally{c.f()}}))},a.state={notify_content:[],notify_count:0,current_username:"",current_mail:"",current_id:0},a.url="",a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"collapse",id:"navbarToggleExternalContent",children:Object(j.jsxs)("div",{className:"bg-dark p-4",children:[Object(j.jsx)("h5",{className:"text-white h4",children:"Collapsed content"}),Object(j.jsx)("span",{className:"text-muted",children:"Toggleable via the navbar brand."})]})}),Object(j.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsxs)("form",{className:"d-flex",onSubmit:this.HandleLoginas,children:[Object(j.jsx)("div",{class:" mx-sm-3 ",children:Object(j.jsx)("input",{type:"text",class:"form-control",placeholder:"login as",name:"user_id"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-light",children:"login"})]}),Object(j.jsx)("h3",{className:"text-white",children:this.state.current_username?"welcom "+this.state.current_username:""}),this.state.current_username?Object(j.jsxs)("button",{type:"button",className:"btn btn-primary position-relative",children:["Notification",Object(j.jsxs)("span",{className:"position-absolute top-0 mt-1 mb-1 start-0 translate-middle badge rounded-pill bg-danger",children:[this.state.notify_count,"+",Object(j.jsx)("span",{className:"visually-hidden",children:"unread messages"})]})]}):""]})}),Object(j.jsx)(h,{useremail:this.state.current_mail,userid:this.state.current_id}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"d-flex flex-row justify-content-center flex-wrap",children:this.state.notify_content.map((function(t,n){return Object(j.jsxs)("div",{className:" shadow card  m-3",style:{"max-width":"18rem"},children:[Object(j.jsx)("div",{className:"card-header",children:t.sender}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.title}),Object(j.jsx)("p",{className:"card-text",children:t.content}),Object(j.jsxs)("span",{children:["seen state : ",t.state?"read":"unseen"]})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){return e.ChangeNotifyState(t.id)},children:"as read"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.DeleteNotify(t.id)},children:"delete"})]})]},n)}))})]})}}]),n}(a.Component),p=n(20),v=n(2);function g(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.a,{path:"/users",children:Object(j.jsx)(N,{})}),Object(j.jsx)(v.a,{path:"/",children:Object(j.jsx)(y,{})})]}),Object(j.jsxs)("div",{className:"d-flex mt-3 justify-content-around",children:[Object(j.jsx)(p.b,{to:"/",className:"btn btn-success",children:"Home"}),Object(j.jsx)(p.b,{to:"/users",className:"btn btn-primary",children:"Users"})]})]})})}function y(){return Object(j.jsx)(O,{})}function N(){return Object(j.jsx)(m,{})}var _=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.0823b44b.chunk.js.map