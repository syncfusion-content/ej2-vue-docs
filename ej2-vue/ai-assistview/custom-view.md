---
layout: post
title: Getting started with Vue AI AssistView component | Syncfusion
description: Checkout and learn about Getting started with Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Custom views in Angular AI AssistView component

## Adding custom views

By using the `e-views` tag directive you can define the collection of different assist view models in the AI AssistView. You can customize the default and the custom views added.

### Setting view type

You can set the type of view by using the `type` property within the `e-view` tag directive. It accepts two values such as `Assist`, and `Custom`.

### Setting name

You can use the `name` property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

### Setting iconCSS

You can customize the view icons by using the `iconCss` property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

The following example illustrates how types, name, and iconCss are used in a AI AssistView component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}

### Setting view template 

You can use the `viewTemplate` property to add the view content of the multiple views added in the AI AssistView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}

## Setting active view

You can use the `activeView` property to set the active view in the AI AssistView. By default, the value is `0`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/defaultprompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}
