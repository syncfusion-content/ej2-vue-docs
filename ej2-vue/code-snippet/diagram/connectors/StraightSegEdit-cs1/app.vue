<template>
<div id="app">
<button @click="editSegment">editSegment</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
id: "connector1",
constraints:
ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
// Defines the segment type of the connector
segments: [
      {
        type: 'Straight',
        // Defines the point of the segment
        point: {
          x: 100,
          y: 150,
        },
      },
    ],
type: 'Straight',
sourcePoint: { x: 150, y: 100 },
targetPoint: { x: 340, y: 200 },
}]
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
},

mounted: function () {
  const diagramInstance = this.$refs.diagram.ej2Instances;
  diagramInstance.select([diagramInstance.connectors[0]])
},
methods :{
  editSegment () {
    let diagramInstance = this.$refs.diagram.ej2Instances;
    let options = {};
    options.SegmentEditing = 'Toggle';
    options.point = { x: 220, y: 150 };
    options.connector = diagramInstance.connectors[0];
    options.hitPadding = diagramInstance.connectors[0].hitPadding;
    diagramInstance.editSegment(options);
  }
}, provide: {
  diagram: [ConnectorEditing]
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
