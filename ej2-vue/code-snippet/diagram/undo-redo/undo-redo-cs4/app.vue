<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :historyChange="historyChange">
        </ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Annotation'
    }],
}]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
            historyChange: (args) => {
            const diagramInstance = this.$refs.diagram.ej2Instances;
            console.log(diagramInstance.historyManager.currentEntry);
            },
        }
    },
    provide: {
        diagram: [UndoRedo]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
