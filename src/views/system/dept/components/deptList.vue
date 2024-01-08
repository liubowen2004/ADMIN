<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
		 <el-table-column type="selection" width="55" />
      <el-table-column prop="label" label="名称" />
      <el-table-column prop="deptSort" label="排序" />
      <el-table-column label="状态" align="center">
        <template #default="scope">
          <el-switch
            v-model="scope.row.enabled"
            style="--el-switch-on-color: #409eff; --el-switch-off-color: #ff4949"
            :active-value="true"
            :inactive-value="false"
          />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建日期" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" :icon="EditPen"></el-button>
          <el-button type="danger" :icon="Delete" @click="getDeptDel(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue"
import { getDeptListApi, User, getDeptchildApi, getDeptDelApi } from "../../../../api/dept"
import { getStructureList } from "../../../../utils/commonality"
import { EditPen, Delete } from "@element-plus/icons-vue"
import { deptRender } from "../../hooks/deptRender"
let { list, getDeptList,from,load,searchs } = deptRender()
let delArr: number[]=[]
const getDeptDel = async (id: number) => {
	delArr=[]
  delArr.push(id)
  let res = await getDeptDelApi(delArr)
	getDeptList(from)
}
const search=(val)=>{
	searchs(val)
}
defineExpose({
  getDeptList,
  delArr,
  getDeptDel,
  from,
	search
})
</script>

<style lang="scss" scoped>
</style>