
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(ListBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox :dataSource='data' :query="query" :fields="fields" ></ejs-listbox>
    </div>
  </div>
`,

  data (){
    return {
    data : new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor
      }),
      query : new Query().from('Products').select('ProductID,ProductName').take(10),
      fields : { text: 'ProductName', value: 'ProductID' }
    }
  }

});