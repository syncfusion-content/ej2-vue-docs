import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let connectors = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
  }, {
    id: 'connector2',
    type: 'Straight',
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 400,
      y: 200,
    },
  },
]
new Vue({
  el: '#app',
  template: `
    <div id="app">
       <button @click="add">add</button>
<button @click="remove">remove</button>
    <ejs-diagram ref="diagram" :width='width' :height='height' :connectors='connectors' :collectionChange='collectionChange'></ejs-diagram>
    </div>
`,

  name: 'app',
  data() {
    return {
      width: "100%",
      height: "350px",
      connectors: connectors,
      collectionChange: (args) => {
        console.log('collectionChange');
      },
    }
  },
  methods: {
    add() {
      let connector = {
        type: 'Straight',
        sourcePoint: {
          x: 50,
          y: 200,
        },
        targetPoint: {
          x: 150,
          y: 300,
        },
      };
      this.$refs.diagram.ej2Instances.add(connector);
    },
    remove() {
      // remove connector from the diagram
      const diagramInstance = this.$refs.diagram.ej2Instances;
      let connector =
        diagramInstance.selectedItems.connectors.length > 0
          ? diagramInstance.selectedItems.connectors[0]
          : diagramInstance.connectors[0];
      diagramInstance.remove(connector);
    },

  },

});