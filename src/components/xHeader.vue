<template lang="html">
  <header id="header" class="mui-bar mui-bar-nav">
  		<a class="mui-btn mui-btn-link mui-btn-nav mui-pull-left logo" v-link="{ path: '/' , exact: true }"> <i class="ozFF"></i>
  		</a>
  		<h1 class="mui-title "></h1>
  		<div id="logORreg" class="mui-pull-right" v-if="!isLogin">
  			<a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right" v-link="{ path: '/login' }">&nbsp;&nbsp;登录 </a>
        <span class=" spline">|</span>
  			<a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right" v-link="{ path: '/login' }"> 免费注册 </a>
  		</div>
  		<div id="userInfo" class="mui-pull-right" v-else>
  		   <div id="eay" style="display: none;">
  			可用余额 <br><span id="userBalance"></span>
  			</div>
  			<div id="logout"><a class="mui-btn mui-btn-link mui-btn-nav mui-pull-right" v-link="{ path: '/' }">安全退出</a></div>
  		</div>
  	</header>
</template>

<script>
export default {
  data: function () {
    return {
      isLogin:false
    }
  },
  computed: {},
  ready: function () {
    this.validLogin();
  },
  attached: function () {},
  methods: {
    validLogin:function () {
      this.$http.get('http://finhds.qiantwo.com/userbalance').then((response) => {
          this.isLogin = response.json().result;
      }, (response) => {
            console.log(response)
      });
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
