---
layout: post
title: Context menu in Vue Treegrid component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Vue Treegrid component

The TreeGrid has options to show the context menu when right clicked on it. To enable this feature, you need to define either default or custom item in the [`contextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#contextmenuitems).

To use the context menu, inject the `ContextMenu` module in the treegrid.

The default items are in the following table.

Items| Description
----|----
`AutoFit`|  Auto fit the current column.
`AutoFitAll` | Auto fit all columns.
`Edit`|  Edit the current record.
`Delete` | Delete the current record.
`Save` | Save the edited record.
`Cancel` | Cancel the edited state.
`PdfExport` | Export the treegrid data as Pdf document.
`ExcelExport` | Export the treegrid data as Excel document.
`CsvExport` | Export the treegrid data as CSV document.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.
`FirstPage` | Go to the first page.
`PrevPage` | Go to the previous page.
`LastPage` | Go to the last page.
`NextPage` | Go to the next page.
`AddRow` | Add new row to the treegrid.
`Indent` | Indents the record to one level of hierarchy.|
`Outdent` | Outdents the record to one level of hierarchy.|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextMenu/default-cs1" %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#contextmenuitems) as a collection of
[`contextMenuItemModel`](https://ej2.syncfusion.com/vue/documentation/api/grid/contextMenuItemModel).
Actions for this customized items can be defined in the [`contextMenuClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#contextmenuclick) event.

In the below sample, we have shown context menu item for parent rows to expand or collapse child rows.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextMenu/default-cs2" %}

## Enable and disable context menu items dynamically

You can enable and disable the context menu items using the [`enableItems`](https://ej2.syncfusion.com/documentation/api/menu/#enableitems) method in [`contextMenuOpen`](https://ej2.syncfusion.com/documentation/api/treegrid/#contextmenuopen) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/contextMenu/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/contextMenu/default-cs3" %}

> You can hide or show an item in context menu for specific area inside of treegrid by defining the [`target`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/cellSaveEventArgs/#target) property.