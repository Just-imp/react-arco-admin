import React, { lazy, Suspense } from "react";

export const routes: Array<IRoute> = [
    {
        name: "menu.dashboard",
        key: "dashboard",
    },
    {
        name: "menu.example",
        key: "example",
        ignore: true
    },
    {
        name: 'menu.user',
        key: 'user'
    }
];

export type IRoute = {
    name: string;
    key: string;
    // 当前页是否展示面包屑
    breadcrumb?: boolean;
    children?: IRoute[];
    // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
    ignore?: boolean;
    component?: JSX.Element
};

export function getFlattenRoutes(routes: Array<IRoute>) {
    const res = [] as any;
    function travel(_routes: Array<IRoute>) {
        _routes.forEach((route) => {
            if (route.key && !route.children) {
                const Component = lazy(() => import(`./pages/${route.key}.tsx`))
                route.component = (
                    <Suspense><Component /></Suspense>
                );
                res.push(route);
            } else if (Array.isArray(route.children) && route.children.length) {
                travel(route.children);
            }
        });
    }
    travel(routes);
    return res;
}
