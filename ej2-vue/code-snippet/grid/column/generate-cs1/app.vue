

<template>
  <div id="app">
      <ejs-grid
        :dataSource="data"
        id="Grid"
        ref="grid"
        :pageSettings="pageSettings"
        :allowPaging="true"
        :editSettings="editSettings"
        :toolbar="toolbar"
        :dataBound="dataBound"
      ></ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Edit, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data
      flag: true,
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true
      },
      pageSettings: { pageSize: 5 },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"]
    };
  },
  methods: {
    dataBound: function() {
      if (this.flag) {
        this.flag = false;
        var cols = Object.keys(this.$refs.grid.getCurrentViewRecords()[0]);
        var length = cols.length;
        var col = [];
        for (var i = 0; i < length; i++) {
          var field = cols[i];
          var obj = {};
          obj["field"] = field;
          var mon = this.$refs.grid.getCurrentViewRecords()[i][field];
          var type = typeof mon;
          if (type === "object") {
            obj["valueAccessor"] = (field, data, column) => {
              return (
                data[field].Name +
                " , " +
                data[field].Unit +
                " , " +
                data[field].VSetMax
              );
            };
          }
          col.push(obj);
        }
        this.$refs.grid.setProperties({ columns: col });
      }
    }
  },
  provide: {
    grid: [Edit, Toolbar, Page]
  }
};
</script>

<style>
@import "https://cdn.syncfusion.com/ej2/material.css";
</style>


