<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
  sourcePoint: { x: 200, y: 100 },
  targetPoint: { x: 500, y: 300 },
  type: 'Orthogonal',
  annotations: [
    {
      content: 'annotation',
      offset: 0.2,
      //Segment angle
      segmentAngle: true,
    },
  ],
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            connectors: connectors
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
