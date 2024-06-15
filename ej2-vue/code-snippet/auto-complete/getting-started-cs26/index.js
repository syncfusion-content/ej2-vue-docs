
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-autocomplete :dataSource='statusData' :fields='fields' :placeholder="waterMark" ></ejs-autocomplete>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select Status',
      statusData: [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false }
    ],
    fields: { value: 'Status', disabled: 'State' }
    }
  }

});