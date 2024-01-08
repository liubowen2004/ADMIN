<template>
  <div class="nav">
    <div class="left">
      <el-icon><Fold /></el-icon>&emsp;
			<span style="color:#a9b7c9;">首页</span>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang='ts'>
import { Fold } from "@element-plus/icons-vue"
</script>

<style lang="scss" scoped>
.nav{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
</style>