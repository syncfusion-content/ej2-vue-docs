<template>
<div id="app">
    <button @click="addChildToLane">addChildToLane</button>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'swimlane',
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'ONLINE PURCHASE STATUS',
      },
      height: 50,
      style: { fontSize: 11 },
    },
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
        header: {
          annotation: { content: 'CUSTOMER' },
          width: 50,
          style: { fontSize: 11 },
        },
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 150,
        addInfo: { name: 'phase1' },
        header: { annotation: { content: 'Phase' } },
      },
    ],
    phaseSize: 20,
  },
  offsetX: 300,
  offsetY: 200,
  height: 200,
  width: 350,
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
    }
},
methods: {
  addChildToLane() {
      const diagramInstance = this.$refs.diagram.ej2Instances;
      const node = [
      {
        id: 'newNode',
        width: 100,
        height: 50,
      },
    ];
    diagramInstance.addNodeToLane(node, 'swimlane', 'stackCanvas1');
  }
},
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>