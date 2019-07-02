<template>
  <view class="dynamic-nav-bar-wrap">
    <UniNavBar :fixed="true" :statusBar="true" :border="false" @click-right="openAdd">
      <!-- 左边 -->
      <block slot="left">
        <view class="nav-left">
          <view class="icon iconfont icon-qiandao"></view>
        </view>
      </block>
      <!-- 中间 -->
      <view class="nav-tab-bar u-f-ajc">
        <block v-for="(tab, index) in tabBars" :key="tab.id">
          <view class="nav-tab-bar-items u-f-ajc"
                :class="{'active': tabIndex === index}"
                @tap="changeTab(index)">
            {{tab.name}}
            <view v-if="tabIndex === index" class="nav-tab-bar-line"></view>
          </view>
        </block>
      </view>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right u-f-ajc">
          <view class="icon iconfont icon-bianji1"></view>
        </view>
      </block>
    </UniNavBar>
  </view>
</template>
<script>
  import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar';
  export default {
    components: {
      UniNavBar
    },
    props:{
      tabBars: {
        type: Array,
        default: []
      },
      tabIndex:{
        type: Number,
        default: 0
      }
    },
    methods:{
      changeTab(index){
        this.$emit('bindChangeTab',index);
      },
      openAdd(){
        // 打开发布页面
        uni.navigateTo({
          url: '../release/release'
        });
      }
    }
  }
</script>
<style scoped lang="less">
  .dynamic-nav-bar-wrap{
    .iconfont{
      font-size: 40upx;
    }
    .nav-left{
      margin-left: 16upx;
      .iconfont{
        color: #FF9619;
      }
    }
    .nav-right{
      width: 100%;
    }
    .nav-tab-bar{
      width: 100%;
      margin-left: -20upx;
      position: relative;
    }
    .nav-tab-bar{
      .nav-tab-bar-items{
        font-size: 32upx;
        padding: 0 30upx;
        font-weight: bold;
        color: #969696;
        .nav-tab-bar-line{
          border-bottom: 5upx solid #FEDE33;
          border-top: 5upx solid #FEDE33;
          width: 70upx;
          border-radius: 20upx;
          position: absolute;
          bottom: 12upx;
        }
        &.active{
          color: #333333!important;
        }
      }
    }
  }
</style>
