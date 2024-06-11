<template>
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Sélectionnez un client' locale="fr-BE" :fields='fields'
        :query='query' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { L10n } from '@syncfusion/ej2-base';

let data = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
let query = new Query().select(['ContactName', 'CustomerID']).take(0);
L10n.load({
  'fr-BE': {
    'dropdowns': {
      'noRecordsTemplate': "Aucun enregistrement trouvé",
      'actionFailureTemplate': "Modèle d'échec d'action"
    }
  }
});

const fields = { text: 'ContactName', value: 'CustomerID' };
const dataSource = data;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
