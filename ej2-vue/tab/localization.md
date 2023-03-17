---
layout: post
title: Localization in Vue Tab component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Tab component

Localization library allows to localize the default text content of Tab. In Tab, The close button's tooltip text alone will be localize based on culture.

| Locale key | en-US (default)  |
|------|------|-------------|
| closeButtonTitle |  close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Tab and change the close button's tooltip text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tab/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}