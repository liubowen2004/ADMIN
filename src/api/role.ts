import http from "../utils/httpRequest"

export interface RoleList {
  page: number
  size: number
  sort: string
}
/** 获取角色列表*/
export const getRoleListApi = (data: RoleList) => http.get("api/roles", { parmas: data })
export interface RoleMeun {
  pid: string
}
/**获取菜单父级 */
export const getRoleMeunListApi=(data:RoleMeun)=>http.get(`api/menus/lazy?pid=${data.pid}`)