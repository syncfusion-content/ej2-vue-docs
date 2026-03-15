<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0;font-weight: bold">Enter page count:</label>
      <ejs-textbox ref="textbox" width="120"></ejs-textbox>
      <ejs-button id="button" v-on:click="clickHandler">click button</ejs-button>
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
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
    clickHandler:function() {
      if (this.$refs.textbox.$el.value) {
        this.$refs.grid.$el.ej2_instances[0].pageSettings.pageCount = parseInt(this.$refs.textbox.$el.value,10);
      }
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
#button
{
  margin-left: 10px;
}
</style>