<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='customerData' :fields='fields' :query='query' locale='fr-BE' placeholder='Sélectionnez un client'>
            <e-columns>
              <e-column field='ContactName' header='Contact Name' width={90}></e-column>
              <e-column field='CustomerID' header='Customer ID' width={160}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>
<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { L10n, setCulture} from '@syncfusion/ej2-base';

L10n.load({
  'fr-BE': {
     'multicolumncombobox': {
           'noRecordsTemplate': "Aucun enregistrement trouvé"
       }
   }
});
export default {
  components: {
    'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
  },
  data() {
    return {
      customerData: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      fields: { text: 'ContactName', value: 'CustomerID' },
      query: new Query().select(['ContactName', 'CustomerID']).take(0),
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
