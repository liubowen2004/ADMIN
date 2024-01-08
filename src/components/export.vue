<template>
		<el-button type="warning" :icon="Download">导出</el-button>
</template>

<script setup lang='ts'>
import {xlsx} from '../utils/xlsx'
import { Download } from "@element-plus/icons-vue"
const outExcel=(listHander: any,list: any)=>{
	console.log(list,'list');
	 xlsx(list,listHander,'菜单管理')
}
defineExpose({
	outExcel
})
</script>

<style lang="scss" scoped>

</style>