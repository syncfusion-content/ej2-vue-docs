<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete :dataSource='data' :fields='fields' sortOrder='sortOrder' :query='query'
        :filterType='filterType' :minLength='minLength' :placeholder="waterMark"></ejs-autocomplete>
    </div>
  </div>
</template>
<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});

export default {
  name: "App",
  components: {
    "ejs-autocomplete": AutoCompleteComponent
  },
  data() {
    return {
      waterMark: 'Find a customer',
      data: remoteData,
      fields: { value: 'ContactName' },
      query: new Query().select(['ContactName', 'CustomerID']),
      sortOrder: 'Ascending',
      filterType: 'StartsWith',
      minLength: 3
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
  position: absolute;
  top: 10%;
  width: 90%;
}

.autocomplete {
  width: 30%;
  margin: 0 auto;
}
</style>
