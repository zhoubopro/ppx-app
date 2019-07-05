<template>
  <view class="search-wrap">
    <template v-if="searchList.length>0">
      <view v-for="(item, index) in searchList" :key="index">
        <IndexList :item="item"></IndexList>
      </view>
      <pullUpLoad :loadText="loadText"></pullUpLoad>
    </template>
    <template v-else-if="isSearch && searchList.length<1">
      <no-thing></no-thing>
    </template>
  </view>
</template>

<script>
  import IndexList from '../../components/index-list/index-list';
  import pullUpLoad from '../../components/pull-up-load/pull-up-load';
  import noThing from '../../components/no-thing/no-thing';

  export default {
    components:{
      IndexList,
      pullUpLoad,
      noThing
    },
    data() {
      return {
        searchText: '',
        searchList:[],
        loadText: '上拉加载更多',
        isSearch: false,
      }
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
      e.text ?
        this.getSearchData() :
        this.$common.showTipsModel('搜索不能为空!');
    },
    // 监听页面触底事件
    onReachBottom() {
      this.loadMore();
    },
    methods: {
      getSearchData(){
        setTimeout(()=> {
          let arr = [
            {
              "userId": 12,
              "avatar": "http://img3.duitang.com/uploads/item/201605/07/20160507191419_J2m8R.thumb.700_0.jpeg",
              "nickname": "测试1",
              "isFollow": false,
              "id": 1,
              "words": "最前线 | 微信调整公众号分成比例，收入不设上限留住好内容",
              "type": "img",
              "mediaUrl": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/4.jpg",
              "video": false,
              "city": "广东深圳",
              "share": false,
              "goodOrBad": {
                "index": 0,
                "good": 2,
                "bad": 0
              },
              "remarkNum": 34,
              "shareNum": 0
            },
            {
              "userId": 7,
              "avatar": "http://pic136.nipic.com/file/20170725/10673188_152559977000_2.jpg",
              "nickname": "zcmcss",
              "isFollow": false,
              "id": 2,
              "words": "最前线 | 微信调整公众号分成比例，收入不设上限留住好内容",
              "type": "img",
              "mediaUrl": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/4.jpg",
              "video": false,
              "city": "广东佛山",
              "share": false,
              "goodOrBad": {
                "index": 0,
                "good": 0,
                "bad": 1
              },
              "remarkNum": 2,
              "shareNum": 0
            }
          ]
          // this.searchList = this.searchList.concat(arr);
          this.loadText="上拉加载更多";
          this.isSearch = true;
        }, 1500);
      },
      // 上拉加载
      loadMore(){
        if(this.loadText!="上拉加载更多"){ return; }
        // 修改状态
        this.loadText="加载中...";
        this.getSearchData();
      },
    }
  }
</script>

<style scoped lang="less">
.search-wrap{

}
</style>
