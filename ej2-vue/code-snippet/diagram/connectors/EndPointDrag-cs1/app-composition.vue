<template>
<div id="app">
<button @click="sourcePoint">sourcePoint</button>
<button @click="targetPoint">targetPoint</button>
<button @click="dragSourceEnd">dragSourceEnd</button>
<button @click="dragTargetEnd">dragTargetEnd</button>
<ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
</div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const connectors = [{
    // Name of the connector
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
}
]

const width = "100%";
const height = "350px";
 const sourcePoint= function() {
    const diagramInstance = diagram.value.ej2Instances;
    let connector = diagramInstance.connectors[0];
    connector.sourcePoint = {x:300,y:100};
    diagramInstance.dataBind();
  }
  const targetPoint= function() {
    const diagramInstance = diagram.value.ej2Instances;
    let connector = diagramInstance.connectors[0];
    connector.targetPoint = {x:300,y:200};
    diagramInstance.dataBind();
  }
  const dragSourceEnd= function() {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.dragSourceEnd(diagramInstance.connectors[0], 50, 50);
}
 const dragTargetEnd= function() {
  const diagramInstance = diagram.value.ej2Instances;
  diagramInstance.dragTargetEnd(diagramInstance.connectors[0], 50, 50);
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>