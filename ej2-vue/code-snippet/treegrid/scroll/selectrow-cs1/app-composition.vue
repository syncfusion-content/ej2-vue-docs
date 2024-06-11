<template>
<div id="app">
    <ejs-numerictextbox ref='numeric' format='N' min='0' placeholder='Enter index to select a row' width=200 :showSpinButton='false' :change='onchange'></ejs-numerictextbox>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' height='280' width='100%' :treeColumnIndex='1' :rowSelected='rowSelected'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='120' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { sampleData } from "./datasource.js";
import { ref } from "vue";

const numeric = ref(null);
const treegrid = ref(null);

const data = sampleData;

const onchange = () => {
  treegrid.value.selectRow(parseInt(numeric.value.getText(), 10));
};

const rowSelected = () => {
    let rowHeight = treegrid.value.getRows()[treegrid.value.getSelectedRowIndexes()[0]].scrollHeight;
    treegrid.value.getContent().children[0].scrollTop = rowHeight * treegrid.value.getSelectedRowIndexes()[0];
};

</script>