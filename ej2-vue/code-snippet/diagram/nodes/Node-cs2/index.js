
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white'
  },
  // Text(label) added to the node
}

new Vue({
  el: '#app',
  template: `
    <div id="app">
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
`,

  name: 'app',
  data() {
    return {
      width: "100%",
      height: "350px",
    }
  },
  methods: {

    add() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      // Adds node to the diagram
      diagramInstance.add(nodes);
    },
    remove() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      // remove node from the diagram
      diagramInstance.remove(
        diagramInstance.nodes[0]
      );
    },
  },
});