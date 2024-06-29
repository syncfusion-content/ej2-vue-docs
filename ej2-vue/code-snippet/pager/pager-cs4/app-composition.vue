<template>
  <div id="app">
      <ejs-pager :pageSize='10' :totalRecordsCount='200' :pageSizes="pageSizes"> </ejs-pager>
  </div>
</template>

<script setup>

import { PagerComponent as EjsPager, Pager, PagerDropDown  } from '@syncfusion/ej2-vue-grids';

Pager.Inject(PagerDropDown);
const pageSizes= [10, 20, 50, 100]
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>