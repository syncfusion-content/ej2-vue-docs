

<template>
  <div id="app">
      <ejs-pager :pageSize='1' :pageCount='3' :totalRecordsCount='20'> </ejs-pager>
  </div>
</template>

<script>
import Vue from 'vue';
import { PagerPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(PagerPlugin);
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



