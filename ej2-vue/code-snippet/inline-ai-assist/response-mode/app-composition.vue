<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <div style="margin-bottom:8px;">
      <label>Response Mode:
        <select v-model="responseMode">
          <option value="Inline">Inline</option>
          <option value="Popup">Popup</option>
        </select>
      </label>
    </div>
    <ejs-inlineaiassist ref="inlineAiAssist" popup-width="500px" :responseMode="responseMode" :prompt-request="onPromptRequest"></ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, onMounted, watch } from 'vue';

let responseMode = ref('Popup');
let inlineAiAssist = ref(null);

const onPromptRequest = (args) => {
  const prompt = args.prompt;
  setTimeout(() => {
    const sampleResponse = "**You asked:** " + prompt + "\n" +
      "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
      "In your real application, send the prompt to an AI service here.";
    if (inlineAiAssist.value && inlineAiAssist.value.addResponse) {
      inlineAiAssist.value.addResponse(sampleResponse, true);
    }
  }, 1000);
};

onMounted(() => {
  if (inlineAiAssist.value) {
    if (inlineAiAssist.value.appendTo) {
      inlineAiAssist.value.appendTo('#container');
    }
    if (inlineAiAssist.value.showPopup) {
      inlineAiAssist.value.showPopup();
    }
  }
});

watch(responseMode, (newVal) => {
  if (inlineAiAssist.value) {
    inlineAiAssist.value.responseMode = newVal;
    if (inlineAiAssist.value.showPopup) {
      inlineAiAssist.value.showPopup();
    }
  }
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>
