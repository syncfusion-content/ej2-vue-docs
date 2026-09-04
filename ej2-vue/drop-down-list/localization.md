---
layout: post
title: Localization in Vue Dropdown List | Syncfusion
description: Localize the Syncfusion Vue Dropdown List noRecordsTemplate and actionFailureTemplate text by culture using the included localization library.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Dropdown List

The Localization library allows you to localize the static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#actionfailuretemplate) properties according to the culture currently assigned to the DropDownList.

| Locale key | en-US (default)  |
|------------|------------------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load the translation object into your application, use the `load` function of the **L10n** class.

In the following sample, the French culture is set for the DropDownList and no data is loaded. Hence, the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#norecordstemplate) property displays its text in the French culture initially, and if the sample is run offline, the [actionFailureTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#actionfailuretemplate) property displays its text appropriately.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/locale-cs1" %}

## See Also

* [Accessibility](./accessibility)
* [How to bind data to the DropDownList](./data-binding)