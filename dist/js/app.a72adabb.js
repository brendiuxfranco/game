(function(t){function e(e){for(var a,i,o=e[0],n=e[1],d=e[2],h=0,u=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);c&&c(e);while(u.length)u.shift()();return l.push.apply(l,d||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,o=1;o<s.length;o++){var n=s[o];0!==r[n]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},l=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=n;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},5352:function(t,e,s){"use strict";var a=s("ebff"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"","clipped-left":"",dark:"",color:"green"}},[s("v-toolbar-title",[t._v("P-Pong-Game")])],1),s("v-navigation-drawer",{staticClass:"orange ligthten-1",attrs:{app:"",clipped:""}},[s("v-list-item",[s("v-list-item-content",[s("v-spacer"),s("v-list-item-title",{staticClass:"display-2"},[t._v(t._s(t.$store.state.score))]),s("v-list-item-subtitle",[t._v("Score")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v("Game")]),s("v-list-item-subtitle",[t._v("Settings")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-subtitle",{staticClass:"title"},[t._v("Ball")])],1)],1),s("v-list",[s("v-list-item",[s("v-slider",{attrs:{label:"Diameter",color:"success darken-2","track-color":"success lighten-1","thumb-label":"",max:"200",min:"50"},model:{value:t.$store.state.diameter,callback:function(e){t.$set(t.$store.state,"diameter",e)},expression:"$store.state.diameter"}})],1),s("v-list-item",[s("v-slider",{attrs:{label:"Speed X",color:"success darken-2","track-color":"success lighten-1","thumb-label":"",max:"10",min:"-10"},model:{value:t.$store.state.xBallChange,callback:function(e){t.$set(t.$store.state,"xBallChange",e)},expression:"$store.state.xBallChange"}})],1),s("v-list-item",[s("v-slider",{attrs:{label:"Speed Y",color:"success darken-2","track-color":"success lighten-1","thumb-label":"",max:"10",min:"-10"},model:{value:t.$store.state.yBallChange,callback:function(e){t.$set(t.$store.state,"yBallChange",e)},expression:"$store.state.yBallChange"}})],1)],1),s("v-list",[s("v-list-item",[s("v-slider",{attrs:{label:"Width",color:"success darken-2","track-color":"success lighten-1","thumb-label":"",max:"300",min:"10"},model:{value:t.$store.state.paddleWidth,callback:function(e){t.$set(t.$store.state,"paddleWidth",e)},expression:"$store.state.paddleWidth"}})],1),s("v-list-item",[s("v-slider",{attrs:{label:"Speed",color:"success darken-2","track-color":"success lighten-1","thumb-label":"",max:"200",min:"10"},model:{value:t.$store.state.paddleSpeed,callback:function(e){t.$set(t.$store.state,"paddleSpeed",e)},expression:"$store.state.paddleSpeed"}})],1)],1),s("v-list-item",[s("v-btn",{attrs:{block:"",color:"gray"},on:{click:function(e){return t.$router.go(0)}}},[t._v("Restart")])],1)],1),s("v-content",{staticClass:"error noOverflow"},[s("router-view")],1)],1)},l=[],i=s("2877"),o=s("6544"),n=s.n(o),d=s("7496"),c=s("40dc"),h=s("8336"),u=s("a75b"),p=s("ce7e"),v=s("8860"),f=s("da13"),m=s("5d23"),$=s("f774"),b=s("ba0d"),g=s("2fa4"),y=s("2a7f"),x={},k=Object(i["a"])(x,r,l,!1,null,null,null),B=k.exports;n()(k,{VApp:d["a"],VAppBar:c["a"],VBtn:h["a"],VContent:u["a"],VDivider:p["a"],VList:v["a"],VListItem:f["a"],VListItemContent:m["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"],VNavigationDrawer:$["a"],VSlider:b["a"],VSpacer:g["a"],VToolbarTitle:y["a"]});var C=s("2f62");a["a"].use(C["a"]);var w=new C["a"].Store({state:{score:0,xBall:Math.floor(300*Math.random())+50,yBall:100,diameter:50,xBallChange:5,yBallChange:5,xPaddle:0,yPaddle:0,paddleSpeed:50,paddleWidth:100,paddleHeight:25,started:!1}}),S=s("f309");a["a"].use(S["a"]);var P=new S["a"]({}),_=s("8c4f"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"parent",staticClass:"full"},[s("VueP5",t._g({},{setup:t.setup,draw:t.draw,keypressed:t.keypressed}))],1)},V=[],j=(s("cb29"),s("e25d")),W=s.n(j),T={name:"Home",components:{VueP5:W.a},methods:{setup:function(t){t.createCanvas(this.$refs.parent.offsetWidth,this.$refs.parent.offsetHeight),t.parent(this.$refs.parent)},draw:function(t){t.background("pink"),t.fill(255),t.noStroke(),t.ellipse(this.$store.state.xBall,this.$store.state.yBall,this.$store.state.diameter,this.$store.state.diameter),this.$store.state.xBall+=this.$store.state.xBallChange,this.$store.state.yBall+=this.$store.state.yBallChange,(this.$store.state.xBall<this.$store.state.diameter/2||this.$store.state.xBall>t.width-this.$store.state.diameter/2)&&(this.$store.state.xBallChange*=-1),this.$store.state.yBall<this.$store.state.diameter/2&&(this.$store.state.yBallChange*=-1),this.$store.state.yBall>t.height-this.$store.state.diameter/2&&(t.textSize(96),t.text("GAME OVER",t.width/2-300,t.height/2-48),t.noLoop()),this.$store.state.started||(this.$store.state.xPaddle=t.width/2-this.$store.state.paddleWidth/2,this.$store.state.yPaddle=t.height-50,this.$store.state.started=!0),t.fill("red"),t.noStroke(),t.rect(this.$store.state.xPaddle,this.$store.state.yPaddle,this.$store.state.paddleWidth,this.$store.state.paddleHeight),this.$store.state.xBall>this.$store.state.xPaddle&&this.$store.state.xBall<this.$store.state.xPaddle+this.$store.state.paddleWidth&&this.$store.state.yBall+this.$store.state.diameter/2>=this.$store.state.yPaddle&&(this.$store.state.xBallChange*=-1,this.$store.state.yBallChange*=-1,this.$store.state.score++)},keypressed:function(t){t.keyCode===t.LEFT_ARROW?this.$store.state.xPaddle-=this.$store.state.paddleSpeed:t.keyCode===t.RIGHT_ARROW&&(this.$store.state.xPaddle+=this.$store.state.paddleSpeed)}}},L=T,M=(s("5352"),Object(i["a"])(L,O,V,!1,null,"56784ce0",null)),R=M.exports;a["a"].use(_["a"]);var H=[{path:"/",name:"Home",component:R}],A=new _["a"]({mode:"history",base:"/",routes:H}),E=A;a["a"].config.productionTip=!1,new a["a"]({store:w,vuetify:P,router:E,render:function(t){return t(B)}}).$mount("#app")},ebff:function(t,e,s){}});
//# sourceMappingURL=app.a72adabb.js.map