<template>
  <div class="contact-bg">
    <div class="container">
      <div class="w-full h-screen flex flex-col justify-center items-center">
        <div class="grid grid-cols-12 xl:gap-24 lg:gap-16 md:gap-12 sm:gap-8 gap-4 flex">
          <div class="rocket-img md:col-span-5 md:flex hidden justify-center items-center contact-img">
            <img src="../assets/images/contact.png" alt="rocket">
          </div>
          <div class="md:col-span-7 col-span-12 flex flex-col justify-center items-center">
            <div class="md:w-48 w-36 lg:h-16 h-12
              xl:text-2xl lg:text-xl text-lg
              flex justify-center items-center
              contact-btn"
              @click="openFrom"
            >立即諮詢</div>
            <div class="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center secondary-text-color md:my-16 my-8">馬上預約顧問諮詢、實現計劃。</div>
            <div class="flex flex-row-reverse justify-center items-center overflow-hidden">
              <div data-aos="fade-left">
                <div class="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg text-center Puritan textWrap">你的創意，</div>
                <div class="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg text-center Puritan contact-title mt-5 textWrap">我們實現。</div>
              </div>
              <div class="rocket-img inline-block md:hidden contact-img-mobile">
                <img src="../assets/images/contact.png" alt="rocket">
              </div>
            </div>
            <div class="contact-footer flex w-full mt-20 md:justify-start justify-center relative">
              <div class="md:hidden absolute -top-3 left-0 pl-4 pr-2 bg-white">線上諮詢專線</div>
              <div class="md:block hidden mr-10">
                <div class="contact-label md:text-3xl text-lg">CONTACT</div>
                <div class="contact-label md:text-3xl text-lg">US</div>
              </div>
              <div class="sm:text-base text-sm font-bold md:mt-0 mt-8 secondary-text-color Puritan">
                <div class="mb-4 tracking-wider flex">
                  <div class="w-16">Line</div>
                  <div>@780zqban</div>
                </div>
                <div class="tracking-wider flex">
                  <div class="w-16">Email</div>
                  <div>frogsoft2021@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="secondary-text-color mt-20 text-sm">© {{ years }} 蛙鳴資訊</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "@vue/runtime-core";

  export default defineComponent({
    name: 'Contact',
    setup(props, { emit }) {
      const openFrom = () => {
        emit("openForm")
      }

      const years = ref(new Date().getFullYear())

      return { openFrom, years }
    }
  })
</script>

<style>
  .contact-bg {
    background: linear-gradient(197.6deg, rgba(209, 223, 201, 0.343805) 15.79%, rgba(225, 241, 217, 0.5) 28.58%, rgba(249, 254, 243, 0) 70.91%);
  }
  .contact-img {
    margin: 0 auto;
  }
  .contact-img img {
    width: 70%;
  }
  .contact-img-mobile {
    max-width: 160px;
  }
  @media (min-width: 680px) {
    .contact-img-mobile {
      max-width: 180px;
    }
  }
  .contact-img-mobile img {
    width: 80%;
  }
  .contact-btn {
    font-weight: 200;
    border-radius: 60px;
    cursor: pointer;
    background-color: #ffffff;
    color: #093F68;
    border: 1px solid #093F68;
  }
  .contact-btn:hover {
    background-color: #eeeeee;
  }
  .contact-title {
    position: relative;
  }
  .contact-title::after {
    content: "";
    position: absolute;
    left: -10px;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 1rem;
    background-color: #FCE7B2;
  }
  @media (min-width: 768px) {
    .contact-title::after {
      height: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    .contact-title::after {
      height: 2rem;
    }
  }
  .contact-label {
    color: #FFFBF2;
    text-shadow: 0 0 2px #81877E;
  }
  .contact-footer {
    border-top: 1px solid #C4C4C4;
    padding-top: 20px;
  }
  .textWrap {
    white-space: nowrap;
  }
</style>