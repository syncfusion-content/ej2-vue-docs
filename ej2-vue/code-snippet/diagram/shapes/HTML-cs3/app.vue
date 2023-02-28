

<template>
  <div id="app">
    <ejs-diagram
    ref="diagram"
      id="diagram"
      :width='width'
      :height='height'
      :nodes = "nodes"
      :nodeTemplate="'Template'"
    >
    <template v-slot:Template="{data}">
       <div style="background-color:red">
           <button v-on:click="ZoomIn">{{data.id}}</button>
         </div>
      </template>
    </ejs-diagram>
  </div>
</template>

<script>
import Vue from "vue";
import { DiagramPlugin, AnnotationConstraints } from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
let nodes = [
  {
    //Id of the node
    id: "Node",
    //Position of the node
    offsetX: 250,
    offsetY: 250,
    //Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
      type: "HTML",
    },
  },
];

export default {
  name: "app",
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: nodes,
    };
  },
  methods: {
},
};
</script>


