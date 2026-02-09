
import Vue from 'vue';
import { DiagramPlugin, PortConstraints, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

const nodes = [
  {
    id: "node1",
    offsetX: 250,
    offsetY: 250,
    annotations: [
      { content: "draw port", offset: { x: 0, y: 0.7 } },
      { content: "drag port", offset: { x: 1, y: 0.7 } },
    ],
    width: 100,
    height: 100,
    ports: [
      {
        id: "p1",
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
      {
        id: "p2",
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Drag,
      },
    ],
  },
  ];

  const connectors = [
    {
      id: "connector1",
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 120 },
      type: "Orthogonal",
      annotations: [
        {
          content: "draw port",
          alignment: "After",
          displacement: { x: 0, y: 10 },
        },
        {
          content: "drag port",
          alignment: "After",
          offset: 0.7,
          displacement: { x: 0, y: 10 },
        },
      ],
      ports: [
        {
          id: "p1",
          offset: 0.5,
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Draw,
        },
        {
          id: "p2",
          offset: 0.8,
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Drag,
        },
      ],
    },
    ];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :click="click"
    :elementDraw="elementDraw"
    :positionChange="positionChange"
    :connectionChange="connectionChange"></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors:connectors,
            click: function () {
              console.log("Clicked");
            },
            elementDraw: function (args) {
              console.log('Element draw event');
            },
            positionChange: function (args) {
              console.log("Position change");
            },
            connectionChange: function (args) {
              console.log("Connection change");
            },

        }
    },



});