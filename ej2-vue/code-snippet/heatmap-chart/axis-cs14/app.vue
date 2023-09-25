<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'></ejs-heatmap>
    </div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Legend, Tooltip } from '@syncfusion/ej2-vue-heatmap';
Vue.use(HeatMapPlugin);

export default {
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
