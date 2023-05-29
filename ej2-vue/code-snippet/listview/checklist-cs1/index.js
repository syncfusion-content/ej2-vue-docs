
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div id = 'flat-list'>
    <!-- ListView element -->
    <ejs-listview id='sample-list-flat' :dataSource='data' showCheckBox='true' headerTitle='To Do List' showHeader='true'></ejs-listview>
    </div>
  </div>
`,

  data: function() {
    return {
      data: [
        {text: 'Do Meditation', id: '1'},
        {text: 'Go Jogging', id: '2'},
        {text: 'Buy Groceries', id: '3'},
        {text: 'Pay Phone bill', id: '4'},
        {text: 'Play Football with your friends', id: '5'},
    ],
    };
  }

});