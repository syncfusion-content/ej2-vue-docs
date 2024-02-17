---
layout: post
title: Row spanning in Vue Grid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row spanning 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in Vue Grid component

The grid has option to span row cells. To achieve this, You need to define the [`rowSpan`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/) event.

In the following demo, `Davolio` cell is spanned to two rows in the `EmployeeName` column.

Also Grid supports the spanning of rows and columns for same cells. `Lunch Break` cell is spanned to two rows and three columns in the `1:00` column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/spanning-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/spanning-cs2" %}

> To disable the spanning for particular grid page, we need to use `requestType` from [`QueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/) event argument.

## Limitations

* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Row drag and drop
    5. Autofill
    6. Inline editing
    7. Batch editing
    8. CRUD