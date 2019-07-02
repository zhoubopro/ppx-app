<template>
	<view>
		<DynamicNavBar
			:tabBars="tabBars"
			:tabIndex="tabIndex"
			@bindChangeTab="changeTab">

		</DynamicNavBar>
		<view class="uni-tab-bar">
			<!-- 公共列表 -->
			<swiper
				class="swiper-box"
				:style="{height: swiperHeight+'px'}"
				:current="tabIndex"
				@change="changeTabBar"
			>
				<swiper-item v-for="(items, itemsIndex) in dynamicList" :key="itemsIndex">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(itemsIndex)">
						<template v-if="itemsIndex < 2">
							<block v-for="(item, index) in items.list" :key="index">
								<CommonList :item="item" :index="index"></CommonList>
							</block>
						</template>
						<template v-else-if="itemsIndex === 2">
							<bolck>
								<Topic />
							</bolck>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
  import DynamicNavBar from '../../components/dynamic-nav-bar/dynamic-nav-bar';
  import CommonList from '../../components/common-list/common-list';
  import Topic from '../../components/topic/topic';
	export default {
    components: {
      DynamicNavBar,
			CommonList,
      Topic
    },
		data() {
			return {
        tabIndex: 2,
        swiperHeight: 0,
        tabBars:[
          {name:"附近", id:"fujin"},
          {name:"关注", id:"guanzhu"},
          {name:"话题",id:"topic"}
        ],
        dynamicList: [
          {
            list: [
              {
                avatar: '/static/demo/userpic/12.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                city: '北京 海淀',
                mediaUrl: '/static/demo/datapic/11.jpg',
								sex: 0,
								age: 27,
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/12.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                city: '北京 海淀',
                mediaUrl: '/static/demo/datapic/11.jpg',
                sex: 0,
                age: 27,
                remarkNum: 1232,
                shareNum: 10,
              },
              {
                avatar: '/static/demo/userpic/12.jpg',
                nickname: 'hello情歌',
                isFollow: false,
                words: '为什么阿斯顿发送到发大撒发阿三撒地方阿斯顿发顺丰的',
                mediaType: 'img',
                city: '北京 海淀',
                mediaUrl: '/static/demo/datapic/11.jpg',
                sex: 0,
                age: 27,
                remarkNum: 1232,
                shareNum: 10,
              },
            ],
          },
					{
            list: [
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
              {
                avatar: '/static/demo/userpic/11.jpg',
                nickname: 'nick name',
                isFollow: true,
                words: 'words',
                mediaType: 'share',
                city: '北京 朝阳',
                mediaUrl: '/static/demo/datapic/10.jpg',
                sex: 1,
                age: 18,
                longTime: '2:39',
                playNum: 20,
                remarkNum: 2,
                shareNum: 10,
              }
            ]
					},
          {
            list: []
          }
        ],
			}
		},
		methods: {
      changeTab(index){
				this.tabIndex = index;
      },
      changeTabBar(e) {
        this.tabIndex = e.detail.current;
      },
      // 加载更多
      loadMore(index) {

      },
    },
    onLoad() {
      // 获取容器高度， 设置列表告诉
      uni.getSystemInfo({
        success: res => {
          this.swiperHeight = res.windowHeight - uni.upx2px(100);
        }
      });
    },
	}
</script>

<style>

</style>
