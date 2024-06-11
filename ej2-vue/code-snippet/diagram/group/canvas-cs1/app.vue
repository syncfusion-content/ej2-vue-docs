<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :setNodeTemplate='setNodeTemplate'
            :getNodeDefaults="getNodeDefaults"></ejs-diagram>
    </div>
</template>
<script>

import { DiagramComponent, NodeModel, StackPanel, TextElement } from '@syncfusion/ej2-vue-diagrams';

let count = 11;
function getTextElement(text) {
    let textElement = new TextElement();
    textElement.id = "text" + count;
    textElement.width = 50;
    textElement.height = 20;
    textElement.content = text;
    count++;
    return textElement;
}
function addRows(column) {
    column.children.push(getTextElement('Row1'));
    column.children.push(getTextElement('Row2'));
    column.children.push(getTextElement('Row3'));
    column.children.push(getTextElement('Row4'));
}
let nodes = [
    {
        id: 'node5',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        annotations: [{
            content: 'Custom Template',
            offset: {
                y: 1
            },
            verticalAlignment: 'Top'
        }]
    }
]
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            },
            setNodeTemplate: (obj, diagram) => {
                if (obj.id.indexOf('node5') !== -1) {
                    // It will be replaced with grid panel
                    let table = new StackPanel();
                    table.orientation = 'Horizontal';
                    table.padding.left
                    let column1 = new StackPanel();
                    column1.children = [];
                    column1.children.push(getTextElement('Column1'));
                    addRows(column1);
                    let column2 = new StackPanel();
                    column2.children = [];
                    column2.children.push(getTextElement('Column2'));
                    addRows(column2);
                    table.children = [column1, column2];
                    return table;
                }
                return null;
            },
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
