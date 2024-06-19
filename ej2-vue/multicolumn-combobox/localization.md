---
layout: post
title: Localization in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Localization in Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue MultiColumn ComboBox component

The Localization library allows you to localize static text content of the [noRecordsTemplate](../api/multicolumn-combobox#norecordstemplate) property according to the culture currently assigned to the MultiColumn ComboBox.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

To load translation object to your application, use `load` function of **L10n** class.

In the following sample, French culture is set to the MultiColumn ComboBox and no data is loaded. Hence, the noRecordsTemplate property displays its text in French culture.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/localization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/localization/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/localization" %}
