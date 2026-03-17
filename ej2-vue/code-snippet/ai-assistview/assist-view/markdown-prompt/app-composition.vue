<template>
  <div id="container" style="height: 500px; width: 700px; margin: 0 auto;">
    <br />
    <ejs-aiassistview
      id="markdown-ai-assist"
      ref="aiassist"
      :prompt-suggestions="markdownSuggestions"
      :prompt-request="onPromptRequest"
      :toolbar-settings="toolbarSettings"
      :banner-template="bannerTemplate"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AIAssistViewComponent as EjsAiassistview } from "@syncfusion/ej2-vue-interactive-chat";

const aiassist = ref(null);

const markdownSuggestions = ref([
  "What is Markdown?",
  "How do I use bold?",
  "Show code block example",
]);

const markdownData = [
  {
    prompt: "What is Markdown?",
    response:
      "# Markdown Guide\n\nMarkdown is a lightweight markup language:\n\n" +
      "- **Headers:** Use `#`, `##`, `###`\n" +
      "- **Bold:** `**text**` for bold\n" +
      "- **Italic:** `*text*` for italic\n" +
      "- **Code:** Triple backticks for code blocks\n" +
      "- **Lists:** Use `-` for bullet points\n\n" +
      "It's simple and perfect for documentation.",
    suggestions: ["How do I use bold?", "Show code block example"],
  },
  {
    prompt: "How do I use bold?",
    response:
      "# Bold Text in Markdown\n\n" +
      "Use double asterisks `**text**` or double underscores `__text__`:\n\n" +
      "**This is bold text**\n\n" +
      "Both methods produce the same result.",
    suggestions: ["What is Markdown?", "Show code block example"],
  },
];

const toolbarSettings = {
  items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
  itemClicked: (args) => {
    if (args.item.iconCss === "e-icons e-refresh" && aiassist.value) {
      aiassist.value.ej2Instances.prompts = [];
      aiassist.value.ej2Instances.promptSuggestions = markdownSuggestions.value;
    }
  },
};

const bannerTemplate = () => ({
  template: `
    <div class="banner-content">
      <div class="e-icons e-assistview-icon"></div>
      <h3>Markdown Helper</h3>
      <i>Ask about Markdown syntax — bold, italics, headers, lists, code blocks, etc.</i>
    </div>
  `,
});

const onPromptRequest = (args) => {
  setTimeout(() => {
    if (!aiassist.value) return;

    const instance = aiassist.value.ej2Instances;
    const found = markdownData.find((item) => item.prompt === args.prompt);

    const defaultResponse =
      "For real-time Markdown help or more advanced questions, connect this component to an actual AI model (OpenAI, Gemini, Claude, etc.).";

    if (found) {
      instance.addPromptResponse(found.response);
      instance.promptSuggestions = found.suggestions || markdownSuggestions.value;
    } else {
      instance.addPromptResponse(defaultResponse);
      instance.promptSuggestions = markdownSuggestions.value;
    }
  }, 1200);
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>