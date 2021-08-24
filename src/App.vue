<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/view/Home"

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  #app{
    height: 100%;
    background-image: url('~@/assets/img/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width:760px) {
    #app{
      background-image: url('~@/assets/img/bg2.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
