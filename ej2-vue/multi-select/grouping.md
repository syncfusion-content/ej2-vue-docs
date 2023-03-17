---
layout: post
title: Grouping in Vue Multi select component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Multi select component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Multi select component

The MultiSelect supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header contentis updated dynamically on scrolling the popup list with its category value.
 
To group the Vue MultiSelect dropdown items, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nrmMCOHcxTg" %}

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/grouping-cs1" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the [`groupTemplate`](../api/multi-select/#grouptemplate) property for both inline and fixed headers.

## Grouping with CheckBox

Previously, there is no checkbox for group headers. Now, this feature allow to render checkbox in group header to select the group items in single selection. You can enable this feature by setting [`enableGroupCheckBox`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#enablegroupcheckbox) property value as **true** and **mode** property as **CheckBox**.

Inject the `CheckBoxSelection` module in the MultiSelect to use the checkbox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/grouping-with-checkbox-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/grouping-with-checkbox-cs1" %}

## See Also

* [Group Template support to MultiSelect](./templates#group-template).