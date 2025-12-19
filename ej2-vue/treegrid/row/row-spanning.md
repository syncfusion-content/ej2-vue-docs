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

Row spanning in the TreeGrid allows merging cells in the same column vertically, creating a visually appealing and informative layout. By defining the `rowSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following demo, the "Lunch Break" cell spans multiple rows in the "1:00 PM" column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-spanning-cs1" %}

## Row spanning via API

Row spanning in the TreeGrid allows automatically merging cells with identical values in the same column across consecutive rows. This significantly enhances readability and delivers a cleaner layout by eliminating repetitive data.To enable row spanning, set the `enableRowSpan` property to "true" in the TreeGrid configuration.
 
In the following example, row spanning is applied to the "Status", "Permit Status", "Inspection Status", and "Punch List Status" columns, while it is disabled for the "Planned Budget" and "Actual Spend" columns by setting the `enableRowSpan` property to "false" in the column level.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/row/row-spanning-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row/row-spanning-cs2" %}

### Limitations
 
The following list outlines the features that are not compatible with row spanning:
 
* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export

## See Also

* [Column Spanning in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid](https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-spanning)