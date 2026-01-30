<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue"
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  drilledMembers: [{ name: 'Country', items: ['France'] }],
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: [],
  calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
};
const showFieldList = true;
const height = 350;

provide('pivotview', [FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

/* csslint ignore:start */
#PivotView_PivotFieldList_Wrapper .e-pivot-button .e-icons.e-dropdown-icon::before,
#PivotView .e-pivot-button .e-icons.e-dropdown-icon::before {
  content: "\e941";
}

#PivotView_PivotFieldList_Wrapper .e-pivot-button .e-icons.e-pv-filtered::before,
#PivotView .e-pivot-button .e-icons.e-pv-filtered::before {
  content: "\e974";
}

#PivotView_PivotFieldList_Wrapper .e-pivot-button .e-icons.e-pv-filter::before,
#PivotView .e-pivot-button .e-icons.e-pv-filter::before {
  content: '\e202';
}

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
  content: '\e337';
}

#PivotView_PivotFieldList_Wrapper .e-pivot-button .e-icons.e-sort::before,
#PivotView .e-pivot-button .e-icons.e-sort::before {
  content: '\e306';
}

#PivotView_PivotFieldList_Wrapper .e-pivot-button .e-icons.e-remove::before,
#PivotView .e-pivot-button .e-icons.e-remove::before {
  content: '\e201';
}

/* csslint ignore:end */
</style>