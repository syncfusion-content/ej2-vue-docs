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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";

const aiassist = ref(null);

const toolbarSettings = {
  items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
  itemClicked: (args) => {
    if (args.item.iconCss === "e-icons e-refresh" && aiassist.value) {
      aiassist.value.ej2Instances.prompts = [];
    }
  },
};

const speechToTextSettings = {
  enable: true,
        // Set language for speech recognition
        lang: 'en-US',
        // Enable interim results to get real-time transcription
        allowInterimResults: true,
        // Customize the microphone button appearance and text
        buttonSettings: {
            content: 'Start Recording',
            stopContent: 'Stop Recording',
            iconCss: 'e-icons e-microphone',
            stopIconCss: 'e-icons e-microphone-off'
        }
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    if (!aiassist.value || !args.prompt.trim()) return;

    const instance = aiassist.value.ej2Instances;

    const defaultResponse =
      "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";

    instance.addPromptResponse(defaultResponse, true);
  }, 1200);
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