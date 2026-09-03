---
layout: post
title: Localization in Vue MultiSelect Dropdown | Syncfusion
description: Localize the Syncfusion Vue MultiSelect Dropdown noRecordsTemplate and actionFailureTemplate text by culture using the L10n class load function.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue MultiSelect Dropdown

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/multi-select#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the MultiSelect.

| Locale key | en-US (default)  |
|------------|------------------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, the French culture is set on the MultiSelect and no data is loaded. Hence, the `noRecordsTemplate` property displays its text in French culture initially, and if the sample is run offline, the `actionFailureTemplate` property displays its text appropriately.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/locale-cs1" %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the MultiSelect](./data-binding)