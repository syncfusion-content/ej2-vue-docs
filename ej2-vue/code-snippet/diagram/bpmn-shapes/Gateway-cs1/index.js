
import Vue from 'vue';
import { DiagramPlugin,BpmnDiagrams,Diagram,BpmnGatewayModel } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);
Vue.use(DiagramPlugin);
let nodes = [{
    // Position of the node
    offsetX: 150,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Gateway
    shape: {
      type: 'Bpmn',
      shape: 'Gateway',
      //Sets type of the gateway as None
      gateway: {
        type: 'None',
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
      shape: 'Gateway',
      //Sets type of the gateway as Inclusive
      gateway: {
        type: 'Inclusive',
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
      shape: 'Gateway',
      //Sets type of the gateway as Exclusive
      gateway: {
        type: 'Exclusive',
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
      shape: 'Gateway',
      //Sets type of the gateway as Parallel
      gateway: {
        type: 'Parallel',
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
      shape: 'Gateway',
      //Sets type of the gateway as ParallelEventBased
      gateway: {
        type: 'ParallelEventBased',
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
      shape: 'Gateway',
      //Sets type of the gateway as EventBased
      gateway: {
        type: 'EventBased',
      },
    },
  },
  {
    // Position of the node
    offsetX: 150,
    offsetY: 550,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Gateway',
      //Sets type of the gateway as ExclusiveEventBased
      gateway: {
        type: 'ExclusiveEventBased',
      },
    },
  },
  {
    // Position of the node
    offsetX: 350,
    offsetY: 550,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as event
    shape: {
      type: 'Bpmn',
      shape: 'Gateway',
      //Sets type of the gateway as Complex
      gateway: {
        type: 'Complex',
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