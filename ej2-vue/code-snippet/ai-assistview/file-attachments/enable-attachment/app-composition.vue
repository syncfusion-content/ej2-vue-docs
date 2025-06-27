<template>
   <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <ejs-aiassistview id="aiAssistView" ref="aiassist" :promptRequest="onPromptRequest" :enableAttachments="true" ></ejs-aiassistview>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { enableRipple } from '@syncfusion/ej2-base';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';

enableRipple(true); 

const aiassist = ref(null);

// Prompt request handler
const onPromptRequest = () => {
  setTimeout(() => {
    const aiAssistInstance = aiassist.value?.ej2Instances;
    const defaultResponse =
      'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiAssistInstance.addPromptResponse(defaultResponse);
  }, 1000);
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

</style>