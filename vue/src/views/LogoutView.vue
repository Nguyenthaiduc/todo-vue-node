<script setup lang="ts">
// import
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
// router
const router = useRouter();

const { error, logOut } = useLogout();
async function onLogout() {
  await logOut();
  if (!error.value) router.push({ name: "Login", params: {} });
}
onLogout();
</script>

<template>
  <h1>Logout Page</h1>
</template>
