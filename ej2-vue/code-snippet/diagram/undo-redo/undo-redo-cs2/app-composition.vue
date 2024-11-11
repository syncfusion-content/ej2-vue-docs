<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref, onMounted, provide } from "vue";
import { DiagramComponent as EjsDiagram, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
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
}];

const width = "750px";
const height = "500px";

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    // canLog decide whether the entry add or not in history List
    diagramInstance.historyManager.canLog = function (entry) {
        entry.cancel = true;
        return entry;
    }
})

provide('diagram', [UndoRedo]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
