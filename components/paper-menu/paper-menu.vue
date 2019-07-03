<template>
  <view class="paper-menu-wrap">
    <!-- 操作菜单 -->
    <view class="paper-menu-popup-mask" v-show="show" @tap="hidePopup"></view>
    <view class="paper-menu-popup" v-show="show">
      <view class="triangle"></view>
      <view class="u-f-ac inline" @tap="addFriend">
        <view class="icon iconfont icon-sousuo"></view>
        加糗友
      </view>
      <view class="u-f-ac inline">
        <view class="icon iconfont icon-jinru"></view>
        加入群
      </view>
      <view class="u-f-ac inline">
        <view class="icon iconfont icon-zengjia"></view>
        创建群
      </view>
      <view class="u-f-ac inline">
        <view class="icon iconfont icon-xiaoxi"></view>
        附近的群
      </view>
      <view class="u-f-ac inline">
        <view class="icon iconfont icon-dizhi"></view>
        附近的糗友
      </view>
      <view class="u-f-ac inline" @tap="clear">
        <view class="icon iconfont icon-qingchu"></view>
        清除缓存
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      show:Boolean
    },
    methods:{
      hidePopup(){
        this.$emit('hide');
      },
      addFriend(){
        this.$emit('addfriend');
      },
      clear(){
        this.$emit('clear');
      }
    }
  }
</script>

<style scoped lang="less">
  .paper-menu-wrap{
    .paper-menu-popup-mask{
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 1999;
      /*background: rgba(0, 0, 0, .3);*/
    }
      .paper-menu-popup{
        position: fixed;
        right: 0;
        background: #FFFFFF;
        z-index: 2000;
        width: 28%;
        box-shadow: 2upx 2upx 20upx 2upx #CCCCCC;
        margin: 20upx 10upx 0 0;
        border-radius: 10upx;
        .inline{
          padding: 8upx 20upx;
          border-bottom: 2upx solid #EEEEEE;
        }
        view{
          font-size: 26upx;
          view{
            margin-right: 10upx;
            font-weight: bold;
          }
        }
        .triangle {
          position: relative;
          background: #FFFFFF;
          &:after {
            content: ' ';
            position: absolute;
            display: inline-block;
            top: -10upx;
            /*left: 90%;*/
            right: 20upx;
            width: 0;
            height: 0;
            background: #FFFFFF;
            border-style: solid;
            border-width: 12upx;
            border-color: #FFFFFF #FFFFFF transparent transparent;
            transform: rotate(315deg);
            box-shadow: 2upx -2upx 2upx 0  #EEEEEE;
          }
        }
    }

  }
</style>
