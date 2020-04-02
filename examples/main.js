import Vue from 'vue';
import App from './App.vue';
//引入iconfont
import SUI from '../packages';
Vue.use(SUI);
Vue.config.productionTip = false;
new Vue({
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map