
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: "node1",
        offsetY: 50,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [
        {
            content: "Start"
        }
        ]
    },
    {
        id: "node2",
        offsetY: 140,
        shape: { type: "Flow", shape: "Process" },
        annotations: [
        {
            content: "var i = 0;"
        }
        ]
    },
    {
        id: "node3",
        offsetY: 230,
        shape: { type: "Flow", shape: "Decision" },
        annotations: [
        {
            content: "i < 10?"
        }
        ]
    },
    {
        id: "node4",
        offsetY: 320,
        shape: { type: "Flow", shape: "PreDefinedProcess" },
        annotations: [
        {
            content: 'print("Hello!!");',
            style: { fill: "white" }
        }
        ]
    },
    {
        id: "node5",
        offsetY: 410,
        shape: { type: "Flow", shape: "Process" },
        annotations: [
        {
            content: "i++;"
        }
        ]
    },
    {
        id: "node6",
        offsetY: 500,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [
        {
            content: "End"
        }
        ]
    }
];
let connectors = [
    {
        id: "connector1",
        sourceID: "node1",
        targetID: "node2"
    },
    {
        id: "connector2",
        sourceID: "node2",
        targetID: "node3"
    },
    {
        id: "connector3",
        sourceID: "node3",
        targetID: "node4",
        annotations: [{ text: "Yes" }]
    },
    {
        id: "connector4",
        sourceID: "node3",
        targetID: "node6",
        labels: [{ text: "No" }],
        segments: [
        { length: 30, direction: "Right" },
        { length: 300, direction: "Bottom" }
        ]
    },
    {
        id: "connector5",
        sourceID: "node4",
        targetID: "node5"
    },
    {
        id: "connector6",
        sourceID: "node5",
        targetID: "node3",
        segments: [
        { length: 30, direction: "Left" },
        { length: 200, direction: "Top" }
        ]
    }
];

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' ></ejs-diagram>
</div>
`,

    name: 'app',
    data () {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors: connectors,
            getNodeDefaults: (node) => {
                node.height = 60;
                node.width = 100;
                node.offsetX = 300;
                return node;
            },
            getConnectorDefaults: (obj) => {
                obj.type = 'Orthogonal';
                return obj;
            },
        }
    }

});