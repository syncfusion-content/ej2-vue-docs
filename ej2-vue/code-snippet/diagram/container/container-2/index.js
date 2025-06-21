import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

const nodes = [
    {
        id: 'node1',
        margin: { left: 50, top: 30 },
        width: 100, height: 100,
        style: { fill: '#357BD2', strokeColor: 'white' },
        annotations: [{ content: 'Node 1', style: { color: 'white', fontFamily: 'Arial' } }],
    },
    {
        id: 'node2',
        margin: { left: 200, top: 130 },
        width: 100, height: 100,
        style: { fill: '#357BD2', strokeColor: 'white' },
        annotations: [{ content: 'Node 2', style: { color: 'white', fontFamily: 'Arial' } }],
    },
    // Container Node
    {
        id: 'container',
        // Container Size
        width: 350, height: 300,
        // Container Position
        offsetX: 250, offsetY: 250,
        // Define Shape
        shape: {
            // Set type as Container
            type: 'Container',
            // Define header for container
            header: {
                annotation: {
                    content: 'Container Title',
                    // Style of container title text
                    style: { fontSize: 18, bold: true, color: 'white' },
                },
                // Height of container header
                height: 40,
                // Style of container header
                style: { fill: '#3c63ac', strokeColor: '#30518f' },
            },
            // children of container
            children: ['node1', 'node2'],
        },
        // style of container
        style: { fill: 'white', strokeColor: '#30518f', strokeDashArray: '4 4' },
    },
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" width="100%" height="500px" :nodes="nodes"></ejs-diagram>
    </div>
    `,
    data() {
        return {
            nodes: nodes,
        }
    },
});
