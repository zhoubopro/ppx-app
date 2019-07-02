<template>
  <view class="topic-classify-wrap">
    <view class="u-f-ac u-f-jsb classify-more">
      <view>热门分类</view>
      <view class="u-f-ac more-color" @tap="justMore">更多
        <view class="icon iconfont icon-jinru"></view>
      </view>
    </view>
    <view class="u-f-ac classify-card">
      <block v-for="(item, index) in classifyList" :key="index">
        <view class="u-f-ajc">{{item.name}}</view>
      </block>
    </view>
  </view>
</template>
<script>
  export default {
    props:{
      classifyList: {
        type: Array,
        default: []
      }
    },
    methods:{
      justMore(){
        uni.navigateTo({
          url: '../../pages/topic-classify/topic-classify',
        });
      }
    }
  }
</script>
<style scoped lang="less">
.topic-classify-wrap{
  border-top: 2upx solid #eeeeee;
  border-bottom : 2upx solid #eeeeee;
  padding: 20upx;
  .classify-more{
    color: #333333;
    font-size: 32upx;
    .more-color{
      color: #9E9E9E;
    }
  }
  .classify-card{
    view{
      flex: 1;
      background: #eeeeee;
      color: #9E9E9E;
      border-radius: 10upx;
      margin: 10upx 10upx 0 0;
    }
  }
}
</style>
