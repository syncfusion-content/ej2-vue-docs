<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0;font-weight: bold">Enter page size:</label>
      <ejs-textbox ref="textbox" width="120"></ejs-textbox>
      <ejs-button id="button"  v-on:click="clickHandler">click button</ejs-button>
    </div>
    <div style="padding:20px 0 0 0">
      <ejs-grid ref="grid" id="PagingGrid" :dataSource="data" :allowPaging="true" height="325">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div> 
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent} from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent} from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
'ejs-textbox':TextBoxComponent,
'ejs-button':ButtonComponent
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    clickHandler:function() {
      if (this.$refs.textbox.$el.value) {
        this.$refs.grid.$el.ej2_instances[0].pageSettings.pageSize = parseInt(this.$refs.textbox.$el.value,10);
      }
    }
  },
  provide: {
    grid: [Page]
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
#button
{
  margin-left: 10px;
}
</style>