<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const width = "100%";
const height = "350px";
const scrollSettings = {
    horizontalOffset: 100,
    verticalOffset: 50
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
