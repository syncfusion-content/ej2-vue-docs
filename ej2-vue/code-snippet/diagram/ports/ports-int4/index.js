
import Vue from 'vue';
import { DiagramPlugin, PortConstraints, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ content: 'Hover over port to see tooltip' }],
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        tooltip: { content: 'node port tooltip' },
        constraints:
          PortConstraints.Default |
          PortConstraints.ToolTip,
          
      },
    ],
  },
];

let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints:
          PortConstraints.Default | PortConstraints.ToolTip,
          tooltip: { content: 'connector port tooltip' },
      },
    ],
  },
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors:connectors
        }
    },



});