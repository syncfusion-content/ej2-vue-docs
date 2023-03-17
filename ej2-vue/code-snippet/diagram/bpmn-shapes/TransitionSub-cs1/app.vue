

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
</template>
<script>
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
    //Sets type as Bpmn and shape as activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets collapsed as true and type as Transition
            subProcess: {
                collapsed: true,
                type: 'Transaction',
                //Sets event as Intermediate and trigger as Cancel
                event: [{
                        event: 'Intermediate',
                        trigger: 'Cancel',
                        offset: {
                            x: 0.25,
                            y: 1
                        }
                    },
                    {
                        event: 'Intermediate',
                        trigger: 'Error',
                        offset: {
                            x: 0.25,
                            y: 1
                        }
                    },
                ]
            }
            as BpmnSubProcessModel
        },
    },
}]
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


