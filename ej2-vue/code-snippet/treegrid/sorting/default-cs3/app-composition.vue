<template>
    <div id="app">
          <ejs-treegrid :dataSource='data' :allowSorting='true' height='315px' childMapping='subtasks' :treeColumnIndex='1'  :actionComplete='actionHandler' :actionBegin='actionHandler'>
            <e-columns>
                <e-column field='Category' headerText='Category' width='140'></e-column>
                <e-column field='orderName' headerText='Order Name' width='200'></e-column>
                <e-column field='orderDate' headerText='Order Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='units' headerText='Units' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Sort, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sortData } from "./datasource.js";

const data = sortData;

provide('treegrid',  [ Sort ]);

const actionHandler = (args) => {
    alert(args.requestType + ' ' + args.type); // custom Action
};
</script>