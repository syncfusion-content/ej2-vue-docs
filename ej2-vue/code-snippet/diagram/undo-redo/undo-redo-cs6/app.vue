<template>
    <div id="app">
        <ejs-button ref="undo" disabled='true' id="undo" >Undo</ejs-button>
        <ejs-button ref="redo" disabled='true' id="redo" >Redo</ejs-button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :historyChange="keyDown"></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, UndoRedo } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent,  } from '@syncfusion/ej2-vue-buttons';

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

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent,
        'ejs-button': ButtonComponent,
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            keyDown: (args) => {
                const diagramInstance = this.$refs.diagram.ej2Instances;
                undo.disabled = !diagramInstance.historyManager.canUndo;
                redo.disabled = !diagramInstance.historyManager.canRedo;
              },
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        const undo = this.$refs.undo.ej2Instances;
        const redo = this.$refs.redo.ej2Instances;
        undo.element.onclick = () => {
            diagramInstance.undo();
        }
        redo.element.onclick = () => {
            diagramInstance.redo();
        }
    },
    provide: {
        diagram: [UndoRedo]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
