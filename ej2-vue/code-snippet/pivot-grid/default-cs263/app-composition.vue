<template>
    <div id="app">
        <ejs-pivotview id="pivotview" ref="pivotTableObj" :dataSourceSettings="dataSourceSettings" :height="height"
            :showFieldList="showFieldList" :dataBound="dataBound"> </ejs-pivotview>
    </div>
</template >
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';
import { Tooltip } from "@syncfusion/ej2-popups";
import { ref } from 'vue';

const pivotTableObj = ref(null);
let headerTooltip;
function beforeRender(args) {
    if (args.target.parentElement.querySelector('.e-rowsheader')) {
        // Here you can set custom content for row header(s) tooltip from its cell information.
        var index = Number(args.target.getAttributeNode('index').value);
        var colIndex = Number(args.target.getAttributeNode('data-colindex').value);
        var cell = pivotTableObj.value.ej2Instances.engineModule.pivotValues[index][colIndex];
        var valueText = cell.valueSort ? cell.valueSort : '';
        if (cell.formattedText !== 'Grand Total') {
            this.content =
                '<div>' +
                'FieldName: ' +
                valueText.axis +
                '</br>' +
                'Text: ' +
                cell.formattedText +
                '</div>';
        } else {
            this.content =
                '<div>' +
                'FieldName: ' +
                valueText.uniqueName +
                '</br>' +
                'Text: ' +
                cell.formattedText +
                '</div>';
        }
    } else {
        // Here you can set custom content for column header(s) tooltip from its cell information.
        if (args.target.querySelector('.e-cellvalue')) {
            this.content = args.target.querySelector('.e-cellvalue').innerText;
        } else if (args.target.querySelector('.e-headertext')) {
            this.content = args.target.querySelector('.e-headertext').innerText;
        } else if (args.target.querySelector('.e-stackedheadercelldiv')) {
            this.content = args.target.querySelector('.e-stackedheadercelldiv').innerText;
        } else {
            this.content = '';
        }
    }
}

const dataSourceSettings = {
    dataSource: pivotData,
    expandAll: false,
    rows: [{ name: 'Country' }, { name: 'Products' }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
};
const height = 350;
const showFieldList = true;


const dataBound = () => {
    let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
    if (!headerTooltip) {
        headerTooltip = new Tooltip({
            target: 'td.e-rowsheader,th.e-columnsheader', beforeRender: beforeRender
        });
        headerTooltip.appendTo(pivotGridObj.element);
    }
};
provide('pivotview', [FieldList]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>