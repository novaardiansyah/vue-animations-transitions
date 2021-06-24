<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <form @submit.prevent>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="create a new task.."
            v-model="state.todoRef"
            @keypress.enter="AddTodo"
          />
          <button type="button" @click="AddTodo" class="btn btn-primary">
            add todo
          </button>
        </div>
      </form>
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->

  <transition-group
    name="switch"
    mode="out-in"
    tag="div"
    class="row justify-content-center switch"
  >
    <div class="col-md-8" v-if="todos.length">
      <transition-group appear name="todos" tag="ul" class="list-group">
        <li
          class="list-group-item"
          v-for="todo in todos"
          :key="todo.id"
          @click="DeleteTodo(todo.id)"
        >
          {{ todo.title }}
        </li>
      </transition-group>
    </div>
    <!-- /.col -->

    <div class="col-md-8" v-else>
      <div class="alert alert-success" role="alert">
        Congratulations you have done all the tasks today, continue your
        activities by creating new tasks. come on! I am waiting for your
        assignment!!.
      </div>
    </div>
    <!-- /.col -->
  </transition-group>
</template>

<script>
import { ref, reactive } from "vue";
import { v4 as uuid } from "uuid";
import { generateAlert } from "@/composables/SweetAlert";

export default {
  name: "TodoList",
  setup() {
    const todos = ref([
      { id: uuid(), title: "learn programming", complete: false },
      { id: uuid(), title: "learn vuejs v3", complete: false },
      { id: uuid(), title: "playing game", complete: false },
    ]);

    const state = reactive({
      todoRef: "",
    });

    const AddTodo = () => {
      if (!state.todoRef) {
        return generateAlert({
          text: "Oops! you can't add an empty task",
          icon: "error",
        });
      }

      todos.value = [
        ...todos.value,
        { id: uuid(), title: state.todoRef, complete: false },
      ];
      return (state.todoRef = "");
    };

    const DeleteTodo = (id) => {
      return (todos.value = todos.value.filter((todo) => todo.id !== id));
    };

    return { todos, state, AddTodo, DeleteTodo };
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

.list-group,
.row.switch {
  position: relative !important;
}

.todos-enter-active,
.switch-enter-active {
  @include animate__slideInDown(0.75s);
}

.todos-leave-active,
.switch-leave-active {
  @include animate__fadeOut(0.75s);
  position: absolute;
}

/* the parent is .col */
.todos-leave-active {
  width: 100%;
}

.todos-move {
  transition: 0.75s;
}

/* ====  ==== */
</style>
<!-- eslint-disable-next-line -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
