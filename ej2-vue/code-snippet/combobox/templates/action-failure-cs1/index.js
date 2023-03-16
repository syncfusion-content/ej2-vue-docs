
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query, DataManager, Predicate, ODataV4Adaptor } from '@syncfusion/ej2-data';

var footerVue = Vue.component("actionFailureTemplate", {
  template: `<span class='action-failure'> Data fetch get fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='customerData' :actionFailureTemplate='actionFailureTemplate' :fields='fields' :query='query' placeholder="Select a customer"></ejs-combobox>
    </div>
  </div>
`,

  data (){
    return {
        customerData : new DataManager({
           url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        query : new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        fields : { text: 'ContactName', value: 'CustomerID' },
        actionFailureTemplate : function(e) {
          return {
            template: footerVue
          }
        }
        }
  }

});