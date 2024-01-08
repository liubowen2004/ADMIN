<template>
		<el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, prev, pager, next,sizes"
      :total="list.totalElements||0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>

<script setup lang='ts'>
import { reactive } from "vue";
import * as API from "../../../../api/role"
import { roleMeun } from "../../hooks/roleMeun"
let { getRoleList, list,form } = roleMeun()
getRoleList(form)
let handleSizeChange=(e:number)=>{
	console.log(e,'change');
}
const handleCurrentChange=(e:number)=>{
	console.log(e,'current');
}
</script>

<style lang="scss" scoped>
.el-pagination{
	padding: 10px;
}
</style>