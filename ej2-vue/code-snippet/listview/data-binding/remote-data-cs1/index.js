
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
import { DataManager, Query } from '@syncfusion/ej2-data';


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
  <div id="flat-list">
    <!-- ListView element -->
    <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle' showHeader='true'></ejs-listview>
    </div>
</div>
`,

  data: function() {
    return {
      data: new DataManager({
        url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
      }),
      query: new Query().from('Products').select('ProductID,ProductName').take(6),
      fields:  { id: 'ProductID', text: 'ProductName' },
      headerTitle: 'Products',
    };
  }

});