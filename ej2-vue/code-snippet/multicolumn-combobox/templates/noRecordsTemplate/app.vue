<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource=empData :fields='fields' placeholder='Select an employee' :noRecordsTemplate='noRecordsTemplate'>
          <e-columns>
                <e-column field='EmpID' header='Employee ID' width='90'></e-column>
                <e-column field='Name' header='Name' width='90'></e-column>
                <e-column field='Designation' header='Designation' width='90'></e-column>
                <e-column field='Country' header='Country' width='70'></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>
<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";

export default {
  components: {
    'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
  },
  data () {
    return {
      empData: [],
      fields: { text: 'Name', value: 'EmpID' },
      noRecordsTemplate: "<span class='norecord'> NO RECORDS FOUND </span>"
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
