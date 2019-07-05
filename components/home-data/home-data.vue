<template>
  <view class="home-data-wrap u-f-ac u-f-jsa animated fadeIn fast">
    <view v-for="(item, index) in homeData" :key="index">
      <view class="u-f1 u-f-ajc u-f-column data-column">
        <view class="data-number">{{item.num}}</view>{{item.name}}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      homeData: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="less">
  .home-data-wrap{
    padding: 20upx 40upx;
    .data-column{
      color: #989898;
      .data-number{
        font-size: 32upx;
        color: #333333;
      }
    }
  }
</style>
