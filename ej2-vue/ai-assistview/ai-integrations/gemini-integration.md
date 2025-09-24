---
layout: post
title: Gemini AI With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Gemini AI With Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Integration of Gemini AI With Vue AI AssistView component 

The Syncfusion AI AssistView supports integration with [Gemini](https://ai.google.dev/gemini-api/docs), enabling advanced conversational AI features in your Vue applications.

## Getting Started with the AI AssistView component

Before integrating Gemini AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your Vue app:

[Vue Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* Google account to generate API key on accessing `Gemini AI`
* Syncfusion AI AssistView for Vue `@syncfusion/ej2-vue-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

Install the Gemini AI dependencies

```bash

npm install @google/generative-ai

```

## Generate API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on `Get API Key` from the left-hand menu or the top-right corner of the dashboard. 

3. Click the “Create API Key” button. You’ll be prompted to either select an existing Google Cloud project or create a new one. Choose the appropriate option and proceed. 

4. After selecting or creating a project, your API key will be generated and displayed. Copy the key and store it securely, as it will only be shown once.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Gemini AI with AI AssistView

Create `src/App.Vue` to integrate the Gemini AI with AI AssistView component

* Add your generated `API Key` at the line 

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/gemini-ai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm run dev

```

Open `http://localhost:8080` to interact with your Microsoft Bot Framework chatbot.
