
import Vue from 'vue';
import { DiagramPlugin,BpmnDiagrams,Diagram,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);

Vue.use(DiagramPlugin);

let nodes = [{
    id: 'start',
    height: 50,
    width: 50,
    margin: { left: 50, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event' },
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