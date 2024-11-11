
import Vue from 'vue';
import { DiagramPlugin,BpmnDiagrams,Diagram,BpmnGatewayModel,BpmnSubProcessModel } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);

Vue.use(DiagramPlugin);

let nodes = [{
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ content: 'Standard', offset: { x: 0.5, y: 1.2 } }],
    //Sets type as Bpmn and shape as Activity
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      //Sets activity as Task
      activity: {
        activity: 'Task',
        //Sets loop of the task as Standard
        task: {
          loop: 'Standard',
        },
      },
    },
  },
  {
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ content: 'None', offset: { x: 0.5, y: 1.2 } }],
    //Sets type as Bpmn and shape as activity
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      //Sets Activity as SubProcess
      activity: {
        activity: 'SubProcess',
        //Sets collapsed as true and loop as None
        subProcess: {
          collapsed: true,
          loop: 'None',
        },
      },
    },
  },
  {
    // Position of the node
    offsetX: 500,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      { content: 'ParallelMultiInstance', offset: { x: 0.5, y: 1.2 } },
    ],
    //Sets type as Bpmn and shape as activity
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      //Sets Activity as SubProcess
      activity: {
        activity: 'SubProcess',
        //Sets collapsed as true and loop as ParallelMultiInstance
        subProcess: {
          collapsed: true,
          loop: 'ParallelMultiInstance',
        },
      },
    },
  },
  {
    // Position of the node
    offsetX: 700,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [
      { content: 'SequenceMultiInstance', offset: { x: 0.5, y: 1.2 } },
    ],
    //Sets type as Bpmn and shape as activity
    shape: {
      type: 'Bpmn',
      shape: 'Activity',
      //Sets Activity as SubProcess
      activity: {
        activity: 'SubProcess',
        //Sets collapsed as true and loop as SequenceMultiInstance
        subProcess: {
          collapsed: true,
          loop: 'SequenceMultiInstance',
        },
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