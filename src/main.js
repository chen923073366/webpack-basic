//commonjs规范导入
const {add,mul} = require('./js/math');
//ES6规范导入
import * as info from './js/info';
//导入css
require('./css/normal.css');
//导入less
require('./css/special.less');
//导入图片
require('./img/test.jpg');

console.log(add(10,20));
console.log(mul(10,20));

console.log(info.name);
console.log(info.age);
console.log(info.sex);

//导入vue，这种写法是es6模块化规范，上面是Commonjs规范
import Vue from 'vue';
//import app from './vue/app';
import app from './vue/app.vue';
//使用vue
new Vue({
  el: '#app',
  data: {
    msg: '我是根来自main.js'
  },
  template: '<app />',
  components: {
    app
  }
})