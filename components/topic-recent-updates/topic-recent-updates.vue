<template>
  <view
    class="topic-recent-updates-wrap u-f animated fadeIn fast"

  >
    <image
      :src="item.titlepic"
      mode="widthFix"
      @tap="openDetail"
      lazy-load>

    </image>
    <view class="updates-item">
      <view class="item-title">#{{item.title}}#</view>
      <view>{{item.desc}}</view>
      <view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
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
    methods:{
      openDetail(){
        uni.navigateTo({
          url: '/pages/topic-detail/topic-detail'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .topic-recent-updates-wrap{
    padding: 20upx 0;
    border-bottom: 2upx solid #EEEEEE;
    image{
      width: 150upx;
      height: 150upx;
      border-radius:10upx;
      margin-right: 20upx;
    }
    .updates-item{
      color: #A4A4A4;
      .item-title{
        color: #333333;
        font-size: 32upx;
      }
    }
  }
</style>
