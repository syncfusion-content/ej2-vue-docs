<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' promptSuggestionItemTemplate="promptSuggestionItemTemplate" :prompt-suggestions="promptSuggestions" :prompt-request="onPromptRequest" ref="aiassist">
      <template v-slot:promptSuggestionItemTemplate="{data}">
        <div class='suggestion-item active'>
          <span class="e-icons e-circle-info"></span>
          <div class="assist-suggestion-content">{{data.promptSuggestion}}</div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const promptSuggestions = [
  "Best practices for clean, maintainable code?",
  "How to optimize code editor for speed?"
];

const onPromptRequest = (args) => {
  setTimeout(() => {
    let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
    let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(args.prompt === aiassist.value.promptSuggestions[0] ? response1 : args.prompt === aiassist.value.promptSuggestions[1] ? response2 : defaultResponse);
  }, 1000);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

.e-aiassistview .e-views .e-suggestions li {
  padding: 0;
  border: none;
  box-shadow: none;
}

.suggestion-item {
  display: flex;
  align-items: center;
  background-color: #686868;
  color: white;
  padding: 4px 10px;
  opacity: 0.8;
  gap: 5px;
  height: 35px;
  border-radius: 5px;
}

.suggestion-item .content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
