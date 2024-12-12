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

The AI AssistView provides several template options to customize the banner, prompt, response, suggestions and footer items.

## Banner template

You can use the [bannerTemplate](../api/ai-assistview#bannertemplate) property to display additional information, such as a welcome note, and more in the AI AssistView. This banner is positioned at the top of the prompt and response conversation area within the AI AssistView.

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

You can use the [promptItemTemplate](../api/ai-assistview#promptitemtemplate) property to customize the prompt items in the AI AssistView. The template context includes `prompt`, `toolbarItems` and `index` items.

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

You can use the [responseItemTemplate](../api/ai-assistview#responseitemtemplate) property to customize response items within the AI AssistView. The template context includes the `prompt`, `response`, `index`, `toolbarItems` and `output` items.

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

You can use the [promptSuggestionItemTemplate](../api/ai-assistview#promptsuggestionitemtemplate) property to customize the prompt suggestion items in the AI AssistView. The template context includes the `index` and `promptSuggestion`.

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

You can use the [footerTemplate](../api/ai-assistview#footertemplate) property to customize the default footer area and manage prompt request actions in the AI AssistView. This allows users to create unique footers that meet their specific needs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/footer/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/templates/footer/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/footer" %}
