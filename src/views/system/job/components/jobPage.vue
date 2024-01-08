import { reactive } from "vue"

<template>
	<div>
		<el-pagination
      v-model:current-page="from.page"
      v-model:page-size="from.size"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, prev, pager, next,sizes"
      :total="4"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import * as API from "../../../../api/job"
const from = reactive<API.IJobList>({
  page: 0,
  size: 10,
  sort: "id,desc"
})
const handleSizeChange=()=>{

}
const handleCurrentChange=()=>{

}
</script>

<style lang="scss" scoped>

</style>