
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: "node1",
        offsetY: 50,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [{
            content: "Start"
        }]
    },
    {
        id: "node2",
        offsetY: 140,
        shape: { type: "Flow", shape: "Process" },
        annotations: [{
            content: "var i = 0;"
        }]
    },
    {
        id: "node3",
        offsetY: 230,
        shape: { type: "Flow", shape: "Decision" },
        annotations: [{
            content: "i < 10?"
        }]
    },
];
function getNodeDefaults(node) {
    node.height = 50;
    node.width = 140;
    node.style = { fill: "skyblue", strokeColor: "skyblue" };
    node.offsetX = 300;
    return node;
}
new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: getNodeDefaults
        }
    }

});