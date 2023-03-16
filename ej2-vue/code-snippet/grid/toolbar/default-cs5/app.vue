

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='FirstName' headerText='First Name' width=150></e-column>
                <e-column field='Country' headerText='Country' width=150></e-column>
                <e-column field='PostalCode' headerText='Postal Code' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: employeeData,
      toolbar: [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },{ text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall' , align:'Right'},{ text: 'Search', align: 'Center'}],
      groupOptions: { columns: ['FirstName'] }
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'expandall') {
            this.$refs.grid.ej2Instances.groupModule.expandAll();
        }

        if (args.item.id === "collapseall"){
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
        }
    }
  },
  provide: {
      grid: [Toolbar, Group]
  }
}
</script>
<style>
 @import "https://cdn.syncfusion.com/ej2/material.css";
.e-icons.e-collapse::before {
  content: "\e834";
}
.e-icons.e-expand::before {
  content: "\e83d";
}
</style>


