<template>
    <div id="app">
        <button @click="unGroup">Ungroup</button>
        <ejs-diagram ref="diagramRef" id="diagram" :width="'100%'" :height="'600px'" :nodes="nodes" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramRef = ref(null);
const nodes = [
    {
        id: 'rectangle1',
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [
            {
                content: 'rectangle1',
            },
        ],
    },
    {
        id: 'rectangle2',
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [
            {
                content: 'rectangle2',
            },
        ],
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
    },
];
onMounted(() => {
    const diagramInstance = diagramRef.value.ej2Instances;
    diagramInstance.select([diagramInstance.getObject('group')]);
});
const unGroup = () => {
    const diagramInstance = diagramRef.value.ej2Instances;
    // Ungroups the selected nodes and connectors in the diagram
    diagramInstance.unGroup();
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>