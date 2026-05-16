<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings'
            :layout='layout'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, RadialTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';

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

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "1000px",
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
            },
        }
    },
    provide: {
        diagram: [RadialTree, DataBinding]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
