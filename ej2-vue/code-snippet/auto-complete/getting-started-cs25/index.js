
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var actionVue = Vue.component("actionFailureTemplate", {
  template: `<span class="action-failure"> Data fetch got failed</span>`,
  data() {
    return {
      data: {}
    };
  }
});

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svcs',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete ref='instance' :fields='fields' :query='query' id='employees' :dataSource='data' :placeholder='waterMark' :actionFailureTemplate='actionTemplate'></ejs-autocomplete>
     </div>
  </div>
`,

  name: 'app',
   data () {
    return {
            waterMark: 'Find an employee',
            data: remoteData,
            actionTemplate: function(e) {
                return {
                    template: actionVue
                };
            },
            query: new Query().from('Employees').select(['FirstName']).take(6),
            fields: { value: 'FirstName' }
    }
  }

});