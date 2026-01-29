<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList"
      :allowCalculatedField="allowCalculatedField" :actionFailure="actionFailure"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, CalculatedField, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Total', format: 'C2' }],
        filters: [],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
      },
      height: 350,
      allowCalculatedField: true,
      showFieldList: true,
    }
  },
  methods: {
    actionFailure: function (args) {
      if (args.actionName == 'Open calculated field dialog') {
        // Triggers when the current UI action fails to achieve the desired result.
      }
    }
  },
  provide: {
    pivotview: [CalculatedField, FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>