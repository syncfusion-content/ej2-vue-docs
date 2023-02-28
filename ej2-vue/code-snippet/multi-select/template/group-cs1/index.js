
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MultiSelectPlugin);
import { Query, DataManager, ODataV4Adaptor, Predicate } from '@syncfusion/ej2-data';
var itemVue = Vue.component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
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
        <ejs-multiselect id='multiselect' sortOrder='Ascending' :groupTemplate='groupTemplate' :dataSource='employeeData' :query='query' :fields='fields' placeholder="Select an employee"></ejs-multiselect>
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
      query : new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle')),
      fields : { text: 'FirstName', value: 'EmployeeID', groupBy: 'City' },
      groupTemplate : function(e) {
        return {
          template: itemVue
        }
      }
    }
  }

});