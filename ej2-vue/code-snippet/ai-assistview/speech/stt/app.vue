<template>
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
    />
  </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    "ejs-aiassistview": AIAssistViewComponent,
  },

  data() {
    return {
      toolbarSettings: {
        items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
        itemClicked: this.toolbarItemClicked,
      },

      speechToTextSettings: {
        enable: true
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
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
.banner-content {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 300px;
text-align: center;
padding: 0 20px;
}

.banner-content .e-listen-icon:before {
font-size: 48px;
margin-bottom: 16px;
color: #006ce6;
}
#container {
  max-width: 90vw;
}
</style>