<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' footer-template="footerTemplate" ref="aiassist">
      <template v-slot:footerTemplate="">
        <div class="custom-footer">
          <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
          <button id="sendPrompt" class="e-btn e-primary" @click="buttonClick">Generate</button>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const buttonClick = () => {
  const textArea = document.getElementById('promptTextArea');
  if (textArea) {
    textArea.value = '';
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

.custom-footer {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: transparent;
}

#promptTextArea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

#sendPrompt {
  padding: 5px 15px;
  align-self: flex-end;
}
</style>
