<template>
  <div class="box">
    <el-input v-model="rufrom.name" class="w-50 m-2" placeholder="请输入部门名称搜索" :prefix-icon="Search" @change="searchs(rufrom)"/>
    <el-tree :props="props" :load="loads" lazy :data="list" style="margin-top: 20px;"/>
  </div>
</template>
<script lang="ts" setup>
import type Node from "element-plus/es/components/tree/src/model/node"
import { nextTick, reactive } from "vue"
import { Calendar, Search } from '@element-plus/icons-vue'
import { deptRender } from "../../hooks/deptRender"
const rufrom=reactive<Tree>({
	name:''
})
let { list, getDeptList, from, loads, searchs} = deptRender()
getDeptList(from)
setTimeout(() => {
  console.log(list, "list.value")
}, 1000)
interface Tree {
  name: string
  leaf?: boolean
}
const props = {
  label: "name",
  children: "zones",
  isLeaf: "leaf"
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
</style>