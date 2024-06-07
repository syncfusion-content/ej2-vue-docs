<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :allowDrillThrough="allowDrillThrough" :beginDrillThrough="beginDrillThrough"> </ejs-pivotview>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, DrillThrough } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';
import { Grid,Sort, Filter, Group, ContextMenu } from '@syncfusion/ej2-grids';

   const   dataSourceSettings= {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      };
      const  height= 350;
      const  allowDrillThrough= true;
    
  
  provide('pivotview',  [DrillThrough]);

  const beginDrillThrough=(args) =>{
        if (args.gridObj) {
            Grid.Inject(Sort, Filter, Group, ContextMenu);
            let gridObj = args.gridObj;
            gridObj.allowGrouping = true;
            gridObj.allowSorting = true;
            gridObj.allowFiltering = true;
            gridObj.filterSettings = { type: 'CheckBox' };
            gridObj.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
                'Copy', 'Edit', 'Delete', 'Save', 'Cancel', 'FirstPage', 'PrevPage',
                'LastPage', 'NextPage'];
        }
    };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>