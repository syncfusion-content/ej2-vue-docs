
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [{
    id: "node1",
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: "Node1" }],
},
{
    id: "node2",
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: "Node2" }],
},
{
    id: "node3",
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: "Node3" }],
},
];

new Vue({
    el: '#app',
    template: `
<div id="app">
    <label>Ctrl + X</label><button @click="cut">Cut</button>
    <label>Ctrl + C</label><button @click="copy">Copy</button>
    <label>Ctrl + V</label><button @click="paste">Paste</button>
    <button @click="pasteObject">Paste Defined Object</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    },

    methods: {
        cut: function () {
            diagramInstance.cut();
        },
        copy: function () {
            diagramInstance.copy();
        },
        paste: function () {
            diagramInstance.paste();
        },
        pasteObject: function () {
            let nodes = [
                {
                    id: "n1",
                    offsetX: 400,
                    offsetY: 100,
                    width: 100,
                },
                {
                    id: "n2",
                    offsetX: 400,
                    offsetY: 200,
                    width: 100,
                },
            ];
            diagramInstance.paste(nodes);
        },

    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];

    }


});