!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){"use strict";r.r(t);var n={};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(i){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,r,n,o=s(i);return t=a?(e=s(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),r=this,!(n=t)||"object"!==c(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):n}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(n),r.d(n,"MainScene",function(){return o});var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(o,Phaser.Scene);var e,t,r,n=u(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n.call(this,"MainScene")}return e=o,(t=[{key:"preload",value:function(){this.load.setBaseURL("https://labs.phaser.io"),this.load.image("sky","assets/skies/space3.png"),this.load.image("logo","assets/sprites/phaser3-logo.png"),this.load.image("red","assets/particles/red.png")}},{key:"create",value:function(){this.add.image(400,300,"sky");var e=this.add.particles("red").createEmitter({speed:100,scale:{start:1,end:0},blendMode:"ADD"}),t=this.physics.add.image(400,100,"logo");t.setVelocity(100,200),t.setBounce(1,1),t.setCollideWorldBounds(!0),e.startFollow(t)}}])&&i(e.prototype,t),r&&i(e,r),o}(),f=[];for(var l in n)f.push(n[l]);var p={type:Phaser.AUTO,backgroundColor:0,scale:{mode:Phaser.Scale.NONE,autoCenter:Phaser.Scale.CENTER_BOTH,parent:"app",width:800,height:600},physics:{default:"arcade",arcade:{gravity:{y:200}}},scene:f};window.game=new Phaser.Game(p)}]);