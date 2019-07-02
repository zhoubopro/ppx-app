<template>
  <view class="topic-info-wrap">
    <!-- 模糊背景 -->
    <view class="topic-detail-bg">
      <image :src="topicInfo.avatar" mode="aspectFill" lazy-load></image>
    </view>
    <!-- 话题信息 -->
    <view class="topic-detail-info">
      <view class="info-top u-f-ac">
        <view class="info-top-avatar u-f-ajc">
          <image :src="topicInfo.avatar" mode="widthFix" lazy-load></image>
        </view>
        <view class="info-top-title">
          #{{topicInfo.title}}#
        </view>
      </view>
      <view class="info-center u-f u-f-jsb">
        <view class="info-dynamic u-f-ac">
          <view>动态： {{topicInfo.totalNum}}</view>
          <view>今日： {{topicInfo.todayNum}}</view>
        </view>
        <view class="info-nickname">
          <image :src="topicInfo.avatar" mode="widthFix" lazy-load></image>
          {{topicInfo.nickName}}
        </view>
      </view>
      <view class="info-bottom">
        {{topicInfo.desc}}
      </view>
    </view>
  </view>
</template>
<script>
 export default {
   props:{
     topicInfo: {
       type: Object,
       default: {}
     }
   }
 }
</script>
<style scoped lang="less">
  .topic-info-wrap{
    .topic-detail-bg{
      width: 100%;
      height: 300upx;
      position: relative;
      overflow: hidden;
      image{
        width: 100%;
        position: absolute;
        filter: blur(10px);
      }
    }
    .topic-detail-info{
      border-bottom: 2upx solid #EEEEEE;
      .info-top{
        padding: 0 40upx;
        .info-top-avatar{
          background: #FFFFFF;
          border-radius: 10upx;
          height: 110upx;
          width: 110upx;
          margin-top: -55upx;
          z-index: 7;
          image{
            border-radius: 10upx;
            height: 100upx;
            width: 100upx;
          }
        }
        .info-top-title{
          font-weight: bold;
          color: #333333;
          font-size: 30upx;
          margin-left: 20upx;
        }
      }
      .info-center{
        padding: 0 40upx;
        color: #CDCDCD;
        .info-dynamic{
          view{
            font-size: 24upx;
            margin-right: 20upx
          }
        }
        .info-nickname{
          font-size: 24upx;
          image{
            width: 30upx;
            height: 30upx;
            border-radius: 100%;
            margin-right: 20upx;
            vertical-align: sub;
          }
        }
      }
      .info-bottom{
        padding: 0 40upx;
        color: #CDCDCD;
        font-size: 24upx;
        margin-bottom: 20upx;
      }
    }
  }
</style>
