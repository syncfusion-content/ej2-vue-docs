<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :layout='layout'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, DataBinding, ComplexHierarchicalTree } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'node1',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node1'
    }]
},
{
    id: 'node2',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node2'
    }]
},
{
    id: 'node3',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node3'
    }]
},
{
    id: 'node4',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node4'
    }]
},
{
    id: 'node5',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node5'
    }]
},
{
    id: 'node8',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node8'
    }]
},
{
    id: 'node9',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node9'
    }]
}];

const connectors = [
    {
        id: 'connectr',
        sourceID: 'node1',
        targetID: 'node4'
    }, {
        id: 'connectr1',
        sourceID: 'node2',
        targetID: 'node4'
    }, {
        id: 'connectr3',
        sourceID: 'node3',
        targetID: 'node4'
    }, {
        id: 'connectr4',
        sourceID: 'node4',
        targetID: 'node5'
    }
];

const width = "100%";
const height = "590px";
const getNodeDefaults = (obj) => {
    obj.shape = {
        type: 'Text',
        style: {
            color: 'white'
        }
    };
    obj.style = {
        fill: '#6BA5D7',
        strokeColor: 'none',
        strokeWidth: 2
    };
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    (obj.shape).margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
    };
    return obj;
}
const getConnectorDefaults = (connector, diagram) => {
    connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.type = 'Orthogonal';
    return connector;
}
const layout = {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
    orientation: 'TopToBottom'
}
provide('diagram', [DataBinding, ComplexHierarchicalTree]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
