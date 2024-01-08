<template>
  <div class="box">
    <nav>
      <h4>角色列表</h4>
    </nav>
    <el-table ref="multipleTableRef" :data="list.content" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="名称" />
      <el-table-column property="dataScope" label="数据权限" />
      <el-table-column property="level" label="角色级别" />
      <el-table-column property="description" label="描述" />
      <el-table-column property="createTime" label="创建日期" />
      <el-table-column label="操作" fixed="right" width="170" align="center">
        <template #default="scope">
          <el-button type="danger" :icon="EditPen"></el-button>
          <el-button type="danger" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue"
import { roleMeun } from "../../hooks/roleMeun"
import * as API from "../../../../api/role"
import { EditPen, Delete } from "@element-plus/icons-vue"

let { getRoleList, list,form } = roleMeun()
getRoleList(form)

</script>

<style lang="scss" scoped>
  nav {
    width: 100%;
    border-bottom: 1px solid #eee;
    line-height: 70px;
    padding-left: 10px;
  }
</style>