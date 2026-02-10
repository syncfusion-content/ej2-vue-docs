<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"
            :connectors="connectors" :layout="layout" :animationComplete="animationComplete"></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, LayoutAnimation } from '@syncfusion/ej2-vue-diagrams';

//Initialize nodes
let nodes = [
    {
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{ content: 'Node1' }],
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        expandIcon: {
            shape: 'ArrowDown',
            width: 20,
            height: 15,
        },
        collapseIcon: {
            shape: 'ArrowUp',
            width: 20,
            height: 15,
        },
    },
    {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node2' }],
    },
    {
        id: 'Init2',
        width: 140,
        height: 50,
        offsetX: 100,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node3' }],
    },
    {
        id: 'Init3',
        width: 140,
        height: 50,
        offsetX: 150,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node4' }],
    },
];

//Initialize connectors
let connectors = [
    {
        id: 'connector1',
        sourceID: 'Start',
        targetID: 'Init',
        type: 'Orthogonal',
    },
    {
        id: 'connector2',
        sourceID: 'Start',
        targetID: 'Init2',
        type: 'Orthogonal',
    },
    {
        id: 'connector3',
        sourceID: 'Init2',
        targetID: 'Init3',
        type: 'Orthogonal',
    },
];

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: "1000px",
            height: '590px',
            nodes: nodes,
            connectors: connectors,

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree'
            },

            animationComplete: (args) => {
                console.log('Animation complete');
                const diagramInstance = this.$refs.diagramObj.ej2Instances;
                diagramInstance.nodes[0].style.fill =
                    diagramInstance.nodes[0].style.fill === '#6BA5D7' ? 'red' : '#6BA5D7';
                diagramInstance.dataBind();
            },
        };
    },
    provide: {
        diagram: [HierarchicalTree, LayoutAnimation],
    },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>