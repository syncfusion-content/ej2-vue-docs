---
layout: post
title: Filtering in Vue Multi select component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Multi select component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Multi select component

The MultiSelect has built-in support to filter data items when [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#allowfiltering) is enabled. The filter operation starts as soon as you start typing characters in the MultiSelect input.

To display filtered items in the popup, filter the required data and return it to the MultiSelect via `updateData` method by using the [filtering](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#filtering) event.

To filter the Vue MultiSelect dropdown items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nrmMCOHcxTg" %}

The following sample illustrates how to query the data source and pass the data to the MultiSelect through the `updateData` method in `filtering` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/default-cs1" %}

## Limit the minimum filter character

When filtering the list items, you can set the limit for character count to raise remote request and fetch filtered data on the MultiSelect. This can be done by manual validation within the filter event handler.

In the following example, the remote request does not fetch the search data until the search key contains three characters.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/min-char-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/min-char-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/min-char-cs1" %}

## Change the filter type

While filtering, you can change the filter type to `contains`, `startsWith`, or `endsWith` for string type within the filter event handler.

In the following examples, data filtering is done with `endsWith` type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/type-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/type-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/type-cs1" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the DataManager. This can be done by passing the fourth optional parameter of the `where` clause.

The following example shows how to perform case-sensitive filter.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/case-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/case-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/case-cs1" %}

## Diacritics Filtering

MultiSelect supports diacritics filtering which will ignore the [diacritics](https://en.wikipedia.org/wiki/Diacritic) and makes it easier to filter the results in international characters lists when the [ignoreAccent](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for MultiSelect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/diacritics-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/diacritics-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/diacritics-cs1" %}

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience.By default, a DebounceDelay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/simple-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/filtering/simple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/filtering/simple-cs1" %}

## See Also

* [How to bind the data](./data-binding)
* [How to group the data using header](./grouping)
* [How to add custom value to the MultiSelect](./custom-value)