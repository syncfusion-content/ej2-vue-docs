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

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    "ejs-aiassistview": AIAssistViewComponent,
  },

  data() {
    return {
      markdownSuggestions: [
        "What is Markdown?",
        "How do I use bold?",
        "Show code block example",
      ],

      markdownData: [
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
      ],

      toolbarSettings: {
        items: [{ iconCss: "e-icons e-refresh", align: "Right" }],
        itemClicked: this.toolbarItemClicked,
      },
    };
  },

  methods: {
    bannerTemplate() {
      return {
        template: `
          <div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>Markdown Helper</h3>
            <i>Ask about Markdown syntax — bold, italics, headers, lists, code blocks, etc.</i>
          </div>
        `,
      };
    },

    onPromptRequest(args) {
      setTimeout(() => {
        const instance = this.$refs.aiassist.ej2Instances;
        const found = this.markdownData.find((item) => item.prompt === args.prompt);

        const defaultResponse =
          "For real-time Markdown help or more advanced questions, connect this component to an actual AI model (OpenAI, Gemini, Claude, etc.).";

        if (found) {
          instance.addPromptResponse(found.response);
          instance.promptSuggestions = found.suggestions || this.markdownSuggestions;
        } else {
          instance.addPromptResponse(defaultResponse);
          instance.promptSuggestions = this.markdownSuggestions;
        }
      }, 1200);
    },

    toolbarItemClicked(args) {
      if (args.item.iconCss === "e-icons e-refresh") {
        const instance = this.$refs.aiassist.ej2Instances;
        instance.prompts = [];
        instance.promptSuggestions = this.markdownSuggestions;
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
</style>