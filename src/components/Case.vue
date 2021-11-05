<template>
  <div class="container Example">
    <div class="w-full h-screen flex flex-col justify-center px-24">
      <div class="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-center Puritan Example-title mb-8">案例分享</div>
      <div class="Case grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4 mb-5 relative">
        <div data-aos="fade-right" class="Case-text-box blue p-5 col-span-7 z-10">
          <div class="Case-title 2xl:text-2xl md:text-lg text-sm mb-5">Instagram 網帥：</div>
          <div class="Case-content 2xl:text-2xl md:text-lg text-sm">為了分析我粉絲的流動，委託做了Instargram 爬蟲程式，工程師幫我把爬蟲數據整理輸出成excel，讓我可以運用熟悉的工具做後續處理。</div>
        </div>
        <div data-aos="fade-left" class="col-span-5 Case-img z-10">
          <img src="../assets/images/workout.svg" alt="case1">
        </div>
        <div data-aos="fade-left" class="Case-color-img absolute top-0 right-1/4 z-0">
          <img src="../assets/images/blue.svg" alt="case1-color">
        </div>
      </div>
      <div class="Case grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4 mb-5 relative">
        <div data-aos="fade-right" class="col-span-5 Case-img orange z-10">
          <img src="../assets/images/bitcoin.svg" alt="case2">
        </div>
        <div data-aos="fade-left" class="Case-text-box orange p-5 col-span-7 z-10">
          <div class="Case-title 2xl:text-2xl md:text-lg text-sm text-right mb-5">虛擬幣投資達人：</div>
          <div class="Case-content 2xl:text-2xl md:text-lg text-sm">虛擬幣上百種，不可能一個一個追蹤每天的數據，因此委託製作了數據分析程式，客製化我想要的投資策略，並用Telegram提醒我適當的交易時間，不錯過任何好的進場時機！</div>
        </div>
        <div data-aos="fade-right" class="Case-color-img absolute -top-3 left-5 z-0">
          <img src="../assets/images/orange.svg" alt="case1-color">
        </div>
      </div>
      <div class="Case grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4 mb-5 relative">
        <div data-aos="fade-right" class="Case-text-box green p-5 col-span-7 z-10">
          <div class="Case-title 2xl:text-2xl md:text-lg text-sm mb-5">貿易商業者：</div>
          <div class="Case-content 2xl:text-2xl md:text-lg text-sm">委託了蛙鳴製作商品庫存追蹤系統，能自動偵測電商特定商品的庫存，一有庫存就自動提醒，讓我不再錯過下單的機會。</div>
        </div>
        <div data-aos="fade-left" class="col-span-5 Case-img green z-10">
          <img src="../assets/images/businessman.svg" alt="case3">
        </div>
        <div data-aos="fade-left" class="Case-color-img absolute -top-3 left-1/2 z-0">
          <img src="../assets/images/green.svg" alt="case1-color">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .Case-text-box {
    border: 2px solid #DFEAEF;
    border-radius: 30px;
  }
  .Case-text-box.blue {
    color: rgba(9, 63, 104, 0.67);
  }
  .Case-text-box.orange {
    color: #EEAC97;
    border-color: #F8E5DD;
  }
  .Case-text-box.green {
    color: #8A8686;
    border-color: #C3CBBD;
  }
  .Case-img img {
    width: 60%;
  }
  .Case-color-img img {
    width: 70%;
  }
</style>