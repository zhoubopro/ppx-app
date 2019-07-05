<template>
  <view class="user-update-password-wrap">
    <input type="text" v-if="hasPassword" v-model="oldPassword"
           class="uni-input common-input"
           placeholder="输入旧密码"
           password
    />

    <input type="text" v-model="newPassword"
           class="uni-input common-input"
           placeholder="输入新密码"
           password
    />

    <input type="text" v-model="renewPassword"
           class="uni-input common-input"
           placeholder="输入确认密码"
           password
    />

    <button class="user-btn"
            :loading="loading" :class="{'user-btn-disable':disabled}"
            type="primary" @click="submit" :disabled="disabled">完成
    </button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        hasPassword: false,
        oldPassword: "",
        newPassword: "",
        renewPassword: "",
        disabled: true,
        loading: false
      }
    },
    onLoad(e) {
      // this.hasPassword = !!(e.password && e.password !== "false");
      this.hasPassword = true;
    },
    watch: {
      oldPassword(val) {
        this.change();
      },
      newPassword(val) {
        this.change();
      },
      renewPassword(val) {
        this.change();
      }
    },
    methods: {
      // 监听输入框
      change() {
        if (this.newPassword && this.renewPassword) {
          this.disabled = false;
        }
        else if (this.hasPassword && !this.oldPassword) {
          this.disabled = true;
        }
        else {
          this.disabled = true;
        }
      },
      // 提交
      async submit() {
        this.loading = true; this.disabled = true;
        let isValid = [
          {value: this.oldPassword, label: '旧密码不能为空！', type: 'input'},
          {value: this.newPassword, label: '新密码不能为空！', type: 'input'},
          {value: this.renewPassword, label: '确认密码不能为空！', type: 'input'},
          {value: [this.renewPassword, this.newPassword], label: '确认密码和新密码不一致！', type: 'password'},
        ];
        let checkValid = this.$common.isValid(isValid);
        if(checkValid === false) {
            this.loading = false;
            this.disabled = true;
          return
        }

        setTimeout(()=> {
          this.loading = false;
          this.disabled = false;
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="less">
  .user-update-password-wrap {
    padding: 0 20upx;
  }
</style>
