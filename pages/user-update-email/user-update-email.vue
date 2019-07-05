<template>
	<view class="user-update-email-wrap">
		<input type="text" v-if="hasPassword" v-model="email"
					 class="uni-input common-input"
					 placeholder="输入你的新📮地址"
		/>

		<input type="text" v-model="password"
					 class="uni-input common-input"
					 placeholder="你当前登陆的糗事百科密码"
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
        email: "",
        password: "",
        disabled: true,
        loading: false
      }
    },
    onLoad(e) {
      // this.hasPassword = !!(e.password && e.password !== "false");
      this.hasPassword = true;
    },
    watch: {
      email(val) {
        this.change();
      },
      password(val) {
        this.change();
      }
    },
    methods: {
      // 监听输入框
      change() {
        if (this.email && this.password) {
          this.disabled = false;
        }
        else {
          this.disabled = true;
        }
      },
      // 提交
      async submit() {
        this.loading = true; this.disabled = true;
        let isValid = [
          {value: this.email, label: '邮箱不能为空！', type: 'input', reg: this.$regular.email, regLabel: '邮箱格式不正确' },
          {value: this.password, label: '密码不能为空！', type: 'input'},
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
	.user-update-email-wrap {
		padding: 0 20upx;
	}
</style>
