(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o),u=n(11),s=n(12),c=n(14),m=n(13),i=n(15),d=function(e){var t=e.persons,n=e.deletePerson;return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:n},"poista")))},p=n(2),h=n.n(p),b="/api/persons",E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).addPerson=function(e){var t={name:n.state.newName,number:n.state.newNumber};n.state.persons.map(function(e){return e.name}).includes(t.name)?alert("Is already on list"):(n.setState({newName:"",newNumber:""}),h.a.post(b,t).then(function(e){201===e.status&&(console.log("Added ".concat(t.name," and ").concat(t.number)),n.updatePersons())}))},n.deletePerson=function(e,t){return function(){var a="http://localhost:3001/api/persons/".concat(e);window.confirm("Do you want to remove user ".concat(t.name))?h.a.delete(a).then(function(e){200===e.status&&(console.log("status 200, person ".concat(t.name," deleted")),n.updatePersons())}):console.log("canceled  ".concat(t.name," delete "))}},n.handleInputChange=function(e){n.setState({newName:e.target.value})},n.handleNumber=function(e){n.setState({newNumber:e.target.value})},n.state={persons:[{name:"",number:"",id:""}],newName:"",newNumber:""},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"updatePersons",value:function(){var e=this;h.a.get(b).then(function(t){e.setState({persons:t.data})})}},{key:"componentDidMount",value:function(){this.updatePersons()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phone book"),r.a.createElement("form",{onSubmit:this.addPerson},r.a.createElement("div",null,"Name:",r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.newName})),r.a.createElement("div",null,"Number:",r.a.createElement("input",{onChange:this.handleNumber,value:this.state.newNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,this.state.persons.map(function(t){return r.a.createElement(d,{persons:t,key:t.id,deletePerson:e.deletePerson(t.id,t)})})))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.807821b9.chunk.js.map