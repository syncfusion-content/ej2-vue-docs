---
layout: post
title: Localization in Vue AutoComplete | Syncfusion
description: Localize the Syncfusion Vue AutoComplete noRecordsTemplate and actionFailureTemplate text by culture using the included localization library.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue AutoComplete

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#actionfailuretemplate) properties according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default) |
|-------------|-------------|
| noRecordsTemplate | No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load a translation object into your application, use the `load` function of the `L10n` class. The `L10n` class is imported from `@syncfusion/ej2-base`. In the following sample, French culture is set to the AutoComplete using the `locale` property and no data is loaded.

Hence, the noRecordsTemplate property displays its text in French culture initially. If the sample is run offline, the actionFailureTemplate property displays its text appropriately.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs18" %}

## See also

* [Accessibility](./accessibility)
* [How to bind the data to the autocomplete](./data-binding)