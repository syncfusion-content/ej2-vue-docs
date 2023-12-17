
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { AutoComplete, VirtulScroll } from '@syncfusion/ej2-dropdowns';
AutoComplete.Inject(VirtulScroll);
Vue.use(AutoCompletePlugin);
let records = [];
function dataSource() {
  for (var i = 1; i <= 150; i++) {
    var item = {};
    item.id = 'id' + i;
    item.text = "Item ".concat(i);
    var randomGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomGroup) {
        case 1:
            item.group = 'Group A';
            break;
        case 2:
            item.group = 'Group B';
            break;
        case 3:
            item.group = 'Group C';
            break;
        case 4:
            item.group = 'Group D';
            break;
        default:
            break;
    }
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
      fields: { groupBy: 'group', value: 'text'}
    }
  }

});