<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const nodes = [
  { id: 'Action', shape: { type: 'UmlActivity', shape: 'Action' },offsetX:100,offsetY:100,height:100,width:100 },
  { id: 'Decision', shape: { type: 'UmlActivity', shape: 'Decision' },offsetX:300,offsetY:100,height:100,width:100  },
  { id: 'MergeNode', shape: { type: 'UmlActivity', shape: 'MergeNode' },offsetX:500,offsetY:100,height:100,width:100  },
  { id: 'InitialNode', shape: { type: 'UmlActivity', shape: 'InitialNode' },offsetX:100,offsetY:300,height:100,width:100  },
  { id: 'FinalNode', shape: { type: 'UmlActivity', shape: 'FinalNode' },offsetX:300,offsetY:300,height:100,width:100  },
  { id: 'ForkNode', shape: { type: 'UmlActivity', shape: 'ForkNode' },offsetX:500,offsetY:300,height:100,width:100},
  { id: 'JoinNode', shape: { type: 'UmlActivity', shape: 'JoinNode' },offsetX:100,offsetY:500,height:100,width:100 },
  { id: 'TimeEvent', shape: { type: 'UmlActivity', shape: 'TimeEvent' },offsetX:300,offsetY:500,height:100,width:100 },
  { id: 'AcceptingEvent', shape: { type: 'UmlActivity', shape: 'AcceptingEvent' },offsetX:500,offsetY:500,height:100,width:100 },
  { id: 'SendSignal', shape: { type: 'UmlActivity', shape: 'SendSignal' },offsetX:100,offsetY:700,height:100,width:100 },
  { id: 'ReceiveSignal', shape: { type: 'UmlActivity', shape: 'ReceiveSignal' },offsetX:300,offsetY:700,height:100,width:100 },
  { id: 'StructuredNode', shape: { type: 'UmlActivity', shape: 'StructuredNode' },offsetX:500,offsetY:700,height:100,width:100 },
  { id: 'Note', shape: { type: 'UmlActivity', shape: 'Note' },offsetX:100,offsetY:900,height:100,width:100 }
  
]

const width = "100%";
const height = "350px";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
