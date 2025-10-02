---
layout: post
title: LLM Model With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of LLM Model With Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integration of LLM via Ollama With AI AssistView component

The Syncfusion AI AssistView supports integration with [LLM via Ollama](https://ollama.com), enabling advanced conversational AI features in your applications. The component acts as a UI for a support bot, where user prompts are sent to the selected AI service via API calls.

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* [Ollama](https://ollama.com) application should be installed to run and manage LLM models locally.
* Syncfusion AI AssistView for Vue `@syncfusion/ej2-vue-interactive-chat` installed in your react project.

## Step 1: Getting Started with the AI AssistView component

Before integrating LLM model, ensure that the Syncfusion AI AssistView component is correctly rendered in your application:

[ Vue Getting Started Guide](../getting-started)

## Step 2: Install Dependencies

* Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

* Download and install `Ollama` based on your operating system:

{% tabs %}
{% highlight ts tabtitle="Windows" %}

1. Visit [Windows](https://ollama.com/download)
2. Click `Download for Windows` to get the `.exe installer`. 
3. Run `OllamaSetup.exe` and follow the wizard to install.

{% endhighlight %}

{% highlight ts tabtitle="MAC" %}

1. Visit [macOS](https://ollama.com/download/mac)
2. Click `Download for macOS` to get `.dmg file`
3. Install it by following the wizard.

{% endhighlight %}

{% highlight ts tabtitle="Linux" %}

1. Visit [Linux](https://ollama.com/download/linux)
2. Run the below command to install Ollama in your system 

```bash
          
curl -fSSL https://ollama.com/install.sh | sh

```

{% endhighlight %}
{% endtabs %}

## Step 3: Install and Run an Ollama Model

1. Download and run a model using the following command. Replace with your preferred model (e.g., `llama3`, `phi4`). See the [Ollama model](https://ollama.com/search) library for available models

```bash

ollama run deepseek-r1

```

2. Once the model download is complete, start the Ollama server to make the model accessible:

```bash

ollama serve

```

## Step 4: Integrate AI AssistView in React

Create `src/App.js` to connect the Syncfusion AI AssistView to the LLM model:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/llm-model/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/llm-model/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/llm-model" %}

## Step 5: Run and Test 

Run the application in the browser using the following command.

```bash

npm run dev

```

Open the hosted link to interact with your AI model where you can enter prompts and receive responses from the Ollama model.