---
layout: post
title: Localization in Vue Dialog component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Dialog component

`Localization` library allows to localize the default text content of Dialog. In Dialog, The close button's tooltip text alone will be localize based on culture.

| Locale key | en-US (default)  |
|------|------|
| close |  Close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Dialog and change the close button's tooltip text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/locale-cs1" %}