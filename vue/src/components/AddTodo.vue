<script setup lang="ts">
// import
import { ref } from "vue";
import type { Ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { vAutoFocus } from "@/directives/vAutoFocus";
import { useUser } from "@/composables/useUser";
// ref
const title: Ref<string> = ref("");
// use
const { getUser } = useUser();
const { user } = getUser();
// emit
const emit = defineEmits(["add-todo"]);
// handle
const addItem = (e: Event) => {
  e.preventDefault();

  const newItem = {
    id: uuidv4(),
    title: title.value,
    completed: false,
    userId: user?.value?.uid,
  };
  emit("add-todo", newItem);
  title.value = "";
};
</script>

<template>
  <div class="m-auto w-3/4 sm:w-3/4 md:w-3/4 lg:w-1/2 p-2.5 text-center mt-2.5">
    <form class="" @submit="addItem">
      <input
        class="m-auto items-center mt-3 w-4/5 rounded-l p-2"
        type="text"
        placeholder="Enter Task ..."
        v-model="title"
        v-auto-focus
      />
      <!---->
      <input
        class="p-2 h-10 rounded-l bg-blue-400 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300 transition ease-in-out delay-150 text-white font-bold"
        :disabled="title.length === 0 || title.trim() === ''"
        type="submit"
        value="Add"
      />
      <!---->
    </form>
  </div>
</template>
