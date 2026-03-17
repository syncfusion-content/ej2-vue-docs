<template>
    <div id="app">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let connector = {
    // Name of the connector
    id: "connector1",
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
let connectoradd = {
  // Name of the connector
  id: "connector",
  // Sets source and target points
  sourcePoint: {
      x: 200,
      y: 100
  },
  targetPoint: {
      x: 300,
      y: 200
  }
  }

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
        }

    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        // Adds to the diagram
        diagramInstance.add(connector)
    },
    methods: {
    add() {
        // Adds connector to the diagram
        this.$refs.diagram.ej2Instances.add(connectoradd);
    },
    remove() {
        // remove connector from the diagram
        this.$refs.diagram.ej2Instances.remove(connector);
    },
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
