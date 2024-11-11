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
        offsetY: 350,
        annotations: [{ content: "Node3" }],
    },
    {
        id: "node4",
        width: 100,
        height: 100,
        offsetX: 500,
        offsetY: 350,
        annotations: [{ content: "Node4" }],
    },
    {
        id: "group1",
        children: ["node1", "node2"],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: "green" },
    },
    {
        id: "group2",
        children: ["node3", "node4"],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: "skyblue" },
    },
    // Nested Group
    {
        id: "group3",
        children: ["group1", "group2"],
        padding: { left: 20, right: 20, top: 20, bottom: 20 },
        style: { fill: "yellow" },
    },
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :nodes="nodes"></ejs-diagram>
    </div>
    `,
    data() {
        return {
            nodes: nodes,
        }
    },
    mounted() {
        const diagramInstance = this.$refs.diagramRef.ej2Instances;
        diagramInstance.select([diagramInstance.getObject("group3")]);
    },
});
