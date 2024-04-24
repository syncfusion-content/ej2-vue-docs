

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' :toolbar='toolbarOptions' :showColumnChooser='true' height='400px' width='600px' :autoFit='true' :actionComplete='actionComplete'>
          <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
          <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Resize, ColumnChooser, Toolbar  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      toolbarOptions: ['ColumnChooser']
    };
  },
  methods:{
    actionComplete: function(args){
      if (args.requestType === 'columnstate') {
        let grid =this.$refs.grid.$el.ej2_instances[0];
        grid.autoFitColumns();
      }
    }
  },
  provide: {
      grid: [Resize, ColumnChooser, Toolbar]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


