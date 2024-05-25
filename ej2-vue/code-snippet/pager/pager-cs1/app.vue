<template>
  <div id="app">
      <ejs-pager :pageSize='1' :totalRecordsCount='20'> </ejs-pager>
  </div>
</template>

<script>
import { PagerComponent } from '@syncfusion/ej2-vue-grids';
export default {
name: "App",
components: {
"ejs-pager":PagerComponent
},
  data () {
    return {
    }
  }
}
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>