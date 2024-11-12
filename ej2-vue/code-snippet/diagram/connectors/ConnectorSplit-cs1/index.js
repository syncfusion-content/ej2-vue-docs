
  import Vue from 'vue';
  import { DiagramPlugin,Diagram,DiagramConstraints,ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';
  Vue.use(DiagramPlugin);
let nodes = [
    { id: 'node1', offsetX: 150, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: 'node2', offsetX: 650, offsetY: 150, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'node3', offsetX: 490, offsetY: 290, width: 100, height: 100, annotations: [{ content: 'node3' }] }
];
let connectors  = [{
    id: 'connector1',sourceID:"node1",targetID:"node2",
    constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
    }];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' :nodes='nodes' :enableConnectorSplit='enableConnectorSplit'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "450px",
            nodes: nodes,
            connectors: connectors,
            enableConnectorSplit: true
        }
    }

});