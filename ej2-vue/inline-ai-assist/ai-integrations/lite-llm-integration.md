---
layout: post
title: LiteLLM With Vue Inline AI Assist component | Syncfusion
description:  Checkout and learn about Integration of LiteLLM With Vue Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Inline AI Assist with LiteLLM

The **Inline AI Assist** component can also be integrated with [LiteLLM](https://docs.litellm.ai/docs), an open-source proxy that provides a unified, OpenAI-compatible API for multiple LLM providers such as [OpenAI](https://openai.com) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).

In this setup:
- **Inline AI Assist** serves as the user interface for entering prompts.
* Prompts are sent to the **LiteLLM proxy**, which forwards them to the configured LLM provider.
* The LLM provider processes the prompt and returns a response through LiteLLM.
* This enables **natural language understanding** and **context-aware responses** without changing the Inline AI Assist integration logic, as LiteLLM uses the same OpenAI-style API.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version **16 or higher** with **npm** installed.
* **OpenAI Account**: Access to OpenAI services and a generated **API key**.
* **Python**: Required to run the **LiteLLM proxy**.
* **Syncfusion Inline AI Assist**: Install the package [@syncfusion/ej2-vue-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-vue-interactive-chat).
* **Marked Library**: For parsing Markdown responses

```Shell
npm install marked --save
```

## Configure Inline AI Assist with LiteLLM

To integrate **LiteLLM** with the **Syncfusion Inline AI Assist** component, update your **App.vue** file. The component will send user prompts to the LiteLLM proxy, which forwards them to the configured LLM provider (e.g., **OpenAI** or **Azure OpenAI**) and returns natural language responses.

In this example:
* The [promptRequest](https://ej2.syncfusion.com/vue/documentation/api/inline-ai-assist/inlineaiassistmodel#promptrequest) event sends the user prompt to the LiteLLM proxy at `/v1/chat/completions`.
* The proxy uses the **model alias** defined in `config.yaml` (e.g., `openai/gpt-4o-mini`) and routes the request to the actual LLM provider.
* The response is parsed as **Markdown** using the `marked` library and displayed in the Inline AI Assist component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/App.vue)" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/App.vue)" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/app.vue %}
{% endhighlight %}
{% highlight yaml tabtitle="config.yaml" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/config.yaml %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/ai-integrations/lite-llm" %}

## Run and test

### Start the proxy:

Navigate to your project folder and run the following command to start the proxy:

```bash
pip install "litellm[proxy]"
litellm --config "./config.yaml" --port 4000 --host 0.0.0.0
```

### Start the frontend:

In a separate terminal window, navigate to your project folder and start the development server:

```bash
npm run serve
```

Open your app to interact with the Inline AI Assist component integrated with LiteLLM.

## Troubleshooting
* `401 Unauthorized`: Verify your `API_KEY` and model deployment name.
* `Model not found`: Ensure model matches `model_name` in `config.yaml`.
* `CORS issues`: Configure `router_settings.cors_allow_origins` properly.
