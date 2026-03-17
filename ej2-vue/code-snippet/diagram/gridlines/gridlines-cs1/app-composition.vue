<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let snapSettings = {
    // Display both Horizontal and Vertical gridlines
    constraints: SnapConstraints.ShowLines
};

const width = "100%";
const height = "350px";

provide('diagram', [Snapping]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
