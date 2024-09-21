<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' bannerTemplate="bannerTemplate" ref="aiassist" :prompt-request="onPromptRequest">
      <template v-slot:bannerTemplate="">
        <div class="banner-content">
          <div class="e-icons e-assistview-icon"></div>
          <h3>AI Assistance</h3>
          <div>Your everyday AI companion.</div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const onPromptRequest = (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
