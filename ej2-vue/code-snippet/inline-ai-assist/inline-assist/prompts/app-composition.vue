<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <button id="summarizeBtn" @click="showPopup">Open Inline AI Assist</button>
    <div id="editableText" contenteditable="true" style="min-height:80px;border:1px solid #ccc;padding:8px;margin-top:8px;">Editable content goes here.</div>
    <ejs-inlineaiassist :prompts="promptsData" relate-to="#summarizeBtn" popup-width="500px" :prompt-request="onPromptRequest" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let inlineAiAssist = ref(null);

const promptsData = [
  {
    prompt: 'What is AI?',
    response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
  }
];

const responseSettings = {
  itemSelect: (args) => {
    if (args.command.label === 'Accept') {
      const editable = document.getElementById('editableText');
      if (editable && inlineAiAssist.value && inlineAiAssist.value.prompts) {
        editable.innerHTML = '<p>' + inlineAiAssist.value.prompts[inlineAiAssist.value.prompts.length - 1].response + '</p>';
      }
      if (inlineAiAssist.value) inlineAiAssist.value.hidePopup();
    } else if (args.command.label === 'Discard') {
      if (inlineAiAssist.value) inlineAiAssist.value.hidePopup();
    }
  }
};

const onPromptRequest = (args) => {
  const prompt = args.prompt;
  setTimeout(() => {
    const foundPrompt = promptsData.find((p) => p.prompt === prompt);
    const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    if (inlineAiAssist.value && inlineAiAssist.value.addResponse) {
      inlineAiAssist.value.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
    }
  }, 1000);
};

const showPopup = () => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) inlineAiAssist.value.showPopup();
};
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
