<template>
  <view class="friends-wrap animated fadeIn fast">
    <!--tarbar切换-->
    <SwiperTab
      :tabBarIndex="tabBarIndex"
      :tabBars="tabBars"
      scrollItemStyle="width: 25%;font-weight: 300;font-size:14px"
      :line="false"
      @tabTapCallback="bindTabTap">

    </SwiperTab>

    <!-- 好友列表 -->
    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{height: swiperHeight+'px'}"
        :current="tabBarIndex"
        @change="changeTabBar"
      >
        <swiper-item v-for="(items, itemsIndex) in friendsList" :key="itemsIndex">
          <scroll-view scroll-y class="list" @scrolltolower="loadMore(itemsIndex)">
            <template v-if="items.list.length > 0">
              <!-- 好友列表 -->
              <block v-for="(item, index) in items.list" :key="index">
                <FriendsList :item="item"></FriendsList>
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
  import FriendsList from '../../components/friends-list/friends-list';
  import pullUpLoad from '../../components/pull-up-load/pull-up-load';
  import noThing from '../../components/no-thing/no-thing';
  export default {
    components: {
      SwiperTab,
      FriendsList,
      pullUpLoad,
      noThing
    },
    data() {
      return {
        swiperHeight: 0,
        searchText: '',
        tabBarIndex: 0,
        tabBars: [
          { name: '互关', id: 'huguan', number: 0 },
          { name: '关注', id: 'guanzhu', number: 0 },
          { name: '粉丝', id: 'fensi', number: 0 },
          { name: '群', id: 'qun', number: 1 },
        ],
        friendsList: [
          {
            loadText: '上拉加载更多',
            list: [
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第一页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第一页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },{
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第一页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },{
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第一页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },{
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第一页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },
            ]
          },
          {
            loadText: '上拉加载更多',
            list: [
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第2页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },
            ]
          },
          {
            loadText: '上拉加载更多',
            list: [
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickName: '第3页',
                sex: 0,
                age: 21,
                desc: '我们是好友吗',
                isFollow: 0
              },
              {
                avatar: '/static/demo/userpic/9.jpg',
                nickName: '我们是123好朋友',
                sex: 1,
                age: 22,
                desc: '1234sahngqianlk',
                isFollow: 1
              },
            ]
          },
          {
            loadText: '上拉加载更多',
            list: [],
            firstLoad: true
          },
        ]
      }
    },
    onLoad() {
      // 获取容器高度， 设置列表告诉
      uni.getSystemInfo({
        success: res => {
          this.swiperHeight = res.windowHeight - uni.upx2px(100);
        }
      });
    },
    // 监听原生标题导航按钮点击事件(取消按钮)
    onNavigationBarButtonTap(e) {
      e.index === 0 && uni.navigateBack({ delta: 1 });
    },
    // 监听搜索框文本变化
    onNavigationBarSearchInputChanged(e) {
      this.searchText = e.text;
    },
    // 监听点击搜索按钮事件
    onNavigationBarSearchInputConfirmed(e) {
      e.text
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
      // 加载更多
      loadMore(index) {
        if(this.friendsList[index].loadText !== "上拉加载更多") {
          return false;
        }
        console.log(this.friendsList[index].list.length)
        // 修改状态
        this.friendsList[index].loadText = "加载中...";
        this.friendsList[index].list.push({
            avatar: '/static/demo/userpic/'+this.friendsList[index].list.length +'.jpg',
            nickName: '我是新添加的' + this.friendsList[index].list.length ,
            sex: this.friendsList[index].list.length % 2 ? 1 : 0,
            age: this.friendsList[index].list.length ,
            desc: '我们是好友吗',
            isFollow: this.friendsList[index].list.length % 5 ? 0 : 1
          })
        this.friendsList[index].loadText="上拉加载更多";
      },
    }
  }
</script>

<style scoped lang="less">
  .friends-wrap {

  }
</style>
