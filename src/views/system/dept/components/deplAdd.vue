<template>
  <div>
    <el-dialog v-model="dialogVisible" title="新增部门" width="25%" :before-close="handleClose">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="90px" class="demo-ruleForm" status-icon>
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="部门排序" prop="deptSort">
          <el-input-number
            v-model="ruleForm.deptSort"
            :min="1"
            :max="999"
            controls-position="right"
            size="mini"
						style="width: 100%;"
          />
        </el-form-item>
        <div class="radioBox">
          <el-form-item label="顶级部门">
            <el-radio-group v-model="radio1">
              <el-radio :label="true" size="large">是</el-radio>
              <el-radio :label="false" size="large">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="ruleForm.enabled">
              <el-radio :label="true" size="large">启用</el-radio>
              <el-radio :label="false" size="large">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item label="上级部门" v-show="radio1 == false">0
          <el-tree-select
            v-model="value"
            lazy
            :load="loads"
            :props="props"
            :cache-data="cacheData"
            check-strictly
            :data="list"
            placeholder="选择上级类目"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from "element-plus"
import { reactive, ref, defineEmits, nextTick } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { DeptAdd, getDeptAddApi, getDeptListApi, getDeptchildApi, User } from "../../../../api/dept"
import { getStructureList } from "../../../../utils/commonality"
import { deptRender } from "../../hooks/deptRender"
const emits = defineEmits()
let radio1 = ref(true)
const dialogVisible = ref(true)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<DeptAdd>({
  name: "",
  deptSort: "999",
  enabled: true
})
const rules = reactive<FormRules<DeptAdd>>({
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  deptSort: [{ required: true, message: "请输入序号", trigger: "blur" }]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let res = await getDeptAddApi(ruleForm)
      console.log(res, "res")
      emits("deptAdd")
    } else {
      console.log("error submit!", fields)
    }
  })
}
const cancel = () => {
  emits("cancel")
}
/**树形懒加载 */
const value = ref()
let id = 0
let { list, loads } = deptRender()
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.radioBox {
  display: flex;
  justify-content: space-between;
}
</style>