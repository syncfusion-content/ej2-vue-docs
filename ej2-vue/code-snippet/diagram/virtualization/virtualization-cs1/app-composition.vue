<template>
    <div id="app">

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
            :constraints="constraints"></ejs-diagram>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let diagramObj = ref(null);


const createNodes = () => {
    const nodes = [];
    const nodeWidth = 50;
    const nodeHeight = 50;
    const space = 50;
    const nodesPerRow = 50;
    const totalNodes = 500;

    for (let i = 0; i < totalNodes; i++) {
        const row = Math.floor(i / nodesPerRow);
        const col = i % nodesPerRow;

        const node = {
            id: `node${i + 1}`,
            width: nodeWidth,
            height: nodeHeight,
            offsetX: col * (nodeWidth + space) + nodeWidth / 2,
            offsetY: row * (nodeHeight + space) + nodeHeight / 2,
            style: { fill: '#6BA5D7', strokeColor: 'white' },
            annotations: [{ content: `${i + 1}` }],
        };
        nodes.push(node);
    }
    return nodes;
}

// Declare the nodes after the function is available
let nodes = ref(createNodes());

const width = "1000px";
const height = "590px";
//Enable virtualization in diagram
const constraints = DiagramConstraints.Default | DiagramConstraints.Virtualization;

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>