<template>
  <div id="app">
    <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="700px" :snapSettings='snapSettings'/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { UmlSequenceMessageType, UmlSequenceFragmentType, SnapConstraints } from '@syncfusion/ej2-diagrams';

// Define the UML Sequence Diagram model
const model = {
  // Define the space between participants
  spaceBetweenParticipants: 300,
  participants: [
    { id: "Customer", content: "Customer", isActor: true, },
    { id: "OrderSystem", content: "Order System", isActor: false, },
    { id: "PaymentGateway", content: "Payment Gateway", isActor: false, }
  ],
  // Define the messages passed between participants
  messages: [
    {
      id: "MSG1", content: "Place Order", fromParticipantID: "Customer", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG2", content: "Check Stock Availability", fromParticipantID: "OrderSystem", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG3", content: "Stock Available", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG4", content: "Process Payment", fromParticipantID: "OrderSystem", toParticipantID: "PaymentGateway",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG5", content: "Payment Successful", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG6", content: "Order Confirmed and Shipped", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG7", content: "Payment Failed", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG8", content: "Retry Payment", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    }
  ],
  // Define fragments for conditional visual representation
  fragments: [
    // Child Fragment 1 (Optional)
    {
      id: 1,
      type: UmlSequenceFragmentType.Optional,
      conditions: [
        {
          content: "if item is in stock",
          messageIds: ["MSG4"]
        }
      ]
    },
    // Child Fragment 2 (Alternative)
    {
      id: 2,
      type: UmlSequenceFragmentType.Alternative,
      conditions: [
        {
          content: "if payment is successful",
          messageIds: ["MSG5", "MSG6"]
        },
        {
          content: "if payment fails",
          messageIds: ["MSG7", "MSG8"]
        }
      ]
    },
    // Parent Fragment (Loop)
    {
      id: 3,
      type: UmlSequenceFragmentType.Loop,
      conditions: [
        {
          content: "while attempts less than 3",
          // Use IDs of child fragments for nested conditions
          fragmentIds: ['1', '2'],
        }
      ]
    },
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