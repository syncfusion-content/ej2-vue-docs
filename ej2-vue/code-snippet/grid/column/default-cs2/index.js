
import Vue from 'vue';
import { GridPlugin, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
      <ejs-grid :dataSource="data" allowPaging=true> </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data
    }
  },
  provide: {
    grid: [Page]
  }

});