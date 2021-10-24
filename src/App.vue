<template>
  <div v-if="showForm">
    <Form @closeForm="handleFromCollapse" />
  </div>
  <div v-if="!showForm">
    <TitleBar />
    <Hero @openForm="handleFromCollapse" />
    <Services />
    <Telegram />
    <div class="md:block hidden">
      <Example />
    </div>
    <div class="md:hidden block">
      <ExampleCp />
    </div>
    <ServiceFlow />
    <Contact @openForm="handleFromCollapse" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

import Form from "./components/Form.vue";
import TitleBar from "./components/TitleBar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Telegram from "./components/Telegram.vue";
import Example from "./components/Example.vue";
import ExampleCp from "./components/Example-cp.vue";
import ServiceFlow from "./components/ServiceFlow.vue";
import Contact from "./components/Contact.vue";

export default defineComponent({
  name: 'App',
  components: { Form, TitleBar, Hero, Services, Telegram, Example, ExampleCp, ServiceFlow, Contact },
  setup() {
    const showForm = ref(false)

    const handleFromCollapse = () => {
      showForm.value = !showForm.value
    }

    return { showForm, handleFromCollapse }
  }
})
</script>
