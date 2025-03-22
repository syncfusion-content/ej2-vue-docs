<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' responseItemTemplate="responseItemTemplate" :prompts="promptsData" :prompt-request="onPromptRequest" ref="aiassist">
      <template v-slot:responseItemTemplate="{data}">
        <div class="responseItemContent">
          <div class="response-header">
            <span class="e-icons e-assistview-icon"></span>
            AI Assist
          </div>
          <div class="assist-response-content" v-html="data.response"></div>
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
      promptsData: [
        {
          prompt: "What is AI?",
          response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
        }
      ]
    }
  },
  methods: {
    onPromptRequest: function (args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let foundPrompt = this.promptsData.find((promptObj) => promptObj.prompt === args.prompt);
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
      }, 1000);
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

.e-assistview-icon:before {
  margin-right: 10px;
}

.responseItemContent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px
}

.responseItemContent .response-header {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.responseItemContent .assist-response-content {
  margin-left: 35px;
}

.responseItemContent .response-header .e-assistview-icon:before {
  margin-right: 10px;
}

#aiAssistView .e-response-item-template .e-toolbar-items {
  margin-left: 35px;
}
</style>
