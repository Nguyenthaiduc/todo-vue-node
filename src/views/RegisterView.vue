<script setup lang="ts">
// import
import { ref } from "vue";
import type { Ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import loading from "@/assets/images/loading.gif";
// use
const { error, isPending, signUp } = useSignUp();
// ref
const fullName: Ref<string> = ref("");
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const onSubmit = async () => {
  await signUp(email.value, password.value, fullName.value);
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
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-80 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              placeholder="Enter Your Name..."
              v-model="fullName"
            />
          </label>
        </div>
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
            v-if="!isPending"
            type="submit"
            class="px-3 w-80 h-12 rounded-xl bg-primary text-white font-bold hover:bg-sky-600"
          >
            Sign Up
          </button>
          <!---->
          <button
            v-else
            type="button"
            class="px-3 w-80 h-12 rounded-xl bg-sky-600 text-white font-bold cursor-not-allowed"
            disabled
          >
            <img
              class="w-10 h-10 items-center text-center ml-auto mr-auto"
              :src="loading"
            />
          </button>
        </div>
      </form>
      <!--END FORM-->

      <!--START ERROR-->
      <div v-if="error" class="text-center text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!--END ERROR-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a account.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
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
