<template>
    <div id="app">
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :nodes="nodes" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
    {
        id: "node1",
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: "Node1" }],
    },
    {
        id: "node2",
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: "Node2" }],
    },
    {
        id: "node3",
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 300,
        annotations: [{ content: "Node3" }],
    },
    {
        id: "group",
        children: ["node1", "node2", "node3"],
        // Defines the space between the group node edges and its children
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
    },
];

const diagramRef = ref(null);

onMounted(() => {
    // Access the diagram instance and select the group node once the diagram is mounted
    const diagram = diagramRef.value.ej2Instances;
    diagram.select([diagram.getObject("group")]);
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>