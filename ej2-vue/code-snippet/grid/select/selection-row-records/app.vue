<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button @click="Onclick">Selected Records count</ejs-button>
    </div>
    <p id="message" > {{ showMessage }}</p>
    <div class="control-section">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :allowSelection="true" 
      :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
          <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="100" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: data,
      showMessage :"",
      selectionOptions : { type: 'Multiple',persistSelection: true  }
    };
  },
  methods: {
    Onclick() {
      var selectedRecordscount = this.$refs.grid.getSelectedRecords().length;
      this.showMessage = "Selected record count:" + selectedRecordscount ;
    }
  },
  provide:{
    grid:[Page]
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

#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>