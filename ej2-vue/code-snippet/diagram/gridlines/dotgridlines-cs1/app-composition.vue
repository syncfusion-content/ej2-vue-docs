<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

const snapSettings = {
    constraints: SnapConstraints.ShowLines,
    gridType: 'Dots',
    horizontalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals:  [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    },
    verticalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals: [3, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
};

const width = "100%";
const height = "350px";

provide('diagram', [Snapping]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
