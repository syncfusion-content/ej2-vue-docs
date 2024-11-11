
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [{
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
},];

new Vue({
    el: '#app',
    template: `
<div id="app">
     <button @click="right">Right</button>
     <button @click="left">Left</button>
     <button @click="up">Up</button>
     <button @click="down">Down</button>
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
        right: function () {
            diagramInstance.nudge('Right');
        },
        left: function () {
            diagramInstance.nudge('Left');
        },
        up: function () {
            diagramInstance.nudge('Up');
        },
        down: function () {
            diagramInstance.nudge('Down');
        }
    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }
});