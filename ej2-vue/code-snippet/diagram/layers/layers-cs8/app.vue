<template>
  <div id="app">
    <ejs-button v-on:click="cloneLayer">Clone Layer</ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :layers="layers"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";


let diagramInstance;
let nodes = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 130,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node3",
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 360,
    annotations: [{ content: "Layer 2 Object" }],
  },
];

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
    "ejs-button": ButtonComponent,
  },
  data() {
    return {
      width: "100%",
      height: "600px",
      nodes: nodes,
      layers: [
        {
          id: "layer1",
          objects: ["node1", "node2"],
        },
        {
          id: "layer2",
          objects: ["node3"],
        },
      ],
    };
  },
  mounted: function () {
   diagramInstance = this.$refs.diagram.ej2Instances;
},
  methods: {
    cloneLayer: function () {
      /**
       * To Clone the layer
       * Parameter 1 - A string representing the name of the layer to be cloned.
       */
      diagramInstance.cloneLayer('layer1');
    }
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
