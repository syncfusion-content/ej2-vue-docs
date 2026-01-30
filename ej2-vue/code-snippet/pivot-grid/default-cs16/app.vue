<template>
    <div id="app">
        <ejs-pivotview id="PivotTable" :height="height" :dataSourceSettings="dataSourceSettings" :showGroupingBar="showGroupingBar" :showFieldList="showFieldList"> </ejs-pivotview>
    </div>
</template>
<script>
import { PivotViewComponent, GroupingBar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
name: "App",
components: {
"ejs-pivotview":PivotViewComponent
},
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true,
      showFieldList: true
    }
  },
  provide: {
    pivotview: [GroupingBar,FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

/* csslint ignore:start */
#PivotTable .e-group-columns {
  display: none;
}
#PivotTable .e-group-filters {
  height: 71px !important;
}

#PivotTable_PivotFieldList_Wrapper .e-field-list-columns{
  display: none;
}
#PivotTable_PivotFieldList_Wrapper .e-field-list-values{
  margin-top: 0px;
  height: 338px;
}
.e-pivotfieldlist-wrapper .e-values {
  height: 310px !important;
}

/* Hiding row axis in grouping bar */
/* #PivotView .e-group-rows {
    display: none;
} */

/* Hiding row axis in field list */
/* .e-pivotfieldlist-wrapper .e-field-list-rows {
    display: none;
} */

/* Hiding value axis in grouping bar */
/* #PivotView .e-group-values {
    display: none;
} */
/* Hiding value axis in field list */
/* .e-pivotfieldlist-wrapper .e-field-list-values {
    display: none;
} */
/* Hiding filter axis in grouping bar */
/* #PivotView .e-group-filters {
    display: none;
} */
/* Hiding filter axis in field list */
/* .e-pivotfieldlist-wrapper .e-field-list-filters {
    display: none;
} */
/* csslint ignore:end */
</style>