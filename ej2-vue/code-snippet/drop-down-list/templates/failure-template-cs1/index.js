
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";
var itemVue = Vue.component("failureTemplate", {
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
        <ejs-dropdownlist id='dropdownlist' placeholder='Select an customer' sortOrder='Ascending' :actionFailureTemplate='failureTemplate' :dataSource='dataSource' :query='query' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
`,

  data (){
      return {
        failureTemplate : function(e) {
          return {
            template: itemVue
          }
        },
        query :  new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        dataSource : new DataManager({
             url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        fields: { text: 'ContactName', value: 'CustomerID' }
    }
  }

});