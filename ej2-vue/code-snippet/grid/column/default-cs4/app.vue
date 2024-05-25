<template>
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound'> </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
import { data } from 'datasource';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data () {
    return {
      data: data
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
            this.$refs.grid.ej2Instances.columns[5].format = "P2";
        }
        this.$refs.grid.ej2Instances.refreshColumns();
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>