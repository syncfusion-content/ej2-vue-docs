



<template>
    <div id="app">
        <ejs-button id="save-btn" :isPrimary="isPrimary" v-on:click.native="saveBtnClick">Save Layout</ejs-button>
        <ejs-button id="load-btn" :isPrimary="isPrimary" v-on:click.native="loadBtnClick">Load Layout</ejs-button>
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar" :enablePersistence="enablePersistence"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotFieldListPlugin, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(PivotFieldListPlugin);
Vue.use(ButtonPlugin);
let layout: string;
export default {
  data () {
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
   }
  methods: {
    saveBtnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      this.layout = pivotGridObj.getPersistData();
    },
    loadBtnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.loadPersistData(this.layout);
    }
  }
}
</script>
<style>
    @import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




