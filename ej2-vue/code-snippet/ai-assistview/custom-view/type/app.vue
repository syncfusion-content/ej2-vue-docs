<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-request="onPromptRequest" ref="aiassist">
      <e-views>
        <e-view type="Assist" name="Prompt"></e-view>
        <e-view type="Custom" name="Response" icon-css="e-icons e-comment-show" view-template="viewTemplate2">
          <template v-slot:viewTemplate2="">
            <div class="view-container"><h3>Response view content</h3></div>
          </template>
        </e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent, ViewDirective, ViewsDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
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
