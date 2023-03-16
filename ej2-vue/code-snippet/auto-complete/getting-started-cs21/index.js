
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, Predicate, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var groupTemplate = Vue.component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
  data() {
    return {
      data: {}
    };
  }
});

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete id='employees' :query='query' :dataSource='data' :fields='fields' :placeholder='waterMark' :sortOrder='sortOrder' :groupTemplate='gTemplate' popupHeight="450px"></ejs-autocomplete>
      </div>
  </div>
`,

  name: 'app',
   data () {
    return {
      fields: { value: 'FirstName', groupBy:'City' },
            waterMark: 'Find an employee',
            sortOrder: 'Ascending',
            data: remoteData,
            gTemplate: function(e) {
                return {
                    template: groupTemplate
                };
            },
            query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal','london').or('City','equal','seattle')),
    }
  }

});