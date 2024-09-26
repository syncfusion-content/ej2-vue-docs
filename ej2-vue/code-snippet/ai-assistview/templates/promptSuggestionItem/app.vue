<template>
  <div id='container' style="height: 350px; width: 650px;">
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
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },
  data: function () {
    return {
      promptSuggestions: [
        "Best practices for clean, maintainable code?",
        "How to optimize code editor for speed?"
      ]
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
        let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(args.prompt === defaultAiassist.promptSuggestions[0] ? response1 : args.prompt === defaultAiassist.promptSuggestions[1] ? response2 : defaultResponse);
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
</style>
