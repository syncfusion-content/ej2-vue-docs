<template>
  <div id="app">
    <ejs-button id="save-btn" :isPrimary="isPrimary" v-on:click="saveBtnClick">Save Layout</ejs-button>
    <ejs-button id="load-btn" :isPrimary="isPrimary" v-on:click="loadBtnClick">Load Layout</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :showGroupingBar="showGroupingBar" :enablePersistence="enablePersistence"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

let layout;
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
      enablePersistence: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [GroupingBar]
  },
  methods: {
    saveBtnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      this.layout = pivotGridObj.getPersistData();
    },
    loadBtnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.loadPersistData(this.layout);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>