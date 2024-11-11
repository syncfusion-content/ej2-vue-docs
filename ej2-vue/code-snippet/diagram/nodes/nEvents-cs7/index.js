
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 200,
    annotations: [
      {
        content: 'Node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];

new Vue({
  el: '#app',
  template: `
<div id="app">
<button @click="add">add</button>
<ejs-diagram
  id="diagram"
  ref="diagram"
  :width="width"
  :height="height"
  :collectionChange="collectionChange"
></ejs-diagram>
</div>
`,

  name: 'app',
  data() {
    return {
      width: "100%",
      height: "700px",
      collectionChange: (args) => {
        if (args.state === 'Changed') {
          alert('Collection changed');
        }
      },
    }
  },
  methods: {
    add() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      // Adds node to the diagram
      diagramInstance.add(nodes[0]);
    },
  },
});