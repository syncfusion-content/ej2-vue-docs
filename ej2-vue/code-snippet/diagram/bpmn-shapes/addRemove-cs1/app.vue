<template>
  <div id="app">
    <ejs-button v-on:click="addProcess">Add process </ejs-button>
    <ejs-button v-on:click="removeProcess">Remove process </ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import {
  DiagramComponent,
  BpmnDiagrams,
  NodeConstraints,
} from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [
  {
    id: 'start',
    height: 50,
    width: 50,
    margin: { left: 50, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event' },
  },
  {
    id: 'event2',
    height: 50,
    width: 50,
    margin: { left: 150, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event', event: { type: '' } },
  },
  {
    id: 'subProcess',
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      shape: 'Activity',
      type: 'Bpmn',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          collapsed: false,
          processes: ['start'],
        },
      },
    },
  }
];

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-button': ButtonComponent,
  },
  data() {
    return {
      width: '100%',
      height: '600px',
      nodes: nodes,
    };
  },
  provide: {
    diagram: [BpmnDiagrams],
  },
  methods: {
    addProcess: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      let event = diagramInstance.nameTable['event2'];
      /**
       * parameter 1 - A process to be added
       * parameter 2 - A string representing the parent ID where the process will be added.
       */
      diagramInstance.addProcess(event, 'subProcess');
    },
    removeProcess: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.removeProcess('event2');
    },
  },

};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
