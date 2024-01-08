<template>
  <div>
    <el-dialog v-model="dialogVisible" title="新增岗位" width="30%" :before-close="handleClose">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="90px" class="demo-ruleForm" status-icon>
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="排序" prop="jobSort">
          <el-input-number v-model="ruleForm.jobSort" controls-position="right" :min="1" :max="999" size="large" />
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group class="ml-4" v-model="ruleForm.enabled">
            <el-radio :label="true" size="large">启用</el-radio>
            <el-radio :label="false" size="large">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="getJobAdd"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineEmits } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { ElNotification } from "element-plus"
import * as API from "../../../../api/job"
import { renders } from "../render"
const { getJobList, tableData, from } = renders()
const emit = defineEmits(["closeAdd"])
const ruleForm = reactive<API.RuleForm>({
  enabled: true,
  id: null,
  jobSort: 999,
  name: ""
})
const rules = reactive<FormRules<API.RuleForm>>({
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  jobSort: [{ required: true, message: "请输入序号", trigger: "blur" }]
})
const dialogVisible = ref<boolean>(true)
const getJobAdd = async () => {
  if (ruleForm.id) {
    let res = await API.getJobRevApi(ruleForm)
    if (res.status == 204) {
      ElNotification({
        title: "修改成功",
        type: "success"
      })
    }
  } else {
    let res = await API.getJobAddAPi(ruleForm)
    if (res.status == 201) {
      ElNotification({
        title: "新增成功",
        type: "success"
      })
      getJobList(from)
    }
  }
	getJobList(from)
  emit("closeAdd")
}
/**关闭弹窗 */
const handleClose = () => emit("closeAdd")
const setEcho = (val) => {
  ruleForm.name = val.name
  ruleForm.id = val.id
  ruleForm.jobSort = val.jobSort
  ruleForm.id = val.id
}
defineExpose({
  setEcho
})
</script>

<style lang="scss" scoped>
.el-input-number {
  width: 100%;
  text-align-last: left;
}
</style>