---
layout: post
title: Filtering in Vue AutoComplete | Syncfusion
description: Filter Syncfusion Vue AutoComplete suggestions as you type, with StartsWith, EndsWith, and Contains match modes and highlight support.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue AutoComplete

The AutoComplete has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the component.

To filter the Vue AutoComplete items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=7YycZgH89lk" %}

## Change the filter type

Determines which filter type the component uses for the search action. The default `filterType` value is `StartsWith`. The available [`filterType`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#filtertype) values and their supported data types are:

| Filter Type | Description | Supported Types |
|------|------|-------------|
| StartsWith | Checks whether a value begins with the specified value. | String |
| EndsWith | Checks whether a value ends with the specified value. | String |
| Contains | Checks whether a value contains the specified value. | String |

The following example shows the data filtering is done with StartsWith type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs6" %}

## Filter item count

You can specify the filter suggestion item count through the [`suggestionCount`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#suggestioncount) property of AutoComplete. By default, the `suggestionCount` value is `20`.

The following example restricts the suggestion list item count to 5.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs7" %}

## Limit the minimum filter character

You can set the limit for the character count to filter the data on the AutoComplete. This can be done by setting the [`minLength`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#minlength) property to AutoComplete.

In the following example, the remote request doesn't fetch the search data, until the search key contains three characters.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs8" %}

## Case sensitive filtering

Data items can be filtered either with or without case sensitivity using the `DataManager`. This can be done by setting the [`ignoreCase`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#ignorecase) property of AutoComplete.

The following sample depicts how to filter the data with case sensitivity.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs9" %}

## Diacritics filtering

An AutoComplete supports diacritics filtering which will ignore the diacritics and makes it easier to filter the results in international characters lists when the [`ignoreAccent`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#ignoreaccent) is enabled. By default, `ignoreAccent` is set to `false`.

In the following sample, data with diacritics are bound as dataSource for AutoComplete.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs10" %}

## Debounce delay

You can use the [debounceDelay](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#debouncedelay) property for filtering, enabling you to set a delay in milliseconds. This functionality helps reduce the frequency of filtering as you type, enhancing performance and responsiveness for a smoother user experience. By default, a debounceDelay of 300ms is set. If you wish to disable this feature entirely, you can set it to 0ms.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs28" %}

## See also

* [How to achieve autofill while filtering](./how-to/autofill)
* [How to group the data using header](./grouping)
* [How to highlight the search data](./how-to/custom-search)