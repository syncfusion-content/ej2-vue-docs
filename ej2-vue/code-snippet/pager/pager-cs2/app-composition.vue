<template>
  <div id="app">
      <ejs-pager :pageSize='1' :pageCount='3' :totalRecordsCount='20'> </ejs-pager>
  </div>
</template>

<script setup>
import { PagerComponent as EjsPager } from '@syncfusion/ej2-vue-grids';
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>