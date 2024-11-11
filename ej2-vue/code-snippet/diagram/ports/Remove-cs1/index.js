
import Vue from 'vue';
import { DiagramPlugin, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports:[
        {
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
    ]
}];


new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="removePorts">Remove Ports</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagram.ej2Instances;
    },
    methods: {
        removePorts: function () {
            // Method to remove ports from a node at runtime
            // Parameters:
            // - node: The node to which the port will be removed from.
            // - port: The port collection to be removed from the node.
            diagramInstance.removePorts(diagramInstance.nodes[0], diagramInstance.nodes[0].ports);
        }
    }

});