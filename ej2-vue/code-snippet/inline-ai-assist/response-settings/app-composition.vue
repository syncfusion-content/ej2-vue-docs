<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
      <button id="summarizeBtn" @click="showPopup">Summarize</button>
      <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
    </div>

    <ejs-inlineaiassist popup-width="500px" :relate-to="'#summarizeBtn'" :prompt-request="onPromptRequest" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, onMounted, reactive } from "vue";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let inlineAiAssist = ref(null);

const responseSettings = reactive({
  items: [
    { label: 'Regenerate', iconCss: 'e-icons e-refresh', tooltip: 'Regenerate', groupBy: 'Actions' },
    { label: 'Copy', iconCss: 'e-icons e-copy', tooltip: 'Copy', groupBy: 'Actions' },
    { label: 'Regenerate (disabled)', iconCss: 'e-icons e-refresh', disabled: true, groupBy: 'Actions' },
    { label: 'Accept' },
    { label: 'Discard' }
  ],
  itemSelect: (args) => {
    const label = args && args.command && args.command.label ? args.command.label : '';
    if (label === 'Accept') {
      const editable = document.getElementById('editableText');
      if (editable && inlineAiAssist.value && inlineAiAssist.value.prompts) {
        const prompts = inlineAiAssist.value.prompts;
        const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
        if (last && last.response) {
          editable.innerHTML = '<p>' + last.response + '</p>';
        }
      }
      inlineAiAssist.value.hidePopup();
    } else if (label === 'Discard') {
      inlineAiAssist.value.hidePopup();
    } else if (label.indexOf('Copy') !== -1) {
      const prompts = inlineAiAssist.value && inlineAiAssist.value.prompts ? inlineAiAssist.value.prompts : [];
      const last = prompts.length ? prompts[prompts.length - 1] : null;
      if (last && last.response && navigator.clipboard) {
        navigator.clipboard.writeText(last.response).catch(() => {});
      }
    } else if (label.indexOf('Regenerate') !== -1) {
      const currentPrompt = inlineAiAssist.value && inlineAiAssist.value.getPrompt ? inlineAiAssist.value.getPrompt() : '';
      onPromptRequest({ prompt: currentPrompt });
    }
  }
});

const onPromptRequest = (args) => {
  const prompt = args && args.prompt ? args.prompt : '';
  setTimeout(() => {
    const sampleResponse = "**You asked:** " + prompt + "\n" +
      "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
      "In your real application, send the prompt to an AI service here.";
    inlineAiAssist.value.addResponse(sampleResponse, true);
  }, 1000);
};

const showPopup = () => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) {
    inlineAiAssist.value.showPopup();
  }
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
