<template>
  <view class="chat-button-wrap u-f-ac animated fadeInDown fast">
    <view class="icon iconfont icon-zengjia1 u-f-ajc button"></view>
    <view class="icon iconfont icon-smile u-f-ajc button"></view>
    <input class="chat-input" type="text" placeholder="文明发言" :focus="focus" @blur="blur" v-model="text"/>
    <view class="icon iconfont icon-fabu u-f-ajc button" @tap="submit"></view>
  </view>
</template>

<script>
  export default {
    props: {
      focus: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        text: ""
      }
    },
    methods: {
      submit() {
        this.$emit('submitEmit', this.text);
        this.text = "";
      },
      blur() {
        this.$emit('blur');
      }
    }
  }
</script>

<style scoped lang="less">
  .chat-button-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10upx;
    background: #FFFFFF;
    .chat-input {
      flex: 1;
      padding: 0 10upx;
      border-radius: 10upx;
      background: #F7F7F7;
      font-size: 26upx;
    }
    .button {
      width: 60upx;
      font-size: 40upx;
      &:nth-child(2){
        font-size: 45upx;
        margin-right: 10upx;
      }
    }
  }
</style>
