<template>
	<div>
		<jobSearchVue></jobSearchVue>
		<br>
		<jobBtnsVue ref="jobBth"></jobBtnsVue>
		<br>
		<jobListVue @handerEcho="handerEcho"></jobListVue>
		<br>
		<jobPageVue></jobPageVue>
	</div>
</template>

<script setup lang="ts">
import jobSearchVue from './components/jobSearch.vue'
import jobBtnsVue from './components/jobBtns.vue'
import jobListVue from './components/jobList.vue'
import jobPageVue from './components/jobPage.vue'
import {getCurrentInstance,ref} from 'vue'
const list = ref(null)

const child = getCurrentInstance()
const handerEcho=(value)=>{
	child?.proxy?.$refs.jobBth.getEcho(value)
}
</script>

<style lang="scss" scoped>

</style>