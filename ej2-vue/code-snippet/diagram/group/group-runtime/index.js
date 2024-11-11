import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <button @click="group">Group selected nodes</button>
      <ejs-diagram ref="diagram" id="diagram" width="100%" height="900px" :nodes="nodes"></ejs-diagram>
    </div>
  `,
    data() {
        return {
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
                    offsetX: 200,
                    offsetY: 200,
                    annotations: [{ content: "Node2" }],
                },
                {
                    id: "node3",
                    height: 100,
                    width: 100,
                    offsetX: 300,
                    offsetY: 300,
                    annotations: [{ content: "Node3" }],
                },
            ],
        };
    },
    mounted() {
        const diagram = this.$refs.diagram.ej2Instances;
        diagram.selectAll();
    },
    methods: {
        group() {
            const diagram = this.$refs.diagram.ej2Instances;
            diagram.group();
        },
    },
});
