
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { ComboBox, VirtulScroll } from '@syncfusion/ej2-dropdowns';
ComboBox.Inject(VirtulScroll);
Vue.use(ComboBoxPlugin);
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
      <ejs-combobox id='combobox' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' :allowFiltering='false' popupHeight="200px"></ejs-combobox>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select a game',
      itemData: records,
      fields: { value: 'id', text: 'text' }
    }
  }

});