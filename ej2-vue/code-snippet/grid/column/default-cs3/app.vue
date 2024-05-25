<template>
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" allowPaging=true :editSettings='editSettings' :dataBound='dataBound'> </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data () {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    }
  },
  provide: {
    grid: [Edit, Page]
  },
  methods: {
    dataBound: function() {
        this.$refs.grid.ej2Instances.columns[0].isPrimaryKey = true;
    }
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>