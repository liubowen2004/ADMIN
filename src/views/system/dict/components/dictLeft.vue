<template>
	<div>
		 <section>
      <div class="top">
        <el-input placeholder="输入名称或描述搜索" />
        <el-button type="success" :icon="Search">搜索</el-button>
        <el-button type="warning" :icon="RefreshLeft">重置</el-button>
      </div>
      <div class="btns">
        <el-button type="danger" :icon="Plus">新增</el-button>
        <el-button type="success" disabled :icon="EditPen">修改</el-button>
        <el-button type="danger" disabled :icon="Delete">删除</el-button>
        <el-button type="warning" :icon="Download">导出</el-button>
      </div>
			<dictList></dictList>
			<br>
			<!-- <el-pagination
      v-model:current-page="from.page"
      v-model:page-size="from.size"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, prev, pager, next,sizes"
      :total="totalElements"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->
    </section>
	</div>
</template>

<script setup lang="ts">
import { Search, RefreshLeft, Plus, Delete, EditPen, Download } from "@element-plus/icons-vue"
import dictList from './dictList.vue'
const handleSizeChange=()=>{
}
const handleCurrentChange=()=>{
}
</script>

<style lang="scss" scoped>
section {
  width: 900px;
  box-shadow: 0 0 10px #eee;
  padding: 20px;

  .top {
    .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
  .btns {
    margin: 20px 0;
  }
}
</style>