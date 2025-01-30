<template>
  <div id="app">
    <ejs-diagram ref="diagram" id="diagram" width="100%" height="600px" :nodes="nodes" />
  </div>
</template>

<script>
import { DiagramComponent, FlipDirection } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      nodes: [
        {
          id: 'node1',
          width: 70,
          height: 70,
          offsetX: 100,
          offsetY: 100,
          //Sets the flip mode as LabelText
          flipMode: 'LabelText',
          annotations: [{ content: 'Node1', offset: { x: 0, y: 0.8 } }],
          shape: {
            type: 'Basic',
            shape: 'RightTriangle',
          },
          style: {
            fill: '#6BA5D7',
          },
        },
        {
          id: 'node2',
          width: 70,
          height: 70,
          offsetX: 180,
          offsetY: 180,
          shape: {
            type: 'Basic',
            shape: 'RightTriangle',
          },
          style: {
            fill: '#6BA5D7',
          },

        },
        {
          id: 'group',
          children: ['node1', 'node2',],
          padding: { left: 20, right: 20, top: 20, bottom: 20 },
          annotations: [{ content: 'Group', offset: { x: 0, y: 0.8 } }],
          //Sets the flip as Horizontal
          flip: FlipDirection.Horizontal,
          //Sets the flip mode as Label
          flipMode: 'Label',
        }
      ],
    };
  },
  mounted() {
    const diagram = this.$refs.diagram.ej2Instances;
    diagram.select([diagram.getObject("group")]);
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
