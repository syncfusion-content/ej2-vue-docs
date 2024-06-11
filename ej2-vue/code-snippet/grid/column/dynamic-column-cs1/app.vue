<template>
<div id='app'>
    <ejs-grid :dataSource="data">
        <e-columns>
            <e-column v-for="column in columns" :field="column.field" :headerText="column.headerText"></e-column>
        </e-columns>
    </ejs-grid>
</div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data () {
    return {
      data:data,
      columns: [
      { field: 'OrderID', headerText: 'Order ID' },
      { field: 'CustomerID', headerText: 'Customer ID' },
      { field: 'Freight', headerText: 'Freight' },
      { field: 'ShipCountry', headerText: 'Ship Country' }
    ]
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>