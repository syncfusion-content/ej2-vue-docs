---
layout: post
title: Templates in Vue AI AssistView component | Syncfusion
description: Checkout and learn about templates with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue AI AssistView component

The AI AssistView component offers several template options to customize the banner, prompt items, response items, suggestions, and footer.

## Banner template

The [bannerTemplate](../api/ai-assistview#bannertemplate) property allows for the display of custom content, such as a welcome note or introductory instructions, at the top of the AI AssistView's conversation area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/banner/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/banner/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/banner" %}

## Prompt item template

To customize the appearance of prompt items, use the [promptItemTemplate](../api/ai-assistview#promptitemtemplate) with an `ng-template` directive. The template's context provides `prompt`, `toolbarItems`, and `index` items for tailored rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/promptItem/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/promptItem/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/promptItem" %}

## Response item template

The [responseItemTemplate](../api/ai-assistview#responseitemtemplate) can be utilized with an `ng-template` directive to modify the layout of response items. The available context includes `prompt`, `response`, `index`, `toolbarItems`, and `output`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/responseItem/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/responseItem/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/responseItem" %}

## Prompt suggestion item template

For customizing the prompt suggestion items, the [promptSuggestionItemTemplate](../api/ai-assistview#promptsuggestionitemtemplate) can be implemented using an `ng-template` directive. The context for this template includes the `index` and `promptSuggestion` items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItem/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItem/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/promptSuggestionItem" %}

## Footer template

The [footerTemplate](../api/ai-assistview#footertemplate) property offers a way to replace the default footer and manage prompt request actions. This enables the creation of unique footers that can include custom functionalities, such as a character counter or a button to clear the conversation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/footer/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/footer/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/footer" %}
