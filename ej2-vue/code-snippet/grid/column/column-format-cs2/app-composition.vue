<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='182px' allowPaging=true>
            <e-columns>
              <e-column field='RollNo' headerText='Roll No'></e-column>
              <e-column field='Mark1' headerText='Mark 1'></e-column>
              <e-column field='Mark2' headerText='Mark 2' format='N'></e-column>
              <e-column field='Average' headerText='Average' format='N2'></e-column>
              <e-column field='Percentage' headerText='Percentage of Marks' format='P'></e-column>
              <e-column field='Fees' headerText='Fees' textAlign='Right' format='C'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
  provide('grid',  [Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>