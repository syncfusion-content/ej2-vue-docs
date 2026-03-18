<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    id: "connector1",
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: "Straight",
    shape: {
        type: "UmlClassifier",
        relationship: "Association",
        //Define type of association
        association: "BiDirectional"
    }
},
{
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Association',
      associationType: 'BiDirectional',
    },
  }]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            connectors: connectors
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
