
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a customer' :actionComplete='actionComplete' :dataSource='dataSource' :query='query' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
`,

  data (){
    return {
        query :  new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        dataSource : new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
          adaptor: new ODataV4Adaptor,
          crossDomain: true
          }),
        fields: { text: 'ContactName', value: 'CustomerID' }
    }
  },
   methods: {
        actionComplete: function (e) {
            // initially result contains 6 items
            console.log("Before modified the result: " + e.result.length);
            // remove first 2 items from result.
            e.result.splice(0, 2);
            // now displays the result count is 4.
            console.log("After modified the result: " + e.result.length);
        }
    }

});