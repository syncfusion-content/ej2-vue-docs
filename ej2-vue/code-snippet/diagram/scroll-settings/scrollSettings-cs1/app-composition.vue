<template>
    <div id="app">
        <ejs-button ref="updateScrollSettings" id="updateScrollSettings" >Update Scroll Settings</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const diagram = ref(null);
const updateScrollSettings = ref(null);
const width = "750px";
const height = "350px";
const rulerSettings = { showRulers: true };
const scrollSettings = { scrollLimit: 'Infinity' };

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    const updateScrollSettingsInstance = updateScrollSettings.value.ej2Instances;
    updateScrollSettingsInstance.element.onclick = () => {
        diagramInstance.scrollSettings.horizontalOffset = 200;
        diagramInstance.scrollSettings.verticalOffset = 200
        diagramInstance.dataBind();
    }
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
