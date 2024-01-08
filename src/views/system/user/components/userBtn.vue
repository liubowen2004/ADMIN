<template>
	<div class="button-box">
		<el-button type="primary" :icon="Plus" @click="Addflag = true">新增</el-button>
      <el-button type="success" :icon="EditPen" disabled>修改</el-button>
      <el-button type="danger" :icon="Delete" disabled>删除</el-button>
      <exportVue></exportVue>
      <el-button type="primary" disabled :icon="RefreshLeft">重置密码</el-button>
	</div>
</template>

<script setup lang='ts'>
import { Plus, EditPen, Delete, Grid, Search, Refresh, RefreshLeft } from "@element-plus/icons-vue"
// @ts-ignore
import exportVue from "../../../../components/export.vue"

</script>

<style lang="scss" scoped>
.button-box {
  margin-top: 20px;
}
</style>