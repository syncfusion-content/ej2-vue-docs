---
layout: post
title: Grouping in Vue Dropdown List | Syncfusion
description: Group Syncfusion Vue Dropdown List items into inline or fixed headers by mapping the groupBy field, with dynamic updates on scroll.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Dropdown List

The DropDownList supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically while scrolling the popup list with its category value.

For information on how to group and filter the DropDownList items, watch this video:

{% youtube "https://www.youtube.com/watch?v=3KqDc3YnmNE" %}

In the following sample, the vegetables are grouped according to their category using the `groupBy` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/grouping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/grouping-cs1" %}

## Customization

The grouping header is also provided with a customization option. This allows custom designing using the `groupTemplate` property for both inline and fixed headers.

## See Also

* [Group Template support for the DropDownList](./templates#group-template)
* [How to disable the fixed group header](./how-to/group-header)