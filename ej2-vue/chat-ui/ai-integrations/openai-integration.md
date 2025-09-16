---
layout: post
title: Open AI in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Open AI with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Open AI With Chat UI component 

The Syncfusion Chat UI supports integration with (OpenAI)[https://platform.openai.com/docs/overview], enabling advanced conversational AI features in your Vue applications.

## Getting Started With the Chat UI Component

Before integrating Open AI, ensure that the Syncfusion Chat UI control is correctly rendered in your Vue application:
[ Vue Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* OpenAI account to generate an API key for accessing the `OpenAI` API
* Syncfusion Chat UI for React `@syncfusion/ej2-vue-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion Chat UI in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

## Generate API Key

1. Go to [Open AI](https://platform.openai.com/docs/overview) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on your profile icon in the top-right corner and select `API Keys` from the dropdown menu.  

3. Click the `+ Create new secret key` button. You’ll be prompted to name the key (optional). Confirm to generate the key.

4. Your API key will be displayed once. Copy it and store it securely, as it won’t be shown again.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Open AI with Chat UI

Create `src/App.vue` to integrate the Open AI with Chat UI component

> Add your generated `API Key` at the line 

```bash

const openaiApiKey = 'Place your API key here';  

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/ai-integrations/openai/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/ai-integrations/openai/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/ai-integrations/openai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm run serve

```

Open `http://localhost:5173` to interact with your Open AI for dynamic response.