<template>
  <div id="app">
      <ejs-grid :dataSource="data" allowPaging=true> </ejs-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { GridPlugin, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';

Vue.use(GridPlugin);
export default {
  data () {
    return {
      data:data
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


