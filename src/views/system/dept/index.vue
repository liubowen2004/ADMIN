<template>
  <div>
    <deptNavVue v-if="searchFlag" @handlersearch="handlersearch"></deptNavVue>
    <div class="feature">
      <div class="left">
        <el-button type="primary" :icon="Plus" @click="Addflag = true">新增</el-button>
        <el-button type="success" :icon="EditPen" disabled>修改</el-button>
        <el-button type="danger" :icon="Delete" disabled>删除</el-button>
        <deptExportVue
          :listHander="listHander"
          :jsonData="jsonData"
          ref="btnExport"
          @click="handlerExport"
        ></deptExportVue>
      </div>
      <div class="right">
        <el-button-group class="ml-4">
          <el-button :icon="Search" @click="searchFlag = !searchFlag" />
          <el-button :icon="Refresh" @click="render" />
          <el-button :icon="Grid" />
        </el-button-group>
      </div>
    </div>
    <deptListVue ref="deptList"></deptListVue>
    <deplAddVue @deptAdd="deptAdd" v-if="Addflag" @cancel="cancel"></deplAddVue>
  </div>
</template>
<script setup lang='ts'>
import deplAddVue from "./components/deplAdd.vue"
import deptExportVue from "../../../components/export.vue"
import deptNavVue from "../../../components/deptNav.vue"
import deptListVue from "./components/deptList.vue"
import { Plus, EditPen, Delete, Grid, Search, Refresh, Download } from "@element-plus/icons-vue"
import { getCurrentInstance, nextTick, ref } from "vue"
import { ElNotification } from "element-plus"
import { deptRender } from "../hooks/deptRender"
const deptList = ref(null)
const Addflag = ref(false)
const child = getCurrentInstance()
const sectionRef = ref()
const deptSearch = ref()
const btnExport = ref(null)
const deptAdd = () => {
  child?.proxy?.$refs.deptList?.getDeptList()
  Addflag.value = false
  ElNotification({
    title: "Success",
    message: "添加成功",
    type: "success"
  })
}
const cancel = () => {
  Addflag.value = false
}
const handlersearch = (val) => {
  child?.proxy?.$refs.deptList?.search(val)
}
const render = () => {
  child?.proxy?.$refs.deptList?.getDeptList()
}
const searchFlag = ref(true)
const handlerExport = () => {
  let listHander = {
    name: "名称",
    enabled: "状态",
    createTime: "创建日期",
    deptSort: "序号"
  }
  let { list, getDeptList, from } = deptRender()
  getDeptList(from)
  setTimeout(() => {
    child?.proxy?.$refs.btnExport?.outExcel(listHander, list.value)
  }, 1500)
}
</script>
<style lang="scss" scoped>
.feature {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>