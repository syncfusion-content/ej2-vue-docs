<template>
    <div id="app">
        <button @click="addChild">Add Child to Group</button>
        <button @click="removeChild">Remove Child from Group</button>
        <ejs-diagram ref="diagramRef" id="diagram" :width="'100%'" :height="'600px'" :nodes="nodes" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const nodes = ref([
    { id: "node1", width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: "Node1" }] },
    { id: "node2", width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: "Node2" }] },
    { id: "group1", children: ["node1", "node2"] },
    { id: "node3", width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: "Node3" }] },
]);

const diagramRef = ref(null);
let diagramInstance = null;

onMounted(() => {
    diagramInstance = diagramRef.value.ej2Instances;
    diagramInstance.select([diagramInstance.getObject('group1')]);
});

const addChild = () => {
    // Adds the specified diagram object to the specified group node.
    /**
      * parameter 1 - The group node to which the diagram object will be added.
      * parameter 2 - The diagram object to be added to the group.
      */
    diagramInstance.addChildToGroup(diagramInstance.getObject("group1"), "node3");
};

const removeChild = () => {
    // Removes the specified diagram object from the specified group node.
    /**
      * parameter 1 - The group node from which the diagram object will be removed.
      * parameter 2 - The diagram object to be removed from the group.
      */
    diagramInstance.removeChildFromGroup(diagramInstance.getObject("group1"), "node3");
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>