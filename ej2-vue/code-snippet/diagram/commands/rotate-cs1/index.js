
import Vue from 'vue';
import { DiagramPlugin, } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;
let nodes = [{
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
    annotations: [{ content: 'Node 1' }],
},];

new Vue({
    el: '#app',
    template: `
<div id="app">
    <button @click="clock">Rotate ClockWise</button>
    <button @click="antiClock">Rotate AntiClockWise</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
    methods: {
        clock: function () {
            let node = diagramInstance.nodes[0];
            /**
             * paramter 1 - Rotate item
             * paramter 2 - angle to be rotated
             */
            diagramInstance.rotate(node, 45);
        },
        antiClock: function () {
            let node = diagramInstance.nodes[0];
            /**
             * paramter 1 - Rotate item
             * paramter 2 - angle to be rotated
             */
            diagramInstance.rotate(node, -45);
        }
    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }
});