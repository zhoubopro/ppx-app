<template>
  <view class="topic-wrap">
    <!-- 搜索框 -->
    <view class="search-input">
      <input
        class="uni-input"
        placeholder-class="icon iconfont icon-sousuo topic-search"
        placeholder="搜索话题" />
    </view>
    <!-- 轮播图 -->
    <swiper
      class="topic-swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-if="topicList.swiper.length > 0" v-for="(item, index) in topicList.swiper" :key="index">
        <swiper-item>
          <image
            :src="item.src"
            mode="widthFix"
            lazy-load
          >
          </image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 热门分类 -->
    <TopicClassify :classifyList="classifyList"></TopicClassify>
    <!-- 最近更新  -->
    <view class="topic-recent-updates">
      <view class="recent-updates-title">最近更新</view>
      <block v-for="(updatesItem, updatesIndex) in recentUpdatesList" :key="updatesIndex">
        <TopicRecentUpdates :item="updatesItem"></TopicRecentUpdates>
      </block>
    </view>
  </view>
</template>
<script>
  import TopicClassify from '../../components/topic-classify/topic-classify';
  import TopicRecentUpdates from '../../components/topic-recent-updates/topic-recent-updates';
  export default {
    components:{
      TopicClassify,
      TopicRecentUpdates
    },
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        topicList: {
          swiper: [
            {src:'../../static/demo/banner1.jpg'},
            {src:'../../static/demo/banner2.jpg'},
            {src:'../../static/demo/banner3.jpg'},
            {src:'../../static/demo/banner2.jpg'}
          ]
        },
        classifyList: [
          {name: '最新'},
          {name: '游戏'},
          {name: '情歌'},
          {name: '打卡'},
          {name: '故事'},
          {name: '喜爱'},
        ],
        recentUpdatesList: [
          {
            titlepic: '../../static/demo/topicpic/13.jpeg',
            title: 'HELLO',
            desc: 'one world one dream',
            totalnum: 20,
            todaynum: 2,
          },
          {
            titlepic: '../../static/demo/topicpic/12.jpeg',
            title: '你好',
            desc: 'one world one dream',
            totalnum: 10,
            todaynum: 3,
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .topic-wrap {
    .search-input{
      padding: 0 20upx;
      margin-bottom: 20upx;
      input{
        background: #F4F4F4;
        border-radius: 10upx;
        &.topic-search{
          display: flex;
          justify-content: center;
          font-size: 24upx;
        }
      }
    }
    .topic-swiper{
      padding: 0 20upx 20upx 20upx;
      image{
        width: 100%;
        border-radius: 10upx;
      }
    }
    .topic-recent-updates{
      padding: 20upx;
      .recent-updates-title{
        color: #333333;
        font-size: 32upx;
      }
    }
  }
</style>
