<template>
	<div>

	</div>
</template>

<script setup lang='ts'>
import { toRefs } from 'vue'
import { useInfoStore } from '../store/index'
const InfoStore=useInfoStore()

let {name,age}=toRefs(useInfoStore())
console.log(name,age);
</script>

<style lang="scss" scoped>

</style>