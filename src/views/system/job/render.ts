import { reactive, ref } from "vue"
import * as API from "../../../api/job"
export const renders = () => {
	const from = reactive<API.IJobList>({
		page: 0,
		size: 10,
	})
	let tableData = ref([])
	const getJobList = async (value: API.IJobList) => {
		let res:any = await API.getJobListApi(value)
		tableData.value = res.data.content
	}


  return {
    getJobList,
		from,
		tableData
  }
}
