<template>
  <view class="release-wrap">
    <UniNavBar
      :statusBar="true"
      rightText="发布"
      left-icon="back"
      @click-left="back"
      @click-right="submit"
    >
      <view class="u-f-ajc" @tap="changeLook">
        {{lookType[lookTypeIndex]}}
        <view class="icon iconfont icon-xialazhankai"></view>
      </view>
    </UniNavBar>
    <!-- 多行输入框 -->
    <view class="uni-textarea">
      <textarea v-model="text" placeholder="说一句话吧～"/>
    </view>
    <!-- 上传多图 -->
    <UploadImages />
    <!-- 弹出公告 -->
    <UniPopup :show="showPopup" mode="fixed">
      <view class="gonggao">
        <view class="u-f-ajc">
          <image src="../../static/common/addinput.png" mode="widthFix"></image>
        </view>
        <view>1.涉及黄色，政治，广告及骚扰信息</view>
        <view>2.涉及黄色，政治，广告及骚扰信息</view>
        <view>3.涉及黄色，政治，广告及骚扰信息</view>
        <view>4.涉及黄色，政治，广告及骚扰信息</view>
        <button type="default" @tap="hidePopup">朕知道了</button>
      </view>
    </UniPopup>
  </view>
</template>

<script>
  import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar';
  import UploadImages from '../../components/upload-images/upload-images';
  import UniPopup from '../../components/uni-popup/uni-popup';
  export default {
    components: {
      UniNavBar,
      UploadImages,
      UniPopup
    },
    data() {
      return {
        lookType: ['仅自己可见', '所有人可见'],
        lookTypeIndex: 0,
        text: '',
        imageList: [],
        showPopup: true,
        isDraft: false
      }
    },
    onBackPress() {
      // 如果有值
      if(!this.text && this.imglist.length<1) return;
      if(!this.isDraft){
        this.saveDraft();
        return true;
      }
    },
    methods: {
      // 返回
      back() {
        uni.navigateBack({ delta: 1 });
      },
      // 发布
      submit() {

      },
      // 隐私
      changeLook() {
        uni.showActionSheet({
          itemList: this.lookType,
          success: res => {
            this.lookTypeIndex = res.tapIndex
          }
        });
      },
      // 关闭弹出框
      hidePopup(){
        this.showPopup = false;
      },
      // 保存草稿
      saveDraft(){
        uni.showModal({
          content: '是否要保存为草稿？',
          cancelText: '不保存',
          confirmText: '保存',
          success: res => {
            if(res.confirm){
              // 本地存储
              let obj = {
                yinsi:this.yinsi,
                text:this.text,
                imglist:this.imglist,
                imglistIds:this.imglistIds,
                postclass:this.postclass,
                topic:this.topic
              };
              uni.setStorageSync('releaseDraft',JSON.stringify(obj))
            }else{
              uni.removeStorage({ key:"releaseDraft" }) // 清除缓存
            }
            this.isDraft=true;
            uni.navigateBack({
              delta: 1
            });
          },
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .release-wrap{
    .uni-textarea {
      border: 2upx solid #eeeeee;
    }
    .gonggao{
      width: 500upx;
      padding: 20upx;
      image{
        width: 75%;
        margin-bottom: 20upx;
      }
      button{
        margin-top: 20upx;
        background: #FFE934;
        padding: 20upx;
        color: #171606;
      }
    }
  }
</style>
