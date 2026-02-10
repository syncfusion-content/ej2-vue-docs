<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :pageSettings='pageSettings'></ejs-diagram>
    </div>
</template>
<script setup>

import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const width = "750px";
const height = "500px";
const pageSettings = {
    orientation: 'Landscape',
    showPageBreaks: true,
    // Defines the background Image source
    background: {
        source: 'https://www.w3schools.com/images/w3schools_green.jpg',
        // Defines the scale values for the background image
        scale: 'Slice',
        // Defines the align values for the background image
        align: 'XMinYMin'
    },
    width: 300,
    height: 300,
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
