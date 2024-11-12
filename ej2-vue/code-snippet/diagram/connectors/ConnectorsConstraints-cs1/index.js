
    import Vue from 'vue';
    import { DiagramPlugin,ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

    Vue.use(DiagramPlugin);

let connectors =[{
    id: 'connector1',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    annotations: [{ content: 'Connector Selection disabled' }],
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 100,
    },
    targetPoint: {
        x: 200,
        y: 200,
    },
}, {
    id: 'connector2',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
    annotations: [{ content: 'Connector Drag disabled' }],
    type: 'Straight',
    sourcePoint: {
        x: 300,
        y: 100,
    },
    targetPoint: {
        x: 400,
        y: 200,
    },
}, {
    id: 'connector3',
    constraints:
        ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Connector Source end disabled' }],
    type: 'Straight',
    sourcePoint: {
        x: 500,
        y: 100,
    },
    targetPoint: {
        x: 600,
        y: 200,
    },
}, {
    id: 'connector4',
    constraints:
        ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Connector Target end disabled' }],
    type: 'Straight',
    sourcePoint: {
        x: 700,
        y: 100,
    },
    targetPoint: {
        x: 800,
        y: 200,
    },
},
]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
        }
    }

});