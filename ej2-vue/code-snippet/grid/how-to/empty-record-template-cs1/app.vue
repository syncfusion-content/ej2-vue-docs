<template>
      <div id="app">
          <ejs-grid :dataSource='data' :emptyRecordTemplate="'emptyRecordTemplate'" :editSettings='editSettings' :toolbar='toolbar' :allowPaging='true'
              :pageSettings='pageSettings'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRrules'></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customerIDRules'></e-column>
                  <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
                  <e-column field='OrderDate' headerText='Order Date' width='130' editType='datetimepickeredit' :format='formatoptions' textAlign='Right'></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editParams'></e-column>
              </e-columns>
              <template v-slot:emptyRecordTemplate>
                <div class='emptyRecordTemplate'>
                    <img src="./emptyRecordTemplate.svg" class="e-emptyRecord" alt="No record">
                    <span>There is no data available to display at the moment.</span>
                    </div>
             </template>
          </ejs-grid>
      </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { cascadeData } from "./datasource";
export default {
name: "App",
  components: {
      'ejs-grid': GridComponent,
      'e-column': ColumnDirective,
      'e-columns': ColumnsDirective
  },
  data: () => {
      return {
          data: [],
          pageSettings: { pageCount: 5 },
          editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
          toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
          orderIDRrules: { required: true, number: true },
          formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
          freightRules:  { required: true, number: true },
          editParams: { params: { dataSource: cascadeData, fields: {text:"ShipCountry",value:"ShipCountry"}}},
          customerIDRules: { required: true }
      };
  },
  provide: {
    grid: [Edit, Page, Toolbar]

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
  .emptyRecordTemplate {
      text-align: center;
  }
  .e-emptyRecord {
      display: block;
      margin: 10px auto;
  }
</style>