
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var itemVue = Vue.component("itemTemplate", {
  template: `<span><span class='name'>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
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
        <ejs-autocomplete id='employees' :query='query' :dataSource='data' :fields='fields' :placeholder='waterMark' :sortOrder='sortOrder' :itemTemplate='iTemplate' popupHeight="450px"></ejs-autocomplete>
     </div>
  </div>
`,

  name: 'app',
   data () {
    return {
      fields: { value: 'FirstName' },
            waterMark: 'Find an employee',
            sortOrder: 'Ascending',
            data: remoteData,
            iTemplate: function(e) {
                return {
                    template: itemVue
                };
            },
          query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
    }
  }

});