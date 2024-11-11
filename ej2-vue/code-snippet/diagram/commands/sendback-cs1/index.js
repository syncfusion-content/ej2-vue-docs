
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [{
    id: "node1",
    width: 90,
    height: 70,
    offsetX: 120,
    offsetY: 100,
},
{
    id: "node2",
    width: 90,
    height: 70,
    offsetX: 150,
    offsetY: 120,
},
{
    id: "node3",
    width: 90,
    height: 70,
    offsetX: 170,
    offsetY: 150,
},
];

new Vue({
    el: '#app',
    template: `
<div id="app">
     <button @click="sendToBack">Send To Back</button>
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
        sendToBack: function () {
            diagramInstance.sendToBack();
        },
    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }

});