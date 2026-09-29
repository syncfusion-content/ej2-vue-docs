<template>
  <div id="app">
    <ejs-grid :dataSource="data" allowPaging=true> </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
provide('grid', [Page]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>