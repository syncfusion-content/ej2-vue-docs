<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'node1',
  width: 100,
  height: 60,
  offsetX: 200,
  offsetY: 300,
  annotations: [
    { content: 'Drag or resize the node to activate autoscroll' },
  ],
}];

let connectors = [{
  id: 'con1',
  type: 'Bezier',
  segments: [{ type: 'Bezier', point: { x: 150, y: 100 } }],
  sourcePoint: { x: 100, y: 100 },
  targetPoint: { x: 300, y: 100 },
  annotations: [
    {
      content: 'Adjust control point or end point to autoScroll',
      alignment: 'After',
    },
  ],
  constraints:
    ConnectorConstraints.Default |
    ConnectorConstraints.DragSegmentThumb,
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            connectors: connectors,
            //Enables ruler to see the scroll offset
            rulerSettings: { showRulers: true },
            scrollSettings: {
                canAutoScroll: true,
                //Enable autoScroll
                scrollLimit: 'Infinity',
                //Defines the autoScroll border of all the sides of diagram
                autoScrollBorder: {
                    left: 100,
                    right: 100,
                    top: 100,
                    bottom: 100
                }
            },
        }
    },
    provide: {
      diagram: [ConnectorEditing]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
