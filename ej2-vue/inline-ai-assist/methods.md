---
layout: post
title: Methods in Vue Inline AI Assist component | Syncfusion
description: Checkout and learn about methods with Vue Inline AI Assist component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue Inline AI Assist component

## Adding response

You can use the [addResponse](../api/inline-ai-assist#addresponse) public method to add the response to the Inline AI Assist.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/add-response/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/add-response/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/add-response" %}

## Executing prompt

You can use the [executePrompt](../api/inline-ai-assist#executeprompt) method to execute the prompts dynamically in the Inline AI Assist. It accepts prompts as string values, which triggers the [promptRequest](../api/inline-ai-assist#promptrequest) event and performs the callback actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/execute-prompt" %}

## Showing popup

You can use [showPopup](../api/inline-ai-assist#showPopup) method to open the Inline AI Assist popup and optionally position it at specified coordinates.

## Hiding popup

You can use [hidePopup](../api/inline-ai-assist#hidePopup) method to close the Inline AI Assist popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-popup/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-popup/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-popup" %}

## Showing command popup

Use [showCommandPopup](../api/inline-ai-assist#showCommandPopup) to open the command action popup; it only opens when the Inline AI Assist popup is already opened.

## Hiding command popup

You can use [hideCommandPopup](../api/inline-ai-assist#hideCommandPopup) to close the command action popup in the Inline AI Assist control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-command-popup/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-command-popup/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-command-popup" %}
