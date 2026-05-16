<template>
    <div id="app">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const connector = {
    // Name of the connector
    id: "connector1",
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
const connectoradd = {
    // Name of the connector
    id: "connector",
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
const width = "100%";
const height = "350px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    // Adds to the diagram
    diagramInstance.add(connector)
})

const add = function () {
diagram.value.ej2Instances.add(connectoradd)
}
const remove = function () {
diagram.value.ej2Instances.remove(connectoradd)
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
