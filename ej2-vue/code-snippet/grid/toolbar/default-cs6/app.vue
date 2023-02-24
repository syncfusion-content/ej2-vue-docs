

<template>
    <div id="app">
        <ejs-button id='enable' cssClass='e-flat' @click.native='enable'>Enable</ejs-button>
        <ejs-button id='disable' cssClass='e-flat' @click.native='disable'>Disable</ejs-button>
        <ejs-grid id='Grid' ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data,
      toolbar: ['Expand', 'Collapse'],
      groupOptions: { columns: ['CustomerID'] }
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
        }

        if (args.item.id === "Grid_Expand"){
            this.$refs.grid.ej2Instances.groupModule.expandAll();
        }
    },
    enable: function() {
        this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse','Grid_Expand'],true);//Enable toolbar items.
    },
    disable: function() {
        this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse','Grid_Expand'],false);//Disable toolbar items.
    }
  },
  provide: {
      grid: [Toolbar]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


