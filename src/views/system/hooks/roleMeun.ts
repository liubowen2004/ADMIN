import { reactive, ref } from "vue"
import * as API from "../../../api/role"
export interface User {
  cache: boolean
  createBy: string
  createTime: string
  hidden: boolean
  hasChildren?: boolean
  iFrame: false
  label: string
  leaf: boolean
  menuSort: number
  path: string
  subCount: number
  title: string
  type: number
  updateBy: string
  updateTime: string
	id?:string
  children?: User[]
}
export const roleMeun = () => {
  /**获取角色列表数据 */
  const form = reactive<API.RoleList>({
    page: 1,
    size: 10,
    sort: "level,asc"
  })

  let list = ref<any>([])
  const getRoleList = async (value: API.RoleList) => {
    let res = await API.getRoleListApi(value)
    list.value = res.data
  }
  const getRoleMeunList = async (val: API.RoleMeun) => {
    let res = await API.getRoleMeunListApi(val)
    return res.data
  }

  const loads = (
    node: { isLeaf: any; data: any },
    resolve: (
      arg0: ({ value: number; label: string; isLeaf?: undefined } | { value: number; label: string; isLeaf: boolean })[]
    ) => void
  ) => {
    if (node.isLeaf) return resolve([])
    setTimeout(() => {
      if (node.data.id) {
        API.getRoleMeunListApi({ pid: node.data.id }).then((res) => {
          resolve((res.data as any))
        })
      }
    }, 400)
  }
  const loadset = (
		row: User,
		treeNode: unknown,
		resolve: (date: User[]) => void
	) => {
		if(row.id){
			setTimeout(() => {
				API.getRoleMeunListApi({ pid: (row.id as string) }).then((res) => {
					resolve((res.data as any))
				})
			}, 1000)
		}
	}

  return {
    getRoleList,
    list,
    form,
    getRoleMeunList,
    loadset,
    loads
  }
}
