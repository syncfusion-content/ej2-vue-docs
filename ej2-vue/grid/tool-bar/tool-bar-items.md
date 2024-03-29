---
layout: post
title: Tool bar items in Vue Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in Vue Grid component

The Syncfusion Vue Grid offers a flexible toolbar that enables the addition of custom toolbar items or modification of existing ones. This customizable toolbar is positioned above the grid, providing a convenient way to access various actions and functionalities

## Built-in toolbar items

Built-in toolbar items in the Syncfusion Vue Grid component involves utilizing pre-defined actions to perform standard operations within the Grid.

These items can be added by defining the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property as a collection of built-in items. Each item is rendered as a button with an icon and text. The following table lists the built-in toolbar items and their respective actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new row to the Grid.|
| Edit | Enables editing mode for the selected row in the Grid.|
| Update | Saves the changes made during the editing mode.|
| Delete | Deletes the selected record from the Grid.|
| Cancel | Discards the changes made during the editing mode.|
| Search | Displays a search box to filter the Grid records.|
| Print | Print the Grid content.|
| ColumnChooser | Choose the column's visibility.|
| PdfExport | Exports the Grid data to a PDF file.|
| ExcelExport | Exports the Grid data to an Excel file.|
| CsvExport | Exports the Grid data to a CSV file.|

The following example demonstrates how to enable built-in toolbar items such as **Print** and **Search** in the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.

### Show only icons in built-in toolbar items

Showing only icons in the built-in toolbar items of the Grid involves customizing the appearance of the toolbar to display icons without text.

To display only icons in the built-in toolbar items of the Grid, you can use CSS to hide the text portion of the buttons using the following CSS style.

```css
.e-grid .e-toolbar .e-tbar-btn-text, 
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;   
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs2" %}

## Custom toolbar items

Adding custom toolbar items to the Syncfusion Vue Grid involves incorporating personalized functionality into the toolbar.

Custom toolbar items can be added to the Grid component by defining the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel) objects. These objects define the custom items and their corresponding actions. The actions for the customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event.

By default, custom toolbar items are positioned on the **left** side of the toolbar. However, you can change the position by using the [align](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#align) property of the `ItemModel`. The following example demonstrates how to apply the `align` property with the value **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs3" %}

> * The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Built-in and custom items in a toolbar within the Syncfusion Vue Grid provides the flexibility to create a customized toolbar with a combination of standard actions and custom actions.

To use both types of toolbar items, you can define the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property of the Grid as an array that includes both built-in and custom items. The built-in items are specified as strings, while the custom items are defined as objects with properties such as [text](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#text), [prefixIcon](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#prefixicon), and [id](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#id) within the toolbar component.

The following example demonstrates, how to use both built-in and custom toolbar items in the grid. The built-in toolbar items includes **Add**, **Edit**, **Delete**, **Update**, and **Cancel**, while the custom toolbar item is **Click**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs4" %}

## Custom toolbar items in a specific position

Customizing the position of a custom toolbar within the Syncfusion Vue Grid involves modifying the default placement of the custom toolbar items. This enables you to precisely control the positioning of each custom toolbar item according to your specific requirements and desired layout within the Grid.

By default, custom toolbar items in Grid component are aligned on the left side of the toolbar. However, you have the ability to modify the position of the custom toolbar items by utilizing the [align](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel#align) property of the [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel).

In the following sample, the **Collapse All** toolbar item is positioned on the **Right**, the **Expand All** toolbar item is positioned on the **Left**, and the **Search** toolbar item is positioned at the **Center**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs5" %}