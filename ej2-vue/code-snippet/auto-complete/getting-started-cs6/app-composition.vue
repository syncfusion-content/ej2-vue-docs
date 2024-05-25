<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete :dataSource='data' :fields='fields' sortOrder='sortOrder' :filterType='filterType'
        :query='query' :placeholder="waterMark"></ejs-autocomplete>
    </div>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});

const waterMark = 'Find a customer';
const data = remoteData;
const fields = { value: 'ContactName' };
const query = new Query().select(['ContactName']);
const sortOrder = 'Ascending';
const filterType = 'StartsWith';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  position: absolute;
  top: 10%;
  width: 90%;
}

.autocomplete {
  width: 30%;
  margin: 0 auto;
}
</style>
