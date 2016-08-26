<template lang="html">
  <nav class="mui-bar mui-bar-tab" id="navb">
		<a class="mui-tab-item" v-link="{ path: '/home' ,exact: true }" id="goHome">
			<i class="mui-icon ozFF sp28" style="font-weight:700"></i><span class="mui-tab-label">首页</span>
		</a>
    <a class="mui-tab-item" v-link="{ path: '/list',exact: true}" id="goList">
      <span class="ozFF mui-icon sp38"></span>
      <span class="mui-tab-label">我要投资</span>
		</a>
    <a class="mui-tab-item" v-link="{ path: '/about' , exact: true }" id="goMe" data-popover="">
			<span class="ozFF mui-icon sp30"> </span> <span class="mui-tab-label">我的钱途</span>
		</a>
	</nav>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
