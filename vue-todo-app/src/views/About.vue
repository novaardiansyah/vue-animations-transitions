<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <transition appear @before-enter="BeforeEnter" @enter="Enter">
          <h2 class="page__title mb-3 text-center">About</h2>
        </transition>

        <p class="page__paragraph" v-for="paragraph in 5" :key="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed
          pariatur minus voluptatum reiciendis, nisi commodi non nesciunt itaque
          hic, et eveniet aperiam impedit voluptas, ullam optio. Illo doloribus,
          omnis error consectetur eius blanditiis! Omnis deleniti odit nihil hic
          culpa qui ea. Voluptate perferendis placeat odio! Odio obcaecati quae
          autem!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref, reactive } from 'vue'
import gsap from "gsap";

export default {
  name: "About",
  // components: {},
  // props: [],
  setup() {
    const BeforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };

    const Enter = (el, done) => {
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };

    return { BeforeEnter, Enter };
  },
};
</script>

<style lang="scss" scoped>
/* ==== variables ==== */
/* @import '@/assets/scss/partials/_variables.scss'; */
/* ==== mixin ==== */
/* @import '@/assets/scss/partials/_mixin.scss'; */
/* ==== animations ==== */
/* @import '@/assets/scss/partials/_animations.scss'; */

/* ====  ==== */
</style>
<!-- eslint-disable-next-line -->
                                                                                
