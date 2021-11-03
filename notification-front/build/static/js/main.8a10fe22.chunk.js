(this["webpackJsonpnotification-front"]=this["webpackJsonpnotification-front"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(24),i=n.n(s),r=(n(29),n(30),n(7)),l=n(8),o=n(11),d=n(10),u=(n(15),n(3)),j=n.n(u),b=n(0),m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).HandleSendMessage=function(e){e.preventDefault();var t={title:e.target.msg_title.value,content:e.target.msg_content.value,receiver_email:e.target.to_email.value,sender:a.props.userid};console.log(t),j.a.post("".concat(a.url,"/notifications/notify/"),t).then((function(){e.target.msg_title.value="",e.target.msg_content.value="",e.target.to_email.value="",a.setState({done:1})})).catch((function(e){console.log(e)}))},a.state={done:"default"},a.url="",a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("form",{onSubmit:this.HandleSendMessage,children:Object(b.jsxs)("div",{className:"d-flex flex-column mt-5",children:[Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"From"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",disabled:!0,value:this.props.useremail})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"To"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"to_email"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Message Title"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter message title",name:"msg_title"})]}),Object(b.jsxs)("div",{className:"form-group mb-3",children:[Object(b.jsx)("label",{children:"Message Content"}),Object(b.jsx)("textarea",{type:"email",className:"form-control",placeholder:"Enter message content",name:"msg_content"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send"})]})})})}}]),n}(a.Component),f=n(14),h=n(12),x=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).HandleLoginas=function(e){e.preventDefault();var t=e.target.user_id.value;j.a.get("".concat(a.url,"/users/unread-notify/").concat(t,"/")).then((function(e){console.log(e.data),a.setState({notify_count:e.data.count,notify_content:Object(h.a)(e.data.notifications),current_username:e.data.username,current_mail:e.data.useremail,current_id:t},(function(){console.log(a.state.notify_content)}))}))},a.ChangeNotifyState=function(e){j.a.patch("".concat(a.url,"/notifications/notify/").concat(e,"/")).then((function(){console.log(e);var t,n=a.state.notify_content,c=Object(f.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;s.id==e&&(n.splice(n.indexOf(s),1),a.setState({notify_content:Object(h.a)(n),notify_count:a.state.notify_count-=1}))}}catch(i){c.e(i)}finally{c.f()}}))},a.DeleteNotify=function(e){j.a.delete("".concat(a.url,"/notifications/notify/").concat(e,"/")).then((function(){console.log(e);var t,n=a.state.notify_content,c=Object(f.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;s.id==e&&(n.splice(n.indexOf(s),1),a.setState({notify_content:Object(h.a)(n),notify_count:a.state.notify_count-=1}))}}catch(i){c.e(i)}finally{c.f()}}))},a.state={notify_content:[],notify_count:0,current_username:"",current_mail:"",current_id:0},a.url="",a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"collapse",id:"navbarToggleExternalContent",children:Object(b.jsxs)("div",{className:"bg-dark p-4",children:[Object(b.jsx)("h5",{className:"text-white h4",children:"Collapsed content"}),Object(b.jsx)("span",{className:"text-muted",children:"Toggleable via the navbar brand."})]})}),Object(b.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("form",{className:"d-flex",onSubmit:this.HandleLoginas,children:[Object(b.jsx)("div",{class:" mx-sm-3 ",children:Object(b.jsx)("input",{type:"text",class:"form-control",placeholder:"login as",name:"user_id"})}),Object(b.jsx)("button",{type:"submit",className:"btn btn-light",children:"login"})]}),Object(b.jsx)("h3",{className:"text-white",children:this.state.current_username?"welcom "+this.state.current_username:""}),this.state.current_username?Object(b.jsxs)("button",{type:"button",className:"btn btn-primary position-relative",children:["Notification",Object(b.jsxs)("span",{className:"position-absolute top-0 mt-1 mb-1 start-0 translate-middle badge rounded-pill bg-danger",children:[this.state.notify_count,"+",Object(b.jsx)("span",{className:"visually-hidden",children:"unread messages"})]})]}):""]})}),Object(b.jsx)(m,{useremail:this.state.current_mail,userid:this.state.current_id}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"d-flex flex-row justify-content-center flex-wrap",children:this.state.notify_content.map((function(t,n){return Object(b.jsxs)("div",{className:" shadow card  m-3",style:{"max-width":"18rem"},children:[Object(b.jsx)("div",{className:"card-header",children:t.sender}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.title}),Object(b.jsx)("p",{className:"card-text",children:t.content}),Object(b.jsxs)("span",{children:["seen state : ",t.state?"read":"unseen"]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){return e.ChangeNotifyState(t.id)},children:"as read"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.DeleteNotify(t.id)},children:"delete"})]})]},n)}))})]})}}]),n}(a.Component);var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.8a10fe22.chunk.js.map