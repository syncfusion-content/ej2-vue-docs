<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
      <button id="summarizeBtn" @click="showPopup">Summarize</button>
      <button id="toolbarBtn" @click="toggleToolbarPosition">Toggle Toolbar Position</button>
      <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
    </div>

    <ejs-inlineaiassist popup-width="500px"
      :relate-to="'#summarizeBtn'"
      :prompt-request="onPromptRequest"
      :inline-toolbar-settings="inlineToolbarSettings"
      :response-settings="responseSettings"
      ref="inlineAiAssist">
    </ejs-inlineaiassist>
  </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import { ref, reactive, onMounted } from 'vue';

enableRipple(true);

const inlineAiAssist = ref(null);

const promptsData = [
  {
    prompt: 'What is AI?',
    response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
  }
];

const inlineToolbarSettings = reactive({
  toolbarPosition: 'Bottom',
  items: [
    { iconCss: 'e-icons e-assistview-icon', align: 'Left' },
    { text: 'Welcome User !', align: 'Right' }
  ]
});

const responseSettings = reactive({
  itemSelect: (args) => {
    const label = args && args.command && args.command.label ? args.command.label : '';
    if (label === 'Accept') {
      const editable = document.getElementById('editableText');
      if (editable && inlineAiAssist.value && inlineAiAssist.value.prompts) {
        const prompts = inlineAiAssist.value.prompts;
        const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
        if (last && last.response) editable.innerHTML = '<p>' + last.response + '</p>';
      }
      inlineAiAssist.value.hidePopup();
    } else if (label === 'Discard') {
      inlineAiAssist.value.hidePopup();
    }
  }
});

const onPromptRequest = (args) => {
  const prompt = args && args.prompt ? args.prompt : '';
  setTimeout(() => {
    const found = promptsData.find(p => p.prompt === prompt);
    const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    inlineAiAssist.value.addResponse(found ? found.response : defaultResponse);
  }, 1000);
};

const toggleToolbarPosition = () => {
  inlineToolbarSettings.toolbarPosition = inlineToolbarSettings.toolbarPosition === 'Inline' ? 'Bottom' : 'Inline';
  if (inlineAiAssist.value) inlineAiAssist.value.inlineToolbarSettings.toolbarPosition = inlineToolbarSettings.toolbarPosition;
};

const showPopup = () => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) inlineAiAssist.value.showPopup();
};

onMounted(() => {
  if (inlineAiAssist.value && inlineAiAssist.value.showPopup) inlineAiAssist.value.showPopup();
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
