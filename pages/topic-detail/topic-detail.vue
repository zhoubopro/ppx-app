<template>
	<view class="topic-detail-wrap">
		<!-- 话题介绍 -->
		<TopicInfo :topicInfo="topicInfo"></TopicInfo>

		<!--tarbar切换-->
		<SwiperTab
			:tabBarIndex="tabBarIndex"
			:tabBars="tabBars"
      scrollItemStyle="width: 50%"
      scrollStyle="border: none"
			@tabTapCallback="bindTabTap">

		</SwiperTab>

		<!-- 话题列表 -->
		<view class="topic-detail-list">
			<block v-for="(items, index) in topicInfoList" :key="index">
				<template v-if="tabBarIndex === index">
					<!-- 列表 -->
					<block v-for="(item, itemIndex) in items.list" :key="itemIndex">
						<CommonList :item="item" :index="itemIndex "></CommonList>
					</block>
					<!-- 上拉加载 -->
					<PullUpLoad :contentText="items.loadText"></PullUpLoad>
				</template>
			</block>
		</view>

	</view>
</template>

<script>
	import TopicInfo from '../../components/topic-info/topic-info';
  import SwiperTab from '../../components/swiper-tab/swiper-tab';
  import CommonList from '../../components/common-list/common-list';
  import PullUpLoad from '../../components/pull-up-load/pull-up-load';

	export default {
	  components:{
      TopicInfo,
      SwiperTab,
      CommonList,
			PullUpLoad
		},
		data() {
			return {
        tabBarIndex: 0,
        tabBars:[
          {name: '默认', id:'moren'},
          {name: '最新', id:'zuixin'},
				],
				topicInfo: {
				  avatar: '../../static/demo/topicpic/13.jpeg',
					title: '自律打卡',
					desc: '以后就健身打卡吧',
					totalNum: 40,
					todayNum: 1,
          nickName: '执手温酒 》3《'
				},
        topicInfoList:[
					{
						loadText: '上拉加载更多',
            list:[
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickname: 'woods',
                isFollow: false,
                words: '大法师',
                mediaType: 'img',
                city: '北京 海淀',
                mediaUrl: '/static/demo/datapic/11.jpg',
                sex: 0,
                age: 27,
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/3.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'img',
                city: '北京 朝阳',
                mediaUrl: '/static/demo/datapic/8.jpg',
                sex: 1,
                age: 18,
                longTime: '2:39',
                playNum: 20,
                remarkNum: 2,
                shareNum: 10,
              },
            ]
					},
					{
            loadText: '上拉加载更多',
						list:[
              {
                avatar: '/static/demo/userpic/6.jpg',
                nickname: 'woods',
                isFollow: false,
                words: 'zuixin',
                mediaType: 'img',
                city: '北京 海淀',
                mediaUrl: '/static/demo/datapic/11.jpg',
                sex: 0,
                age: 27,
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/3.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'img',
                city: '北京 朝阳',
                mediaUrl: '/static/demo/datapic/8.jpg',
                sex: 1,
                age: 18,
                longTime: '2:39',
                playNum: 20,
                remarkNum: 2,
                shareNum: 10,
              },
						]
					}
				]
			}
		},
		onReachBottom(){
			// 上拉加载
		},
		// 监听下拉刷新
		onPullDownRefresh(){
      setTimeout(()=>{
        uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
      bindTabTap(index) {
        this.tabBarIndex = index;
      },
		}
	}
</script>

<style scoped lang="less">
	.topic-detail-wrap{

	}
</style>
