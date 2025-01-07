<script setup>
import { store } from "@/data/store";
</script>

<template>
  <footer class="footer py-6" v-if="!store.hiddenTopAndBottom">
    <div class="container is-max-widescreen">
      <div class="content has-text-centered">
        <p>
          Copyright © 2025 <a href="/"><strong>PI Lab</strong></a>. All Rights Reserved.
        </p>
        <p>
          <a href="https://bupdpo.hkbu.edu.hk/policies-and-procedures/pps-pics/" target="_blank">Privacy Policy</a> |
          <a href="https://storyset.com" target="_blank">Illustrations by Storyset</a>
        </p>
        <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="@/assets/img/comp-logo.png" alt="logo" style="height: 30px; margin-right: 20px"></a>
        <a href="https://hkbu.edu.hk" target="_blank"><img src="@/assets/img/bu-logo.png" alt="logo" style="height: 30px;"></a>

      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
