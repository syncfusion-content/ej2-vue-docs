
import Vue from 'vue';
import { DiagramPlugin, Diagram } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [
  {
    id: "node1",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node2",
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 130,
    annotations: [{ content: "Layer 1 Object" }],
  },
  {
    id: "node3",
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 360,
    annotations: [{ content: "Layer 2 Object" }],
  },
];

new Vue({
  el: '#app',
  template: `
<div id="app">
    <button @click='cloneLayer'>Clone Layer</button>
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
          id: "layer1",
          objects: ["node1", "node2"],
        },
        {
          id: "layer2",
          objects: ["node3"],
        },
      ],
    }
  },
  mounted: function () {
    diagramInstance = this.$refs.diagram.ej2Instances;
},
  methods: {
    cloneLayer: function() {
      /**
       * To Clone the layer
       * Parameter 1 - A string representing the name of the layer to be cloned.
       */
      diagramInstance.cloneLayer('layer1');
    },


  }
});