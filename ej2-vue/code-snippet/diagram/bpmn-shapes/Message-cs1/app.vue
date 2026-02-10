<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, BpmnDiagrams } from '@syncfusion/ej2-vue-diagrams';

let connectors = [{
    
  sourcePoint: {
      x: 100,
      y: 100
  },
  targetPoint: {
      x: 300,
      y: 100
  },
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Message, and message as Default
  shape: {
      type: 'Bpmn',
      flow: 'Message',
      message: 'Default'
  },
},
{
  
  sourcePoint: {
      x: 100,
      y: 200
  },
  targetPoint: {
      x: 300,
      y: 200
  },
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Message, and message as NonInitiatingMessage
  shape: {
      type: 'Bpmn',
      flow: 'Message',
      message: 'NonInitiatingMessage'
  },
},
{
  
  sourcePoint: {
      x: 100,
      y: 300
  },
  targetPoint: {
      x: 300,
      y: 300
  },
  type: 'Orthogonal',
  //Sets type as Bpmn, flow as Message, and message as InitiatingMessage
  shape: {
      type: 'Bpmn',
      flow: 'Message',
      message: 'InitiatingMessage'
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
            connectors: connectors
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
