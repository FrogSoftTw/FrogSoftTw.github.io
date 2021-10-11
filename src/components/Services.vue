<template>
  <div class="container">
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl text-center primary-text-color SeoulHangang">服務項目</div>
      <div 
        class="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-center secondary-text-color
          md:mt-10 mt-5 2xl:mb-20 xl:mb-16 md:mb-12 mb-10"
        >
          可以單一實現，也可以多項混搭。
        </div>
      <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30" :autoplay='{
        "delay": 2500,
        "disableOnInteraction": false
      }' :breakpoints='{
        "1024": {
          "slidesPerView": 3,
          "spaceBetween": 40,
          "centeredSlides": false,
          "autoplay": false,
        },
      }'>
        <swiper-slide>
          <div class="h-full service-block">
            <div class="mt-3 px-6">
              <div class="text-5xl service-label">01</div>
              <div class="2xl:text-5xl xl:text-4xl text-3xl text-right">爬蟲程式</div>
            </div>
            <div class="w-full flex flex-col justify-center items-center px-5 mt-12">
              <img src="../assets/images/chart.png" alt="chart" class="2xl:h-16 h-12">
              <div class="2xl:text-2xl xl:text-xl mt-10">龐大的資料訊息，透過專業爬蟲程式、數據分析，將需要的重點篩選到您的手邊，做更有效的利用與分析。</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="h-full service-block">
            <div class="mt-3 px-6">
              <div class="text-5xl service-label">02</div>
              <div class="text-3xl text-right">網站架設</div>
            </div>
            <div class="w-full flex flex-col justify-center items-center px-5 mt-12">
              <img src="../assets/images/laptop.png" alt="chart" class="2xl:h-16 h-12">
              <div class="2xl:text-2xl xl:text-xl mt-10">網路開店、優化網站、形象建立，以不受侷限的形式給你全新的網站規劃與製作。</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="h-full service-block">
            <div class="mt-3 px-6">
              <div class="text-5xl service-label">03</div>
              <div class="text-3xl text-right transform -translate-y-5"><span class="font-bold">telegram</span><br>聊天機器人</div>
            </div>
            <div class="w-full flex flex-col justify-center items-center px-5 mt-3">
              <img src="../assets/images/telegram.png" alt="chart" class="2xl:h-16 h-12">
              <div class="2xl:text-2xl xl:text-xl mt-10">時下必備的行銷法寶，精準傳遞訊息、分眾行銷、創意服務，將內容即時且有效傳遞，達到最高效益。</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import "swiper/css/pagination"

  // import Swiper core and required modules
  import SwiperCore, { Autoplay, Pagination } from 'swiper';

  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination]);
</script>

<style>
  .swiper {
    width: 100%;
    height: 55%;
  }

  @media (min-width: 768px) {
    .swiper {
      height: 50%;
      padding: 0 2rem;
    }
  }

  .swiper-slide {
    width: 75%;
  }

  .service-block {
    border: 2px solid #093F68;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Roboto;
    color: #093F68;
  }

  .service-label {
    font-family: Roboto Condensed;
    font-weight: bold;
  }
  
  .service-label::after {
    content: "";
    position: absolute;
    width: 110px;
    height: 1px;
    top: 70px;
    left: 50px;
    transform: rotateZ(125deg);
    background-color: #093F68;
  }
</style>