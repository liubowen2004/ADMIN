import {ref,reactive } from "vue"
import { getDeptListApi, User, getDeptchildApi } from "../../../api/dept"
import {DeptResult} from '../../../utils/defind'
export const deptRender = () => {
	let from = reactive<User>({
		page: 0,
		size: 10,
		sort: "id,desc",
		id: "",
		enabled:true
	})
	let list = ref([])
  let getDeptList = (val:User) => {
	getDeptListApi(val).then((res:any):void => {
			list.value = res.data.content
    })
  }
  getDeptList(from)
  const load = (row: User, treeNode: unknown, resolve: (date: User[]) => void) => {
		setTimeout(() => {
			getDeptchildApi({ id: row.id }).then((res:any) => {
				resolve(res.data.content)
			})
		}, 1000)
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
				getDeptchildApi({ id: node.data.id }).then((res) => {
				//@ts-ignore
					resolve(res.data.content)
				})
			}
		}, 400)
	}
	const searchs = (val: any) => {
		let froms = JSON.parse(JSON.stringify({...from,...val}))
		if (val.name!='') {
			getDeptList(froms)
		} else {
			from.enabled=val.enabled
			getDeptList(from)
		}
	}
  return {
		list,
		getDeptList,
		from,
		load,
		loads,
		searchs
  }
}
