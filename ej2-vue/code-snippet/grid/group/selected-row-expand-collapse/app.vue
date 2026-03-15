<template>
  <div id="app">
    <div style="display: inline-block;">
      <ejs-numerictextbox ref='textbox' id='textbox' floatLabelType="Auto" format="##"  width='240px' 
      placeholder="Enter Grouped Row Index" ></ejs-numerictextbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="onExpandCollapseButtonClick" style='margin-top:25px; margin-left:5px'>Collapse or Expand Row</ejs-button> 
    </div>
    <div style="padding-top:5px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid ref='grid' style="margin-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :allowGrouping='false' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' :allowGrouping='false' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' :allowGrouping='false' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent  } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'] },
      message:'',
    };
  },
  methods: {
    onExpandCollapseButtonClick: function() {
      let grid = this.$refs.grid.ej2Instances;
      const groupedRowIndex = parseInt(this.$refs.textbox.ej2Instances.value);
      const groupedRows = Array.from(
        grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
      );
      if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
        this.message = '';
        const groupCaptionElement = groupedRows[groupedRowIndex];
        grid.groupModule.expandCollapseRows(groupCaptionElement);
      } else {
        this.message =
          'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
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