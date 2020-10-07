(this["webpackJsonpweather-web"]=this["webpackJsonpweather-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l);a(12),a(13),a(14);var o=function(){return r.a.createElement("header",{className:"bg-dark text-center py-5 text-light"},r.a.createElement("h1",null,"Weather app"))};var i=function(){return r.a.createElement("footer",{className:"bg-dark text-center py-5 text-light"},r.a.createElement("p",null,"Copyright \xa9 2020"))},s=a(1),u=a(2),m=a(4),h=a(3);var d=function(e){return r.a.createElement("table",{className:"table table-bordered table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Weather"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temperature"))),r.a.createElement("tbody",null,e.weathers.map((function(t){return r.a.createElement("tr",{key:t.dt,onClick:function(){return e.handleWeatherSelect(t.dt)}},r.a.createElement("td",null,r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")})),r.a.createElement("td",null,t.weather[0].main),r.a.createElement("td",null,(a=1e3*t.dt,new Date(a).toDateString())),r.a.createElement("td",null,(t.temp.day-273.15).toFixed(0)," \xb0 C"));var a}))))};var p=function(e){var t=e.selectedWeather;return r.a.createElement("div",{className:"card py-3 px-3 text-center"},r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")}),r.a.createElement("p",null,t.temp.day-273," \xb0 C"),r.a.createElement("p",null,new Date(t.dt).toDateString()),r.a.createElement("p",null,t.humidity),r.a.createElement("p",null,t.pressure),r.a.createElement("p",null,new Date(t.sunset).toTimeString()),r.a.createElement("p",null,new Date(t.sunrise).toTimeString()))},E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={cityName:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row py-3 px-3"},r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"text",className:"form-control",id:"cityinput",placeholder:"Enter City",value:this.state.cityName,onChange:function(t){return e.setState({cityName:t.target.value})}})),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-3",onClick:function(){return e.props.handleSearch(e.state.cityName)}},"Search")))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSearch=function(t){console.log(t),e.fetchApi(t)},e.handleWeatherSelect=function(t){console.log(t);var a=e.state.weathers.filter((function(e){return e.dt===t}));e.setState({selectedWeather:a})},e.state={weathers:[],selectedWeather:null},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,{handleSearch:this.handleSearch}),r.a.createElement(d,{weathers:this.state.weathers,handleWeatherSelect:this.handleWeatherSelect}),this.state.selectedWeather?r.a.createElement(p,{selectedWeather:this.state.selectedWeather}):r.a.createElement("div",null))}},{key:"componentDidMount",value:function(){}},{key:"fetchApi",value:function(e){var t=this;fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=".concat(e,"&appid=9782b24d506f53b56b45b8f288d37803\n\n        ")).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({weathers:e.list})})).catch((function(e){console.error("Error:",e)}))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(f,null),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.06643581.chunk.js.map