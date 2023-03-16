
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MultiSelectPlugin);
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' sortOrder='Ascending' :dataSource='customerData' :query='query' :fields='fields' placeholder="Select a customer"></ejs-multiselect>
    </div>
  </div>
`,

  data (){
    return {
      customerData : new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      query : new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
      fields : { text: 'ContactName', value: 'CustomerID' }
    }
  }

});