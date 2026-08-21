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

`Localization` library allows to localize the default text content of Dialog. In Dialog, The close button's tooltip text alone will be localize based on culture.

| Locale key | en-US (default)  |
|------|------|
| close |  Close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

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