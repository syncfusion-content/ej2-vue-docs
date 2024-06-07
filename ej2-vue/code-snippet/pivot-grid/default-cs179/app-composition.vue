<template>
    <div class="control-section" id="pivot-grid-section">
        <div id="dropdown-control" style="margin-bottom:5px;">
            <table style="width: 350px;margin-left: 50;">
                <tbody>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <b>Accumulation Chart:</b>
                            </div>
                        </td>
                        <td>
                            <div>
                                <ejs-dropdownlist id="dropdownlist" :change="ddlOnChange" :dataSource="chartTypes"
                                    index="0"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="content-wrapper" id="app" style="height: 250px;">
            <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
                :chartSettings="chartSettings" :displayOption="displayOption"></ejs-pivotview>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { pivotData } from './pivotData.js';
import { ref } from 'vue';

const pivotview = ref(null);

const dataSourceSettings = {
    dataSource: pivotData,
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
};
const height = 350;
const displayOption = { view: 'Chart' };
const chartSettings = { chartSeries: { type: 'Pie' } };
const chartTypes = ["Pie", "Doughnut", "Pyramid", "Funnel"];

const ddlOnChange = (args) => {
    let pivotObj = (pivotview.value).ej2Instances;
    pivotObj.chartSettings.chartSeries.type = args.value.toString();
};

provide('pivotview', [PivotChart]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>