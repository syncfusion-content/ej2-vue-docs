<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' ></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const width = "100%";
const height = "700px";


onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    //JSON to create a polyline
    let connector = { id: 'connector1', type: 'Polyline' };
    diagramInstance.drawingObject = connector;
    //To draw an object once, activate draw once
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.dataBind();
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
