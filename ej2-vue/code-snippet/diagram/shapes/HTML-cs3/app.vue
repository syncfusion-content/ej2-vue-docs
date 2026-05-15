<template>
  <div id="app">
    <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes="nodes"
      :nodeTemplate="nodeTemplate"></ejs-diagram>
  </div>
</template>

<script>
import { createApp } from "vue";
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

let itemVue = createApp({}).component("nodeTemplate", {
  template: `<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div> `,
  data() {
    return {};
  }
});

let nodes = [
  {
    //Id of the node
    id: "Node",
    //Position of the node
    offsetX: 250,
    offsetY: 250,
    //Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
      type: "HTML",
    },
  },
];

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
      nodeTemplate: function () {
        return { template: itemVue };
      },
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
