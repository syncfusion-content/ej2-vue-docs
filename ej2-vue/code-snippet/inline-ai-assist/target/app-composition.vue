<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-inlineaiassist target="#container" popup-width="500px" :prompt-request="onPromptRequest" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, onMounted } from "vue";

let inlineAiAssist = ref(null);

const onPromptRequest = (args) => {
  const prompt = args.prompt;
  setTimeout(() => {
    const sampleResponse = "**You asked:** " + prompt + "\n" +
      "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
      "In your real application, send the prompt to an AI service here.";
    inlineAiAssist.value.addResponse(sampleResponse, true);
  }, 1000);
};

onMounted(() => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) {
    inlineAiAssist.value.showPopup();
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
