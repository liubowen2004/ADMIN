/**定义返回状态码 */
export enum RequestEnums {
  /**超时时间 */
  TIMEOUT = 3000,
  SUCCESS = 200, // 请求成功
  CREATE = 201, // 创建成功
  DELETED = 204, // 删除成功
  BADREQUEST = 400, // 请求的地址不存在或者包含不支持的参数
  UNAUTHORIZED = 401, // 未授权
  NOTFOUND = 404, // 请求的资源不存在
  UNPROSE = 422, // 验证错误
  ERROR = 500 // 内部错误
}
// 数据返回的接口
/**定义接口数据返回值 */
/**去了公司中看一下公司接口文档的返回类型修改 */
/**
 * 实际需求: {
 *   data: {
 *    },
 * msg: '',
 * code: 0
 *
 *  }
 */
interface Result {
  meta: {
    status: number
    msg: string
  }
}

/**加上data */
/**根据公司实际情况去修改 */
export interface ResultData<T> extends Result {
  response: any
  token(token: any): unknown
  status: number
  data: T
}

export interface Data {
  createBy: string
  createTime: string
  deptSort: number
  enabled: boolean
  hasChildren: boolean
  id: number
  label: string
  leaf: boolean
  name: string
  subCount: number
  updateBy: string
  updateTime: string
}

export interface DeptResultData {
  content: Array<Data>
  totalElements: number
}

export interface DeptResult<DeptResultData>{
	data: DeptResultData,
  config?: object,
	headers?:object,
	request:object,
	status:number,
	statusText:string,
}
