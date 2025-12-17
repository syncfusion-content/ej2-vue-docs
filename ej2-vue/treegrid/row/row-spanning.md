---
layout: post
title: Row spanning in Vue TreeGrid | Syncfusion
description: Learn here all about Row Spanning in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row spanning 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in Vue TreeGrid 

The row spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid allows merging cells in the same column vertically, creating a visually appealing and informative layout. By defining the `rowSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following demo, the **Lunch Break** cell spans multiple rows in the "1:00 PM" column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-spanning-cs1" %}

## Limitations

Row spanning in the Vue TreeGrid has the following limitations:

* The [updateCell](https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling

> When using row spanning, ensure that the spanned cells do not interfere with TreeGrid operations such as sorting, filtering, or editing, as this may lead to unexpected behavior.

## Row spanning via API

The row spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid allows automatically merging cells with identical values in the same column across consecutive rows. This significantly enhances readability and delivers a cleaner layout by eliminating repetitive data such as "Status", "Permit Status", "Inspection Status" and "Punch List Status".
 
To enable row spanning, set the `enableRowSpan` property to `true` in the TreeGrid configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-spanning-cs2" %}

> In the sample, row spanning is disabled at the column level for the price based columns such as "Planned Budget" and "Actual Spend" by setting each column's `enableRowSpan` property to `false`.

### Limitations

The row spanning feature is not compatible with all functionalities available in TreeGrid and offers only limited feature support. The following list outlines the features that are not compatible with row spanning.

* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
