---
layout: post
title: Grouping in Vue Combo box component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Combo box component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Combo box component

The ComboBox supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/vue/documentation/api/combo-box/#fields) &nbsp;field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

To group the Vue ComboBox items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=AMTe9vmvYYE" %}

In the following sample, the vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/grouping-cs1" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the [`groupTemplate`](../api/combo-box/#grouptemplate) property for both inline and fixed headers.

## See Also

* [Group Template support to ComboBox](./templates#group-template).