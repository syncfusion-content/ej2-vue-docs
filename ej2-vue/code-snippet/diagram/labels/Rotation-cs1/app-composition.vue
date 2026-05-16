<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the Annotation for the Node
    annotations: [{
        // Sets the text to be displayed
        content: 'Annotation',
        // Provide Select and Rotate Constraiants to Annotation
        constraints: AnnotationConstraints.Select | AnnotationConstraints.Rotate,
        //To disable rotation of Annotation
        rotationReference: 'Page'
    }]
}];

const width = "750px";
const height = "600px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
