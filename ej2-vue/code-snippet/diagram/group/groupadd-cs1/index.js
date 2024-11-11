import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);

const nodes = [
    {
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [{ content: 'rectangle1' }],
    },
    {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        annotations: [{ content: 'rectangle2' }],
    },
];

const group = {
    id: 'group2',
    children: ['rectangle1', 'rectangle2'],
};

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="350px" :nodes="nodes"></ejs-diagram>
    </div>
  `,
    data() {
        return {
            nodes: nodes,
        };
    },
    mounted() {
        const diagramInstance = this.$refs.diagramRef.ej2Instances;
        diagramInstance.selectAll();
        // Add the group into the diagram
        diagramInstance.add(group);
    },
});
