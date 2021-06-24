<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark py-3">
    <div class="container">
      <a class="navbar-brand" href="#">Todos App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#myNavbar"
        aria-controls="myNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <div class="navbar-nav text-center ms-auto">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >About</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import { ref, reactive } from 'vue'

export default {
  name: "Navbar",
  // components: {},
  // props: [],
  /* setup(props, { emit }) {
	  const state = reactive({
		  
		})
		
		return {}
	} */
};
</script>

<style lang="scss" scoped>
/* ==== variables ==== */
/* @import '@/assets/scss/partials/_variables.scss'; */
/* ==== mixin ==== */
/* @import '@/assets/scss/partials/_mixin.scss'; */
/* ==== animations ==== */
/* @import '@/assets/scss/partials/_animations.scss'; */

nav.navbar {
  margin: -5% 0 5% 0;
}
/* ====  ==== */
</style>
<!-- eslint-disable-next-line -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
