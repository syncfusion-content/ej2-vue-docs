
import Vue from 'vue';
import { DiagramPlugin,Diagram} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Layer 1 Object' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{ content: 'Layer 2 Object' }],
  },
  ];

let connectors = [
    {
      id: 'connector1',
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 300,
      },
      targetPoint: {
        x: 200,
        y: 400,
      },
      annotations: [{ content: 'Layer 2 Object' }],
    },
];


new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram" ref="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :layers='layers' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "450px",
            nodes: nodes,
            connectors: connectors,
            layers: [
              {
                id: 'layer1',
                //Layer 1 visibility set as false.
                visible: false,
                objects: ['node1'],
              },
              {
                id: 'layer2',
                visible: true,
                objects: ['node2', 'connector1'],
              },
              ],
        }
    }

});