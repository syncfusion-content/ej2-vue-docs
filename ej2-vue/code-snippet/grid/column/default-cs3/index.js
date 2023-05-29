
import Vue from 'vue';
import { GridPlugin, Edit } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :editSettings='editSettings' :dataBound='dataBound'> </ejs-grid>
  </div>
`,

  data () {
    return {
      data: [
      { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
      { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
      { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    }
  },
  provide: {
    grid: [Edit]
  },
  methods: {
    dataBound: function() {
        this.$refs.grid.ej2Instances.columns[0].isPrimaryKey = true;
    }
  }

});