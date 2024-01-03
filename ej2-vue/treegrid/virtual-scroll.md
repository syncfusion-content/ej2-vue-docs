---
layout: post
title: Virtual scroll in Vue Treegrid component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Virtual scroll 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in Vue Treegrid component

TreeGrid allows you to load large amount of data without performance degradation.

To use virtualization, you need to inject `VirtualScroll` module in the `provide` section.

## Row virtualization

Row virtualization allows you to load and render rows only in the content viewport. It is an alternative way of paging in which the rows will be appended while scrolling vertically. To setup the row virtualization, you need to define [`enableVirtualization`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablevirtualization) as true and content height by [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) property.

The number of records displayed in the TreeGrid is determined implicitly by height of the content area and a buffer records will be maintained in the TreeGrid content in addition to the original set of rows.

Expand and Collapse state of any child record will be persisted.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/virtualscroll-cs4" %}

## Column virtualization

Column virtualization allows you to virtualize columns. It will render column only in the current view port and all other columns are rendered on demand during horizontal scrolling.

To setup the column virtualization, set the [`enableVirtualization`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablevirtualization) and [`enableColumnVirtualization`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablecolumnvirtualization) properties as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/virtualscroll-cs5" %}

> Column's [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#width) is required for column virtualization. If column's width is not defined then tree grid will consider its value as `200px`.

## Limitations for virtualization

* Due to the element height limitation in browsers, the maximum number of records loaded by the treegrid is limited by the browser capability.
* Cell selection will not be persisted in row.
* Virtual scrolling is not compatible with detail template,clipboard functionality, Batch editing and row drag and drop features.
* The page size provided must be two times larger than the number of visible rows in the TreeGrid. If the page size is failed to meet this condition then the size will be determined by TreeGrid.
* The virtual height of the treegrid content is calculated using the row height and total number of records in the data source and hence features which changes row height such as text wrapping are not supported. If you want to increase the row height to accommodate the content then you can specify the row height as below to ensure all the table rows are in same height.

```
.e-treegrid .e-row {
    height: 2em;
}
```

* Programmatic selection using the **selectRows** method is not supported in virtual scrolling.
* When virtualization is active in a tree grid, the editCell method is unusable for records outside the currently visible viewport.
