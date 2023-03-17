
import Vue from 'vue';
import { PagerPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(PagerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-pager :pageSize='1' :pageCount='3' :totalRecordsCount='20'> </ejs-pager>
  </div>
`,

  data () {
    return {
    }
  }

});