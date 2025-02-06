
import Vue from 'vue';
import { DiagramPlugin, FlipDirection } from '@syncfusion/ej2-vue-diagrams';
let diagramInstance;
Vue.use(DiagramPlugin);
let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
}]

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="flipHorizontal">flipHorizontal</button>
        <button @click="flipVertical">flipVertical</button>
        <button @click="flipBoth">flipBoth</button>
        <button @click="flipNone">flipNone</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
        }
    },
    methods: {

        flipHorizontal() {
            //Flips the node horizontally
            diagramInstance.nodes[0].flip ^= FlipDirection.Horizontal;
            diagramInstance.dataBind();
        },
        flipVertical() {
            //Flips the node vertically
            diagramInstance.nodes[0].flip ^= FlipDirection.Vertical;
            diagramInstance.dataBind();
        },
        flipBoth() {
            //Flips the node horizontally and vertically
            diagramInstance.nodes[0].flip ^= FlipDirection.Both;
            diagramInstance.dataBind();
        },
        flipNone() {
            //Flip for node is none
            diagramInstance.nodes[0].flip = FlipDirection.None;
            diagramInstance.dataBind();
        },
    },
    mounted: function () {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }

});