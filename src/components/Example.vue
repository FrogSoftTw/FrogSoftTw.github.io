<template>
  <div class="container Example">
    <div class="w-full h-screen flex flex-col justify-center md:px-24 px-10">
      <div class="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl Puritan Example-title mb-12">如何讓科技改善你的事業？</div>
      <div class="justify-center items-center flex 2xl:mb-24 mb-12">
        <div class="Arrow">
          <img src="../assets/images/arrow1.png" alt="example1">
        </div>
        <div class="2xl:text-2xl xl:text-xl text-lg flex flex-col items-center">
          <div class="Example-box ">
            <img src="../assets/images/example2.png" alt="example2" class="m-auto">
          </div>
          <div class="Example-text mt-5">2 歸納問題、設計演算法</div>
        </div>
        <div class="Arrow">
          <img src="../assets/images/arrow2.png" alt="example1">
        </div>
      </div>
      <div class="items-center flex justify-between">
        <div class="2xl:text-2xl xl:text-xl text-lg flex flex-col items-center">
          <div class="Example-box ">
            <img src="../assets/images/example1.png" alt="example1" class="float-left">
          </div>
          <div class="Example-text mt-5">1 發現問題</div>
        </div>
        <div class="2xl:text-2xl xl:text-xl text-lg flex flex-col items-center">
          <div class="Example-box ">
            <img src="../assets/images/example3.png" alt="example3" class="float-right">
          </div>
          <div class="Example-text mt-5">3 做出漂亮決策</div>
        </div>
      </div>
      <div class="pt-4 text-lg text-right Example-hint">只要交給我們，為你解決難題！</div>
    </div>
  </div>
</template>

<style>
  .Example img {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    .Example img {
      width: 100%;
    }
  }
  .Arrow img {
    width: 100%;
    margin: 0 auto;
  }
  .Example-box {
    width: 75%;
  }
  .Example-title {
    color: #A1B4C2;
    font-weight: 800;
    vertical-align: middle;
  }
  .Example-text {
    color: rgba(9, 63, 104, 0.67);
  }
  .Example-hint {
    color: rgba(123, 162, 191, 0.67);
  }
</style>