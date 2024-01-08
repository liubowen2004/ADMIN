<template>
  <div class="box">
		<dictLeftVue></dictLeftVue>
		<dictRightVue></dictRightVue>
	</div>
</template>

<script setup lang="ts">
import dictLeftVue from './components/dictLeft.vue'
import dictRightVue from './components/dictRight.vue'
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
}
</style>