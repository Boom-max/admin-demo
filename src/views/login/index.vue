<template>
  <div class="login">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
      status-icon
    >
      <el-form-item label="账号" prop="account">
        <el-input clearable v-model="formData.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input clearable type="password" v-model="formData.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(formRef)"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { setUser } from '_l/utils'

const formRef = ref<FormInstance>()
const formData = reactive({
  account: '',
  password: '',
})
const rules = reactive<FormRules>({
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

const router = useRouter()

const login = (formRef: FormInstance | undefined): void => {
  if (!formRef) return
  formRef.validate((valid, fields) => {
    if (valid) {
      if (formData.account && formData.password === '777') {
        setUser(formData)
        ElMessage({
          message: '登陆成功',
          type: 'success',
        })
        router.push('/')
      } else {
        ElMessage({
          message: '密码输入错误！',
          type: 'error',
        })
      }
    }
  })
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
