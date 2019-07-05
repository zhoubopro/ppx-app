<template>
  <view class="user-set-wrap">
    <view v-for="(item, index) in list" :key="index">
      <homeListItem :item="item"></homeListItem>
    </view>

    <button class="user-btn" type="primary" @tap="User.logout()">退出登陆</button>
  </view>
</template>

<script>
  import homeListItem from "../../components/home-list-item/home-list-item.vue";

  export default {
    components: {
      homeListItem,
    },
    data() {
      return {
        list: [
          { icon: "", name: "账号与安全", type: "navigateTo", url: "../../pages/user-update-password/user-update-password" },
          { icon: "", name: "邮箱绑定", type: "navigateTo", url: "../../pages/user-update-email/user-update-email" },
          { icon: "", name: "个人资料", type: "navigateTo", url: "../../pages/user-update-info/user-update-info" },
          { icon: "", name: "小纸条", type: "", url: "" },
          { icon: "", name: "清除缓存", type: "clear", url: "" },
          { icon: "", name: "意见反馈", type: "navigateTo", url: "../../pages/user-help/user-help" },
          { icon: "", name: "关于糗百", type: "navigateTo", url: "../../pages/user-about/user-about" },
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .user-set-wrap {
    padding: 0 20upx;
  }
</style>
