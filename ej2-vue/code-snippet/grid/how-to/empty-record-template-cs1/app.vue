<template>
  <div class="col-lg-12 control-section">
      <div>
          <ejs-grid :dataSource='data' :emptyRecordTemplate='emptyRecordTemplate' :editSettings='editSettings' :toolbar='toolbar' :allowPaging='true'
              :pageSettings='pageSettings'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customeridrules'></e-column>
                  <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                  <e-column field='OrderDate' headerText='Order Date' width='130' editType='datetimepickeredit' :format='formatoptions' textAlign='Right'></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
              </e-columns>
          </ejs-grid>
      </div>
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
          orderidrules: { required: true, number: true },
          formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
          freightrules:  { required: true, number: true },
          editparams: { params: { dataSource: cascadeData, fields: {text:"ShipCountry",value:"ShipCountry"}}},
          customeridrules: { required: true },
          emptyRecordTemplate: `
            <div class='emptyRecordTemplate'>
                <img src="./emptyRecordTemplate.svg" class="e-emptyRecord" alt="No record">
                <span>There is no data available to display at the moment.</span>
            </div>`,
      };
  },
  provide: {
    grid: [Edit, Page, Toolbar]

  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  .emptyRecordTemplate {
      text-align: center;
  }
  .e-emptyRecord {
      display: block;
      margin: 10px auto;
  }
</style>