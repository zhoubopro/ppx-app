<template>
  <view class="home-wrap">
    <!-- 未登录 -->
    <template v-if="!loginStatus">
      <view class="u-f-ajc no-login-title">🐣 登陆仿糗百，体验更多功能</view>
      <!-- 第三方登陆 -->
      <otherLogin :noback="true"></otherLogin>
      <!-- 账号密码登陆 -->
      <view class="login-password u-f-ajc" @tap="openLogin">
        🐥 使用账号密码登陆
        <view class="icon iconfont icon-jinru"></view>
      </view>
    </template>

    <!--登陆-->
    <template v-else>
      <homeInfo :homeInfo="homeInfo"></homeInfo>
    </template>
     <!-- 数据 -->
    <homeData :homeData="homeData"></homeData>
    <!-- 广告位 -->
    <view class="home-adv u-f-ajc animated fadeIn fast" >
      <image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
    </view>
    <!-- 功能列表 -->
    <view class="home-list">
      <view v-for="(item, index) in list" :key="index">
        <homeListItem :item="item"></homeListItem>
      </view>
    </view>
  </view>
</template>

<script>
  import homeListItem from "../../components/home-list-item/home-list-item.vue";
  import homeInfo from "../../components/home-info/home-info.vue";
  import otherLogin from "../../components/other-login/other-login.vue";
  import homeData from "../../components/home-data/home-data.vue";
  export default {
    components:{
      homeListItem,
      homeInfo,
      otherLogin,
      homeData
    },
    data() {
      return {
        loginStatus: false,
        homeInfo:{
          avatar:"../../static/demo/userpic/11.jpg",
          username:"昵称",
          totalnum:0,
          todaynum:0,
        },
        homeData:[
          { name:"糗事", num: 0 },
          { name:"动态", num: 0 },
          { name:"评论", num: 0 },
          { name:"粉丝", num: 0 },
        ],
        list:[
          { icon:"liulan",name:"浏览历史",type:"navigateTo",url:"/pages/user-history/user-history"},
          { icon:"huiyuanvip",name:"糗百认证",type:"nothing",url:"" },
          { icon:"keyboard",name:"审核糗事",type:"nothing",url:"" },
        ]
      };
    },
    onNavigationBarButtonTap(e) {
      e.index === 0 ? uni.navigateTo({
        url: '../user-set/user-set'
      }) : '';
      // this.User.navigate({
      //   url: '../user-set/user-set',
      // });
    },
    onShow() {
    },
    methods:{
      // 判断用户是否登录
      openLogin(){
        uni.navigateTo({
          url: '../login/login'
        });
      }
    }
  }
</script>

<style scoped lang="less">
.home-wrap{
  .no-login-title{
    padding-top: 60upx;
    font-size: 32upx;
    font-weight: bold;
  }
  .login-password{
    padding: 60upx 0 10upx 0;
  }
  .home-list{
    padding: 20upx;
  }
  .home-adv{
    padding: 20upx;
  }
  .home-adv>image{
    border-radius: 10upx;
    height: auto;
    width: 100%;
  }
}
</style>

