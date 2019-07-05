<template>
  <view class="detail-info-wrap">
    <view class="list-item animated fadeIn fast">
      <view class="release-user u-f-ac u-f-jsb">
        <view class="avatar">
          <image mode="widthFix" :src="item.avatar" lazy-load></image>
          {{item.nickname}}
        </view>
        <view class="follow" v-if="!item.isFollow" @tap="followEvent">
          + 关注
        </view>
      </view>
      <view class="words">
        {{item.words}}
      </view>
      <view class="media u-f-ajc">
        <!-- 图片 -->
        <image mode="widthFix" :src="item.mediaUrl" lazy-load></image>
        <!-- 视频  -->
        <template v-if="item.mediaType === 'video'">
          <view class="icon iconfont icon-bofang play-btn"></view>
          <view class="play-info">
            {{item.playNum}}次播放 {{item.longTime}}
          </view>
        </template>
      </view>
      <view class="icon-list u-f-ac u-f-jsb">
        <view class="u-f-ac">
          <view class="icon iconfont icon-icon_xiaolian-mian"
                :class="item.goodOrBad.index === 1 ? 'active': ''"></view>
          <view class="number">{{item.goodOrBad.good}}</view>
          <view class="icon iconfont icon-kulian"
                :class="item.goodOrBad.index === 2 ? 'active': ''"></view>
          <view class="number">{{item.goodOrBad.bad}}</view>
        </view>
        <view class="u-f-ac">
          <view class="icon iconfont icon-pinglun1"></view>
          <view class="number">{{item.remarkNum}}</view>
          <view class="icon iconfont icon-zhuanfa"></view>
          <view class="number">分享</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    methods:{
      followEvent(){
        console.log('followEvent')
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail-info-wrap {
    margin: 20upx;
    border-bottom: 2upx solid #EEEEEE;
    .list-item {
      .release-user {
        color: #999999;
        font-size: 28upx;
        image {
          width: 86upx;
          height: 86upx;
          border-radius: 100%;
          margin-right: 20upx;
          vertical-align: middle;
        }
        .follow {
          background: #F4F4F4;
          border-radius: 8upx;
          padding: 0 20upx;
        }
      }
      .words {
        margin: 40upx 0 30upx;
        font-size: 28upx;
        color: #333333;
      }
      .media {
        position: relative;
        image {
          width: 100%;
          border-radius: 8upx;
        }
        .play-btn {
          position: absolute;
          font-size: 120upx;
          color: #FFFFFF;
        }
        .play-info {
          position: absolute;
          background: rgba(51, 51, 51, 0.6);
          color: #FFFFFF;
          bottom: 8upx;
          right: 8upx;
          border-radius: 40upx;
          font-size: 22upx;
          padding: 6upx 12upx;
        }
      }
      .icon-list {
        color: #c0c0c0;
        padding: 20upx 0;
        .number {
          padding: 0 20upx 0 10upx;
        }
        .active{
          color: #f0ad4e;
        }
      }
    }
  }
</style>
