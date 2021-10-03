<template>
  <div class="container">
    <div class="w-full h-screen flex justify-center items-center">
    <div class="grid grid-cols-12 xl:gap-24 lg:gap-16 md:gap-12 sm:gap-8 gap-4 flex">
      <div class="rocket-img md:col-span-5 col-span-12 flex justify-center items-center">
        <img src="../assets/images/rocket.png" alt="rocket">
      </div>
      <div class="md:col-span-7 col-span-12 flex flex-col justify-center items-center">
        <div class="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center primary-text-color SeoulHangang hero-title">科技</div>
        <div class="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center primary-text-color SeoulHangang hero-title">也可以如此簡單</div>
        <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-sm text-center secondary-text-color md:mt-16 mt-8">就像擁有魔法杖 輕輕一揮把想法實現</div>
        <div class="lg:w-60 md:w-48 w-36 lg:h-20 md:h-16 h-12
          xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl
          flex justify-center items-center
          md:my-14 my-6
          hero-btn primary-color text-white"
        >專人諮詢</div>
        <div class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm text-center secondary-text-color">網站｜Telegram聊天機器人｜爬蟲程式</div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
  .hero-title {
    line-height: 50px !important;
  }
  @media (min-width: 768px) {
    .hero-title {
      line-height: 130px !important;
    }
  }
  .rocket-img img {
    width: 70%;
  }
  @media (min-width: 768px) {
    .rocket-img img {
      width: 100%;
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