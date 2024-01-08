<template>
  <div>
		<el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="loadset"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
		<el-table-column prop="label" label="菜单标题" />
		<el-table-column prop="date" label="图标" />
		<el-table-column prop="menuSort" label="排序" />
		<el-table-column prop="date" label="权限标识" />
		<el-table-column prop="date" label="组件路径" />
		<el-table-column label="外链">
			<template #default="scope">
				<p>{{ scope.row.leaf?'是':'否' }}</p>
			</template>
		</el-table-column>
		<el-table-column prop="date" label="缓存">
			<template #default="scope">
				<p>{{ scope.row.leaf?'是':'否' }}</p>
			</template>
		</el-table-column>
		<el-table-column label="可见">
			<p>是</p>
		</el-table-column>
		<el-table-column prop="createTime" label="创建日期" />
		<el-table-column label="操作" fixed="right" width="170" align="center">
        <template #default="scope">
          <el-button type="danger" :icon="EditPen"></el-button>
          <el-button type="danger" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { roleMeun,User } from "../../hooks/roleMeun"
let { getRoleMeunList,loadset } = roleMeun()
import { EditPen, Delete } from "@element-plus/icons-vue"
interface Pid{
	pid:number
}
let from =reactive<Pid>({
  pid: 0
})
let list=ref<User|unknown>([])
const renderMeun = () => {
  getRoleMeunList(from).then((res) => {
		list.value=res
  })
}
renderMeun()

</script>

<style lang="scss" scoped>
</style>