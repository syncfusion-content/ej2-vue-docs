---
layout: post
title: Excel export options in Vue Treegrid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel export options 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Vue Treegrid component

## To customize excel export

The excel export provides an option to customize mapping of the treegrid to excel document.

### Export hidden columns

The excel export provides an option to export hidden columns of treegrid by defining `includeHiddenColumn` as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs4" %}

### Show or hide columns on exported excel

You can show a hidden column or hide a visible column while printing the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelExportComplete) events.

In the `toolbarClick` event, based on `args.item.text` as `Excel Export`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `Duration` as a hidden column in the treegrid. While exporting, we have changed `Duration` to visible column and `StartDate` as hidden column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs5" %}

### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in [`ExcelExportProperties`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelExportProperties).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs6" %}

### Persist collapsed state

You can persist the collapsed state in the exported document by defining `isCollapsedStatePersist` property as true in `TreeGridExcelExportProperties` parameter of [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#excelexport) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/excel/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel/default-cs7" %}