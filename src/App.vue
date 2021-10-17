<template>
  <div v-if="showForm">
    <Form @closeForm="handleFromCollapse" />
  </div>
  <div v-if="!showForm">
    <TitleBar />
    <Hero @openForm="handleFromCollapse" />
    <Services />
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
import ServiceFlow from "./components/ServiceFlow.vue";
import Contact from "./components/Contact.vue";

export default defineComponent({
  name: 'App',
  components: { Form, TitleBar, Hero, Services, ServiceFlow, Contact },
  setup() {
    const showForm = ref(false)

    const handleFromCollapse = () => {
      showForm.value = !showForm.value
    }

    return { showForm, handleFromCollapse }
  }
})
</script>
