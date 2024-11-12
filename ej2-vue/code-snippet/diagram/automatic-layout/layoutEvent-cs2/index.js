
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize nodes for diagram
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

//Initialize connectors for diagram
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

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes'
    :connectors='connectors' :click="animationComplete" :layout='layout'>
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            connectors: connectors,

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree',
            },

            animationComplete: (args) => {
                console.log('Animation complete');
                const diagramInstance = this.$refs.diagramObj.ej2Instances;
                diagramInstance.nodes[0].style.fill =
                    diagramInstance.nodes[0].style.fill === '#6BA5D7' ? 'red' : '#6BA5D7';
                diagramInstance.dataBind();
            }
        };
    },
});
