<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems='selectedItems' @onUserHandleMouseDown="onUserHandleMouseDown"></ejs-diagram>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    height: 100,
    width: 100,
}]
const handles = [{
    name: 'clone',
    pathData:
        'M0,3.42 L1.36,3.42 L1.36,12.39 L9.62,12.39 L9.62,13.75 L1.36,13.75 C0.97,13.75,0.65,13.62,0.39,13.36 C0.13,13.1,0,12.78,0,12.39 Z M4.13,0 L12.39,0 C12.78,0,13.1,0.13,13.36,0.39 C13.62,0.65,13.75,0.97,13.75,1.36 L13.75,9.62 C13.75,10.01,13.62,10.33,13.36,10.6 C13.1,10.87,12.78,11.01,12.39,11.01 L4.13,11.01 C3.72,11.01,3.39,10.87,3.13,10.6 C2.87,10.33,2.74,10.01,2.74,9.62 L2.74,1.36 C2.74,0.97,2.87,0.65,3.13,0.39 C3.39,0.13,3.72,0,4.13,0 Z ',
    offset: 1,
    //Sets tooltip for user handle
    tooltip: { content: 'Clone Node' },
}];

const width = "100%";
const height = "350px";
//Define user handles in selectedItems property
const selectedItems = {
   userHandles: handles
};

const onUserHandleMouseDown = (event) => {
    const diagramInstance = diagram.value.ej2Instances;
    if (event && event.element) {
      //To clone the selected node  
      diagramInstance.copy();
      diagramInstance.paste();
    }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
