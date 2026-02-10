<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :connectors="connectors"
      :segmentChange="segmentChange"
    ></ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent,
  ConnectorEditing,
  ConnectorConstraints,
} from "@syncfusion/ej2-vue-diagrams";

const connectors = [
  {
    id: "connector1",
    type: "Straight",
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
    segments: [
      {
        type: "Straight",
        point: {
          x: 170,
          y: 150,
        },
      },
    ],
  },
];
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      connectors: connectors,
      segmentChange: (args) => {
        console.log("segmentChange");
      },
    };
  },
  provide: {
    diagram: [ConnectorEditing],
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
