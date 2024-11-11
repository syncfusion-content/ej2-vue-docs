
import Vue from 'vue';
import { DiagramPlugin, Diagram, ComplexHierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(DataBinding, ComplexHierarchicalTree);
Vue.use(DiagramPlugin);

let nodes = [
    { id: 'node1' },
    { id: 'node2' },
    { id: 'node3' },
    { id: 'node4' },
    { id: 'node5' },
    { id: 'node6' },
    { id: 'node7' },
];

let connectors = [
    { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
    { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
    { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
    { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
    { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
    { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
];
new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' ></ejs-diagram>
</div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            connectors: connectors,
            
            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'ComplexHierarchicalTree',
                orientation: 'TopToBottom',
                horizontalAlignment: 'Center',
                verticalAlignment: 'Top',
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 70;
                node.height = 70;
                node.annotations = [{ content: node.id }];
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    }

});