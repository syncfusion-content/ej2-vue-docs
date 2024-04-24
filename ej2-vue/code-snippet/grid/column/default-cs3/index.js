
import Vue from 'vue';
import { GridPlugin, Edit, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" allowPaging=true :editSettings='editSettings' :dataBound='dataBound'> </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    }
  },
  provide: {
    grid: [Edit, Page]
  },
  methods: {
    dataBound: function () {
      this.$refs.grid.ej2Instances.columns[0].isPrimaryKey = true;
    }
  }

});