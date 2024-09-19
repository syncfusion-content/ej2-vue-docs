
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Diagram.Inject(ConnectorEditing);
let connectors = [{
    // Name of the connector
    id: "connector1",
    type:"Orthogonal",
    //set hit padding
    hitPadding:50,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 }
}, ]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            getConnectorDefaults: (connector) => {
                connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
                return connector;
            },
        }
    }

});