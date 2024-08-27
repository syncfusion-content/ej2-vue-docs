<template>
    <div id="app">
      <div style="padding: 0px 0px 20px 0px; display:flex">
        <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Query String</label>
        <ejs-switch ref="switch" id="switch"  @change="toggleQueryString"></ejs-switch>
      </div>
      <p id="message">{{message}}</p>  
      <ejs-grid ref="grid" :dataSource='data' allowPaging='true'  :actionBegin="onActionBegin">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field='OrderDate' type="date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
        </e-columns>
      </ejs-grid> 
    </div>
</template>
<script>
import { GridComponent,ColumnsDirective,ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-switch": SwitchComponent,
  },
  data() {
    return {
      data: data,
      message: "",
    };
  },
  methods: {
    toggleQueryString: function (args) {
      this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString =
        args.checked;
    },
    onActionBegin(args) {
      if (
        args.requestType === "paging" &&
        this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString
      ) {
        this.message = "Current URL:" + window.location.href;
      }
    },
  },
  provide: {
    grid: [Page],
  },
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
#message {
  color: red;
  text-align: center;
}
</style>