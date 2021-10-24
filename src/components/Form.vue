<template>
  <div class="form-bg">
    <div v-if="loader" class="loader-bg w-full h-screen flex justify-center items-center fixed">
      <div class="loader"></div>
    </div>
    <svg width="291" height="187" viewBox="0 0 291 187" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute md:block hidden">
      <path d="M0 127.418C31.2078 150.966 98.9266 180.111 120.139 108.314C121.78 78.3515 135.423 19.3588 176.874 23.0868C228.687 27.7469 264.334 44.4064 280.652 -10.8223" stroke="#C3CBBD" stroke-width="2"/>
    </svg>
    <div class="cancel-btn absolute 2xl:right-20 2xl:top-20 md:right-8 md:top-8 right-5 top-5" @click="closeForm"></div>
    <div class="container">
      <div class="w-full min-h-screen flex flex-col justify-center xl:px-48 lg:px-32 2xl:p-20 md:p-14 p-10">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <div class="2xl:text-5xl xl:text-3xl lg:text-2xl text-xl">立即預約</div>
            <div class="2xl:text-3xl lg:text-xl md:text-lg text-sm 2xl:mt-8 mt-4 2xl:mb-20 xl:mb-8 mb-4">留下資訊，將會有專員與您聯繫、一對一諮詢。</div>
          </div>
        </div>
        <form ref="form" class="flex flex-col">
          <div class="grid grid-cols-12 xl:gap-24 lg:gap-16 md:gap-12 sm:gap-8 gap-4 flex">
            <div class="md:col-span-5 col-span-12 flex flex-col form">
              <label for="name" class="md:text-xl text-sm">姓名<span class="Puritan required">*</span></label>
              <input type="text" name="name" v-model="formData.name" required>
              <label for="cellphone" class="md:text-xl text-sm">手機</label>
              <input type="text" name="cellphone" v-model="formData.cellphone">
              <label for="email" class="Puritan md:text-xl text-sm">e-mail<span class="Puritan required">*</span></label>
              <input type="text" name="email" v-model="formData.email" required>
              <label for="line" class="Puritan md:text-xl text-sm">Line</label>
              <input type="text" name="line" v-model="formData.line">
              <label for="requirement" class="md:text-xl text-sm">需求說明 (越詳細越好)<span class="Puritan required">*</span></label>
              <textarea name="requirement" cols="30" rows="10" class="md:text-xl text-sm" v-model="formData.requirement" required></textarea>
            </div>
            <div class="md:col-span-7 col-span-12 flex flex-col form">
              <div class="flex md:justify-around justify-between">
                <div>
                  <div class="md:pl-2 pl-0 xl:pr-32 pr-16 mb-4 md:text-xl text-sm checkbox-title">
                    服務類型
                  </div>
                  <div class="flex flex-col">
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="爬蟲，資料分析" class="mr-2" v-model="formData.service" required>
                      爬蟲，資料分析
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="telegram機器人" class="mr-2" v-model="formData.service">
                      telegram機器人
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="網站架設" class="mr-2" v-model="formData.service">
                      網站架設
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="爬蟲＋telegram" class="mr-2" v-model="formData.service">
                      爬蟲＋telegram
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="爬蟲＋網頁" class="mr-2" v-model="formData.service">
                      爬蟲＋網頁
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="telegram＋網頁" class="mr-2" v-model="formData.service">
                      telegram＋網頁
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="爬蟲＋telegram＋網頁" class="mr-2" v-model="formData.service">
                      爬蟲＋telegram＋網頁
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="其他" class="mr-2" v-model="formData.service">
                      其他
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="service" value="我不知道如何定義" class="mr-2" v-model="formData.service">
                      我不知道如何定義
                    </label>
                  </div>
                </div>
                <div>
                  <div class="md:pl-2 pl-0 xl:pr-32 pr-16 mb-4 md:text-xl text-sm checkbox-title">
                    預算
                  </div>
                  <div class="flex flex-col">
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="1萬以下" class="mr-2" v-model="formData.budget" required>
                      1萬以下
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="1~3萬" class="mr-2" v-model="formData.budget">
                      1~3萬
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="3~5萬" class="mr-2" v-model="formData.budget">
                      3~5萬
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="5~7萬" class="mr-2" v-model="formData.budget">
                      5~7萬
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="7~10萬" class="mr-2" v-model="formData.budget">
                      7~10萬
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="10萬以上" class="mr-2" v-model="formData.budget">
                      10萬以上
                    </label>
                    <label class="2xl:text-2xl md:text-lg text-sm 2xl:mb-4 mb-2">
                      <input type="radio" name="budget" value="我沒概念" class="mr-2" v-model="formData.budget">
                      我沒概念
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="submit-btn md:w-52 w-48 md:h-12 h-10 md:mt-0 mt-5 flex justify-center items-center md:self-end self-center" type="submit" @click="e => handleSubmit(e)">送出</button>
        </form>
      </div>
    </div>
    <svg width="129" height="254" viewBox="0 0 129 254" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 right-0 md:block hidden">
      <path d="M129 1C95.5014 36.4794 32.1009 119.252 46.4876 166.509C60.8744 213.765 22.157 244.526 1 254" stroke="#C3CBBD" stroke-width="2"/>
    </svg>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "@vue/runtime-core";
  import Email from "../assets/js/smtp";

  export default defineComponent({
    name: 'Form',
    setup(props, { emit }) {
      const closeForm = () => {
        emit("closeForm")
      }

      const form = ref<any>(null)
      const loader = ref<boolean>(false)

      const formData = ref({
        name: '',
        cellphone: '',
        email: '',
        line: '',
        requirement: '',
        service: '',
        budget: '',
      })

      const handleSubmit = (e: MouseEvent) => {
        loader.value = true
        if (form.value && form.value.checkValidity()) {
          e.preventDefault()
          console.log(formData.value)
          Email.send({
            SecureToken: '594a9c64-383c-44e6-b041-a7656f1a5fe4',
            To: 'frogsoft2021@gmail.com',
            From: "csieproject2017@gmail.com",
            Subject: `FrogSoftTW contact from ${formData.value.name}`,
            Body: encodeURIComponent(
              `姓名: ${formData.value.name}\n
              手機: ${formData.value.cellphone ? formData.value.cellphone : ""}\n
              email: ${formData.value.email}\n
              line: ${formData.value.line ? formData.value.line : ""}\n
              需求說明: ${formData.value.requirement}\n
              服務類型: ${formData.value.service}\n
              預算: ${formData.value.budget}
              `
            )
          }).then(() => {
              alert("成功！")
              emit("closeForm")
            })
            .finally(() => {
              loader.value = false
            })
        }
        else 
          loader.value = false
      }

      return { closeForm, form, loader, formData, handleSubmit }
    }
  })
</script>

<style>
  .form-bg {
    background-color: #E5E5E5;
  }
  .cancel-btn {
    width: 40px;
    height: 40px;
    border: 1px solid #8A8686;
    background: #ffffff;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
  }
  .cancel-btn:hover {
    background-color: #eeeeee;
  }
  .cancel-btn::before,
  .cancel-btn::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: #8A8686;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotateZ(45deg);
  }
  .cancel-btn::after {
    transform: translate(-50%,-50%) rotateZ(135deg);
  }
  @media (min-width: 768px) {
    .cancel-btn {
      width: 50px;
      height: 50px;
    }
  }
  .form input[type="text"] { 
    padding: 4px 8px; 
    border: 1px black solid;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: #eeeeee;
  }
  .form textarea { 
    padding: 4px 8px; 
    border: 1px black solid;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #eeeeee;
    height: 100px;
  }
  @media (min-width: 768px) {
    .form input[type="text"] { 
      padding: 8px 15px; 
      margin-bottom: 10px;
    }
    .form textarea { 
      padding: 8px 15px;
      height: 125px;
    }
  }
   @media (min-width: 1440px) {
    .form textarea {
      height: 150px;
    }
  }
  .checkbox-title {
    border-bottom: 1px solid #C4C4C4;
  }
  .form input[type="radio"] {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
  }
  .form label {
    cursor: pointer;
  }
  .submit-btn {
    cursor: pointer;
    border: 1px solid #000000;
    background-color: #EAF9E2;
    border-radius: 5px;
  }
  .submit-btn:hover {
    background-color: #cae0bf;
  }
  .loader-bg {
    z-index: 9999;
    background-color: rgba(255,255,255, 0.5);
  }
  .loader {
    z-index: 9999;
    position: fixed;
    border: 16px solid #ccc;
    border-top: 16px solid #093F68;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
