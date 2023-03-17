---
layout: post
title: Filtering in Vue Auto complete component | Syncfusion
description: Learn here all about Filtering in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Auto complete component

The AutoComplete has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the component.

To filter the Vue AutoComplete items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=7YycZgH89lk" %}

## Change the filter type

Determines on which filter type, the component needs to be considered on search action. The available [`filterType`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#filtertype) and its supported data types are

| Filter Type | Description | Supported Types |
|------|------|-------------|
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with specified value. | String |
| Contains | Checks whether a value contains with specified value. | String |

The following examples shows the data filtering is done with StartsWith type.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs6" %}

## Filter item count

You can specify the filter suggestion item count through [`suggestionCount`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#suggestioncount) property of AutoComplete.
The following example, to restrict the suggestion list item counts as 5.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs7" %}

## Limit the minimum filter character

You can set the limit for the character count to filter the data on the AutoComplete. This can be done by set the [`minLength`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#minlength) property to AutoComplete.

In the following example, the remote request doesn't fetch the search data, until the search key contains three characters.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs8" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the `DataManager`. This can be done by setting the [`ignoreCase`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#ignorecase) property of AutoComplete.

The following sample depicts how to filter the data with case-sensitive.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs9" %}

## Diacritics Filtering

An AutoComplete supports diacritics filtering which will ignore the diacritics and makes it easier to filter the results in international characters lists when the [`ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#ignoreaccent) is enabled.

In the following sample,data with diacritics are bound as dataSource for AutoComplete.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/auto-complete/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs10" %}

## See Also

* [How to achieve autofill while filtering](./how-to/autofill/)
* [How to group the data using header](./grouping/)
* [How to highlight the search data](./how-to/custom-search/)