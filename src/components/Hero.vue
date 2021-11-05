<template>
  <div class="container">
    <div data-aos="fade-down" class="w-full h-screen flex justify-center items-center">
      <div class="grid grid-cols-12 2xl:gap-24 md:gap-12 sm:gap-8 gap-4 flex">
        <div class="rocket-img md:col-span-6 col-span-12 flex justify-center items-center">
          <img src="../assets/images/rocket.png" alt="rocket">
        </div>
        <div class="md:col-span-6 col-span-12 flex flex-col justify-center items-center">
          <div class="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl text-center primary-text-color hero-title">科技</div>
          <div class="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl text-center primary-text-color hero-title">也可以如此簡單</div>
          <div class="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-center secondary-text-color 2xl:mt-16 mt-8">就像擁有魔法杖 輕輕一揮把想法實現</div>
          <div class="md:w-48 w-36 lg:h-16 h-12
            xl:text-2xl lg:text-xl text-lg
            flex justify-center items-center
            md:my-8 my-6
            hero-btn primary-color text-white"
            @click="openFrom"
          >專人諮詢</div>
          <div class="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-center secondary-text-color">網站｜<span class="SeoulHangang">Telegram</span>聊天機器人｜爬蟲程式</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";

  export default defineComponent({
    name: 'Hero',
    setup(props, { emit }) {
      const openFrom = () => {
        emit("openForm")
      }

      return { openFrom }
    }
  })
</script>

<style>
  .hero-title {
    line-height: 50px !important;
  }
  @media (min-width: 768px) {
    .hero-title {
      line-height: 80px !important;
    }
  }
  @media (min-width: 1024px) {
    .hero-title {
      line-height: 90px !important;
    }
  }
  .rocket-img img {
    width: 60%;
  }
  @media (min-width: 768px) {
    .rocket-img img {
      width: 90%;
    }
  }
  .hero-btn {
    font-weight: 200;
    border-radius: 60px;
    cursor: pointer;
  }
  .hero-btn:hover {
    opacity: 0.9;
  }
</style>