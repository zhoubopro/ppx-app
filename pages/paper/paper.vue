<template>
  <view class="paper-wrap">

    <paperMenu
      :show="show"
      @hide="hidepopup"
      @addfriend="addfriend"
      @clear="clear">
    </paperMenu>

    <!-- 小纸条列表 -->
    <block v-for="(item, index) in paperList.list" :key="index">
      <PaperList :index="index" :item="item"></PaperList>
    </block>

    <PullUpLoad :contentText="paperList.loadText"></PullUpLoad>
  </view>
</template>

<script>
  import PaperList from '../../components/paper-list/paper-list';
  import PullUpLoad from '../../components/pull-up-load/pull-up-load';
  import paperMenu from '../../components/paper-menu/paper-menu';

  export default {
    components: {
      PaperList,
      PullUpLoad,
      paperMenu
    },
    data() {
      return {
        show: false,
        paperList: {
          loadText: '上拉加载更多',
          list: [
          {
            avatar: '../../static/demo/userpic/12.jpg',
            username: '神UP集合',
            time: '星期六',
            msg: '广场舞大妈带出来带狗子们',
            msgNum: 10
          },
          {
            avatar: '../../static/demo/userpic/3.jpg',
            username: '神原创合集',
            time: '星期🈚️',
            msg: '能不能想我一样稳重点',
            msgNum: 3
          },
          {
            avatar: '../../static/demo/userpic/6.jpg',
            username: '坨坨',
            time: '19-07-01',
            msg: '来一起',
          },{
              avatar: '../../static/demo/userpic/12.jpg',
              username: '神UP集合',
              time: '星期六',
              msg: '广场舞大妈带出来带狗子们',
              msgNum: 10
            },
            {
              avatar: '../../static/demo/userpic/3.jpg',
              username: '神原创合集',
              time: '星期🈚️',
              msg: '能不能想我一样稳重点',
              msgNum: 3
            },
            {
              avatar: '../../static/demo/userpic/6.jpg',
              username: '坨坨',
              time: '19-07-01',
              msg: '来一起',
            },{
              avatar: '../../static/demo/userpic/12.jpg',
              username: '神UP集合',
              time: '星期六',
              msg: '广场舞大妈带出来带狗子们',
              msgNum: 10
            },
            {
              avatar: '../../static/demo/userpic/3.jpg',
              username: '神原创合集',
              time: '星期🈚️',
              msg: '能不能想我一样稳重点',
              msgNum: 3
            },
            {
              avatar: '../../static/demo/userpic/6.jpg',
              username: '坨坨',
              time: '19-07-01',
              msg: '来一起',
            },{
              avatar: '../../static/demo/userpic/12.jpg',
              username: '神UP集合',
              time: '星期六',
              msg: '广场舞大妈带出来带狗子们',
              msgNum: 10
            },
            {
              avatar: '../../static/demo/userpic/3.jpg',
              username: '神原创合集',
              time: '星期🈚️',
              msg: '能不能想我一样稳重点',
              msgNum: 3
            },
            {
              avatar: '../../static/demo/userpic/6.jpg',
              username: '坨坨',
              time: '19-07-01',
              msg: '来一起',
            }
          ]
        }
      }
    },
    onReachBottom(){
      // 上拉加载
      this.loadMore()
    },
    // 监听下拉刷新
    onPullDownRefresh(){
      this.getPaperData();
    },
    // 监听导航按钮点击事件
    onNavigationBarButtonTap(e) {
      if (e.index  === 0 ){
          // this.User.navigate({
          uni.navigateTo({
            url: '../friends/friends',
          })
          this.hidepopup();
      }
      else {
        this.showpopup();
      }
    },
    onLoad(){
      console.log('xiaozhitiao')
    },
    methods: {
      getPaperData(){
        setTimeout(()=>{
          let arr = [
            {
              avatar: '../../static/demo/userpic/6.jpg',
              username: '坨坨123',
              time: new Date(new Date().getTime()),
              msg: '来一起',
            }
          ]
          this.paperList.list = this.paperList.list.concat(arr);
          uni.stopPullDownRefresh();
        }, 1000)
      },
      loadMore(){
        if(this.paperList.loadText !== "上拉加载更多") {
          return false;
        }
        // 修改状态
        this.paperList.loadText = "加载中...";
        this.paperList.list.push({
          avatar: '../../static/demo/userpic/7.jpg',
          username: '哈哈哈哈哈哈',
          time: new Date(new Date().getTime()),
          msg: '哈哈哈哈哈哈',
        })
        this.paperList.loadText="上拉加载更多";
      },
      hidepopup(){
        this.show=false;
      },
      showpopup(){
        this.show=true;
      },
      // 操作菜单
      addfriend(){
        // this.User.navigate({
        //   url: '../search/search?searchType=user',
        // })
        this.hidepopup();
      },
      clear(){
        // if (this.User.userinfo.id) {
        //   uni.removeStorageSync('noreadnum'+this.User.userinfo.id)
        //   uni.removeStorageSync('chatlist'+this.User.userinfo.id)
        //   this.$chat.initTabbarBadge();
        //   this.getdata();
        //   uni.showToast({
        //     title: '清除成功'
        //   });
        // }
        this.hidepopup();
      },
    }
  }
</script>

<style scoped lang="less">
.paper-wrap{

}
</style>
