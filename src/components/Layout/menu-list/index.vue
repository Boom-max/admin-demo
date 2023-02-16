<template>
  <div :class="{ 'menu-box': !collapse }">
    <el-menu
      :default-active="ativeRouter"
      class="menu-list"
      @open="handleOpen"
      @close="handleClose"
      :background-color="'#F5F7FA'"
      @select="jump"
      :collapse="collapse"
    >
      <SubMenu :list="routers" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import SubMenu from './sub-menu.vue'
import { ref, reactive, watch } from 'vue'
import { routerList } from '@/router/index'
import { useRoute, useRouter } from 'vue-router'

type routeItem = {
  children: Array<{ children: Array<object> }>
}

const routers = reactive<Array<routeItem>>(routerList)
const route = useRoute()
const router = useRouter()
const ativeRouter = ref<string>()
const collapse = ref<boolean>(false)

// 监听路由变化修改菜单默认选中的路由
watch(
  () => route,
  (n) => {
    ativeRouter.value = n.path
  },
  { immediate: true,deep: true }
)

const jump = (item: string) => {
  router.push(item)
}

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu-box {
  width: 230px;
}
.menu-list {
  border: none;
}
</style>
