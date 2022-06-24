<script setup lang="ts">
// import
import { ref } from "vue";
import type { Ref } from "vue";
// ref
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
// handle
const onSubmit = () => {
  console.log({ email, password });
};
</script>

<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!--START FORM-->
      <form
        class="flex flex-col justify-start space-y-6 items-center"
        @submit.prevent="onSubmit"
      >
        <!---->
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-80 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="email"
              placeholder="Enter Your Email..."
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <!---->
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-80 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="password"
              placeholder="Enter Your Password..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div> 
        <!---->
        <div class="row">
          <button
            type="submit"
            class="px-3 w-80 h-12 rounded-xl bg-primary text-white font-bold"
          >
            Sign In
          </button>
        </div>
      </form>
      <!--END FORM-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm New Acount.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
