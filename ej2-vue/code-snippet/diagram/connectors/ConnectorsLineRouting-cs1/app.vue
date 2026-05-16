<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :constraints='constraints' :nodes='nodes'
      :connectors='connectors' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
  </div>
</template>

<script>
import { DiagramComponent, LineRouting, Diagram, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 300, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 }
];
let connectors = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal' }
];
function getNodeDefaults(obj) {
  obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
  return obj;
}
let constraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      connectors: connectors,
      nodes: nodes,
      constraints: constraints,
      getNodeDefaults: (obj) => {
        obj = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } };
        return obj;
      },
    }
  },
  provide: {
    diagram: [LineRouting]
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
