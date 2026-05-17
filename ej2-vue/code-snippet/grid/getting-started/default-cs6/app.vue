<template>
    <div id="app">
        <!-- Assigns the dataset to the Grid component -->
        <ejs-grid :dataSource="data">
          <!-- Define the columns to be displayed -->
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerName' headerText='CustomerName' width=100></e-column>
            <e-column field='OrderDate' headerText='OrderDate' width='100' format='yMd' textAlign='Right'></e-column>
            <e-column field='Freight' headerText='Freight' width=100 format='C2' textAlign='Right'></e-column>
            <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
export default {
name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data() {
    return {
      // Defines the data to be displayed in the Grid
      data: [
        { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
        { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
        { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
        { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
        { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
        { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
      ],
    };
  },
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