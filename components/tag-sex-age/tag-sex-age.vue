<template>
  <view class="tag-sex icon iconfont"
        :class="[sex===0? 'icon-nan': 'icon-nv']"
  >
    <span>{{age}}</span>
  </view>
</template>

<script>
  export default {
    props: {
      sex: {
        type: Number,
        default: 0
      },
      age: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .tag-sex {
    background: #007AFF;
    color: #FFFFFF;
    font-size: 23upx;
    padding: 5upx 10upx;
    margin-left: 10upx;
    border-radius: 20upx;
    line-height: 22upx;
    &.icon-nv {
      background: #FF698D;
    }
    span{
      display: inline-block;
      padding: 0 4upx;
    }
  }


</style>
