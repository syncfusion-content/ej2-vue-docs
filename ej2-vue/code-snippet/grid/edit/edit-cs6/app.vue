<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='280px' >
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
              <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" format="M/d/yy" textAlign="Right" :validationRules='dateRules' width="130" type="date"></e-column>
              <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="90" :validationRules='freightRules'></e-column>
              <e-column field="Verified" headerText="Verified" textAlign="Right" width="90" :template="'columnTemplate'" :validationRules='verifiedRules'></e-column>
            </e-columns>
            <template v-slot:columnTemplate="{data}">
              <ejs-checkbox :checked="data.Verified"></ejs-checkbox>
          </template>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
name: "App",
components: {
'ejs-checkbox': CheckBoxComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: data,
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      dateRules: { required: true  },
      verifiedRules:{ required: true  },
      freightRules: { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    };
  },
  provide: {
    grid: [Edit, Toolbar]
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