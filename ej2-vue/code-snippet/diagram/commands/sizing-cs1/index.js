
import Vue from 'vue';
import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [
    {
        id: "node1",
        width: 100,
        height: 80,
        offsetX: 140,
        offsetY: 100,
        annotations: [{ content: "Node1" }],
      },
      {
        id: "node2",
        width: 100,
        height: 60,
        offsetX: 140,
        offsetY: 200,
        annotations: [{ content: "Node2" }],
      },
      {
        id: "node3",
        width: 200,
        height: 30,
        offsetX: 140,
        offsetY: 300,
        annotations: [{ content: "Node3" }],
      },
];

new Vue({
el: '#app',
template: `
<div id="app">
        <label> Size Option :  </label>
        <select id="sizeChange" ref="sizeChange" v-on:change="sizeChangeFunction">
            <option value="Width">Width</option>
            <option value="Height">Height</option>
            <option value="Size">Size</option>
        </select>
    <ejs-diagram id="diagram"  ref='diagramObj'  :width='width' :height='height' :nodes='nodes'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,

 
            // Function to handle the export button click
            sizeChangeFunction: () => {
               
                let objects = diagramInstance.nodes;
                let size = this.$refs.sizeChange.value;
                diagramInstance.sameSize(size, objects);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});