

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' sortOrder='Ascending' popupHeight="250px" :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='searchData' :query='query' :fields='fields' placeholder="Select a customer"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default {
  data (){
    return {
        searchData : new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        fields : { text: 'ContactName', value: 'CustomerID' },
        query : new Query().select(['ContactName', 'CustomerID']).take(6),
        allowFiltering : true
        }
  },
   methods: {
        filtering: function(e) {
           var searchData = new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ODataV4Adaptor,
                crossDomain: true
            });
           // load overall data when search key empty.
            if (e.text == '') e.updateData(searchData);
            else {
                var query = new Query().select(['ContactName', 'CustomerID']);
                query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
                e.updateData(searchData, query);
            }
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>


