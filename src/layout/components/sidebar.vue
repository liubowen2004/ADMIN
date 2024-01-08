<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
	  	router
    >
		<el-menu-item index="/homes">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/dashboard" v-for="(item, index) in meunList" :key="index" v-show="!item.redirect">
        <el-icon><icon-menu /></el-icon>
        <span>{{item.children[0].meta.title}}</span>
      </el-menu-item>
      <el-sub-menu :index="index" v-for="(item, index) in meunList" :key="index" v-show="item.redirect">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="'/'+ite.component" v-for="ite,idx in item.children" :key="idx">{{ite.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import * as API from "../../api/meun"
import { ref } from "vue"
let meunList = ref<any>([])
let getMeunList = async () => {
  let res = await API.getMeunListApi()
  meunList.value = res.data
}
getMeunList()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
	border-right: none;
}
</style>