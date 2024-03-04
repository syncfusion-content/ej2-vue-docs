<template>
    <div id="app">
       <button id="edit"  @click="clickEdit">Edit</button>
       <button id="add"  @click="clickAdd">Add</button>
       <button id="delete"  @click="clickDelete">Delete</button>
       <button id="updaterow"  @click="clickUpdateRow">Update Row</button>
       <button id="updatecell"  @click="clickUpdateCell">Update Cell</button>
      <br /><br />
        <ejs-grid ref="grid" :dataSource='data'  :editSettings='editSettings'  height='230px' id="Grid">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  methods: {
    clickAdd: function () {
        this.$refs.grid.ej2Instances.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari"  });
    },
    clickEdit: function () {
        this.$refs.grid.ej2Instances.startEdit();
    },
    clickDelete: function () {
        this.$refs.grid.ej2Instances.deleteRecord();
    },
    clickUpdateRow: function () {
        this.$refs.grid.ej2Instances.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'  });
    },
    clickUpdateCell: function () {
        this.$refs.grid.ej2Instances.setCellValue((this.$refs.grid.ej2Instances.currentViewData[0] as any).OrderID,'CustomerID','Value Changed');
    }
  },
  provide: {
    grid: [Edit]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>