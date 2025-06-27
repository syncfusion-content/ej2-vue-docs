<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :snapSettings='snapSettings' />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';

// Define the model for the UML Sequence Diagram
const model = {
  // Define the participants involved in the UML Sequence Diagram
  participants: [
    {
      id: "User", // Unique identifier for the participant
      content: "User", // Label or name of the participant
      isActor: true, // Indicates that the participant is an actor
    },
    {
      id: "System", // Unique identifier for the participant
      content: "System", // Label or name of the participant
      isActor: false,
      showDestructionMarker: true, // Flag to show destruction marker at the end of the lifeline
    }
  ],
};

const snapSettings = { constraints: SnapConstraints.None };
const diagramRef = ref(null);

onMounted(() => {
  // Retrieve the diagram instance
  const diagramInstance = diagramRef.value.ej2Instances;
  diagramInstance.model = model;
  diagramInstance.updateFromModel();
});
</script>

<style scoped>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
</style>