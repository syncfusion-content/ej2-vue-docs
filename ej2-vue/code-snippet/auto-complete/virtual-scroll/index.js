
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { AutoComplete, VirtulScroll } from '@syncfusion/ej2-dropdowns';
AutoComplete.Inject(VirtulScroll);
Vue.use(AutoCompletePlugin);
let records = [];
function dataSource() {
    for (let i = 1; i <= 150; i++) {
        let item = {
            id: 'id' + i,
            text: "Item " + i,
        };
        records.push(item);
    }
}
dataSource();


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
    <ejs-autocomplete id='autocomplete' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      itemData: records,
      fields: { value: 'text', text: 'text' }
    }
  }

});