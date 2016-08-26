<template>
  <div id="app">

      <xheader></xheader>
      <xnav></xnav>
      <router-view  class="mui-content" keep-alive :transition="effect" transition-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script>

import xheader from './components/xHeader'
import xnav from './components/xNav'

export default {
  replace: false,
  ready: function () {
},
  components: {
    xheader,
    xnav
  }
}
</script>

<style>
.mui-content{
  -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
}
.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);
}
.back-leave{
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

</style>
