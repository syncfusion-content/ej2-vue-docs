import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple} from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' active-view="1" :prompt-request="onPromptRequest" ref="aiassist">
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
`,

  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 2000);
    }
  }

});