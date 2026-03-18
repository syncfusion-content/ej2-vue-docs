<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <button id="summarizeBtn" @click="showPopup">Open Inline AI Assist</button>
    <div id="editableText" contenteditable="true" style="min-height:80px;border:1px solid #ccc;padding:8px;margin-top:8px;">Editable content goes here.</div>
    <ejs-inlineaiassist relateTo = "#summarizeBtn" :prompt-request="onPromptRequest" :command-settings="commandSettings" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, onMounted } from "vue";

let inlineAiAssist = ref(null);

const commandSettings = {
  popupWidth: '500px',
  popupHeight: '200px',
  commands: [
    { label: 'Summarize', prompt: 'Summarize the content', groupBy: 'Improve content', iconCss: 'e-icons e-collapse-2', tooltip: 'Summarize' },
    { label: 'Shorten', prompt: 'Shorten the content', groupBy: 'Improve content', iconCss: 'e-icons e-shorten', tooltip: 'Shorten', disabled: true },
    { label: 'Translate', prompt: 'Translate the content', groupBy: 'Edit content', iconCss: 'e-icons e-translate' },
    { label: 'Make professional', prompt: 'Make the content more professional', groupBy: 'Edit content', iconCss: 'e-icons e-elaborate' }
  ],
  itemSelect: () => {
    // optional command item select handler
  }
};

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
    const sampleResponse = "**You asked:** " + prompt + "\n" +
      "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
      "In your real application, send the prompt to an AI service here.";
    if (inlineAiAssist.value && inlineAiAssist.value.addResponse) {
      inlineAiAssist.value.addResponse(sampleResponse, true);
    }
  }, 1000);
};

const showPopup = () => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) inlineAiAssist.value.showPopup();
};

onMounted(() => {
  showPopup();
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
