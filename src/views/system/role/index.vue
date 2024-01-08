<template>
  <div>
    <roleSearchVue></roleSearchVue>
    <roleBtnVue></roleBtnVue>
		<section>
			<div class="content">
				<roleListVue></roleListVue>
				<rolePageVue></rolePageVue>
			</div>
			<div style="width: 38%; padding-bottom: 10px;">
				<roleMeunVue></roleMeunVue>
			</div>
		</section>
  </div>
</template>

<script setup lang='ts'>
import roleSearchVue from "./components/roleSearch.vue"
import roleBtnVue from "./components/roleBtn.vue"
import roleListVue from "./components/roleList.vue"
import rolePageVue from "./components/rolePage.vue"
import roleMeunVue from "./components/roleMeun.vue"

</script>

<style lang="scss" scoped>
.content{
	width: 60%;
}
section{
	display: flex;
	justify-content: space-between;
	height: 1px;
}
</style>