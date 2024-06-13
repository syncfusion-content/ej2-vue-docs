
import Vue from 'vue';
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(MultiSelectPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-multiselect :dataSource='tagData' :fields='fields' :placeholder="waterMark" ></ejs-multiselect>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select Tags',
      tagData: [
        { "Text": "Add to KB", "State": false },
    { "Text": "Crisis", "State": false },
    { "Text": "Enhancement", "State": true },
    { "Text": "Presale", "State": false },
    { "Text": "Needs Approval", "State": false },
    { "Text": "Approved", "State": true },
    { "Text": "Internal Issue", "State": true },
    { "Text": "Breaking Issue", "State": false },
    { "Text": "New Feature", "State": true },
    { "Text": "New Component", "State": false },
    { "Text": "Mobile Issue", "State": false }
    ],
    fields: { value: 'Text', disabled: 'State' }
    }
  }

});