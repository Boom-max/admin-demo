<template>
  <div class="layout">
    <el-container class="layout-body">
      <el-aside width="auto" class="menus">
        <MenuList />
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <Header />
        </el-header>
        <el-main style="padding: 0" class="">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuList from './menu-list/index.vue'
import Header from './header/index.vue'
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.layout {
  .layout-body {
    .menus {
      height: 100vh;
      overflow-y: auto;
      background: #f5f7fa;
    }
  }
}
</style>
