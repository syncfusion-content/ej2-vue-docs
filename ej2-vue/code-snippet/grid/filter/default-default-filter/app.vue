<template>
  <div id="app">
    <div style="margin-bottom: 20px;">
      <ejs-button id='performFilter' @click.native="filterAction">Filter Customer ID Column</ejs-button>
      <ejs-button style="margin-left: 10px;" id='clearFilter' @click.native="filterAction">Clear Filter</ejs-button>
    </div>

    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :allowPaging='true' :filterSettings='filterOptions' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>


<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      data: data, 
      filterOptions: {
        type: 'Menu'
      }
    };
  },
  methods: {
    filterAction:function(args) {
      if (args.currentTarget.id === 'performFilter') {
        this.$refs.grid.ej2Instances.filterByColumn('CustomerID', 'startswith', 'v');
      } else {
        this.$refs.grid.ej2Instances.clearFiltering();
      }
    }
  },
  provide: {
    grid: [Filter, Page] 
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
  .e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
  }
</style>