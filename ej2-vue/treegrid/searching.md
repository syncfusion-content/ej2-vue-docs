---
layout: post
title: Searching in Vue Treegrid component | Syncfusion
description: Learn here all about Searching in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Vue Treegrid component

You can search records in a TreeGrid, by using the [`search`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#search) method with search key as a parameter. This also provides an option to integrate search text box in treegrid's toolbar by adding `search` item to the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar).

To search records, inject the [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#fitermodule) module in the treegrid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/searching/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/searching/default-cs1" %}

## Initial search

To apply search at initial rendering, set the fields, operator, key, and ignoreCase in the [`searchSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#searchsettings).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/searching/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/searching/default-cs2" %}

> By default, treegrid searches all the bound column values. To customize this behavior define the [`searchSettings.fields`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/searchSettingsModel/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/searchSettingsModel/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for values not equal to the specified value.

> By default, the [`searchSettings.operator`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/searchSettingsModel/#operator) value is `contains`.

## Search by external button

To search treegrid records from an external button, invoke the [`search`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#search) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/searching/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/searching/default-cs3" %}

## Search specific columns

By default, treegrid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/searchSettingsModel/#fields) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/searching/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/searching/default-cs4" %}