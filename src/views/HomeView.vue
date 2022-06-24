<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { useUser } from "@/composables/useUser";

const { getUser } = useUser();
const { user }  = getUser();
</script>

<template>
  <div class="mt-6">{{ user?.displayName }}</div>
  <main>
    <TheWelcome />
  </main>
</template>
