<template>
  <div v-if="showTitleBar" class="w-full flex justify-center fixed title-bar">
    <img src="../assets/images/logo.png" alt="logo" class="title-bar-img">
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "@vue/runtime-core";

  export default defineComponent({
    name: 'TitleBar',
    setup(props) {
      const showTitleBar = ref(true)

      const handleScroll = () => {
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        if ((document.documentElement.scrollTop || document.body.scrollTop) > 2 * height)
          showTitleBar.value = false
        else
          showTitleBar.value = true
      }
      
      window.addEventListener('scroll', handleScroll)

      return { showTitleBar }
    }
  })
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