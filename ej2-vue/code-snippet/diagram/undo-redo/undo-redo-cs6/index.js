
import Vue from 'vue';
import { DiagramPlugin, UndoRedo ,Diagram } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(UndoRedo);
Vue.use(DiagramPlugin);
let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{
        content: 'Node'
    }]
}];

new Vue({
el: '#app',
template: `
<div id="app">
    <button @click="undo" id="undo" disabled='true'>Undo</button>
    <button @click="redo" id="redo" disabled='true'>Redo</button>
    <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes' :historyChange="historyChange"></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            historyChange: (args) => {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                let undoObj = document.getElementById("undo");
                let redoObj = document.getElementById("redo");
                diagramInstance = diagramObj.ej2_instances[0];
                undoObj.disabled = !diagramInstance.historyManager.canUndo;
                redoObj.disabled = !diagramInstance.historyManager.canRedo;
            },
        }
    },
    methods: {
        undo: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.undo();
        },
        redo: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.redo();
        }
    },

});