<template>
  <div class="box">
    <homeTop></homeTop>
    <homeEcharts></homeEcharts>
    <homeFooter></homeFooter>
  </div>
</template>

<script lang="ts" setup>
import homeTop from "./components/homeTop.vue"
import homeEcharts from "./components/homeEcharts.vue"
import homeFooter from "./components/homeFooter.vue"
import { ref } from "vue"
</script>
<style lang="scss" scoped>
</style>