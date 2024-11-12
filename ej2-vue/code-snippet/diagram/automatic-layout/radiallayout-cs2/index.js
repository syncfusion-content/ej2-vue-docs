
import Vue from 'vue';
import { DiagramPlugin, Diagram, RadialTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(DataBinding, RadialTree);
Vue.use(DiagramPlugin);

//Initialize nodes for diagram
let nodes = [
    { id: 'Maria Anders' },
    { id: 'Ana Trujillo' },
    { id: 'Lino Rodri' },
    { id: 'Philip Cramer' },
    { id: 'Pedro Afonso' },
    { id: 'Paul Henriot' },
    { id: 'Laura Callahan' },
    { id: 'Anto Moreno' },
    { id: 'Elizabeth Roel' },
    { id: 'Aria Cruz' },
    { id: 'Eduardo Roel' },
    { id: 'Howard Snyd' },
    { id: 'Daniel Tonini' },
    { id: 'Nardo Batista' },
    { id: 'Michael Holz' },
    { id: 'Kloss Perrier' },
    { id: 'Liz Nixon' },
    { id: 'Paula Parente' },
    { id: 'Matti Kenna' },
];

//Initialize connectors for diagram
let connectors = [
    {
        id: 'Maria Anders-Ana Trujillo',
        sourceID: 'Maria Anders',
        targetID: 'Ana Trujillo',
    },
    {
        id: 'Maria Anders-Lino Rodri',
        sourceID: 'Maria Anders',
        targetID: 'Lino Rodri',
    },
    {
        id: 'Maria Anders-Philip Cramer',
        sourceID: 'Maria Anders',
        targetID: 'Philip Cramer',
    },
    {
        id: 'Maria Anders-Pedro Afonso',
        sourceID: 'Maria Anders',
        targetID: 'Pedro Afonso',
    },
    {
        id: 'Maria Anders-Paul Henriot',
        sourceID: 'Maria Anders',
        targetID: 'Paul Henriot',
    },
    {
        id: 'Maria Anders-Laura Callahan',
        sourceID: 'Maria Anders',
        targetID: 'Laura Callahan',
    },
    {
        id: 'Ana Trujillo-Anto Moreno',
        sourceID: 'Ana Trujillo',
        targetID: 'Anto Moreno',
    },
    {
        id: 'Ana Trujillo-Elizabeth Roel',
        sourceID: 'Ana Trujillo',
        targetID: 'Elizabeth Roel',
    },
    {
        id: 'Laura Callahan-Aria Cruz',
        sourceID: 'Laura Callahan',
        targetID: 'Aria Cruz',
    },
    {
        id: 'Laura Callahan-Eduardo Roel',
        sourceID: 'Laura Callahan',
        targetID: 'Eduardo Roel',
    },
    {
        id: 'Lino Rodri-Howard Snyd',
        sourceID: 'Lino Rodri',
        targetID: 'Howard Snyd',
    },
    {
        id: 'Lino Rodri-Daniel Tonini',
        sourceID: 'Lino Rodri',
        targetID: 'Daniel Tonini',
    },
    {
        id: 'Philip Cramer-Nardo Batista',
        sourceID: 'Philip Cramer',
        targetID: 'Nardo Batista',
    },
    {
        id: 'Philip Cramer-Michael Holz',
        sourceID: 'Philip Cramer',
        targetID: 'Michael Holz',
    },
    {
        id: 'Pedro Afonso-Kloss Perrier',
        sourceID: 'Pedro Afonso',
        targetID: 'Kloss Perrier',
    },
    {
        id: 'Pedro Afonso-Liz Nixon',
        sourceID: 'Pedro Afonso',
        targetID: 'Liz Nixon',
    },
    {
        id: 'Paul Henriot-Paula Parente',
        sourceID: 'Paul Henriot',
        targetID: 'Paula Parente',
    },
    {
        id: 'Paul Henriot-Matti Kenna',
        sourceID: 'Paul Henriot',
        targetID: 'Matti Kenna',
    }
];

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :nodes='nodes'
        :connectors='connectors' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :snapSettings='snapSettings' >
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
            snapSettings: { constraints: 0 },

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'RadialTree',
                root: 'parent'
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 20; node.height = 20;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Straight';
                connector.targetDecorator.shape = 'None';
                return connector;
            }
        };
    },
});
