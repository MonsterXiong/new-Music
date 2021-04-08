<template>
  <h1>{{ state.msg }}</h1>
</template>

<script setup>
  import { defineProps, onMounted, reactive, onBeforeUpdate } from 'vue'
  import { useRoute } from 'vue-router'
  let state = reactive({ msg: 'home' })
  const route = useRoute()
  onBeforeUpdate((e) => {
    state.msg = route.query.msg
  })
  onMounted(() => {
    // console.log(111)
  })
  //   defineProps({
  //     msg: String
  //   })
</script>

<style lang="scss" scoped></style>
