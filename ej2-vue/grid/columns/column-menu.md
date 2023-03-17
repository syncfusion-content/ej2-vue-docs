---
layout: post
title: Column menu in Vue Grid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Vue Grid component

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column.
To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the `ColumnMenu` in the `provide` section.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `Group` | Group the current column. |
| `Ungroup` | Ungroup the current column. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `ColumnChooser` | Choose the column visibility. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs7" %}

> You can disable column menu for a particular column by defining the
[`columns.showColumnMenu`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showcolumnmenu) as false.
> You can customize the default items by defining the
[`columnMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuitems) with required items.

## Column menu events

During the resizing action, the grid component triggers the below two events.

1. The `columnMenuOpen` event triggers before the column menu opens.
2. The `columnMenuClick` event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs8" %}

## Custom column menu item

Custom column menu items can be added by defining the [`columnMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuitems) as collection of the [`columnMenuItemModel`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnMenuItemModel/).
Actions for this customized items can be defined in the [`columnMenuClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuclick) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs9" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnMenuOpenEventArgs/) as true in the [`columnMenuOpen`](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuopen) event.

The following sample, `Filter` item was hidden in column menu when opens for the `OrderID` column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs10" %}

## Customize the icon of column menu

You can customize the column menu icon by overriding the default grid class `.e-icons.e-columnmenu` with a custom property `content` as mentioned below,

```
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs1" %}