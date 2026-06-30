---
layout: post
title: Generative UI in Vue AI AssistView component | Syncfusion
description: Checkout and learn about generative UI with Vue AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Generative UI in Vue AI AssistView component

The `Generative UI` feature in AI AssistView allows you to render dynamic tools and UI elements within the AI AssistView. This enables seamless integration of interactive components based on AI-generated responses.

## Register tools

You can register custom tools using the [registerToolUI](../api/ai-assistview#registertoolui) method. It accepts tool name as string values, template as string or function and optional handler function. Tools are invoked by their name within block responses added through `addPromptResponse` method.

> **Note:** Use the blockType as `tool` and provide the tool name with the required properties through props. Tool should be registered before adding in responses and tool name should be unique.

### Configure tool template and handler

When registering a tool, you can configure its visual representation using template and optionally provide a handler function for custom behavior. The template defines the tool's UI, and the handler receives the container element and additional arguments for implementing interactive functionality.

## Add tools in prompt responses

Use the [addPromptResponse](../api/ai-assistview#addpromptresponse) method to dynamically add tools to AI responses by passing the tool blocks in block response.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/generative-ui/add-tool-response/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/generative-ui/add-tool-response/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/generative-ui/add-tool-response" %}


## Configure AI for generative UI responses

To integrate AI responses with tool-based rendering, you need to configure the AI service to return structured JSON blocks through system prompt. This ensures that AI-generated content is properly formatted and rendered as interactive tools or text blocks.

The following example demonstrates how to connect your AI service to generate and display dynamic UI components within the AI AssistView.


```html
<template>
  <div class="generative-aiassistview">
    <ejs-aiassistview ref="aiAssistViewRef" :enableStreaming="true" :promptSuggestions="suggestions" :promptRequest="onPromptRequest">
      <!-- Weather Tool Template -->
      <template v-slot:weatherTemplate="{ data }">
        <div tabindex="0" class="e-card" role="button">
          <div class="e-card-header">
            <div class="e-card-header-caption">
              <div class="e-card-header-title">
                {{ data.location }}
              </div>
              <div class="e-card-sub-title">
                {{ data.temperature }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </ejs-aiassistview>
  </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    "ejs-aiassistview": AIAssistViewComponent
  },

  data() {
    return {
      suggestions: [
        "What is the weather in Chennai?",
        "What is the weather in New York?"
      ],
      systemPrompt: `
You are an AI assistant that generates Syncfusion AIAssistView blocks.

Return ONLY valid JSON.

Output format:
{
  "blocks": [
    {
      "blockType": "text",
      "content": "Description"
    },
    {
      "blockType": "tool",
      "toolName": "toolname",
      "props": { }
    }
  ]
}

Rules:
1. Always return a single "blocks" array.
2. Return ONLY valid JSON.
3. You may return ANY number of blocks.
4. For weather queries, use toolName "weather-tool".
`
    };
  },

  mounted() {
    const inst = this.$refs.aiAssistViewRef.ej2Instances;

    // Register Weather Tool
    inst.registerToolUI({
      toolName: "weather-tool",
      template: "weatherTemplate"
    });
  },

  methods: {
    async onPromptRequest(args) {
      const inst = this.$refs.aiAssistViewRef.ej2Instances;

      const apiKey = ""; // your API key
      const url = ""; // your endpoint

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey
          },
          body: JSON.stringify({
            model: "gpt-5",
            messages: {
              messages: [
                { role: "system", content: this.systemPrompt },
                { role: "user", content: args.prompt }
              ]
            },
            max_output_tokens: 1000
          })
        });

        const reply = await response.json();

        const message = reply.output?.find(
          (item) => item.type === "message"
        );

        const jsonText = message?.content?.[0]?.text || "{}";

        let aiData = {};
        try {
          aiData = JSON.parse(jsonText);
        } catch {
          aiData = {
            blocks: [
              { blockType: "text", content: "Invalid AI response" }
            ]
          };
        }

        inst.addPromptResponse({ blocks: aiData.blocks });

      } catch (error) {
        inst.addPromptResponse({
          blocks: [
            {
              blockType: "text",
              content: "We could not reach the AI service."
            }
          ]
        });
      }
    }
  }
};
</script>

<style>

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/ai-assistview/index.css";

.generative-aiassistview {
  height: 600px;
  width: 65vw;
  margin: 0 auto;
}
</style>

```

## See Also

* [About response blocks](./chain-of-thoughts.md)
