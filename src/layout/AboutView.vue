<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <h1>ELADMIN-后台管理</h1>
        <sidebarVue></sidebarVue>
      </el-aside>
      <el-container>
        <el-header>
          <userTopVue></userTopVue>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import * as API from "../api/meun"
//@ts-ignore
import sidebarVue from "./components/sidebar.vue"
//@ts-ignore
import userTopVue from "./components/userTop.vue"
import { useInfoStore } from "../store"
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #304156;
}
h1 {
  font-size: 15px;
  color: #fff;
  text-align: center;
  margin: 13px 0;
}
</style>