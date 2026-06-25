<template>
  <div id='container'>
    <br>
    <ejs-aiassistview 
      id="aiAssistView" 
      ref="aiAssistViewRef"
      :prompts="prompts"
      :blockTemplate="blockTemplate"
      :prompt-request="onPromptRequest"
    ></ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";
import { ref, provide } from "vue";

// Provide modules
provide('aiassistview', [AssistThinking]);

// Template ref
const aiAssistViewRef = ref(null);

// Block template function
const blockTemplate = (data) => {
  const block = data.block;
  const stagesHtml = (block.stages || [])
    .map(s => `<li>${s.content}</li>`)
    .join('');
  return `
    <div class="custom-thinking-block">
      <div class="custom-thinking-title">
        <span class="e-icons ${block.isActive ? 'e-spinner' : 'e-check'}"></span>
        <strong>${block.title || 'Thinking'}</strong>
      </div>
      <ul class="custom-thinking-stages">${stagesHtml}</ul>
    </div>
  `;
};

// Prompts data directly
const prompts = [
  {
    prompt: 'What is the capital of France?',
    response: 'The capital of France is Paris.',
    blocks: [
      {
        blockType: 'thinking',
        title: 'Fact lookup',
        isActive: false,
        collapsed: false,
        collapsible: false,
        stages: [
          { id: 'step1', status: 'completed', content: 'Checked knowledge base for European capitals.' }
        ]
      }
    ]
  }
];

// Handle prompt request
const onPromptRequest = () => {
  setTimeout(() => {
    const inst = aiAssistViewRef.value.ej2Instances;
    inst.addPromptResponse({
      blocks: [],
      response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
    }, true);
  }, 1000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>