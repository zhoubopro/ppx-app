<template>
  <view class="comment-list-wrap uni-comment-list" :class="{'u-comment-list-child':(item.fid>0)}">
    <view class="uni-comment-face">
      <image @tap.stop="openSpace" :src="item.userpic" mode="widthFix"></image>
    </view>
    <view class="uni-comment-body" @tap.stop="reply">
      <view class="uni-comment-top"><text>{{item.username}}</text>
      </view>
      <view class="uni-comment-content">{{item.data}}</view>
      <view class="uni-comment-date">
        <view>{{item.time}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      item: {
        type: Object,
        default: {}
      },
    },
    methods: {
      reply() {
        this.$emit('reply', this.item.id)
      },
      openSpace(){
        uni.navigateTo({
          url: '../../pages/user-space/user-space?userid='+this.item.userid
        });
      },
    },
  }
</script>

<style scoped lang="less">
  .comment-list-wrap{
    &.u-comment-list-child{
      padding: 20upx;
      background: #F4F4F4;
      border-bottom: 1upx solid #EEEEEE;
      box-sizing: border-box;
      margin: 0;
      margin-left: 70upx;
      width: auto;
    }
  }
</style>
