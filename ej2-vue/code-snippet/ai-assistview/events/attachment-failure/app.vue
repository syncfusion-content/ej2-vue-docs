<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <br />
    <ejs-aiassistview id="aiAssistView" ref="aiassist" :attachmentUploadFailure="attachmentUploadFailure" :promptRequest="onPromptRequest" :enableAttachments="true" :attachmentSettings="attachmentSettings"
    ></ejs-aiassistview>
  </div>
</template>

<script>
import { enableRipple } from '@syncfusion/ej2-base';
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';

enableRipple(true); 

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },
  data() {
    return {
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
      }
    };
  },
  methods: {
    onPromptRequest() {
      setTimeout(() => {
        const aiAssistInstance = this.$refs.aiassist.ej2Instances;
        const defaultResponse =
          'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        aiAssistInstance.addPromptResponse(defaultResponse);
      }, 1000);
    },
    attachmentUploadFailure() {
      // your code will be here
    }
  }
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>