<template>
    <div id="app">
        <button @click="group">Group selected nodes</button>
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="900px" :nodes="nodes" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
    {
        id: "node1",
        height: 100,
        width: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: "Node1" }],
    },
    {
        id: "node2",
        height: 100,
        width: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: "Node2" }],
    },
    {
        id: "node3",
        height: 100,
        width: 100,
        offsetX: 300,
        offsetY: 300,
        annotations: [{ content: "Node3" }],
    },
];
const diagramRef = ref(null);
onMounted(() => {
    const diagram = diagramRef.value.ej2Instances;
    diagram.selectAll();
});
function group() {
    // Groups the selected nodes in diagram
    const diagram = diagramRef.value.ej2Instances;
    diagram.group();
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>