
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound'> </ejs-grid>
  </div>
`,

  data () {
    return {
      data: [
    { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: "1996-07-02T00:00:00.000Z" },
    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: "1996-07-19T00:00:00.000Z" },
    { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: "1996-07-22T00:00:00.000Z" }]
    }
  },
  methods: {
      dataBound: function() {
        for (var i = 0; i < this.$refs.grid.ej2Instances.columns.length; i++) {
            this.$refs.grid.ej2Instances.columns[0].width = 120;
            if(this.$refs.grid.ej2Instances.columns[i].field === "OrderDate"){
                this.$refs.grid.ej2Instances.columns[i].type="date";
            }
            if (this.$refs.grid.ej2Instances.columns[i].type === "date") {
                this.$refs.grid.ej2Instances.columns[i].format = { type: "date", format: "dd/MM/yyyy" };
            }
            this.$refs.grid.ej2Instances.columns[2].format = "P2";
        }
        this.$refs.grid.ej2Instances.refreshColumns();
    }
  }

});