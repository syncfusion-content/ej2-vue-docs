<template>
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :toolbar='toolbarOptions' height='262px' :created='created'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
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
      toolbarOptions: ['Search'],
    };
  },
  methods: {
    created: function() {
        document.getElementById(this.$refs.grid.$el.id + "_searchbar").addEventListener('keyup', () => {
          this.$refs.grid.search(event.target.value)
        });
    }
  },
  provide: {
    grid: [Search,Toolbar]
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