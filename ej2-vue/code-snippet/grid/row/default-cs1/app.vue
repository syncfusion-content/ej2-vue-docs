

<template>
    <div id="app">
        <ejs-grid id='Grid' :dataSource='srcData' :allowPaging="true" :pageSettings="pageOptions" :allowSelection="true" :allowRowDragAndDrop="true"
            :selectionSettings="selectionOptions" :rowDropSettings="srcDropOptions" width="49%">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='130'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>

        <ejs-grid id='DestGrid' :dataSource='destData' :allowPaging="true" :pageSettings="pageOptions" :allowSelection="true"
            :allowRowDragAndDrop="true" :selectionSettings="selectionOptions" :rowDropSettings="destDropOptions" width="49%">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='130'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, RowDD, Selection, Page  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      srcData: data,
      pageSettings: { pageSize: 7 },
      destData: [],
      pageOptions: { pageSize: 7 },
      selectionOptions: { type: "Multiple" },
      srcDropOptions: { targetID: "DestGrid" },
      destDropOptions: { targetID: "Grid" }
    };
  },
  provide: {
    grid: [RowDD, Page, Selection]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  #Grid {
    float: left;
  }

  #DestGrid {
    float: right;
  }
</style>


