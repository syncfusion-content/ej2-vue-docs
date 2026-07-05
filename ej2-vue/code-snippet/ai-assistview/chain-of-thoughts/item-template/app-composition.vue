<template>
  <div id='container'">
    <br>
    <ejs-aiassistview 
      id='aiAssistView' 
      ref='aiAssistView'
      :prompts="prompts" 
      :prompt-request="onPromptRequest"
      :itemTemplate="stageItemTemplate"
    ></ejs-aiassistview>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { AIAssistViewComponent, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";

// Provide AssistThinking module
provide('aiassistview', [AssistThinking]);

// Ref for component instance
const aiAssistView = ref(null);

// Prompts data
const prompts = ref([
  {
    prompt: 'Explain the water cycle.',
    response: 'The water cycle describes how water moves continuously through the environment via evaporation, condensation, and precipitation.',
    blocks: [
      {
        blockType: 'thinking',
        title: 'Understanding your request',
        collapsed: true,
        collapsible: true,
        isActive: false,
        stages: [
          { id: 'step1', status: 'completed', iconCss: 'e-icons e-check', content: 'Identified request as a water cycle explanation.' }
        ]
      },
      {
        blockType: 'thinking',
        title: 'Summarizing key stages',
        collapsed: true,
        collapsible: true,
        isActive: false,
        stages: [
          { id: 'step2', status: 'completed', iconCss: 'e-icons e-check', content: 'Summarized key stages concisely.' }
        ]
      },
      {
        blockType: 'thinking',
        title: 'Composing response',
        collapsed: true,
        collapsible: true,
        isActive: false,
        stages: [
          { id: 'step3', status: 'completed', iconCss: 'e-icons e-check', content: 'Composed a clear single-paragraph response.' }
        ]
      }
    ]
  }
]);

// Stage item template method
const stageItemTemplate = (data) => {
  const item = data.item;
  const statusClass = item.isStageInProgress ? 'e-stage-inprogress' : 'e-stage-done';
  return `
    <div class="custom-stage-item ${statusClass}">
        <span class="e-icons ${item.iconCss || item.dotCss}"></span>
        <div class="custom-stage-content">${item.content}</div>
    </div>
  `;
};

// Prompt request handler
const onPromptRequest = () => {
  setTimeout(() => {
    aiAssistView.value.ej2Instances.addPromptResponse({
      response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
    }, true);
  }, 1000);
};
</script>

<style scoped>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>