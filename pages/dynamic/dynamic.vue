<template>
	<view>
		<DynamicNavBar
			:tabBars="tabBars"
			:tabIndex="tabIndex"
			@bindChangeTab="changeTab">

		</DynamicNavBar>
		<!-- 公共列表 -->
		<swiper-item v-for="(items, ind) in dynamicList" :key="ind">
			<template>
				<block v-for="(item,index) in items.list" :key="index">
					<CommonList :item="item" :index="index"></CommonList>
				</block>
			</template>
		</swiper-item>
	</view>
</template>

<script>
  import DynamicNavBar from '../../components/dynamic-nav-bar/dynamic-nav-bar';
  import CommonList from '../../components/common-list/common-list';
	export default {
    components: {
      DynamicNavBar,
			CommonList
    },
		data() {
			return {
        tabIndex:0,
        tabBars:[
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
            ],
          }
        ],
			}
		},
		methods: {
      changeTab(index){
				this.tabIndex = index;
			}
    }
	}
</script>

<style>

</style>
