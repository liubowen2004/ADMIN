<template>
	<div>
		<section>
			<div class="left">
				<userLeftVue></userLeftVue>
			</div>
			<div class="right">
				<userSearchVue></userSearchVue>
				<userList></userList>
			</div>
		</section>
	</div>
</template>

<script setup lang='ts'>
import userLeftVue from './components/userLeft.vue'
import userSearchVue from './components/userSearch.vue'
import userList from './components/userList.vue'
</script>

<style lang="scss" scoped>
section{
	display: flex;
	justify-content: space-between;
	.left{
		width: 14%;
	}
	.right{
		width: 83%;
	}
}
</style>