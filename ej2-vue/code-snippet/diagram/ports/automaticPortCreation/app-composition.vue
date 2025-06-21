<template>
    <div id="app">
        <ejs-diagram id="diagram" width="100%" height="500px" :nodes="nodes"
        :constraints="constraints" :snapSettings="snapSettings" />
    </div>
</template>

<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { NodeConstraints, SnapConstraints, DiagramConstraints } from '@syncfusion/ej2-diagrams';

const nodes = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
        constraints: NodeConstraints.Default &
            ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
        constraints: NodeConstraints.Default &
            ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
    },
];
// Enable AutomaticPortCreation
const constraints = DiagramConstraints.Default | DiagramConstraints.AutomaticPortCreation;
const snapSettings = { constraints: SnapConstraints.None };
</script>

<style scoped>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>