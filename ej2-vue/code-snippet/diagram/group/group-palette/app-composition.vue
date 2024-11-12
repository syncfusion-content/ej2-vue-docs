<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :expandMode="expandMode" width="20%"
            :palettes="palettes"></ejs-symbolpalette>
        <ejs-diagram ref="diagramRef" id="diagram" width="80%" height="645px" :nodes="nodes"
            @created="onCreated"></ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { DiagramComponent as EjsDiagram, SymbolPaletteComponent as EjsSymbolpalette } from '@syncfusion/ej2-vue-diagrams';

const expandMode = ref("Multiple");
const nodes = ref([
    {
        offsetX: 250,
        offsetY: 250,
        width: 100,
        height: 100,
        visible: true,
        style: { fill: "#6AA8D7", strokeWidth: 1 },
    },
]);

const palettes = ref([
    {
        id: "palette1",
        title: "Basic Shapes",
        symbols: getSymbols(),
        expanded: true,
    },
]);

function getSymbols() {
    return [
        {
            id: "n1",
            height: 50,
            width: 50,
            offsetX: 50,
            offsetY: 50,
            style: { fill: "green" },
        },
        {
            id: "n2",
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 100,
            style: { fill: "yellow" },
        },
        {
            id: "group1",
            children: ["n1", "n2"],
            padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
        {
            id: "n3",
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 100,
            style: { fill: "pink" },
        },
        {
            id: "n4",
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 170,
            style: { fill: "orange" },
        },
        {
            id: "group2",
            children: ["n3", "n4"],
            padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
    ];
}

const diagramRef = ref(null);

function onCreated() {
    const diagram = diagramRef.value.ej2Instances;
    diagram.fitToPage({ mode: "Width" });
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>