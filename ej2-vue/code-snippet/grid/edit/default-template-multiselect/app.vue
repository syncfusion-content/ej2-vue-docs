<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" width='130' editType='datepickeredit' format='yMd' textAlign='Right' :validationRules='orderDateRules'>
        </e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150' :editTemplate="'editTemplate'" :validationRules='shipCityRules'>
          <template  v-slot:editTemplate>
            <ejs-multiselect id='ShipCity' :dataSource='multiSelectDatasource' v-model="orderData.ShipCity"  :fields='fields'></ejs-multiselect>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    'ejs-multiselect' : MultiSelectComponent,
  },
  data() {
    return {
      dataGrid: data,
      multiSelectDatasource : [
        { value: 'Reims', text: 'Reims' },
        { value: 'Münster', text: 'Münster' },
        { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
        { value: 'Lyon', text: 'Lyon' },
        { value: 'Charleroi', text: 'Charleroi' }
      ],
      fields : { value: 'value', text: 'text' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      orderIDRules: { required: true, number: true },
      freightRules: { required: true, min: 1, max: 1000 },
      customerIDRules: { required: true },
      shipCityRules: { required: true },
      orderDateRules: { required: true },
      orderData: {}
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        this.orderData = Object.assign({}, args.rowData);
        this.orderData['ShipCity'] = this.orderData['ShipCity'] ? this.orderData['ShipCity'].split(',') : [];
      }
      if (args.requestType === 'save') {
        args.data['ShipCity'] = this.orderData['ShipCity'].join(',');
      }

    }
  },
  provide() {
    return {
      grid: [Edit, Toolbar],
    };
  }
};
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
