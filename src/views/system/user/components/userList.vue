<template>
  <div>
    <el-table ref="multipleTableRef" :data="list" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column property="username" label="用户名" />
      <el-table-column property="nickName" label="昵称" />
      <el-table-column property="gender" label="性别" />
      <el-table-column property="phone" label="电话" />
      <el-table-column property="email" label="邮箱" width="200" />
      <el-table-column property="dept.name" label="部门" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.enabled"
            style="--el-switch-on-color: #409eff; --el-switch-off-color: #f56c6c"
            :active-value="true"
            :inactive-value="false"
          />
        </template>
      </el-table-column>
      <el-table-column property="createTime" label="创建日期" width="200" />
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
import * as API from "../../../../api/user"
import {EditPen,Delete} from "@element-plus/icons-vue"
const from = reactive<API.UserList>({
  page: 0,
  size: 10,
  sort: "id,desc"
})
let list = ref([])
const getUserList = async () => {
  let res = await API.getUserListApi(from)
  list.value = res.data.content
  console.log(list)
}
getUserList()
</script>

<style lang="scss" scoped>
</style>