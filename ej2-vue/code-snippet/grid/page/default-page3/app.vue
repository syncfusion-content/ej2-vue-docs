<template>
  <div id="app">
    <div style="padding:0 0 20px 0">
      <label style="padding: 30px 17px 0 0;font-weight: bold">Select page size:</label>
      <ejs-numerictextbox ref="numericTextbox"   width="200px"  format="####.##" :min="150" :step="50" placeholder='select container height'
      @change='calculatePageSize' ></ejs-numerictextbox>
    </div>
    <ejs-grid ref="grid" id="grid" :dataSource="data" :allowPaging="true" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90">
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign='Right' format='C2' 
        width="90"></e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" textAlign='Right' 
        format='yMd' width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-numerictextbox":NumericTextBoxComponent
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    calculatePageSize:function(args) {
      this.$refs.grid.$el.ej2_instances[0].pageSettings.pageSize = this.$refs.grid.$el.ej2_instances[0].calculatePageSizeByParentHeight(args.value.toString());
    }
  },
  provide: {
    grid: [Page]
  }
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
</style>