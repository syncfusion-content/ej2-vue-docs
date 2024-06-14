
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(ComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-combobox :dataSource='statusData' :fields='fields' :placeholder="waterMark" ></ejs-combobox>
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