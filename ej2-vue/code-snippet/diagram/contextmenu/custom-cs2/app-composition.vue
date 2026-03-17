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
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
    }]
}
];
const connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
}]

const width = "100%";
const height = "350px";
const contextMenuSettings = {
    show: true,
    items: [
        {
        text: "Change fill",
        id: "applyFill",
        target: ".e-diagramcontent",
        iconCss: "e-icons e-paint-bucket",
        },
        {
        text: "Change stroke",
        id: "applyStroke",
        target: ".e-diagramcontent",
        iconCss: "e-icons e-edit",
        },
        {
        text: "Select All",
        id: "selectAll",
        target: ".e-diagramcontent",
        },
    ],
    showCustomMenuOnly: true,
};
const contextMenuOpen = (args) => {
    var diagram = diagram.value.ej2Instances;
    let hiddenItems = [];
    let selectedNode = diagram.selectedItems.nodes[0];
    let selectedConnector = diagram.selectedItems.connectors[0];
    if (selectedNode || selectedConnector) {
        hiddenItems.push("selectAll");
    } else {
        hiddenItems = ["applyFill", "applyStroke"];
    }
    args.hiddenItems = hiddenItems;
}
const contextMenuClick = (args) => {
    var diagram = diagram.value.ej2Instances;
    let selectedNode = diagram.selectedItems.nodes[0];
    let selectedConnector = diagram.selectedItems.connectors[0];
    if (selectedNode || selectedConnector) {
        if (selectedNode) {
        if (args.item.id === "applyFill") {
            selectedNode.style.fill =
            selectedNode.style.fill === "#6BA5D7" ? "green" : "#6BA5D7";
        } else if (args.item.id === "applyStroke") {
            selectedNode.style.strokeColor =
            selectedNode.style.strokeColor === "black" ? "yellow" : "black";
        }
        }
        if (selectedConnector) {
        if (args.item.id === "applyFill") {
            selectedConnector.targetDecorator.style.fill =
            selectedConnector.targetDecorator.style.fill === "yellow"? "black": "yellow";
        }
        selectedConnector.style.strokeColor = selectedConnector.style.strokeColor === "black"? "yellow": "black";
        }
    } else {
        diagram.selectAll();
    }
}

provide('diagram', [DiagramContextMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/fabric.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
</style>
