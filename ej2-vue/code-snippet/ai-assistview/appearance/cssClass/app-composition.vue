<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' ref="aiassist" :css-class="cssClass" :prompt-request="onPromptRequest"></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const cssClass = 'custom-container';

const onPromptRequest = (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";

.e-aiassistview.custom-container {
  border-color: #e0e0e0;
  background-color: #f4f4f4;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.2);
}
.e-aiassistview.custom-container .e-view-header .e-toolbar,
.e-aiassistview.custom-container .e-view-header .e-toolbar-items {
  background: #d5d5d5;
}
.e-aiassistview.custom-container .e-view-content .e-input-group {
  border: 3px solid #e0e0e0;
}
</style>
