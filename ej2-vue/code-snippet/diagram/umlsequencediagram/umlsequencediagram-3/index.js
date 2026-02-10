import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
import { UmlSequenceMessageType, SnapConstraints } from '@syncfusion/ej2-diagrams';

Vue.use(DiagramPlugin);

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

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :snapSettings='snapSettings'></ejs-diagram>
    </div>
    `,
      data() {
      return {
          snapSettings: snapSettings
      }
  },
  mounted() {
    // Retrieve the diagram instance
    const diagramInstance = this.$refs.diagramRef.ej2Instances;
    diagramInstance.model = model;
    diagramInstance.updateFromModel();
  },
});
