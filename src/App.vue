<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { PUBLIC_LAYOUT } from '@/constants';
import { computed } from 'vue';

const route = useRoute();

const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout");

</script>


<template>
  <component :is="layout">
  
  <router-view />
  </component>
</template>
