---
layout: post
title: Assist view in Vue AI AssistView component | Syncfusion
description: Checkout and learn about Assist view with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Assist view in Vue AI AssistView component

## Setting prompt text

You can use the [prompt](../api/ai-assistview#prompt) property to define the prompt text for the AI AssistView component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-text" %}

## Setting prompt placeholder

You can use the [promptPlaceholder](../api/ai-assistview#promptplaceholder) property to set the placeholder text for the prompt textarea. The default value is `Type prompt for assistance...`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/placeholder" %}

## Prompt-response collection

You can use the [prompts](../api/ai-assistview#prompts) property to initialize the component with the configured data as a collection of prompts and responses or individual entries.

> The [prompts](../api/ai-assistview#prompts) collection stores all the prompts and responses generated.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

## Adding prompt suggestions

You can use the [promptSuggestions](../api/ai-assistview#promptsuggestions) property, to add the suggestions in both initial and on-demand which help users to refine their prompts. Additionally, custom header can be set for suggestions further enhancing the user experience.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions" %}

### Adding suggestions header

You can use the [promptSuggestionsHeader](../api/ai-assistview#promptsuggestionsheader) property to set the header text for the prompt suggestions in the AI AssistView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions-header" %}

## Adding prompt iconCss

You can customize the appearance of the prompter avatar by using the [promptIconCss](../api/ai-assistview#prompticoncss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-icon" %}

## Adding response iconCss

You can use the [responseIconCss](../api/ai-assistview#responseiconcss) property to customize the appearance of the responder avatar. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/response-icon" %}

## Show or hide clear button

You can use the [showClearButton](../api/ai-assistview#showclearbutton) property to show or hide the clear button. By default, its value is `false`, when the clear button is clicked, the prompt text entered will be cleared.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/clearButton/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/clearButton/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/clearButton" %}
