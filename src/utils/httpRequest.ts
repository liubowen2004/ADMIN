import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { ElMessageBox } from "element-plus"
import router from "@/router/index"
import * as TS from "./defind"
// @ts-ignore
import NProgress from "nprogress"
import "nprogress/nprogress.css"
const URL: string = "/"
const config = {
  baseURL: URL as string,
  timeout: TS.RequestEnums.TIMEOUT as number,
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      (config) => {
        NProgress.start()
        //@ts-ignore
        if (JSON.parse(localStorage.getItem("user"))) {
          config.headers.Authorization = JSON.parse(localStorage.getItem("user") as string).token
        }
        return config
      },
      (error: AxiosError) => {
        Promise.reject(error)
      }
    )
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        NProgress.done()
        if (response.status === TS.RequestEnums.UNAUTHORIZED) {
          router.replace({ path: "/" })
          return Promise.reject(response)
        }
        return response
      },
      (error: AxiosError) => {
        const { response } = error
        let title: string = ""
        let message: string = ""
        NProgress.done()
				console.log(response?.data);
        // if (error && response) {
        // 	message = response.statusText
        // 	// 401, token失效
        // 	if (response.status === TS.RequestEnums.UNAUTHORIZED ) {
        // 		router.push(
        // 			{
        // 				name: 'login'
        // 			}
        // 		)
        // 	}
        // 	switch (
        // 		response.status // 跨域存在获取不到状态码的情况
        // 	) {
        // 		case TS.RequestEnums.BADREQUEST:
        // 			title = '错误请求'
        // 			break
        // 		case TS.RequestEnums.UNAUTHORIZED:
        // 			title = '资源未授权'
        // 			break
        // 		case TS.RequestEnums.NOTFOUND:
        // 			title = '未找到所请求的资源'
        // 			break
        // 		case TS.RequestEnums.ERROR:
        // 			title = '内部服务器错误'
        // 			break
        // 		default:
        // 			title = response.status.toString()
        // 	}
        // 	return ElMessageBox.alert(
        //     title,
        //     '提示',
        //     {
        //       confirmButtonText: 'OK',
        //       type: 'warning',
        //     }
        //   )
        // } else {
        // 	// 跨域获取不到状态码或者其他状态进行的处理
        // 	return ElMessageBox.alert(
        //     '未知错误,请联系管理员',
        //     '提示',
        //     {
        //       confirmButtonText: 'OK',
        //       type: 'error',
        //     }
        //   )
        // }
        return error
      }
    )
  }

  public adUrl(url: string) {
    return !process.env.VUE_APP_IDENT ? url : process.env.VUE_APP_IDENT + url
  }
  // 常用方法封装
  get<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.get(this.adUrl(url), { params })
  }
  post<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.post(this.adUrl(url), params)
  }
  put<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.put(this.adUrl(url), params)
  }
  delete<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.delete(this.adUrl(url), { data:params })
  }
}
//实例对象
const http = new RequestHttp(config)

export default http
