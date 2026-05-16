<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
const connectors = [{
id: 'connector1',
sourcePoint: {
  x: 100,
  y: 100,
},
targetPoint: {
  x: 200,
  y: 200,
},
},{
id: 'connector2',
sourcePoint: {
  x: 300,
  y: 100,
},
targetPoint: {
  x: 400,
  y: 200,
},
}]

const width = "100%";
const height = "350px";
const getConnectorDefaults =(connector)=> {
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.style.strokeColor = 'red';
    connector.sourceDecorator.shape = 'Circle';
    return connector;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
