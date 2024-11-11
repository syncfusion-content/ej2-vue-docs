
    import Vue from 'vue';
    import { Diagram,DiagramPlugin,DiagramConstraints,ConnectorBridging } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorBridging);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Transaction',
        width: 150,
        height: 60,
        offsetX: 300,
        offsetY: 60,
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        },
        annotations: [{
            id: 'label1',
            content: 'Start Transaction',
            offset: {
                x: 0.5,
                y: 0.5
            }
        }],
    },
    {
        id: 'Verification',
        width: 150,
        height: 60,
        offsetX: 300,
        offsetY: 250,
        shape: {
            type: 'Flow',
            shape: 'Process'
        },
        annotations: [{
            id: 'label2',
            content: 'Verification',
            offset: {
                x: 0.5,
                y: 0.5
            }
        }]
    }
];
let connectors = [{
        id: 'connector1',
        type: 'Straight',
        sourceID: 'Transaction',
        targetID: 'Verification'
    }, {
        id: 'connector2',
        type: 'Straight',
        bridgeSpace: 20,
        sourcePoint: {
            x: 200,
            y: 130
        },
        targetPoint: {
            x: 400,
            y: 130
        }
    },
    {
        id: 'connector3',
        type: 'Straight',
        bridgeSpace: 20,
        sourcePoint: {
            x: 200,
            y: 170
        },
        targetPoint: {
            x: 400,
            y: 170
        }
    }
]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :constraints='constraints' :getNodeDefaults='getNodeDefaults' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            constraints: DiagramConstraints.Default | DiagramConstraints.Bridging,
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
    }

});