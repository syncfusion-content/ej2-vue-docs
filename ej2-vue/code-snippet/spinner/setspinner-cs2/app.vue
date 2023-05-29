

<template>
   <div id="app">
     <ejs-grid  ref='elementRef' id='grid'  :dataSource="data" :created='onGridCreated'>
     <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
     </e-columns>
    </ejs-grid>
    </div>
</template>

<script>
import Vue from "vue";
import { GridPlugin} from "@syncfusion/ej2-vue-grids";
import { setSpinner } from '@syncfusion/ej2-vue-popups';
import { orderDetails } from './datasource.ts';
Vue.use(GridPlugin);
export default {
  name: 'app',
  data: function(){
        return {
           data: orderDetails.slice(0, 7)
        }
   },
  methods: {
       onGridCreated: function(args){
           setSpinner({ type: 'Bootstrap' });
       },
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

.e-spinner-pane.e-spin-hide {
        display: block;
      }
</style>



