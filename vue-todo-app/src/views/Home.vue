<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<script>
// import { ref, reactive } from "vue";
import TodoList from "@/components/TodoList";

export default {
  name: "Home",
  components: { TodoList },
  setup() {
    console.log(process.env.VUE_APP_TITLE);

    return {};
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
                                                                                
