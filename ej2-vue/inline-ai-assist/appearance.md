---
layout: post
title: Appearance and Styling in Vue Inline AI Assist | Syncfusion®
description: Style the Vue Inline AI Assist popup by setting popupWidth, popupHeight, zIndex, and a custom cssClass to match your application theme.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Appearance and Styling in Vue Inline AI Assist

## Component Dimensions

### Popup width

You can use the [popupWidth](../api/inline-ai-assist#width) property to set the width of the Inline AI Assist. The default value is `400px`.

### Popup height

You can use the [popupHeight](../api/inline-ai-assist#height) property to set the height of the Inline AI Assist. The default value is `auto`.

### Z-index

You can use the [zIndex](../api/inline-ai-assist#zindex) property to set z-index for the Inline AI Assist popup. The default value is `1000`.

## Custom styling using cssClass

You can customize the appearance of the Inline AI Assist component by using the [cssClass](../api/inline-ai-assist#cssclass) property.

Below sample demonstrates the usage of above root level properties in Inline Assist component

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-assist/root-config" %}