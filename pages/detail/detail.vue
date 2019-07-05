<template>
  <view class="detail-wrap">
    <DetailInfo :item="item"></DetailInfo>

    <view class="u-comment-title">最新评论 {{comment.count}}</view>
    <view class="uni-comment u-comment">
      <view v-for="(item,index) in comment.list" :key="index">
        <CommentList :item="item" :index="index" @reply="reply"></CommentList>
      </view>
    </view>
  </view>
</template>

<script>
  import DetailInfo from '../../components/detail-info/detail-info';

  import CommentList from '../../components/comment-list/comment-list';

  export default {
    components: {
      DetailInfo,
      CommentList
    },
    data() {
      return {
        item: {},
        comment:{
          count:0,
          list:[]
        },
      }
    },
    // 监听原生标题导航按钮点击事件(取消按钮)
    onNavigationBarButtonTap(e) {
      e.index === 0 && this.__share();
    },
    onLoad(e) {
      this.item = JSON.parse(e.detailData);
      this.__initData();
    },
    methods: {
      // 初始化数据
      __initData() {
        // 加载中
        this.$common.showLoading('Loading...', true);
        console.log(JSON.stringify(this.item));
        // this.getcomment()
        this.$common.hideLoading();
      },
      __share() {
        this.$common.showTipsModel('_share');
      },
      // 获取评论
      async getcomment(){
        let [err,res] = await this.$api.get('/post/'+this.item.id+'/comment');
        if (!this.$api.errorCheck(err,res)) return;
        let list = res.data.data.list;
        this.comment.list = this.comment.list.concat(this.__ArrSort(list));
      },
      __ArrSort(arr,id = 0){
        var temp = [],lev=0;
        var forFn = function(arr, id,lev){
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.fid==id) {
              item.lev=lev;
              temp.push({
                id:item.id,
                fid:item.fid,
                userid:item.user.id,
                userpic:item.user.userpic,
                username:item.user.username,
                time:time.gettime.gettime(item.create_time),
                data:item.data,
              });
              forFn(arr,item.id,lev+1);
            }
          }
        };
        forFn(arr, id,lev);
        return temp;
      },
    }
  }
</script>

<style scoped lang="less">
  .detail-wrap {
    .u-comment {
      padding: 0 20upx;
    }
    .u-comment-title {
      padding: 20upx;
      font-size: 30upx;
      font-weight: bold;
    }
  }
</style>
