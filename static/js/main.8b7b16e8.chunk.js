(this["webpackJsonp1-task-react-org"]=this["webpackJsonp1-task-react-org"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(8),s=n.n(r),c=(n(13),n(2)),i=n(3),j=n(5),h=n(4),l=n(0),u=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["Witaj, ",this.props.name,"!"]})})}}]),n}(a.Component);function o(e){return Object(l.jsxs)("h1",{children:["Cze\u015b\u0107, ",e.name,"!"]})}var b=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("h1",{children:["Cze\u015b\u0107, ",this.props.name,"!"]})}}]),n}(a.Component);var d=n(6),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.props.handlerInputValue(e.target.value)}},{key:"render",value:function(){var e=this.props.inputValue;return Object(l.jsxs)("label",{children:["Imi\u0119:",Object(l.jsx)("input",{type:"text",value:e,onChange:this.handleChange})]})}}]),n}(a.Component);function p(e){return Object(l.jsx)("p",{children:Object(l.jsxs)("strong",{children:[e.description," ",e.show]})})}var x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(d.a)(a)),a.handlerUserNameChange=a.handlerUserNameChange.bind(Object(d.a)(a)),a.state={valueName:"Podaj imi\u0119",userName:"User"},a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({valueName:e.target.value})}},{key:"handlerUserNameChange",value:function(e){this.setState({userName:e})}},{key:"render",value:function(){var e=this.state.valueName,t=this.state.userName;return console.log("state",this.state),Object(l.jsxs)(a.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:e,onChange:this.handleChange}),Object(l.jsx)(p,{description:"Twoje imi\u0119:",show:e})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{inputValue:t,handlerInputValue:this.handlerUserNameChange}),Object(l.jsx)(p,{description:"User name:",show:t})]})]})}}]),n}(a.Component);function v(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("p",{children:"Hello CodeSandbox"}),Object(l.jsx)("p",{children:"Start editing to see some magic happen!"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:" warming-up exercises "}),Object(l.jsx)(u,{name:"Marek"}),Object(l.jsx)(o,{name:"Olek"}),Object(l.jsx)(b,{name:"Natalia"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{backgroundColor:"yellow"},children:"VVV TASK 1 VVV"}),Object(l.jsx)("hr",{}),Object(l.jsx)(x,{})]})}var m=document.getElementById("root");s.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(v,{})}),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.8b7b16e8.chunk.js.map