<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' height='260px' allowPaging='true' allowSorting='true' allowFiltering='true' :filterSettings='filterSettings' 
      :editSettings='editSettings' :toolbar='toolbarSettings' :isRowSelectable='isRowSelectable' :allowSelection='true' :selectionSettings='selectionOptions'>
      <e-columns>
        <e-column type='checkbox' width='50' ></e-column>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width='110' ></e-column>
        <e-column field='CustomerName' headerText='Customer Name' :validationRules='customerNameRules' width='120' ></e-column>
        <e-column field='Product' headerText='Product' editType= 'dropdownedit' width='110' ></e-column>
        <e-column field='Amount' headerText='Amount' :validationRules='amountRules' format='C2' textAlign='Right' width='110' ></e-column>
        <e-column field='OrderDate' headerText='Order Date'  editType= 'datepickeredit' format='yMd' textAlign='Right' width='110' ></e-column>
        <e-column field='Status' headerText='Order Status' editType= 'dropdownedit' width='110' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Filter, Toolbar, Edit, Sort} from "@syncfusion/ej2-vue-grids";
import { ordersTrackData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: ordersTrackData,
      selectionOptions : { persistSelection: true },
      toolbarSettings: ['Edit', 'Update', 'Cancel'],
      filterSettings: { type: 'Excel' },
      editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false },
      orderIDRules: { required: true },
      customerNameRules: { required: true },
      amountRules: { required: true }
    };
  },
  methods:{
    isRowSelectable: function (data, columns) {
      return data.Status !== 'Cancelled';
    }
  },
  provide: {
    grid: [Page, Filter, Toolbar, Edit, Sort]
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