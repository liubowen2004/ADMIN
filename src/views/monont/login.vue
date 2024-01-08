<template>
  <div class="box">
    <div class="login">
      <h2>ELADMIN 后台关系系统</h2>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" style="height: 40px">
            <template #prefix>
              <svg-icon icon-class="user" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" style="height: 40px">
            <template #prefix>
              <svg-icon icon-class="password" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" style="width: 65%; height: 40px" placeholder="验证码" >
						<template #prefix>
              <svg-icon icon-class="code" />
            </template>
					</el-input>
          <el-image
            style="width: 32%; height: 40px; margin-left: 10px"
            :src="ruleForm.url"
            fit="contain"
            @click="getCode"
          >

          </el-image>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" label="记住我" size="large" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue"
import { encrypt } from "../../utils/rsaEncrypt"
import { ElMessage, FormInstance, FormRules } from "element-plus"
import { getCodeApi, RuleForm, getLoginApi } from "../../api/login"
import { ElNotification } from "element-plus"
import { useRouter } from "vue-router"
let router = useRouter()
const formSize = ref("default")
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: "admin",
  password: "123456",
  code: "",
  uuid: "",
  url: ""
})
let getCode = () => {
  getCodeApi().then((res) => {
    //@ts-ignore
    ruleForm.url = res.data.img
    //@ts-ignore
    ruleForm.uuid = res.data.uuid
  })
}
getCode()

const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // @ts-ignore
      let psd: string = encrypt(ruleForm.password)
      let obj = {
        username: ruleForm.username,
        password: psd,
        code: ruleForm.code,
        uuid: ruleForm.uuid
      }
      let res = await getLoginApi(obj)
      if (res.status == 200) {
        localStorage.setItem("user", JSON.stringify(res.data))
        ElNotification({
          title: "Success",
          message: "登录成功",
          type: "success"
        })
        setTimeout(() => {
					router.push("/about")
				}, 500);
      } else {
        ruleForm.password = ""
        ElMessage.error(`${res.response.data.message}`)
      }
    } else {
      console.log("error submit!", fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-size: 100%;
  background: url(@/assets/imgages/background.webp) no-repeat center;
}
.login {
  padding: 20px;
  width: 460px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    text-align: center;
    margin: 15px 0;
    color: #707070;
  }
  .el-button {
    width: 100%;
    height: 40px;
  }
}
</style>