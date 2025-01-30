<template>
    <div id="app">
        <button @click="flipHorizontal">flipHorizontal</button>
        <button @click="flipVertical">flipVertical</button>
        <button @click="flipBoth">flipBoth</button>
        <button @click="flipNone">flipNone</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, FlipDirection } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
        }
    },
    methods: {
        flipHorizontal() {
      //Flips the node horizontally
      this.$refs.diagram.ej2Instances.nodes[0].flip ^= FlipDirection.Horizontal;
      this.$refs.diagram.ej2Instances.dataBind();
    },
    flipVertical() {
       //Flips the node vertically
       this.$refs.diagram.ej2Instances.nodes[0].flip ^= FlipDirection.Vertical;
      this.$refs.diagram.ej2Instances.dataBind();
    },
    flipBoth() {
       //Flips the node horizontally and vertically
       this.$refs.diagram.ej2Instances.nodes[0].flip ^= FlipDirection.Both;
      this.$refs.diagram.ej2Instances.dataBind();
    },
    flipNone() {
       //Flip for node is none
       this.$refs.diagram.ej2Instances.nodes[0].flip = FlipDirection.None;
      this.$refs.diagram.ej2Instances.dataBind();
    },
  },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        diagramInstance.select([diagramInstance.nodes[0]]);
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
