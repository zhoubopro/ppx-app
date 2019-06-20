<template>
  <view class="index-list-wrap">
    <view class="list-item">
      <view class="release-user u-f-ac u-f-jsb">
        <view class="avatar">
          <image mode="widthFix" src="/static/demo/userpic/12.jpg"></image>
          hello情歌
        </view>
        <view class="follow">
          + 关注
        </view>
      </view>
      <view class="words">
        为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的
      </view>
      <view class="media">
        <image mode="widthFix" src="/static/demo/datapic/11.jpg"></image>
      </view>
      <view class="icon-list u-f-ac u-f-jsb">
        <view>
          <view class="icon iconfont icon-icon_xiaolian-mian"></view>
          <view class="icon iconfont icon-icon_xiaolian-mian"></view>
          <span>2000</span>
          <view class="icon iconfont icon-kulian"></view>
          <span>10</span>
        </view>
        <view>
          <view class="icon iconfont icon-pinglun1"></view>
          <span>120</span>
          <view class="icon iconfont icon-zhuanfa"></view>
          <span>分享</span>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  .index-list-wrap{
    padding: 20upx;
    border-bottom: 2upx solid #EEEEEE;
    .list-item{
      .release-user{
        color: #333333;
        image{
          width: 90upx;
          height: 90upx;
          border-radius: 100%;
          margin-right: 20upx;
          vertical-align: middle;
        }
        .follow{
          background: #F4F4F4;
          border-radius: 8upx;
          padding: 10upx 20upx;
        }
      }
      .words{
        margin: 40upx 0 30upx;
        font-size: 28upx;
        color: #333333;
      }
      .media{
        image{
          width: 100%;
          border-radius: 8upx;
        }
      }
      .icon-list{
        color: #999999;
      }
    }
  }
</style>
