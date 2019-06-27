<template>
  <view>
    search
  </view>
</template>

<script>
  export default {
    data() {
      return {
        searchText: '',
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
      e.text
    },
    methods: {}
  }
</script>

<style scoped lang="less">

</style>
