<template>
  <div>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="名称" />
      <el-table-column property="jobSort" label="排序" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.enabled"
            style="--el-switch-on-color: #409eff; --el-switch-off-color: #ff4949"
            :active-value="true"
            :inactive-value="false"
          />
        </template>
      </el-table-column>
      <el-table-column property="createTime" label="创建日期" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="scope">
          <el-button type="danger" :icon="EditPen" @click="echo(scope.row)"></el-button>
          <el-popconfirm title="却要删除吗?" @confirm="confirm(scope.row.id)">
            <template #reference>
              <el-button type="danger" :icon="Delete"></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits,getCurrentInstance } from "vue"
import * as API from "../../../../api/job"
import { Delete, EditPen } from "@element-plus/icons-vue"
import { ElNotification } from "element-plus"
import { renders } from "../render"
const emit=defineEmits(['handerEcho'])
const { getJobList, tableData,from } = renders()
setTimeout(() => {
	getJobList(from)
}, 1000);
let delArr = []
const confirm = async (id: number) => {
  delArr = []
  delArr.push(id)
  let res = await API.getJobDelApi(delArr)
  if (res.status == 200) {
    ElNotification({
      title: "删除成功",
      type: "success"
    })
    getJobList(from)
  }
}

const echo=(value)=>{
	emit('handerEcho',value)
}

defineExpose({
	echo
})
</script>

<style lang="scss" scoped>
</style>