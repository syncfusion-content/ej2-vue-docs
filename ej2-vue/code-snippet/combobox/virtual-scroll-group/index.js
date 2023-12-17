
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { ComboBox, VirtulScroll } from '@syncfusion/ej2-dropdowns';
ComboBox.Inject(VirtulScroll);
Vue.use(ComboBoxPlugin);
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
      <ejs-combobox id='combobox' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-combobox>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select a game',
      itemData: records,
      fields: { groupBy: 'group', value: 'id', text: 'text' }
    }
  }

});