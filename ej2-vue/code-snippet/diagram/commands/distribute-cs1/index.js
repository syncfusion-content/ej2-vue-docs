
import Vue from 'vue';
import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 60,
        offsetX: 140,
        offsetY: 100,
        style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
        annotations: [{ content: 'Node1' }],
      },
      {
        id: 'node2',
        width: 100,
        height: 60,
        offsetX: 200,
        offsetY: 170,
        style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
        annotations: [{ content: 'Node2' }],
      },
      {
        id: 'node3',
        width: 100,
        height: 60,
        offsetX: 400,
        offsetY: 240,
        style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
        annotations: [{ content: 'Node3' }],
      }
];

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes
        }
    },
    mounted: function() {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        let selArray[] = [];
        selArray.push(diagramInstance.nodes[0], diagramInstance.nodes[1], diagramInstance.nodes[2]);
        //Selects the nodes
        diagramInstance.select(selArray);
        //Distributes space between the nodes
        diagramInstance.distribute('RightToLeft', diagramInstance.selectedItems.nodes);
    }

});