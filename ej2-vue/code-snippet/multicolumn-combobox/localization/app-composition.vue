<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' locale='fr-BE' placeholder='Sélectionnez un client'>
            <e-columns>
              <e-column field='ContactName' header='Contact Name' width={90}></e-column>
              <e-column field='CustomerID' header='Customer ID' width={160}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>

<script setup>
import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { L10n, setCulture} from '@syncfusion/ej2-base';

const empData = [];
const fields = { text: 'ContactName', value: 'CustomerID' };

L10n.load({
  'fr-BE': {
     'multicolumncombobox': {
           'noRecordsTemplate': "Aucun enregistrement trouvé"
       }
   }
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>
