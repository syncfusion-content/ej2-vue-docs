
import Vue from 'vue';
import { DiagramPlugin, Diagram } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [
  // Layer 1 Nodes
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
    offsetX: 100,
    offsetY: 300,
    annotations: [{ content: 'Layer 1 Object' }],
  },

  // Layer 2 Nodes

  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 300,
    annotations: [{ content: 'Layer 2 Object' }],
  },
];

new Vue({
  el: '#app',
  template: `
<div id="app">
    <button @click='moveObjects'>Move Objects</button>
    <ejs-diagram id="diagram" ref="diagram"  :width='width' :height='height' :nodes='nodes' :layers='layers' ></ejs-diagram>

</div>
`,

  name: 'app',
    data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
      layers: [
        {
          id: 'layer1',
          //Layer 1 objects
          objects: ['node1', 'node2'],
        },
        {
          id: 'layer2',
          //Layer 2 objects
          objects: ['node3'],
        },
      ],
    }
  },
  mounted: function () {
    diagramInstance = this.$refs.diagram.ej2Instances;
},
  methods: {
    moveObjects: function () {
      /**
       * Move objects from one layer to another layern
       * Parameter 1 - An array of object IDs represented as strings to be moved
       * parameter 2 -  The ID of the target layer to which the objects should be moved.
       */
      diagramInstance.moveObjects(['node1'], 'layer2');
    }
  }

});