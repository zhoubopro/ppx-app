<template>
	<view class="chat-wrap">

    <scroll-view
      id="scrollview"
      scroll-y
      :scroll-top="scrollTop"
      :scroll-with-animation="true"
      :style="{height:style.contentH+'px'}"
    >
      <view  v-for="(item, index) in chatList" :key="index">
        <view class="chat-item">
          <ChatList :item="item"></ChatList>
        </view>
      </view>
    </scroll-view>

		<ChatButton @submitEmit="sendChat"></ChatButton>
	</view>
</template>

<script>
	import ChatButton from '../../components/chat-button/chat-button';
	import ChatList from '../../components/chat-list/chat-list';
	import time from '../../config/time';
	export default {
	  components:{
      ChatButton,
      ChatList
		},
		data() {
			return {
				chatList:[],
        scrollTop: 0,
        style:{
          contentH:0,
          itemH:0
        },
        loadText:"点击加载更多"
			}
		},
    onReady(){
      this.__init();
    },
		onLoad(){

		},
		methods: {
      // 初始化参数
      __init(){
        // 获取窗口信息
        try {
          const res = uni.getSystemInfoSync();
          this.style.contentH=res.windowHeight - uni.upx2px(120);
        } catch (e) { }
        // 获取聊天历史记录
        this.getChatData();
        // 至于底部
        this.pageToBottom(true);
      },
      pageToBottom(isfirst = false,isscrollToBottom = true){
        let q=uni.createSelectorQuery().in(this);
        let itemH = q.selectAll('.chat-item');
        this.$nextTick(()=>{
          itemH.fields({
            size:true
          },data => {
            if (data) {
              if (isfirst) {
                this.style.itemH = 0;
                for (let i = 0; i < data.length; i++) {
                  this.style.itemH += data[i].height;
                }
              }else{
                this.style.itemH += data.length>0 ? data[data.length-1].height : data[0].height;
              }
              if (isscrollToBottom) {
                this.scrollTop = (this.style.itemH > this.style.contentH) ? this.style.itemH : 0;
              }
            }
          }).exec();
        });

      },
	    getChatData(){
	      let arr = [
          {
            isme: false,
            avatar: '../../static/demo/userpic/1.jpg',
            type: "text",
            data: '广场舞大妈带出来带狗子们',
            time: '1559620854'
          },
          {
            isme: false,
            avatar: '../../static/demo/userpic/1.jpg',
            type: "text",
            data: '123dsfgsd',
            time: '1562212325'
          },
          {
            isme: true,
            avatar: '../../static/demo/userpic/2.jpg',
            type: "img",
            data: '../../static/demo/3.jpg',
            time: '1562212355'
          },
          {
            isme: true,
            avatar: '../../static/demo/userpic/2.jpg',
            type: "text",
            data: 'iasdklhsalkfhs',
            time: '1562222955'
          }
        ];
        this.chatList = arr.filter((item, index, self) => {
          // item.date = time.gettime.gettime(item.time);
          item.date = time.gettime.getChatTime(item.time, index > 0 ? self[index - 1].time:0);
         	return item;
				})
        this.pageToBottom();
			},
      sendChat(text){
        const now = new Date().getTime();
        let length = this.chatList.length - 1;
        let info ={
          isme: true,
					avatar: '../../static/demo/userpic/2.jpg',
          type: "text",
          data: text,
          time: now,
          date: time.gettime.getChatTime(now, this.chatList[length].time)
        };
        this.chatList.push(info);
        this.pageToBottom();
      }
		}
	}
</script>

<style scoped lang="less">
.chat-wrap{

}
</style>
