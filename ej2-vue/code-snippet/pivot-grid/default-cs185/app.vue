<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :displayOption="displayOption"
            :chartSettings="chartSettings" :height="height"> </ejs-pivotview>
    </div>
</template>
<script>
import { PivotViewComponent, PivotChart } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
    name: "App",
    components: {
        "ejs-pivotview": PivotViewComponent
    },
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
            chartSettings: { chartSeries: { innerRadius: '140', type: 'Pie' } }
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
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>