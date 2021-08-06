(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{331:function(e,t,a){e.exports=a(691)},336:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},359:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},363:function(e,t,a){},364:function(e,t,a){},691:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(307),c=a.n(s);a(336),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,i=a(7),l=a.n(i),u=a(12),m=a(10),p=a(14),d=a(16),v=a(15),h=(a(338),a(63)),b=a(13),E=(a(339),a(340),a(308)),f=a(11);!function(e){e[e.getAllVacations=0]="getAllVacations",e[e.addVacation=1]="addVacation",e[e.unFollowedVacations=2]="unFollowedVacations",e[e.getUserVacations=3]="getUserVacations",e[e.deleteVacation=4]="deleteVacation",e[e.getAllUsers=5]="getAllUsers",e[e.register=6]="register",e[e.login=7]="login",e[e.getUser=8]="getUser"}(o||(o={}));var g=Object(E.a)((function(e,t){var a=Object(f.a)({},e);switch(t.type){case o.getUser:a.userId=t.payload.userId,a.isAdmin=t.payload.isAdmin;break;case o.unFollowedVacations:a.unFollowedVacations=t.payload;break;case o.login:a.userId=t.payload.userId,a.isAdmin=t.payload.isAdmin;break;case o.getUserVacations:a.userVacations=t.payload;break;case o.getAllVacations:a.vacations=t.payload;break;case o.addVacation:a.vacations.push(t.payload)}return a}),new function e(){Object(m.a)(this,e),this.userId=void 0,this.isAdmin=void 0,this.userVacations=void 0,this.vacations=void 0,this.unFollowedVacations=void 0,this.vacations=new Array,this.unFollowedVacations=new Array,this.userVacations=new Array}),w=a(310),y=a.n(w).a.create({withCredentials:!0}),k=function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,null,[{key:"_initialize",value:function(){e.serverUrl="https://shir-vacation-project.herokuapp.com"}}]),e}();k.serverUrl=void 0,k._initialize();var S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).props=void 0,e}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"popup"},n.a.createElement("div",{className:"popup_inner"},n.a.createElement("h1",null,this.props.text),n.a.createElement("button",{onClick:this.props.closePopup},"Close me")))}}]),a}(r.Component),N=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.state={vacations:[],userVacations:[],showPopup:!1},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().userVacations;r.setState({userVacations:e})})),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get(k.serverUrl+"/api/vacations",{withCredentials:!0});case 3:t=e.sent,a=t.data,this.setState({vacations:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"togglePopup",value:function(){var e=document.querySelectorAll("input");g.getState().userId||(this.setState({showPopup:!this.state.showPopup}),e.forEach((function(e){return e.checked=!1})))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.showPopup?n.a.createElement(S,{text:"You have to be logged in to follow vacations",closePopup:this.togglePopup.bind(this)}):null,n.a.createElement("div",{className:"vacations"},this.state.vacations.map((function(t){return n.a.createElement("div",{className:"vacation-card",key:t.vacationId},n.a.createElement("div",{className:"followCheck"},n.a.createElement("label",null,"FOLLOW  "),n.a.createElement("input",{id:t.destination,type:"checkbox",onClick:e.togglePopup.bind(e)})),n.a.createElement("p",{className:"location"},t.destination),n.a.createElement("p",{className:"description"},t.description),n.a.createElement("p",null,"From: ",new Date(t.startDate).toLocaleDateString()),n.a.createElement("p",null,"To: ",new Date(t.endDate).toLocaleDateString()),n.a.createElement("p",null,"Price: ",t.price,"$ "),n.a.createElement("div",{className:"img-container"},n.a.createElement("p",null,"Following: ",t.totalFollowers),n.a.createElement("img",{src:"/assets/images/"+t.vacationImg,alt:"vacation-Pic"})))}))))}}]),a}(r.Component),O=(a(359),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.state={userVacations:[]},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().userVacations;r.setState({userVacations:e})})),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=g.getState().userId,e.next=4,y.get(k.serverUrl+"/api/vacations/"+t);case 4:a=e.sent,r=a.data,g.dispatch({type:o.getUserVacations,payload:r}),this.setState({userVacations:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"unFollowVacation",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=g.getState().userId,e.next=4,y.post(k.serverUrl+"/api/unfollow-vacation",{userId:a,vacationId:t});case 4:r=e.sent,n=r.data,s=n.followedVacations,c=n.unFollowedVacations,g.dispatch({type:o.getUserVacations,payload:s}),g.dispatch({type:o.unFollowedVacations,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"userVacations"},n.a.createElement("h3",null,"Vacations you are following:"),g.getState().userVacations.map((function(t){return n.a.createElement("div",{className:"vacation-card",key:t.vacationId},n.a.createElement("div",{className:"followCheck"},n.a.createElement("label",null,"Follow"),n.a.createElement("input",{type:"checkbox",defaultChecked:!0,onClick:function(){return e.unFollowVacation(t.vacationId)}})),n.a.createElement("p",{className:"location"},t.destination),n.a.createElement("p",{className:"description"},t.description),n.a.createElement("p",null,"From: ",new Date(t.startDate).toLocaleDateString()),n.a.createElement("p",null,"To: ",new Date(t.endDate).toLocaleDateString()),n.a.createElement("p",null,"Price: ",t.price,"$ "),n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:"/assets/images/"+t.vacationImg,alt:"vacation-Pic"})),n.a.createElement("br",null))})))}}]),a}(r.Component)),j=(a(360),function e(t,a,r,n,s,c,o,i){Object(m.a)(this,e),this.vacationId=t,this.destination=a,this.description=r,this.startDate=n,this.endDate=s,this.price=c,this.vacationImg=o,this.totalFollowers=i}),x=a(72),V=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.setDestination=function(e){var t=e.target.value,a="";""===t&&(a=" *Location name is required");var n=Object(f.a)({},r.state.vacation);n.destination=t,r.setState({vacation:n});var s=Object(f.a)({},r.state.errors);s.destinationError=a,r.setState({errors:s})},r.setDescription=function(e){var t=e.target.value,a="";""===t&&(a=" *Description is required");var n=Object(f.a)({},r.state.vacation);n.description=t,r.setState({vacation:n});var s=Object(f.a)({},r.state.errors);s.descriptionError=a,r.setState({errors:s})},r.setPrice=function(e){var t=+e.target.value,a="";t<=0&&(a=" *Price need to be higher than 0");var n=Object(f.a)({},r.state.vacation);n.price=t,r.setState({vacation:n});var s=Object(f.a)({},r.state.errors);s.priceError=a,r.setState({errors:s})},r.setStartDate=function(e){var t=e.target.value,a="";t&&""!==t||(a=" *Required!"),Date.parse(t)<Date.now()&&(a=" *Date must be in the future!");var n=Object(f.a)({},r.state.vacation);n.startDate=new Date(t),r.setState({vacation:n});var s=Object(f.a)({},r.state.errors);s.startDateError=a,r.setState({errors:s})},r.setEndDate=function(e){var t=e.target.value,a="";t&&""!==t||(a=" *Required!"),Date.parse(t)<Date.now()&&(a=" *Date must be in the future!");var n=Object(f.a)({},r.state.vacation);n.endDate=new Date(t),r.setState({vacation:n});var s=Object(f.a)({},r.state.errors);s.endDateError=a,r.setState({errors:s})},r.isValidated=function(){for(var e in r.state.errors)if(""!==r.state.errors[e].toString())return!1;return!0},r.addVacation=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isValidated()){e.next=13;break}return e.prev=1,e.next=4,y.post(k.serverUrl+"/api/vacations",r.state.vacation,{withCredentials:!0});case 4:t=e.sent,a=t.data,g.dispatch({type:o.addVacation,payload:a}),alert("Vacation added..."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Error: "+e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),r.deleteVacation=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.post(k.serverUrl+"/api/delete-vacation",{vacationId:t},{withCredentials:!0});case 3:return e.sent,e.next=6,y.get(k.serverUrl+"/api/vacations",{withCredentials:!0});case 6:a=e.sent,r=a.data,g.dispatch({type:o.getAllVacations,payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),r.state={vacations:[],vacation:new j,errors:{destinationError:" *",descriptionError:" *",startDateError:" *",endDateError:" *",priceError:" *"}},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().vacations;r.setState({vacations:e})})),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get(k.serverUrl+"/api/vacations",{withCredentials:!0});case 3:t=e.sent,a=t.data,g.dispatch({type:o.getAllVacations,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"admin-vacations"},n.a.createElement("div",{className:"insert vacation-card"},n.a.createElement("p",{className:"insert-header"},"Add vacation here:"),n.a.createElement("p",null," Location:"),n.a.createElement("input",{type:"text",onChange:this.setDestination,value:this.state.vacation.destination}),n.a.createElement("span",{className:"error"},this.state.errors.destinationError),n.a.createElement("p",null," Description:"),n.a.createElement("input",{type:"text",onChange:this.setDescription,value:this.state.vacation.description}),n.a.createElement("span",{className:"error"},this.state.errors.descriptionError),n.a.createElement("p",null,"Start date:"),n.a.createElement("input",{type:"date",onChange:this.setStartDate}),n.a.createElement("span",{className:"error"},this.state.errors.startDateError),n.a.createElement("p",null,"End date:"),n.a.createElement("input",{type:"date",onChange:this.setEndDate}),n.a.createElement("span",{className:"error"},this.state.errors.endDateError),n.a.createElement("p",null," Price:"),n.a.createElement("input",{type:"number",onChange:this.setPrice,value:this.state.vacation.price}),n.a.createElement("span",{className:"error"},this.state.errors.priceError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(x.a,{disabled:!this.isValidated(),variant:"dark",className:"save",onClick:this.addVacation},"SAVE")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("h3",null,"Existing vacations"),g.getState().vacations.map((function(t){return n.a.createElement("div",{className:"vacation-card",key:t.vacationId},n.a.createElement("p",{className:"location"},t.destination),n.a.createElement("p",{className:"description"},t.description),n.a.createElement("p",null,"From: ",new Date(t.startDate).toLocaleDateString()),n.a.createElement("p",null,"To: ",new Date(t.endDate).toLocaleDateString()),n.a.createElement("p",null,"Price: ",t.price,"$ "),n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:"/assets/images/"+t.vacationImg,alt:"vacation-Pic"})),n.a.createElement("button",{className:"delete",onClick:function(){return e.deleteVacation(t.vacationId)}},"Delete vacation"),n.a.createElement("br",null))})))}}]),a}(r.Component),D=(a(361),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.state={userNotFollowVacations:[]},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().unFollowedVacations;r.setState({userNotFollowVacations:e})})),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.getState().userVacations.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=g.getState().userId,e.next=6,y.get(k.serverUrl+"/api/not-following-vacations/"+t);case 6:a=e.sent,r=a.data,g.dispatch({type:o.unFollowedVacations,payload:r}),this.setState({userNotFollowVacations:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0.message);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"followVacation",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=g.getState().userId,e.next=4,y.post(k.serverUrl+"/api/follow-vacation",{userId:a,vacationId:t});case 4:r=e.sent,n=r.data,s=n.followedVacations,c=n.unFollowedVacations,g.dispatch({type:o.getUserVacations,payload:s}),g.dispatch({type:o.unFollowedVacations,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"userVacations"},n.a.createElement("h3",null,"Vacations you might be intrested in:"),this.state.userNotFollowVacations.map((function(t){return n.a.createElement("div",{className:"vacation-card",key:t.vacationId},n.a.createElement("div",{className:"followCheck"},n.a.createElement("label",null,"FOLLOW  "),n.a.createElement("input",{type:"checkbox",onClick:function(){return e.followVacation(t.vacationId)}})),n.a.createElement("p",{className:"location"},t.destination),n.a.createElement("p",{className:"description"},t.description),n.a.createElement("p",null,"From: ",new Date(t.startDate).toLocaleDateString()),n.a.createElement("p",null,"To: ",new Date(t.endDate).toLocaleDateString()),n.a.createElement("p",null,"Price: ",t.price,"$ "),n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:"/assets/images/"+t.vacationImg,alt:"vacation-Pic"})),n.a.createElement("br",null))})))}}]),a}(r.Component)),I=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g.getState().userId,e.next=4,y.get(k.serverUrl+"/auth/get-user");case 4:t=e.sent,g.dispatch({type:o.getUser,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Error: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return g.getState().userId?g.getState().isAdmin?n.a.createElement(V,null):n.a.createElement("div",{className:"home-page"},n.a.createElement(O,null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement(D,null)):n.a.createElement(N,null)}}]),a}(r.Component),C=(a(362),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.updateUserName=function(e){return r.setState({userName:e.target.value})},r.updatePassword=function(e){return r.setState({password:e.target.value})},r.tryLogin=Object(u.a)(l.a.mark((function e(){var t,a,n,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="",a=Object(f.a)({},r.state.errors),e.prev=2,n=r.state,s=n.userName,c=n.password,!s||""===c){e.next=11;break}return e.next=7,y.post(k.serverUrl+"/auth/login",{userName:s,password:c});case 7:200===(i=e.sent).status&&(g.dispatch({type:o.login,payload:i.data}),r.props.history.push("/home")),e.next=14;break;case 11:t="* Please enter user name AND password",a.loginError=t,r.setState({errors:a});case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),t="* User name and password do not match",a.loginError=t,r.setState({errors:a});case 21:case"end":return e.stop()}}),e,null,[[2,16]])}))),r.state={userName:"",password:"",userId:null,errors:{loginError:""}},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().userId;r.setState({userId:e})})),r}return Object(p.a)(a,[{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"login-section"},n.a.createElement("h1",null,"Login page"),n.a.createElement("br",null),n.a.createElement("form",null,n.a.createElement("input",{type:"text",onChange:this.updateUserName,value:this.state.userName,placeholder:"User name..."}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"password",value:this.state.password,placeholder:"Password",onChange:this.updatePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"error"},""===this.state.errors.loginError?null:this.state.errors.loginError),n.a.createElement("br",null),n.a.createElement(x.a,{variant:"dark",className:"save",type:"button",onClick:this.tryLogin},"Login")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null)),n.a.createElement("br",null),n.a.createElement("br",null))}}]),a}(r.Component)),U=(a(363),function e(t,a,r,n,s,c){Object(m.a)(this,e),this.userId=t,this.firstName=a,this.lastName=r,this.userName=n,this.password=s,this.isAdmin=c}),F=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).setFirstName=function(e){var t=e.target.value,a="";""!==t&&t||(a=" *Required");var n=Object(f.a)({},r.state.user);n.firstName=t,r.setState({user:n});var s=Object(f.a)({},r.state.errors);s.firstNameError=a,r.setState({errors:s})},r.setLastName=function(e){var t=e.target.value,a="";""!==t&&t||(a=" *Required");var n=Object(f.a)({},r.state.user);n.lastName=t,r.setState({user:n});var s=Object(f.a)({},r.state.errors);s.lastNameError=a,r.setState({errors:s})},r.setUserName=function(e){var t=e.target.value,a="";""!==t&&t||(a=" *Required");var n=Object(f.a)({},r.state.user);n.userName=t,r.setState({user:n});var s=Object(f.a)({},r.state.errors);s.userNameError=a,r.setState({errors:s})},r.setPassword=function(e){var t=e.target.value,a="";(""===t||!t||t.length<5)&&(a=" *Required, min 5 chars long");var n=Object(f.a)({},r.state.user);n.password=t,r.setState({user:n});var s=Object(f.a)({},r.state.errors);s.passwordError=a,r.setState({errors:s})},r.isValidated=function(){for(var e in r.state.errors)if(""!==r.state.errors[e].toString())return!1;return!0},r.register=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)({},r.state.errors),e.prev=1,e.next=4,y.post(k.serverUrl+"/auth/register",r.state.user,{withCredentials:!0});case 4:210===(a=e.sent).status?(t.userNameError=" *Already taken!",r.setState({errors:t})):(n=a.data,g.dispatch({type:o.register,payload:n}),alert("You have been registered..."),r.props.history.push("/home")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Error: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),r.state={user:new U,errors:{firstNameError:" *",lastNameError:" *",userNameError:" *",passwordError:" *"}},r}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"register-page"},n.a.createElement("h1",null,"Registration page"),n.a.createElement("form",null,n.a.createElement("p",null,"First name: "),n.a.createElement("input",{type:"text",onChange:this.setFirstName,value:this.state.user.firstName}),n.a.createElement("span",{className:"error"},this.state.errors.firstNameError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Last name: "),n.a.createElement("input",{type:"text",onChange:this.setLastName,value:this.state.user.lastName}),n.a.createElement("span",{className:"error"},this.state.errors.lastNameError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"User name: "),n.a.createElement("input",{type:"text",onChange:this.setUserName,value:this.state.user.userName}),n.a.createElement("span",{className:"error"},this.state.errors.userNameError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Password: "),n.a.createElement("input",{type:"password",onChange:this.setPassword,value:this.state.user.password}),n.a.createElement("span",{className:"error"},this.state.errors.passwordError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(x.a,{disabled:!this.isValidated(),variant:"dark",className:"save",type:"button",onClick:this.register},"Register")))}}]),a}(r.Component),P=(a(364),a(700)),A=a(704),L=a(706),R=a(701),W=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.state={userVacations:[],vacations:[]},r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.getState().userVacations.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,y.get(k.serverUrl+"/api/vacations");case 5:t=e.sent,a=t.data,g.dispatch({type:o.getAllVacations,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=g.getState().vacations.filter((function(e){return e.totalFollowers>0})).map((function(e){return{vacationName:e.destination,followers:e.totalFollowers}}));return n.a.createElement("div",{className:"reports"},n.a.createElement(P.a,{width:1e3,theme:A.a.material,domainPadding:50},n.a.createElement(L.a,null),n.a.createElement(L.a,{dependentAxis:!0,tickFormat:function(e){return parseInt(e,10)}}),n.a.createElement(R.a,{data:e,x:"vacationName",y:"followers"})))}}]),a}(r.Component),q=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).unsubscribeStore=void 0,r.state={userId:Number},r.state={userId:null},r.unsubscribeStore=g.subscribe((function(){var e=g.getState().userId;r.setState({userId:e})})),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=g.getState().userId,this.setState({userId:t})}catch(a){alert(a.message)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.unsubscribeStore()}},{key:"logout",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post(k.serverUrl+"/auth/logout");case 2:window.location.href="http://localhost:3001";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[n.a.createElement(h.b,{to:"/home",exact:!0,key:"123456"}," Home")],t=n.a.createElement(h.b,{to:"/login",exact:!0,key:"123465"},n.a.createElement("span",null," | ")," Login"),a=n.a.createElement(h.b,{to:"/logout",exact:!0,key:"123434365",onClick:this.logout},n.a.createElement("span",null," | ")," Logout"),r=n.a.createElement(h.b,{to:"/register",exact:!0,key:"123564"},n.a.createElement("span",null," | ")," Register "),s=n.a.createElement(h.b,{to:"/reports",exact:!0,key:"1235647"},n.a.createElement("span",null," | ")," Reports ");return g.getState().userId||(e.push(t),e.push(r)),g.getState().isAdmin&&e.push(s),g.getState().userId&&e.push(a),n.a.createElement("div",{className:"layout"},n.a.createElement(h.a,null,n.a.createElement("nav",{className:"navbar fixed-top bg-secondary text-dark"},n.a.createElement("div",null,e)),n.a.createElement("h1",{className:"Header"},"Any where you wanna go..."),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("div",{className:"main-container"},n.a.createElement(b.d,null,n.a.createElement(b.b,{path:"/home",component:I,exact:!0,key:"1"}),n.a.createElement(b.b,{path:"/login",component:C,exact:!0,key:"2"}),n.a.createElement(b.b,{path:"/register",component:F,exact:!0,key:"3"}),n.a.createElement(b.b,{path:"/admin",component:V,exact:!0,key:"4"}),n.a.createElement(b.b,{path:"/reports",component:W,exact:!0,key:"5"}),n.a.createElement(b.a,{from:"/",to:"/home"})))),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("div",{className:"footer"},n.a.createElement("footer",null,"\xa9ShirDahan 2020")),n.a.createElement("br",null),n.a.createElement("br",null))}}]),a}(r.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[331,1,2]]]);
//# sourceMappingURL=main.77044b29.chunk.js.map