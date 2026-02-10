<template>
  <div id="app">
    <ejs-diagram id="diagram" width="100%" height="500px" :nodes="nodes" :constraints="constraints"
      :snapSettings="snapSettings" />
  </div>
</template>

<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
import { NodeConstraints, SnapConstraints, DiagramConstraints } from '@syncfusion/ej2-diagrams';
const nodes = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
  },
];
export default {
  name: "App",
  components: { "ejs-diagram": DiagramComponent },
  data() {
    return {
      nodes: nodes,
      // Enable AutomaticPortCreation
      constraints: DiagramConstraints.Default | DiagramConstraints.AutomaticPortCreation,
      snapSettings: { constraints: SnapConstraints.None },
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
