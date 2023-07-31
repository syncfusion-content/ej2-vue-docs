



<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" 
        :aggregateCellInfo="aggregateCell" :showFieldList="showFieldList" > </ejs-pivotview>
</div>
</template >

<script>
import Vue from "vue";
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

function secondsToHms(d) {
     d = Number(d);
     var h = Math.floor(d / 3600);
     var m = Math.floor((d % 3600) / 60);
     var s = Math.floor((d % 3600) % 60);
     return (
          ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
     );
}

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
      },
      height: 350,
      showFieldList: true
    }
  },
  methods: {
    aggregateCell:function(args) {
      if (args.fieldName === 'Sold') {
          args.value = secondsToHms(args.value);
     }
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




