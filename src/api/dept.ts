import http from '../utils/httpRequest'
/**渲染数据 */
export const getDeptListApi=(params:User)=>http.get('api/dept',params)
/**渲染树形子级 */
export const getDeptchildApi=(params:Child)=>http.get(`api/dept?pid=${params.id}`)
/**添加部门 */
export const getDeptAddApi=(data:DeptAdd)=>http.post('api/dept',data)
/**删除部门 */
export const getDeptDelApi=(data:[])=>http.delete('api/dept',data)
export interface DeptAdd {
  name: string
  deptSort: string
  enabled: boolean
}

interface Child{
	id:string
}

export interface User{
  id: string
	page:number,
	size:number,
	sort:string
	name?: string,
  createTime?: string,
  enabled?: boolean,
  hasChildren?: boolean
  children?: User[]
}
