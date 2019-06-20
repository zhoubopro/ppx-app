<template>
  <view class="index-wrap">
    <IndexList/>
  </view>
</template>

<script>
  import IndexList from '../../components/index-list/index-list';
  export default {
    components:{
      IndexList
    },
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {}
  }
</script>

<style lang="less">
  .index-wrap {

  }
</style>
