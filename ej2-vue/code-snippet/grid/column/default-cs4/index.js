
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound'> </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data
    }
  },
  methods: {
    dataBound: function () {
      for (var i = 0; i < this.$refs.grid.ej2Instances.columns.length; i++) {
        this.$refs.grid.ej2Instances.columns[0].width = 120;
        if (this.$refs.grid.ej2Instances.columns[i].field === "OrderDate") {
          this.$refs.grid.ej2Instances.columns[i].type = "date";
        }
        if (this.$refs.grid.ej2Instances.columns[i].type === "date") {
          this.$refs.grid.ej2Instances.columns[i].format = { type: "date", format: "dd/MM/yyyy" };
        }
        this.$refs.grid.ej2Instances.columns[5].format = "P2";
      }
      this.$refs.grid.ej2Instances.refreshColumns();
    }
  }

});
