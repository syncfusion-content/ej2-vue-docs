<template>
  <div id="app">
    <ejs-grid  :dataSource='dataGrid' allowPaging='true' :actionComplete="onActionComplete" :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules' :edit='edit'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" width='120' :validationRules='orderDateRules' editType='datetimepickeredit' format='y/m/d' textAlign='Right'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' :edit='editparams'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      dataGrid: data,
      formElement:"",
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal",newRowPosition: "Top" },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      orderIDRules: { required: true, number: true },
      shipCountryRules: { required: true },
      orderDateRules: { required: true },
      freightRules: {
        required: true,
        maxLength: [
          (args) => args["value"] <= 1000,
          "Please enter a value less than 1000",
        ],
        minLength: [
          (args) => args["value"] >= 1,
          "Please enter a value greater than 1",
        ],
      },
      customerIDRules: { required: true },
      editparams: { params: { popupHeight: "300px" } },
      edit : { params: { change: this.onChange.bind(this) } },
      pageSettings: { pageCount: 5 },
    };
  },

  methods: {
    onActionComplete: function (args) {
      if (args.requestType === "beginEdit" || args.requestType === "add") {
        this.formElement = args.form;
      }
    },
    onChange: function () {
      if (this.formElement) {
        this.formElement["ej2_instances"][0].validate();
      }
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar],
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