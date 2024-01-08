import http from "../utils/httpRequest"

export interface IJobList {
  page: number
  size: number
  sort?: string
	name?:string
	createTime?:string[]
	enabled?:boolean|string
}
/**渲染 */
export const getJobListApi = (data:IJobList) => http.get("api/job",data)

/**添加 */
export interface RuleForm {
  name: string
	enabled:boolean,
	jobSort:number,
	id:null
}
export const getJobAddAPi=(data:RuleForm)=>http.post('api/job',data)

/**删除 */
export const getJobDelApi=(data:any)=>http.delete('api/job',data)

/**修改 */
export const getJobRevApi=(data:any)=>http.put('api/job',data)