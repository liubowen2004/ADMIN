<template>
  <div class="box">
    <nav>
      <h4>角色列表</h4>
      <el-button type="danger" :icon="Select">保存</el-button>
    </nav>
    <el-tree :props="props" :load="loads" lazy show-checkbox :data="meunList" />
  </div>
</template>

<script setup lang='ts'>
import { Select } from "@element-plus/icons-vue"
import { reactive, ref } from "vue"
import { roleMeun } from "../../hooks/roleMeun"
import * as API from "../../../../api/meun"
let { getRoleMeunList,loads } = roleMeun()
let meunList = ref<any>([])
let form = reactive({
  pid: 0
})
const renderMeun = () => {
  getRoleMeunList(form).then((res) => {
    meunList.value = res
  })
}
renderMeun()
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid #eee;
  padding: 10px;
}
nav {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.el-tree {
  padding: 20px;
}
</style>