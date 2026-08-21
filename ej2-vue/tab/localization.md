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

Localization library allows to localize the default text content of Tab. In Tab, The close button's tooltip text alone will be localize based on culture.

| Locale key | en-US (default)  |
|------|------|-------------|
| closeButtonTitle |  close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Tab and change the close button's tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}