import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import LoginView from "../views/monont/login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView
  },
  {
    path: "/about",
    name: "about",
    redirect: "/homes",
    children: [
      {
        path: "/dashboard",
        component: () => import("../views/dashboard.vue")
      },
      {
        path: "/homes",
        component: () => import("../views/homes/homes.vue")
      },
      {
        path: "/system/dept/index",
        component: () => import("../views/system/dept/index.vue")
      },
			{
        path: "/system/user/index",
        component: () => import("../views/system/user/index.vue")
      },
			{
        path: "/system/role/index",
        component: () => import("../views/system/role/index.vue")
      },
			{
        path: "/system/menu/index",
        component: () => import("../views/system/menu/index.vue")
      },
			{
        path: "/system/job/index",
        component: () => import("../views/system/job/index.vue")
      },
			{
        path: "/system/dict/index",
        component: () => import("../views/system/dict/index.vue")
      },
			{
        path: "/system/timing/index",
        component: () => import("../views/system/timing/index.vue")
      },
			{
        path: "/components/Editor",
        component: () => import("../views/components/Editor/index.vue")
      },
			{
        path: "/components/Echarts",
        component: () => import("../views/components/Echarts/index.vue")
      },
    ],
    component: () => import("../layout/AboutView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
