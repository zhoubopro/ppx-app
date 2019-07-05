<template>
  <view class="user-about-wrap" style="padding: 20upx;">
    <view class="user-about-t u-f-ajc u-f-column animated fadeIn fast">
      <image src="../../static/common/logo.png"
             mode="widthFix" lazy-load></image>
      <view>version 1.0.0</view>
    </view>
    <view v-for="(item,index) in list" :key="index">
      <home-list-item
        :item="item"
        :index="index"
      >
      </home-list-item>
    </view>
  </view>
</template>

<script>
  import homeListItem from "../../components/home-list-item/home-list-item.vue";

  export default {
    components: {
      homeListItem
    },
    data() {
      return {
        list: [
          { icon: "", name: "新版本检测", type: "update", url: "" },
          { icon: "", name: "仿糗事百科用户协议", type: "", url: "" },
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .user-about-wrap {
    .user-about-t {
      padding: 40upx 0;
      image {
        margin-top: 50upx;
        margin-bottom: 30upx;
        width: 65%;
      }
      view {
        color: #CCCCCC;
      }
    }
  }

</style>
