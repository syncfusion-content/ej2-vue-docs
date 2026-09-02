---
layout: post
title: Localization in Vue Dialog | Syncfusion
description: Localize the Vue Dialog close button tooltip text for different cultures using the L10n library and locale-based translation loading.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Dialog

The `Localization` library allows you to localize the default text content of the Dialog. In the Dialog, the close button's tooltip text alone will be localized based on culture. The `close` key in the following table maps to the Dialog close button tooltip text.

| Locale key | en-US (default) |
|------|------|
| close | Close |

## Loading translations

To load a translation object in an application, use the `load` function of the `L10n` class.

In the below sample, `French` culture is set to Dialog and change the close button's tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/locale-cs1" %}