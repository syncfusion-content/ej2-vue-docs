
import Vue from 'vue';
import { PagerPlugin, Pager, PagerDropDown  } from '@syncfusion/ej2-vue-grids';

Vue.use(PagerPlugin);
Pager.Inject(PagerDropDown);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-pager :pageSize='10' :totalRecordsCount='200' :pageSizes="pageSizes"> </ejs-pager>
  </div>
`,

  data () {
    return {
      pageSizes: [10, 20, 50, 100]
    }
  }

});