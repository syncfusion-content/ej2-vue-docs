<template>
  <div id="container" style="height: 500px; width: 700px; margin: 0 auto;">
    <br />
    <ejs-aiassistview
      id="task-ai-assist"
      ref="aiassist"
      :prompt-suggestions="initialSuggestions"
      :prompt-request="onPromptRequest"
      :toolbar-settings="toolbarSettings"
      :prompts="promptsData"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";

const aiassist = ref(null);

const initialSuggestions = ref([
  "What tools or apps can help me prioritize tasks?",
  "How do I manage multiple projects effectively?",
]);

const promptsData = [
  {
    prompt: "What tools or apps can help me prioritize tasks?",
    response: `<div>Here are some effective task prioritization tools:
      <ul>
        <li><strong>Todoist:</strong> A robust task manager with priority levels and project organization.</li>
        <li><strong>Asana:</strong> Project management tool with timeline and board views.</li>
        <li><strong>Microsoft To Do:</strong> Simple and integrated with Microsoft ecosystem.</li>
        <li><strong>Notion:</strong> All-in-one workspace for notes, databases, and tasks.</li>
        <li><strong>ClickUp:</strong> Comprehensive tool with customizable workflows and prioritization features.</li>
      </ul>
    </div>`,
  },
  {
    prompt: "How do I manage multiple projects effectively?",
    response: `<div>Here are best practices for managing multiple projects:
      <ul>
        <li><strong>Use a centralized dashboard:</strong> Track all projects in one place.</li>
        <li><strong>Set clear milestones:</strong> Break down each project into manageable phases.</li>
        <li><strong>Prioritize tasks:</strong> Focus on high-impact items first.</li>
        <li><strong>Delegate effectively:</strong> Assign tasks to team members based on skills.</li>
        <li><strong>Regular reviews:</strong> Conduct weekly or bi-weekly project status meetings.</li>
      </ul>
    </div>`,
  },
];

const toolbarSettings = {
  items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
  itemClicked: (args) => {
    if (args.item.iconCss === "e-icons e-refresh" && aiassist.value) {
      aiassist.value.ej2Instances.prompts = [];
      aiassist.value.ej2Instances.promptSuggestions = initialSuggestions.value;
    }
  },
};

const onPromptRequest = (args) => {
  setTimeout(() => {
    if (!aiassist.value) return;

    const instance = aiassist.value.ej2Instances;
    const found = promptsData.find((item) => item.prompt === args.prompt);

    const defaultResponse =
      "For real-time answers or more advanced productivity advice, connect this component to an AI service like OpenAI, Gemini, Claude, etc.";

    if (found) {
      instance.addPromptResponse(found.response);
    } else {
      instance.addPromptResponse(defaultResponse);
    }
  }, 1400);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>