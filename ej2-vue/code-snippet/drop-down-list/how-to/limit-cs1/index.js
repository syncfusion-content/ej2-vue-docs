
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,Query,ODataV4Adaptor,Predicate } from "@syncfusion/ej2-data";


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a customer' popupHeight='250px' sortOrder="Ascending" :query='query' :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='dataSource' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
`,

  data () {
    return {
        dataSource : new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        query : new Query().select(['ContactName', 'CustomerID']).take(7),
        fields : { text: 'ContactName', value: 'CustomerID' },
        allowFiltering: true,
    }
  },
  methods: {
        filtering: function(e) {
            var searchData = new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ODataV4Adaptor,
                crossDomain: true
            });
            // set limit as 4 to search result
            var query = new Query().select(['ContactName', 'CustomerID']).take(4);
            query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
            e.updateData(searchData, query);
        }
    }

});