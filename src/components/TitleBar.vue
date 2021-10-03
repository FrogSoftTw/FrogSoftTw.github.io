<template>
  <div class="w-full flex justify-center fixed title-bar">
    <img src="../assets/images/logo.png" alt="logo" class="title-bar-img">
  </div>
</template>

<script setup lang="ts">
</script>

<style>
  .title-bar {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 999;
  }
  .title-bar-img { 
    padding: 10px 0;
    max-width: 200px;
    height: auto;
  }
  @media (max-width: 768px) {
    .title-bar-img { 
      max-width: 150px;
    }
  }
</style>