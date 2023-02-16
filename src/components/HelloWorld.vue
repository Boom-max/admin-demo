<template>
  <div class="contents">
    <section class="mobile-phone">
      <img src="@image/iphone.png">
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
let str = ref<number>()
let obj = reactive<object>({ a: 2 })

</script>

<style lang="less" scoped>
.contents {
  .mobile-phone {
    width: 600px;
    > img {
      width: 100%;
    }
  }
}
</style>
