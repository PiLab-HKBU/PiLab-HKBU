<template>
  <NavigationBarView/>

  <router-view></router-view>

  <FooterView/>
</template>

<script setup>

import NavigationBarView from "@/components/base/NavigationBarView.vue";
import FooterView from "@/components/base/FooterView.vue";
</script>

<style scoped>

</style>
