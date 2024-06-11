<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :contextMenuSettings='contextMenuSettings' :contextMenuOpen="contextMenuOpen"
            :contextMenuClick="contextMenuClick"></ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramContextMenu } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
}
];
const connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }
}]

const width = "100%";
const height = "350px";
const contextMenuSettings = {
    //Enables the context menu
    show: true,
    items: [{
        text: 'delete',
        id: 'delete',
    }],
    // Hides the default context menu items
    showCustomMenuOnly: false,
};
const contextMenuOpen = (args) => {
    var diagram = diagram.value.ej2Instances;
    //do your custom action here.
    for (let item of args.items) {
        if (item.text === 'delete') {
            if (!diagram.selectedItems.nodes.length && !diagram.selectedItems.connectors.length) {
                args.hiddenItems.push(item.id);
            }
        }
    }
}
const contextMenuClick = (args) => {
    var diagram = diagram.value.ej2Instances;
    //do your custom action here.
    if (args.item.id === 'delete') {
        if ((diagram.selectedItems.nodes.length + diagram.selectedItems.connectors.length) > 0) {
            diagram.cut();
        }
    }
}

provide('diagram', [DiagramContextMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
