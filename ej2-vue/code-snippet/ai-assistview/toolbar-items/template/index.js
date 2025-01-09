import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { DropDownButton } from '@syncfusion/ej2-vue-splitbuttons';

Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' :toolbar-settings="toolbarSettings" :prompt-request="onPromptRequest" :created="onCreated" ref="aiassist"></ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
      toolbarSettings: {
        items: [
          { type: 'Input', align: 'Right', template: '<button id="ddMenu"></button>' }
        ]
      },
      dropdownItems: [
        {
          text: 'हिंदी'
        },
        {
          text: 'தமிழ்'
        },
        {
          text: 'తెలుగు'
        }
      ]
    }
  },
  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    },
    onCreated() {
      new DropDownButton({
        items: this.dropdownItems,
        iconCss: 'e-icons e-translate',
        cssClass: 'custom-dropdown',
        content: 'English'
      }, '#ddMenu');
    }
  }

});