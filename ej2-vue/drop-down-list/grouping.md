---
layout: post
title: Grouping in Vue Drop down list component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Drop down list component

The DropDownList supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

How to group and filter the DropDownList Items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=3KqDc3YnmNE" %}

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-list/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/grouping-cs1" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the `groupTemplate` property for both inline and fixed headers.

## See Also

* [Group Template support to DropDownList](./templates#group-template).
* [How to disable the fixed group header](./how-to/group-header)