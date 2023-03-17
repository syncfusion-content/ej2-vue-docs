---
layout: post
title: Localization in Vue Multi select component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Multi select component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Multi select component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the MultiSelect.

| Locale key | en-US (default)  |
|------------|------------------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the MultiSelect and no data is loaded. Hence, the `noRecordsTemplate` property displays its text in French culture initially, and if the sample is run offline, the `actionFailureTemplate` property displays its text appropriately.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/locale-cs1" %}

## See Also

* [Accessibility](./accessibility/)
* [How to bind the data to the combobox](./data-binding/)