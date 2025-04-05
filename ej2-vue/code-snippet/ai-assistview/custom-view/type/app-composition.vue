<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-request="onPromptRequest" ref="aiassist">
      <e-views>
        <e-view type="Assist" name="Prompt"></e-view>
        <e-view type="Custom" name="Response" icon-css="e-icons e-comment-show" view-template="viewTemplate2">
          <template v-slot:viewTemplate2="">
            <div class="view-container"><h5>Response view content</h5></div>
          </template>
        </e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview, ViewDirective as EView, ViewsDirective as EViews } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const onPromptRequest (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 1000);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

.view-container {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
