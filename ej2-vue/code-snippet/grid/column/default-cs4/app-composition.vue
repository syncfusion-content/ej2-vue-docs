<template>
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound'> </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-grids';
import { data } from 'datasource';
import { ref } from 'vue';
const grid = ref(null);
      const dataBound = function() {
        for (var i = 0; i < grid.value.ej2Instances.columns.length; i++) {
            grid.value.ej2Instances.columns[0].width = 120;
            if(grid.value.ej2Instances.columns[i].field === "OrderDate"){
                grid.value.ej2Instances.columns[i].type="date";
            }
            if (grid.value.ej2Instances.columns[i].type === "date") {
                grid.value.ej2Instances.columns[i].format = { type: "date", format: "dd/MM/yyyy" };
            }
            grid.value.ej2Instances.columns[5].format = "P2";
        }
        grid.value.ej2Instances.refreshColumns();
    }
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>