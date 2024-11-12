<template>
    <div id="app">
        <button @click="updatePadding">Update Group Padding</button>
        <button @click="updateStyle">Update Group Style</button>
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :nodes="nodes" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
    {
        id: 'rectangle1',
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'rectangle1' }],
    },
    {
        id: 'rectangle2',
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'rectangle2' }],
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
        style: { strokeColor: 'green' },
    },
];

const diagramRef = ref(null);
let diagramInstance;
function updatePadding() {
    const group = diagramInstance.getObject('group');
    group.padding = { left: 10, right: 10, top: 10, bottom: 10 };
    diagramInstance.dataBind();
}

function updateStyle() {
    const group = diagramInstance.getObject('group');
    group.style = { fill: 'green' };
    diagramInstance.dataBind();
}

onMounted(() => {
    diagramInstance = diagramRef.value.ej2Instances;
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>