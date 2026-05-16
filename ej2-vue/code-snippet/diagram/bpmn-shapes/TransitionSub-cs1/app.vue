<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
      // Position of the node
      offsetX: 350,
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
          //Sets the collapsed as true and type as Event
          subProcess: {
            collapsed: true,
            type: 'Transaction',
            //Sets transaction
            transaction: {
              success: {
                id: 'success',
                event: 'Start',
                trigger: 'None',
              },
              failure: {
                id: 'failure',
                event: 'ThrowingIntermediate',
                trigger: 'Error',
              },
              cancel: {
                id: 'cancel',
                event: 'End',
                trigger: 'Cancel',
              },
            },
          },
        },
      },
    }]

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    },
    provide: {
        diagram: [BpmnDiagrams]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>