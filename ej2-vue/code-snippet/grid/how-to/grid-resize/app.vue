<template>
  <div id="app">
    <div style="display: inline-block;">
      <label> Enter the width: </label> 
      <ejs-numerictextbox ref='widthTextbox' :min="400" :max="650" :step='5' :placeholder="'400'" format="n"  width='120px'></ejs-numerictextbox>
      <label> Enter the height </label> 
      <ejs-numerictextbox ref='heightTextbox' :min="200" :max="600" :step='5' :placeholder="'200'" format="n"  width='120px'></ejs-numerictextbox>
      <ejs-button style='margin-left:5px' ref='button' cssClass='e-outline' v-on:click="onExternalResize">Update</ejs-button>
    </div>
    <div id="parent">
      <ejs-grid ref='grid' style="margin-top:5px"  :dataSource='data'  height='100%'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
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
  data: () => {
    return {
      data: data
    };
  },
  methods: {
    onExternalResize: function() {
      const parentDiv = document.getElementById('parent');
      parentDiv.style.width = this.$refs.widthTextbox.$el.value + 'px';
      parentDiv.style.height = this.$refs.heightTextbox.$el.value + 'px';
    }
  },
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