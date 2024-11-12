
import Vue from 'vue';
import { DiagramPlugin, PointPortModel, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [
    {
      id: "node1",
      offsetX: 250,
      offsetY: 250,
      width: 100,
      height: 100,
      ports: [
        {
          id: "port1",
          offset: { x: 0, y: 0.5 },
          visibility: PortVisibility.Visible,
        },
        {
          id: "port2",
          offset: { x: 0.5, y: 0 },
          visibility: PortVisibility.Visible,
        }
      ],
    },
    {
      id: "node2",
      offsetX: 250,
      offsetY: 400,
      width: 100,
      height: 100,
      ports: [
        {
          id: "port3",
          offset: { x: 0, y: 0.5},
          visibility: PortVisibility.Visible,
        },
        {
          id: "port4",
          offset: { x: 0.5, y: 1},
          visibility: PortVisibility.Visible,
        }
      ],
    },
  ];
  let connectors = [
    {
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Orthogonal',
        sourcePortID: 'port1',
        targetPortID: 'port3',
        annotations: [{ content: 'connector1' }],
      },
      {
        id: 'connector2',
        sourceID: 'node2',
        targetID: 'node1',
        type: 'Orthogonal',
        sourcePortID: 'port4',
        targetPortID: 'port2',
        annotations: [{ content: 'connector2' }],
      },
  ];
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="getInEdges">Get InEdges</button>
        <button @click="getOutEdges">Get OutEdges</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
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
    mounted: function () {
        diagramInstance = this.$refs.diagram.ej2Instances;
    },
    methods: {
        getInEdges: function () {
            let port1 = diagramInstance.nodes[0].ports[1];
            console.log(port1.inEdges[0]);
        },
        getOutEdges: function () {
            let port1 = diagramInstance.nodes[0].ports[0];
            console.log(port1.outEdges[0]);
        },

    }

});