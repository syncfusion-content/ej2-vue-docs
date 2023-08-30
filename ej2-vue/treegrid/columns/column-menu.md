---
layout: post
title: Column menu in Vue Treegrid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Vue Treegrid component

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#showcolumnmenu) property as true.

By default, column menu is enabled for all columns and you can disable column menu for a particular column by defining the [`showColumnMenu`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#showcolumnmenu) as false in [`columns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#column) property.

To use the column menu, inject the `ColumnMenu` module in the treegrid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs1" %}

## Custom column menu item

The custom column menu items can be added to the column menu by defining the [`columnMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#columnmenuitems) as a collection of the [`MenuItemModel`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel).

The action for custom column menu items can be performed using [`columnMenuClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#contextmenuclick) event.

In the below example, clear sorting action was performed through `columnMenuItems` by using [`clearSorting`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#clearsorting) method of the Tree Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs2" %}

## Customize menu items for particular columns

It is possible to customize specific items from the column menu for particular [`columns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#column) using [`columnMenuOpen`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#columnmenuopen) event. `columnMenuOpen` event can be utilized to determine which items to customize in column menu.

The following example shows how to hide the built-in **Filter** menu item when the column menu is opened for the **taskName** column, while allowing it to remain visible for all other columns.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs3" %}