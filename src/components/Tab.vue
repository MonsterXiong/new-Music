<template>
  <div class="tab">
    <router-link :to="{ path: '/home', query: { msg: 'home' } }" tag="div" class="tab-item">
      <span>推荐</span>
    </router-link>
    <router-link :to="{ path: '/rank', query: { msg: 'rank' } }" tag="div" class="tab-item">
      <span>排行</span>
    </router-link>
    <router-link
      :to="{ path: '/recommend', query: { msg: 'recommend' } }"
      tag="div"
      class="tab-item"
    >
      <span>歌单</span>
    </router-link>
    <router-link :to="{ path: '/personal', query: { msg: 'personal' } }" tag="div" class="tab-item">
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  import { onMounted } from 'vue'

  export default {
    name: 'Tab',
    setup() {
      onMounted(() => {})
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/scss/variable.scss';
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    background: $color-theme;
    font-size: $font-size-medium;
    .tab-item {
      flex: 1;
      text-align: center;
      color: $color-text-lm;
      span {
        padding-bottom: 6px;
      }
      &.router-link-active {
        span {
          font-weight: bold;
          font-size: $font-size-medium-x;
          color: $color-text-l;
          border-bottom: 2px solid $color-text-l;
        }
      }
    }
  }
</style>
