---
layout: post
title: Column template in Vue Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Vue Grid component

Grid component provides a [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, editing. It is must to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, you need to define a [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) for the column using the template property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) for the **Employee Image** field that displays an image element. The `template` property is set to the HTML element that contains an image tag. You have utilized the `src` and `alt` attributes to an image tag. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs1" %}

## Render hyperlink in a column

The Grid component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the Grid using the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property of the `e-column` tag. To define a `template` for the column,  you can use the `template` with the `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height=315>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='FirstName' headerText='FirstName' width='120' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{ data }">
        <a href="#" @click="onClick(data.FirstName)">{{ data.FirstName }}</a>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
const data = employeeData;
const onClick = (firstName) => {
  var url = 'https://www.google.com/search?q=';
  var searchUrl = url + firstName;
  window.open(searchUrl);
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height=315>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
        <e-column field='LastName' headerText='Last Name' width=150></e-column>
        <e-column field='FirstName' headerText='FirstName' width='120' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{data}">
        <a href="#" @click="onClick(data.FirstName)">{{data.FirstName}}</a>
      </template>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: employeeData,
    }
  },
  methods: {
    onClick(firstName) {
      var url = 'https://www.google.com/search?q=';
      var searchUrl = url + firstName;
      window.open(searchUrl);
    },
  },
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-hyperlink" %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a grid column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/vue/documentation/sparkline/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Grid column by defining the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-linechart/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-linechart/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-linechart" %}

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/vue/documentation/color-picker/getting-started) component of Syncfusion<sup style="font-size:70%">&reg;</sup> provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the Grid column by defining the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

```
<div>
    <ejs-colorpicker mode="Palette" :change="change"></ejs-colorpicker>
</div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-colorpicker/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-colorpicker/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-colorpicker" %}

### Render DropDownList component in a column

To render a custom component in a grid column, you need to define a [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) for the column using the `template` property. In the following code, we rendered the [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) component in the **Order Status** column by defining the `template` property.

```
<div>
    <ejs-dropdownlist id='dropdownlist' :dataSource='dropData' :value='data.OrderStatus' :popupHeight='250' :popupWidth='150' width="100"> </ejs-dropdownlist>
</div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-dropdown/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-dropdown/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-dropdown" %}

### Render Chip component in a column

The Grid component provides support for rendering [Chips](https://ej2.syncfusion.com/vue/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

In the following code, we rendered the Chips component in the Grid **First Name** column by defining the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

```
<div>
    <ejs-chiplist id="chip" text="data.FirstName"></ejs-chiplist>
</div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-chip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-chip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-chip" %}

### Render ProgressBar component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/vue/documentation/progressbar/getting-started) component within a column using the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property. Displaying the `Progress Bar` component in a grid column allows users to visually track the progress of tasks or operations associated with specific records. This feature is particularly useful for applications involving processes such as data loading, task completion, or other progressive activities.

In the following code, the `Progress Bar` component render in the Grid **Freight** column by defining the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property.

```
<div>
  <ejs-progressbar id='data.OrderID' type='Linear' height='60' :value='data.Freight' trackThickness=24 progressThickness='20'></ejs-progressbar>
</div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-template-progress/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-template-progress/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-template-progress" %}

### Render RadioButton in a column 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid supports rendering the [RadioButton](https://ej2.syncfusion.com/vue/documentation/radio-button/getting-started) within a column using the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property. This feature is particularly useful for displaying selection options, such as order statuses, payment methods, or approval choices, within the Grid.

In the following example, a `RadioButton` is rendered in the **Order Status** column of the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid by defining the `template` property.

```
<template v-slot:radioTemplate="{ data }">
  <div style="display: flex; flex-direction: column; align-items: start; gap: 10px;">
    <ejs-radiobutton label="Pending" :name="'radio-' + data.OrderID" cssClass="e-warning" :checked="data.OrderStatus === 'Pending'"></ejs-radiobutton>
    <ejs-radiobutton label="Confirmed" :name="'radio-' + data.OrderID" cssClass="e-success" :checked="data.OrderStatus === 'Confirmed'"></ejs-radiobutton>
    <ejs-radiobutton label="Shipped" :name="'radio-' + data.OrderID" cssClass="e-success" :checked="data.OrderStatus === 'Shipped'"></ejs-radiobutton>
  </div>
</template>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-radio/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-radio/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-radio" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property add `v-if` directive to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

```
<div v-if=cData class="template_checkbox">
    <input type="checkbox" checked />
</div>
<div v-else class="template_checkbox">
    <input type="checkbox" />
</div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/condition-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/condition-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/condition-template-cs1" %}

>You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Grid component allows you to retrieve the row object of the selected record when clicking on a [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Employee Data** column and `click` event binding is used to call the showDetails method when the template element is clicked. The showDetails method is passed the data object as an argument, which allows you to access the selected row object and display it in the dialog popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/template-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs2" %}

## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to use custom helpers inside the column template. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context. This can be done by using the let keyword to create a new variable that references the function.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) property for the Freight column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90 :template="'columnTemplate'"></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=120></e-column>    
            </e-columns>
             <template v-slot:columnTemplate="{data}">
                <div>
                  {{ formatCurrency(data.Freight) }}
                </div>
            </template>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
    const formatCurrency= (value) => {
      return '₹ ' + value.toFixed(3);
    }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90 :template="'columnTemplate'"></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=120></e-column>    
            </e-columns>
             <template v-slot:columnTemplate="{data}">
                <div>
                  {{ formatCurrency(data.Freight) }}
                </div>
            </template>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: data,
    }
  },
  methods: {
    formatCurrency(value) {
      return '₹ ' + value.toFixed(3);
    },
  },
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/custom-helper-template" %}

## Dynamically adding template column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component allows you to dynamically add template columns at runtime. This capability is particularly useful when the structure of the grid needs to be modified based on individual interactions or other dynamic conditions.

Dynamically adding template columns involves creating and inserting columns with custom templates after the grid has been initialized. This approach provides flexibility in presenting data in a highly customizable manner.

The following example demonstrates how to add template column using external button click. In this example, the **ShipCountry** column with a [Dropdownlist](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) is added in column [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template), and an icon is displayed using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate) for the **ShipCountry** column. 


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-dynamically/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-dynamically/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-dynamically" %}