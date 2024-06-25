<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [
    {id: 'node1', offsetX: 140, offsetY: 250,annotations: [{ content: 'node1' }] },
    { id: 'node1', offsetX: 250, offsetY: 250 ,annotations: [{ content: 'node2' }]},
    { id: 'node3', offsetX: 360, offsetY: 250 ,annotations: [{ content: 'node3' }]}
];

const width = "100%";
const height = "350px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}
onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    //Add collection of nodes
    diagramInstance.addElements(nodes)
});

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
