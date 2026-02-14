<template>
  <div id="app">
    <div style="display: inline-block">
        <label style="padding: 10px 10px 26px 0"> Change the loading indicator type: </label>
        <ejs-dropdownlist ref="dropdown"  index="0" width="120" :dataSource="drobDownData" :fields='fields' :change="valueChange">
        </ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" style="padding: 10px 10px" :dataSource='dataGrid' :allowPaging='true'
    :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
            <e-column field='Employees' headerText='Employee Name' width='145'></e-column>
            <e-column field='Designation' headerText='Designation' width='130'></e-column>
            <e-column field='CurrentSalary' headerText='Current Salary' width='140' format="C2" textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide,ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,Page, Toolbar, Edit , Filter,Sort } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
const dataGrid = new DataManager({ url: 'https://services.syncfusion.com/vue/production/api/urldatasource', adaptor: new UrlAdaptor });
const loadingIndicator ={ indicatorType: 'Spinner' };
const pageSettings ={ pageCount: 3 };
const grid=ref(null);
const dropdown=ref(null);
const drobDownData= [
        { id: 'Spinner', value: 'Spinner' },
        { id: 'Shimmer', value: 'Shimmer' }
    ];
const fields= { text: 'value', value: 'id' };

const valueChange=function(args) {
    grid.value.ej2Instances.loadingIndicator.indicatorType = args.value;
    grid.value.refreshColumns();
  } 
  provide('grid',  [Page, Toolbar, Edit , Filter,Sort]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>