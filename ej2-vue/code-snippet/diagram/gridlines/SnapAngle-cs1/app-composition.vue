<template>
    <div id="app">
    <label> Angle :</label>
    <input type="number" max="360" min="5" value="20" @change="Angle($event)" />
    <ejs-diagram ref="diagram" :width='width' :height='height' :nodes='nodes'
        :snapSettings='snapSettings'></ejs-diagram>
</div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node1',
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}]
let snapSettings = {
     snapAngle: 20,
}
Angle = function (args) {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.snapSettings.snapAngle =  Number(args.target.value);
    diagramInstance.dataBind();
    };
const width = "100%";
const height = "350px";
provide('diagram', [Snapping]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
