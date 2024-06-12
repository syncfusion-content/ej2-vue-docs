<template>
    <div id="app">
        <ejs-heatmap id="heatmap" :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource'></ejs-heatmap>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { HeatMapComponent as EjsHeatmap, Legend, Tooltip } from '@syncfusion/ej2-vue-heatmap';

const dataSource = [
    [1, 76],
    [19, 3]
];
const xAxis = {
    labels: ['Actual<br>Accept', 'Actual<br>Reject'],
    opposedPosition: true
};
const yAxis = {
    labels: ['Actual<br>Accept', 'Actual<br>Reject'],
    maxLabelLength: 50
};

provide('heatmap', [Tooltip, Legend]);

</script>