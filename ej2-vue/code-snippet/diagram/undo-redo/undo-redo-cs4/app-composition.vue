<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :historyChange="historyChange">
        </ejs-diagram>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DiagramComponent as EjsDiagram, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Annotation'
    }],
}]
const diagram = ref(null);
const width = "750px";
const height = "350px";
const historyChange = (args) => {
    const diagramInstance = diagram.value.ej2Instances;;
    console.log(diagramInstance.historyManager.currentEntry);
};

provide('diagram', [UndoRedo]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
