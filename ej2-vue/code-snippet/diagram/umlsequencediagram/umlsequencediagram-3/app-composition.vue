<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :snapSettings='snapSettings'/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { UmlSequenceMessageType, SnapConstraints } from '@syncfusion/ej2-diagrams';

// Define the UML Sequence Diagram model with participants and activation boxes
const model = {
  // Defines the participants involved in the sequence diagram
  participants: [
    {
      id: "User",
      content: "User",
      isActor: true,
    },
    {
      id: "System",
      content: "System",
      isActor: false,
      showDestructionMarker: true,
      // Activation boxes for System
      activationBoxes: [
        {
          id: "ActSystem", // Unique identifier for the activation box
          startMessageID: "MSG1", // Message ID that marks the start of the activation
          endMessageID: "MSG2" // Message ID that marks the end of the activation
        }
      ]
    }
  ],
  // Define messages exchanged between participants
  messages: [
    {
      id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
      type: UmlSequenceMessageType.Reply
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

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>