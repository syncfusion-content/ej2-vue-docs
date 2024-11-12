
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';

// Inject Diagram features into the Vue component
Diagram.Inject(HierarchicalTree, DataBinding);
Vue.use(DiagramPlugin);

//Initialize nodes
let nodes = [
    {
        id: 'Steve-Ceo',
    },
    {
        id: 'Kevin-Manager',
    },
    {
        id: 'Peter-Manager',
    },
    {
        id: 'John-Manager',
    },
    {
        id: 'Mary-CSE',
    },
    {
        id: 'Jim-CSE',
    },
    {
        id: 'Martin-CSE',
    },
];

//Initialize connectors
let connectors = [
    {
        id: 'Steve-Ceo_Kevin-Manager',
        sourceID: 'Steve-Ceo',
        targetID: 'Kevin-Manager',
    },
    {
        id: 'Steve-Ceo_Peter-Manager',
        sourceID: 'Steve-Ceo',
        targetID: 'Peter-Manager',
    },
    {
        id: 'Peter-Manager_John-Manager',
        sourceID: 'Peter-Manager',
        targetID: 'John-Manager',
    },
    {
        id: 'Peter-Manager_Mary-CSE',
        sourceID: 'Peter-Manager',
        targetID: 'Mary-CSE',
    },
    {
        id: 'Kevin-Manager_Jim-CSE',
        sourceID: 'Kevin-Manager',
        targetID: 'Jim-CSE',
    },
    {
        id: 'Kevin-Manager_Martin-CSE',
        sourceID: 'Kevin-Manager',
        targetID: 'Martin-CSE',
    },
];


// Create Vue instance
new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors"
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout="layout" >
            </ejs-diagram>
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
                type: 'HierarchicalTree',
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.id }];
                node.width = 100; node.height = 40;
                return node;
            },

            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }

        };
    },
});
