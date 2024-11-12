
import Vue from 'vue';
import { DiagramPlugin, PointPortModel, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [
    {
        id: "node1",
        offsetX: 450,
        offsetY: 200,
        width: 100,
        height: 100,
        ports: [
            {
                id: "port1",
                offset: {
                    x: 0,
                    y: 0,
                },
                visibility: PortVisibility.Visible,
            },
        ],
    },
    {
        id: "node2",
        offsetX: 270,
        offsetY: 300,
        width: 100,
        height: 100,
        ports: [
            {
                id: "port3",
                offset: { x: 0.5, y: 0.5 },
                visibility: PortVisibility.Visible,
                //Sets the connection direction as Left
                connectionDirection: "Left",
            },
        ],
    },
];
let connectors = [
    {
        id: "connector1",
        sourceID: "node2",
        targetID: "node1",
        type: "Orthogonal",
        sourcePortID: "port3",
        targetPortID: "port1",
    },
];
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="updateConnectionDirection">update ConnectionDirection</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors:connectors
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagram.ej2Instances;
    },
    methods: {
        updateConnectionDirection: function () {
            let port1 = diagramInstance.nodes[0].ports[0];
            port1.connectionDirection = "Top";
            diagramInstance.dataBind();
        }
    }

});