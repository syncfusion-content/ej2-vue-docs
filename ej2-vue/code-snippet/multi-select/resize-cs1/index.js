
import Vue from 'vue';
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(MultiSelectPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-multiselect :dataSource='tagData' :allowResize='allowResize' :fields='fields' :placeholder="waterMark" ></ejs-multiselect>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select Tags',
      tagData: [
        { "Status": "Open", "State": false },
        { "Status": "Waiting for Customer", "State": false },
        { "Status": "On Hold", "State": true },
        { "Status": "Follow-up", "State": false },
        { "Status": "Closed", "State": true },
        { "Status": "Solved", "State": false },
        { "Status": "Feature Request", "State": false },
        { "Status": "In Progress", "State": false },
        { "Status": "Pending", "State": true },
        { "Status": "Escalated", "State": true },
        { "Status": "New", "State": false },
        { "Status": "Under Review", "State": true },
        { "Status": "Reopened", "State": false },
        { "Status": "Approved", "State": true },
        { "Status": "Awaiting Approval", "State": false },
        { "Status": "Scheduled", "State": false },
        { "Status": "Canceled", "State": true },
        { "Status": "Completed", "State": true },
        { "Status": "Acknowledged", "State": false },
        { "Status": "In Development", "State": false }
    ],
    fields: { value: 'Text' },
    allowResize : 'true'
    }
  }

});