<template>
  <view class="pull-up-load-wrap">
    <view class="load-more">{{contentText}}</view>
  </view>
</template>

<script>
  export default {
    props: {
      contentText: {
        type: String,
        default: '上拉加载更多...'
      }
    }
  }
</script>

<style lang="less" scoped>
.pull-up-load-wrap{
  .load-more{
    width: 100%;
    padding: 15upx 0;
    color: #AAAAAA;
    text-align: center;
  }
}
</style>
