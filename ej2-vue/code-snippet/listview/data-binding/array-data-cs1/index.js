
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div id = 'flat-list'>
    <!-- ListView element -->
    <ejs-listview id='sample-list-flat' :dataSource='settings' :fields='fields' :headerTitle='headerTitle' showHeader='true'></ejs-listview>
    </div>
  </div>
`,

  data: function() {
    return {
      settings: [
    {
        'Name': 'Display',
        'id': 'list-01'
    },
    {
        'Name': 'Notification',
        'id': 'list-02'
    },
    {
        'Name': 'Sound',
        'id': 'list-03'
    },
    {
        'Name': 'Apps',
        'id': 'list-04'
    },
    {
        'Name': 'Storage',
        'id': 'list-05'
    },
    {
        'Name': 'Battery',
        'id': 'list-06'
    }
],
fields: { text: 'Name', tooltip: 'Name', id:'id'},

    //set the header tittle for the list
    headerTitle: 'Device settings',
    };
  }

});