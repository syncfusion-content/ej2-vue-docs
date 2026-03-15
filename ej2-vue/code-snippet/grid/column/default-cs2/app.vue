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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>