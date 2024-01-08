<template>
  <div>
    <!-- <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="名称" />
      <el-table-column property="description" label="描述" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="scope">
          <el-button type="danger" :icon="EditPen"></el-button>
          <el-button type="danger" disabled :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
// import { reactive, ref } from "vue"
// import * as API from "../../../../api/dict"
// const from =reactive<API.IDictList>({
//     page: 0,
//     size: 10,
//     sort: "id,desc"
//   })
// const tableData = ref([])
// let totalElements = ref(0)
// const dictRender = async () => {
//   let res = await API.getDictListApi(from)
//   tableData.value = res.data.content
//   totalElements.value = res.data.totalElements
// }
// dictRender()
</script>

<style lang="scss" scoped>
</style>