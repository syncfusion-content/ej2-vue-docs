<template>
  <div id="app">
    <div>
      <div>
        <ejs-button cssClass="e-outline"  v-on:click="onloadData">Load Data</ejs-button>
        <ejs-button style='margin-left:5px' cssClass="e-outline"  v-on:click="showhideSpinner">Show Spinner</ejs-button>
        <ejs-button style='margin-left:5px' cssClass="e-outline"  v-on:click="showhideSpinner">Hide Spinner</ejs-button>
      </div>
      <ejs-grid ref="grid" allowPaging='true' height='272px' style='margin-top:10px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ProductName' headerText='Product Name' width=110></e-column>
          <e-column field='Quantity' headerText='Quantity' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button": ButtonComponent

},

data() {
  return {
    dataGrid:data,
  };
},
methods: {
  onloadData(){
        this.$refs.grid.ej2Instances.showSpinner();
        setTimeout(() => {
            this.$refs.grid.ej2Instances.dataSource = data; 
            this.$refs.grid.ej2Instances.hideSpinner(); 
        }, 1000);
    },

    showhideSpinner(args){
        if(args.currentTarget.innerText === 'Show Spinner'){
            this.$refs.grid.ej2Instances.showSpinner();
        }
        else{
            this.$refs.grid.ej2Instances.hideSpinner();
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
</style>