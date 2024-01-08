<template>
  <div>
    <el-button type="danger" :icon="Plus" @click="isAddFlag = true">新增</el-button>
    <el-button type="success" disabled :icon="EditPen" @click="handerEdit">修改</el-button>
    <el-button type="danger" disabled :icon="Delete">删除</el-button>
    <exportVue :listHander="listHander" :jsonData="jsonData" ref="btnExport" @click="handlerExport"></exportVue>
    <jobadd v-if="isAddFlag" @closeAdd="closeAdd" ref="jobAdd"></jobadd>
  </div>
</template>

<script setup lang="ts">
import exportVue from "../../../../components/export.vue"
import jobadd from "./jobadd.vue"
import { Plus, Delete, EditPen, Download } from "@element-plus/icons-vue"
import { ref,getCurrentInstance } from "vue"
import { renders } from "../render"
const { getJobList,tableData,form } = renders()
const jobAdd=ref(null)
/**添加 */
let isAddFlag = ref<boolean>(false)
const handerEdit = () => {}
const closeAdd = () => {
  isAddFlag.value = false
  getJobList(form)
}
/**导出 */
const child = getCurrentInstance()
const btnExport = ref(null)
const handlerExport = () => {
  const listHander = {
    name: "名称",
    jobSort: "排序",
    enabled: "状态",
    createTime: "创建日志"
  }
	getJobList(form)
	setTimeout(() => {
    child?.proxy?.$refs.btnExport?.outExcel(listHander, tableData.value)
  }, 1500)

}
/**编辑 */
const getEcho=(value)=>{
	isAddFlag.value=true
  setTimeout(() => {
		child?.proxy?.$refs.jobAdd.setEcho(value)
	}, 100);

}
defineExpose({
	getEcho
})
</script>

<style lang="scss" scoped>
</style>