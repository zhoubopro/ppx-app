<template>
  <view class="home-list-item-wrap u-f-ac u-f-jsb animated fadeIn fast"
        hover-class="home-list-hover"
        @tap="getHomeItem">
    <view class="u-f-ac item-list-icon">
      <view v-if="item.icon"
            class="icon iconfont"
            :class="['icon-'+item.icon]"></view>
      {{item.name}}
    </view>
    <view class="item-icon-color icon iconfont" :class="{'icon-jinru':!item.data}">{{item.data || ''}}</view>
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
      getHomeItem(){
        this.item.type === 'navigateTo' && this.item.url ? uni.navigateTo({ url:this.item.url}): '';
        this.item.type === 'switchTab' && this.item.url ? uni.switchTab({ url:this.item.url}): '';
        this.item.type === 'clear' ? uni.showModal({
          title: '提示',
          content: '是否要清除缓存？',
          confirmText: '立刻清除',
          success: res => {
            if(res.confirm){
              uni.clearStorage();
              uni.showToast({ title: '清除缓存成功！'});
              this.User.logout(false)
            }
          },
        }) : '';
        // switch (this.item.clicktype){
        //   case "navigateTo":
        //     if(this.item.url){
        //       uni.navigateTo({ url:this.item.url});
        //     }
        //     break;
        //   case "switchTab":
        //     if(this.item.url){ uni.switchTab({url:this.item.url}) }
        //     break;
        //   case "clear":
        //     uni.showModal({
        //       title: '提示',
        //       content: '是否要清除缓存？',
        //       confirmText: '立刻清除',
        //       success: res => {
        //         if(res.confirm){
        //           uni.clearStorage();
        //           uni.showToast({ title: '清除缓存成功！'});
        //           this.User.logout(false)
        //         }
        //       },
        //     });
        //     break;
        //   case "bind":
        //     if (this.User.userbind[this.item.provider]) return;
        //     this.bindother();
        //     break;
        //   case "nothing":
        //     uni.showToast({ title: '更新中...', icon: 'none' });
        //     break;
        //   case "update":
        //     this.lib.Update(true);
        //     break;
        // }
      },
      // 绑定第三方登录
      bindother(){
        uni.login({
          provider: this.item.provider,
          // #ifdef MP-ALIPAY
          scopes: 'auth_user',  //支付宝小程序需设置授权类型
          // #endif
          success: (res) => {
            uni.getUserInfo({
              provider:this.item.provider,
              success: (infoRes)=> {
                let options = Object.assign(infoRes,res);
                this.bindEvent(this.User.__formatOtherLogin(this.item.provider,options));
              }
            });
          },
          fail: (err) => {
            uni.showToast({ title: '绑定失败',icon:"none" });
            console.log('login fail:', err);
          }
        });
      },
      async bindEvent(data){
        uni.showLoading({ title: '绑定中...', mask: false });
        let [err,res] = await this.$http.post("/user/bindother",data,{
          token:true,
          checkToken:true
        })
        if (!this.$http.errorCheck(err,res)) return uni.hideLoading();
        // 绑定成功
        uni.hideLoading();
        uni.showToast({ title: '绑定成功！' });
        // 修改状态，缓存
        this.User.userbind[this.item.provider] = {
          nickname:data.nickName
        }
        uni.setStorageSync("userbind", this.User.userbind);
        this.$emit('updateuserbind');
      }
    }
  }
</script>

<style scoped lang="less">
  .home-list-item-wrap{
    padding: 20upx;
    border-bottom: 2upx solid #F4F4F4;
    .item-list-icon{
      color: #333333;
      view{
        margin-right: 10upx;
      }
    }
    .item-icon-color{
      color: #CCCCCC;
    }
    .home-list-hover{
      background: #f4f4f4;
    }
  }
</style>
