<template>
  <div class="home">
    <div v-if="bannerList.length" class="slider-wrapper">
      <slider>
        <div v-for="item in bannerList" :key="item.id">
          <a :href="item.url">
            <img :src="item.pic" style="width: 100%" />
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
  import Slider from '@/base/slider.vue'
  import { onMounted, reactive, toRefs } from 'vue'
  import { getBanner } from '@/api'
  export default {
    name: 'Home',
    components: {
      Slider
    },
    setup() {
      const state = reactive({
        bannerList: []
      })
      onMounted(() => {
        getBannerList()
      })
      const getBannerList = async () => {
        const data = await getBanner()
        state.bannerList = data.banners
      }
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style scoped lang="scss">
  .slider-wrapper {
    // position: relative;
    // width: 100%;
    // overflow: hidden;
    width: 96%;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
