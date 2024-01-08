<template>
	<div class="box">
		<towVue></towVue>
		<threeVue></threeVue>
		<fourVue></fourVue>
	</div>
</template>

<script setup lang='ts'>
import fourVue from "../components/four.vue";
import threeVue from "../components/three.vue";
import towVue from "../components/two.vue";
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
	#left,#canter,#right{
		width: 32%;
		height: 300px;
		border: 1px solid #eee;
	}
}
</style>