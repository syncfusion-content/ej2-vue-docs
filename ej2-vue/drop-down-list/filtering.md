---
layout: post
title: Filtering in Vue Drop down list component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Drop down list component

The DropDownList has built-in support to filter data items when `allowFiltering` is enabled. The filter operation starts as soon as you start typing characters in the search box.

To display filtered items in the popup, filter the required data and return it to the DropDownList via [updateData](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/filteringEventArgs/#updatedata) method by using the [filtering](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#filtering) event.

How to group and filter the DropDownList Items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=3KqDc3YnmNE" %}

The following sample illustrates how to query the data source and pass the data to the DropDownList through the `updateData` method in `filtering` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/filtering/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/filtering/default-cs1" %}

## Limit the minimum filter character

When filtering the list items, you can set the limit for character count to raise remote request and fetch filtered data on the DropDownList. This can be done by manual validation within the filter event handler.

In the following example, the remote request does not fetch the search data until the search key contains three characters

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/filtering/min-filter-char-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/filtering/min-filter-char-cs1" %}

## Change the filter type

While filtering, you can change the filter type to `contains`, `startsWith`, or `endsWith` for string type within the filter event handler

In the following examples, data filtering is done with `endsWith` type.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/filtering/filter-type-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/filtering/filter-type-cs1" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by passing the fourth optional parameter of the `where` clause

The following example shows how to perform case-sensitive filter

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/filtering/case-sensitive-filter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/filtering/case-sensitive-filter-cs1" %}

## Diacritics Filtering

The DropDownList supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it
easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#ignoreaccent) is enabled

In the following sample,data with diacritics are bound as dataSource for DropDownList.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/filtering/diacritics-filter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/filtering/diacritics-filter-cs1" %}

## See Also

* [How to limit the search result while filtering](./how-to/search-on-filtering/)
* [How to highlight the matched characters in filtering](./how-to/highlight-filtering/)
* [How to modify the result data using remote data source](./how-to/modify-data/)