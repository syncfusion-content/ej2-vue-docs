<template>
  <div id="app">
    <ejs-grid :dataSource="data" height=310>
      <e-columns>
        <e-column headerText='Employee Image' width='150' textAlign='Center' :template="'columnTemplate'" :templateOptions='imageTemplateOptions'></e-column>
        <e-column field='FirstName' headerText='FirstName' :template="'chipTemplate'" :templateOptions='nameTemplateOptions' width=120></e-column>
        <e-column field='LastName' headerText='Last Name' width='100'></e-column>
        <e-column field='City' headerText='City' width='100'></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{data}">
        <div class="image">
          <img :src="'./images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
        </div>
      </template>
      <template v-slot:chipTemplate="{data}">
        <div>
          <ejs-chiplist id="chip" :text='data.FirstName'></ejs-chiplist>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-chiplist":ChipListComponent
},

  data: () => {
    return {
      data: employeeData,
      imageTemplateOptions: { enableAriaLabel: true },
      nameTemplateOptions: { enableAriaLabel: false },
    };
  }
}
</script>
<style>
 .image img {
  height: 55px;
  width: 55px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
}
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