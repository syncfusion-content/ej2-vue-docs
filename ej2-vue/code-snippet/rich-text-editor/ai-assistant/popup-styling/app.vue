<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor 
            id="default" 
            ref="rteInstance" 
            :toolbarSettings="toolbarSettings"
            @aiAssistantRequest="onPromptRequest">
          </ejs-richtexteditor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";

export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data: function() {
    return {
      toolbarSettings: {
        items: ['AICommands', 'AIQuery']
      }
    };
  },
  methods: {
    onPromptRequest: function(event) {
      setTimeout(() => {
        const rteInstance = this.$refs.rteInstance.ej2Instances;
        rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
        rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
      }, 5000);
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css"; 
</style>