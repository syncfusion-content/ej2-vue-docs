---
layout: post
title: Searching in Vue Grid component | Syncfusion
description: Learn here all about Searching in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Searching in Vue Grid component

You can search records in a Grid, by using the [`search`](https://ej2.syncfusion.com/vue/documentation/api/grid/#search) method with search key as a parameter.This also provides an option to integrate search text box in grid's toolbar by adding **Search** item to the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar).

To use searching, you need to inject [`Search`](https://ej2.syncfusion.com/vue/documentation/api/grid/search) module in the **provide** section.

> The clear icon is shown in the Data Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the Data Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs3" %}

## Initial search

To apply search at initial rendering, set the fields, operator, key, and ignoreCase in the [`searchSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#searchsettings).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs4" %}

> By default, grid searches all the bound column values. To customize this behavior define the [`searchSettings.fields`](https://ej2.syncfusion.com/vue/documentation/api/grid/searchSettings/#fields) property.

## Search operators

The search operator can be defined in [`searchSettings.operator`](https://ej2.syncfusion.com/vue/documentation/api/grid/searchSettings/#operator) property to configure specified searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with specified value.
contains |Checks whether a value contains with specified value.
equal |Checks whether a value equal to specified value.
notEqual |Checks whether a value not equal to specified value.

## Search by external button

To search grid records from an external button, invoke the [`search`](https://ej2.syncfusion.com/vue/documentation/api/grid/#search) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs5" %}

## Search Specific Columns

By default, grid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](https://ej2.syncfusion.com/vue/documentation/api/grid/searchSettings/#fields) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs6" %}

## Clear search by external button

To clear the searched grid records from the external button, set [`searchSettings.key`](https://ej2.syncfusion.com/vue/documentation/api/grid/searchSettings/#key) property as **empty** string.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs7" %}

## Search on each key stroke

You can search the Grid data on each key stroke by binding the `keyup` event for the search input element inside the [`created`](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event. Inside the `keyup` handler you can search the Grid by invoking the [`search`](https://ej2.syncfusion.com/vue/documentation/api/grid/#search) method of the Grid component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs8" %}

## Perform search operation in Grid using multiple keywords

You can perform a searching operation in the Grid using multiple keywords. This can be achieved by the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event of the Grid.
In the following sample, we have performed the searching with multiple keywords by using the query property of grid when the requestType is searching in the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/search/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/search/default-cs9" %}