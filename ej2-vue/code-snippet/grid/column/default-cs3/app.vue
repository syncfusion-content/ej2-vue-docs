<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" allowPaging=true :editSettings='editSettings' :dataBound='dataBound'>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, Edit, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    }
  },
  provide: {
    grid: [Edit, Page]
  },
  methods: {
    dataBound: function () {
      this.$refs.grid.ej2Instances.columns[0].isPrimaryKey = true;
    }
  }
}
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