<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in route.matched.filter((item) => item.meta.title)"
        :key="index"
        :to="item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <section class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ account }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getUser, removeUser } from '_l/utils'
const route = useRoute()
const router = useRouter()

const { account } = getUser()

const logout = (): void => {
  removeUser()
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 3px 0px 5px 0px #00000034;
  .user-info {
    margin-left: auto;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
