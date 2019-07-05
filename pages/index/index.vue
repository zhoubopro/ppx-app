<template>
  <view class="index-wrap">
    <!-- 头部标签列表 -->
    <SwiperTab :tabBarIndex="tabBarIndex" :tabBars="tabBars" @tabTapCallback="bindTabTap"/>

    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{height: swiperHeight+'px'}"
        :current="tabBarIndex"
        @change="changeTabBar"
      >
        <swiper-item v-for="(items, itemsIndex) in newsList" :key="itemsIndex">
          <scroll-view scroll-y class="list" @scrolltolower="loadMore(itemsIndex)">
            <template v-if="items.list.length > 0">
              <!-- 图文列表 -->
              <block v-for="(item, index) in items.list" :key="index">
                <IndexList :item="item"/>
              </block>
              <!-- 上拉加载 -->
              <pullUpLoad :contentText="items.loadText"></pullUpLoad>
            </template>
            <template v-else-if="!items.firstLoad">
              <view class="loading u-f-ajc">Loading ...</view>
            </template>
            <template v-else>
              <!-- 无内容默认 -->
              <noThing/>
            </template>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  import SwiperTab from '../../components/swiper-tab/swiper-tab';
  import IndexList from '../../components/index-list/index-list';
  import pullUpLoad from '../../components/pull-up-load/pull-up-load';
  import noThing from '../../components/no-thing/no-thing';

  export default {
    components: {
      SwiperTab,
      IndexList,
      pullUpLoad,
      noThing
    },
    data() {
      return {
        swiperHeight: 0,
        newsList: [],
        tabBarIndex: 0,
        tabBars:[]
      }
    },
    // 监听搜索框点击事件
    onNavigationBarSearchInputClicked() {
      uni.navigateTo({
        url: '../search/search',
      });
    },
    // 监听原生标题导航按钮点击事件
    onNavigationBarButtonTap(e) {
      e.index === 1 && uni.navigateTo({ url: '../release/release' });
    },
    onLoad() {
      // 获取容器高度， 设置列表告诉
      uni.getSystemInfo({
        success: res => {
          this.swiperHeight = res.windowHeight - uni.upx2px(100);
        }
      });
      this.getNavBar();
    },
    methods: {
      // 子组件点击事件，传递回的index
      bindTabTap(index) {
        this.tabBarIndex = index;
      },
      // 列表滑动事件
      changeTabBar(e) {
        this.tabBarIndex = e.detail.current;
        this.getList();
      },
      // 加载更多
      loadMore(index) {
        if(this.newsList[index].loadText !== "上拉加载更多") {
          return false;
        }
        // 修改状态
        this.newsList[index].loadText = "加载中...";
        this.newsList[this.tabBarIndex].page++;
        this.getList();
      },
      // 获取文章分类
      async getNavBar(){
        let [err, res] = await this.$api.get('/postclass');
        if (!this.$api.errorCheck(err,res)) return;
        let list = res.data.data.list;
        let tabBars = [], newsList = [];
        list.map(item => {
          tabBars.push({
            id:item.id,
            name:item.classname
          });
          newsList.push({
            loadText: "上拉加载更多",
            list: [],
            page: 1,
            firstLoad: false
          });
        });
        this.tabBars = tabBars;
        this.newsList = newsList;
        this.tabBars.length > 0 && this.getList();
      },
      // 获取指定列表
      async getList(){
        let currentIndex = this.tabBarIndex;
        let url = `/postclass/${this.tabBars[this.tabBarIndex].id}/post/${this.newsList[this.tabBarIndex].page}`;
        let [err,res] = await this.$api.get(url, {}, {token: true});
        let error = this.$api.errorCheck(err,res,()=>{
          this.newsList[currentIndex].loadText="上拉加载更多";
        },()=>{
          this.newsList[currentIndex].loadText="上拉加载更多";
        });
        if (!error) return;
        let arr = [];
        let list = res.data.data.list;
        for (let i = 0; i < list.length; i++) {
          arr.push(this.__format(list[i]));
        }
        this.newsList[currentIndex].list = this.newsList[currentIndex].page > 1 ? this.newsList[currentIndex].list.concat(arr) : arr;
        this.newsList[currentIndex].firstLoad = true;
        if (list.length < 10) {
          this.newsList[currentIndex].loadText="没有更多数据了";
        }else{
          this.newsList[currentIndex].loadText="上拉加载更多";
        }
        return;
      },
      // 格式转化
      __format(item){
        return {
          userId: item.user.id,
          avatar: item.user.userpic,
          nickname: item.user.username,
          isFollow: !!item.user.fens.length,
          id: item.id,
          words: item.title,
          type: "img", // img:图文,video:视频
          mediaUrl: item.titlepic,
          video: false,
          city: item.path,
          share: !!item.share,
          goodOrBad:{
            index: (item.support.length>0) ? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
            good: item.ding_count,
            bad: item.cai_count,
          },
          remarkNum: item.comment_count,
          shareNum: item.sharenum,
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .index-wrap {
    .loading{
      font-size: 50upx;
      font-weight: bold;
      color: #CCCCCC;
      padding-top: 100upx;
    }
  }
</style>
