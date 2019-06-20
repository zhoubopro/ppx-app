<template>
	<view>
		<view class="box">
			<h1>hover-class & animated</h1>
			<view
				class="view-box animated"
				hover-class="view-box-hover rubberBand"
				hover-stay-time="1000"
			>
				view bounceIn
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.box{
		margin: 50upx;
		.view-box{
			width: 200upx;
			height: 200upx;
			background: red;
			&.view-box-hover{
				background: palegreen;
			}
		}
	}
</style>
