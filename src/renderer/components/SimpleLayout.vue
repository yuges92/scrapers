<template>
    <transition name="fade" mode="out-in">
  <div class="col-md-12 mt-3">
         <h2 class="title">{{$route.name}} Scraper</h2>
      <home-btn></home-btn>
      <router-view class="mt-3"></router-view>
  </div>
    </transition>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      // clears displayed errors when the route changes
    //   this.$store.commit("ErrorModule/updateErrors", []);
    }
  }
};
</script>
<style lang="scss">
.title {
  color: #542fb1;
  text-align: center;
}
</style>
