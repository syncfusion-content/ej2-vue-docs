---
layout: post
title: Column spanning in Vue TreeGrid | Syncfusion
description: Learn here all about Column spanning in Syncfusion Vue TreeGrid of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in Vue TreeGrid

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid allows merging adjacent cells horizontally, creating a visually appealing and informative layout. By defining the `colSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following example, Employee **Davolio** is scheduled for analysis from "9.00 AM" to "10.00 AM", so those cells have been spanned.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/column-spanning-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/column-spanning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/column-spanning-cs1" %}

## Limitations

Column spanning in the Vue TreeGrid has the following limitations:

* The [updateCell](https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling

> When using column spanning, ensure that the spanned cells do not interfere with TreeGrid operations such as sorting, filtering, or editing, as this may lead to unexpected behavior.

## Column spanning via API

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid allows automatically merging cells with identical values in the same row across consecutive columns. This significantly enhances readability and delivers a cleaner layout by eliminating repetitive data such as "Status", "Permit Status", "Inspection Status" and "Punch List Status".

To enable column spanning, set the `enableColumnSpan` property to `true` in the Tree Grid configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/column-spanning-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/column-spanning-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/column-spanning-cs2" %}

> In the sample, column spanning is disabled at the column level for the price based columns such as "Planned Budget" and "Actual Spend" by setting each column's `enableColumnSpan` property to `false`.

### Limitations

The column spanning feature is not compatible with all functionalities available in TreeGrid and offers only limited feature support. The following list outlines the features that are not compatible with column spanning.

* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
