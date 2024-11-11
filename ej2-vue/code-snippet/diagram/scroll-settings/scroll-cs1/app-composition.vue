<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const width = "750px";
const height = "500px";
const scrollSettings = {
    //To scroll the diagram infinitely
    scrollLimit: 'Infinity',
};
const rulerSettings = {
    showRulers: true
};
onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.scrollSettings.horizontalOffset = 100;
    diagramInstance.scrollSettings.verticalOffset = 100;
    diagramInstance.dataBind();
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
