---
layout: post
title: Detail template in Vue Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
 
# Detail template in Vue Grid component

The detail template in the Grid component allows you to display additional information about a specific row in the grid by expanding or collapsing detail content. This feature is useful when you need to show additional data or custom content that is specific to each row in the grid. You can use the [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid#detailtemplate) property to define an HTML template for the detail row. This template can include any HTML element or Vue component that you want to display as detail content.

Here's an example of using the `detailTemplate` property in the grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field="FirstName" headerText="First Name" width="140"></e-column>
        <e-column field="LastName" headerText="Last Name" width="140"></e-column>
        <e-column field="Title" headerText="Title" width="150"></e-column>
        <e-column field="Country" headerText="Country" width="150"></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="40%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="rowphoto" rowSpan="4" style="text-align: center">
                <img
                  class="photo"
                  :src="
                    'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                    data.EmployeeID +
                    '.png'
                  "
                  :alt="data.EmployeeID"
                />
              </td>
              <td>
                <span style="font-weight: 500">First Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Postal Code:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> City:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Phone:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">City:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Country:</span>
                {{ data.FirstName }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
provide('grid', [DetailRow]);
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
  padding-left: 18px;
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
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field="FirstName" headerText="First Name" width="140"></e-column>
        <e-column field="LastName" headerText="Last Name" width="140"></e-column>
        <e-column field="Title" headerText="Title" width="150"></e-column>
        <e-column field="Country" headerText="Country" width="150"></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="40%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="rowphoto" rowSpan="4" style="text-align: center">
                <img
                  class="photo"
                  :src="
                    'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                    data.EmployeeID +
                    '.png'
                  "
                  :alt="data.EmployeeID"
                />
              </td>
              <td>
                <span style="font-weight: 500">First Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Postal Code:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> City:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Phone:</span>
                {{ data.FirstName }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">City:</span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500"> Country:</span>
                {{ data.FirstName }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
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
    };
  },
  provide: { grid: [DetailRow] },
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
  padding-left: 18px;
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
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail" %}

## Rendering custom component

The Grid component provides a powerful feature that allows you to render custom components inside the detail row. This feature is helpful when you need to add additional information or functionality for a specific row in the grid.

To render a custom component inside the detail row, you need to define a template using the [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid#detailtemplate)  property and handle the [detailDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid#detaildatabound) event.This template can include any HTML element or Vue component that you want to display as the detail content.

The `detailDataBound` event is an event that is triggered after a detail row is bound to data. This event provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/vue/documentation/api/grid/detaildataboundeventargs) as a parameter.

For example, to render grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as grid component in the `detailDataBound` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-detail-custom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-detail-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-custom" %}

## Expand by external button

The Grid provides a feature that allows you to expand the detail row of a grid using an external button. By default, detail rows render in a collapsed state, but this feature enables users to view additional details associated with a particular row. 

To achieve expanding the detail row of a grid using an external button, you need to invoke the [expand](https://ej2.syncfusion.com/vue/documentation/api/grid/detailRow#expand) method provided by the **detailRowModule** object of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid library. This method will expand the detail row of a specific grid row.

Here is an example of how to use the `expand` method to expand a detail row:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div>
      <ejs-textbox ref="textbox" placeholder="Enter the row Index" width="250px" floatLabelType="Auto"></ejs-textbox>
      <ejs-button style="margin: 20px 0px 0 10px" v-on:click="clickHandler">Expand</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'">
        <e-columns>
          <e-column field="FirstName" headerText="First Name" width="140"></e-column>
          <e-column field="LastName" headerText="Last Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="150"></e-column>
          <e-column field="Country" headerText="Country" width="150"></e-column>
        </e-columns>
        <template v-slot:detailTemplate="{ data }">
          <table class="CardTable" cellpadding="3" cellspacing="2">
            <colgroup>
              <col width="35%" />
              <col width="35%" />
              <col width="40%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="rowphoto" rowspan="4" style="text-align: center">
                  <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                    data.EmployeeID +
                    '.png'
                    " :alt="data.EmployeeID" />
                </td>
                <td>
                  <span style="font-weight: 500">First Name:</span>
                  {{ data.FirstName }}
                </td>
                <td>
                  <span style="font-weight: 500">Postal Code:</span>
                  {{ data.PostalCode }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Last Name:</span>
                  {{ data.LastName }}
                </td>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Title:</span>
                  {{ data.Title }}
                </td>
                <td>
                  <span style="font-weight: 500">Phone:</span>
                  {{ data.Phone }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
                <td>
                  <span style="font-weight: 500">Country:</span>
                  {{ data.Country }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent as EjsTextbox } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from "./datasource.js";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
const grid = ref(null);
const textbox = ref(null);
const data = employeeData;
const clickHandler = function () {
  grid.value.ej2Instances.detailRowModule.expand(
    textbox.value.ej2Instances.value
  );
}
provide('grid', [DetailRow]);
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
  padding-left: 18px;
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
    <div>
      <ejs-textbox ref="textbox" placeholder="Enter the row Index" width="250px" floatLabelType="Auto"></ejs-textbox>
      <ejs-button style="margin: 20px 0px 0 10px" v-on:click="clickHandler">Expand</ejs-button>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" height="315" width="auto" :detailTemplate="'detailTemplate'" >
        <e-columns>
          <e-column field="FirstName" headerText="First Name" width="140"></e-column>
          <e-column field="LastName" headerText="Last Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="150"></e-column>
          <e-column field="Country" headerText="Country" width="150"></e-column>
        </e-columns>
        <template v-slot:detailTemplate="{ data }">
          <table class="CardTable" cellpadding="3" cellspacing="2">
            <colgroup>
              <col width="35%" />
              <col width="35%" />
              <col width="40%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="rowphoto" rowspan="4" style="text-align: center">
                  <img
                    class="photo"
                    :src="
                      'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                      data.EmployeeID +
                      '.png'
                    "
                    :alt="data.EmployeeID"
                  />
                </td>
                <td>
                  <span style="font-weight: 500">First Name:</span>
                  {{ data.FirstName }}
                </td>
                <td>
                  <span style="font-weight: 500">Postal Code:</span>
                  {{ data.PostalCode }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Last Name:</span>
                  {{ data.LastName }}
                </td>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">Title:</span>
                  {{ data.Title }}
                </td>
                <td>
                  <span style="font-weight: 500">Phone:</span>
                  {{ data.Phone }}
                </td>
              </tr>
              <tr>
                <td>
                  <span style="font-weight: 500">City:</span>
                  {{ data.City }}
                </td>
                <td>
                  <span style="font-weight: 500">Country:</span>
                  {{ data.Country }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </ejs-grid>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from "./datasource.js";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
name: "App",
components: {
"ejs-textbox":TextBoxComponent,
"ejs-button":ButtonComponent,
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
    clickHandler: function () {
      this.$refs.grid.ej2Instances.detailRowModule.expand(
        this.$refs.textbox.ej2Instances.value
      );
    },
  },
  provide: {
    grid: [DetailRow],
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
  padding-left: 18px;
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
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-expand" %}

## Customize detail template icon

The detail template icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid is used to expand or collapse the detail content of a row. By default, the icon represents a right arrow for the collapsed state and a down arrow for the expanded state. If you want to customize this icon, you can achieve it by overriding the following CSS styles:

```css

  .e-grid .e-icon-grightarrow::before {
      content: "\e7a9";
  }
  .e-grid .e-icon-gdownarrow::before {
      content: "\e7fe";
  }

```

Here is an example of how to customize the detail template icon:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' id='Grid' :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
        <e-column field='FirstName' headerText='Name' width='120'></e-column>
        <e-column field='Title' headerText='Title' width='170'></e-column>
        <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
        <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <td rowspan="4" style="text-align: center">
                <img class="photo" :src="'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                  data.EmployeeID +
                  '.png'
                  " :alt="data.EmployeeID" />
              </td>
              <td>
                <span style="font-weight: 500">First Name: </span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500">Postal Code: </span>
                {{ data.PostalCode }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name: </span>
                {{ data.LastName }}
              </td>
              <td>
                <span style="font-weight: 500">City: </span> {{ data.City }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title: </span> {{ data.Title }}
              </td>
              <td>
                <span style="font-weight: 500">Phone: </span>
                {{ data.HomePhone }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Address: </span>
                {{ data.Address }}
              </td>
              <td>
                <span style="font-weight: 500">HireDate: </span>
                {{ format(data.HireDate) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from "@syncfusion/ej2-base";
let instance = new Internationalization();
const data = employeeData;
const format = function (value) {
  return instance.formatDate(value, { skeleton: "yMd", type: "date" });
}
provide('grid', [DetailRow]);
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

.detailtable td {
  font-size: 13px;
  padding: 4px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 800px) and (min-width: 320px) {
  .photo {
    width: 70px;
    height: 70px;
  }
}

.e-grid .e-icon-grightarrow::before {
  content: "\e7a9";
}

.e-grid .e-icon-gdownarrow::before {
  content: "\e7fe";
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' id='Grid' :detailTemplate="'detailTemplate'">
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
        <e-column field='FirstName' headerText='Name' width='120'></e-column>
        <e-column field='Title' headerText='Title' width='170'></e-column>
        <e-column field='HireDate' headerText='Hire Date' width='135' textAlign='Right' format='yMd'></e-column>
        <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
      </e-columns>
      <template v-slot:detailTemplate="{ data }">
        <table class="detailtable" width="100%">
          <colgroup>
            <col width="35%" />
            <col width="35%" />
            <col width="30%" />
          </colgroup>
          <tbody>
            <tr>
              <td rowspan="4" style="text-align: center">
                <img
                  class="photo"
                  :src="
                    'https://ej2.syncfusion.com/vue/demos/source/grid/images/' +
                    data.EmployeeID +
                    '.png'
                  "
                  :alt="data.EmployeeID"
                />
              </td>
              <td>
                <span style="font-weight: 500">First Name: </span>
                {{ data.FirstName }}
              </td>
              <td>
                <span style="font-weight: 500">Postal Code: </span>
                {{ data.PostalCode }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Last Name: </span>
                {{ data.LastName }}
              </td>
              <td>
                <span style="font-weight: 500">City: </span> {{ data.City }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Title: </span> {{ data.Title }}
              </td>
              <td>
                <span style="font-weight: 500">Phone: </span>
                {{ data.HomePhone }}
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-weight: 500">Address: </span>
                {{ data.Address }}
              </td>
              <td>
                <span style="font-weight: 500">HireDate: </span>
                {{ format(data.HireDate) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow } from "@syncfusion/ej2-vue-grids";
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
  provide: {
    grid: [DetailRow],
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
.detailtable td {
  font-size: 13px;
  padding: 4px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 800px) and (min-width: 320px) {
  .photo {
    width: 70px;
    height: 70px;
  }
}
  .e-grid .e-icon-grightarrow::before {
      content: "\e7a9";
  }
  .e-grid .e-icon-gdownarrow::before {
      content: "\e7fe";
  }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-icon" %}

## Limitations

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence

## See also

* [Detail row events](../hierarchy-grid#detail-row-events)