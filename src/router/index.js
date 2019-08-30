import Vue from 'vue';
import Router from 'vue-router';
import {
    RouterConfig
} from './router';
import NProgress from 'nprogress';
import store from '../store'
Vue.use(Router);
const router = new Router({
    // mode: "hash",
    // mode: 'history'
    routes: RouterConfig
});
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
    NProgress.done();
});
router.afterEach((to) => {
    NProgress.done();
});
export default router;