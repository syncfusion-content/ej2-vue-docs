
import Vue from 'vue';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { DropDownList, VirtulScroll } from '@syncfusion/ej2-dropdowns';
DropDownList.Inject(VirtulScroll);
Vue.use(DropDownListPlugin);
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
      <ejs-dropdownlist id='dropdownlist' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-dropdownlist>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      itemData: records,
      fields: { value: 'id', text: 'text' }
    }
  }

});