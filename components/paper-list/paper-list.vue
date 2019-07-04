<template>
	<view
		class="paper-list-wrap u-f-ac animated fadeIn fast"
		:class="{'border-top': index === 0}"
		@tap="openChat">
		<image :src="item.avatar" mode="widthFix" lazy-load></image>
		<view class="paper-list-item">
			<view class="u-f-ac u-f-jsb item-one">
				{{item.username}}
				<view>{{item.time}}</view>
			</view>
			<view class="u-f-ac u-f-jsb item-two">
				{{item.msg}}
				<template v-if="getMsgNum > 0">
					<uni-badge :text="getMsgNum" type="error"></uni-badge>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../components/uni-badge/uni-badge.vue";

	export default {
		components:{
			uniBadge
		},
		props:{
			item: {
			  type: Object,
				default: {}
      },
			index: {
			  type: Number,
				default: 0
      }
		},
		computed: {
			getMsgNum() {
				return this.item.msgNum;
			}
		},
		methods:{
      openChat(){
			  uni.navigateTo({
					url: '../../pages/chat/chat'
				})
				// let obj = {
				// 	userid:this.item.userid,
				// 	username:this.item.username,
				// 	userpic:this.item.userpic
				// };
				// this.User.navigate({
				// 	url: '../../pages/user-chat/user-chat?userinfo='+JSON.stringify(obj),
				// });
				// // 更新未读数的状态
				// this.$chat.Read(this.item)
			}
		}
	}
</script>

<style scoped lang="less">
.paper-list-wrap{
	border-bottom: 2upx solid #EEEEEE;
	padding: 20upx;
	&.border-top{
		border-top: 2upx solid #EEEEEE;
	}
	image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.paper-list-item{
		flex: 1;
		.item-one{
			font-size: 35upx;
			view{
				color: #CBCBCB;
			}
		}
		.item-two{
			color: #999999;
		}
	}
}
</style>
