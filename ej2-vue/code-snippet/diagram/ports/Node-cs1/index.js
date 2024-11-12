
import Vue from 'vue';
import { DiagramPlugin, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
}];

let port = [{
    id: 'port1',
    offset: {
        x: 0,
        y: 0.5
    },
    visibility: PortVisibility.Visible
},
{
    id: 'port2',
    offset: {
        x: 1,
        y: 0.5
    },
    visibility: PortVisibility.Visible
},
{
    id: 'port3',
    offset: {
        x: 0.5,
        y: 0
    },
    visibility: PortVisibility.Visible
},
{
    id: 'port4',
    offset: {
        x: 0.5,
        y: 1
    },
    visibility: PortVisibility.Visible
}
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="addPorts">Add Ports</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagram.ej2Instances;
    },
    methods: {
        addPorts: function () {
            // Method to add ports to a node at runtime
            // Parameters:
            // - node: The node to which the port will be added.
            // - port: The port collection to be added to the node.
            diagramInstance.addPorts(diagramInstance.nodes[0], port);
        }
    }

});