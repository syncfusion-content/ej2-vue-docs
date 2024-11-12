
import Vue from 'vue';
import { DiagramPlugin, NodeModel } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    // Text(label) added to the node
  },
];
new Vue({
  el: '#app',
  template: `
 <div id="app">
    <button @click="size">Change Size</button>
    <button @click="color">Change Color</button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
`,

  name: 'app',
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes
    }
  },
  methods: {
    size() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      if (diagramInstance.nodes[0].width === 100) {
        diagramInstance.nodes[0].width = 200;
      } else {
        diagramInstance.nodes[0].width = 100;
      }
    },
    color() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      if (diagramInstance.nodes[0].style.fill === '#6BA5D7') {
        diagramInstance.nodes[0].style.fill = 'orange';
      } else {
        diagramInstance.nodes[0].style.fill = '#6BA5D7';
      }
    },
  },
});