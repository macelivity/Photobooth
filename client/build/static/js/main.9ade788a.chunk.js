(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(0),o=n.n(r),c=(n(44),n(9)),l=n(10),i=n(12),s=n(11),u=n(13),m=(n(45),n(18)),g=n.n(m),h=n(33),d=n(34),b=n.n(d),f=n(35);function p(e){return k+"full_image/"+e}function v(e){return k+"thumb/"+e}function E(e){return{src:p(e),thumbnail:v(e),thumbnailHeight:113,thumbnailWidth:200}}var I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={img_list:[],currentImage:0},n.onCurrentImageChange=function(e){n.setState({currentImage:e})},n.callBackendAPI=Object(h.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.178.121:5000/img_list",{mode:"cors"});case 2:return t=e.sent,console.log(t),e.next=6,t.json();case 6:if(n=e.sent,console.log(n),200===t.status){e.next=10;break}throw Error(n.message);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e)})),n.onClickImage=function(){window.location.href=p(n.state.img_list[n.state.currentImage])},n.saveFile=function(){Object(f.saveAs)(p(n.state.img_list[n.state.currentImage]),"Wedding_"+C.groom+"-"+C.bride+"_"+n.state.img_list[n.state.currentImage])},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callBackendAPI().then(function(t){console.log(t),e.setState({img_list:t.img_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.img_list.map(E);return o.a.createElement(b.a,{images:e,enableImageSelection:!1,rowHeight:150,enableLightbox:!0,currentImageWillChange:this.onCurrentImageChange,onClickImage:this.onClickImage,backdropClosesModal:!0,customControls:[this.state.img_list.length>0&&o.a.createElement("div",{key:"customControls ",className:"customControls"},o.a.createElement("button",{className:"downloadBtn",onClick:this.saveFile},"Herunterladen"))]})}}]),t}(r.Component),k="http://192.168.178.98:5000/",C={groom:"Dennis",bride:"Lidiya"};function j(){var e=Math.floor(4*Math.random()),t=Math.floor(2*Math.random());return o.a.createElement("div",{className:"heading"},o.a.createElement("img",{className:"header",src:"/Images/Header-Bg_0"+e+".jpg",alt:"Photobooth Heading Bg-img"}),o.a.createElement("div",{id:"text"},o.a.createElement("h1",null,C.groom),o.a.createElement("h1",{className:"symbol"},0===t?o.a.createElement(o.a.Fragment,null,"\u2665"):o.a.createElement(o.a.Fragment,null,"\u26ad")),o.a.createElement("h1",null,C.bride)))}var w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(I,null))}}]),t}(r.Component),_=document.getElementById("root");a.createRoot(_).render(o.a.createElement(w,null))},36:function(e,t,n){e.exports=n(103)},44:function(e,t,n){},45:function(e,t,n){}},[[36,1,2]]]);
//# sourceMappingURL=main.9ade788a.chunk.js.map