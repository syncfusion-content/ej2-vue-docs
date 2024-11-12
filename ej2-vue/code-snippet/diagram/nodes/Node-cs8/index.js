
import Vue from 'vue';
import { DiagramPlugin ,DiagramTools,BasicShapeModel,NodeModel} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
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
}]
new Vue({
el: '#app',
template: `
<div id="app">
    <button @click="clone">Clone</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: (obj) => {
        obj.borderWidth = 1;
        obj.style = {
            fill: '#6BA5D7',
            strokeWidth: 2,
            strokeColor: '#6BA5D7'
            };
        return obj;
        },
    }
},
methods: {
    clone() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      const selectedNode =
        diagramInstance.selectedItems.nodes.length > 0
          ? diagramInstance.selectedItems.nodes[0]
          : diagramInstance.nodes[0];
      diagramInstance.select([
        selectedNode]);
      diagramInstance.copy();
      diagramInstance.paste();
    },
  },
});