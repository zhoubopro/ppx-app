<template>
  <view class="home-info-wrap u-f-ac animated fadeIn fast" @tap="ToUserSpace">
    <image class="avatar" :src="homeInfo.avatar" lazy-load></image>
    <view class="u-f1">
      <view class="nickname">{{homeInfo.username}}</view>
      <view class="article u-f-ac">
        <view>总访客 {{homeInfo.totalnum}}</view>
        <view>今日 {{homeInfo.todaynum}}</view>
      </view>
    </view>
    <view class="icon iconfont icon-jinru last-view"></view>
  </view>
</template>

<script>
  export default {
    props:{
      homeInfo: {
        type: Object,
        default: {}
      }
    },
    methods:{
      ToUserSpace(){
        this.User.navigate({
          url: '../../pages/user-space/user-space?userid='+this.homeInfo.id,
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .home-info-wrap{
    padding: 20upx 40upx;
    .avatar{
      flex-shrink: 0;
      width: 100upx;
      height: 100upx;
      border-radius: 100%;
      margin-right: 15upx;
    }
    .nickname{
      font-size: 32upx;
    }
    .article{
      color: #BEBEBE;
      view{
        margin-right: 20upx;
      }
    }
    .last-view{
      height: 100%;
    }
  }

</style>
