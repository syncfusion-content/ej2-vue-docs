<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid'  :allowPaging='true' :editSettings='editSettings' :toolbar='toolbar' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules' width="100"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width="120" :validationRules='customerIDRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width="100" :validationRules='shipCountryRules'></e-column>
        <e-column field='CustomerNumber' headerText='Customer Number' width="140" :editTemplate="'editTemplate'">
            <template v-slot:editTemplate>
              <ejs-maskedtextbox id="CustomerNumber" name="CustomerNumber" mask='000-000-0000' 
                         :value="orderData.CustomerNumber"></ejs-maskedtextbox>
            </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit,Page } from "@syncfusion/ej2-vue-grids";
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-maskedtextbox":MaskedTextBoxComponent
  },
  data() {
    return {
      dataGrid: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      shipCountryRules: { required: true },
      orderData: {}
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.orderData = Object.assign({}, args.rowData);
      }
      if (args.requestType === 'save') {
        this.orderData['CustomerNumber'] = args.data['CustomerNumber'];
      }

    }
  },
  provide() {
    return {
      grid: [Edit, Toolbar,Page],
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
</style>
