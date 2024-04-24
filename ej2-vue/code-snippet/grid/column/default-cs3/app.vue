

<template>
  <div id="app">
      <ejs-grid ref='grid' :dataSource="data" allowPaging=true :editSettings='editSettings' :dataBound='dataBound'> </ejs-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { GridPlugin, Edit, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource';

Vue.use(GridPlugin);
export default {
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


