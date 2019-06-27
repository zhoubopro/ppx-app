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
        <swiper-item v-for="(items, itemIndex) in newsList" :key="itemIndex">
          <scroll-view scroll-y class="list" @scrolltolower="loadMore(itemIndex)">
            <template v-if="items.list.length > 0">
              <!-- 图文列表 -->
              <block v-for="(item, index) in items.list" :key="index">
                <IndexList :items="item"/>
              </block>
              <!-- 上拉加载 -->
              <pullUpLoad :contentText="items.loadText"></pullUpLoad>
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
        newsList: [
          {
            loadText: '上拉加载更多...',
            list: [
              {
                avatar: '/static/demo/userpic/12.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                mediaUrl: '/static/demo/datapic/11.jpg',
                goodOrBad: {
                  index: 0,
                  good: 101,
                  bad: 10
                },
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/11.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'video',
                mediaUrl: '/static/demo/datapic/10.jpg',
                longTime: '2:39',
                playNum: 20,
                goodOrBad: {
                  index: 1,
                  good: 11,
                  bad: 0
                },
                remarkNum: 2,
                shareNum: 10,
              }
            ],
          },
          {
            loadText: '上拉加载更多...',
            list: [
              {
                avatar: '/static/demo/userpic/1.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                mediaUrl: '/static/demo/datapic/1.jpg',
                goodOrBad: {
                  index: 0,
                  good: 101,
                  bad: 10
                },
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/2.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'video',
                mediaUrl: '/static/demo/datapic/2.jpg',
                longTime: '2:39',
                playNum: 20,
                goodOrBad: {
                  index: 1,
                  good: 11,
                  bad: 0
                },
                remarkNum: 2,
                shareNum: 10,
              }
            ],
          },
          {
            loadText: '上拉加载更多...',
            list: [
              {
                avatar: '/static/demo/userpic/3.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                mediaUrl: '/static/demo/datapic/3.jpg',
                goodOrBad: {
                  index: 0,
                  good: 101,
                  bad: 10
                },
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/4.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'video',
                mediaUrl: '/static/demo/datapic/4.jpg',
                longTime: '2:39',
                playNum: 20,
                goodOrBad: {
                  index: 1,
                  good: 11,
                  bad: 0
                },
                remarkNum: 2,
                shareNum: 10,
              }
            ],
          },
          {
            loadText: '上拉加载更多...',
            list: [
              {
                avatar: '/static/demo/userpic/5.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                mediaUrl: '/static/demo/datapic/5.jpg',
                goodOrBad: {
                  index: 0,
                  good: 101,
                  bad: 10
                },
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'video',
                mediaUrl: '/static/demo/datapic/6.jpg',
                longTime: '2:39',
                playNum: 20,
                goodOrBad: {
                  index: 1,
                  good: 11,
                  bad: 0
                },
                remarkNum: 2,
                shareNum: 10,
              }
            ],
          },
          {
            loadText: '上拉加载更多...',
            list: []
          },
          {
            loadText: '上拉加载更多...',
            list: []
          }
        ],
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
      },
      loadMore(index) {
        if (this.newsList[index].loadText !== "上拉加载更多...") {
          return
        }
        this.newsList[index].loadText = "加载中...";
        setTimeout(() => {
          let obj = {
            avatar: '/static/demo/userpic/11.jpg',
            nickname: 'nick name',
            isFollow: true,
            words: 'words',
            mediaType: 'video',
            mediaUrl: '/static/demo/datapic/11.jpg',
            longTime: '2:39',
            playNum: 20,
            goodOrBad: {
              index: 1,
              good: 11,
              bad: 0
            },
            remarkNum: 2,
            shareNum: 10,
          };
          this.newsList[index].list.push(obj);
        }, 1000);
        if (this.newsList[index].list.length > 5) {
          this.newsList[index].loadText = "没有更多了";
        }
        else {
          this.newsList[index].loadText = "上拉加载更多...";
        }
      },
      // 获取文章分类
      async getNavBar(){
        let [err, res] =await this.$api.get('/postclass');
        if (!this.$api.errorCheck(err,res)) return;
        let list = res.data.data.list;
        let arr = [], arr2 = [];
        list.map((item, index) => {
          arr.push({
            id:item.id,
            name:item.classname
          });
          arr2.push({
            loadtext:"上拉加载更多",
            list:[],
            page:1,
            firstload:false
          });
        });
        this.tabBars = arr;
        this.newslist = arr2;
        // this.tabBars.length > 0 && this.getList();
      },
    }
  }
</script>

<style lang="less">
  .index-wrap {

  }
</style>
