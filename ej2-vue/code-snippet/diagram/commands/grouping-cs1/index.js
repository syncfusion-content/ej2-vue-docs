
import Vue from 'vue';
import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 70,
        offsetX: 100,
        offsetY: 100,
      },
      {
        id: 'node2',
        width: 100,
        height: 70,
        offsetX: 300,
        offsetY: 100,
      },
      {
        id: 'node3',
        width: 100,
        height: 70,
        offsetX: 200,
        offsetY: 200,
      },
      {
        id: 'group',
        children: ['node1', 'node2', 'node3', 'connector1'],
      },
];
let connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
  }]

new Vue({
el: '#app',
template: `
<div id="app">
     <label>Ctrl + G </label><button @click="group">Group</button>
     <label>Ctrl +Shift + U </label><button @click="unGroup">Un Group</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors
        }
    },
    methods: {
        group: function () {
            diagramInstance.group();
        },
        unGroup: function () {
            diagramInstance.unGroup();
        },

    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }
});