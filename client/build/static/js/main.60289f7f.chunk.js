(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,a){e.exports=a(80)},54:function(e,t,a){},55:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),c=(a(54),a(7)),s=a(8),i=a(10),m=a(9),u=a(11),p=(a(55),a(100)),d=a(107),h=a(102),g=a(104),f=a(105),E=a(103),b=a(43),v=a.n(b),y=a(18),k=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function O(){var e=k();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(v.a,null)),r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(y.b,{className:"navbar-link",to:"/"},"Tweeter")),localStorage.getItem("loggedIn")?r.a.createElement(f.a,{color:"inherit"},r.a.createElement(y.b,{className:"navbar-link",to:"/profile"},"Profile")):r.a.createElement(f.a,{color:"inherit"},r.a.createElement(y.b,{className:"navbar-link",to:"/signup"},"Signup")),r.a.createElement(f.a,{color:"inherit"},localStorage.getItem("loggedIn")?r.a.createElement(y.b,{className:"navbar-link",to:"/logout"},"Logout"):r.a.createElement(y.b,{className:"navbar-link",to:"/login"},"Login")))))}var I=a(23),j=a(106),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Tweet"},r.a.createElement("h3",null,"@",this.props.username),r.a.createElement("p",null,this.props.content))}}]),t}(r.a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return 0===this.props.posts.length?r.a.createElement("h1",null,"Loading..."):(console.log(this.props.posts),r.a.createElement(j.a,{className:"Container"},this.props.posts.slice(0).reverse().map((function(e){return r.a.createElement(w,{key:e._id,firstname:e.firstname,username:e.username,content:e.content})}))))}}]),t}(r.a.Component),C=a(19),B=a.n(C),x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this,t=localStorage.getItem("username"),a=localStorage.getItem("_id"),n=document.getElementById("post-area").value;B()({url:"https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/posts",method:"post",headers:{"Access-Control-Allow-Origin":!0},data:{user_id:a,username:t,content:n}}).then((function(r){e.props.addPost({_id:r.data._id,user_id:a,username:t,content:n,date:r.data.date})})),document.getElementById("post-area").value=""}},{key:"render",value:function(){return r.a.createElement("div",{className:"postform"},r.a.createElement("textarea",{id:"post-area",placeholder:"What's happening?"}),r.a.createElement("div",null,r.a.createElement("button",{id:"post-button",onClick:this.handleClick.bind(this)},"Post")))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],addPost:function(e){a.setState({posts:a.state.posts.concat(e)}),console.log(a.state.posts)}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/posts").then((function(t){return e.setState({posts:t.data})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,localStorage.getItem("loggedIn")?r.a.createElement("h1",{className:"welcome-heading"},"Welcome, ",localStorage.getItem("username")):r.a.createElement("h1",{className:"welcome-heading"},"Welcome"),localStorage.getItem("loggedIn")?r.a.createElement(x,{addPost:this.state.addPost}):r.a.createElement(r.a.Fragment,null),r.a.createElement(S,{posts:this.state.posts}))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this,t=document.getElementById("login-username").value,a=document.getElementById("login-password").value;B()({method:"post",url:"https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/auth",data:{username:t,password:a}}).then((function(e){if(!0===e.data.result)return B.a.get("https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/users/".concat(t));throw new Error("Username or password is wrong")})).then((function(e){console.log(e),localStorage.setItem("loggedIn","true"),localStorage.setItem("_id",e.data._id),localStorage.setItem("username",e.data.username),localStorage.setItem("firstname",e.data.firstname),localStorage.setItem("lastname",e.data.lastname)})).then((function(){e.setState({redirect:!0}),e.props.login()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!0===this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",null,"Username: ",r.a.createElement("input",{id:"login-username",type:"text"}),r.a.createElement("br",null),"Password: ",r.a.createElement("input",{id:"login-password",type:"password"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleClick.bind(this)},"Login")))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fillInFields",value:function(){var e=document.getElementById("username-field"),t=document.getElementById("email-field"),a=document.getElementById("firstname-field"),n=document.getElementById("lastname-field");B()({method:"get",url:"https://polar-peak-00113.herokuapp.com/users/".concat(localStorage.getItem("username"))}).then((function(r){e.value=r.data.username,t.value=r.data.email,a.value=r.data.firstname,n.value=r.data.lastname}))}},{key:"componentDidMount",value:function(){this.fillInFields()}},{key:"handleClickSave",value:function(){var e=this,t=document.getElementById("username-field"),a=document.getElementById("email-field"),n=document.getElementById("firstname-field"),r=document.getElementById("lastname-field");B()({method:"PUT",url:"https://polar-peak-00113.herokuapp.com/users/".concat(localStorage.getItem("_id")),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},data:JSON.stringify({username:t.value,email:a.value,lastname:r.value,firstname:n.value})}).then((function(){localStorage.setItem("username",t.value),localStorage.setItem("email",a.value),localStorage.setItem("firstname",n.value),localStorage.setItem("lastname",r.value)})).then((function(){e.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"profile-page"},r.a.createElement("h1",null,localStorage.getItem("username"),"'s Profile"),"Username",r.a.createElement("input",{type:"text",id:"username-field",readOnly:!0}),r.a.createElement("br",null),"Email",r.a.createElement("input",{type:"text",id:"email-field"})," ",r.a.createElement("br",null),"Firstname",r.a.createElement("input",{type:"text",id:"firstname-field"})," ",r.a.createElement("br",null),"Lastname",r.a.createElement("input",{type:"text",id:"lastname-field"})," ",r.a.createElement("br",null),r.a.createElement("button",{id:"save",onClick:this.handleClickSave.bind(this)},"Save Changes"),r.a.createElement("button",{id:"reset",onClick:this.fillInFields},"Reset"))}}]),t}(r.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.clear(),this.props.logout()}},{key:"render",value:function(){return r.a.createElement(I.a,{to:"/"})}}]),t}(r.a.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=this,t=document.getElementById("username-form").value,a=document.getElementById("email-form").value,n=document.getElementById("password-form").value,r=document.getElementById("firstname-form").value,l=document.getElementById("lastname-form").value;B.a.post("https://cors-anywhere.herokuapp.com/https://polar-peak-00113.herokuapp.com/users",{username:t,email:a,password:n,firstname:r,lastname:l}).then((function(){e.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/login"}):r.a.createElement("div",{className:"signup-form"},r.a.createElement("h1",null,"Sign up"),"Username:",r.a.createElement("input",{type:"text",id:"username-form"})," ",r.a.createElement("br",null),"Email: ",r.a.createElement("input",{type:"text",id:"email-form"})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{type:"password",id:"password-form"})," ",r.a.createElement("br",null),"First Name: ",r.a.createElement("input",{type:"text",id:"firstname-form"})," ",r.a.createElement("br",null),"Last Name: ",r.a.createElement("input",{type:"text",id:"lastname-form"})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleClick.bind(this)},"Submit"))}}]),t}(r.a.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:!1,setLogIn:function(){return a.setState({loggedIn:!0})},setLogOut:function(){return a.setState({loggedIn:!1})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(O,null),r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(I.b,{exact:!0,path:"/login"},r.a.createElement(L,{login:this.state.setLogIn})),r.a.createElement(I.b,{exact:!0,path:"/logout"},r.a.createElement(_,{logout:this.state.setLogOut})),r.a.createElement(I.b,{exact:!0,path:"/profile"},r.a.createElement(P,null)),r.a.createElement(I.b,{exact:!0,path:"/signup"},r.a.createElement(A,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.60289f7f.chunk.js.map