---
layout: post
title: Localization in Vue Tabs | Syncfusion
description: Localize Vue Tabs content using the locale property and enable right-to-left layout with the enableRtl property for global application support.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Tabs

The Localization library enables localization of the default text content of the Tab. In the Tab, only the close button's tooltip text is localized based on the culture.

| Locale key | en-US (default)  |
|------|------|-------------|
| closeButtonTitle |  close |

## Loading translations

To load translation objects in an application, use the `load` function of the `L10n` class.

In the following sample, the French culture is applied to the Tab to change the close button's tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}