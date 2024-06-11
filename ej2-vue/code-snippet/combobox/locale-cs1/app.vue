<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' locale='fr-BE' :fields='fields' :dataSource='customerData' :query='query'
        placeholder="Sélectionnez un client"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
// import L10n class for load function
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'fr-BE': {
    'dropdowns': {
      'noRecordsTemplate': "Aucun enregistrement trouvé",
      'actionFailureTemplate': "Modèle d'échec d'action"
    }
  }
});

export default {
  name: "App",
  components: {
    "ejs-combobox": ComboBoxComponent
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
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
