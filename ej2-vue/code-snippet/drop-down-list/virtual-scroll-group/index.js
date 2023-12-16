
import Vue from 'vue';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { DropDownList, VirtulScroll } from '@syncfusion/ej2-dropdowns';
DropDownList.Inject(VirtulScroll);
Vue.use(DropDownListPlugin);
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
      <ejs-dropdownlist id='dropdownlist' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-dropdownlist>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      itemData: records,
      fields: { groupBy: 'group', value: 'id', text: 'text' }
    }
  }

});