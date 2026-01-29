<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

    const  dataSourceSettings= {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        filters: []
      };
      const height= 350;
      const  gridSettings= {
        columnRender(args){
          // Here you can customize the specific columns.
          for (var i = 0; i < args.columns.length; i++) {
            args.columns[i].autoFit = true;
            args.columns[i].textAlign = "Right";
          }
        }
      };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>