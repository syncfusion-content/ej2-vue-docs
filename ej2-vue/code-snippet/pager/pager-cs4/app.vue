<template>
  <div id="app">
      <ejs-pager :pageSize='10' :totalRecordsCount='200' :pageSizes="pageSizes"> </ejs-pager>
  </div>
</template>

<script>
import { PagerComponent, Pager, PagerDropDown } from '@syncfusion/ej2-vue-grids';

Pager.Inject(PagerDropDown);

export default {
name: "App",
components: {
"ejs-pager":PagerComponent
},
  data () {
    return {
      pageSizes: [10, 20, 50, 100]
    }
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>