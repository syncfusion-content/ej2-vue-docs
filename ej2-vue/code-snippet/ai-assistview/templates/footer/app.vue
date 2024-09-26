<template>
  <div id='container' style="height: 350px; width: 650px;">
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
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },
  data: function () {
    return {
    }
  },
  methods: {
    buttonClick: () => {
      let defaultAiassist = this.$refs.aiassist.ej2Instances;
      const textArea = document.getElementById('promptTextArea');
      if (textArea) {
        textArea.value = '';
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
