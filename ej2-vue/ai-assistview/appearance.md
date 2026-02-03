---
layout: post
title: Appearance in Vue AI AssistView component | Syncfusion
description: Checkout and learn about templates with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue AI AssistView component

The Syncfusion AI AssistView for Vue allows for customization of its dimensions and overall look and feel. This can be achieved by setting the component's width and height or by applying custom CSS styles.

## Setting width

The [width](../api/ai-assistview#width) property allows you to define the width of the AI AssistView container. You can set this value as a string, using either pixels (e.g., `"500px"`) or a percentage (e.g., `"50%"`). By default, the width is set to `100%`, allowing it to fill its parent container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/width/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/width/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/width" %}

## Setting height

The [height](../api/ai-assistview#height) property allows you to define the height of the AI AssistView container. This value can be a string, specified in pixels (e.g., `"600px"`) or as a percentage (e.g., `"100%"`). The default value is `100%`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/height/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/height/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/height" %}

## cssClass

For more advanced style customizations, you can use the [cssClass](../api/ai-assistview#cssclass)  property to apply one or more custom CSS classes to the AI AssistView component's root element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/appearance/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/cssClass" %}
