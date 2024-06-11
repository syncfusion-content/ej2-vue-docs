---
layout: post
title: Localization in Vue Auto complete component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Auto complete component

The Localization library allows you to localize static text content of the noRecordsTemplate and actionFailureTemplate properties according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default) |
|-------------|-------------|
| noRecordsTemplate | No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load translation object to your application, use load function of the L10n class. In the following sample, French culture is set to the AutoComplete and no data is loaded.

Hence, the noRecordsTemplate property displays its text in French culture initially and if the sample is run offline, the actionFailureTemplate property displays its text appropriately.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs18" %}

## See Also

* [Accessibility](./accessibility/)
* [How to bind the data to the autocomplete](./data-binding/)