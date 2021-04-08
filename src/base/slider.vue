<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="slideGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot"
        v-for="(num, index) in nums"
        :key="num"
        :class="{ active: currentPageIndex === num - 1 }"
        @click="goPage(index)"
      ></span>
    </div>
  </div>
</template>

<script>
  import { toRefs, getCurrentInstance, onMounted, reactive, onBeforeUnmount } from 'vue'
  import { addClass } from '@/common/js/dom.js'
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'
  BScroll.use(Slide)
  export default {
    name: 'Slider',
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    setup() {
      const instance = getCurrentInstance()
      const state = reactive({
        nums: 1,
        currentPageIndex: 0
      })
      onMounted(() => {
        setTimeout(() => {
          _setSliderWidth()
          _initDots()
          _initSlider()
          _onScrollChanged()
        }, 20)
        // 节流
        window.addEventListener('resize', () => {
          if (!instance.slide) {
            return
          }
          _setSliderWidth(true)
          instance.slide.refresh()
        })
      })
      onBeforeUnmount(() => {
        instance.slide.destroy()
      })
      const _initSlider = () => {
        instance.slide = new BScroll(instance.refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          probeType: 3,
          slide: true,
          click: true
        })
      }
      const _onScrollChanged = () => {
        instance.slide.on('slidePageChanged', (page) => {
          state.currentPageIndex = page.pageX
        })
      }
      const _initDots = () => {
        state.nums = instance.children.length
      }
      const goPage = (index) => {
        state.currentPageIndex = index
        instance.slide.goToPage(index, 0)
      }
      const _setSliderWidth = (isResize) => {
        instance.children = instance.refs.slideGroup.children
        let width = 0
        let sliderWidth = instance.refs.slider.clientWidth
        for (let i = 0, len = instance.children.length; i < len; i++) {
          const child = instance.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        console.log('loop:', instance.ctx.loop)
        if (instance.ctx.loop && !isResize) {
          width += 2 * sliderWidth
        }
        instance.refs.slideGroup.style.width = width + 'px'
      }
      return {
        ...toRefs(state),
        goPage
      }
    }
  }
</script>
<style lang="scss" scoped>
  .slider {
    min-height: 1px;
    position: relative;
    .slider-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      display: flex;
      .slider-item {
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a {
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }

  .dots {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;

      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
</style>
