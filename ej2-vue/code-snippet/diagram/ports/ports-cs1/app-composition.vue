<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        id: 'port1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
}]

const width = "100%";
const height = "350px";


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
