<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
  id: "connector1",
  // Define the type of the segment
  type: 'Orthogonal',
  segments: [
      {
          type: 'Orthogonal',
          direction: 'Bottom',
          length: 150,
        },
        {
          type: 'Orthogonal',
          direction: 'Right',
          length: 150,
        },
        {
          type: 'Orthogonal',
          direction: 'Top',
          length: 100,
        },
        {
          type: 'Orthogonal',
          direction: 'Left',
          length: 100,
        },
  ],
  sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 350,
      y: 150,
    },
   constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,

},]
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
data() {
    return {
        width: "100%",
        height: "350px",
        connectors: connectors
    }
}, provide: {
  diagram: [ConnectorEditing]
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
