<template lang="html">
  <div class="mui-content">
    <!--  <swipe class="my-swipe"  :speed="900" :auto="0" :show-indicators="false" >-->
  <swipe class="my-swipe" >
    <swipe-item class="slide1" v-for="banner in bannerList" >
      <a href="{{banner.url}}">
        <img :src="banner.gUrl" title="{{banner.title}}">
      </a>
    </swipe-item>
  </swipe>

  	<div class="mui-content-padded" id="borrow" v-cloak><div class="mui-card1" >
  <ul class="mui-table-view mui-grid-view mui-grid-9">
  					<h4 class="mui-content-padded title">
  						<i class="icon ozFF"></i>{{borrow.name}}
              <a class="mui-pull-right" href="http://apps.qiantwo.com:80/products">更多 &gt;</a>
  					</h4>

  					<li class="mui-table-view-cell mui-media mui-col-xs-6">
  						<h5 class="mui-text-center">年化收益</h5>
  						<p>
  							<b class="mcolor fs40">{{borrow.yearRate}}</b>%
  						</p>

  					</li>
  					<li class="mui-table-view-cell mui-media mui-col-xs-6">
  						<h5 class="mui-text-center">期限</h5>
  						<p>
  							<b class="mcolor fs40">{{borrow.deadline}}</b>个月
  						</p>

  					</li>
  					<li class="mui-table-view-cell mui-media mui-col-xs-12">
  						<div class="mui-clearfix">
  							<div class="mui-pull-left mui-col-xs-7 fs13">借款金额:{{borrow.amount}}元</div>
  							<div class="mui-pull-left mui-col-xs-5 fs13">起投金额: {{borrow.minTenderedSum}}元</div>
  						</div>
  						<div class="progress" v-if>
  							<div class="progress-bar progress-bar-success progress-bar-striped" style="width: 39.95%"></div>
  							<div class="progress-num">{{borrow.schedule}}%</div>
  						</div>
  					</li>

  					<li class="mui-table-view-cell mui-media mui-col-xs-12">
  						<button class="mui-btn-block mui-btn-warning" @click="toInvest()"
              borrowId="{{borrow.id}}">立即投资</button>
  					</li>


  </ul>
  </div></div>
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
const { Swipe, SwipeItem } = require('vue-swipe');
export default {
  data: function () {
    return {
      bannerList :[],
      borrow:{}
    }
  },
  computed: {},
  ready: function () {
      this.fetchBannerData()
      this.fetchFirstBorrow();
  },
  attached: function () {},
  methods: {
    fetchBannerData:function() {
      this.$http.get('http://finhds.qiantwo.com/bannerindexapp').then((response) => {
          // success callback
          console.log(response.json())
          this.bannerList = response.json().list;
      }, (response) => {
            console.log(response)
      });
    },
    fetchFirstBorrow:function () {
      this.$http.get('http://finhds.qiantwo.com/borrowIndex').then((response) => {
          this.borrow = response.json();
      }, (response) => {
            console.log(response)
      });
    },
    toInvest:function () {
      var id = this.borrow.id
      location.href = "http://finhds.qiantwo.com/toborrowdetail/"+id;
    }
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }
}
</script>

<style lang="css">
[v-cloak] { display: none }
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  visibility: visible;
  text-align: center;
}

.slide1 {
  background-color: #ddd;
  color: #fff;
}
</style>
