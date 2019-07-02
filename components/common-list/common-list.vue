<template>
  <view class="common-list-wrap u-f animated fadeIn fast">
    <view class="common-list-left">
      <image :src="item.avatar" @tap.stop="openSpace" mode="widthFix" lazy-load></image>
    </view>
    <view class="common-list-right">
      <view class="users u-f-ac u-f-jsb">
        <view class="nickname u-f-ac">
          {{item.nickname}}
          <tagSexAge :sex="getSex" :age="getAge"></tagSexAge>
        </view>
        <view v-show="!item.isguanzhu" @tap="guanzhu" class="follow icon iconfont icon-zengjia">关注</view>
      </view>
      <view class="words" @tap.stop="opendetail">{{item.words}}</view>
      <view class="media u-f-ajc" @tap.stop="opendetail">
        <template v-if="item.mediaUrl">
          <!-- 图片 -->
          <image v-if="item.mediaUrl" :src="item.mediaUrl"
                 mode="widthFix"
                 lazy-load></image>
        </template>
        <!-- 视频 -->
        <template v-if="item.mediaType === 'video'">
          <view class="play-btn icon iconfont icon-bofang"></view>
          <view class="play-info">
            {{item.playNum}}次播放 {{item.longTime}}
          </view>
        </template>
        <!-- 分享 -->
        <view class="share u-f-ac" v-else-if="item.mediaType === 'share'">
          <image :src="item.mediaUrl"
                 mode="widthFix" lazy-load></image>
          <view>{{item.words}}</view>
        </view>
      </view>
      <view class="icon-list u-f-ac u-f-jsb">
        <view class="city">{{item.city}}</view>
        <view class="u-f-ac">
          <view class="icon iconfont icon-zhuanfa">
            分享 </view>
          <view class="icon iconfont icon-pinglun1">
            {{item.remarkNum}} </view>
          <view class="icon iconfont icon-dianzan1" @tap="caozuo('ding')">
            {{item.remarkNum}} </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import tagSexAge from "../../components/tag-sex-age/tag-sex-age";
  export default {
    components:{
      tagSexAge
    },
    props:{
      nonavigate:{
        type:Boolean,
        default:false
      },
      item:{
        type: Object,
        default: {}
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getSex() {
        return this.item.sex;
      },
      getAge(){
        return this.item.age;
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="less">
  .common-list-wrap{
    padding: 20upx;
    .common-list-left{
      flex-shrink: 0;
      image{
        width: 90upx;
        height: 90upx;
        border-radius:100%;
      }
    }
    .common-list-right{
      flex: 1;
      margin-left: 15upx;
      border-bottom: 2upx solid #EEEEEE;
      padding-bottom: 10upx;
      .users{
        .nickname{
          color: #999999;
          font-size: 32upx;
        }
        .follow {
          font-size: 24upx;
          background: #F4F4F4;
          border-radius: 8upx;
          padding: 0 10upx;
        }
      }
      .words {
        font-size: 28upx;
        color: #333333;
        padding: 12upx 0;
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
        .share{
          background: #EEEEEE;
          width: 100%;
          padding: 10upx;
          border-radius: 10upx;
          image{
            width: 200upx;
            height: 150upx;
            margin-right: 10upx;
          }
        }
      }
      .icon-list {
        color: #c0c0c0;
        padding: 20upx 0;
        .city{

        }
        .iconfont{
          margin-left: 20upx;
        }
      }
    }
  }
</style>
