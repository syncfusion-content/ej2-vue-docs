
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete :dataSource='data' :fields='fields' sortOrder='sortOrder' :query='query' :filterType='filterType' :ignoreCase='ignoreCase' :placeholder="waterMark" ></ejs-autocomplete>
      </div>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Find a customer',
      data: remoteData,
      fields: { value: 'ContactName' },
      query: new Query().select(['ContactName']),
      sortOrder: 'Ascending',
      filterType: 'StartsWith',
      ignoreCase: false
    }
  }

});