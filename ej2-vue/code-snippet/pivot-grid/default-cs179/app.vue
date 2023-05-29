



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
<script>
import Vue from "vue";
import { PivotViewPlugin, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { DropDownListPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { pivotData } from './pivotData.js';
Vue.use(PivotViewPlugin);
Vue.use(DropDownListPlugin)

export default {
    data() {
        return {
            dataSourceSettings: {
                dataSource: pivotData,
                expandAll: false,
                columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
                values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
                rows: [{ name: 'Country' }, { name: 'Products' }],
                formatSettings: [{ name: 'Amount', format: 'C0' }],
                filters: []
            },
            height: 350,
            displayOption: { view: 'Chart' },
            chartSettings: { chartSeries: { type: 'Pie' } },
            chartTypes: ["Pie", "Doughnut", "Pyramid", "Funnel"]
        }
    },
    methods: {
        ddlOnChange: function (args) {
            let pivotObj = (this.$refs.pivotview).ej2Instances;
            pivotObj.chartSettings.chartSeries.type = args.value.toString();
        }
    },
    provide: {
        pivotview: [PivotChart]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>




