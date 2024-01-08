<template>
	<div class="box">
		<el-button type="danger" :icon="Plus" @click="meunAdd=true">新增</el-button>
		<el-button type="success" disabled :icon="EditPen">修改</el-button>
		<el-button type="danger" disabled :icon="Delete">删除</el-button>
		<exportVue></exportVue>

	</div>
</template>

<script setup lang='ts'>
import exportVue from '../../../../components/export.vue'
import { Plus, EditPen,Delete } from "@element-plus/icons-vue"
import { ref } from 'vue'
let meunAdd=ref<boolean>(false)

</script>

<style lang="scss" scoped>
.box{
	margin: 20px 0;
}
</style>