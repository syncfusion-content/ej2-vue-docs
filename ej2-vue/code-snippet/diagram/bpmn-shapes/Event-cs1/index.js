
import Vue from 'vue';
import { DiagramPlugin,BpmnDiagrams,Diagram } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);
Vue.use(DiagramPlugin);
let nodes = [{
    // Position of the node
    offsetX: 150,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as Start and trigger as None
      event: {
        event: 'Start',
        trigger: 'None',
      },
    },
  },
  {
    // Position of the node
    offsetX: 350,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as Intermediate and trigger as None
      event: {
        event: 'Intermediate',
        trigger: 'None',
      },
    },
  },
  {
    // Position of the node
    offsetX: 550,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as End and trigger as None
      event: {
        event: 'End',
        trigger: 'None',
      },
    },
  },
  {
    // Position of the node
    offsetX: 150,
    offsetY: 350,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as NonInterruptingStart and trigger as Timer
      event: {
        event: 'NonInterruptingStart',
        trigger: 'Timer',
      },
    },
  },
  {
    // Position of the node
    offsetX: 350,
    offsetY: 350,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as NonInterruptingIntermediate and trigger as Escalation
      event: {
        event: 'NonInterruptingIntermediate',
        trigger: 'Escalation',
      },
    },
  },
  {
    // Position of the node
    offsetX: 550,
    offsetY: 350,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      // Sets event as ThrowingIntermediate and trigger as Compensation
      event: {
        event: 'ThrowingIntermediate',
        trigger: 'Compensation',
      },
    },
  }]

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

name: 'app'
data() {
    return {
        width: "100%",
        height: "600px",
        nodes: nodes,
    }
}

});