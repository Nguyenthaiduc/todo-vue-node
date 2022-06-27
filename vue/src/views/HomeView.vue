<script setup lang="ts">
// import
import { ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";
import axios from "axios";
import AddTodoVue from "@/components/AddTodo.vue";
import TodoItem from "@/components/TodoItem.vue";
// def type
interface TypeTodo {
  id?: number;
  title?: string;
  completed?: boolean;
  description?: string;
  userId?: string;
  createAt?: Date;
  updatedAt?: Date;
}
interface CreateTodo {
  title?: string;
  completed?: boolean;
}
// ref
const todos: Ref<Array<TypeTodo>> = ref([]);
// router
const router = useRouter();
// handle
const onLogout = () => {
  router.push({ name: "Logout", params: {} });
};

const { getUser } = useUser();
const { user } = getUser();
// onBeforeMount(async () => {
console.log("User", user?.value?.uid);
// });

// handle
//get Data
const getAllTodos = async () => {
  try {
    const res = await axios.get("/todo");
    todos.value = res.data;
  } catch (err) {
    console.log(err);
  }
};
getAllTodos();
//handle
const markComplete = async (id: number) => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
};
const deleteTodo = async (id: number) => {
  try {
    await axios.delete(`/todo/${id}`);
    // TODO
    todos.value = todos.value.filter((todo) => todo.id !== id);
    console.log(todos);
  } catch (err) {
    console.log(err);
  }
  //todos.value = todos.value.filter(todo=> todo.id !== id)
};
const addTodo = async (newTodo: CreateTodo) => {
  try {
    const res = await axios.post("/todo", newTodo);
    todos.value.push(res.data);
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <main>
    <div v-if="user" class="flex justify-center mt-6 m-auto font-bold">
      Hello, {{ user.displayName }}
    </div>
    <div class="row">
      <button
        type="submit"
        class="px-3 w-20 h-8 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-400 absolute top-0 right-0 mt-2 mr-2"
        @click="onLogout"
      >
        Logout
      </button>
    </div>

    <add-todo-vue @add-todo="addTodo" />

    <div class="mt-4">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todoProps="todo"
        @item-completed="markComplete"
        @delete-item="deleteTodo"
      />
    </div>
  </main>
</template>
