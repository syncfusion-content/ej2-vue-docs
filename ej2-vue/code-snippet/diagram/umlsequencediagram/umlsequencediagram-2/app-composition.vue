<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="700px" :snapSettings='snapSettings'/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { UmlSequenceMessageType, SnapConstraints } from '@syncfusion/ej2-diagrams';

// Define the UML Sequence Diagram model with participants and messages
const model = {
  // Defines the participants involved in the sequence diagram
  participants: [
    { id: "User", content: "User", isActor: true, }, // User as an actor
    { id: "System", content: "System", isActor: false, showDestructionMarker: true, }, // System participant
    { id: "Logger", content: "Logger", isActor: false, showDestructionMarker: true, }, // Logger participant
    { id: "SessionManager", content: "SessionManager", isActor: false, } // SessionManager participant
  ],
  // Define messages exchanged between participants
  messages: [
    // User sends login request to System via Synchronous message
    {
      id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
      type: UmlSequenceMessageType.Synchronous
    },
    // System replies to User with login response via Reply message
    {
      id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
      type: UmlSequenceMessageType.Reply
    },
    // System sends log event to Logger via Asynchronous message
    {
      id: "MSG3", content: "Log Event", fromParticipantID: "System", toParticipantID: "Logger",
      type: UmlSequenceMessageType.Asynchronous
    },
    // System requests SessionManager to create session via Create message
    {
      id: "MSG4", content: "Create Session", fromParticipantID: "System", toParticipantID: "SessionManager",
      type: UmlSequenceMessageType.Create
    },
    // System requests SessionManager to delete session via Delete message
    {
      id: "MSG5", content: "Delete Session", fromParticipantID: "System", toParticipantID: "SessionManager",
      type: UmlSequenceMessageType.Delete
    },
    // System validates inputs itself via Self message
    {
      id: "MSG6", content: "Validate Inputs", fromParticipantID: "System", toParticipantID: "System",
      type: UmlSequenceMessageType.Self
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