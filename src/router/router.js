const children = [{
        path: "/shipAddr",
        name: "shipAddr",
        component: resolve => require(["@/pages/shipAddr"], resolve),
        meta: {
            title: "配送地址"
        }
    },
    {
        path: "/home",
        name: "home",
        component: resolve => require(["@/pages/home/home"], resolve),
        meta: {
            title: "首页"
        }
    }
]

const childRouters = [{
        path: "/",
        name: "in",
        component: resolve => require(["@/components/main"], resolve),
        children: children,
        meta: {
            title: "入口文件"
        }
    },
    {
        path: "/login",
        name: "login",
        component: resolve => require(["@/components/login"], resolve),
        meta: {
            title: "登陆"
        }
    },
    {
        path: "/404",
        component: resolve => require(["@/components/404"], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }
];
export const RouterConfig = [
    ...childRouters
];