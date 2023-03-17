
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div class="control-section">
     <div id = 'group-list'>
    <!-- Group ListView element -->
    <ejs-listview id='sample-list-group' :dataSource='cars' :fields='fields'></ejs-listview>
    </div>
  </div>
`,

  data: function() {
    return {
      cars: [
    {
        'text': 'Audi A4',
        'id': '9bdb',
        'category': 'Audi'
    },
    {
        'text': 'Audi A5',
        'id': '4589',
        'category': 'Audi'
    },
    {
        'text': 'BMW 501',
        'id': 'f849',
        'category': 'BMW'
    },
    {
        'text': 'BMW 502',
        'id': '7aff',
        'category': 'BMW'
    }
],
fields: { groupBy: 'category', tooltip: 'text' }
    };
  }

});