import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'nprogress/nprogress.css'
// @ts-ignore
import NProgress from 'nprogress'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {createPinia} from 'pinia'
// @ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/icons'
import { quillEditor } from 'vue3-quill'
const state = createPinia()
createApp(App).use(router).use(state).use(quillEditor).use(ElementPlus, {locale: zhCn}).mount("#app")