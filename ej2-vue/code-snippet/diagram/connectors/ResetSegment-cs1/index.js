
import Vue from 'vue';
import { DiagramPlugin,Diagram,ConnectorConstraints,HierarchicalTree, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ConnectorEditing,HierarchicalTree);
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [
            {
                content: 'Node1',
            },
        ],
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
        },
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
        offsetX: 200,
        offsetY: 240,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
        },
        annotations: [
            {
                content: 'Node2',
            },
        ],
    },
];
let connectors = [{
    // Unique name for the connector
    id: 'connector1',
    // Source and Target node's name to which connector needs to be connected.
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
    constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
},]

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="resetSegments">resetSegments</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            },
        }
    },

    methods: {
        resetSegments: function () {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.resetSegments();
        },
    },

});