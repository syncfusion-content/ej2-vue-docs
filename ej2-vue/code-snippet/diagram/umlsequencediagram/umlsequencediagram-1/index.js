import Vue from 'vue';
import { DiagramPlugin, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

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
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :snapSettings='snapSettings'/>
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
