<template>
  <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button style='margin:3px' v-for="v in versions" :key="v" :id="'restore' + v" @click="clickHandler('v.' + v)">
      Version {{ v }}
    </ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true'
      :ej2StatePersistenceVersion='gridversion' :allowPaging='true' :allowFiltering='true' allowGrouping='true'
      allowSorting="true">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { ref } from 'vue';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Sort, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
var message = ref('');
var gridversion = 'v.0';
var versions = [1, 2, 3];
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: data,
      message: message,
      versions: versions,
      gridversion: gridversion,
    };
  },
  methods: {
    clickHandler: function (version) {
      this.$refs.grid.ej2Instances.ej2StatePersistenceVersion = version;
      var persistedGridSettings = (window.localStorage.getItem(`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion));
      if (persistedGridSettings) {
        this.$refs.grid.setProperties(JSON.parse(persistedGridSettings));
        this.message = `Grid state restored to ` + version;
      } else {
        var gridData = this.$refs.grid.ej2Instances.getPersistData();
        window.localStorage.setItem((`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion), gridData);
        this.message = `Grid state saved to` + version;
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Group]
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