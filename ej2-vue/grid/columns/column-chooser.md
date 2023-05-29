---
layout: post
title: Column chooser in Vue Grid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column chooser 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in Vue Grid component

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnchooser) as true.

To use column chooser, inject `ColumnChooser` in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs5" %}

> You can hide the column names in column chooser by defining the
[`columns.showInColumnChooser`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnChooser/#opencolumnchooser) method with `X` and `Y` axis positions.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs6" %}