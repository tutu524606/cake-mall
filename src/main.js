// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
    // 引入vuex
import store from './store/index'

// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import { Icon } from 'vant';
Vue.use(Icon);

// 引入懒加载lazyload
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: require('./assets/images/loading.png'),
    loading: require('./assets/images/loading.png'),
    attempt: 1,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: ['scroll']
});

// 桌面端引入依赖
// import '@vant/touch-emulator';

// 引入资源请求模块
import http from './assets/js/http'
Vue.use(http);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})