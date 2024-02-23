<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button @click.native="showSelectedRecords">Show Selected Records</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :selectionSettings="selectionOptions" :pageSettings='pageSettings'>
      <e-columns>
        <e-column type="checkbox" width="50"></e-column>
        <e-column field="OrderID" headerText="Order ID" :isPrimaryKey="true" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog ref="dialogComponent" :visible="false" :header="'Selected Records'" :content="dialogContent" :close="dialogClose" showCloseIcon="true" width="400px" :position="{ X: 300, Y: 100 }">
    </ejs-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(DialogPlugin);

export default {
  data() {
    return {
      data: data,
      dialogContent: "",
      selectedRecords: [],
      pageSettings: { pageSize: 5 },
      selectionOptions: { type: 'Multiple', persistSelection: true }
    };
  },
  methods: {
    showSelectedRecords() {
      this.selectedRecords = this.$refs.grid.getSelectedRecords();
      if (this.selectedRecords.length > 0) {
        let content = ""; 
        this.selectedRecords.forEach((index) => {
            content += "<b>Order ID:</b>" + index.OrderID +"<br>";
        });
        this.dialogContent = content; 
        this.$refs.dialogComponent.show();
      }
    },
    dialogClose() {
      this.$refs.dialogComponent.hide();
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
</style>
