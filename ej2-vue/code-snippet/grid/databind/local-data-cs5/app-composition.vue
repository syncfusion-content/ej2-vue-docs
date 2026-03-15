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
<script setup>
import { provide,ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid=ref(null);
const onloadData=function(){
        grid.value.ej2Instances.showSpinner();
        setTimeout(() => {
            grid.value.ej2Instances.dataSource = data; 
            grid.value.hideSpinner(); 
        }, 1000);
    };

const showhideSpinner=function(args){
        if(args.currentTarget.innerText === 'Show Spinner'){
            grid.value.showSpinner();
        }
        else{
            grid.value.hideSpinner();
        }
}
  provide('grid',  [Page]);
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