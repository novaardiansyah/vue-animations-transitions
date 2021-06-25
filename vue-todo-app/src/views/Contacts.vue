<template>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-8">
        <transition appear name="slide">
          <h2 class="page__title text-center">Contacts</h2>
        </transition>
      </div>
      <!-- /.col-md-8 -->
    </div>
    <!-- /.row -->

    <div class="row justify-content-center">
      <transition-group
        tag="div"
        class="col-6 col-md-4 mb-3"
        appear
        @before-enter="BeforeEnter"
        @enter="Enter"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <div class="card" :key="index" :data-index="index">
          <div class="card-body text-center text-cl-dark">
            <p class="card-text mb-0">
              <i class="fa-fw fa-2x" :class="icon.name"></i>
            </p>
            <p class="card-text text-capitalize">
              {{ icon.title }}
            </p>
          </div>
        </div>
      </transition-group>
      <!-- /.col-6 /.col-md-4 -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import gsap from "gsap";

export default {
  name: "Contacts",
  components: {},
  props: [],
  setup(props, { emit }) {
    const icons = ref([
      { name: "fab fa-facebook-square", title: "facebook" },
      { name: "fab fa-instagram", title: "instagram" },
      { name: "fab fa-whatsapp", title: "whatsapp" },
      { name: "fas fa-envelope", title: "email" },
      { name: "fab fa-github", title: "github" },
      { name: "fab fa-twitter", title: "twitter" },
    ]);

    const BeforeEnter = (el) => {
      el.style.transform = "translateY(100px)";
      el.style.opacity = 0;
    };

    const Enter = (el, done) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };

    return { icons, BeforeEnter, Enter };
  },
};
</script>

<style lang="scss" scoped>
/* ==== variables ==== */
/* @import '@/assets/scss/partials/_variables.scss'; */
/* ==== mixin ==== */
/* @import '@/assets/scss/partials/_mixin.scss'; */
/* ==== animations ==== */
@import "@/assets/scss/partials/_animations.scss";

.slide-enter-active {
  @include animate__slideInDown();
}
/* ====  ==== */
</style>
<!-- eslint-disable-next-line -->
                                                                                
