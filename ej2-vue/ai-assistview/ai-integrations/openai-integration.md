---
layout: post
title: Azure Open AI With Vue AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Azure Open AI With Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Open AI With Vue AI AssistView component 

The Syncfusion AI AssistView supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your Vue applications.

## Getting Started with the AI AssistView component

Before integrating Azure Open AI, ensure that the Syncfusion AI AssistView control is correctly rendered in your Vue app:

[Vue Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to `Azure Open AI` services and a generated API key.I
* Syncfusion AI AssistView for Vue `@syncfusion/ej2-vue-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-vue-interactive-chat --save

```

## Generate Azure API Key

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource. 

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL.  

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version (e.g., 2024-07-01-preview) matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Integration Open AI with AI AssistView

Create `src/App.js` to integrate the Azure Open AI with AI AssistView component

* Update the following configuration values with your Azure Open AI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

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

Open `http://localhost:8080` to interact with your Azure Open AI for dynamic response.
