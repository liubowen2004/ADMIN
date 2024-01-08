<template>
  <div class="nav">
    <el-input placeholder="输入部门名称" v-model="form.name"/>
    <el-date-picker
      style="margin: 0 10px"
      v-model="value2"
      type="daterange"
      unlink-panels
      range-separator=":"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :shortcuts="shortcuts"
      :size="size"
    />
    <el-button type="success" :icon="Search" @click="handlersearch">搜索</el-button>
    <el-button type="warning" :icon="RefreshLeft">重置</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref,defineEmits } from "vue"
import { Search, RefreshLeft } from "@element-plus/icons-vue"
import {User} from '../../../../api/dept'

const size = ref<"default" | "large" | "small">("default")
const emits=defineEmits()
let form=reactive({
	name:'',
	enabled:''
})
const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
const options = [
  {
    value: true,
    label: "正常"
  },
  {
    value: false,
    label: "禁用"
  }
]
const handlersearch=()=>{
	emits('handlersearch',form)
}
</script>

<style scoped>
.el-input {
  width: 250px;
}
.el-select {
  width: 100px;
}
</style>