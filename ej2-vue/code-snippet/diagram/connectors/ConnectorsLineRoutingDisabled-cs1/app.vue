<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :constraints='constraints' :nodes='nodes'
      :connectors='connectors' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, LineRouting, DiagramConstraints, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 350, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 },
  { id: 'shape4', offsetX: 300, offsetY: 200, width: 120, height: 50 }
];
let connectors = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal', annotations: [{ offset: .7, content: ' Routing \n enabled', style: { fill: "white" } }] },
  { id: 'connector2', sourceID: 'shape1', targetID: 'shape2', annotations: [{ offset: .6, content: ' Routing \n disabled', style: { fill: "white" } }], type: 'Orthogonal', constraints: ConnectorConstraints.Default & ~ConnectorConstraints.InheritLineRouting }
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>
