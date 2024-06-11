<template>
  <div id="app">
    <ejs-autocomplete :dataSource='data' :locale='locale' :fields='fields' sortOrder='sortOrder' :query='query'
      :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';
import { L10n } from '@syncfusion/ej2-base';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});

L10n.load({
  'fr-BE': {
    'dropdowns': {
      noRecordsTemplate: "Aucun enregistrement trouvé",
      actionFailureTemplate: "Modèle d'échec d'action"
    }
  },

});

export default {
  name: "App",
  components: {
    "ejs-autocomplete": AutoCompleteComponent
  },
  data() {
    return {
      waterMark: 'Trouver un client',
      query: new Query().select(['ContactName', 'CustomerID']),
      data: remoteData,
      locale: 'fr-BE',
      fields: { value: 'ContactName' },
      sortOrder: 'Ascending'
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 15%;
  width: 30%;
}
</style>
