<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbar: [ 
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall' , align:'Right'}
      ],
      groupOptions: { columns: ['CustomerID'] }
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