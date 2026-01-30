<template>
  <div id="app">
    <div id="template">
      <div>
        <ejs-button id="expandall" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="expandAll">EXPAND ALL</ejs-button>
        <ejs-button id="collapseall" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="collapseAll">COLLAPSE
          ALL</ejs-button>
      </div>
    </div>
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbarTemplate="toolbarTemplate"> </ejs-pivotview>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { PivotViewComponent, Toolbar, } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

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
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      gridSettings: { columnWidth: 140 },
      showToolbar: true,
      toolbarTemplate: '#template',
      isPrimary: true
    };
  },
  methods: {
    expandAll: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.dataSourceSettings.expandAll = true;
    },
    collapseAll: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.dataSourceSettings.expandAll = false;
    }
  },
  provide: {
    pivotview: [
      Toolbar,
    ]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>