<template>
    <div id="app">
        <script id="annotationTemplate" >
          <div style="width:100%;height:100%;overflow:hidden"><input type="button" value="Node"
          style="width:100px;" /></div>
        </script>
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :annotationTemplate='annotationTemplate'></ejs-diagram>
    </div>
</template>
<script>
import { createApp } from "vue";
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let itemVue = createApp({}).component("nodeTemplate", {
  template: `<div><button type="button" style="width:100px"> Button</button></div> `,
  data() {
    return {};
  }
});

let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the Node
    annotations: [{
      
    }]
}];

let connectors = [{
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    // Sets the Annotation for the Connector
    annotations: [{
        height: 20
    }]
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
            annotationTemplate: function () {
              return { template: itemVue };
            },
        }
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
