---
layout: post
title: Open AI With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Open AI With Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Open AI With Vue AI AssistView component 

The Syncfusion AI AssistView supports integration with [OpenAI](https://platform.openai.com/docs/overview), enabling advanced conversational AI features in your Vue applications.

## Getting Started with the AI AssistView component

Before integrating Open AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your Vue app:

[Vue Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* OpenAI account to generate an API key for accessing the `OpenAI` API
* Syncfusion AI AssistView for Vue `@syncfusion/ej2-vue-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

## Generate API Key

1. Go to [Open AI](https://platform.openai.com/docs/overview) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on your profile icon in the top-right corner and select `API Keys` from the dropdown menu.  

3. Click the `+ Create new secret key` button. You’ll be prompted to name the key (optional). Confirm to generate the key. 

4. Your API key will be displayed once. Copy it and store it securely, as it won’t be shown again.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Open AI with AI AssistView

Create `src/App.js` to integrate the Open AI with AI AssistView component

> Add your generated `API Key` at the line 

```bash

const openaiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm run dev

```

Open `http://localhost:8080` to interact with your Microsoft Bot Framework chatbot.
