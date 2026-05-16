<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
            :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    width: 100,
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    height: 100,
    offsetX: 100,
    offsetY: 100
}]
const snapSettings = {
    horizontalGridlines: {
        // Defines the snap interval for object
        snapIntervals: [10]
    },
    verticalGridlines: {
        snapIntervals: [10]
    },
    constraints: SnapConstraints.All
}

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
