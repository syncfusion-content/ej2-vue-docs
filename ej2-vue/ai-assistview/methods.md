---
layout: post
title: Methods in Vue AI AssistView component | Syncfusion
description: Checkout and learn about templates with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue AI AssistView component

## Adding prompt response

You can use the [addPromptResponse](../api/ai-assistview#addpromptresponse) public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding responses as string.

You can add a response as a string by passing it as an argument to the `addPromptResponse('Response')` method. This will append the response to the last prompt added to the conversation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/response-string/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/response-string/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-string" %}

### Adding responses as object.

You can add an object response by passing the prompt and response as a collection to the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method. This will add a new prompt and its corresponding response to the AI AssistView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/response-object/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/response-object/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-object" %}

## Executing prompt

You can use the [executePrompt](../api/ai-assistview#executeprompt) method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the [promptRequest](../api/ai-assistview#promptrequest) event and performs the callback actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/executePrompt/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/executePrompt/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/executePrompt" %}
