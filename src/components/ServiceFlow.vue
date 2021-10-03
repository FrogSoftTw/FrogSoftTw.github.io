<template>
  <div class="service-flow-bg">
    <div class="container">
      <div class="w-full h-screen flex justify-center items-center">
        <div class="grid grid-cols-12 xl:gap-24 lg:gap-16 md:gap-12 sm:gap-8 gap-4 flex relative">
          <div class="discussion-img md:col-span-5 col-span-12 justify-center items-center md:flex hidden">
            <img src="../assets/images/discussion.png" alt="rocket">
          </div>
          <div class="md:col-span-7 col-span-12 flex flex-col justify-center items-center xl:px-20 lg:px-16 px-12 relative">
            <div class="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl
                xl:left-20 lg:left-16 md:left-14
                md:top-16 -top-4
                SeoulHangang service-flow-title"
              >服務流程</div>
            <div class="justify-center items-center service-flow-box xl:px-32 lg:px-24 md:px-16 px-14 py-20 mx-auto">
              <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center secondary-text-color flex">
                <div class="service-flow-label md:mr-3 mr-5">1</div>
                諮詢、溝通想法
              </div>
              <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center secondary-text-color md:mt-12 mt-4 flex">
                <div class="service-flow-label md:mr-3 mr-5">2</div>
                分析與提供報價
              </div>
              <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center secondary-text-color md:mt-12 mt-4 flex">
                <div class="service-flow-label md:mr-3 mr-5">3</div>
                擬定開發計畫
              </div>
              <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center secondary-text-color md:mt-12 mt-4 flex">
                <div class="service-flow-label md:mr-3 mr-5">4</div>
                設計、開發
              </div>
              <div class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center secondary-text-color md:mt-12 mt-4 md:mb-0 mb-12 flex">
                <div class="service-flow-label md:mr-3 mr-5">5</div>
                測試確認、交件
              </div>
            </div>
            <div class="pt-16 service-flow-slogan text-lg md:inline-block hidden">Let's get started with your idea -</div>
          </div>
          <div class="discussion-img md:col-span-5 col-span-12 justify-center items-center 
            md:hidden flex flex-col justify-center items-center absolute -bottom-28"
          >
            <img src="../assets/images/discussion.png" alt="rocket">
            <div class="pt-5 service-flow-slogan text-xs md:hidden inline-block">Let's get started with your idea -</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .service-flow-bg {
    background-color: #FFFBF2;
  }
  .discussion-img img {
    width: 50%;
  }
  @media (min-width: 768px) {
    .discussion-img img {
      width: 100%;
    }
  }
  .service-flow-box {
    border: 1px solid #C3CBBD;
    border-radius: 15px;
  }
  .service-flow-title {
    background-color: #FFFBF2;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 8px;
    writing-mode: horizontal-tb;
    color: #C3CBBD;
    border-radius: 15px;
  }
  @media (min-width: 768px) {
    .service-flow-title {
      padding: 16px 0;
      writing-mode: vertical-rl;
    }
  }
  .service-flow-label {
    color: #FFFBF2;
    text-shadow: 0 0 2px #81877E;
  }
  .service-flow-slogan {
    color: #D1D3D4;
  }
</style>