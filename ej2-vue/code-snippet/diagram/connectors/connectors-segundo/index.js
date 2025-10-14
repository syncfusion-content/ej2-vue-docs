import Vue from 'vue';
import { DiagramPlugin,Diagram,ConnectorConstraints, ConnectorEditing, UndoRedo } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ConnectorEditing, UndoRedo);
Vue.use(DiagramPlugin);

let nodes = [
    {
        id: 'sourcenode',
        width: 150,
        height: 50,
        offsetX: 350,
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
    },
    {
        id: 'targetnode',
        width: 150,
        height: 50,
        offsetX: 200,
        offsetY: 250,
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
    id: 'connector1',
    sourceID: 'sourcenode',
    targetID: 'targetnode',
    type: 'Orthogonal',
    segments: [
        {
            type: 'Orthogonal',
            direction: 'Left',
            length: 100,
        },
        {
            type: 'Orthogonal',
            direction: 'Bottom',
            length: 100
        },
        {
            type: 'Orthogonal',
            direction: 'Right',
            length: 100
        },
        {
            type: 'Orthogonal',
            direction: 'Bottom',
            length: 50
        }
    ],
    constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
}];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="undo">Undo</button>
        <button @click="redo">Redo</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
        }
    },
    methods: {
        undo: function () {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.undo();
        },
        redo: function () {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.redo();
        },
    },
});