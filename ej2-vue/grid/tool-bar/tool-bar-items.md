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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid offers a flexible toolbar that enables the addition of custom toolbar items or modification of existing ones. This customizable toolbar is positioned above the grid, providing a convenient way to access various actions and functionalities

## Built-in toolbar items

Built-in toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component involves utilizing pre-defined actions to perform standard operations within the Grid.

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
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
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
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs2" %}

### Customize the built-in toolbar items

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows you to customize the built-in toolbar items to meet your specific requirements. This can include adding, removing, or modifying toolbar items, as well as handling custom actions when toolbar buttons are clicked.

To customize the built-in toolbar items, you can use the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event of the grid.

The following example demonstrate how to customize the toolbar by disabling and canceling the **Add** button functionlity and showing a custom message when the **Add** button of toolbar is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-toolbar/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-toolbar/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-toolbar" %}

## Custom toolbar items

Adding custom toolbar items to the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid involves incorporating personalized functionality into the toolbar.

Custom toolbar items can be added to the Grid component by defining the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/) objects. These objects define the custom items and their corresponding actions. The actions for the customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event.

By default, custom toolbar items are positioned on the **left** side of the toolbar. However, you can change the position by using the [align](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#align) property of the `ItemModel`. The following example demonstrates how to apply the `align` property with the value **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs3" %}

> * The [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Built-in and custom items in a toolbar within the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides the flexibility to create a customized toolbar with a combination of standard actions and custom actions.

To use both types of toolbar items, you can define the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property of the Grid as an array that includes both built-in and custom items. The built-in items are specified as strings, while the custom items are defined as objects with properties such as [text](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#text), [prefixIcon](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#prefixicon), and [id](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#id) within the toolbar component.

The following example demonstrates, how to use both built-in and custom toolbar items in the grid. The built-in toolbar items includes **Add**, **Edit**, **Delete**, **Update**, and **Cancel**, while the custom toolbar item is **Click**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="margin-left:180px">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref='grid' :dataSource='data' height='200px' :editSettings='editSettings' :toolbar='toolbar'
      :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true'
          :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const message = ref(null);
const orderIDRules = { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = [
  'Add', 'Edit', 'Delete', 'Update', 'Cancel',
  { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
];
const clickHandler = function (args) {
  if (args.item.id === 'Click') {
    message.value = `Custom Toolbar Clicked`;
  }
}
provide('grid', [Toolbar, Edit]);
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
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid ref='grid' :dataSource='data' height='200px' :editSettings='editSettings' :toolbar='toolbar' :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
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
      message:'',
      orderIDRules: { required: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: [
        'Add', 'Edit', 'Delete', 'Update', 'Cancel', 
        { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
      ]
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Click') {
          this.message = `Custom Toolbar Clicked`;
        }
    }
  },
  provide: {
      grid: [Toolbar, Edit]
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
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs4" %}

## Add custom components to the Grid toolbar using template

The Syncfusion Vue Grid provides the flexibility to customize its toolbar by embedding custom components using the [template](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#template) property of the [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/). This feature allows developers to add UI elements such as buttons, dropdowns, or input controls directly into the toolbar, alongside built-in actions like **Add**, **Edit**, and **Delete**.

In the following example, an [AutoComplete](https://ej2.syncfusion.com/vue/documentation/auto-complete/getting-started) is defined in the **App.vue** page as a custom toolbar item using the `template` property. The `AutoComplete` is populated with unique values from the `ShipCity` field of the Grid data. When you select a value from the `AutoComplete`, the Grid is filtered to show only the records that match the selected city. Once the Grid is rendered, the custom `AutoComplete` appears as part of the toolbar, allowing you to interact with both standard and custom toolbar elements.

Additionally, the [change](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#change) event of the `AutoComplete` is used to trigger a search operation within the Grid. When you select or type a value, the event handler invokes the Grid’s [search](https://ej2.syncfusion.com/vue/documentation/api/grid/#search) method, dynamically filtering the displayed records in the **ShipCity** column based on the input.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
    <div id="toolbar-template">
      <ejs-autocomplete :dataSource='dropDownData' placeholder="Search ShipCity" @change="onChange"></ejs-autocomplete>
    </div>
  </div>
</template>

<script setup>
  import { provide, ref } from "vue";
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
  import { data } from './datasource.js';

  const grid = ref(null);
  const dropDownData = ref([   
    'Reims',
    'Münster',
    'Rio de Janeiro',
    'Lyon',
    'Charleroi',
    'Bern',
    'Genève',
    'San Cristóbal',
    'Graz',
    'México D.F.',
    'Albuquerque',
    'Köln'
  ]);
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbar = [
    'Add', 
    'Edit', 
    'Delete',
    { 
      template: '#toolbar-template', 
      align:"Left", 
      tooltipText:"Custom component AutoComplete" 
    }
  ];

  const onChange = function (event){
    const selectedCity = event.value;
    // perform search action for ShipCity column.
    grid.value.search(selectedCity);
  }
  provide('grid', [Toolbar, Edit]);
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
    <ejs-grid ref="grid" :dataSource='data' height='270px' :toolbar='toolbar' :editSettings='editSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
    <div id="toolbar-template">
    <ejs-autocomplete :dataSource='dropDownData' placeholder="Search ShipCity" @change="onChange"></ejs-autocomplete>
  </div>
  </div>
</template>

<script>
  import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';
  import { data } from './datasource.js';

  export default {
  name: "App",
  components: {
  "ejs-grid":GridComponent,
  "e-columns":ColumnsDirective,
  "e-column":ColumnDirective, 
  "ejs-autocomplete": AutoCompleteComponent
  },
    data() {
      return {
        data: data,
        dropDownData: [
          'Reims',
          'Münster',
          'Rio de Janeiro',
          'Lyon',
          'Charleroi',
          'Bern',
          'Genève',
          'San Cristóbal',
          'Graz',
          'México D.F.',
          'Albuquerque',
          'Köln'
        ],
        editSettings: {
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
          mode: "Normal",
        },
        toolbar: [
          'Add',
          'Edit',
          'Delete',
          {
            template:'#toolbar-template', 
            align:"Left", 
            tooltipText:"Custom Component AutoComplete"
          }
        ]
      };
    },
    methods: {
      onChange: function (event) {
        const selectedCity = event.value;
        // perform search action for ShipCity column.
        this.$refs.grid.ej2Instances.search(selectedCity);
      }
    },
    provide: {
      grid: [Toolbar, Edit]
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
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/custom-toolbar" %}

## Custom toolbar items in a specific position

Customizing the position of a custom toolbar within the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid involves modifying the default placement of the custom toolbar items. This enables you to precisely control the positioning of each custom toolbar item according to your specific requirements and desired layout within the Grid.

By default, custom toolbar items in Grid component are aligned on the left side of the toolbar. However, you have the ability to modify the position of the custom toolbar items by utilizing the [align](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/#align) property of the [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/).

In the following sample, the **Collapse All** toolbar item is positioned on the **Right**, the **Expand All** toolbar item is positioned on the **Left**, and the **Search** toolbar item is positioned at the **Center**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/toolbar/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs5" %}