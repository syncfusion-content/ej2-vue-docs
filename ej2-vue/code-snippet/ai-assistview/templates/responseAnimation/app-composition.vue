<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' responseAnimationTemplate="responseAnimationTemplate" ref="aiassist" :prompt-request="onPromptRequest">
      <template v-slot:responseAnimationTemplate="">
        <div class="assistview-loading-status">
          <div class="assistview-grid-icon">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
          <span class="assistview-loading-label">Generating</span>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

let aiassist = ref(null);

const onPromptRequest = (args) => {
  setTimeout(() => {
    let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    aiassist.value.addPromptResponse(defaultResponse);
  }, 2000);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";

#aiAssistView .e-view-container {
  margin: auto;
}

.assistview-loading-status {
  display: flex;
  gap: 10px;
  color: #666;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.assistview-grid-icon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.assistview-grid-icon span {
  width: 4px;
  height: 4px;
  background: #8a8a8a;
  border-radius: 1px;
  opacity: 0.25;
  animation: assistview-pulse 1.8s ease-in-out infinite;
}

.assistview-grid-icon span:nth-child(1) { animation-delay: 0s; }
.assistview-grid-icon span:nth-child(2) { animation-delay: 0.1s; }
.assistview-grid-icon span:nth-child(3) { animation-delay: 0.2s; }
.assistview-grid-icon span:nth-child(4) { animation-delay: 0.3s; }
.assistview-grid-icon span:nth-child(5) { animation-delay: 0.4s; }
.assistview-grid-icon span:nth-child(6) { animation-delay: 0.5s; }
.assistview-grid-icon span:nth-child(7) { animation-delay: 0.6s; }
.assistview-grid-icon span:nth-child(8) { animation-delay: 0.7s; }
.assistview-grid-icon span:nth-child(9) { animation-delay: 0.8s; }

@keyframes assistview-pulse {
  0%,
  100% {
    opacity: 0.25;
  }
  50% {
    opacity: 1;
  }
}
</style>