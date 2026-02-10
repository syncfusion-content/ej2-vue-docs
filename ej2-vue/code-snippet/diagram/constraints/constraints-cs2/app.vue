<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';
let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    annotations: [{ content: 'Select disabled', alignment: 'After' }],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 250, y: 100 },
    targetPoint: { x: 350, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
    annotations: [{ content: 'Drag disabled', alignment: 'After' }],
  },
  {
    id: 'connector3',
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 500, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Source end disabled', alignment: 'After' }],
  },
  {
    id: 'connector4',
    sourcePoint: { x: 550, y: 100 },
    targetPoint: { x: 650, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Target end disabled', alignment: 'After' }],
  },
  {
    id: 'connector5',
    sourcePoint: { x: 700, y: 100 },
    targetPoint: { x: 800, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Delete,
    annotations: [{ content: 'Delete disabled', alignment: 'After' }],
  },
];

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '100%',
      height: '700px',
      connectors: connectors,
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
