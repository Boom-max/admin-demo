<template>
  <template v-for="(item, index) in list" :key="index">
    <template v-if="!item.meta.hidden">
      <el-sub-menu
        v-if="item.children && item.children.length > 0"
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <span>{{ item.meta.title }}</span></template
        >
        <SubMenu :list="item.children"></SubMenu>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :key="item.path">
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import SubMenu from './sub-menu.vue'
import { defineProps, toRef } from 'vue'
const props = defineProps({
  list: Array<object>,
})
const list = toRef(props, 'list')
</script>
