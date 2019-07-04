<template>
  <view class="chat-list-wrap animated fadeIn fast">

    <view v-if="item.date" class="user-chat-time u-f-ajc">{{item.date}}</view>
    <view class="user-chat-list u-f" :class="{'user-chat-me':item.isme}">
      <image class="chat-avatar" v-if="!item.isme" :src="item.avatar" lazy-load></image>
      <view class="user-chat-list-body">
        <!-- 文字 -->
        <text v-if="item.type=='text'">{{item.data}}</text>
        <!-- 图片 -->
        <image v-if="item.type=='img'" :src="item.data" mode="widthFix" lazy-load></image>
      </view>
      <image class="chat-avatar" v-if="item.isme" :src="item.avatar" lazy-load></image>
    </view>

  </view>
</template>

<script>
  export default {
    props:{
      item:Object,
      index:Number
    },
    computed:{
      getDate(){
        return this.$dayJs().format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>

<style scoped lang="less">
  .chat-list-wrap{
    padding: 0 20upx;
    .user-chat-time{
      padding: 50upx 0;
      color: #a2a2a2;
      font-size: 24upx;
    }
    .user-chat-list{
      padding: 20upx 0;
      .chat-avatar{
        width: 100upx;
        height: 100upx;
        border-radius: 100%;
        flex-shrink: 0;
      }
      .user-chat-list-body{
        position: relative;
        background: #F4F4F4;
        padding: 25upx;
        margin-left: 20upx;
        border-radius: 20upx;
        margin-right: 100upx;
        &:after{
          position: absolute;
          left: -30upx;
          right: 0;
          top: 30upx;
          content: '';
          width: 0;
          height: 0;
          border: 16upx solid #F4F4F4;
          border-color: transparent #F4F4F4 transparent transparent;
        }
        image{
          max-width: 150upx;
          max-height: 200upx;
        }
      }
      &.user-chat-me{
        justify-content: flex-end;
        .user-chat-list-body{
          margin-right: 20upx;
          margin-left: 100upx;
          &:after{
            left: auto;
            right: -30upx;
            border-color: transparent transparent transparent #F4F4F4;
          }

        }
      }
    }
  }
</style>
