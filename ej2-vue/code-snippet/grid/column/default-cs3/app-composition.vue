<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" allowPaging=true :editSettings='editSettings' :dataBound='dataBound'>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
const grid = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
provide('grid', [Edit, Page]);
const dataBound = function () {
  grid.value.ej2Instances.columns[0].isPrimaryKey = true;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>