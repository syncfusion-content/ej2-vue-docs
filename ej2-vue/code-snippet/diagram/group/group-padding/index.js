import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

const nodes = [
    {
        id: "node1",
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: "Node1" }],
    },
    {
        id: "node2",
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: "Node2" }],
    },
    {
        id: "node3",
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 300,
        annotations: [{ content: "Node3" }],
    },
    {
        id: "group",
        children: ["node1", "node2", "node3"],
        // Defines the space between the group node edges and its children
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
    },
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram ref="diagram" id="diagram" width="100%" height="600px" :nodes="nodes"></ejs-diagram>
    </div>
    `,
    data() {
        return {
            nodes: nodes,
        };
    },
    mounted() {
        // Access the diagram instance 
        const diagram = this.$refs.diagram.ej2Instances;
        // select the group node once the diagram is mounted
        diagram.select([diagram.getObject("group")]);
    },
});
