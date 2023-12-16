
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { ComboBox, VirtulScroll } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
ComboBox.Inject(VirtulScroll);
Vue.use(ComboBoxPlugin);

var remoteData = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/orders',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

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
      itemData: remoteData,
      fields: { text: 'OrderID', value: 'OrderID' },
    }
  }

});