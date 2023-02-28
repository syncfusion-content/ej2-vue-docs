
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
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets loop of the task as Standard
            task: {
                loop: 'Standard'
            }
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
    //Sets type as Bpmn and shape as activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets Activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and loop as Standard
            subProcess: {
                collapsed: true,
                loop: 'Standard'
            }
            as BpmnSubProcessModel
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
            height: "350px",
            nodes: nodes,
        }
    }

});