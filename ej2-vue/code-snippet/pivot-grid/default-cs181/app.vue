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
                drilledMembers: [{ name: 'Country', items: ['Germany'] }],
                columns: [{ name: 'Country' }, { name: 'Products' }],
                values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
                rows: [{ name: 'Year' }, { name: 'Quarter' }],
                formatSettings: [{ name: 'Amount', format: 'C0' }],
                filters: []
            },
            height: 350,
            displayOption: { view: 'Chart' },
            chartSettings: { columnHeader: "Germany-Road Bikes", columnDelimiter: '-', chartSeries: { type: 'Doughnut' } }
        }
    },
    provide: {
        pivotview: [PivotChart]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>