<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a name' popupHeight='230px'>
            <e-columns>
              <e-column field='EmployeeID' header='Employee ID' width={120}></e-column>
              <e-column field='FirstName' header='Name' width={130}></e-column>
              <e-column field='Designation' header='Designation' width={120}></e-column>
              <e-column field='Country' header='Country' width={90}></e-column>
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
        url: 'https://services.syncfusion.com/js/production/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
      }),
      fields: { text: 'FirstName', value: 'EmployeeID' }
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
