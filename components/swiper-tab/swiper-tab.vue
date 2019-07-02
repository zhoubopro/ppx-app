<template>
  <view class="swiper-tab-wrap">
    <view class="uni-tab-bar">
      <scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
        <block v-for="(item, index) in tabBars" :key="index">
          <view
            class="swiper-tab-list"
            :class="{'active': tabBarIndex===index}"
            @tap="bindTabBarEvent(index)"
            :style="scrollItemStyle"
          >
            {{item.name}}
            <view class="swiper-tab-line"></view>
          </view>
        </block>
      </scroll-view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      tabBarIndex: {
        type: Number,
        default: 0
      },
      tabBars: {
        type: Array,
        default: []
      },
      scrollStyle: {
        type: String,
        default: ''
      },
      scrollItemStyle: {
        type: String,
        default: ''
      },
    },
    methods: {
      // 标签点击事件
      bindTabBarEvent(index) {
        this.$emit('tabTapCallback', index);
      }
    }
  }
</script>
<style lang="less" scoped>
  .swiper-tab-wrap {
    .uni-tab-bar {
      .uni-swiper-tab {
        border-bottom: 2upx solid #eeeeee;
        .swiper-tab-list {
          width: 104upx;
          font-weight: 700;
          color: #969696;
          &.active {
            color: #343434;
            .swiper-tab-line {
              border-bottom: 6upx solid #FEDE33;
              border-top: 6upx solid #FEDE33;
              margin: -18upx auto 0;
              width: 70upx;
              border-radius: 20upx;
            }
          }
        }
      }
    }
  }
</style>
