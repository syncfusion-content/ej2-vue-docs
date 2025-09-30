---
layout: post
title: Azure Open AI in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Azure Open AI with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Azure Open AI With Chat UI component 

The Syncfusion Chat UI supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your Vue applications.

## Getting Started With the Chat UI Component

Before integrating Azure Open AI, ensure that the Syncfusion Chat UI control is correctly rendered in your Vue application:
[ Vue Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to `Azure Open AI` services and a generated API key.
* Syncfusion Chat UI for React `@syncfusion/ej2-vue-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion Chat UI in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

## Configure Azure Open AI

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource.  

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL.  

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version (e.g., 2024-07-01-preview) matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Integration Azure Open AI with Chat UI

Create `src/App.vue` to integrate the Azure Open AI with Chat UI component

* Update the following configuration values with your Azure Open AI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';  

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

Open `http://localhost:5173` to interact with your Azure Open AI for dynamic response.