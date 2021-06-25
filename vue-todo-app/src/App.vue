<template>
  <Navbar />

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss" scoped>
/* ==== variables ==== */
/* @import "@/assets/scss/partials/_variables.scss"; */
/* ==== mixin ==== */
/* @import "@/assets/scss/partials/_mixin.scss"; */
/* ==== animations ==== */
@import "@/assets/scss/partials/_animations.scss";

.route-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-from {
  transform: translateX(-100px);
  opacity: 1;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
/* ====  ==== */
</style>
<!-- eslint-disable-next-line -->
                                                                                
