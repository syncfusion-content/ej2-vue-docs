



<template>
    <div id="app">
        <ejs-button id="refresh-btn" :isPrimary="isPrimary" v-on:click.native="btnClick" >Print</ejs-button>
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" 
        :showFieldList="showFieldList" :displayOption="displayOption" >
        </ejs-pivotview>
</div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
      },
      height: 350,
      showFieldList: true,
      displayOption: { view: 'Chart' },
    }
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.chart.print();
    }
  },
  provide: {
        pivotview: [FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




