import Vue from "vue";
import App from "./App.vue";
//加入大屏组件库
import dataV from '@jiaminghi/data-view'  
Vue.use(dataV)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
