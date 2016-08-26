<template>
  <div class="mui-content">
	<div class="mui-content-padded">
		<form class="mui-input-group2" autocomplete="off" id="lForm">
			<input id="x" name="x" type="hidden" value="">
			<input id="y" name="y" type="hidden" value="">
			<div class="mui-input-row">
				<label class="ozFF"></label> <input type="text" id="username" name="username" placeholder="用户名" autocomplete="off">
			</div>
			<div class="mui-input-row">
				<label class="ozFF"></label> <input type="password" id="password" name="password" placeholder="密码" autocomplete="off">
			</div>

			<div class="flexWp">
				<div class=" flex7">
				<div class="mui-input-row">
				<label class="ozFF"></label>
					<input type="text" id="code" name="code" placeholder="验证码" autocomplete="off" maxlength="4">
				</div>
				</div>
				<div class="flex3 mui-text-left">
					<img src="http://apps.qiantwo.com:80/verifyCode" id="vcordL" class="vimg">
				</div>
			</div>
			<button type="button" class="mui-btn-block mui-btn-warning" id="lBtn" @click="showToast" >登录</button>
			<div class="mui-clearfix">
				<span class="mui-pull-left"><a href="http://apps.qiantwo.com:80/forgetPassword">忘记密码</a></span>
				<span class="mui-pull-right">还没有账户？<a href="http://apps.qiantwo.com:80/toRegister">立即注册</a></span>
			</div>
		</form>
	 </div>
   <!-- <toast v-ref:toast :toast.sync="toast">
      <div slot = "content" >{{toast.content}}</div>
   </toast> -->
	</div>

</template>

<script>
import Toast from 'vue-toast-mobile'
require('vue-toast-mobile/lib/index.css')
export default {
  data: function () {
    return {
      //toast: {content:'正在加载。。。'}
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    showToast:function(){
      console.log('showToast',this)
      Toast('Upload Completed');
      //this.toast.content = 'toast  2.5s...';
    }
  },
  components: {
    //toast:require('./toast.vue')
  }
}
</script>

<style lang="css">
</style>
