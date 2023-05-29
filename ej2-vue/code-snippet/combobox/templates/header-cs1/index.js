
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query, DataManager, Predicate, ODataV4Adaptor } from '@syncfusion/ej2-data';


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='combobox'>
        <br>
        <ejs-combobox id='combobox' sortOrder="Ascending" :dataSource='employeeData' :itemTemplate='itemTemplate' :headerTemplate='headerTemplate' :fields='fields' :query='query' placeholder="Select an employee"></ejs-combobox>
    </div>
  </div>
`,

  data (){
    return {
        employeeData : new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        query : new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
        fields : { text: 'FirstName', value: 'EmployeeID' },
        headerTemplate : "<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>"
        itemTemplate : "<span class='item' ><span class='name'>${FirstName}</span><span class='city'>${City}</span></span>"
    }
  }

});