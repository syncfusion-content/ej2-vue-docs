
import Vue from 'vue';
import { DiagramPlugin,BpmnDiagrams,Diagram,BpmnGatewayModel,BpmnSubProcessModel } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);

Vue.use(DiagramPlugin);

let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Call
            subProcess: {
                collapsed: true,
                boundary: 'Call'
            }
        },
    },
},
{
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Event
            subProcess: {
                collapsed: true,
                boundary: 'Event'
            }
        },
    },
},
{
    // Position of the node
    offsetX: 650,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and boundary as Default
            subProcess: {
                collapsed: false,
                boundary: 'Default'
            }
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