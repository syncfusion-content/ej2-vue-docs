<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'></ejs-heatmap>
    </div>
</template>
<script>

import { HeatMapComponent, Legend, Tooltip } from '@syncfusion/ej2-vue-heatmap';

export default {
    name: "App",
    components: {
        "ejs-heatmap": HeatMapComponent
    },
    data: function () {
        return {
            dataSource: [
                [1, 76],
                [19, 3]
            ],
            xAxis: {
                labels: ['Actual<br>Accept', 'Actual<br>Reject'],
                opposedPosition: true
            },
            yAxis: {
                labels: ['Actual<br>Accept', 'Actual<br>Reject'],
                maxLabelLength: 50
            }
        }
    },
    provide: {
        heatmap: [Tooltip, Legend]
    }
}
</script>