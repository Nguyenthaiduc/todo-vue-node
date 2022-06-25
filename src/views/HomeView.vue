<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { useRouter } from "vue-router";
import { useUser } from "@/composables/useUser";

const router = useRouter();

const onLogout = () => {
  router.push({ name: "Logout", params: {} });
};

const { getUser } = useUser();
const { user }: any = getUser();

console.log({ user });
</script>

<template>
  <main>
    <div v-if="user" class="mt-6">{{ user.displayName }}</div>
    <div class="row">
      <button
        type="submit"
        class="px-3 w-20 h-8 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-400 absolute top-0 right-0 mt-2 mr-2"
        @click="onLogout"
      >
        Logout
      </button>
    </div>
    <TheWelcome />
  </main>
</template>
