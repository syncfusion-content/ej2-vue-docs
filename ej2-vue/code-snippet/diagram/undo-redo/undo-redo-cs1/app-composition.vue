<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'
            :getNodeDefaults='getNodeDefaults'>
        </ejs-diagram>
    </div>
</template>
<script setup>
import { provide, onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const nodes = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}]

const width = "100%";
const height = "350px";
const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
}

onMounted(function () {
    const diagramInstance = diagram.value.ej2Instances;
    //Start to group the changes
    diagramInstance.startGroupAction();
    //Makes the changes
    let color = ['black', 'red', 'green', 'yellow']
    for (var i = 0; i < color.length; i++) {
        // Updates the fillColor for all the child elements.
        diagramInstance.nodes[0].style.fill = color[i];
        diagramInstance.dataBind();
    }
    //Ends grouping the changes
    diagramInstance.endGroupAction();
})

provide('diagram', [UndoRedo]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
