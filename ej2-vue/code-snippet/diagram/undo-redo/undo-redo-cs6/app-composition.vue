<template>
    <div id="app">
        <ejs-button ref="undo" disabled='true' id="undo" >Undo</ejs-button>
        <ejs-button ref="redo" disabled='true' id="redo" >Redo</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :historyChange="keyDown"></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, UndoRedo } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{
        content: 'Node'
    }]
}];
const diagram = ref(null);
const width = "100%";
const height = "350px";
const keyDown = (args) => {
    const diagramInstance = diagram.value.ej2Instances;;
    undo.disabled = !diagramInstance.historyManager.canUndo;
    redo.disabled = !diagramInstance.historyManager.canRedo;
};

onMounted(function () {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    const undo = this.$refs.undo.ej2Instances;
    const redo = this.$refs.redo.ej2Instances;
    undo.element.onclick = () => {
        diagramInstance.undo();
    }
    redo.element.onclick = () => {
        diagramInstance.redo();
    }
})

provide('diagram', [UndoRedo]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
