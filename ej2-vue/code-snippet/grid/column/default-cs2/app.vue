<template>
  <div id="app">
    <ejs-grid :dataSource="data" allowPaging=true> </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';


export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
  },
  data() {
    return {
      data: data
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>