<template>
  <view class="friends-list-wrap u-f u-f-jsb animated fadeIn fast">
    <image :src="item.avatar" mode="widthFix" lazy-load></image>
    <view class="friends-list-content">
      <view class="u-f-ac">
        <view class="friends-list-nick">{{item.nickName}}</view>
        <tagSexAge :sex="item.sex" :age="item.age"></tagSexAge>
      </view>
      <view class="friends-list-desc">
        {{item.desc}}
      </view>
    </view>
    <view class="icon iconfont u-f-ajc caozuo"
          :class="[item.isFollow?'icon-xuanze-yixuan':'icon-zengjia1']">

    </view>
  </view>
</template>
<script>
  import tagSexAge from "../../components/tag-sex-age/tag-sex-age";
  export default {
    components:{
      tagSexAge
    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style scoped lang="less">
  .friends-list-wrap {
    padding: 20upx;
    border-bottom: 2upx solid #EEEEEE;
    image{
      width: 100upx;
      height: 100upx;
      border-radius: 100%;
      margin-right: 20upx;
      flex-shrink: 0;
    }
    .friends-list-content{
      flex: 1;
      .friends-list-nick{
        color: #333333;
        font-weight: 600;
      }
      .friends-list-desc{
        color:#CCCCCC;
        font-size: 24upx;
      }
    }
    .caozuo{
      font-size: 35upx;
      color:#CCCCCC;
      width: 60upx;
    }
    .icon-zengjia1{
      color: #F8791B;
    }
  }
</style>
