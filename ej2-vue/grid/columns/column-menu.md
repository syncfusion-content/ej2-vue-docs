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

The column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component provides options to enable features such as sorting, grouping, filtering, column chooser, and autofit. When users click on the column header's menu icon, a menu will be displayed with these integrated features. To enable the column menu, you need to set the [showColumnMenu](https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnmenu) property to **true** in the Grid configuration.

To use the column menu, inject the **ColumnMenu** in the **provide** section.

The default column menu items are displayed in following table.

| Item               | Description                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **SortAscending**  | Sort the current column in ascending order.                                                                                              |
| **SortDescending** | Sort the current column in descending order.                                                                                             |
| **Group**          | Group the current column.                                                                                                                |
| **Ungroup**        | Ungroup the current column.                                                                                                              |
| **AutoFit**        | Autofit the current column.                                                                                                              |
| **AutoFitAll**     | Autofit all columns.                                                                                                                     |
| **ColumnChooser**  | Choose the column visibility.                                                                                                            |
| **Filter**         | Show the filter option as given in [filterSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#type) |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs7" %}

> You can disable column menu for a particular column by defining the [columns.showColumnMenu](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showcolumnmenu) as false.

> You can customize the default items by defining the [columnMenuItems](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuitems) with required items.

## Prevent column menu for particular column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component provides the ability to prevent the appearance of the column menu for specific columns. This feature is useful when you want to restrict certain columns from being customizable through the column menu.

To prevent the column menu for a particular column, you can set the [showColumnMenu](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#showcolumnmenu) property to **false** for that specific column configuration. This will disable the column menu options specifically for the designated column, while other columns will have the column menu enabled.

The following example demonstrates how to prevent the column menu for a specific column. In this example, the column menu is disabled for the **OrderID** column by setting the `showColumnMenu` property to **false**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-prevent/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-prevent/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-prevent" %}

## Add custom column menu item

The custom column menu item feature allows you to add additional menu items to the column menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. These custom menu items can be defined using the [columnMenuItems](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/vue/documentation/api/grid/columnMenuItemModel/) objects. You can define the actions for these custom items in the [columnMenuClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuclick) event.

Consider the following example, which demonstrates how to add a custom column menu item to clear the sorting of the Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs9" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [columnMenuOpenEventArgs.hide](https://ej2.syncfusion.com/vue/documentation/api/grid/columnMenuOpenEventArgs) as true in the [columnMenuOpen](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs10" %}

## Render nested column menu

The nested column menu feature provides an extended menu option in the grid column headers, allows you to access additional actions and options related to the columns.

To enable the nested column menu feature, you need to define the [columnMenuItems](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuitems) property in your component. The `columnMenuItems` property is an array that contains the items for the column menu. Each item can be a string representing a built-in menu item or an object defining a custom menu item.

Here is an example of how to configure the `columnMenuItems` property to include a nested menu:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs35/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs35" %}

## Customize the icon of column menu

To customize the column menu icon, you need to override the default grid class **.e-icons.e-columnmenu** with a custom CSS property called **content**. By specifying a Unicode character or an icon font's CSS class, you can change the icon displayed in the column menu.

To customize the column menu icon, follow the below step:

1.Add the necessary CSS code to override the default grid class:

```css
  .e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e725";
      }
```

Here is an example that demonstrates how to customize the column menu icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs1" %}

## Column menu events

The column menu in Syncfusion<sup style="font-size:70%">&reg;</sup> vue Grid provides a set of events that allow customization of behavior and performing actions when the column menu is opened or clicked. The below events are helpful for adding additional functionality or implementing specific actions based on user interactions with the column menu.

1.The [columnMenuOpen](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuopen) event triggers before the column menu opens.

2.The [columnMenuClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
  <p style="color: red; text-align: center;" id="message">{{ message }}</p>
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings'
        :columnMenuClick='columnMenuClick' :columnMenuOpen='columnMenuOpen'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='120'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' type='date'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, Sort, Resize, ColumnMenu, Page,Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      const groupOptions = { showGroupedColumn: true };
      const filterSettings = { type: "CheckBox" };
      var message = ref(null);
  provide('grid',  [Group, Sort, Resize, ColumnMenu, Page, Filter]);
      const columnMenuOpen = function(){
        message.value = 'columnMenuOpen event is Triggered';
      }
      const columnMenuClick = function(){
        message.value = 'columnMenuClick event is Triggered';
      }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
  <p style="color: red; text-align: center;" id="message">{{ message }}</p>
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings'
        :columnMenuClick='columnMenuClick' :columnMenuOpen='columnMenuOpen'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='120'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' type='date'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Group, Sort, Resize, ColumnMenu, Page,Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      groupOptions: { showGroupedColumn: true },
      filterSettings: { type: "CheckBox" },
      message:''
    };
  },
  provide: {
      grid: [Group, Sort, Resize, ColumnMenu, Page, Filter]
  },
  methods: {
      columnMenuOpen: function(){
        this.message = 'columnMenuOpen event is Triggered';
      },
      columnMenuClick: function(){
        this.message = 'columnMenuClick event is Triggered';
      }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs8" %}