<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' 
    :dataBound='dataBound' height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Name' width=100></e-column>
        <e-column field='ShipCity' headerText='City' width=100></e-column>
        <e-column field='Freight' headerText='Value' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Group } from "@syncfusion/ej2-vue-grids";
import { ChipList  } from '@syncfusion/ej2-buttons';
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
      data: data,
      groupOptions: { columns: ['CustomerID'],
        captionTemplate: '<div class="groupChip">${key}</div>' }
    };
  },
  methods: {
    dataBound(){
      var groupCaptions = document.getElementsByClassName('groupChip');    
      for (var i = 0; i < groupCaptions.length; i++) {
        let chip = new ChipList({});
        chip.appendTo(groupCaptions[i]);
      }
    }
  },
  provide: {
    grid: [Group]
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