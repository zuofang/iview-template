import Main from '@/views/main.vue';

const routes = [{
    path: '/',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', name: 'home', meta: { title: '首页' }, component: () => import('@/views/home/home.vue') }
    ]
}];

export default routes;