<template>
  <div class="container Example">
    <div class="w-full h-screen flex flex-col justify-center px-10">
      <div class="text-xl text-center Puritan Example-title mb-8">案例分享</div>
      <div class="Case w-full relative mb-24">
        <div class="grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4">
          <div data-aos="fade-right" class="Case-text-box blue p-3 col-span-12 z-10">
            <div class="Case-title 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm mb-2"><span class="Puritan">Instagram</span> 網帥：</div>
            <div class="Case-content 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm">為了分析我粉絲的流動，委託做了<span class="Puritan">Instargram</span> 爬蟲程式，工程師幫我把爬蟲數據整理輸出成<span class="Puritan">excel</span>，讓我可以運用熟悉的工具做後續處理。</div>
          </div>
        </div>
        <div data-aos="fade-left" class="CaseCP-img absolute right-0 z-10">
          <img src="../assets/images/workout.svg" alt="case1">
        </div>
        <div data-aos="fade-left" class="CaseCP-color-img absolute top-8 -right-4 z-0">
          <img src="../assets/images/blueCP.svg" alt="case1-color">
        </div>
      </div>
      <div class="Case w-full relative mb-20">
        <div class="grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4">
          <div data-aos="fade-left" class="Case-text-box orange p-3 col-start-3 col-span-12 z-10">
            <div class="Case-title 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm text-right mb-2">虛擬幣投資達人：</div>
            <div class="Case-content 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm">虛擬幣上百種，不可能一個一個追蹤每天的數據，因此委託製作了數據分析程式，客製化我想要的投資策略，並用<span class="Puritan">Telegram</span>提醒我適當的交易時間，不錯過任何好的進場時機！</div>
          </div>
        </div>
        <div data-aos="fade-right" class="CaseCP-img orange absolute -top-20 z-10">
          <img src="../assets/images/bitcoin.svg" alt="case1">
        </div>
        <div data-aos="fade-right" class="CaseCP-color-img absolute top-8 z-0">
          <img src="../assets/images/orangeCP.svg" alt="case1-color">
        </div>
      </div>
      <div class="Case relative">
        <div class="grid grid-cols-12 2xl:gap-24 xl:gap-16 lg:gap-12 md:gap-8 gap-4">
          <div data-aos="fade-right" class="Case-text-box green p-3 col-span-11 z-10">
            <div class="Case-title 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm mb-2">貿易商業者：</div>
            <div class="Case-content 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg text-sm">委託了蛙鳴製作商品庫存追蹤系統，能自動偵測電商特定商品的庫存，一有庫存就自動提醒，讓我不再錯過下單的機會。</div>
          </div>
        </div>
        <div data-aos="fade-left" class="CaseCP-img green absolute -top-16 z-10">
          <img src="../assets/images/businessman.svg" alt="case3">
        </div>
        <div data-aos="fade-left" class="CaseCP-color-img absolute -top-3 left-1/2 z-0">
          <img src="../assets/images/greenCP.svg" alt="case1-color">
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
  .CaseCP-img img {
    width: 100%;
  }
  .CaseCP-img.orange img{
    width: 50%;
    float: left;
  }
  .CaseCP-img.green img {
    width: 50%;
    float: right;
  }
  .CaseCP-color-img img {
    width: 100%;
  }
</style>