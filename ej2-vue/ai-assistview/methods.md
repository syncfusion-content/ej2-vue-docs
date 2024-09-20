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

You can use the `addPromptResponse` public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding responses as string.

You can add string response, by passing it as argument for the `addPromptResponse('Response')` method which adds as the response of last added prompt.

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

You can add object response, by passing the prompt and response as a collection as argument for the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method which adds as a new prompt and response in the AI AssistView.

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

You can use the `executePrompt` method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the `promptRequest` event and performs the callback actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/executePrompt/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/methods/executePrompt/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/executePrompt" %}
