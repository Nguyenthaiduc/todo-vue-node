<script setup lang="ts">
// def type
interface Props {
  id?: number | string;
  title?: string;
  completed?: boolean;
  description?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string | unknown;
}
// props
const props = defineProps({
  todoProps: {
    type: Object as () => Props, 
    default: () => Object,
  },
});

// emit
const emit = defineEmits(["item-completed", "delete-item"]);

//handle
const markItemCompleted = () => {
  emit("item-completed", props.todoProps.id);
};

const deleteItem = () => {
  emit("delete-item", props.todoProps.id);
};
</script>

<template>
  <div
    :class="[
      'flex mb-4 ml-auto mr-auto items-center justify-between p-2.5  text-gray-900 font-semibold w-1/2 rounded-l border-b bg-zinc-300',
      todoProps.completed ? 'line-through decoration-cyan-700 opacity-70' : '',
    ]"
  >
    <input
      class="scale-150 p-2"
      type="checkbox"
      :checked="todoProps.completed"
      @change="markItemCompleted"
    />
    <h3>{{ todoProps.title }}</h3>
    <div>
      <button
        class="h-10 border-none cursor-pointer rounded-l p-2 no-underline font-bold ransition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300"
        @click="deleteItem"
      >
        Delete
      </button>
    </div>
  </div>
</template>
