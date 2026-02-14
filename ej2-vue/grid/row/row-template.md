---
layout: post
title: Row template in Vue Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Vue Grid component

The row template feature in Grid allows you to customize the appearance and layout of rows in the grid. This feature is useful when you want to display custom content, such as images, buttons, or other controls, within the rows.

To enable the row template feature, you need to set the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
        <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rowphoto">
            <img class="photo"
              :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'"
              :alt="data.EmployeeID" />
          </td>
          <td class="details">
            <table class="CardTable">
              <colgroup>
                <col width="30%">
                <col width="10%">
              </colgroup>
              <tbody>
                <tr>
                  <td class="CardHeader">First Name</td>
                  <span>:</span>
                  <td class="CardData">{{ data.FirstName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Last Name</td>
                  <span>:</span>
                  <td>{{ data.LastName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Title</td>
                  <span>:</span>
                  <td>{{ data.Title }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
const data = employeeData;
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

.rowphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) and (min-width: 320px) {
  .rowphoto img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .rowphoto img {
    width: 70px;
    height: 70px;
  }
}

.rowphoto,
.details {
  border-color: #e0e0e0;
  border-style: solid;
}

.rowphoto {
  border-width: 1px 0px 0px 0px;
  text-align: center;
}

.details {
  border-width: 1px 0px 0px 0px;
  padding-left: 20%;
}

.details>table {
  width: 100%;
}

.CardHeader {
  font-weight: bolder;
}

td {
  padding: 2px 2px 3px 4px;
}</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
    <e-columns>
      <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
      <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
    </e-columns>
    <template v-slot:rowTemplate="{data}">
          <tr>
        <td class="rowphoto">
          <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
        </td>
        <td class="details">
          <table class="CardTable">
            <colgroup>
              <col width="30%">
              <col width="10%">
            </colgroup>
            <tbody>
              <tr>
                <td class="CardHeader">First Name</td>
                <span>:</span>
                <td class="CardData">{{ data.FirstName }}</td>
              </tr>
              <tr>
                <td class="CardHeader">Last Name</td>
                <span>:</span>
                <td>{{ data.LastName }}</td>
              </tr>
              <tr>
                <td class="CardHeader">Title</td>
                <span>:</span>
                <td>{{ data.Title }}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
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
  data() {
    return {
      data: employeeData,
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
.rowphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) and (min-width: 320px) {
  .rowphoto img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .rowphoto img {
    width: 70px;
    height: 70px;
  }
}

.rowphoto,
.details {
  border-color: #e0e0e0;
  border-style: solid;
}

.rowphoto {
  border-width: 1px 0px 0px 0px;
  text-align: center;
}

.details {
  border-width: 1px 0px 0px 0px;
  padding-left: 20%;
}

.details > table {
  width: 100%;
}

.CardHeader {
  font-weight: bolder;
}

td {
  padding: 2px 2px 3px 4px;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template" %}

## Row template with formatting

The row template feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to customize the layout of rows in the grid. This is useful when you want to display images, buttons, or other custom content within the rows of a grid.

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides the [columns.format](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format) property to format the values displayed in each column. However, when using the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate), the `columns.format` property cannot be directly applied to format the values inside the template.

To format the values within the row template, you can define a global function that handles the formatting logic. This function can be invoked inside the template to format the corresponding values.

Here is an example of how to define a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
        <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rowphoto">
            <img class="photo"
              :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'"
              :alt="data.EmployeeID" />
          </td>
          <td class="details">
            <table class="CardTable">
              <colgroup>
                <col width="30%" />
                <col width="10%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="CardHeader">First Name</td>
                  <span>:</span>
                  <td class="CardData">{{ data.FirstName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Last Name</td>
                  <span>:</span>
                  <td>{{ data.LastName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Title</td>
                  <span>:</span>
                  <td>{{ data.Title }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Birth Date</td>
                  <span>:</span>
                  <td>{{ format(data.BirthDate) }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Hire Date</td>
                  <span>:</span>
                  <td>{{ format(data.HireDate) }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from "@syncfusion/ej2-base";
let instance = new Internationalization();
const data = employeeData;
const format = function (value) {
  return instance.formatDate(value, { skeleton: "yMd", type: "date" });
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

.rowphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) and (min-width: 320px) {
  .rowphoto img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .rowphoto img {
    width: 70px;
    height: 70px;
  }
}

.rowphoto,
.details {
  border-color: #e0e0e0;
  border-style: solid;
}

.rowphoto {
  border-width: 1px 0px 0px 0px;
  text-align: center;
}

.details {
  border-width: 1px 0px 0px 0px;
  padding-left: 20%;
}

.details>table {
  width: 100%;
}

.CardHeader {
  font-weight: bolder;
}

td {
  padding: 2px 2px 3px 4px;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="335" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column headerText="Employee Image" width="150" textAlign="Center"></e-column>
        <e-column headerText="Employee Details" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rowphoto">
           <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
          </td>
          <td class="details">
            <table class="CardTable">
              <colgroup>
                <col width="30%" />
                <col width="10%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="CardHeader">First Name</td>
                  <span>:</span>
                  <td class="CardData">{{ data.FirstName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Last Name</td>
                  <span>:</span>
                  <td>{{ data.LastName }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Title</td>
                  <span>:</span>
                  <td>{{ data.Title }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Birth Date</td>
                  <span>:</span>
                  <td>{{ format(data.BirthDate) }}</td>
                </tr>
                <tr>
                  <td class="CardHeader">Hire Date</td>
                  <span>:</span>
                  <td>{{ format(data.HireDate) }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from "@syncfusion/ej2-base";
let instance = new Internationalization();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
    };
  },
  methods: {
    format: function (value) {
      return instance.formatDate(value, { skeleton: "yMd", type: "date" });
    },
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
.rowphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 600px) and (min-width: 320px) {
  .rowphoto img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 800px) and (min-width: 600px) {
  .rowphoto img {
    width: 70px;
    height: 70px;
  }
}

.rowphoto,
.details {
  border-color: #e0e0e0;
  border-style: solid;
}

.rowphoto {
  border-width: 1px 0px 0px 0px;
  text-align: center;
}

.details {
  border-width: 1px 0px 0px 0px;
  padding-left: 20%;
}

.details > table {
  width: 100%;
}

.CardHeader {
  font-weight: bolder;
}

td {
  padding: 2px 2px 3px 4px;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template-format" %}


>When using the `rowTemplate` feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, keep in mind that any formatting applied to columns using the `columns.format` property will not work inside the template.

## Render syncfusion<sup style="font-size:70%">&reg;</sup> control in row template

The Grid allows you to render custom Syncfusion<sup style="font-size:70%">&reg;</sup> controls within the rows of the grid. This feature is helpful as it enables you to display interactive Syncfusion<sup style="font-size:70%">&reg;</sup> controls instead of field values in the grid.

To enable a Syncfusion<sup style="font-size:70%">&reg;</sup> control in a row template, you need to set the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

Here is an example that demonstrates rendering Syncfusion<sup style="font-size:70%">&reg;</sup> controls within a row template :

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :rowTemplate="'rowTemplate'">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
        <e-column field="Quantity" headerText="Quantity" width="170">
        </e-column>
        <e-column field="ShipAddress" headerText="Ship Address" width="170"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120"></e-column>
        <e-column headerText="Order Status" width="120"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rows">
            <ejs-chiplist width="50" id="chip" :text="data.OrderID">
            </ejs-chiplist>
          </td>
          <td class="rows">
            <ejs-numerictextbox width="150" :value="data.Quantity">
            </ejs-numerictextbox>
          </td>
          <td class="rows">{{ data.ShipAddress }} </td>
          <td class="rows">
            <ejs-datepicker width="150" :value="data.OrderDate">
            </ejs-datepicker>
          </td>
          <td class="rows">
            <ejs-dropdownlist width="150" :value="data.OrderStatus" :dataSource="dropData" :popupHeight="150"
              :popupWidth="150">
            </ejs-dropdownlist>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent as EjsChiplist } from '@syncfusion/ej2-vue-buttons';
import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from './datasource.js';
const data = employeeData;
const dropData = ['Order Placed', 'Processing', 'Delivered'];
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

.rows {
  border-color: #e0e0e0;
  border-style: solid;
  text-align: "Left";
  border-width: 1px 0px 0px 0px;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :rowTemplate="'rowTemplate'">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" ></e-column>
        <e-column field="Quantity" headerText="Quantity" width="170" >
        </e-column>
        <e-column field="ShipAddress" headerText="Ship Address" width="170"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" ></e-column>
        <e-column headerText="Order Status" width="120" ></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rows">
            <ejs-chiplist width="50" id="chip" :text="data.OrderID">
            </ejs-chiplist>
          </td>
          <td class="rows">
            <ejs-numerictextbox width="150" :value="data.Quantity">
            </ejs-numerictextbox>
          </td>
          <td class="rows">{{data.ShipAddress}} </td>
          <td class="rows">
            <ejs-datepicker width="150" :value="data.OrderDate">
            </ejs-datepicker>
          </td>
          <td class="rows">
            <ejs-dropdownlist width="150" :value="data.OrderStatus"
            :dataSource="dropData" :popupHeight="150" :popupWidth="150">
            </ejs-dropdownlist>
          </td>
        </tr>
      </template>
   </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-chiplist":ChipListComponent,
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-datepicker":DatePickerComponent,
"ejs-dropdownlist":DropDownListComponent
},
  data() {
    return {
      data: employeeData,
      dropData : ['Order Placed', 'Processing', 'Delivered']
    };
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
.rows {
   border-color: #e0e0e0;
   border-style: solid;
   text-align: "Left";
   border-width: 1px 0px 0px 0px;
}

</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template-custom" %}

## Render Syncfusion<sup style="font-size:70%">&reg;</sup> Chart in row template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides the flexibility to include custom controls, such as Chart, within the rows of the Grid. This feature enhances Grid interactivity by allowing you to display graphical representations of data instead of plain text.

To render a Syncfusion<sup style="font-size:70%">&reg;</sup> Chart within a row template of the Grid, you can utilize the [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate)  property. This property accepts a custom HTML template that specifies the layout for each row, allowing for rich data visualization.

Here is an example that demonstrates rendering Syncfusion<sup style="font-size:70%">&reg;</sup> Chart within a row template:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="dataGrid"  height="400" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column field="Name" headerText="Employee Name"  width="150" ></e-column>
        <e-column field="Designation" headerText="Designation" width="150"></e-column>
        <e-column field="Team" headerText="Team(s)" width="150"></e-column>
        <e-column headerText="Employee Performance" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr :style="{ maxHeight: '159px' }">
          <td class="cutom">
            <div>{{ data.Name }}</div>
          </td>
          <td class="cutom">
            <div>{{ data.Designation }}</div>
          </td>
          <td class="cutom">
            <div>{{ data.Team }}</div>
          </td>
          <td class="details">
            <ejs-chart :id="'chart-container-' + data.EmployeeID" :primaryXAxis="primaryXAxis" :dataSource="getChartData(data.EmployeeID)" height="150">
              <e-series-collection>
                <e-series type="Column" xName="month" yName="performance" name="Performance"></e-series>
              </e-series-collection>
            </ejs-chart>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
  import { provide, ref} from "vue";
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
  import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
  import { employeeData, employeePerformanceData } from "./datasource.js";

  const grid=ref(null);
  const dataGrid= employeeData;
  const primaryXAxis= {
    valueType: 'Category',
  };
  const getChartData=function(employeeID) {
    const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID);
    return employeePerformance ? employeePerformance.chartData : [];
  }
  provide('chart', [ColumnSeries, Category]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  .cutom,
  .details {
    border-color: #e0e0e0;
    border-style: solid;
  }
  .cutom {
    border-width: 1px 0px 0px 0px;
  }
  .details {
    border-width: 1px 0px 0px 0px;
  }
  .details > table {
    width: 100%;
  }
  td {
    padding: 2px 2px 3px 4px;
  }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data"  height="400" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column field="Name" headerText="Employee Name"  width="150" ></e-column>
        <e-column field="Designation" headerText="Designation" width="150"></e-column>
        <e-column field="Team" headerText="Team(s)" width="150"></e-column>
        <e-column headerText="Employee Performance" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr :style="{ maxHeight: '159px' }">
          <td class="custom">
            <div>{{ data.Name }}</div>
          </td>
          <td class="custom">
            <div>{{ data.Designation }}</div>
          </td>
          <td class="custom">
            <div>{{ data.Team }}</div>
          </td>
          <td class="details">
            <ejs-chart :id="'chart-container-' + data.EmployeeID" :primaryXAxis="primaryXAxis"
              :dataSource="getChartData(data.EmployeeID)" height="150">
              <e-series-collection>
                <e-series type="Column" xName="month" yName="performance" name="Performance"></e-series>
              </e-series-collection>
            </ejs-chart>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, } from "@syncfusion/ej2-vue-grids";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { employeeData, employeePerformanceData } from "./datasource.js";
  
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective,
  },
  data() {
    return {
      data: employeeData,
      primaryXAxis: {
        valueType: 'Category',
      },
    };
  },
  methods: {
    getChartData(employeeID) {
      const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID);
      return employeePerformance ? employeePerformance.chartData : [];
    }
  },
  provide: {
    chart: [ColumnSeries, Category],
  }
};
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  .custom,
  .details {
   border-color: #e0e0e0;
   border-style: solid;
  }
  .custom {
   border-width: 1px 0px 0px 0px;
  }
  .details {
   border-width: 1px 0px 0px 0px;
  }
  .details > table {
    width: 100%;
  }
  td {
   padding: 2px 2px 3px 4px;
  }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-template-chart" %}

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreign key column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view