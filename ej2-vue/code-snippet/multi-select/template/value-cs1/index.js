
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MultiSelectPlugin);
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";
var itemVue = Vue.component("itemTemplate", {
  template: `<span><span class='name'>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

var valueVue = Vue.component("valueTemplate", {
  template: `<span>{{data.FirstName}} - {{data.City}}</span>`,
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
        <ejs-multiselect id='multiselect' placeholder='Select an employee' sortOrder='Ascending' :valueTemplate="valueTemplate" :itemTemplate="itemTemplate" :dataSource='dataSource' :query='query' :fields='fields'></ejs-multiselect>
    </div>
  </div>
`,

  data (){
      return {
        valueTemplate : function(e) {
          return {
            template: valueVue
          }
        },
        itemTemplate : function(e) {
          return {
            template: itemVue
          }
        },
        query :  new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
        dataSource : new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        fields: { text: 'FirstName', value: 'EmployeeID' }
    }
  }

});