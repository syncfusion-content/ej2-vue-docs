<template>
  <div id="app">
    <ejs-diagram id="diagram" width="100%" height="500px" :nodes="nodes" />
  </div>
</template>

<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: { "ejs-diagram": DiagramComponent },
  data() {
    return {
      nodes: [
        {
          id: 'node1',
          margin: { left: 50, top: 30 },
          width: 100, height: 100,
          style: { fill: '#357BD2', strokeColor: 'white' },
          annotations: [{ content: 'Node 1', style: { color: 'white', fontFamily: 'Arial' } }],
        },
        {
          id: 'node2',
          margin: { left: 200, top: 130 },
          width: 100, height: 100,
          style: { fill: '#357BD2', strokeColor: 'white' },
          annotations: [{ content: 'Node 2', style: { color: 'white', fontFamily: 'Arial' } }],
        },
        // Container Node
        {
          id: 'container',
          // Container Size
          width: 350, height: 300,
          // Container Position
          offsetX: 250, offsetY: 250,
          // Define Shape
          shape: {
            // Set type as Container
            type: 'Container',
            // Define header for container
            header: {
              annotation: {
                content: 'Container Title',
                // Style of container title text
                style: { fontSize: 18, bold: true, color: 'white' },
              },
              // Height of container header
              height: 40,
              // Style of container header
              style: { fill: '#3c63ac', strokeColor: '#30518f' },
            },
            // children of container
            children: ['node1', 'node2'],
          },
          // style of container
          style: { fill: 'white', strokeColor: '#30518f', strokeDashArray: '4 4' },
        },
      ]
    };
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
