---
layout: post
title: Headers in Vue Grid component | Syncfusion
description: Learn here all about Headers in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column headers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
  
# Headers in Vue Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component provides a comprehensive set of options to customize and manage headers efficiently. Headers play a crucial role in organizing and presenting data effectively in the grid.

## Header text

The `headerText` feature proves particularly beneficial when there is a need for more meaningful and descriptive column headers in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component.

By default, the header text of a column in Grid is displayed from the column's [field](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) value. However, you can easily override the default header title and provide a custom header text for the column using the [headerText](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext) property. 

To enable the `headerText` property, you simply need to define it in the **e-column** element. The following example demonstrates how to enable header text for a  Grid column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-headertext/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-headertext/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-headertext" %}

> * If both the `field` and `headerText` are not defined in the column, the column renders with **empty** header text.
> * The `headerText` property is optional, and if it is not defined, then the corresponding column's field value is set as header text for that column.  
> * You can also use the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate) property to apply custom HTML content to the header cell.

## Header template

The header template feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows you to create custom header layouts and content, providing enhanced functionality such as sorting or filtering.

To implement a header template, set the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate) property within a specific column definition. This allows you to render custom HTML elements or Vue components to the header.

The following example demonstrate, the custom element is rendered for both **CustomerID** and **OrderDate** column headers.

{% tabs %} 
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :headerTemplate="'customerTemplate'" width="140"></e-column>
        <e-column field="Freight" headerText="Freight" format="C" :headerTemplate="'freightTemplate'" width="120"></e-column>
        <e-column field="OrderDate" type="date" textAlign="Right" format="yMd" :headerTemplate="'dateTemplate'" width="140"></e-column>
      </e-columns>
      <template v-slot:customerTemplate="{ data }">
        <div>
          <span class="e-icon-userlogin e-icons employee"></span>
          {{ data.headerText }}
        </div>
      </template>
      <template v-slot:freightTemplate>
        <div>
          <ejs-dropdownlist
            index="0"
            width="130"
            :dataSource="dropdownData"
          ></ejs-dropdownlist>
        </div>
      </template>
      <template v-slot:dateTemplate>
        <div style="display:inline-flex">
          <ejs-switch :change="onSwitchToggle"></ejs-switch>
          <label style="padding: 0px 0px 0px 10px">{{ headerText }}</label>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch} from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
      const dropdownData = ["Freight", "Shipment", "Cargo"];
      const headerText = "Order Date";
    const onSwitchToggle = function (args) {
      this.headerText = args.checked ? "Purchase Date" : "Order Date";
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
@font-face {
  font-family: "ej2-headertemplate";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}
.e-icon-calender::before {
  font-family: "ej2-headertemplate";
  content: "\e960";
}
.e-icon-userlogin:before {
  font-family: "ej2-headertemplate";
  content: "\e702";
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :headerTemplate="'customerTemplate'" width="140"></e-column>
        <e-column field="Freight" headerText="Freight" format="C" :headerTemplate="'freightTemplate'" width="120"></e-column>
        <e-column field="OrderDate" type="date" textAlign="Right" format="yMd" :headerTemplate="'dateTemplate'" width="140"></e-column>
      </e-columns>
      <template v-slot:customerTemplate="{ data }">
        <div>
          <span class="e-icon-userlogin e-icons employee"></span>
          {{ data.headerText }}
        </div>
      </template>
      <template v-slot:freightTemplate>
        <div>
          <ejs-dropdownlist index="0" width="130" :dataSource="dropdownData"></ejs-dropdownlist>
        </div>
      </template>
      <template v-slot:dateTemplate>
        <div style="display:inline-flex">
          <ejs-switch :change="onSwitchToggle"></ejs-switch>
          <label style="padding: 0px 0px 0px 10px">{{ headerText }}</label>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-dropdownlist":DropDownListComponent,
"ejs-switch":SwitchComponent
},
  data() {
    return {
      data: data,
      dropdownData: ["Freight", "Shipment", "Cargo"],
      headerText: "Order Date",
    };
  },
  methods: {
    onSwitchToggle: function (args) {
      this.headerText = args.checked ? "Purchase Date" : "Order Date";
  },
  }
};
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
@font-face {
  font-family: "ej2-headertemplate";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1vTFIAAAEoAAAAVmNtYXDS2c5qAAABjAAAAEBnbHlmQmNFrQAAAdQAAANoaGVhZBRdbkIAAADQAAAANmhoZWEIUQQEAAAArAAAACRobXR4DAAAAAAAAYAAAAAMbG9jYQCOAbQAAAHMAAAACG1heHABHgENAAABCAAAACBuYW1lohGZJQAABTwAAAKpcG9zdA2o3w0AAAfoAAAAQAABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAATBXy9l8PPPUACwQAAAAAANillKkAAAAA2KWUqQAAAAAD9APzAAAACAACAAAAAAAAAAEAAAADAQEAEQAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wLpYAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAsAAAABgAEAAEAAucC6WD//wAA5wLpYP//AAAAAAABAAYABgAAAAIAAQAAAAAAjgG0ABEAAAAAA8kD8wADAAcACwAPABMAFwAbAB8AIwAnACsALwAzADcAOwBPAGsAACUVIzUjFSM1IxUjNSMVIzUjFSM1JRUjNSMVIzUjFSM1IxUjNSMVIzUlFSM1IxUjNSMVIzUjFSM1IxUjNQMVHwYhPwcRITcjDwghNS8HIzUjFSE1IwN2U1NTU1RTU1NTAuxTU1NTVFNTU1MC7FNTU1NUU1NTU1QCAwUGBggIA0QICAcHBQQBAvxsp30ICAcHAgUDAQEDlAECBAUHBwgIfVP+YFOzU1NTU1NTU1NTU6dUVFRUVFRUVFRUplNTU1NTU1NTU1P+NgQIBwcGBAMCAQIEBQcHAwgCdPoBAgQFAwcHCIF8CQgHBgUEAgFTU1MABAAAAAAD9APeADQAbQCuAQAAAAEfCDc1Lwc1PwIPBy8HHww3HwQPATMVPwc1Lx0jDwMfAgUdAR8GBTUzLxQjDx0BFxUfEDsBPxA1Nyc1LxIPEhUCCg8OGxcVExANCgMBAQMDCQQDAgECAxESEhMTExUUFRQTFBISEhEHCwYHCAkKCw0NDw8SuQQGAwIBAgRxlgsKCQcGBAMBAgMDAwUFBQcGBwgICQkKCgsKDAsMDQwNDQ4NDg45BQUDAQEEA/1eAgUGBwkKCwHjeggKDhEUFxs1FRMSEA4NCwoJBwcJBjwODg0ODQ0MDQwLDAoLCgoJCQgIBwYHBQUFAwMDAgEBAQECAgYICg0ODxISFBUXFwwMDA0MDQwMFxcVFBISDw4MCwgGAgIBAQICAwcJCw0PERITFRUXDAwMDA0NDAwMDAsXFRQTEQ8ODQoIBgICAVQEAwgJCgsMCwwbEBAREREZEA8VDAwKCgoIBwYFAwIBAQIDBQYHCAoUFQwLCwsLCgoJCAcGMwsWFhUVHB3QAQIEBggICgueDg4ODg0NDA0MCwsLCwoKCQgJBwgGBwUFBAQDAwECCw8NDxETCrIlawsKCAgGBAIB0AoLCwoLCQgNCAkLDA0NDg4ODg4ZFAIBAwMEBAUGBgYIBwkICQoKCwsLDAwMDA0ODQ4ODgH7DQwMDBgWFRQTERAODAoIBgICAQECAgYICgwOEBETFBUWGAwMDA0MDQwMCxcWFRMSEA8NDAkHAwIBAQEBAQECAwMICwwOEBETFBUWFwwMDQAAAAASAN4AAQAAAAAAAAABAAAAAQAAAAAAAQASAAEAAQAAAAAAAgAHABMAAQAAAAAAAwASABoAAQAAAAAABAASACwAAQAAAAAABQALAD4AAQAAAAAABgASAEkAAQAAAAAACgAsAFsAAQAAAAAACwASAIcAAwABBAkAAAACAJkAAwABBAkAAQAkAJsAAwABBAkAAgAOAL8AAwABBAkAAwAkAM0AAwABBAkABAAkAPEAAwABBAkABQAWARUAAwABBAkABgAkASsAAwABBAkACgBYAU8AAwABBAkACwAkAacgZWoyLWhlYWRlcnRlbXBsYXRlUmVndWxhcmVqMi1oZWFkZXJ0ZW1wbGF0ZWVqMi1oZWFkZXJ0ZW1wbGF0ZVZlcnNpb24gMS4wZWoyLWhlYWRlcnRlbXBsYXRlRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAGoAMgAtAGgAZQBhAGQAZQByAHQAZQBtAHAAbABhAHQAZQBSAGUAZwB1AGwAYQByAGUAagAyAC0AaABlAGEAZABlAHIAdABlAG0AcABsAGEAdABlAGUAagAyAC0AaABlAGEAZABlAHIAdABlAG0AcABsAGEAdABlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAGoAMgAtAGgAZQBhAGQAZQByAHQAZQBtAHAAbABhAHQAZQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAQIBAwEEAAtCVF9DYWxlbmRhcghlbXBsb3llZQAA)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}
.e-icon-calender::before {
  font-family: "ej2-headertemplate";
  content: "\e960";
}
.e-icon-userlogin:before {
  font-family: "ej2-headertemplate";
  content: "\e702";
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-template" %}

>* The `headerTemplate` property is only applicable to Grid columns that have a header element.
>* You can use any HTML or Vue component in the header template to add additional functionality to the header element.

## Stacked header 

In Grid, you can group multiple levels of column headers by stacking the Grid columns. This feature allows you to organize the Grid columns in a more structured and understandable way. This can be achieved by setting the [columns->columns](https://ej2.syncfusion.com/documentation/api/grid/column/#columns) property. Within this property, you can define an array of column objects to group together as sub-headers under a main header. You can define the `headerText` property of each sub-header column to set the text for that sub-header.

You can customize the appearance of the stacked header elements by using the `headerTemplate` property. This allows you to render custom HTML elements or Vue components to the header. 

Here's an example of how to use stacked headers with a custom `headerTemplate` in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" allowPaging="true">
      <e-columns>
        <e-column field="OrderID" width="120" textAlign="Center" :headerTemplate="'orderIDTemplate'"></e-column>
        <e-column headerText="Order Details" :columns="orderColumns" :headerTemplate="'orderDetailsTemplate'"></e-column>
        <e-column headerText="Ship Details" :columns="shipColumns" :headerTemplate="'shipDetailsTemplate'"></e-column>
      </e-columns>
      <template v-slot:orderIDTemplate>
        <div>
          <a href="#">OrderID</a>
        </div>
      </template>
      <template v-slot:orderDetailsTemplate>
        <div>
          <ejs-dropdownlist index="0" :dataSource="dropdownData"></ejs-dropdownlist>
        </div>
      </template>
      <template v-slot:shipDetailsTemplate="{ data }">
        <div>
          <span>{{ data.headerText }}</span>
          <span>(<i class="fa fa-truck"></i>)</span>
        </div>
      </template>
      <template v-slot:datetemplate="{ data }">
        <div><span style="padding-right: 7px;" class="e-icon-calender e-icons headericon"></span>{{ data.headerText }}
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
const orderColumns = [
  {
    field: "OrderDate",
    headerText: "Order Date",
    type: "Date",
    format: "yMd",
    headerTemplate: "datetemplate",
    width: 130,
    textAlign: "Right",
    minWidth: 10,
  },
  {
    field: "Freight",
    headerText: "Freight ($)",
    width: 120,
    format: "C1",
    textAlign: "Right",
    minWidth: 10,
  },
];

const shipColumns = [
  {
    field: "ShippedDate",
    headerText: "Shipped Date",
    type: "Date",
    format: "yMd",
    textAlign: "Right",
    width: 150,
    minWidth: 10,
  },
  {
    field: "ShipCountry",
    headerText: "Ship Country",
    width: 150,
    minWidth: 10,
  },
];
const dropdownData = ["Order Details", "Order Information"];
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

@font-face {
  font-family: "ej2-headertemplate";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format("truetype");
  font-weight: normal;
  font-style: normal;
}

.e-icon-calender::before {
  font-family: "ej2-headertemplate";
  content: "\e960";
}

.e-icon-userlogin:before {
  font-family: "ej2-headertemplate";
  content: "\e702";
}</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" allowPaging="true">
      <e-columns>
          <e-column field="OrderID" width="120" textAlign="Center" :headerTemplate="'orderIDTemplate'"></e-column>
          <e-column headerText="Order Details" :columns="orderColumns" :headerTemplate="'orderDetailsTemplate'"></e-column>
          <e-column headerText="Ship Details" :columns="shipColumns" :headerTemplate="'shipDetailsTemplate'"></e-column>
      </e-columns>
      <template v-slot:orderIDTemplate>
        <div>
          <a href="#">OrderID</a>
        </div>
      </template>
      <template v-slot:orderDetailsTemplate>
        <div>
          <ejs-dropdownlist index="0" :dataSource="dropdownData"></ejs-dropdownlist>
        </div>
      </template>
      <template v-slot:shipDetailsTemplate="{ data }">
        <div>
          <span>{{ data.headerText }}</span>
          <span>(<i class="fa fa-truck"></i>)</span>
        </div>
      </template>
      <template v-slot:datetemplate="{ data }">
        <div><span style="padding-right: 7px;" class="e-icon-calender e-icons headericon"></span>{{ data.headerText }}</div>
      </template>
    </ejs-grid>
  </div>
</template>

<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-dropdownlist": DropDownListComponent
},
  data() {
    return {
      data: data,
      orderColumns: [
        {
          field: "OrderDate",
          headerText: "Order Date",
          type: "Date",
          format: "yMd",
          headerTemplate: "datetemplate",
          width: 130,
          textAlign: "Right",
          minWidth: 10,
        },
        {
          field: "Freight",
          headerText: "Freight ($)",
          width: 120,
          format: "C1",
          textAlign: "Right",
          minWidth: 10,
        },
      ],

      shipColumns: [
        {
          field: "ShippedDate",
          headerText: "Shipped Date",
          type: "Date",
          format: "yMd",
          textAlign: "Right",
          width: 150,
          minWidth: 10,
        },
        {
          field: "ShipCountry",
          headerText: "Ship Country",
          width: 150,
          minWidth: 10,
        },
      ],
      dropdownData: ["Order Details", "Order Information"],
    };
  },
};
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
@font-face {
  font-family: "ej2-headertemplate";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}
.e-icon-calender::before {
  font-family: "ej2-headertemplate";
  content: "\e960";
}
.e-icon-userlogin:before {
  font-family: "ej2-headertemplate";
  content: "\e702";
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-stacked-template" %} 

## Align the text of header text

You can horizontally align the text in column headers of the Grid component using the [headerTextAlign](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertextalign) property. By default, the text is aligned to the left, but you can change the alignment by setting the value of the `headerTextAlign` property to one of the following options:

* **Left**: Aligns the text to the left (default).
* **Center**: Aligns the text to the center.
* **Right**: Aligns the text to the right.
* **Justify**: Header text is justified.

The following example demonstrates how to dynamically change the alignment of the header text based on DropDown change:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-headertext-align/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-headertext-align/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-headertext-align" %}

>* The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/documentation/api/grid/column/#textalign) property.
>* You can also use the `headerTextAlign` property with the stacked header feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. The property will align the header text in the sub-headers as well.

## Autowrap the header text

The Autowrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you should set the appropriate [width](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable Autowrap, set the `allowTextWrap` property to **true**. You can also configure the auto wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/vue/documentation/api/grid/textWrapSettings/#wrapmode) property.

Grid provides the below three options for configuring:

* **Both**: This is the default value for wrapMode. With this option, both the grid header text and content is wrapped.
* **Header**: With this option, only the grid header text is wrapped.
* **Content**: With this option, only the grid content is wrapped.

>* If a column width is not specified, then the Autowrap of columns will be adjusted with respect to the grid's width.
>* If a column's header text contains no white space, the text may not be wrapped.
>* If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, you can use the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate) and [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) properties of the column to customize the appearance of the header and cell content.

The following example demonstrates how to dynamically change the auto-wrap of the header text based on DropDown change.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-autowarp/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-autowarp/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-autowarp" %}

## Change the height of header

Changing the height of the header can be useful in cases where the default height is not sufficient to display the header content cell. For example, if you have a header with a lot of text or if you want to add an image to the header, you may need to increase the height of the header to accommodate the content.This can be easily achieved by changing the height of the header using CSS or by dynamically adjusting the height using a methods.

**Using css**

You can use CSS to override the default height of the **.e-grid .e-headercell** class to change the height of the header. Here is an example code snippet:

```css
.e-grid .e-headercell {
  height: 130px;
}
```

**Using methods**

To change the height of the header dynamically, you can use the [getHeaderContent](https://ej2.syncfusion.com/vue/documentation/api/grid#getheadercontent) method to get the header content element of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. Then, you can use the **querySelectorAll** method to get all the header cell elements with the class **e-headercell**. Finally, you can loop through each header cell element and set its style property to adjust the height.

The following example demonstrates how to dynamically change the height of the header based on a Button `click` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-height/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-height/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-height" %}

>* You can also use the [getHeaderTable](https://ej2.syncfusion.com/vue/documentation/api/grid#getheadertable) method to get the table element of the header, and then adjust the height.
>* You cannot change the height of row below the default height of 42px using the **e-columnheader** class.

## Change header text dynamically

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides a way to modify the header text of a corresponding column in real-time based on events or other events. This feature can be useful in various scenarios, such as displaying a custom header text for a specific column or updating the header text dynamically based on input. By allowing for dynamic changes to the header text, the Grid provides a more flexible and customizable experience.

**Using Event**

To modify the header text of a corresponding column dynamically, you can use the [headerCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#headercellinfo) event provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. This event is triggered for each header cell element rendered in the Grid.

When the `headerCellInfo` event is triggered, it provides a **HeaderCellInfoEventArgs** object as a parameter. This object contains the following properties:

* **cell**: Defines the header cell that is being modified.
* **node**: Defines the DOM element of the header cell that is being modified.

You can use these properties to access and modify the header text of the corresponding column. Once the header text is modified, you can refresh the Grid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/documentation/api/grid#refreshheader) method of the Grid.

**Using method**

The Grid component provides several methods that allow you to change the column header text dynamically. Here are some of the methods you can use:

1. [getColumnByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnbyfield): This method takes a field name as a parameter and returns the entire column object that corresponds to that field name, including properties such as headerText, width, and alignment. You can use this method to modify any aspect of the column.

2.	[getColumnHeaderByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyfield): Retrieves the header element of a column based on its field name. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

3.	[getColumnIndexByField](https://ej2.syncfusion.com/documentation/api/grid/#getcolumnindexbyfield): Retrieves the index of a column based on its field name. You can then use the `getColumnByIndex` method to retrieve the column object and modify its `headerText` property to change the header text.

4.	[getColumnByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnbyuid): Retrieves the column object based on its unique identifier (UID). You can modify the `headerText` property of the column object to change the header text.

5.	[getColumnHeaderByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyindex): Retrieves the header element of a column based on its zero-based index. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

6.	[getColumnIndexByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnindexbyuid): Retrieves the index of a column based on its unique identifier (UID). You can then use the `getColumnByIndex` method to retrieve the column object and modify its `headerText` property to change the header text.

7.	[getColumnHeaderByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyuid): Retrieves the header element of a column based on its unique identifier (UID). You can modify the **textContent** property of the  header element to change the header text. This method does not return a reference to the column object itself, only to the header element.If you only have an `template` for the column header, and the column itself is not defined with a `field` , then you can use the `getColumnHeaderByUid` method to get a reference to the header element and modify its text content to change the header text.
	
>* When you change the header text dynamically, you need to **refresh** the Grid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshheader) method.
>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.

Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-text/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-text" %}

**Changing header text using headerValueAccessor property**

The `headerValueAccessor` property in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to customize the text of a column header cell, which can be useful in scenarios where you want to change the text to display it in a different language, format or add additional information to the header. This property is triggered every time the header cell is rendered.

To enable the `headerValueAccessor` property, you need to set the [headerValueAccessor](https://ej2.syncfusion.com/vue/documentation/api/grid/headervalueaccessor/) property of the corresponding column. This property accepts a callback function that takes two arguments:

  * **field**: Represents the current field of the column.
  * **column**: Represents the current column object.

>* The `headerValueAccessor` property should only be used to change the text of the header and not to perform any DOM-oriented operations such as adding or manipulating DOM elements in the header. In such cases, you should use the [headerCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#headercellinfo) event instead.
>* The `headerValueAccessor` property is triggered every time the header cell is rendered or refreshed.
>* The callback function defined for the `headerValueAccessor` property should return a string that represents the new text of the column header.
>* If you only need to refresh the column header, you can dynamically change the header content using the [refreshHeader](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshheader) method.
>* You can use this property for individual columns or for all columns by adding it to the grid's properties.
  
Here's an example of how to use the `headerValueAccessor` property to change the header text of a column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-change-valueaccessor/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-change-valueaccessor/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-change-valueaccessor" %}

**Changing the header text of all columns**

If you want to change the header text of all columns in the grid, you can loop through the Columns collection of the grid and set the `headerText` property for each column. Here is an example:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-headertext-all/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-headertext-all/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column/column-header-headertext-all" %}
        
## Change the orientation of header text

By default, the text in the column headers of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid control is oriented horizontally. However, in some cases, you may want to change the orientation of the header text to vertical, diagonal, or at a custom angle. This can be achieved by adding a custom CSS class to the column header cell using the [customAttributes](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property of the Grid columns.

Follow the below steps to change the orientation of the header text in Grid:

**Step 1**: **Create a CSS class with orientation style for grid header cell**

To `rotate` the header text, you can create a CSS class with the `transform` property that rotates the header text 90 degrees. This class will be added to the header cell using the `customAttributes` property.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**: **Add the custom CSS class to the grid column**

Once you have created the CSS class, you can add it to the particular column by using the `customAttributes` property. This property allows you to add any custom  attribute to the grid column.

For example, to add the orientationcss class to the Freight column, you can use the following code:

```typescript
 <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' :customAttributes='customAttributes' width=80></e-column>
```

**Step 3**: **Resize the header cell height**

After adding the custom CSS class to a column, you need to resize the header cell height so that the rotated header text is fully visible. You can do this by using the following code:

```typescript

setHeaderHeight: function () {
       const textWidth = document.querySelector('.orientationcss > div').scrollWidth;
        const headerCell= document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            // Assign the obtained textWidth as the height of the headerCell.
            headerCell.item(i).style.height = textWidth + 'px';
        }
    }

```

The following example demonstrates how to change the orientation of the **Freight** column header text to 90 degrees:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-roatation/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-roatation/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column/column-header-roatation" %}

## Custom tooltip for header

Custom tooltips for headers provide additional information when hovering over a column header in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. This can be useful in situations where there is not enough space to display all of the information related to a column, or when there is additional context that may be helpful.

To enable custom tooltips for headers, you can use the [beforeRender](https://ej2.syncfusion.com/vue/documentation/api/grid/#beforeRender) event of the Grid component. This event is triggered for each header cell before it is rendered, allowing you to add a custom tooltip to the header cell using [tooltip](https://ej2.syncfusion.com/vue/documentation/tooltip/content) component.

Here's an example of how to use the `beforeRender` event to add a custom tooltip to a header cell:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-tooltip" %}

> * The [headerCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Customize header text styles 

Customizing the grid header styles allows you to modify the appearance of the column header in the Grid control to meet your design requirements. You can customize the font, background color, and other styles of the header cells. To customize the header styles in the grid, you can use CSS, properties, methods, or event support provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component.

### Using CSS

You can apply styles to the header cells using CSS selectors. The Grid provides a class name for each header cell element, which you can use to apply styles to that specific header cell. The **.e-headercell** class can be used to change the background color and text color of the column header.

```CSS
  .e-grid .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```
Here's an example that demonstrates how to customize the appearance of a column header in the Grid using **className**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-css/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-css/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-using-css" %}

### Using property 

You can customize the appearance of the column headers in Grid using the [customAttributes](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for grid header cells. You can also set multiple CSS properties to the custom class using the `customAttributes` property.

To customize the header of a column, you can follow the steps below:

Step 1: Define a CSS class that specifies the styles you want to apply to the header cell of the column. For example, to change the background color and text color of the header cell, define a CSS class like this:

  ```CSS
    .e-grid .e-headercell.customcss {
       background-color: rgb(43, 205, 226);
       color: black;
    }

  ```

Step 2: Set the **customAttributes** property of the desired column to an object that contains the CSS class **customcss**. This CSS class will be applied to the header cell of the specified column in the Grid.

  ```ts

    {field="Freight" headerText="Freight" :customAttributes="{class: '.customcss'}}

  ```

The following example demonstrates how to customize the appearance of the **OrderID** and **OrderDate** columns using custom attributes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-property/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-property/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-using-property" %}

### Using method 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides methods to customize the appearance of the grid columns header.

1. [getColumnHeaderByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyindex): The method is used to customize the appearance of a specific column header in the grid by specifying the index of the column for which you want to customize the header.

2. [getColumnHeaderByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyfield): This method is used to retrieve the header element of a specific column by its field name. You can use the retrieved element to customize the appearance of the header element.
3. [getColumnHeaderByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyuid): This method is used to retrieve the header element of a specific column by its unique ID. You can use the retrieved element to customize the appearance of the header element.

 4. [getColumnIndexByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnindexbyfield):This method is used to retrieve the index of a specific column by its field name. You can use the retrieved index to access the header element and customize its appearance.

 5. [getColumnIndexByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnindexbyuid): This method is used to retrieve the index of a specific column by its unique ID. You can use the retrieved index to access the header element and customize its appearance.

Here's an example of how to use these methods to change the style of a specific column header:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-using-method" %}

>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.

### Using event

To customize the appearance of the grid header, you can handle the [headerCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event of the grid. This event is triggered when each header cell is rendered in the grid, and provides an object that contains information about the header cell. You can use this object to modify the styles of the header column.

The following example demonstrates how to add a `headerCellInfo` event handler to the grid. In the event handler, checked whether the current header column is **Order Date** field and then applied the appropriate CSS class to the cell based on its value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-event/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-using-event/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-using-event" %}

## How to refresh header 

The refresh header feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid allows you to update the header section of the grid whenever changes are made to the grid's columns. This feature is useful when you want to reflect changes in the header immediately, such as modifying the column header text, width, or alignment.

To use the refresh header feature, you can call the [refreshHeader](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshheader) method of the Grid component. This method updates the grid header with the latest changes made to the columns.

The following example demonstrates how to use the `refreshHeader` method to update the grid header:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-refresh/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-header-refresh/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-header-refresh" %}

>* The `refreshHeader` method updates only the grid header and not the entire grid.
>* If you want to refresh the entire grid, you can use the `refresh` method instead.

## How to get header element 

To get the header element in a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you can use one of the following methods:

1. [getHeaderContent](https://ej2.syncfusion.com/vue/documentation/api/grid/#getheadercontent): This method returns the header div element of the Grid. You can use this method to access the entire header content of the Grid.

    ```ts
    const headerElement = this.$refs.grid.ej2Instances.getHeaderContent();    
    ```
2. [getHeaderTable](https://ej2.syncfusion.com/vue/documentation/api/grid/#getheadertable): This method returns the header table element of the Grid. You can use this method to access only the header table of the Grid.

   ```ts
    const headerTableElement = this.$refs.grid.ej2Instances.getHeaderTable();
   ```

3. [getColumnHeaderByUid](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnindexbyuid): This method returns the column header element by its unique identifier.

   ```ts
    const columnHeaderElement = this.$refs.grid.ej2Instances.getColumnHeaderByUid("e-grid2");
   ```

4. [getColumnHeaderByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyindex): This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = this.$refs.grid.ej2Instances.getColumnHeaderByIndex(0);
   ```
5. [getColumnHeaderByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyfield): This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = this.$refs.grid.ej2Instances.getColumnHeaderByField("OrderID"); 
   ```

>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.