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

The column chooser feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows you to dynamically show or hide columns. This feature can be enabled by defining the [showColumnChooser](https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnchooser) property as **true**.

To use the column chooser, you need to inject the **ColumnChooser** in the **provide** section

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs5" %}

> The column chooser dialog displays the header text of each column by default. If the header text is not defined for a column, the corresponding column field name is displayed instead.

## Hide column in column chooser dialog

You can hide the column names in column chooser by defining the [columns.showInColumnChooser](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showincolumnchooser) as **false**. This feature is useful when working with a large number of columns or when you want to limit the number of columns that are available for selection in the column chooser dialog.

In this example, the `columns.showInColumnChooser` property is set to false for the **Order ID** column. As a result, the **Order ID** column will not be displayed in the column chooser dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs36/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs36" %}

>The `columns.showInColumnChooser` property is applied to each <e-column> element individually. By setting it to false, you can hide specific columns from the column chooser dialog.

## Open column chooser by externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides the flexibility to open the column chooser dialog on a web page using an external button. By default, the column chooser button is displayed in the right corner of the grid component, and clicking the button opens the column chooser dialog below it. However, you can programmatically open the column chooser dialog at specific **X** and **Y** axis positions by using the [openColumnChooser](https://ej2.syncfusion.com/vue/documentation/api/grid/columnChooser/#opencolumnchooser) method.

Here's an example of how to open the column chooser in the Grid using an external button:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs6" %}

## Customize column chooser dialog size
	
The column chooser dialog in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid comes with default size, but you can modify its height and width as per your specific needs using CSS styles.
To customize the column chooser dialog size, you can use the following CSS styles:

```css
.e-grid .e-dialog.e-ccdlg {
    height: 500px;
    width: 200px;
}
.e-grid .e-ccdlg .e-cc-contentdiv {
    height: 200px;
    width: 230px;
}
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs37/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs37/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs37" %}

## Change default search operator of the column chooser 

The column chooser dialog in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides a search box that allows you to search for column names. By default, the search functionality uses the "startsWith" operator to match columns and display the results in the column chooser dialog. However, there might be cases where you need to change the default search operator to achieve more precise data matching.

To change the default search operator of the column chooser in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you need to use the [operator](https://ej2.syncfusion.com/vue/documentation/api/grid/columnChooserSettings/#operator) property of the columnChooserSettings.

Here's an example of how to change the default search operator of the column chooser to **contains** in the Vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs38/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs38/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs38" %}

## Diacritics searching in column chooser

By default, the grid ignores diacritic characters when performing a search in the column chooser. However, in some cases, you may want to include diacritic characters in the search. To enable this behavior, you can set the [columnchoosersettings.ignoreAccent](https://ej2.syncfusion.com/vue/documentation/api/grid/columnChooserSettings/#ignoreaccent) property to **true**.

Here is an example that demonstrates the usage of the `ignoreAccent` property to include diacritic characters for searching in the column chooser:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs39/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs39/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs39" %}

## Column Chooser Template in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid

The Column Chooser Template feature allows full customization of the column chooser’s header, content, and footer, making it easier to manage column visibility. To enable the column chooser, set [showColumnChooser](https://ej2.syncfusion.com/react/documentation/api/grid/#showcolumnchooser) to **true** and add **ColumnChooser** to the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property.

To implement a custom column chooser template in the Grid, use the following properties:

* **columnChooserSettings.headerTemplate** - Defines the header template of the column chooser.

* **columnChooserSettings.template**- Defines the content template.

* **columnChooserSettings.footerTemplate** - Defines the footer template.

In this example, a Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView package as described in the [documentation](https://ej2.syncfusion.com/react/documentation/treeview/getting-started). The `columnChooserSettings.template` property is assigned a template using the **v-slot** directive to render the TreeView component with checkboxes for selecting columns.Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/react/documentation/api/treeview#keypress) events, which organize columns into **Order Details**, **Shipping Details**, and **Delivery Status**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate` property, which is assigned a template via the **v-slot** directive, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `onClick` event. Additionally, the header is customized using `columnChooserSettings.headerTemplate` property, which is assigned a template via the **v-slot** directive to include a title and an icon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-chooser-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-chooser-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-chooser-template" %}

## Enable and disable search option

By default, the search option in the column chooser allows filtering specific columns from the Grid's column list.

The search option is enabled by default in the column chooser. However, you can disable it by setting the `columnChooserSettings.enableSearching` property to **false**.

The following example demonstrates how to enable or disable the search option dynamically using a [Switch](https://ej2.syncfusion.com/react/documentation/switch/getting-started) and its [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event in the Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/columnchooser-enable-disable/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/columnchooser-enable-disable/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/columnchooser-enable-disable" %}