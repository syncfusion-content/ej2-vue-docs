import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <ejs-diagram id="diagram" width="1000px" height="600px" :nodes="nodes" :connectors="connectors"></ejs-diagram>
    </div>
  `,
    data() {
        return {
            connectors: [
                {
                    id: "connector1",
                    type: "Orthogonal",
                    sourceID: "node1",
                    targetID: "node2",
                },
            ],
            nodes: [
                {
                    id: "node1",
                    height: 100,
                    width: 100,
                    offsetX: 100,
                    offsetY: 100,
                    annotations: [{ content: "Node1" }],
                },
                {
                    id: "node2",
                    height: 100,
                    width: 100,
                    offsetX: 300,
                    offsetY: 100,
                    annotations: [{ content: "Node2" }],
                },
                {
                    id: "group",
                    children: ["node1", "node2", "connector1"],
                    style: { strokeWidth: 0 },
                },
            ],
        };
    },
});

