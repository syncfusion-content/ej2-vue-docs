
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { AutoComplete, VirtulScroll } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
AutoComplete.Inject(VirtulScroll);
Vue.use(AutoCompletePlugin);

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
    <ejs-autocomplete id='autocomplete' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      itemData: remoteData,
      fields: { text: 'OrderID', value: 'OrderID' },
    }
  }

});