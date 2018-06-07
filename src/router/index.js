import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import routes from './routes';
import store from '../store';
import Util from '@/libs/util';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes
};
const router = new VueRouter(RouterConfig);


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;