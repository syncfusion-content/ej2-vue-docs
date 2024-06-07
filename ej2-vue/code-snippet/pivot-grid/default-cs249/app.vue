<template>
  <div id="app">
    <ejs-button id="enablertl" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="enableRtl">ENABLE RTL</ejs-button>
    <ejs-button id="disablertl" :isPrimary="isPrimary" cssClass='e-flat' v-on:click="disableRtl">DISABLE RTL</ejs-button>
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbar="toolbar"> </ejs-pivotview>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { PivotViewComponent, Toolbar } from "@syncfusion/ej2-vue-pivotview";
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
      toolbar: [{ template: '#enablertl' }, { template: '#disablertl' }],
      isPrimary: true
    };
  },
  methods: {
    enableRtl: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.enableRtl = true;
    },
    disableRtl: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.enableRtl = false;
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
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>