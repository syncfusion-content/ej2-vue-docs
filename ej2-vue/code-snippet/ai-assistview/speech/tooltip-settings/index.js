import Vue from "vue";
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
  el: "#app",
  template: `
    <div id="container" style="height: 500px; width: 700px; margin: 0 auto;">
      <br />
      <ejs-aiassistview
        id="aiAssistView"
        ref="aiassist"
        :prompt-request="onPromptRequest"
        :toolbar-settings="toolbarSettings"
        :speech-to-text-settings="speechToTextSettings"
        banner-template="bannerTemplate"
    />
    <template v-slot:bannerTemplate="{ data }">
        <div class="banner-content">
          <div class="e-icons e-listen-icon"></div>
          <h3>Speech to Text Demo</h3>
          <i>Click the microphone icon to start voice input → speak clearly</i>
        </div>
      </template>
    </div>
  `,

  data: function () {
    return {
      toolbarSettings: {
        items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
        itemClicked: this.toolbarItemClicked,
      },

      speechToTextSettings: {
        enable: true,
        tooltipSettings: {
            content: 'Click to start listening',
            stopContent: 'Click to stop listening',
            position: 'TopCenter'
        }
      },
    };
  },

  methods: {
    onPromptRequest(args) {
      setTimeout(() => {
        const instance = this.$refs.aiassist.ej2Instances;

        if (!args.prompt.trim()) return;

        const defaultResponse =
          "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";

        instance.addPromptResponse(defaultResponse, true);
      }, 1200);
    },

    toolbarItemClicked(args) {
      if (args.item.iconCss === "e-icons e-refresh") {
        const instance = this.$refs.aiassist.ej2Instances;
        instance.prompts = [];
      }
    },
  },
});