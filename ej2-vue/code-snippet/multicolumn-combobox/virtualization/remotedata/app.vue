<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a country' popupHeight='230px' :gridSettings='gridSettings' enableVirtualization='true'>
            <e-columns>
              <e-column field='OrderID' header='OrderID' width={120}></e-column>
              <e-column field='CustomerID' header='CustomerID' width={130}></e-column>
              <e-column field='ShipCountry' header='ShipCountry' width={120}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>
<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
export default {
  components: {
    'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
  },
  data () {
    return {
      empData: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
      }),
      gridSettings: { rowHeight: 40 },
      fields: { text: 'ShipCountry', value: 'CustomerID' }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>
