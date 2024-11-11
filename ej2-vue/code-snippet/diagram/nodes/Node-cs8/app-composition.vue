<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const diagram = ref(null);
const width = "100%";
const height = "350px";
const getNodeDefaults = (obj) => {
    obj.borderWidth = 1;
    obj.style = {
        fill: '#6BA5D7',
        strokeWidth: 2,
        strokeColor: '#6BA5D7'
    };
    return obj;
}
const size = () => {
      const selectedNode =
        this.$refs.diagram.ej2Instances.selectedItems.nodes.length > 0
          ? this.$refs.diagram.ej2Instances.selectedItems.nodes[0]
          : this.$refs.diagram.ej2Instances.nodes[0];
      this.$refs.diagram.ej2Instances.select([
        this.$refs.diagram.ej2Instances.nodes[0],
      ]);
      this.$refs.diagram.ej2Instances.copy();
      this.$refs.diagram.ej2Instances.paste();
    }
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
