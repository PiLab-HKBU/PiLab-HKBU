<template>
  <NavigationBarView/>

  <router-view></router-view>

  <FooterView/>
</template>

<script setup>

import NavigationBarView from "@/components/base/NavigationBarView.vue";
import FooterView from "@/components/base/FooterView.vue";
import HomeView from "@/components/home/HomeView.vue";
</script>

<style scoped>

</style>
