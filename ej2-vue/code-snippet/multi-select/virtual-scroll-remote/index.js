
import Vue from 'vue';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { DropDownList, VirtulScroll } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
DropDownList.Inject(VirtulScroll);
Vue.use(DropDownListPlugin);

var remoteData = new DataManager({
  url: 'https://services.syncfusion.com/vue/production/api/Orders',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

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
      itemData: remoteData,
      fields: { text: 'OrderID', value: 'OrderID' },
    }
  }

});